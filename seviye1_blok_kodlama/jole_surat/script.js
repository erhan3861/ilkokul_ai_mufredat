/* =========================================================================
   Jöle Surat  —  Three.js
   1–2. Sınıf • Mouse Becerileri • Adım 1
   -------------------------------------------------------------------------
   Oyun: Surata bas ve tut → fareyi çek → bırak. Yüz jöle gibi uzar,
   bırakınca zıp zıp yerine oturur.

   Fizik: Küre geometrisinin her köşe noktası bir YAY–SÖNÜM sistemidir.
     ivme = (hedef - konum) * sertlik - hız * sönüm
   Tutulan noktaya uzaklığa göre ağırlık verilir (Gauss), böylece çekilen
   bölge yumuşak bir tepe gibi uzar. Bırakınca hedef 0 olur → yaylanma.
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1) AYARLAR                                                          */
  /* ------------------------------------------------------------------ */

  var AYAR = {
    yaricap: 1.3,          // kafa yarıçapı
    enBolum: 96,           // küre yatay bölüm (çözünürlük)
    boyBolum: 64,          // küre dikey bölüm
    boyOran: 1.10,         // kafayı hafif uzatır
    etkiYaricapi: 0.95,    // çekmenin yayıldığı alan
    enCokCekme: 2.30,      // en fazla uzama miktarı
    tutSertlik: 240, tutSonum: 24,      // tutarken: fareyi takip etsin
    birakSertlik: 105, birakSonum: 6.5  // bırakınca: zıp zıp yaylansın
  };

  var TG = 2048, TY = 1024;   // yüz dokusu tuvali (2:1 = küre için doğru oran)
  var MX = 1024, MY = 505;    // yüzün doku üzerindeki merkezi

  var KARAKTERLER = [
    {
      ad: 'Zıpzıp', emoji: '🧒', tur: 'insan',
      ten: '#FFD3A8', golge: '#E7B084', sac: '#4A2C15', gozRengi: '#3C7DD6',
      renkler: ['#FFD3A8', '#F6C48F', '#E0A672', '#C98C5C', '#8D5A3B', '#FFE6CC']
    },
    {
      ad: 'Miyav', emoji: '🐱', tur: 'kedi',
      ten: '#FFB45C', golge: '#E89334', sac: '#B96A16', gozRengi: '#3FBF63',
      renkler: ['#FFB45C', '#FFD9A0', '#B0B7C2', '#F0F0F0', '#8C6A50', '#FF9A9A']
    },
    {
      ad: 'Vızıl', emoji: '🤖', tur: 'robot',
      ten: '#C3CEDC', golge: '#93A3B6', sac: '#5A6B80', gozRengi: '#25E3E3',
      renkler: ['#C3CEDC', '#9FD8FF', '#FFD24D', '#FF9CC2', '#B7F0A8', '#D9D9E3']
    },
    {
      ad: 'Uzo', emoji: '👽', tur: 'uzayli',
      ten: '#93E39C', golge: '#5FBF6C', sac: '#3E9B4C', gozRengi: '#101828',
      renkler: ['#93E39C', '#7FE3D8', '#C8A6FF', '#FFE07A', '#8FC7FF', '#FF9EBF']
    }
  ];

  var SURATLAR = [
    { ad: 'Mutlu',   emoji: '😀', goz: 'normal', agiz: 'gulumse' },
    { ad: 'Şaşkın',  emoji: '😮', goz: 'buyuk',  agiz: 'o' },
    { ad: 'Uykulu',  emoji: '😴', goz: 'kapali', agiz: 'kucuk' },
    { ad: 'Yaramaz', emoji: '😜', goz: 'kirp',   agiz: 'dil' }
  ];

  var ALKISLAR = ['Süpersin! 🎉', 'Harikasın! ⭐', 'Çok iyi! 👏', 'Devam et! 🚀', 'Bravo! 🏆'];
  var CEKME_SOZU = ['Uuuu! 😮', 'Çok uzadı! 😆', 'Zıp zıp! 🎈', 'Vaaay! 🤪', 'Jöle gibi! 🍮'];

  var SESLENDIR = 'Jöle surat. Farenin sol tuşuna basılı tut, fareyi çek ve bırak. ' +
                  'Surat jöle gibi uzayacak, sonra zıp zıp geri gelecek.';

  /* ------------------------------------------------------------------ */
  /* 2) DURUM                                                            */
  /* ------------------------------------------------------------------ */

  var karakterIx = 0, suratIx = 0, renkIx = 0;
  var gozlukVar = false, sapkaVar = false, sesAcik = true;
  var yildiz = 0, gozKapali = false;

  /* --- Şifre (FLAG) modülü --- */
  var HEDEF_YILDIZ = 20;          // bu yıldıza ulaşınca şifre açılır
  var SIFRE_HARFI = 'j';          // CTF şifresi
  var SIFRE_SESI = 'je';          // harfin Türkçe okunuşu (seslendirme için)
  var sifreAcildi = false;

  var renderer, sahne, kamera, saat;
  var kafaGrubu, kafa, geo, pozAttr;
  var temelPoz, kayma, hiz, agirlik, kose = 0;
  var dokuTuval, dtx, doku;
  var aksesuarlar = [];           // kulak, anten, şapka…
  var tenMalzemeleri = [];        // ten rengi değişince güncellenecekler

  var raycaster, fareNDC, duzlem;
  var tutuluyor = false, tutulanKose = 0, basDunya, baslangicKayma, cekme;
  var basPiksel = null, hareketMiktari = 0;
  var uyuyor = false;

  var ogeler = {};                // DOM kısayolları
  var sesCtx = null;

  /* ------------------------------------------------------------------ */
  /* 3) YARDIMCILAR                                                      */
  /* ------------------------------------------------------------------ */

  function $(id) { return document.getElementById(id); }
  function rastgele(a, b) { return a + Math.random() * (b - a); }
  function sec(dizi) { return dizi[(Math.random() * dizi.length) | 0]; }

  function karakter() { return KARAKTERLER[karakterIx]; }
  function tenRengi() { return karakter().renkler[renkIx % karakter().renkler.length]; }

  /* --- Ses (WebAudio ile basit efektler) --- */
  function sesKur() {
    if (sesCtx) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) sesCtx = new AC();
    } catch (e) { sesCtx = null; }
  }

  function calBoing(f1, f2, sure, tur) {
    if (!sesAcik || !sesCtx) return;
    if (sesCtx.state === 'suspended') { try { sesCtx.resume(); } catch (e) { } }
    var t = sesCtx.currentTime;
    var osc = sesCtx.createOscillator();
    var kaz = sesCtx.createGain();
    osc.type = tur || 'sine';
    osc.frequency.setValueAtTime(f1, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, f2), t + sure);
    kaz.gain.setValueAtTime(0.0001, t);
    kaz.gain.exponentialRampToValueAtTime(0.22, t + 0.02);
    kaz.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    osc.connect(kaz); kaz.connect(sesCtx.destination);
    osc.start(t); osc.stop(t + sure + 0.03);
  }

  function sesPop()   { calBoing(680, 1500, 0.16, 'triangle'); }
  function sesTut()   { calBoing(300, 190, 0.14, 'sine'); }
  function sesBirak() { calBoing(200, 700, 0.30, 'sine'); }
  function sesAlkis() {
    if (!sesAcik || !sesCtx) return;
    [523, 659, 784, 1046].forEach(function (f, i) {
      setTimeout(function () { calBoing(f, f * 1.02, 0.18, 'triangle'); }, i * 90);
    });
  }

  function konus(metin) {
    if (!sesAcik || !('speechSynthesis' in window)) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(metin);
      u.lang = 'tr-TR'; u.rate = 0.92; u.pitch = 1.15;
      var btn = ogeler.btnDinle;
      if (btn) {
        btn.classList.add('konusuyor');
        u.onend = u.onerror = function () { btn.classList.remove('konusuyor'); };
      }
      speechSynthesis.speak(u);
    } catch (e) { }
  }

  /* --- Balon mesajı --- */
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
    yoluGuncelle(true);

    // hedefe ulaşınca şifre (FLAG) modülü açılır
    if (!sifreAcildi && yildiz >= HEDEF_YILDIZ) {
      sifreAcildi = true;
      sifreDugmesiniAc();
      setTimeout(sifreyiAc, 900);
    }
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
  /* 4) YÜZ DOKUSU (2B tuvale çizilir, küreye giydirilir)                */
  /* ------------------------------------------------------------------ */

  function elips(x, y, rx, ry, renk, aci) {
    dtx.save();
    dtx.translate(x, y);
    if (aci) dtx.rotate(aci);
    dtx.beginPath();
    dtx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    dtx.fillStyle = renk;
    dtx.fill();
    dtx.restore();
  }

  function yuvarlakKutu(x, y, g, h, r, renk) {
    dtx.beginPath();
    dtx.moveTo(x + r, y);
    dtx.arcTo(x + g, y, x + g, y + h, r);
    dtx.arcTo(x + g, y + h, x, y + h, r);
    dtx.arcTo(x, y + h, x, y, r);
    dtx.arcTo(x, y, x + g, y, r);
    dtx.closePath();
    dtx.fillStyle = renk;
    dtx.fill();
  }

  function cizgi(x1, y1, x2, y2, x3, y3, kalinlik, renk) {
    dtx.beginPath();
    dtx.moveTo(x1, y1);
    dtx.quadraticCurveTo(x2, y2, x3, y3);
    dtx.lineWidth = kalinlik;
    dtx.lineCap = 'round';
    dtx.strokeStyle = renk;
    dtx.stroke();
  }

  /* --- Gözler --- */
  function gozleriCiz(K, tur) {
    var ax = 168, ay = MY - 38;
    var buyuk = (tur === 'buyuk');
    var rx = buyuk ? 88 : 78, ry = buyuk ? 100 : 88;

    for (var s = -1; s <= 1; s += 2) {
      var gx = MX + s * ax;
      var kapaliGoz = (tur === 'kapali') || (tur === 'kirp' && s === -1);

      if (kapaliGoz) {
        cizgi(gx - 62, ay, gx, ay + 46, gx + 62, ay, 20, (K.tur === 'robot') ? K.sac : '#3B2A1E');
        continue;
      }

      if (K.tur === 'robot') {
        yuvarlakKutu(gx - 82, ay - 62, 164, 124, 34, '#1B2432');
        yuvarlakKutu(gx - 66, ay - 46, 132, 92, 26, K.gozRengi);
        elips(gx, ay, 26, 34, '#0B1220');
        elips(gx - 22, ay - 26, 14, 12, 'rgba(255,255,255,.85)');
        continue;
      }

      if (K.tur === 'uzayli') {
        elips(gx, ay, rx * 0.95, ry * 1.15, '#101828', s * 0.22);
        elips(gx - s * 22, ay - 34, 20, 26, 'rgba(255,255,255,.9)');
        elips(gx + s * 20, ay + 26, 10, 12, 'rgba(255,255,255,.5)');
        continue;
      }

      // insan & kedi
      elips(gx, ay, rx, ry, '#FFFFFF');
      if (K.tur === 'kedi') {
        elips(gx, ay, 40, 66, K.gozRengi);
        elips(gx, ay, 12, 56, '#14261A');           // dikey göz bebeği
      } else {
        elips(gx, ay, 42, 42, K.gozRengi);
        elips(gx, ay, 22, 22, '#14181F');
      }
      elips(gx - 16, ay - 20, 15, 13, 'rgba(255,255,255,.95)');

      if (K.tur === 'insan') {                      // kaşlar
        var ky = ay - (buyuk ? 152 : 130);
        cizgi(gx - 74, ky + 14, gx, ky - 16, gx + 74, ky + 8, 22, K.sac);
      }
    }
  }

  /* --- Ağız --- */
  function agziCiz(K, tur) {
    var ay = MY + 130;
    var koyu = '#7A1F32';

    if (K.tur === 'robot') {
      for (var i = 0; i < 5; i++) {
        var x = MX - 130 + i * 65;
        var h = (tur === 'o') ? 70 : (tur === 'kucuk' ? 22 : 40 + (i % 2) * 26);
        yuvarlakKutu(x - 24, ay + 40 - h / 2, 48, h, 10, '#1B2432');
      }
      return;
    }

    if (tur === 'o') {
      elips(MX, ay + 60, 62, 86, koyu);
      elips(MX, ay + 108, 40, 34, '#FF7EA0');
      return;
    }

    if (tur === 'kucuk') {
      cizgi(MX - 52, ay + 50, MX, ay + 92, MX + 52, ay + 50, 18, koyu);
      return;
    }

    if (K.tur === 'kedi') {                                  // :3 ağzı
      cizgi(MX - 100, ay + 26, MX - 50, ay + 86, MX, ay + 26, 18, '#5B3512');
      cizgi(MX, ay + 26, MX + 50, ay + 86, MX + 100, ay + 26, 18, '#5B3512');
      if (tur === 'dil') elips(MX, ay + 92, 44, 34, '#FF7EA0');
      return;
    }

    // gülümseme (dolu ağız)
    dtx.save();
    dtx.beginPath();
    dtx.moveTo(MX - 145, ay);
    dtx.quadraticCurveTo(MX, ay + 195, MX + 145, ay);
    dtx.quadraticCurveTo(MX, ay + 58, MX - 145, ay);
    dtx.closePath();
    dtx.fillStyle = koyu;
    dtx.fill();
    dtx.clip();
    elips(MX, ay + 175, 92, 70, '#FF7EA0');                  // dil
    elips(MX, ay + 8, 150, 34, '#FFFFFF');                   // üst dişler
    dtx.restore();

    if (tur === 'dil') elips(MX + 40, ay + 190, 62, 52, '#FF6E97');
  }

  /* --- Karaktere özel süsler --- */
  function insanSaci(K) {
    dtx.fillStyle = K.sac;
    dtx.beginPath();
    dtx.moveTo(0, 0); dtx.lineTo(TG, 0); dtx.lineTo(TG, 300);
    for (var x = TG; x >= 0; x -= 128) {
      dtx.quadraticCurveTo(x - 64, 300 + (((x / 128) % 2) ? 78 : -18), x - 128, 300);
    }
    dtx.closePath(); dtx.fill();
    for (var i = -3; i <= 3; i++) elips(MX + i * 96, 352, 74, 62, K.sac);   // perçem
  }

  function kediDeseni(K) {
    elips(MX, MY + 140, 215, 132, '#FFF3E2');                 // ağız çevresi
    for (var s = -1; s <= 1; s += 2) {                        // bıyıklar
      for (var i = 0; i < 3; i++) {
        cizgi(MX + s * 175, MY + 110 + i * 46,
              MX + s * 300, MY + 92 + i * 52,
              MX + s * 430, MY + 74 + i * 62, 9, '#6B4A2A');
      }
    }
    for (var j = -1; j <= 1; j++) yuvarlakKutu(MX + j * 90 - 16, 300, 32, 130, 16, K.sac);
    dtx.beginPath();                                          // pembe burun
    dtx.moveTo(MX - 44, MY + 46); dtx.lineTo(MX + 44, MY + 46); dtx.lineTo(MX, MY + 104);
    dtx.closePath(); dtx.fillStyle = '#FF8FA8'; dtx.fill();
  }

  function robotPanel() {
    dtx.fillStyle = 'rgba(255,255,255,.35)';
    dtx.fillRect(0, MY + 300, TG, 26);
    dtx.fillRect(0, 250, TG, 20);
    yuvarlakKutu(MX - 470, MY - 260, 940, 640, 90, 'rgba(255,255,255,.22)');
    for (var s = -1; s <= 1; s += 2) {                        // vidalar
      elips(MX + s * 400, MY + 210, 34, 34, 'rgba(0,0,0,.18)');
      elips(MX + s * 400, MY + 210, 18, 18, 'rgba(255,255,255,.55)');
    }
  }

  function uzayliBenek() {
    for (var i = 0; i < 22; i++) {
      var a = (i / 22) * Math.PI * 2;
      elips(MX + Math.cos(a) * rastgele(320, 620), MY + Math.sin(a) * rastgele(180, 330),
            rastgele(14, 30), rastgele(12, 24), 'rgba(0,0,0,.10)');
    }
  }

  function gozlukCiz() {
    var ay = MY - 38, ax = 168;
    dtx.save();
    for (var s = -1; s <= 1; s += 2) {
      var gx = MX + s * ax;
      elips(gx, ay, 112, 104, 'rgba(40,55,90,.30)');
      dtx.beginPath();
      dtx.ellipse(gx, ay, 112, 104, 0, 0, Math.PI * 2);
      dtx.lineWidth = 20; dtx.strokeStyle = '#2B3550'; dtx.stroke();
      elips(gx - 42, ay - 42, 34, 22, 'rgba(255,255,255,.55)', -0.6);
    }
    dtx.beginPath();
    dtx.moveTo(MX - 60, ay - 6); dtx.lineTo(MX + 60, ay - 6);
    dtx.lineWidth = 18; dtx.strokeStyle = '#2B3550'; dtx.stroke();
    dtx.restore();
  }

  /* --- Tüm yüzü çiz --- */
  function yuzuCiz() {
    var K = karakter();
    var S = SURATLAR[suratIx];
    var gozTuru = gozKapali ? 'kapali' : S.goz;

    dtx.fillStyle = tenRengi();
    dtx.fillRect(0, 0, TG, TY);

    var grad = dtx.createLinearGradient(0, TY * 0.62, 0, TY);   // çene gölgesi
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,.18)');
    dtx.fillStyle = grad; dtx.fillRect(0, TY * 0.62, TG, TY * 0.38);

    if (K.tur === 'insan') insanSaci(K);
    if (K.tur === 'kedi') kediDeseni(K);
    if (K.tur === 'robot') robotPanel();
    if (K.tur === 'uzayli') uzayliBenek();

    if (K.tur === 'insan' || K.tur === 'kedi') {                // yanaklar
      elips(MX - 285, MY + 92, 68, 44, 'rgba(255,120,150,.42)');
      elips(MX + 285, MY + 92, 68, 44, 'rgba(255,120,150,.42)');
    }

    if (K.tur === 'insan') {                                    // burun
      elips(MX, MY + 52, 34, 27, K.golge);
      elips(MX - 15, MY + 62, 9, 7, 'rgba(0,0,0,.28)');
      elips(MX + 15, MY + 62, 9, 7, 'rgba(0,0,0,.28)');
    }
    if (K.tur === 'uzayli') {
      elips(MX - 16, MY + 66, 8, 10, 'rgba(0,0,0,.35)');
      elips(MX + 16, MY + 66, 8, 10, 'rgba(0,0,0,.35)');
    }

    gozleriCiz(K, gozTuru);
    agziCiz(K, S.agiz);
    if (gozlukVar) gozlukCiz();

    if (doku) doku.needsUpdate = true;
  }

  /* ------------------------------------------------------------------ */
  /* 4b) ŞİFRE (FLAG) MODÜLÜ                                             */
  /*     Hedef yıldıza ulaşılınca açılır. Önce çocuğa şifre harfi        */
  /*     gösterilip seslendirilir, sonra platform arayüzünün izlemelik   */
  /*     (tıklanamaz) simülasyonu adım adım oynatılır.                   */
  /* ------------------------------------------------------------------ */

  /* --- Hedef yolu: okuma bilmeyen çocuk nereye gittiğini görsün --- */
  function yoluKur() {
    if (!ogeler.yolNoktalar) return;
    ogeler.yolNoktalar.innerHTML = '';
    for (var i = 0; i < HEDEF_YILDIZ; i++) {
      ogeler.yolNoktalar.appendChild(document.createElement('i'));
    }
    var son = ogeler.yolSayi.parentNode.lastChild;
    if (son && son.nodeType === 3) son.textContent = '/' + HEDEF_YILDIZ;
    yoluGuncelle(false);
  }

  function yoluGuncelle(hareketVar) {
    if (!ogeler.yolCizgi) return;
    var oran = Math.min(1, yildiz / HEDEF_YILDIZ);
    ogeler.yolCizgi.style.setProperty('--p', oran);
    ogeler.yolSayi.textContent = Math.min(yildiz, HEDEF_YILDIZ);

    var noktalar = ogeler.yolNoktalar.children;
    for (var i = 0; i < noktalar.length; i++) {
      noktalar[i].classList.toggle('gecildi', i < yildiz);
    }

    if (hareketVar) {
      ogeler.yolTas.classList.remove('zipla');
      void ogeler.yolTas.offsetWidth;
      ogeler.yolTas.classList.add('zipla');
    }

    ogeler.yolHedef.classList.toggle('yakin', oran >= 0.75 && oran < 1);
    if (oran >= 1 && ogeler.yolHedef.textContent !== '🔑') {
      ogeler.yolHedef.textContent = '🔑';
      ogeler.yolHedef.classList.remove('yakin');
      ogeler.yolHedef.classList.add('acildi');
    }
  }

  function sifreDugmesiniAc() {
    var b = ogeler.btnSifre;
    if (!b) return;
    b.classList.remove('kilitli');
    b.classList.add('hazir');
    b.title = 'Şifreni gör';
    b.querySelector('.btn-emoji').textContent = '🔑';
  }

  /* stage içindeki (1280x800) yerel koordinat */
  function ogeMerkezi(el) {
    var s = document.getElementById('stage').getBoundingClientRect();
    var r = el.getBoundingClientRect();
    var o = window.__sahneOlcek || 1;
    return { x: (r.left + r.width / 2 - s.left) / o, y: (r.top + r.height / 2 - s.top) / o };
  }

  function imleciGotur(el, kaydirX, kaydirY) {
    var m = ogeMerkezi(el);
    ogeler.sahteImlec.style.left = (m.x + (kaydirX || 0) - 10) + 'px';
    ogeler.sahteImlec.style.top = (m.y + (kaydirY || 0) - 8) + 'px';
  }

  function imlecTikla() {
    ogeler.sahteImlec.classList.remove('tikla');
    void ogeler.sahteImlec.offsetWidth;
    ogeler.sahteImlec.classList.add('tikla');
  }

  function anlat(metin) {
    ogeler.anlatim.hidden = false;
    ogeler.anlatimYazi.textContent = metin;
    konus(metin.replace(/[👆✨⌨️🚀🎉🔑]/g, ''));
  }

  var simZaman = [];
  function simDurdur() {
    simZaman.forEach(clearTimeout);
    simZaman = [];
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (e) { } }
  }
  function sonra(ms, fn) { simZaman.push(setTimeout(fn, ms)); }

  function sifreyiAc() {
    simDurdur();
    ogeler.sifreKatman.hidden = false;
    ogeler.sifreKart.hidden = false;
    ogeler.simulasyon.hidden = true;
    ogeler.anlatim.hidden = true;
    ogeler.simDugmeler.hidden = true;
    ogeler.sifreHarf.textContent = SIFRE_HARFI;
    sesAlkis();
    konfetiPatlat(40);
    sonra(600, function () {
      konus('Tebrikler! ' + HEDEF_YILDIZ + ' yıldız topladın. Senin şifren: ' + SIFRE_SESI + ' harfi.');
    });
  }

  function sifreyiKapat() {
    simDurdur();
    ogeler.sifreKatman.hidden = true;
    simSifirla();
  }

  function harfiSeslendir() {
    var b = ogeler.btnHarfSes;
    b.classList.add('okuyor');
    sesPop();
    if (!sesAcik) { sesAcik = true; sesDugmesiniYaz(); }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(SIFRE_SESI);
      u.lang = 'tr-TR'; u.rate = 0.75; u.pitch = 1.2;
      u.onend = u.onerror = function () { b.classList.remove('okuyor'); };
      speechSynthesis.speak(u);
    } catch (e) { b.classList.remove('okuyor'); }
    setTimeout(function () { b.classList.remove('okuyor'); }, 2200);
  }

  function simSifirla() {
    ogeler.plCubuk.classList.remove('gorunur');
    ogeler.plSoru.classList.remove('vurgu', 'basildi');
    ogeler.plModal.classList.remove('gorunur');
    ogeler.plKontrol.classList.remove('basildi');
    ogeler.plBasarili.classList.remove('gorunur');
    ogeler.plGirdiYazi.textContent = 'Şifre (FLAG) değerini yaz...';
    ogeler.plGirdiYazi.classList.remove('yazildi');
    ogeler.plImlec.classList.remove('yanip');
    ogeler.klavyeTus.classList.remove('basildi');
    ogeler.sahteKlavye.classList.remove('gorunur');
    ogeler.sahteImlec.classList.remove('gorunur', 'tikla');
    ogeler.sahteImlec.style.left = '640px';
    ogeler.sahteImlec.style.top = '700px';
  }

  function simulasyonBaslat() {
    simDurdur();
    simSifirla();
    ogeler.sifreKart.hidden = true;
    ogeler.simulasyon.hidden = false;
    ogeler.simDugmeler.hidden = true;

    sonra(60, function () {
      ogeler.sahteImlec.classList.add('gorunur');
      anlat('Şifreyi buraya yazacağız. Sağ üste bak! 👆');
      ogeler.plCubuk.classList.add('gorunur');
    });

    sonra(2300, function () {
      anlat('Mor renkli soru işaretine tıkla.');
      ogeler.plSoru.classList.add('vurgu');
      imleciGotur(ogeler.plSoru);
    });

    sonra(4100, function () {
      imlecTikla();
      ogeler.plSoru.classList.add('basildi');
      sesPop();
    });

    sonra(4500, function () {
      ogeler.plSoru.classList.remove('vurgu');
      ogeler.plModal.classList.add('gorunur');
      anlat('Şifre penceresi açıldı ✨');
    });

    sonra(6400, function () {
      anlat('Şimdi klavyeden J harfine bas. ⌨️');
      ogeler.sahteKlavye.classList.add('gorunur');
      ogeler.plImlec.classList.add('yanip');
      imleciGotur(ogeler.plGirdi, -180, 0);
    });

    sonra(8600, function () {
      ogeler.klavyeTus.classList.add('basildi');
      ogeler.plGirdiYazi.textContent = SIFRE_HARFI;
      ogeler.plGirdiYazi.classList.add('yazildi');
      sesTut();
      konus(SIFRE_SESI);
    });

    sonra(9400, function () { ogeler.klavyeTus.classList.remove('basildi'); });

    sonra(10200, function () {
      anlat('Sonra yeşil düğmeye bas: Şifreyi Kontrol Et 🚀');
      ogeler.plImlec.classList.remove('yanip');
      imleciGotur(ogeler.plKontrol);
    });

    sonra(12000, function () {
      imlecTikla();
      ogeler.plKontrol.classList.add('basildi');
      sesPop();
    });

    sonra(12600, function () {
      ogeler.plBasarili.classList.add('gorunur');
      anlat('Görev tamamlandı! 🎉 Aferin!');
      sesAlkis();
      konfetiPatlat(46);
    });

    sonra(14200, function () {
      ogeler.simDugmeler.hidden = false;
      ogeler.anlatim.hidden = true;
    });
  }

  /* ------------------------------------------------------------------ */
  /* 5) SAHNE KURULUMU                                                   */
  /* ------------------------------------------------------------------ */

  function sahneKur() {
    var kap = ogeler.sahne;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(kap.clientWidth, Math.max(1, kap.clientHeight), false);
    if (THREE.sRGBEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;
    kap.appendChild(renderer.domElement);

    sahne = new THREE.Scene();
    kamera = new THREE.PerspectiveCamera(38, kap.clientWidth / Math.max(1, kap.clientHeight), 0.1, 100);
    kamera.position.set(0, 0, 6.4);

    sahne.add(new THREE.HemisphereLight(0xffffff, 0x9ad0ff, 0.95));
    var isik = new THREE.DirectionalLight(0xfff2d6, 0.9);
    isik.position.set(2.6, 3.2, 4.2);
    sahne.add(isik);
    var kenar = new THREE.DirectionalLight(0x9ad8ff, 0.45);
    kenar.position.set(-3.4, -1.2, -2.4);
    sahne.add(kenar);

    saat = new THREE.Clock();
    raycaster = new THREE.Raycaster();
    fareNDC = new THREE.Vector2();
    duzlem = new THREE.Plane();
    basDunya = new THREE.Vector3();
    baslangicKayma = new THREE.Vector3();
    cekme = new THREE.Vector3();

    kafaGrubu = new THREE.Group();
    sahne.add(kafaGrubu);

    kafaOlustur();
    aksesuarlariKur();
    boyutGuncelle();
  }

  function kafaOlustur() {
    // phiStart = -PI/2  ->  dokunun tam ortası (u=0.5) yüzün ön tarafına denk gelir
    geo = new THREE.SphereGeometry(AYAR.yaricap, AYAR.enBolum, AYAR.boyBolum,
                                   -Math.PI / 2, Math.PI * 2, 0, Math.PI);
    pozAttr = geo.attributes.position;
    kose = pozAttr.count;

    // kafa biçimi: dar çene, hafif uzun, arkası biraz basık
    var R = AYAR.yaricap;
    for (var i = 0; i < kose; i++) {
      var x = pozAttr.getX(i), y = pozAttr.getY(i), z = pozAttr.getZ(i);
      var t = y / R;
      var f = (t < 0) ? (1 - 0.26 * t * t) : (1 + 0.04 * t);
      x *= f; z *= f;
      y *= AYAR.boyOran;
      var arka = Math.max(0, -z / R);
      z *= (1 - 0.12 * arka * arka);
      pozAttr.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();

    temelPoz = new Float32Array(pozAttr.array);          // bozulmamış hâli
    kayma = new Float32Array(kose * 3);
    hiz = new Float32Array(kose * 3);
    agirlik = new Float32Array(kose);

    // ışın testi için geniş sabit sınır küresi (her karede yeniden hesaplanmasın)
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), R * 3.5);

    dokuTuval = document.createElement('canvas');
    dokuTuval.width = TG; dokuTuval.height = TY;
    dtx = dokuTuval.getContext('2d');
    doku = new THREE.CanvasTexture(dokuTuval);
    if (THREE.sRGBEncoding !== undefined) doku.encoding = THREE.sRGBEncoding;
    doku.anisotropy = renderer.capabilities.getMaxAnisotropy();
    yuzuCiz();

    kafa = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      map: doku, roughness: 0.62, metalness: 0.02
    }));
    kafaGrubu.add(kafa);
  }

  /* --- Aksesuarları yüze bağlamak için en yakın köşe noktası --- */
  function enYakinKose(v) {
    var enIyi = 0, enKisa = Infinity;
    for (var i = 0; i < kose; i++) {
      var dx = temelPoz[i * 3] - v.x;
      var dy = temelPoz[i * 3 + 1] - v.y;
      var dz = temelPoz[i * 3 + 2] - v.z;
      var d = dx * dx + dy * dy + dz * dz;
      if (d < enKisa) { enKisa = d; enIyi = i; }
    }
    return enIyi;
  }

  function aksesuarEkle(nesne, konum, oran) {
    nesne.position.copy(konum);
    kafaGrubu.add(nesne);
    aksesuarlar.push({
      nesne: nesne, temel: konum.clone(),
      ix: enYakinKose(konum), oran: (oran === undefined ? 1 : oran)
    });
  }

  function aksesuarlariTemizle() {
    aksesuarlar.forEach(function (a) {
      kafaGrubu.remove(a.nesne);
      a.nesne.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    });
    aksesuarlar = [];
    tenMalzemeleri = [];
  }

  function tenMalzeme() {
    var m = new THREE.MeshStandardMaterial({ color: new THREE.Color(tenRengi()), roughness: 0.65 });
    tenMalzemeleri.push(m);
    return m;
  }

  function aksesuarlariKur() {
    aksesuarlariTemizle();
    var K = karakter();
    var s;

    if (K.tur === 'insan' || K.tur === 'uzayli') {              // kulaklar
      for (s = -1; s <= 1; s += 2) {
        var km = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 16), tenMalzeme());
        km.scale.set(0.42, 1, 0.78);
        aksesuarEkle(km, new THREE.Vector3(s * 1.2, 0.02, -0.02));
      }
    }

    if (K.tur === 'kedi') {                                     // üçgen kulaklar
      for (s = -1; s <= 1; s += 2) {
        var kul = new THREE.Group();
        var dis = new THREE.Mesh(new THREE.ConeGeometry(0.33, 0.62, 4), tenMalzeme());
        var ic = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.42, 4),
          new THREE.MeshStandardMaterial({ color: 0xff9fb4, roughness: 0.7 }));
        ic.position.set(0, -0.04, 0.11);
        kul.add(dis); kul.add(ic);
        kul.rotation.z = -s * 0.28;
        kul.rotation.y = Math.PI / 4;
        aksesuarEkle(kul, new THREE.Vector3(s * 0.62, 1.24, 0.02));
      }
    }

    if (K.tur === 'robot' || K.tur === 'uzayli') {               // antenler
      var kacAnten = (K.tur === 'robot') ? 1 : 2;
      for (var i = 0; i < kacAnten; i++) {
        var yon = (kacAnten === 1) ? 0 : (i === 0 ? -1 : 1);
        var anten = new THREE.Group();
        var cubuk = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.5, 10),
          new THREE.MeshStandardMaterial({ color: 0x8b96a8, roughness: 0.4, metalness: 0.5 }));
        var top = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 14),
          new THREE.MeshStandardMaterial({
            color: (K.tur === 'robot') ? 0xff5470 : 0xffe066,
            emissive: (K.tur === 'robot') ? 0x991028 : 0x7a6300,
            roughness: 0.35
          }));
        top.position.y = 0.32;
        anten.add(cubuk); anten.add(top);
        anten.rotation.z = -yon * 0.34;
        aksesuarEkle(anten, new THREE.Vector3(yon * 0.34, 1.44, 0));
      }
      if (K.tur === 'robot') {                                   // kulaklık diskleri
        for (s = -1; s <= 1; s += 2) {
          var disk = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.14, 22),
            new THREE.MeshStandardMaterial({ color: 0x5a6b80, roughness: 0.35, metalness: 0.6 }));
          disk.rotation.z = Math.PI / 2;
          aksesuarEkle(disk, new THREE.Vector3(s * 1.24, 0, 0));
        }
      }
    }

    if (sapkaVar) {
      var sapka = new THREE.Group();
      var silindir = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.5, 0.6, 28),
        new THREE.MeshStandardMaterial({ color: 0x2b2f45, roughness: 0.75 }));
      silindir.position.y = 0.3;
      var kenarlik = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.86, 0.07, 32),
        new THREE.MeshStandardMaterial({ color: 0x2b2f45, roughness: 0.75 }));
      var kurdele = new THREE.Mesh(new THREE.CylinderGeometry(0.485, 0.485, 0.16, 28),
        new THREE.MeshStandardMaterial({ color: 0xff5470, roughness: 0.6 }));
      kurdele.position.y = 0.1;
      sapka.add(silindir); sapka.add(kenarlik); sapka.add(kurdele);
      sapka.rotation.z = -0.12;
      aksesuarEkle(sapka, new THREE.Vector3(0.08, 1.36, -0.05));
    }
  }

  /* ------------------------------------------------------------------ */
  /* 6) JÖLE FİZİĞİ                                                      */
  /* ------------------------------------------------------------------ */

  function agirlikHesapla(ix) {
    var mx = temelPoz[ix * 3], my = temelPoz[ix * 3 + 1], mz = temelPoz[ix * 3 + 2];
    var R = AYAR.etkiYaricapi;
    for (var i = 0; i < kose; i++) {
      var dx = temelPoz[i * 3] - mx;
      var dy = temelPoz[i * 3 + 1] - my;
      var dz = temelPoz[i * 3 + 2] - mz;
      var d = Math.sqrt(dx * dx + dy * dy + dz * dz) / R;
      var w = Math.exp(-2.4 * d * d);
      agirlik[i] = (w < 0.02) ? 0 : w;
    }
  }

  function fizikAdimi(dt) {
    var k = tutuluyor ? AYAR.tutSertlik : AYAR.birakSertlik;
    var c = tutuluyor ? AYAR.tutSonum : AYAR.birakSonum;
    var hx = cekme.x, hy = cekme.y, hz = cekme.z;
    var enerji = 0;

    for (var i = 0; i < kose; i++) {
      var w = tutuluyor ? agirlik[i] : 0;
      var i3 = i * 3, o, v, a;

      o = kayma[i3]; v = hiz[i3];
      a = (w * hx - o) * k - v * c; v += a * dt; o += v * dt;
      hiz[i3] = v; kayma[i3] = o; enerji += v * v + o * o;

      o = kayma[i3 + 1]; v = hiz[i3 + 1];
      a = (w * hy - o) * k - v * c; v += a * dt; o += v * dt;
      hiz[i3 + 1] = v; kayma[i3 + 1] = o; enerji += v * v + o * o;

      o = kayma[i3 + 2]; v = hiz[i3 + 2];
      a = (w * hz - o) * k - v * c; v += a * dt; o += v * dt;
      hiz[i3 + 2] = v; kayma[i3 + 2] = o; enerji += v * v + o * o;
    }
    return enerji;
  }

  function geometriyiYaz() {
    var dizi = pozAttr.array;
    for (var i = 0; i < kose * 3; i++) dizi[i] = temelPoz[i] + kayma[i];
    pozAttr.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* Kısa tıklamada: yüze hafif bir "dürtme" (kamera yönünde itme) */
  function durt(guc) {
    var yon = new THREE.Vector3();
    kamera.getWorldDirection(yon).multiplyScalar(guc);
    for (var i = 0; i < kose; i++) {
      var w = agirlik[i];
      if (!w) continue;
      hiz[i * 3] += yon.x * w;
      hiz[i * 3 + 1] += yon.y * w;
      hiz[i * 3 + 2] += yon.z * w;
    }
    uyuyor = false;
    sesTut();
  }

  function yuzuSifirla() {
    kayma.fill(0); hiz.fill(0); agirlik.fill(0);
    cekme.set(0, 0, 0);
    tutuluyor = false;
    uyuyor = false;
    geometriyiYaz();
  }

  /* ------------------------------------------------------------------ */
  /* 7) FARE / DOKUNMA                                                   */
  /* ------------------------------------------------------------------ */

  function ndcAyarla(e) {
    var r = renderer.domElement.getBoundingClientRect();
    fareNDC.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    fareNDC.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }

  function basildi(e) {
    sesKur();
    ndcAyarla(e);
    raycaster.setFromCamera(fareNDC, kamera);

    var vurus = raycaster.intersectObject(kafa, false)[0];
    if (!vurus) { balon('Surata bas ve tut! 👆', 2200); return; }

    tutulanKose = vurus.face ? vurus.face.a : 0;
    agirlikHesapla(tutulanKose);

    basDunya.copy(vurus.point);
    baslangicKayma.set(kayma[tutulanKose * 3], kayma[tutulanKose * 3 + 1], kayma[tutulanKose * 3 + 2]);
    cekme.copy(baslangicKayma);

    var bakis = new THREE.Vector3();
    kamera.getWorldDirection(bakis);
    duzlem.setFromNormalAndCoplanarPoint(bakis, basDunya);

    basPiksel = { x: e.clientX, y: e.clientY };
    hareketMiktari = 0;
    tutuluyor = true;
    uyuyor = false;
    ogeler.sahne.classList.add('tutuyor');
    sesTut();
    try { renderer.domElement.setPointerCapture(e.pointerId); } catch (err) { }
    e.preventDefault();
  }

  var gecici = new THREE.Vector3();
  var sonSoz = 0;

  function hareket(e) {
    if (!tutuluyor) return;
    ndcAyarla(e);
    raycaster.setFromCamera(fareNDC, kamera);
    if (!raycaster.ray.intersectPlane(duzlem, gecici)) return;

    if (basPiksel) {
      hareketMiktari = Math.max(hareketMiktari,
        Math.abs(e.clientX - basPiksel.x) + Math.abs(e.clientY - basPiksel.y));
    }

    gecici.sub(basDunya);                       // grup dönmediği için dünya = yerel
    var uz = gecici.length();
    if (uz > 0.0001) {                          // yumuşak sınır: sonsuza uzamasın
      var sinir = AYAR.enCokCekme;
      gecici.multiplyScalar((sinir * Math.tanh(uz / sinir)) / uz);
    }
    cekme.copy(baslangicKayma).add(gecici);

    if (cekme.length() > 1.4 && performance.now() - sonSoz > 2600) {
      sonSoz = performance.now();
      balon(sec(CEKME_SOZU), 1800);
    }
    e.preventDefault();
  }

  function birakildi(e) {
    if (!tutuluyor) return;
    tutuluyor = false;
    ogeler.sahne.classList.remove('tutuyor');

    if (cekme.length() > 0.28) {
      sesBirak();
      yildizEkle(1);
      if (yildiz % 5 === 0) {
        konfetiPatlat(34);
        sesAlkis();
        balon(sec(ALKISLAR), 2400);
      }
    } else if (hareketMiktari < 12) {
      durt(2.6);                                 // kısa tıklama = dürtme
    }
    basPiksel = null;
    if (e && e.pointerId !== undefined) {
      try { renderer.domElement.releasePointerCapture(e.pointerId); } catch (err) { }
    }
  }

  /* ------------------------------------------------------------------ */
  /* 8) DÖNGÜ                                                            */
  /* ------------------------------------------------------------------ */

  var sonrakiGozKirp = 2.5;

  function dongu() {
    requestAnimationFrame(dongu);
    var dt = Math.min(saat.getDelta(), 0.05);
    var t = saat.elapsedTime;

    // göz kırpma
    sonrakiGozKirp -= dt;
    if (sonrakiGozKirp <= 0) {
      gozKapali = !gozKapali;
      yuzuCiz();
      sonrakiGozKirp = gozKapali ? 0.13 : rastgele(2.4, 6.0);
    }

    // jöle fiziği (iki alt adım = daha kararlı yay)
    if (!uyuyor || tutuluyor) {
      var enerji = fizikAdimi(dt * 0.5) + fizikAdimi(dt * 0.5);
      geometriyiYaz();
      if (!tutuluyor && enerji < 1e-5) {
        kayma.fill(0); hiz.fill(0);
        geometriyiYaz();
        uyuyor = true;
      }
    }

    // nefes alma (tutarken sabit kalsın ki çekme kaymasın)
    if (!tutuluyor) kafaGrubu.position.y = Math.sin(t * 1.1) * 0.045;

    // aksesuarlar yüzle birlikte esnesin
    for (var i = 0; i < aksesuarlar.length; i++) {
      var a = aksesuarlar[i], ix = a.ix * 3;
      a.nesne.position.set(
        a.temel.x + kayma[ix] * a.oran,
        a.temel.y + kayma[ix + 1] * a.oran,
        a.temel.z + kayma[ix + 2] * a.oran
      );
    }

    renderer.render(sahne, kamera);
  }

  /* ------------------------------------------------------------------ */
  /* 9) BOYUT                                                            */
  /* ------------------------------------------------------------------ */

  function boyutGuncelle() {
    var kap = ogeler.sahne;
    var g = Math.max(1, kap.clientWidth), y = Math.max(1, kap.clientHeight);
    kamera.aspect = g / y;
    // dar (dikey) alanda kafa taşmasın diye kamerayı biraz geri al
    kamera.position.z = (kamera.aspect < 1.1) ? 7.6 : 6.4;
    kamera.updateProjectionMatrix();

    // sahne CSS ile ölçekleniyor: büyütülüyorsa çözünürlüğü de artır
    var olcek = window.__sahneOlcek || 1;
    var dpr = (window.devicePixelRatio || 1) * Math.max(1, Math.min(olcek, 2));
    renderer.setPixelRatio(Math.min(dpr, 2.5));
    renderer.setSize(g, y, false);
  }

  /* ------------------------------------------------------------------ */
  /* 10) ARAYÜZ                                                          */
  /* ------------------------------------------------------------------ */

  function sesDugmesiniYaz() {
    ogeler.btnSes.classList.toggle('kapali', !sesAcik);
    ogeler.btnSes.querySelector('.btn-yazi').textContent = sesAcik ? 'Ses Açık' : 'Ses Kapalı';
    ogeler.btnSes.querySelector('.btn-emoji').textContent = sesAcik ? '🔊' : '🔇';
  }

  function karakteriUygula(renkSifirla) {
    var K = karakter();
    if (renkSifirla) renkIx = 0;
    ogeler.karakterEmoji.textContent = K.emoji;
    ogeler.karakterAd.textContent = K.ad;
    yuzuCiz();
    aksesuarlariKur();
  }

  function tenRenginiUygula() {
    var renk = new THREE.Color(tenRengi());
    tenMalzemeleri.forEach(function (m) { m.color.copy(renk); });
    yuzuCiz();
  }

  function fotografCek() {
    try {
      renderer.render(sahne, kamera);
      var url = renderer.domElement.toDataURL('image/png');
      var a = document.createElement('a');
      a.href = url;
      a.download = 'jole-surat.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      balon('Fotoğrafın indirildi! 📸', 2400);
    } catch (e) {
      balon('Fotoğraf kaydedilemedi 😅', 2400);
    }
  }

  function dugmeleriBagla() {
    ogeler.btnKarakter.addEventListener('click', function () {
      sesKur(); sesPop();
      karakterIx = (karakterIx + 1) % KARAKTERLER.length;
      karakteriUygula(true);
      balon('Merhaba, ben ' + karakter().ad + '! ' + karakter().emoji, 2400);
    });

    ogeler.btnSurat.addEventListener('click', function () {
      sesKur(); sesPop();
      suratIx = (suratIx + 1) % SURATLAR.length;
      ogeler.suratEmoji.textContent = SURATLAR[suratIx].emoji;
      ogeler.suratAd.textContent = SURATLAR[suratIx].ad;
      yuzuCiz();
    });

    ogeler.btnRenk.addEventListener('click', function () {
      sesKur(); sesPop();
      renkIx = (renkIx + 1) % karakter().renkler.length;
      tenRenginiUygula();
    });

    ogeler.btnGozluk.addEventListener('click', function () {
      sesKur(); sesPop();
      gozlukVar = !gozlukVar;
      ogeler.gozlukDurum.textContent = gozlukVar ? 'Çıkar' : 'Tak';
      yuzuCiz();
    });

    ogeler.btnSapka.addEventListener('click', function () {
      sesKur(); sesPop();
      sapkaVar = !sapkaVar;
      ogeler.sapkaDurum.textContent = sapkaVar ? 'Çıkar' : 'Tak';
      aksesuarlariKur();
    });

    ogeler.btnSes.addEventListener('click', function () {
      sesAcik = !sesAcik;
      sesDugmesiniYaz();
      if (!sesAcik) { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
      else { sesKur(); sesPop(); }
    });

    /* --- şifre modülü düğmeleri --- */
    ogeler.btnSifre.addEventListener('click', function () {
      sesKur();
      if (!sifreAcildi) {
        balon('Önce ' + HEDEF_YILDIZ + ' yıldız topla! Şu an ' + yildiz + ' yıldızın var 🔒', 2600);
        return;
      }
      sifreyiAc();
    });
    ogeler.btnHarfSes.addEventListener('click', function () { sesKur(); harfiSeslendir(); });
    ogeler.btnGoster.addEventListener('click', function () { sesKur(); sesPop(); simulasyonBaslat(); });
    ogeler.btnTekrar.addEventListener('click', function () { sesPop(); simulasyonBaslat(); });
    ogeler.btnAnladim.addEventListener('click', function () {
      sesPop();
      sifreyiKapat();
      balon('Şifren: ' + SIFRE_HARFI.toUpperCase() + ' — istediğinde 🔑 düğmesinden tekrar bakabilirsin.', 3600);
    });

    ogeler.btnSifirla.addEventListener('click', function () {
      sesKur(); sesPop();
      yuzuSifirla();
      balon('Surat düzeldi! 😊', 2200);
    });

    ogeler.btnFoto.addEventListener('click', function () { sesKur(); sesPop(); fotografCek(); });

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

    window.addEventListener('keydown', function (e) {      // erişilebilirlik
      if (e.key === 'r' || e.key === 'R') yuzuSifirla();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 11) BAŞLAT                                                          */
  /* ------------------------------------------------------------------ */

  function baslat() {
    ['sahne', 'balon', 'hata', 'konfeti', 'skorSayi', 'skorKutu',
     'btnKarakter', 'karakterEmoji', 'karakterAd', 'btnSurat', 'suratEmoji', 'suratAd',
     'btnRenk', 'btnGozluk', 'gozlukDurum', 'btnSapka', 'sapkaDurum',
     'btnSes', 'btnSifirla', 'btnFoto', 'btnDinle', 'btnSifre',
     'hedefYol', 'yolCizgi', 'yolDolgu', 'yolNoktalar', 'yolTas', 'yolHedef', 'yolSayi',
     'sifreKatman', 'sifreKart', 'sifreHarf', 'btnHarfSes', 'btnGoster',
     'simulasyon', 'plCubuk', 'plSoru', 'plModal', 'plGirdi', 'plGirdiYazi',
     'plImlec', 'plKontrol', 'plBasarili', 'sahteKlavye', 'klavyeTus',
     'sahteImlec', 'anlatim', 'anlatimYazi', 'simDugmeler', 'btnTekrar',
     'btnAnladim'].forEach(function (id) {
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

    if (ogeler.hata) ogeler.hata.hidden = true;     // motor geldi, uyarıyı kapat
    dugmeleriBagla();
    yoluKur();

    // Öğretmen önizlemesi: adres sonuna ?sifre yazınca modül hemen açılır
    if (/sifre/i.test(location.search)) {
      sifreAcildi = true;
      sifreDugmesiniAc();
      setTimeout(sifreyiAc, 700);
    }
    karakteriUygula(false);
    balon('Beni tut ve çek! 😄', 4000);

    // sahne transform:scale ile büyütülünce görüntü bulanmasın
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
