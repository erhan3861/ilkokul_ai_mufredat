/* =========================================================================
   Küp Avcısı — Işık Tüneli  |  Three.js
   1–2. Sınıf • Mouse Becerileri • Adım 1 (Ana hedef: TIKLAMA)
   -------------------------------------------------------------------------
   Teknik mantık (flythru wireframe wormhole):
     1) Rastgele noktalardan kapalı bir CatmullRomCurve3 (spline) üretilir.
     2) Bu eğri boyunca TubeGeometry oluşturulur; EdgesGeometry ile tel kafes
        (wireframe) hâline getirilir ve köşe renkleriyle boyanır.
     3) Kamera her karede eğri üzerinde ilerler (getPointAt) ve biraz ilerisine
        bakar (lookAt) -> tünelde uçuş hissi.
     4) Küpler, eğrinin Frenet çerçeveleri (normal/binormal) kullanılarak tünel
        duvarına yakın yerlere serpiştirilir.
     5) Çocuk küpe TIKLAR -> ışın (raycaster) küpü bulur, küp patlar, yıldız
        kazanılır. Küçük eller için görünmez ve daha büyük bir "tıklama kutusu"
        kullanılır, böylece tam isabet gerekmez.
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1) AYARLAR                                                          */
  /* ------------------------------------------------------------------ */

  var AYAR = {
    tupYaricap: 1.0,
    tupBoyunaBolum: 420,
    tupCevreBolum: 16,
    cerceveSayisi: 480,
    kupSayisi: 24,
    kupBoyut: 0.30,
    kolayCarpan: 1.55,      // "Büyük Küpler" modu
    tiklamaPayi: 2.3,       // görünmez tıklama kutusu büyüklüğü
    duvarPayi: 0.52         // küplerin merkezden uzaklığı (tüp yarıçapının oranı)
  };

  var HIZLAR = [
    { ad: 'Yavaş',  emoji: '🐢', sure: 55 },
    { ad: 'Normal', emoji: '🚀', sure: 35 },
    { ad: 'Hızlı',  emoji: '⚡', sure: 22 }
  ];

  var TEMALAR = [
    { ad: 'Gökkuşağı', h1: 0.00, h2: 1.00, zemin: 0x05060F },
    { ad: 'Neon Mavi', h1: 0.48, h2: 0.68, zemin: 0x030A18 },
    { ad: 'Şeker',     h1: 0.78, h2: 1.02, zemin: 0x140418 },
    { ad: 'Orman',     h1: 0.22, h2: 0.42, zemin: 0x03120A }
  ];

  var ALKISLAR = ['Süpersin! 🎉', 'Harikasın! ⭐', 'Çok iyi! 👏', 'Bravo! 🏆', 'Devam et! 🚀'];
  var ISABET = ['Yakaladın! ✨', 'Süper atış! 🎯', 'Tam isabet! 💥', 'Bir tane daha! ⭐'];

  var SESLENDIR = 'Küp avcısı. Işık tünelinde uçuyorsun. Parlayan bir küp gördüğünde ' +
                  'farenin sol tuşuyla üzerine bir kere tıkla. Bütün küpleri toplayınca yeni tünel açılır.';

  /* ------------------------------------------------------------------ */
  /* 2) DURUM                                                            */
  /* ------------------------------------------------------------------ */

  var renderer, sahne, kamera, saat;
  var egri, tupGeo, tupCizgi, cerceveler;
  var kupGrubu, kupler = [], tiklamaHedefleri = [];
  var kutuGeo, kenarGeo, gizliMalzeme;

  var hizIx = 0, temaIx = 0, turNo = 1, yildiz = 0;
  var duraklatildi = false, kolayMod = false, sesAcik = true;
  var yol = 0;                         // eğri üzerindeki konum (0..1)

  var raycaster, fareNDC;
  var kameraPoz, bakisPoz, geciciVec;

  var ogeler = {}, sesCtx = null;

  /* ------------------------------------------------------------------ */
  /* 3) YARDIMCILAR                                                      */
  /* ------------------------------------------------------------------ */

  function $(id) { return document.getElementById(id); }
  function rastgele(a, b) { return a + Math.random() * (b - a); }
  function sec(d) { return d[(Math.random() * d.length) | 0]; }

  function sesKur() {
    if (sesCtx) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) sesCtx = new AC();
    } catch (e) { sesCtx = null; }
  }

  function calSes(f1, f2, sure, tur, ses) {
    if (!sesAcik || !sesCtx) return;
    if (sesCtx.state === 'suspended') { try { sesCtx.resume(); } catch (e) { } }
    var t = sesCtx.currentTime;
    var osc = sesCtx.createOscillator(), kaz = sesCtx.createGain();
    osc.type = tur || 'sine';
    osc.frequency.setValueAtTime(f1, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, f2), t + sure);
    kaz.gain.setValueAtTime(0.0001, t);
    kaz.gain.exponentialRampToValueAtTime(ses === undefined ? 0.2 : ses, t + 0.02);
    kaz.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    osc.connect(kaz); kaz.connect(sesCtx.destination);
    osc.start(t); osc.stop(t + sure + 0.03);
  }

  function sesIsabet() { calSes(760, 1650, 0.18, 'triangle'); }
  function sesIska()   { calSes(180, 120, 0.09, 'sine', 0.07); }
  function sesTik()    { calSes(600, 900, 0.10, 'square', 0.10); }
  function sesAlkis() {
    if (!sesAcik || !sesCtx) return;
    [523, 659, 784, 1046, 1318].forEach(function (f, i) {
      setTimeout(function () { calSes(f, f * 1.02, 0.2, 'triangle'); }, i * 95);
    });
  }

  function konus(metin) {
    if (!sesAcik || !('speechSynthesis' in window)) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(metin);
      u.lang = 'tr-TR'; u.rate = 0.92; u.pitch = 1.12;
      var btn = ogeler.btnDinle;
      if (btn) {
        btn.classList.add('konusuyor');
        u.onend = u.onerror = function () { btn.classList.remove('konusuyor'); };
      }
      speechSynthesis.speak(u);
    } catch (e) { }
  }

  var balonZaman = null;
  function balon(metin, sure) {
    var b = ogeler.balon;
    if (!b) return;
    b.textContent = metin;
    b.classList.remove('gizli');
    if (balonZaman) clearTimeout(balonZaman);
    if (sure) balonZaman = setTimeout(function () { b.classList.add('gizli'); }, sure);
  }

  function yildizEkle(n) {
    yildiz += n;
    ogeler.skorSayi.textContent = yildiz;
    ogeler.skorKutu.classList.remove('zipla');
    void ogeler.skorKutu.offsetWidth;
    ogeler.skorKutu.classList.add('zipla');
  }

  function konfetiPatlat(adet) {
    var kap = ogeler.konfeti;
    if (!kap) return;
    var renkler = ['#FFD84D', '#FF7BAC', '#8B6BFF', '#29D1C6', '#4ED97B', '#7DF5FF'];
    for (var i = 0; i < adet; i++) {
      var p = document.createElement('i');
      p.style.left = rastgele(2, 96) + '%';
      p.style.background = sec(renkler);
      p.style.animationDelay = (Math.random() * 0.35) + 's';
      kap.appendChild(p);
      (function (el) { setTimeout(function () { el.remove(); }, 2200); })(p);
    }
  }

  /* ------------------------------------------------------------------ */
  /* 4) TÜNEL (spline + tüp + tel kafes)                                 */
  /* ------------------------------------------------------------------ */

  function yolEgrisiUret() {
    var noktalar = [];
    var adet = 12;
    for (var i = 0; i < adet; i++) {
      var a = (i / adet) * Math.PI * 2;
      var r = rastgele(7, 12);
      noktalar.push(new THREE.Vector3(
        Math.cos(a) * r,
        rastgele(-4.5, 4.5),
        Math.sin(a) * r
      ));
    }
    return new THREE.CatmullRomCurve3(noktalar, true, 'catmullrom', 0.5);
  }

  function tuneliKur() {
    tuneliSil();

    egri = yolEgrisiUret();
    cerceveler = egri.computeFrenetFrames(AYAR.cerceveSayisi, true);

    tupGeo = new THREE.TubeGeometry(egri, AYAR.tupBoyunaBolum, AYAR.tupYaricap,
                                    AYAR.tupCevreBolum, true);
    var kenar = new THREE.EdgesGeometry(tupGeo, 0.2);

    // köşe renkleri: tünel boyunca renk geçişi
    var T = TEMALAR[temaIx];
    var sayi = kenar.attributes.position.count;
    var renkler = new Float32Array(sayi * 3);
    var c = new THREE.Color();
    for (var i = 0; i < sayi; i++) {
      var oran = (i / sayi) * 3 % 1;                       // 3 tur renk döngüsü
      c.setHSL((T.h1 + (T.h2 - T.h1) * oran) % 1, 0.95, 0.58);
      renkler[i * 3] = c.r; renkler[i * 3 + 1] = c.g; renkler[i * 3 + 2] = c.b;
    }
    kenar.setAttribute('color', new THREE.BufferAttribute(renkler, 3));

    tupCizgi = new THREE.LineSegments(kenar, new THREE.LineBasicMaterial({ vertexColors: true }));
    sahne.add(tupCizgi);

    sahne.fog = new THREE.FogExp2(T.zemin, 0.16);
    renderer.setClearColor(T.zemin, 1);

    kupleriKur();
    yol = 0;
  }

  function tuneliSil() {
    if (tupCizgi) {
      sahne.remove(tupCizgi);
      tupCizgi.geometry.dispose();
      tupCizgi.material.dispose();
      tupCizgi = null;
    }
    if (tupGeo) { tupGeo.dispose(); tupGeo = null; }
  }

  /* Eğri üzerinde, tünel duvarına yakın bir nokta üretir */
  function duvardaNokta(p, aci, r, hedef) {
    var i = Math.floor(p * AYAR.cerceveSayisi) % AYAR.cerceveSayisi;
    egri.getPointAt(p % 1, hedef);
    var n = cerceveler.normals[i], b = cerceveler.binormals[i];
    hedef.addScaledVector(n, Math.cos(aci) * r);
    hedef.addScaledVector(b, Math.sin(aci) * r);
    return hedef;
  }

  /* ------------------------------------------------------------------ */
  /* 5) KÜPLER                                                           */
  /* ------------------------------------------------------------------ */

  function kupleriKur() {
    kupleriSil();

    var T = TEMALAR[temaIx];
    var boyut = AYAR.kupBoyut * (kolayMod ? AYAR.kolayCarpan : 1);
    var poz = new THREE.Vector3();

    for (var i = 0; i < AYAR.kupSayisi; i++) {
      var p = (i + rastgele(0.2, 0.8)) / AYAR.kupSayisi;
      var aci = rastgele(0, Math.PI * 2);
      duvardaNokta(p, aci, AYAR.tupYaricap * AYAR.duvarPayi, poz);

      var renk = new THREE.Color().setHSL(
        (T.h1 + (T.h2 - T.h1) * ((i / AYAR.kupSayisi) * 2 % 1) + 0.5) % 1, 1.0, 0.62);

      var grup = new THREE.Group();
      grup.position.copy(poz);
      grup.rotation.set(rastgele(0, 6.28), rastgele(0, 6.28), rastgele(0, 6.28));

      var dolu = new THREE.Mesh(kutuGeo, new THREE.MeshBasicMaterial({
        color: renk, transparent: true, opacity: 0.34
      }));
      dolu.scale.setScalar(boyut);

      var kenarlar = new THREE.LineSegments(kenarGeo, new THREE.LineBasicMaterial({ color: renk }));
      kenarlar.scale.setScalar(boyut);

      var tiklama = new THREE.Mesh(kutuGeo, gizliMalzeme);       // görünmez, geniş hedef
      tiklama.scale.setScalar(boyut * AYAR.tiklamaPayi);

      grup.add(dolu); grup.add(kenarlar); grup.add(tiklama);
      kupGrubu.add(grup);

      var kup = {
        grup: grup, dolu: dolu, kenarlar: kenarlar, tiklama: tiklama,
        p: p, boyut: boyut, toplandi: false, animasyon: 0,
        donusX: rastgele(-0.7, 0.7), donusY: rastgele(-0.7, 0.7)
      };
      tiklama.userData.kup = kup;
      kupler.push(kup);
      tiklamaHedefleri.push(tiklama);
    }
    kalaniYaz();
  }

  function kupleriSil() {
    kupler.forEach(function (k) {
      kupGrubu.remove(k.grup);
      k.dolu.material.dispose();
      k.kenarlar.material.dispose();
    });
    kupler = [];
    tiklamaHedefleri = [];
  }

  function kalanSayisi() {
    var n = 0;
    for (var i = 0; i < kupler.length; i++) if (!kupler[i].toplandi) n++;
    return n;
  }

  function kalaniYaz() {
    if (ogeler.kalanSayi) ogeler.kalanSayi.textContent = kalanSayisi();
  }

  function kupuTopla(k) {
    if (k.toplandi) return;
    k.toplandi = true;
    k.animasyon = 0.0001;
    k.tiklama.userData.kup = null;

    var ix = tiklamaHedefleri.indexOf(k.tiklama);
    if (ix >= 0) tiklamaHedefleri.splice(ix, 1);

    sesIsabet();
    yildizEkle(1);
    kalaniYaz();

    var kalan = kalanSayisi();
    if (kalan === 0) {
      konfetiPatlat(50);
      sesAlkis();
      balon('Bütün küpleri topladın! ' + sec(ALKISLAR));
      konus('Bütün küpleri topladın. Harikasın! Yeni tünel geliyor.');
      setTimeout(yeniTur, 2800);
    } else if (kalan % 6 === 0) {
      balon(sec(ALKISLAR) + ' ' + kalan + ' küp kaldı.', 2000);
    } else {
      balon(sec(ISABET), 1200);
    }
  }

  function yeniTur() {
    turNo++;
    if (ogeler.turSayi) ogeler.turSayi.textContent = turNo;
    tuneliKur();
    balon('Tur ' + turNo + ' başladı! 🚀', 2400);
  }

  /* ------------------------------------------------------------------ */
  /* 6) SAHNE                                                            */
  /* ------------------------------------------------------------------ */

  function sahneKur() {
    var kap = ogeler.sahne;

    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(kap.clientWidth, Math.max(1, kap.clientHeight), false);
    kap.appendChild(renderer.domElement);

    sahne = new THREE.Scene();
    kamera = new THREE.PerspectiveCamera(75, kap.clientWidth / Math.max(1, kap.clientHeight), 0.01, 120);

    saat = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    fareNDC = new THREE.Vector2();
    kameraPoz = new THREE.Vector3();
    bakisPoz = new THREE.Vector3();
    geciciVec = new THREE.Vector3();

    kupGrubu = new THREE.Group();
    sahne.add(kupGrubu);

    // tüm küpler aynı geometriyi paylaşır (hafıza + hız)
    kutuGeo = new THREE.BoxGeometry(1, 1, 1);
    kenarGeo = new THREE.EdgesGeometry(kutuGeo);
    // görünmez ama ışın testine yakalanan malzeme (visible:false yerine
    // colorWrite/depthWrite kapalı: her three.js sürümünde güvenle raycast edilir)
    gizliMalzeme = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });

    tuneliKur();
    boyutGuncelle();
  }

  function boyutGuncelle() {
    var kap = ogeler.sahne;
    var g = Math.max(1, kap.clientWidth), y = Math.max(1, kap.clientHeight);
    kamera.aspect = g / y;
    kamera.updateProjectionMatrix();

    var olcek = window.__sahneOlcek || 1;
    var dpr = (window.devicePixelRatio || 1) * Math.max(1, Math.min(olcek, 2));
    renderer.setPixelRatio(Math.min(dpr, 2.5));
    renderer.setSize(g, y, false);
  }

  /* ------------------------------------------------------------------ */
  /* 7) TIKLAMA                                                          */
  /* ------------------------------------------------------------------ */

  function tiklandi(e) {
    sesKur();
    var r = renderer.domElement.getBoundingClientRect();
    fareNDC.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    fareNDC.y = -((e.clientY - r.top) / r.height) * 2 + 1;

    raycaster.setFromCamera(fareNDC, kamera);
    var vurus = raycaster.intersectObjects(tiklamaHedefleri, false)[0];

    if (vurus && vurus.object.userData.kup) {
      kupuTopla(vurus.object.userData.kup);
    } else {
      sesIska();
    }
    e.preventDefault();
  }

  /* ------------------------------------------------------------------ */
  /* 8) DÖNGÜ                                                            */
  /* ------------------------------------------------------------------ */

  function dongu() {
    requestAnimationFrame(dongu);
    var dt = Math.min(saat.getDelta(), 0.05);
    var t = saat.elapsedTime;

    // kamerayı eğri üzerinde ilerlet
    if (!duraklatildi) yol = (yol + dt / HIZLAR[hizIx].sure) % 1;
    egri.getPointAt(yol, kameraPoz);
    egri.getPointAt((yol + 0.006) % 1, bakisPoz);
    kamera.position.copy(kameraPoz);
    kamera.lookAt(bakisPoz);

    // küpler: dönsün, yaklaşınca büyüyüp parlasın, toplanınca patlasın
    for (var i = 0; i < kupler.length; i++) {
      var k = kupler[i];

      if (k.toplandi) {
        if (k.animasyon > 0) {
          k.animasyon += dt;
          var a = Math.min(1, k.animasyon / 0.38);
          var b = k.boyut * (1 + a * 2.4);
          k.dolu.scale.setScalar(b);
          k.kenarlar.scale.setScalar(b);
          k.dolu.material.opacity = 0.34 * (1 - a);
          k.kenarlar.material.opacity = 1 - a;
          k.kenarlar.material.transparent = true;
          if (a >= 1) { k.grup.visible = false; k.animasyon = 0; }
        }
        continue;
      }

      k.grup.rotation.x += dt * k.donusX;
      k.grup.rotation.y += dt * k.donusY;

      var uzaklik = k.grup.position.distanceTo(kamera.position);
      var nabiz = 1 + Math.sin(t * 4 + i) * 0.07;
      if (uzaklik < 7) nabiz *= 1 + (7 - uzaklik) * 0.05;      // yaklaşınca dikkat çeksin
      k.dolu.scale.setScalar(k.boyut * nabiz);
      k.kenarlar.scale.setScalar(k.boyut * nabiz);
    }

    renderer.render(sahne, kamera);
  }

  /* ------------------------------------------------------------------ */
  /* 9) ARAYÜZ                                                           */
  /* ------------------------------------------------------------------ */

  function hiziYaz() {
    ogeler.hizEmoji.textContent = HIZLAR[hizIx].emoji;
    ogeler.hizAd.textContent = HIZLAR[hizIx].ad;
  }

  function fotografCek() {
    try {
      renderer.render(sahne, kamera);
      var url = renderer.domElement.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = url; a.download = 'kup-avcisi.png';
      document.body.appendChild(a); a.click(); a.remove();
      balon('Fotoğrafın indirildi! 📸', 2400);
    } catch (e) {
      balon('Fotoğraf kaydedilemedi 😅', 2400);
    }
  }

  function dugmeleriBagla() {
    ogeler.btnHiz.addEventListener('click', function () {
      sesKur(); sesTik();
      hizIx = (hizIx + 1) % HIZLAR.length;
      hiziYaz();
      balon('Hız: ' + HIZLAR[hizIx].ad + ' ' + HIZLAR[hizIx].emoji, 1800);
    });

    ogeler.btnDurakla.addEventListener('click', function () {
      sesKur(); sesTik();
      duraklatildi = !duraklatildi;
      ogeler.duraklaEmoji.textContent = duraklatildi ? '▶️' : '⏸️';
      ogeler.duraklaAd.textContent = duraklatildi ? 'Devam Et' : 'Duraklat';
      balon(duraklatildi ? 'Tünel durdu ⏸️ Küplere rahatça tıkla!' : 'Uçuş devam! 🚀', 2200);
    });

    ogeler.btnTema.addEventListener('click', function () {
      sesKur(); sesTik();
      temaIx = (temaIx + 1) % TEMALAR.length;
      ogeler.temaAd.textContent = TEMALAR[temaIx].ad;
      tuneliKur();
      balon('Renk: ' + TEMALAR[temaIx].ad + ' 🎨', 1800);
    });

    ogeler.btnYeni.addEventListener('click', function () {
      sesKur(); sesTik();
      turNo = 1;
      ogeler.turSayi.textContent = turNo;
      tuneliKur();
      balon('Yepyeni bir tünel! 🌀', 2200);
    });

    ogeler.btnFoto.addEventListener('click', function () { sesKur(); sesTik(); fotografCek(); });

    ogeler.btnSes.addEventListener('click', function () {
      sesAcik = !sesAcik;
      ogeler.btnSes.classList.toggle('kapali', !sesAcik);
      ogeler.btnSes.querySelector('.btn-yazi').textContent = sesAcik ? 'Ses Açık' : 'Ses Kapalı';
      ogeler.btnSes.querySelector('.btn-emoji').textContent = sesAcik ? '🔊' : '🔇';
      if (!sesAcik) { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
      else { sesKur(); sesTik(); }
    });

    ogeler.btnKolay.addEventListener('click', function () {
      sesKur(); sesTik();
      kolayMod = !kolayMod;
      ogeler.btnKolay.classList.toggle('acik', kolayMod);
      ogeler.btnKolay.querySelector('.btn-yazi').textContent = kolayMod ? 'Büyük Küpler ✓' : 'Büyük Küpler';
      kupleriKur();
      balon(kolayMod ? 'Küpler büyüdü! 🎈' : 'Küpler normal boyutta.', 2000);
    });

    ogeler.btnDinle.addEventListener('click', function () {
      sesKur();
      if (!sesAcik) {
        sesAcik = true;
        ogeler.btnSes.classList.remove('kapali');
        ogeler.btnSes.querySelector('.btn-yazi').textContent = 'Ses Açık';
        ogeler.btnSes.querySelector('.btn-emoji').textContent = '🔊';
      }
      konus(SESLENDIR);
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === ' ') { e.preventDefault(); ogeler.btnDurakla.click(); }
      if (e.key === 'n' || e.key === 'N') ogeler.btnYeni.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 10) BAŞLAT                                                          */
  /* ------------------------------------------------------------------ */

  function baslat() {
    ['sahne', 'balon', 'hata', 'konfeti', 'hud', 'kalanSayi', 'turSayi',
     'skorSayi', 'skorKutu', 'btnHiz', 'hizEmoji', 'hizAd',
     'btnDurakla', 'duraklaEmoji', 'duraklaAd', 'btnTema', 'temaAd',
     'btnYeni', 'btnFoto', 'btnSes', 'btnKolay', 'btnDinle'].forEach(function (id) {
      ogeler[id] = $(id);
    });

    if (typeof THREE === 'undefined') { if (ogeler.hata) ogeler.hata.hidden = false; return; }

    try {
      sahneKur();
    } catch (e) {
      if (ogeler.hata) {
        ogeler.hata.hidden = false;
        ogeler.hata.querySelector('p').innerHTML =
          'Tarayıcın 3B (WebGL) desteklemiyor olabilir. Güncel <b>Chrome</b> veya <b>Edge</b> ile dene.';
      }
      return;
    }

    if (ogeler.hata) ogeler.hata.hidden = true;
    dugmeleriBagla();
    hiziYaz();
    balon('Parlayan küplere tıkla! 🎯', 4000);

    window.__olcekDegisti = function () { boyutGuncelle(); };

    renderer.domElement.addEventListener('pointerdown', tiklandi);
    window.addEventListener('resize', boyutGuncelle);
    if (window.ResizeObserver) new ResizeObserver(boyutGuncelle).observe(ogeler.sahne);

    dongu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();

})();
