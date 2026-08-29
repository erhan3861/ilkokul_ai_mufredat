/* =========================================================================
   Space & Enter — Zıpla ve Onayla  |  Three.js
   İlkokul • Klavye Becerileri • Adım 6 (Ana hedef: TEMEL TUŞ KONTROLÜ)
   -------------------------------------------------------------------------
   İki görev sırayla gelir:
     ␣ BOŞLUK  -> karakter zıplar, havadaki yıldıza değerse yıldız kazanılır
     ⏎ ENTER   -> önüne gelen sandığı açar, içinden yıldız çıkar
   Ekranda hangi tuşa basılacağı hem yazıyla hem de büyük tuş görseliyle
   gösterilir. Yanlış tuşa basmak ceza değildir, sadece hatırlatma yapılır.
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1) AYARLAR                                                          */
  /* ------------------------------------------------------------------ */

  var ZORLUKLAR = [
    { ad: 'Kolay',  emoji: '🎈', salinim: 0.00, hiz: 0.0, gorev: 6, tolerans: 1.00 },
    { ad: 'Normal', emoji: '🎯', salinim: 1.15, hiz: 1.1, gorev: 6, tolerans: 0.85 },
    { ad: 'Zor',    emoji: '🔥', salinim: 1.85, hiz: 1.8, gorev: 7, tolerans: 0.72 }
  ];

  var KARAKTERLER = [
    { ad: 'Vızıl',  emoji: '🤖', govde: 0x2FB4F0, detay: 0x15588F },
    { ad: 'Pati',   emoji: '🐱', govde: 0xFF9A2E, detay: 0x9C5410 },
    { ad: 'Zıpzıp', emoji: '🐸', govde: 0x4ACB4F, detay: 0x1E6F35 },
    { ad: 'Uzo',    emoji: '👽', govde: 0x9A78FF, detay: 0x5326C4 }
  ];

  var YERCEKIMI = -15.5, ZIPLAMA_HIZI = 6.6;

  var ALKISLAR = ['Süpersin! 🎉', 'Harikasın! ⭐', 'Çok iyi! 👏', 'Bravo! 🏆'];
  var TOPLANDI = ['Yakaladın! ✨', 'Süper zıplama! 🚀', 'Aferin! ⭐', 'Devam! 👏'];

  var SESLENDIR = 'Space ve enter. Ekranda hangi tuşa basacağın yazıyor. ' +
                  'Boşluk tuşuna basınca karakter zıplar ve yıldızı yakalar. ' +
                  'Enter tuşuna basınca sandık açılır ve içinden yıldız çıkar.';

  /* ------------------------------------------------------------------ */
  /* 2) DURUM                                                            */
  /* ------------------------------------------------------------------ */

  var renderer, sahne, kamera, saat;
  var karakter, yildizMesh, sandik, sandikKapak, zemin, tabela;
  var zorlukIx = 0, karakterIx = 0, turNo = 1, yildiz = 0;
  var kalanGorev = 6, gorev = 'space', sesAcik = true;
  var vy = 0, havada = false, sandikAcik = false, sandikAnim = 0, yildizAlindi = false;
  var ipucuSure = 0;

  var ogeler = {}, sesCtx = null;

  function zorluk() { return ZORLUKLAR[zorlukIx]; }
  function karakterBilgi() { return KARAKTERLER[karakterIx]; }

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
    kaz.gain.exponentialRampToValueAtTime(ses === undefined ? 0.18 : ses, t + 0.02);
    kaz.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    osc.connect(kaz); kaz.connect(sesCtx.destination);
    osc.start(t); osc.stop(t + sure + 0.03);
  }

  function sesZipla()  { calSes(330, 760, 0.16, 'sine', 0.16); }
  function sesTopla()  { calSes(720, 1450, 0.2, 'triangle'); }
  function sesSandik() { calSes(260, 620, 0.28, 'triangle', 0.18); }
  function sesYanlis() { calSes(220, 150, 0.18, 'sawtooth', 0.10); }
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

  function yildizEkle(k) {
    yildiz += k;
    ogeler.skorSayi.textContent = yildiz;
    ogeler.skorKutu.classList.remove('zipla');
    void ogeler.skorKutu.offsetWidth;
    ogeler.skorKutu.classList.add('zipla');
    if (window.SIFRE) SIFRE.yildiz(yildiz);
  }


  /* Tur sonu mesaji oyunun bittigi izlenimi vermesin: sifreye kac yildiz
     kaldigini da soyler. */
  function kalanYazi() {
    var kk = (window.SIFRE && SIFRE.kalan) ? SIFRE.kalan() : 0;
    return kk > 0 ? ' Şifre için ' + kk + ' yıldız kaldı ⭐' : '';
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
    kamera = new THREE.PerspectiveCamera(42, kap.clientWidth / Math.max(1, kap.clientHeight), 0.1, 100);
    kamera.position.set(0, 2.3, 6.6);
    kamera.lookAt(0, 1.15, 0);

    sahne.add(new THREE.HemisphereLight(0xF3ECFF, 0x6E58B8, 0.62));
    var isik = new THREE.DirectionalLight(0xfff6e4, 1.15);
    isik.position.set(3, 6, 5);
    sahne.add(isik);
    var yan = new THREE.DirectionalLight(0x9B7BFF, 0.45);
    yan.position.set(-4, 2, -3);
    sahne.add(yan);

    zemin = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.8, 0.5, 34),
      new THREE.MeshStandardMaterial({ color: 0x74CB9C, roughness: 0.9 }));
    zemin.position.y = -0.25;
    sahne.add(zemin);

    var cim = new THREE.Mesh(new THREE.PlaneGeometry(40, 30),
      new THREE.MeshStandardMaterial({ color: 0xB2E5C6, roughness: 1 }));
    cim.rotation.x = -Math.PI / 2;
    cim.position.y = -0.52;
    sahne.add(cim);

    karakterKur();
    yildizKur();
    sandikKur();

    saat = new THREE.Clock();
    turKur();
    boyutGuncelle();
  }

  function karakterKur() {
    karakter = new THREE.Group();
    var B = karakterBilgi();

    var govde = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.68, 0.66),
      new THREE.MeshStandardMaterial({ color: B.govde, roughness: 0.45 }));
    govde.position.y = 0.52;

    var yuz = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x223046, roughness: 0.35 }));
    yuz.position.set(0, 0.56, 0.34);

    var gozler = [];
    for (var s = -1; s <= 1; s += 2) {
      var goz = new THREE.Mesh(new THREE.SphereGeometry(0.06, 14, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x88ddff }));
      goz.position.set(s * 0.12, 0.58, 0.38);
      gozler.push(goz);
    }

    var taban = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.16, 22),
      new THREE.MeshStandardMaterial({ color: B.detay, roughness: 0.5 }));
    taban.position.y = 0.12;

    var anten = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.28, 8),
      new THREE.MeshStandardMaterial({ color: B.detay, roughness: 0.4 }));
    anten.position.y = 0.98;
    var top = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 12),
      new THREE.MeshStandardMaterial({ color: 0xFF5470, emissive: 0x6E0E20 }));
    top.position.y = 1.14;

    karakter.add(govde); karakter.add(yuz); karakter.add(taban);
    karakter.add(anten); karakter.add(top);
    gozler.forEach(function (g) { karakter.add(g); });
    karakter.userData.parcalar = { govde: govde, taban: taban, anten: anten };
    sahne.add(karakter);
  }

  function karakterRenkGuncelle() {
    var B = karakterBilgi(), p = karakter.userData.parcalar;
    p.govde.material.color.set(B.govde);
    p.taban.material.color.set(B.detay);
    p.anten.material.color.set(B.detay);
  }

  function yildizKur() {
    var s = new THREE.Shape();
    for (var i = 0; i < 10; i++) {
      var r = (i % 2 === 0) ? 0.34 : 0.15;
      var a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      var x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
    }
    s.closePath();
    var geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.13, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2
    });
    geo.center();
    yildizMesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: 0xFFD84D, emissive: 0x8A6A00, roughness: 0.35, metalness: 0.2
    }));
    yildizMesh.position.set(0, 1.95, 0);
    sahne.add(yildizMesh);
  }

  function sandikKur() {
    sandik = new THREE.Group();

    var govde = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.66, 0.85),
      new THREE.MeshStandardMaterial({ color: 0xB4711F, roughness: 0.65 }));
    govde.position.y = 0.33;

    var bant = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.14, 0.9),
      new THREE.MeshStandardMaterial({ color: 0xFFD24D, roughness: 0.4, metalness: 0.3 }));
    bant.position.y = 0.33;

    // kapak: arka kenardan dönsün diye pivot grubu
    sandikKapak = new THREE.Group();
    var kapak = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.22, 0.85),
      new THREE.MeshStandardMaterial({ color: 0x8E5518, roughness: 0.65 }));
    kapak.position.set(0, 0.11, 0.42);
    sandikKapak.add(kapak);
    sandikKapak.position.set(0, 0.66, -0.42);

    // ENTER tabelası
    var tuval = document.createElement('canvas');
    tuval.width = 256; tuval.height = 128;
    var c = tuval.getContext('2d');
    c.fillStyle = '#FFFFFF'; c.fillRect(0, 0, 256, 128);
    c.strokeStyle = '#6A45E8'; c.lineWidth = 10; c.strokeRect(5, 5, 246, 118);
    c.fillStyle = '#40257F';
    c.font = 'bold 54px Verdana, Arial, sans-serif';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('ENTER', 128, 66);
    var dokusu = new THREE.CanvasTexture(tuval);
    tabela = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.55),
      new THREE.MeshBasicMaterial({ map: dokusu, transparent: true }));
    tabela.position.set(0, 1.35, 0);

    sandik.add(govde); sandik.add(bant); sandik.add(sandikKapak); sandik.add(tabela);
    sandik.position.set(2.2, 0, 0.2);
    sandik.visible = false;
    sahne.add(sandik);
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
  /* 5) GÖREVLER                                                         */
  /* ------------------------------------------------------------------ */

  function turKur() {
    kalanGorev = zorluk().gorev;
    turNo = turNo || 1;
    karakter.position.set(0, 0, 0);
    vy = 0; havada = false;
    gorevAyarla('space');
    kalaniYaz();
    if (ogeler.turSayi) ogeler.turSayi.textContent = turNo;
  }

  function gorevAyarla(yeni) {
    gorev = yeni;
    sandikAcik = false; sandikAnim = 0; yildizAlindi = false;
    sandikKapak.rotation.x = 0;

    if (gorev === 'space') {
      sandik.visible = false;
      yildizMesh.visible = true;
      yildizMesh.position.set(0, 1.95, 0);
      ogeler.hedefTus.textContent = 'BOŞLUK';
      balon('BOŞLUK tuşuna bas ve zıpla! ␣', 2600);
    } else {
      sandik.visible = true;
      sandik.position.set(2.6, 0, 0.2);
      yildizMesh.visible = false;
      ogeler.hedefTus.textContent = 'ENTER';
      balon('Sandık geldi! ENTER tuşuna bas ⏎', 2600);
    }
    tuslariYaz();
  }

  function tuslariYaz() {
    if (ogeler.tusSpace) ogeler.tusSpace.classList.toggle('ipucu', ipucuSure > 0 && gorev === 'space');
    if (ogeler.tusEnter) ogeler.tusEnter.classList.toggle('ipucu', ipucuSure > 0 && gorev === 'enter');
  }

  function kalaniYaz() {
    if (ogeler.kalanSayi) ogeler.kalanSayi.textContent = kalanGorev;
  }

  function gorevTamam() {
    yildizEkle(1);
    kalanGorev--;
    kalaniYaz();

    if (kalanGorev <= 0) {
      konfetiPatlat(50);
      sesAlkis();
      balon('Tur bitti! Bütün görevleri yaptın 🎉' + kalanYazi());
      konus('Tur bitti. Yeni görevler geliyor.');
      setTimeout(function () {
        turNo++;
        turKur();
        balon('Tur ' + turNo + ' başladı! 🚀', 2200);
      }, 2600);
      return;
    }

    balon(sec(TOPLANDI) + ' ' + kalanGorev + ' görev kaldı.', 1500);
    // görevler sırayla: iki zıplama, bir sandık
    setTimeout(function () {
      gorevAyarla((kalanGorev % 3 === 0) ? 'enter' : 'space');
    }, 900);
  }

  function boslukBasildi() {
    ogeler.tusSpace.classList.add('basili');
    setTimeout(function () { ogeler.tusSpace.classList.remove('basili'); }, 170);

    if (gorev !== 'space') {
      sesYanlis();
      balon('Şimdi ENTER tuşuna basmalısın ⏎', 1800);
      return;
    }
    if (havada) return;
    havada = true;
    vy = ZIPLAMA_HIZI;
    sesZipla();
  }

  function enterBasildi() {
    ogeler.tusEnter.classList.add('basili');
    setTimeout(function () { ogeler.tusEnter.classList.remove('basili'); }, 170);

    if (gorev !== 'enter') {
      sesYanlis();
      balon('Şimdi BOŞLUK tuşuna basmalısın ␣', 1800);
      return;
    }
    if (sandikAcik) return;
    sandikAcik = true;
    sandikAnim = 0.0001;
    sesSandik();
  }

  function ipucuGoster() {
    ipucuSure = 3;
    tuslariYaz();
    balon(gorev === 'space' ? '␣ BOŞLUK tuşu en uzun tuştur!' : '⏎ ENTER tuşu sağdaki büyük tuştur!', 3000);
    sesTik();
  }

  /* ------------------------------------------------------------------ */
  /* 6) DÖNGÜ                                                            */
  /* ------------------------------------------------------------------ */

  function dongu() {
    requestAnimationFrame(dongu);
    var dt = Math.min(saat.getDelta(), 0.05);
    var t = saat.elapsedTime;

    if (ipucuSure > 0) { ipucuSure -= dt; if (ipucuSure <= 0) tuslariYaz(); }

    // zıplama fiziği
    if (havada) {
      vy += YERCEKIMI * dt;
      karakter.position.y += vy * dt;
      if (karakter.position.y <= 0) { karakter.position.y = 0; havada = false; vy = 0; }
      karakter.rotation.y += dt * 3;
    } else {
      karakter.position.y = Math.abs(Math.sin(t * 2.4)) * 0.05;
      karakter.rotation.y += (0 - (karakter.rotation.y % (Math.PI * 2))) * Math.min(1, dt * 4);
    }

    // SPACE görevi: salınan yıldız
    if (gorev === 'space' && yildizMesh.visible) {
      var Z = zorluk();
      yildizMesh.position.x = Math.sin(t * Z.hiz) * Z.salinim;
      yildizMesh.position.y = 1.95 + Math.sin(t * 2.2) * 0.08;
      yildizMesh.rotation.y += dt * 1.8;

      if (!yildizAlindi && havada) {
        var dx = yildizMesh.position.x - karakter.position.x;
        var dy = yildizMesh.position.y - (karakter.position.y + 0.85);
        if (Math.sqrt(dx * dx + dy * dy) < zorluk().tolerans) {
          yildizAlindi = true;
          yildizMesh.visible = false;
          sesTopla();
          gorevTamam();
        }
      }
    }

    // ENTER görevi: sandık kayarak gelir, açılınca yıldız çıkar
    if (gorev === 'enter' && sandik.visible) {
      sandik.position.x += (1.7 - sandik.position.x) * Math.min(1, dt * 3.2);
      tabela.position.y = 1.35 + Math.sin(t * 2.6) * 0.06;
      tabela.lookAt(kamera.position);

      if (sandikAnim > 0) {
        sandikAnim += dt;
        sandikKapak.rotation.x = -Math.min(1, sandikAnim / 0.35) * 2.0;
        if (!yildizAlindi && sandikAnim > 0.3) {
          yildizAlindi = true;
          yildizMesh.visible = true;
          yildizMesh.position.set(sandik.position.x, 0.9, sandik.position.z);
          sesTopla();
          setTimeout(gorevTamam, 350);
        }
        if (yildizAlindi) {
          yildizMesh.position.y += dt * 1.9;
          yildizMesh.rotation.y += dt * 6;
        }
      }
    }

    renderer.render(sahne, kamera);
  }

  /* ------------------------------------------------------------------ */
  /* 7) ARAYÜZ                                                           */
  /* ------------------------------------------------------------------ */

  function zorlukYaz() {
    ogeler.zorlukEmoji.textContent = zorluk().emoji;
    ogeler.zorlukAd.textContent = zorluk().ad;
  }
  function karakterYaz() {
    ogeler.karakterEmoji.textContent = karakterBilgi().emoji;
    ogeler.karakterAd.textContent = karakterBilgi().ad;
  }

  function fotografCek() {
    try {
      renderer.render(sahne, kamera);
      var url = renderer.domElement.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = url; a.download = 'space-enter.png';
      document.body.appendChild(a); a.click(); a.remove();
      balon('Fotoğrafın indirildi! 📸', 2400);
    } catch (e) { balon('Fotoğraf kaydedilemedi 😅', 2400); }
  }

  function dugmeleriBagla() {
    ogeler.tusSpace.addEventListener('click', function () { sesKur(); boslukBasildi(); });
    ogeler.tusEnter.addEventListener('click', function () { sesKur(); enterBasildi(); });

    ogeler.btnZorluk.addEventListener('click', function () {
      sesKur(); sesTik();
      zorlukIx = (zorlukIx + 1) % ZORLUKLAR.length;
      zorlukYaz();
      turNo = 1; turKur();
      balon('Zorluk: ' + zorluk().ad + ' ' + zorluk().emoji, 2000);
    });

    ogeler.btnKarakter.addEventListener('click', function () {
      sesKur(); sesTik();
      karakterIx = (karakterIx + 1) % KARAKTERLER.length;
      karakterYaz(); karakterRenkGuncelle();
      balon('Merhaba, ben ' + karakterBilgi().ad + '! ' + karakterBilgi().emoji, 2200);
    });

    ogeler.btnYardim.addEventListener('click', function () { sesKur(); ipucuGoster(); });

    ogeler.btnYeni.addEventListener('click', function () {
      sesKur(); sesTik();
      turNo = 1; turKur();
      balon('Yeni tur başladı! 🚀', 2200);
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
      konus(SESLENDIR);
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); sesKur(); boslukBasildi(); }
      else if (e.key === 'Enter') { e.preventDefault(); sesKur(); enterBasildi(); }
      else if (e.key === 'i' || e.key === 'I') ipucuGoster();
      else if (e.key === 'n' || e.key === 'N') ogeler.btnYeni.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 8) BAŞLAT                                                           */
  /* ------------------------------------------------------------------ */

  function baslat() {
    ['sahne', 'balon', 'hata', 'konfeti', 'hud', 'hedefTus', 'kalanSayi', 'turSayi',
     'skorSayi', 'skorKutu', 'btnZorluk', 'zorlukEmoji', 'zorlukAd', 'btnKarakter',
     'karakterEmoji', 'karakterAd', 'btnYardim', 'btnYeni', 'btnFoto', 'btnSes',
     'btnDinle', 'tusSpace', 'tusEnter'].forEach(function (id) {
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
        hedef: 35, harf: 'e', ses: 'e', hayvan: '🦘', adim: 6,
        baslik: 'Blok Kodlama Mix Adım6 Space ve Enter',
        kap: document.querySelector('.sahne-kutu'),
        stage: document.getElementById('stage'),
        konus: konus, konfeti: konfetiPatlat,
        efekt: { pop: sesTik, alkis: sesAlkis, tut: sesZipla }
      });
    }
    zorlukYaz(); karakterYaz();

    window.__olcekDegisti = function () { boyutGuncelle(); };
    window.addEventListener('resize', boyutGuncelle);
    if (window.ResizeObserver) new ResizeObserver(boyutGuncelle).observe(ogeler.sahne);

    dongu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();

})();
