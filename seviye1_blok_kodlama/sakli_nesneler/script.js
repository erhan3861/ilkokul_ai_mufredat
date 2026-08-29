/* =========================================================================
   Saklı Nesneler — Kalabalıkta Bul  |  Three.js
   İlkokul • Mouse Becerileri • Adım 4 (Ana hedef: GÖRSEL DİKKAT)
   -------------------------------------------------------------------------
   Oyun: Sahnede onlarca renkli 3B şekil vardır. Üst köşede "aranan şekil"
   yazar. Çocuk kalabalığın içinden o şekilleri bulup tıklar.
   Şekiller birbirinin arkasına girer, hafifçe sallanır -> arama gerektirir.
   Renk kasıtlı olarak dikkat dağıtıcıdır: ayırt edici olan ŞEKİLdir.
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1) AYARLAR                                                          */
  /* ------------------------------------------------------------------ */

  var ZORLUKLAR = [
    { ad: 'Kolay',  emoji: '🎈', nesne: 30, hedef: 4, olcek: 1.15 },
    { ad: 'Normal', emoji: '🎯', nesne: 48, hedef: 6, olcek: 1.00 },
    { ad: 'Zor',    emoji: '🔥', nesne: 66, hedef: 7, olcek: 0.88 }
  ];

  var ALAN = { x: 6.4, z1: -3.2, z2: 3.4 };

  var RENKLER = [0xFF5C5C, 0x4DA3FF, 0xFFD24D, 0x5BD97B, 0xB07BFF,
                 0xFF9F45, 0x4ED9C8, 0xFF7BAC, 0x9BE15D, 0x6FB1FF];

  var ALKISLAR = ['Süpersin! 🎉', 'Harikasın! ⭐', 'Çok iyi! 👏', 'Bravo! 🏆', 'Keskin göz! 👀'];
  var BULDUN = ['Buldun! ✨', 'İşte bu! 🎯', 'Gözünden kaçmadı! 👀', 'Süper! ⭐'];

  var SESLENDIR = 'Saklı nesneler. Sol üstte hangi şekli arayacağın yazıyor. ' +
                  'Kalabalığın içinde o şekli bul ve üzerine bir kere tıkla. Renklere aldanma, şekle bak.';

  /* --- Şekiller: ad, emoji ve geometri üreticisi --- */
  function yildizSekli(dis, ic, uc) {
    var s = new THREE.Shape();
    for (var i = 0; i < uc * 2; i++) {
      var r = (i % 2 === 0) ? dis : ic;
      var a = (i / (uc * 2)) * Math.PI * 2 - Math.PI / 2;
      var x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
    }
    s.closePath();
    return s;
  }

  function kalpSekli() {
    var s = new THREE.Shape();
    s.moveTo(0, -0.34);
    s.bezierCurveTo(0.42, 0.02, 0.34, 0.44, 0, 0.26);
    s.bezierCurveTo(-0.34, 0.44, -0.42, 0.02, 0, -0.34);
    return s;
  }

  function kabart(shape, derinlik) {
    var g = new THREE.ExtrudeGeometry(shape, {
      depth: derinlik, bevelEnabled: true,
      bevelSize: 0.035, bevelThickness: 0.035, bevelSegments: 2, curveSegments: 12
    });
    g.center();
    return g;
  }

  var SEKILLER = [
    { ad: 'yıldız',   emoji: '⭐', yap: function () { return kabart(yildizSekli(0.44, 0.20, 5), 0.16); } },
    { ad: 'kalp',     emoji: '💗', yap: function () { return kabart(kalpSekli(), 0.16); } },
    { ad: 'küp',      emoji: '🧊', yap: function () { return new THREE.BoxGeometry(0.62, 0.62, 0.62); } },
    { ad: 'top',      emoji: '⚽', yap: function () { return new THREE.SphereGeometry(0.36, 24, 16); } },
    { ad: 'koni',     emoji: '🔺', yap: function () { return new THREE.ConeGeometry(0.38, 0.72, 22); } },
    { ad: 'simit',    emoji: '🍩', yap: function () { return new THREE.TorusGeometry(0.30, 0.13, 14, 26); } },
    { ad: 'silindir', emoji: '🥁', yap: function () { return new THREE.CylinderGeometry(0.30, 0.30, 0.60, 22); } }
  ];

  /* ------------------------------------------------------------------ */
  /* 2) DURUM                                                            */
  /* ------------------------------------------------------------------ */

  var renderer, sahne, kamera, saat, zemin;
  var onRenderer, onSahne, onKamera, onMesh;      // HUD'daki 3B önizleme
  var nesneler = [], meshler = [];
  var raycaster, fareNDC;
  var geometriler = [];                 // şekil başına tek geometri (paylaşımlı)

  var zorlukIx = 0, turNo = 1, yildiz = 0, hedefSekil = 0;
  var sesAcik = true, ipucuSure = 0;

  var ogeler = {}, sesCtx = null;

  function zorluk() { return ZORLUKLAR[zorlukIx]; }

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

  function sesBuldu() { calSes(720, 1500, 0.2, 'triangle'); }
  function sesIska()  { calSes(200, 140, 0.12, 'sine', 0.08); }
  function sesTik()   { calSes(600, 900, 0.10, 'square', 0.10); }
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
      var b = ogeler.btnDinle;
      if (b) { b.classList.add('konusuyor'); u.onend = u.onerror = function () { b.classList.remove('konusuyor'); }; }
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
    if (window.SIFRE) SIFRE.yildiz(yildiz);
  }

  function konfetiPatlat(adet) {
    var kap = ogeler.konfeti;
    if (!kap) return;
    var renkler = ['#FFD84D', '#FF7BAC', '#8B6BFF', '#29D1C6', '#4ED97B', '#FF9F45'];
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
  /* 4) SAHNE                                                            */
  /* ------------------------------------------------------------------ */

  function sahneKur() {
    var kap = ogeler.sahne;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(kap.clientWidth, Math.max(1, kap.clientHeight), false);
    // Not: r128'de malzeme renkleri lineer uzaya cevrilmedigi icin sRGB cikis
    // kodlamasi sahneyi solduruyor; canli renk icin kapali birakiyoruz.
    kap.appendChild(renderer.domElement);

    sahne = new THREE.Scene();
    kamera = new THREE.PerspectiveCamera(45, kap.clientWidth / Math.max(1, kap.clientHeight), 0.1, 100);
    kamera.position.set(0, 5.4, 6.4);
    kamera.lookAt(0, 0.3, 0.2);

    sahne.add(new THREE.HemisphereLight(0xFFF7E8, 0xD9A662, 0.72));
    var isik = new THREE.DirectionalLight(0xfff6e4, 1.15);
    isik.position.set(3, 6, 4);
    sahne.add(isik);
    var yan = new THREE.DirectionalLight(0x8FD0FF, 0.45);
    yan.position.set(-4, 3, -3);
    sahne.add(yan);

    zemin = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 22),
      new THREE.MeshStandardMaterial({ color: 0xF2D3A2, roughness: 1 })
    );
    zemin.rotation.x = -Math.PI / 2;
    sahne.add(zemin);

    saat = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    fareNDC = new THREE.Vector2();

    for (var i = 0; i < SEKILLER.length; i++) geometriler.push(SEKILLER[i].yap());

    onizlemeKur();
    turKur();
    boyutGuncelle();
  }

  function boyutGuncelle() {
    var kap = ogeler.sahne;
    var g = Math.max(1, kap.clientWidth), y = Math.max(1, kap.clientHeight);
    kamera.aspect = g / y;
    kamera.updateProjectionMatrix();
    var olcek = window.__sahneOlcek || 1;
    renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * Math.max(1, Math.min(olcek, 2)), 2.5));
    renderer.setSize(g, y, false);
  }

  /* ------------------------------------------------------------------ */
  /* 5) TUR                                                              */
  /* ------------------------------------------------------------------ */

  function turTemizle() {
    nesneler.forEach(function (n) {
      sahne.remove(n.mesh);
      n.mesh.material.dispose();
    });
    nesneler = []; meshler = [];
  }

  function rastgeleYer() {
    return {
      x: rastgele(-ALAN.x, ALAN.x),
      z: rastgele(ALAN.z1, ALAN.z2)
    };
  }

  function turKur() {
    turTemizle();
    var Z = zorluk();

    hedefSekil = (Math.random() * SEKILLER.length) | 0;
    var digerler = [];
    for (var s = 0; s < SEKILLER.length; s++) if (s !== hedefSekil) digerler.push(s);

    for (var i = 0; i < Z.nesne; i++) {
      var hedefMi = (i < Z.hedef);
      var sekilIx = hedefMi ? hedefSekil : sec(digerler);
      var renk = sec(RENKLER);

      var mesh = new THREE.Mesh(geometriler[sekilIx], new THREE.MeshStandardMaterial({
        color: renk, roughness: 0.42, metalness: 0.05
      }));
      var yer = rastgeleYer();
      var olcek = Z.olcek * rastgele(0.85, 1.12);
      mesh.scale.setScalar(olcek);
      mesh.position.set(yer.x, 0.42 * olcek, yer.z);
      mesh.rotation.set(rastgele(-0.2, 0.2), rastgele(0, Math.PI * 2), rastgele(-0.15, 0.15));
      sahne.add(mesh);

      var n = {
        mesh: mesh, hedef: hedefMi, sekilIx: sekilIx, olcek: olcek,
        faz: rastgele(0, Math.PI * 2), donus: rastgele(-0.25, 0.25),
        temelY: 0.42 * olcek, toplandi: false, animasyon: 0, sarsinti: 0
      };
      mesh.userData.n = n;
      nesneler.push(n);
      meshler.push(mesh);
    }

    // hedefler kalabalığın arasına dağılsın (sona eklenmiş gibi durmasın)
    for (i = nesneler.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = nesneler[i].mesh.position.clone();
      nesneler[i].mesh.position.copy(nesneler[j].mesh.position);
      nesneler[j].mesh.position.copy(t);
      nesneler[i].temelY = nesneler[i].mesh.position.y;
      nesneler[j].temelY = nesneler[j].mesh.position.y;
    }

    hedefiYaz();
    kalaniYaz();
    if (ogeler.turSayi) ogeler.turSayi.textContent = turNo;
  }

  function karistir() {
    for (var i = 0; i < nesneler.length; i++) {
      if (nesneler[i].toplandi) continue;
      var yer = rastgeleYer();
      nesneler[i].hedefYer = new THREE.Vector3(yer.x, nesneler[i].temelY, yer.z);
    }
    sesTik();
    balon('Yerler değişti! Tekrar bak 🔀', 2000);
  }

  function hedefiYaz() {
    var S = SEKILLER[hedefSekil];
    if (ogeler.hedefAd) ogeler.hedefAd.textContent = S.ad;
    onizlemeGuncelle();
  }

  /* --- Aranan şeklin canlı 3B önizlemesi ---
     1-2. sınıf öğrencisi "silindir" kelimesini bilmeyebilir; bu yüzden
     asıl ipucu köşede dönen küçük modeldir. */
  function onizlemeKur() {
    var c = $('onizleme');
    if (!c) return;
    onRenderer = new THREE.WebGLRenderer({ canvas: c, antialias: true, alpha: true });
    onRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    onRenderer.setSize(c.width, c.height, false);
    onSahne = new THREE.Scene();
    onKamera = new THREE.PerspectiveCamera(42, 1, 0.1, 20);
    onKamera.position.set(0, 0.55, 2.15);
    onKamera.lookAt(0, 0, 0);
    onSahne.add(new THREE.HemisphereLight(0xffffff, 0xdcc9a8, 1.15));
    var l = new THREE.DirectionalLight(0xffffff, 0.85);
    l.position.set(2, 3, 3);
    onSahne.add(l);
  }

  function onizlemeGuncelle() {
    if (!onSahne) return;
    if (onMesh) { onSahne.remove(onMesh); onMesh.material.dispose(); }
    onMesh = new THREE.Mesh(geometriler[hedefSekil], new THREE.MeshStandardMaterial({
      color: 0xFFB74D, roughness: 0.4, metalness: 0.05
    }));
    onSahne.add(onMesh);
  }

  function kalanSayisi() {
    var n = 0;
    for (var i = 0; i < nesneler.length; i++) if (nesneler[i].hedef && !nesneler[i].toplandi) n++;
    return n;
  }

  function kalaniYaz() {
    if (ogeler.kalanSayi) ogeler.kalanSayi.textContent = kalanSayisi();
  }

  function bulundu(n) {
    n.toplandi = true;
    n.animasyon = 0.0001;
    n.mesh.userData.n = null;
    sesBuldu();
    yildizEkle(1);
    kalaniYaz();

    var kalan = kalanSayisi();
    if (kalan === 0) {
      konfetiPatlat(50);
      sesAlkis();
      balon('Hepsini buldun! ' + sec(ALKISLAR));
      konus('Hepsini buldun. Harikasın!');
      setTimeout(function () {
        turNo++;
        turKur();
        var S = SEKILLER[hedefSekil];
        balon('Tur ' + turNo + ': şimdi ' + S.emoji + ' ' + S.ad + ' ara!', 2800);
      }, 2600);
    } else {
      balon(sec(BULDUN) + ' ' + kalan + ' tane kaldı.', 1400);
    }
  }

  /* ------------------------------------------------------------------ */
  /* 6) TIKLAMA                                                          */
  /* ------------------------------------------------------------------ */

  function tiklandi(e) {
    sesKur();
    var r = renderer.domElement.getBoundingClientRect();
    fareNDC.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    fareNDC.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    raycaster.setFromCamera(fareNDC, kamera);

    var vurus = raycaster.intersectObjects(meshler, false)[0];
    if (!vurus) return;
    var n = vurus.object.userData.n;
    if (!n || n.toplandi) return;

    if (n.hedef) bulundu(n);
    else { n.sarsinti = 0.45; sesIska(); }
    e.preventDefault();
  }

  /* ------------------------------------------------------------------ */
  /* 7) İPUCU                                                            */
  /* ------------------------------------------------------------------ */

  function ipucuGoster() {
    if (kalanSayisi() === 0) { balon('Hepsi bulundu! 🎉', 1600); return; }
    ipucuSure = 2.4;
    balon('İşte oradalar! 💡', 2400);
    sesTik();
  }

  /* ------------------------------------------------------------------ */
  /* 8) DÖNGÜ                                                            */
  /* ------------------------------------------------------------------ */

  function dongu() {
    requestAnimationFrame(dongu);
    var dt = Math.min(saat.getDelta(), 0.05);
    var t = saat.elapsedTime;

    if (ipucuSure > 0) ipucuSure -= dt;

    // kamera çok hafif sallansın: nesneler birbirinin arkasından çıkıp girsin
    kamera.position.x = Math.sin(t * 0.25) * 0.55;
    kamera.position.y = 5.4 + Math.sin(t * 0.19) * 0.18;
    kamera.lookAt(0, 0.3, 0.2);

    for (var i = 0; i < nesneler.length; i++) {
      var n = nesneler[i];
      var m = n.mesh;

      if (n.toplandi) {
        if (n.animasyon > 0) {
          n.animasyon += dt;
          var a = Math.min(1, n.animasyon / 0.4);
          m.position.y = n.temelY + a * 1.6;
          m.rotation.y += dt * 8;
          m.scale.setScalar(Math.max(0.02, n.olcek * (1 - a)));
          if (a >= 1) { m.visible = false; n.animasyon = 0; }
        }
        continue;
      }

      if (n.hedefYer) {                                   // karıştırma animasyonu
        m.position.lerp(n.hedefYer, Math.min(1, dt * 4));
        if (m.position.distanceTo(n.hedefYer) < 0.02) n.hedefYer = null;
      }

      m.rotation.y += dt * n.donus;
      m.position.y = n.temelY + Math.sin(t * 1.6 + n.faz) * 0.05;

      if (n.sarsinti > 0) {                               // yanlış tıklama: hafif titreme
        n.sarsinti -= dt;
        m.rotation.z = Math.sin(t * 40) * 0.12 * Math.max(0, n.sarsinti);
      } else { m.rotation.z += (0 - m.rotation.z) * Math.min(1, dt * 6); }

      var hedefOlcek = n.olcek;
      if (ipucuSure > 0 && n.hedef) hedefOlcek = n.olcek * (1.25 + Math.sin(t * 12) * 0.12);
      var s = m.scale.x + (hedefOlcek - m.scale.x) * Math.min(1, dt * 10);
      m.scale.setScalar(s);
    }

    renderer.render(sahne, kamera);

    if (onRenderer && onMesh) {
      onMesh.rotation.y += dt * 1.1;
      onMesh.rotation.x = Math.sin(t * 0.8) * 0.22;
      onRenderer.render(onSahne, onKamera);
    }
  }

  /* ------------------------------------------------------------------ */
  /* 9) ARAYÜZ                                                           */
  /* ------------------------------------------------------------------ */

  function zorlukYaz() {
    ogeler.zorlukEmoji.textContent = zorluk().emoji;
    ogeler.zorlukAd.textContent = zorluk().ad;
  }

  function fotografCek() {
    try {
      renderer.render(sahne, kamera);
      var url = renderer.domElement.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = url; a.download = 'sakli-nesneler.png';
      document.body.appendChild(a); a.click(); a.remove();
      balon('Fotoğrafın indirildi! 📸', 2400);
    } catch (e) { balon('Fotoğraf kaydedilemedi 😅', 2400); }
  }

  function dugmeleriBagla() {
    ogeler.btnZorluk.addEventListener('click', function () {
      sesKur(); sesTik();
      zorlukIx = (zorlukIx + 1) % ZORLUKLAR.length;
      zorlukYaz();
      turNo = 1; turKur();
      balon('Zorluk: ' + zorluk().ad + ' ' + zorluk().emoji, 2000);
    });

    ogeler.btnKaristir.addEventListener('click', function () { sesKur(); karistir(); });

    ogeler.btnYardim.addEventListener('click', function () { sesKur(); ipucuGoster(); });

    ogeler.btnYeni.addEventListener('click', function () {
      sesKur(); sesTik();
      turNo = 1; turKur();
      var S = SEKILLER[hedefSekil];
      balon('Yeni tur! Şimdi ' + S.emoji + ' ' + S.ad + ' ara.', 2600);
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

    ogeler.btnDinle.addEventListener('click', function () {
      sesKur();
      if (!sesAcik) {
        sesAcik = true;
        ogeler.btnSes.classList.remove('kapali');
        ogeler.btnSes.querySelector('.btn-yazi').textContent = 'Ses Açık';
        ogeler.btnSes.querySelector('.btn-emoji').textContent = '🔊';
      }
      konus(SESLENDIR + ' Şu an aranan şekil: ' + SEKILLER[hedefSekil].ad + '.');
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'i' || e.key === 'I') ipucuGoster();
      if (e.key === 'k' || e.key === 'K') karistir();
      if (e.key === 'n' || e.key === 'N') ogeler.btnYeni.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 10) BAŞLAT                                                          */
  /* ------------------------------------------------------------------ */

  function baslat() {
    ['sahne', 'balon', 'hata', 'konfeti', 'hud', 'hedefAd', 'kalanSayi', 'turSayi',
     'skorSayi', 'skorKutu', 'onizleme', 'btnZorluk', 'zorlukEmoji', 'zorlukAd', 'btnKaristir',
     'btnYardim', 'btnYeni', 'btnFoto', 'btnSes', 'btnDinle'].forEach(function (id) {
      ogeler[id] = $(id);
    });

    if (typeof THREE === 'undefined') { if (ogeler.hata) ogeler.hata.hidden = false; return; }

    try { sahneKur(); }
    catch (e) {
      if (ogeler.hata) {
        ogeler.hata.hidden = false;
        ogeler.hata.querySelector('p').innerHTML =
          'Tarayıcın 3B (WebGL) desteklemiyor olabilir. Güncel <b>Chrome</b> veya <b>Edge</b> ile dene.';
      }
      return;
    }

    if (ogeler.hata) ogeler.hata.hidden = true;
    dugmeleriBagla();
    if (window.SIFRE) {
      SIFRE.kur({
        hedef: 29, harf: 'n', ses: 'ne', hayvan: '🦉', adim: 4,
        baslik: 'Blok Kodlama Mix Adım4 Saklı Nesneler',
        kap: document.querySelector('.sahne-kutu'),
        stage: document.getElementById('stage'),
        konus: konus, konfeti: konfetiPatlat,
        efekt: { pop: sesTik, alkis: sesAlkis, tut: sesBuldu }
      });
    }
    zorlukYaz();
    balon('Aranan şekli bul ve tıkla! 🔍', 4000);

    window.__olcekDegisti = function () { boyutGuncelle(); };

    renderer.domElement.addEventListener('pointerdown', tiklandi);
    window.addEventListener('resize', boyutGuncelle);
    if (window.ResizeObserver) new ResizeObserver(boyutGuncelle).observe(ogeler.sahne);

    dongu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();

})();
