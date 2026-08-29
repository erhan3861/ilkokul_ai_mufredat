/* =========================================================================
   Yön Tuşları — Robotu Yıldıza Götür  |  Three.js
   İlkokul • Klavye Becerileri • Adım 5 (Ana hedef: SAĞ-SOL-YUKARI-AŞAĞI)
   -------------------------------------------------------------------------
   Oyun: Kare kare bir dünyada robot vardır. Çocuk ok tuşuna basar, robot bir
   kare ilerler. Yıldıza ulaşınca yıldız toplanır ve yenisi çıkar.
   Ekranda ok tuşları da vardır (dokunmatik tahta/tablet için) ve basılan
   tuş yanar -> hangi tuşa bastığını görerek öğrenir.
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1) AYARLAR                                                          */
  /* ------------------------------------------------------------------ */

  var KARE = 1.12;                    // bir karenin boyutu

  var ZORLUKLAR = [
    { ad: 'Kolay',  emoji: '🎈', n: 5, engel: 0, hedef: 5 },
    { ad: 'Normal', emoji: '🎯', n: 7, engel: 5, hedef: 5 },
    { ad: 'Zor',    emoji: '🔥', n: 9, engel: 12, hedef: 6 }
  ];

  var ROBOTLAR = [
    { ad: 'Vızıl', emoji: '🤖', govde: 0x2FB4F0, detay: 0x15588F },
    { ad: 'Pati',  emoji: '🐱', govde: 0xFF9A2E, detay: 0x9C5410 },
    { ad: 'Zıpzıp', emoji: '🐸', govde: 0x4ACB4F, detay: 0x1E6F35 },
    { ad: 'Uzo',   emoji: '👽', govde: 0x9A78FF, detay: 0x5326C4 }
  ];

  var YONLER = {
    sol:    { dx: -1, dz: 0, ad: 'sol',    emoji: '◀', aci: -Math.PI / 2 },
    sag:    { dx: 1,  dz: 0, ad: 'sağ',    emoji: '▶', aci: Math.PI / 2 },
    yukari: { dx: 0,  dz: -1, ad: 'yukarı', emoji: '▲', aci: Math.PI },
    asagi:  { dx: 0,  dz: 1, ad: 'aşağı',  emoji: '▼', aci: 0 }
  };

  var ALKISLAR = ['Süpersin! 🎉', 'Harikasın! ⭐', 'Çok iyi! 👏', 'Bravo! 🏆'];
  var TOPLANDI = ['Yıldızı aldın! ✨', 'Süper sürüş! 🚀', 'Aferin! ⭐', 'Devam! 👏'];

  var SESLENDIR = 'Yön tuşları. Klavyedeki ok tuşlarına bas: yukarı, aşağı, sağ ve sol. ' +
                  'Robot her basışta bir kare ilerler. Robotu yıldızın üstüne götür.';

  /* ------------------------------------------------------------------ */
  /* 2) DURUM                                                            */
  /* ------------------------------------------------------------------ */

  var renderer, sahne, kamera, saat;
  var tahtaGrubu, robot, yildizMesh, engelMeshler = [];
  var zorlukIx = 0, robotIx = 0, turNo = 1, yildiz = 0, kalanHedef = 5, adimSayaci = 0;
  var sesAcik = true;

  var n = 5, engeller = [], robotKare = { i: 0, j: 0 }, yildizKare = { i: 0, j: 0 };
  var hareket = null;                 // { basla, bit, sure, gecen, aci }
  var ipucuYon = null, ipucuSure = 0;

  var ogeler = {}, sesCtx = null;

  function zorluk() { return ZORLUKLAR[zorlukIx]; }
  function robotBilgi() { return ROBOTLAR[robotIx]; }

  /* ------------------------------------------------------------------ */
  /* 3) YARDIMCILAR                                                      */
  /* ------------------------------------------------------------------ */

  function $(id) { return document.getElementById(id); }
  function rastgele(a, b) { return a + Math.random() * (b - a); }
  function sec(d) { return d[(Math.random() * d.length) | 0]; }
  function kareDunya(i, j) { return { x: (i - (n - 1) / 2) * KARE, z: (j - (n - 1) / 2) * KARE }; }

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

  function sesAdim()   { calSes(420, 620, 0.09, 'sine', 0.13); }
  function sesCarp()   { calSes(180, 110, 0.16, 'sawtooth', 0.10); }
  function sesTopla()  { calSes(700, 1400, 0.2, 'triangle'); }
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

    sahne.add(new THREE.HemisphereLight(0xE8F6FF, 0x4E86B8, 0.62));
    var isik = new THREE.DirectionalLight(0xfff6e4, 1.15);
    isik.position.set(4, 7, 5);
    sahne.add(isik);
    var yan = new THREE.DirectionalLight(0x7FB6FF, 0.45);
    yan.position.set(-4, 3, -4);
    sahne.add(yan);

    tahtaGrubu = new THREE.Group();
    sahne.add(tahtaGrubu);

    robotKur();
    yildizKur();
    saat = new THREE.Clock();

    turKur();
    boyutGuncelle();
  }

  function robotKur() {
    robot = new THREE.Group();
    var B = robotBilgi();

    var govde = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.58, 0.62),
      new THREE.MeshStandardMaterial({ color: B.govde, roughness: 0.45 }));
    govde.position.y = 0.44;

    var yuz = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.3, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x223046, roughness: 0.35 }));
    yuz.position.set(0, 0.48, 0.32);

    for (var s = -1; s <= 1; s += 2) {
      var goz = new THREE.Mesh(new THREE.SphereGeometry(0.055, 14, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x88ddff }));
      goz.position.set(s * 0.11, 0.5, 0.36);
      robot.add(goz);
    }

    var anten = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.26, 8),
      new THREE.MeshStandardMaterial({ color: B.detay, roughness: 0.4 }));
    anten.position.y = 0.86;
    var top = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 12),
      new THREE.MeshStandardMaterial({ color: 0xFF5470, emissive: 0x6E0E20 }));
    top.position.y = 1.0;

    var taban = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.12, 20),
      new THREE.MeshStandardMaterial({ color: B.detay, roughness: 0.5 }));
    taban.position.y = 0.1;

    robot.add(govde); robot.add(yuz); robot.add(anten); robot.add(top); robot.add(taban);
    robot.userData.parcalar = { govde: govde, anten: anten, taban: taban };
    sahne.add(robot);
  }

  function robotRenkleriniGuncelle() {
    var B = robotBilgi(), p = robot.userData.parcalar;
    p.govde.material.color.set(B.govde);
    p.anten.material.color.set(B.detay);
    p.taban.material.color.set(B.detay);
  }

  function yildizKur() {
    var s = new THREE.Shape();
    for (var i = 0; i < 10; i++) {
      var r = (i % 2 === 0) ? 0.32 : 0.14;
      var a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      var x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
    }
    s.closePath();
    var geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.12, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2
    });
    geo.center();
    yildizMesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: 0xFFD84D, emissive: 0x8A6A00, roughness: 0.35, metalness: 0.2
    }));
    sahne.add(yildizMesh);
  }

  function boyutGuncelle() {
    var kap = ogeler.sahne;
    var g = Math.max(1, kap.clientWidth), y = Math.max(1, kap.clientHeight);
    kamera.aspect = g / y;
    var uzaklik = n * KARE * 0.95 + 2.2;
    kamera.position.set(0, uzaklik * 0.78, uzaklik * 0.80);
    kamera.lookAt(0, 0.2, 0);
    kamera.updateProjectionMatrix();
    var olcek = window.__sahneOlcek || 1;
    renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * Math.max(1, Math.min(olcek, 2)), 2.5));
    renderer.setSize(g, y, false);
  }

  /* ------------------------------------------------------------------ */
  /* 5) TAHTA                                                            */
  /* ------------------------------------------------------------------ */

  function tahtayiTemizle() {
    while (tahtaGrubu.children.length) {
      var o = tahtaGrubu.children.pop();
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
      tahtaGrubu.remove(o);
    }
    engelMeshler = [];
  }

  function engelVarMi(i, j) {
    for (var k = 0; k < engeller.length; k++) if (engeller[k].i === i && engeller[k].j === j) return true;
    return false;
  }

  function bosKare(kacin) {
    var d = 0;
    while (d++ < 400) {
      var i = (Math.random() * n) | 0, j = (Math.random() * n) | 0;
      if (engelVarMi(i, j)) continue;
      if (kacin && kacin.i === i && kacin.j === j) continue;
      return { i: i, j: j };
    }
    return { i: 0, j: 0 };
  }

  function turKur() {
    var Z = zorluk();
    n = Z.n;
    kalanHedef = Z.hedef;
    adimSayaci = 0;
    engeller = [];
    hareket = null;
    ipucuYon = null;

    tahtayiTemizle();

    // kareler
    var kareGeo = new THREE.BoxGeometry(KARE * 0.94, 0.14, KARE * 0.94);
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        var acik = ((i + j) % 2 === 0);
        var m = new THREE.Mesh(kareGeo.clone(), new THREE.MeshStandardMaterial({
          color: acik ? 0x86D2F5 : 0x4FA9E0, roughness: 0.75
        }));
        var p = kareDunya(i, j);
        m.position.set(p.x, 0, p.z);
        tahtaGrubu.add(m);
      }
    }
    kareGeo.dispose();

    // engeller (kayalar)
    var kayaGeo = new THREE.IcosahedronGeometry(0.36, 0);
    for (var e = 0; e < Z.engel; e++) {
      var k = bosKare(null);
      if (k.i === 0 && k.j === 0) continue;                 // başlangıç karesi boş kalsın
      engeller.push(k);
      var kaya = new THREE.Mesh(kayaGeo.clone(), new THREE.MeshStandardMaterial({
        color: 0x6E7C8E, roughness: 0.9, flatShading: true
      }));
      var pk = kareDunya(k.i, k.j);
      kaya.position.set(pk.x, 0.36, pk.z);
      kaya.rotation.set(rastgele(0, 3), rastgele(0, 3), rastgele(0, 3));
      tahtaGrubu.add(kaya);
      engelMeshler.push(kaya);
    }
    kayaGeo.dispose();

    robotKare = { i: 0, j: n - 1 };                          // sol alt köşe
    if (engelVarMi(robotKare.i, robotKare.j)) robotKare = bosKare(null);
    var pr = kareDunya(robotKare.i, robotKare.j);
    robot.position.set(pr.x, 0, pr.z);
    robot.rotation.y = Math.PI;

    yildizYerlestir();
    kalaniYaz();
    if (ogeler.turSayi) ogeler.turSayi.textContent = turNo;
  }

  function yildizYerlestir() {
    var d = 0, k;
    do { k = bosKare(robotKare); d++; }
    while (d < 200 && Math.abs(k.i - robotKare.i) + Math.abs(k.j - robotKare.j) < 2);
    yildizKare = k;
    var p = kareDunya(k.i, k.j);
    yildizMesh.position.set(p.x, 0.62, p.z);
  }

  function kalaniYaz() {
    if (ogeler.kalanSayi) ogeler.kalanSayi.textContent = kalanHedef;
    if (ogeler.adimSayi) ogeler.adimSayi.textContent = adimSayaci;
  }

  /* ------------------------------------------------------------------ */
  /* 6) HAREKET                                                          */
  /* ------------------------------------------------------------------ */

  function tusYak(yonAd) {
    var eslesme = { sol: 'tusSol', sag: 'tusSag', yukari: 'tusYukari', asagi: 'tusAsagi' };
    var el = ogeler[eslesme[yonAd]];
    if (!el) return;
    el.classList.add('basili');
    setTimeout(function () { el.classList.remove('basili'); }, 170);
  }

  function ilerle(yonAd) {
    var Y = YONLER[yonAd];
    if (!Y) return;
    tusYak(yonAd);
    if (hareket) return;                       // hareket bitmeden yeni komut alma

    var yi = robotKare.i + Y.dx, yj = robotKare.j + Y.dz;

    if (yi < 0 || yi >= n || yj < 0 || yj >= n) {
      sesCarp();
      balon('Duvar var! Başka yöne dene 🧱', 1600);
      robot.rotation.y = Y.aci;
      return;
    }
    if (engelVarMi(yi, yj)) {
      sesCarp();
      balon('Kaya var! Etrafından dolaş 🪨', 1600);
      robot.rotation.y = Y.aci;
      return;
    }

    var b = kareDunya(robotKare.i, robotKare.j);
    var s = kareDunya(yi, yj);
    hareket = {
      basla: new THREE.Vector3(b.x, 0, b.z),
      bit: new THREE.Vector3(s.x, 0, s.z),
      gecen: 0, sure: 0.26, aci: Y.aci
    };
    robotKare = { i: yi, j: yj };
    adimSayaci++;
    ipucuYon = null;
    sesAdim();
    kalaniYaz();
  }

  function yildizKontrol() {
    if (robotKare.i !== yildizKare.i || robotKare.j !== yildizKare.j) return;
    sesTopla();
    yildizEkle(1);
    kalanHedef--;
    kalaniYaz();

    if (kalanHedef <= 0) {
      konfetiPatlat(50);
      sesAlkis();
      balon('Bütün yıldızları topladın! ' + sec(ALKISLAR));
      konus('Bütün yıldızları topladın. Harikasın!');
      setTimeout(function () {
        turNo++;
        turKur();
        balon('Tur ' + turNo + ' başladı! ⭐', 2400);
      }, 2600);
    } else {
      balon(sec(TOPLANDI) + ' ' + kalanHedef + ' yıldız kaldı.', 1500);
      yildizYerlestir();
    }
  }

  function ipucuGoster() {
    var di = yildizKare.i - robotKare.i, dj = yildizKare.j - robotKare.j;
    var yonAd;
    if (Math.abs(di) >= Math.abs(dj)) yonAd = (di > 0) ? 'sag' : 'sol';
    else yonAd = (dj > 0) ? 'asagi' : 'yukari';
    ipucuYon = yonAd;
    ipucuSure = 3;

    var eslesme = { sol: 'tusSol', sag: 'tusSag', yukari: 'tusYukari', asagi: 'tusAsagi' };
    Object.keys(eslesme).forEach(function (k) {
      if (ogeler[eslesme[k]]) ogeler[eslesme[k]].classList.toggle('ipucu', k === yonAd);
    });
    balon(YONLER[yonAd].emoji + ' ' + YONLER[yonAd].ad.toUpperCase() + ' tuşuna bas!', 3000);
    sesTik();
  }

  /* ------------------------------------------------------------------ */
  /* 7) DÖNGÜ                                                            */
  /* ------------------------------------------------------------------ */

  function dongu() {
    requestAnimationFrame(dongu);
    var dt = Math.min(saat.getDelta(), 0.05);
    var t = saat.elapsedTime;

    if (ipucuSure > 0) {
      ipucuSure -= dt;
      if (ipucuSure <= 0) {
        ['tusSol', 'tusSag', 'tusYukari', 'tusAsagi'].forEach(function (k) {
          if (ogeler[k]) ogeler[k].classList.remove('ipucu');
        });
      }
    }

    if (hareket) {
      hareket.gecen += dt;
      var a = Math.min(1, hareket.gecen / hareket.sure);
      var e = 1 - Math.pow(1 - a, 3);
      robot.position.lerpVectors(hareket.basla, hareket.bit, e);
      robot.position.y = Math.sin(a * Math.PI) * 0.28;         // zıplama yayı
      var fark = hareket.aci - robot.rotation.y;
      while (fark > Math.PI) fark -= Math.PI * 2;
      while (fark < -Math.PI) fark += Math.PI * 2;
      robot.rotation.y += fark * Math.min(1, dt * 14);
      if (a >= 1) { robot.position.copy(hareket.bit); hareket = null; yildizKontrol(); }
    } else {
      robot.position.y = Math.abs(Math.sin(t * 2.2)) * 0.045;  // nefes
    }

    yildizMesh.rotation.y += dt * 1.6;
    yildizMesh.position.y = 0.62 + Math.sin(t * 2.4) * 0.09;

    for (var i = 0; i < engelMeshler.length; i++) engelMeshler[i].rotation.y += dt * 0.12;

    renderer.render(sahne, kamera);
  }

  /* ------------------------------------------------------------------ */
  /* 8) ARAYÜZ                                                           */
  /* ------------------------------------------------------------------ */

  function zorlukYaz() {
    ogeler.zorlukEmoji.textContent = zorluk().emoji;
    ogeler.zorlukAd.textContent = zorluk().ad;
  }
  function robotYaz() {
    ogeler.robotEmoji.textContent = robotBilgi().emoji;
    ogeler.robotAd.textContent = robotBilgi().ad;
  }

  function fotografCek() {
    try {
      renderer.render(sahne, kamera);
      var url = renderer.domElement.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = url; a.download = 'yon-tuslari.png';
      document.body.appendChild(a); a.click(); a.remove();
      balon('Fotoğrafın indirildi! 📸', 2400);
    } catch (e) { balon('Fotoğraf kaydedilemedi 😅', 2400); }
  }

  function dugmeleriBagla() {
    var tusEslesme = { tusSol: 'sol', tusSag: 'sag', tusYukari: 'yukari', tusAsagi: 'asagi' };
    Object.keys(tusEslesme).forEach(function (id) {
      if (!ogeler[id]) return;
      ogeler[id].addEventListener('click', function () { sesKur(); ilerle(tusEslesme[id]); });
    });

    ogeler.btnZorluk.addEventListener('click', function () {
      sesKur(); sesTik();
      zorlukIx = (zorlukIx + 1) % ZORLUKLAR.length;
      zorlukYaz();
      turNo = 1; turKur(); boyutGuncelle();
      balon('Zorluk: ' + zorluk().ad + ' ' + zorluk().emoji, 2000);
    });

    ogeler.btnRobot.addEventListener('click', function () {
      sesKur(); sesTik();
      robotIx = (robotIx + 1) % ROBOTLAR.length;
      robotYaz(); robotRenkleriniGuncelle();
      balon('Merhaba, ben ' + robotBilgi().ad + '! ' + robotBilgi().emoji, 2200);
    });

    ogeler.btnYardim.addEventListener('click', function () { sesKur(); ipucuGoster(); });

    ogeler.btnYeni.addEventListener('click', function () {
      sesKur(); sesTik();
      turNo = 1; turKur();
      balon('Yeni tur başladı! ⭐', 2200);
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
      var k = e.key;
      var yon = null;
      if (k === 'ArrowLeft' || k === 'a' || k === 'A') yon = 'sol';
      if (k === 'ArrowRight' || k === 'd' || k === 'D') yon = 'sag';
      if (k === 'ArrowUp' || k === 'w' || k === 'W') yon = 'yukari';
      if (k === 'ArrowDown' || k === 's' || k === 'S') yon = 'asagi';
      if (yon) { e.preventDefault(); sesKur(); ilerle(yon); }
      if (k === 'i' || k === 'I') ipucuGoster();
      if (k === 'n' || k === 'N') ogeler.btnYeni.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 9) BAŞLAT                                                           */
  /* ------------------------------------------------------------------ */

  function baslat() {
    ['sahne', 'balon', 'hata', 'konfeti', 'hud', 'kalanSayi', 'adimSayi', 'turSayi',
     'skorSayi', 'skorKutu', 'btnZorluk', 'zorlukEmoji', 'zorlukAd', 'btnRobot',
     'robotEmoji', 'robotAd', 'btnYardim', 'btnYeni', 'btnFoto', 'btnSes', 'btnDinle',
     'tusSol', 'tusSag', 'tusYukari', 'tusAsagi'].forEach(function (id) {
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
        hedef: 32, harf: 'y', ses: 'ye', hayvan: '🐰', adim: 5,
        baslik: 'Blok Kodlama Mix Adım5 Yön Tuşları',
        kap: document.querySelector('.sahne-kutu'),
        stage: document.getElementById('stage'),
        konus: konus, konfeti: konfetiPatlat,
        efekt: { pop: sesTik, alkis: sesAlkis, tut: sesAdim }
      });
    }
    zorlukYaz(); robotYaz();
    balon('Ok tuşlarıyla robotu yıldıza götür! ⭐', 4000);

    window.__olcekDegisti = function () { boyutGuncelle(); };
    window.addEventListener('resize', boyutGuncelle);
    if (window.ResizeObserver) new ResizeObserver(boyutGuncelle).observe(ogeler.sahne);

    dongu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();

})();
