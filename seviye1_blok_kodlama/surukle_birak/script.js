/* =========================================================================
   Sürükle Bırak — Şekilleri Kutusuna Taşı  |  Three.js
   İlkokul • Mouse Becerileri • Adım 3
   -------------------------------------------------------------------------
   Oyun: Şekle bas ve tut → doğru kutunun üstüne taşı → bırak.
   Doğru kutuysa şekil kutuya girer ve yıldız kazanılır; yanlışsa şekil
   yerine geri döner (ceza yok, tekrar denenir).

   Teknik: pointerdown ile ışın testi (raycaster) yapılır, tutulan şekil
   yatay bir düzlem (Plane) üzerinde sürüklenir. Bırakınca XZ düzleminde
   en yakın kutuya olan mesafe ölçülür; tolerans içindeyse yerleşir.
   Tolerans "Zorluk" düğmesiyle değişir -> hassas mouse kontrolü.
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1) AYARLAR                                                          */
  /* ------------------------------------------------------------------ */

  var AYAR = {
    kaldirma: 0.42,          // tutunca şekil ne kadar yükselsin
    kutuZ: -1.9,
    satirZ: [1.5, 2.9],
    zeminSinirX: 5.6,
    zeminSinirZ: [-3.0, 3.6]
  };

  var ZORLUKLAR = [
    { ad: 'Kolay',  emoji: '🎈', kutu: 3, nesne: 4, tolerans: 1.45, aralik: 3.0 },
    { ad: 'Normal', emoji: '🎯', kutu: 4, nesne: 6, tolerans: 1.05, aralik: 2.6 }
  ];

  var MODLAR = [
    { ad: 'Renkleri', emoji: '🎨', tur: 'renk' },
    { ad: 'Şekilleri', emoji: '🔺', tur: 'sekil' }
  ];

  var RENKLER = [
    { ad: 'kırmızı', hex: 0xFF5C5C },
    { ad: 'mavi',    hex: 0x4DA3FF },
    { ad: 'sarı',    hex: 0xFFD24D },
    { ad: 'yeşil',   hex: 0x5BD97B },
    { ad: 'mor',     hex: 0xB07BFF },
    { ad: 'turuncu', hex: 0xFF9F45 }
  ];

  var SEKILLER = [
    { ad: 'küp',      y: 0.31, yap: function () { return new THREE.BoxGeometry(0.62, 0.62, 0.62); } },
    { ad: 'top',      y: 0.34, yap: function () { return new THREE.SphereGeometry(0.34, 26, 18); } },
    { ad: 'koni',     y: 0.35, yap: function () { return new THREE.ConeGeometry(0.38, 0.70, 24); } },
    { ad: 'silindir', y: 0.30, yap: function () { return new THREE.CylinderGeometry(0.30, 0.30, 0.60, 24); } },
    { ad: 'simit',    y: 0.40, yap: function () { return new THREE.TorusGeometry(0.28, 0.12, 14, 28); } }
  ];

  var ALKISLAR = ['Süpersin! 🎉', 'Harikasın! ⭐', 'Çok iyi! 👏', 'Bravo! 🏆', 'Devam et! 🚀'];
  var DOGRU_SOZ = ['Doğru kutu! ✨', 'Aferin! 🎁', 'Tam yerinde! 👏', 'Mükemmel! ⭐'];
  var YANLIS_SOZ = ['Bu kutu değil, tekrar dene 🙂', 'Başka kutuya bak 👀', 'Neredeyse! Bir daha dene 💪'];

  var SESLENDIR = 'Sürükle bırak. Bir şeklin üstüne bas, parmağını kaldırmadan onu kendi kutusuna taşı ' +
                  've kutunun üstünde bırak. Doğru kutuya bırakınca yıldız kazanırsın.';

  /* ------------------------------------------------------------------ */
  /* 2) DURUM                                                            */
  /* ------------------------------------------------------------------ */

  var renderer, sahne, kamera, saat;
  var kutular = [], nesneler = [], zemin;
  var raycaster, fareNDC, duzlem, gecici, gecici2;

  var modIx = 0, zorlukIx = 0, turNo = 1, yildiz = 0;
  var sesAcik = true;
  var tutulan = null, tutOfset = new THREE.Vector3(), vurguKutu = null;
  var ipucuKutu = null, ipucuSure = 0;

  var ogeler = {}, sesCtx = null;

  function mod() { return MODLAR[modIx]; }
  function zorluk() { return ZORLUKLAR[zorlukIx]; }

  /* ------------------------------------------------------------------ */
  /* 3) YARDIMCILAR                                                      */
  /* ------------------------------------------------------------------ */

  function $(id) { return document.getElementById(id); }
  function rastgele(a, b) { return a + Math.random() * (b - a); }
  function sec(d) { return d[(Math.random() * d.length) | 0]; }

  function karistir(dizi) {
    for (var i = dizi.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = dizi[i]; dizi[i] = dizi[j]; dizi[j] = t;
    }
    return dizi;
  }

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

  function sesTut()    { calSes(420, 560, 0.10, 'sine', 0.14); }
  function sesDogru()  { calSes(660, 1180, 0.22, 'triangle'); setTimeout(function () { calSes(990, 1320, 0.18, 'triangle'); }, 110); }
  function sesYanlis() { calSes(230, 150, 0.22, 'sawtooth', 0.12); }
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
    kamera.position.set(0, 5.6, 6.6);
    kamera.lookAt(0, 0.3, 0.3);

    sahne.add(new THREE.HemisphereLight(0xEFFFF6, 0x3E9E70, 0.62));
    var isik = new THREE.DirectionalLight(0xfff6e4, 1.15);
    isik.position.set(3.5, 6, 4);
    sahne.add(isik);
    var yan = new THREE.DirectionalLight(0x8FD0FF, 0.45);
    yan.position.set(-4, 2.5, -3);
    sahne.add(yan);

    zemin = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 22),
      new THREE.MeshStandardMaterial({ color: 0x86D6A6, roughness: 0.95 })
    );
    zemin.rotation.x = -Math.PI / 2;
    sahne.add(zemin);

    // kutuların durduğu halı
    var hali = new THREE.Mesh(
      new THREE.PlaneGeometry(13, 2.6),
      new THREE.MeshStandardMaterial({ color: 0x64C48D, roughness: 1 })
    );
    hali.rotation.x = -Math.PI / 2;
    hali.position.set(0, 0.01, AYAR.kutuZ);
    sahne.add(hali);

    saat = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    fareNDC = new THREE.Vector2();
    duzlem = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    gecici = new THREE.Vector3();
    gecici2 = new THREE.Vector3();

    turKur();
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
  /* 5) TUR KURULUMU                                                     */
  /* ------------------------------------------------------------------ */

  function turTemizle() {
    kutular.forEach(function (k) {
      sahne.remove(k.grup);
      k.grup.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    });
    nesneler.forEach(function (n) {
      sahne.remove(n.mesh); sahne.remove(n.golge);
      n.mesh.geometry.dispose(); n.mesh.material.dispose();
      n.golge.geometry.dispose(); n.golge.material.dispose();
    });
    kutular = []; nesneler = [];
    tutulan = null; vurguKutu = null; ipucuKutu = null;
  }

  function kutuYap(x, anahtar, renkHex) {
    var grup = new THREE.Group();
    grup.position.set(x, 0, AYAR.kutuZ);

    var malzeme = new THREE.MeshStandardMaterial({
      color: renkHex, roughness: 0.45, side: THREE.DoubleSide
    });
    var govde = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.62, 0.72, 28, 1, true), malzeme);
    govde.position.y = 0.36;

    var taban = new THREE.Mesh(new THREE.CircleGeometry(0.62, 28),
      new THREE.MeshStandardMaterial({ color: renkHex, roughness: 0.8 }));
    taban.rotation.x = -Math.PI / 2;
    taban.position.y = 0.02;

    var kenar = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.07, 12, 34),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }));
    kenar.rotation.x = Math.PI / 2;
    kenar.position.y = 0.72;

    grup.add(govde); grup.add(taban); grup.add(kenar);

    // şekil modunda kutunun üstünde hedef şekil işareti durur
    var isaret = null;
    if (mod().tur === 'sekil') {
      var s = SEKILLER[anahtar];
      isaret = new THREE.Mesh(s.yap(), new THREE.MeshStandardMaterial({
        color: 0xffffff, roughness: 0.35, emissive: 0x333333
      }));
      isaret.scale.setScalar(0.62);
      isaret.position.y = 1.42;
      grup.add(isaret);
    }

    sahne.add(grup);
    return {
      grup: grup, isaret: isaret, anahtar: anahtar, x: x, z: AYAR.kutuZ,
      hedefOlcek: 1, zipla: 0
    };
  }

  function nesneYap(sekilIx, renkIx, anahtar, x, z) {
    var S = SEKILLER[sekilIx];
    var mesh = new THREE.Mesh(S.yap(), new THREE.MeshStandardMaterial({
      color: RENKLER[renkIx].hex, roughness: 0.30, metalness: 0.10
    }));
    mesh.position.set(x, S.y, z);
    mesh.rotation.y = rastgele(0, Math.PI * 2);
    sahne.add(mesh);

    var golge = new THREE.Mesh(new THREE.CircleGeometry(0.34, 22),
      new THREE.MeshBasicMaterial({ color: 0x1F5B3F, transparent: true, opacity: 0.18 }));
    golge.rotation.x = -Math.PI / 2;
    golge.position.set(x, 0.02, z);
    sahne.add(golge);

    return {
      mesh: mesh, golge: golge, sekilIx: sekilIx, renkIx: renkIx, anahtar: anahtar,
      ev: new THREE.Vector3(x, S.y, z), temelY: S.y,
      durum: 'evde', animasyon: 0, hedefKutu: null
    };
  }

  function turKur() {
    turTemizle();
    var Z = zorluk();

    // kutu anahtarları: renk modunda renk indeksi, şekil modunda şekil indeksi
    var havuz = [];
    var kaynakUzunluk = (mod().tur === 'renk') ? RENKLER.length : SEKILLER.length;
    for (var i = 0; i < kaynakUzunluk; i++) havuz.push(i);
    karistir(havuz);
    var anahtarlar = havuz.slice(0, Math.min(Z.kutu, kaynakUzunluk));

    // kutuları yerleştir
    var basX = -(anahtarlar.length - 1) * Z.aralik / 2;
    for (i = 0; i < anahtarlar.length; i++) {
      var renkHex = (mod().tur === 'renk') ? RENKLER[anahtarlar[i]].hex : 0xC08A4A;
      kutular.push(kutuYap(basX + i * Z.aralik, anahtarlar[i], renkHex));
    }

    // her kutuya en az bir nesne düşecek şekilde atama yap
    var atamalar = [];
    for (i = 0; i < Z.nesne; i++) atamalar.push(anahtarlar[i % anahtarlar.length]);
    karistir(atamalar);

    // nesneleri iki satıra yerleştir
    var satirda = Math.ceil(atamalar.length / 2);
    var aralikX = 2.3;
    for (i = 0; i < atamalar.length; i++) {
      var satir = (i < satirda) ? 0 : 1;
      var sira = (satir === 0) ? i : i - satirda;
      var adet = (satir === 0) ? satirda : atamalar.length - satirda;
      var x = -(adet - 1) * aralikX / 2 + sira * aralikX;
      var z = AYAR.satirZ[satir];

      var sekilIx, renkIx;
      if (mod().tur === 'renk') {
        renkIx = atamalar[i];
        sekilIx = (Math.random() * SEKILLER.length) | 0;      // şekil serbest
      } else {
        sekilIx = atamalar[i];
        renkIx = (Math.random() * RENKLER.length) | 0;        // renk serbest (dikkat dağıtıcı)
      }
      nesneler.push(nesneYap(sekilIx, renkIx, atamalar[i], x, z));
    }

    kalaniYaz();
    if (ogeler.turSayi) ogeler.turSayi.textContent = turNo;
  }

  function kalanSayisi() {
    var n = 0;
    for (var i = 0; i < nesneler.length; i++) if (nesneler[i].durum !== 'bitti') n++;
    return n;
  }

  function kalaniYaz() {
    if (ogeler.kalanSayi) ogeler.kalanSayi.textContent = kalanSayisi();
  }

  /* ------------------------------------------------------------------ */
  /* 6) ETKİLEŞİM                                                        */
  /* ------------------------------------------------------------------ */

  function ndcAyarla(e) {
    var r = renderer.domElement.getBoundingClientRect();
    fareNDC.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    fareNDC.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }

  function duzlemeIsinla(y, hedef) {
    duzlem.constant = -y;
    return raycaster.ray.intersectPlane(duzlem, hedef);
  }

  function basildi(e) {
    sesKur();
    ndcAyarla(e);
    raycaster.setFromCamera(fareNDC, kamera);

    var hedefler = [];
    for (var i = 0; i < nesneler.length; i++) {
      if (nesneler[i].durum === 'evde' || nesneler[i].durum === 'donuyor') hedefler.push(nesneler[i].mesh);
    }
    var vurus = raycaster.intersectObjects(hedefler, false)[0];
    if (!vurus) { return; }

    for (i = 0; i < nesneler.length; i++) {
      if (nesneler[i].mesh === vurus.object) { tutulan = nesneler[i]; break; }
    }
    if (!tutulan) return;

    tutulan.durum = 'tutuluyor';
    var y = tutulan.temelY + AYAR.kaldirma;
    if (duzlemeIsinla(y, gecici)) {
      tutOfset.set(tutulan.mesh.position.x - gecici.x, 0, tutulan.mesh.position.z - gecici.z);
    } else {
      tutOfset.set(0, 0, 0);
    }
    tutulan.mesh.position.y = y;

    ogeler.sahne.classList.add('tutuyor');
    sesTut();
    try { renderer.domElement.setPointerCapture(e.pointerId); } catch (err) { }
    e.preventDefault();
  }

  function hareket(e) {
    if (!tutulan) return;
    ndcAyarla(e);
    raycaster.setFromCamera(fareNDC, kamera);
    if (!duzlemeIsinla(tutulan.temelY + AYAR.kaldirma, gecici)) return;

    var x = Math.max(-AYAR.zeminSinirX, Math.min(AYAR.zeminSinirX, gecici.x + tutOfset.x));
    var z = Math.max(AYAR.zeminSinirZ[0], Math.min(AYAR.zeminSinirZ[1], gecici.z + tutOfset.z));
    tutulan.mesh.position.set(x, tutulan.temelY + AYAR.kaldirma, z);

    vurguKutu = enYakinKutu(x, z);
    e.preventDefault();
  }

  function enYakinKutu(x, z) {
    var enIyi = null, enKisa = zorluk().tolerans;
    for (var i = 0; i < kutular.length; i++) {
      var dx = kutular[i].x - x, dz = kutular[i].z - z;
      var d = Math.sqrt(dx * dx + dz * dz);
      if (d < enKisa) { enKisa = d; enIyi = kutular[i]; }
    }
    return enIyi;
  }

  function birakildi(e) {
    if (!tutulan) return;
    var n = tutulan;
    tutulan = null;
    ogeler.sahne.classList.remove('tutuyor');
    if (e && e.pointerId !== undefined) {
      try { renderer.domElement.releasePointerCapture(e.pointerId); } catch (err) { }
    }

    var kutu = enYakinKutu(n.mesh.position.x, n.mesh.position.z);
    vurguKutu = null;

    if (kutu && kutu.anahtar === n.anahtar) {
      n.durum = 'yerlesiyor';
      n.animasyon = 0;
      n.hedefKutu = kutu;
      kutu.zipla = 1;
      sesDogru();
      yildizEkle(1);
      balon(sec(DOGRU_SOZ), 1400);
      setTimeout(turKontrol, 420);
    } else if (kutu) {
      n.durum = 'donuyor'; n.animasyon = 0;
      sesYanlis();
      balon(sec(YANLIS_SOZ), 2000);
    } else {
      n.durum = 'donuyor'; n.animasyon = 0;
      balon('Şekli kutunun üstüne bırak 🎁', 1800);
    }
  }

  function turKontrol() {
    kalaniYaz();
    if (kalanSayisi() > 0) return;
    konfetiPatlat(50);
    sesAlkis();
    balon('Bütün şekiller yerine gitti! ' + sec(ALKISLAR));
    konus('Bütün şekilleri doğru kutulara koydun. Harikasın!');
    setTimeout(function () {
      turNo++;
      turKur();
      balon('Tur ' + turNo + ' başladı! 🎁', 2400);
    }, 2600);
  }

  /* ------------------------------------------------------------------ */
  /* 7) İPUCU                                                            */
  /* ------------------------------------------------------------------ */

  function ipucuGoster() {
    var kalanlar = nesneler.filter(function (n) { return n.durum === 'evde'; });
    if (!kalanlar.length) { balon('Her şey yerinde! 🎉', 1800); return; }
    var n = kalanlar[0];
    for (var i = 0; i < kutular.length; i++) {
      if (kutular[i].anahtar === n.anahtar) { ipucuKutu = kutular[i]; break; }
    }
    ipucuSure = 3;
    n.mesh.position.y = n.temelY + 0.5;                 // şekil de zıplasın
    var soz = (mod().tur === 'renk')
      ? RENKLER[n.renkIx].ad.toUpperCase() + ' şekli, ' + RENKLER[n.renkIx].ad + ' kutuya götür! 👉'
      : SEKILLER[n.sekilIx].ad.toUpperCase() + ' şekli, üstünde ' + SEKILLER[n.sekilIx].ad + ' olan kutuya götür! 👉';
    balon(soz, 3000);
  }

  /* ------------------------------------------------------------------ */
  /* 8) DÖNGÜ                                                            */
  /* ------------------------------------------------------------------ */

  function dongu() {
    requestAnimationFrame(dongu);
    var dt = Math.min(saat.getDelta(), 0.05);
    var t = saat.elapsedTime;

    if (ipucuSure > 0) { ipucuSure -= dt; if (ipucuSure <= 0) ipucuKutu = null; }

    // kutular: vurgu ve zıplama
    for (var i = 0; i < kutular.length; i++) {
      var k = kutular[i];
      var hedef = 1;
      if (k === vurguKutu) hedef = 1.14;
      if (k === ipucuKutu) hedef = 1.10 + Math.sin(t * 8) * 0.06;
      if (k.zipla > 0) { k.zipla -= dt * 2.6; hedef = 1 + Math.max(0, k.zipla) * 0.28; }
      var s = k.grup.scale.x + (hedef - k.grup.scale.x) * Math.min(1, dt * 12);
      k.grup.scale.set(s, s, s);
      if (k.isaret) k.isaret.rotation.y += dt * 0.9;
    }

    // nesneler
    for (i = 0; i < nesneler.length; i++) {
      var n = nesneler[i];

      if (n.durum === 'bitti') continue;

      if (n.durum === 'evde') {
        var hedefY = n.temelY + Math.sin(t * 2 + i) * 0.03;
        n.mesh.position.y += (hedefY - n.mesh.position.y) * Math.min(1, dt * 6);
        n.mesh.rotation.y += dt * 0.25;
      }

      if (n.durum === 'tutuluyor') {
        n.mesh.rotation.y += dt * 1.4;
      }

      if (n.durum === 'donuyor') {
        n.animasyon += dt;
        var a = Math.min(1, n.animasyon / 0.45);
        var e = 1 - Math.pow(1 - a, 3);
        n.mesh.position.lerp(n.ev, Math.min(1, e * 0.5 + dt * 6));
        if (a >= 1) { n.mesh.position.copy(n.ev); n.durum = 'evde'; }
      }

      if (n.durum === 'yerlesiyor') {
        n.animasyon += dt;
        var b = Math.min(1, n.animasyon / 0.45);
        gecici2.set(n.hedefKutu.x, 0.45, n.hedefKutu.z);
        n.mesh.position.lerp(gecici2, Math.min(1, dt * 10));
        n.mesh.rotation.y += dt * 4;
        var kucul = 1 - b * 0.75;
        n.mesh.scale.setScalar(Math.max(0.05, kucul));
        n.golge.material.opacity = 0.18 * (1 - b);
        if (b >= 1) {
          n.durum = 'bitti';
          n.mesh.visible = false;
          n.golge.visible = false;
        }
      }

      // gölge şeklin altında kalsın, yükseldikçe küçülüp solsun
      if (n.durum !== 'bitti') {
        n.golge.position.set(n.mesh.position.x, 0.02, n.mesh.position.z);
        var h = Math.max(0, n.mesh.position.y - n.temelY);
        var o = Math.max(0.05, 0.18 - h * 0.16);
        if (n.durum !== 'yerlesiyor') n.golge.material.opacity = o;
        var gs = Math.max(0.55, 1 - h * 0.5);
        n.golge.scale.setScalar(gs);
      }
    }

    renderer.render(sahne, kamera);
  }

  /* ------------------------------------------------------------------ */
  /* 9) ARAYÜZ                                                           */
  /* ------------------------------------------------------------------ */

  function modYaz() {
    ogeler.modEmoji.textContent = mod().emoji;
    ogeler.modAd.textContent = mod().ad;
  }
  function zorlukYaz() {
    ogeler.zorlukEmoji.textContent = zorluk().emoji;
    ogeler.zorlukAd.textContent = zorluk().ad;
  }

  function fotografCek() {
    try {
      renderer.render(sahne, kamera);
      var url = renderer.domElement.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = url; a.download = 'surukle-birak.png';
      document.body.appendChild(a); a.click(); a.remove();
      balon('Fotoğrafın indirildi! 📸', 2400);
    } catch (e) {
      balon('Fotoğraf kaydedilemedi 😅', 2400);
    }
  }

  function dugmeleriBagla() {
    ogeler.btnMod.addEventListener('click', function () {
      sesKur(); sesTik();
      modIx = (modIx + 1) % MODLAR.length;
      modYaz();
      turNo = 1; turKur();
      balon(mod().tur === 'renk'
        ? 'Şimdi RENKLERİ eşleştiriyoruz 🎨'
        : 'Şimdi ŞEKİLLERİ eşleştiriyoruz 🔺 (renklere aldanma!)', 2800);
    });

    ogeler.btnZorluk.addEventListener('click', function () {
      sesKur(); sesTik();
      zorlukIx = (zorlukIx + 1) % ZORLUKLAR.length;
      zorlukYaz();
      turNo = 1; turKur();
      balon('Zorluk: ' + zorluk().ad + ' ' + zorluk().emoji, 2000);
    });

    ogeler.btnYeni.addEventListener('click', function () {
      sesKur(); sesTik();
      turNo = 1; turKur();
      balon('Yeni şekiller geldi! 🎁', 2200);
    });

    ogeler.btnYardim.addEventListener('click', function () { sesKur(); sesTik(); ipucuGoster(); });

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
      if (e.key === 'i' || e.key === 'I') ipucuGoster();
      if (e.key === 'n' || e.key === 'N') ogeler.btnYeni.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 10) BAŞLAT                                                          */
  /* ------------------------------------------------------------------ */

  function baslat() {
    ['sahne', 'balon', 'hata', 'konfeti', 'hud', 'kalanSayi', 'turSayi',
     'skorSayi', 'skorKutu', 'btnMod', 'modEmoji', 'modAd',
     'btnZorluk', 'zorlukEmoji', 'zorlukAd', 'btnYeni', 'btnYardim',
     'btnFoto', 'btnSes', 'btnDinle'].forEach(function (id) {
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
    modYaz(); zorlukYaz();
    balon('Şekli tut ve kendi kutusuna taşı! 🎁', 4000);

    window.__olcekDegisti = function () { boyutGuncelle(); };

    var el = renderer.domElement;
    el.addEventListener('pointerdown', basildi);
    el.addEventListener('pointermove', hareket);
    window.addEventListener('pointerup', birakildi);
    window.addEventListener('pointercancel', birakildi);
    window.addEventListener('resize', boyutGuncelle);
    if (window.ResizeObserver) new ResizeObserver(boyutGuncelle).observe(ogeler.sahne);

    dongu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();

})();
