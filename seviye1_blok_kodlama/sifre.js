/* =========================================================================
   ORTAK ŞİFRE (FLAG) MODÜLÜ  —  Seviye 1 Blok Kodlama Patikası
   -------------------------------------------------------------------------
   1) HEDEF YOLU: sahnenin üstünde bir şerit. Oyunun hayvanı yolda ilerler,
      yolun sonundaki kilit hedefe ulaşınca anahtara döner. Okuma bilmeyen
      çocuk hedefi sayıyla değil, GÖREREK anlar.
   2) ŞİFRE KARTI: büyük harf + yeşil "Dinle" düğmesi (harfi sesli okur).
   3) SİMÜLASYON: platform arayüzünün izlemelik (tıklanamaz) canlandırması —
      mor "?" düğmesi, FLAG penceresi, klavyeden harfin yazılması, kontrol.

   NOT: Hiçbir yerde localStorage/çerez kullanılmaz. Okul bilgisayarları
   ortak kullanıldığı için oyun her açılışta sıfırdan başlar.

   Kullanım (oyunun script.js dosyasında):
     SIFRE.kur({
       hedef: 23, harf: 'k', ses: 'ke', hayvan: '🦋', adim: 2,
       baslik: 'Blok Kodlama Mix Adım2 Küp Avcısı',
       kap: document.querySelector('.sahne-kutu'),
       stage: document.getElementById('stage'),
       konus: konus, konfeti: konfetiPatlat,
       efekt: { pop: sesPop, alkis: sesAlkis }
     });
     SIFRE.yildiz(yildiz);   // yıldız her arttığında
   ========================================================================= */

window.SIFRE = (function () {
  'use strict';

  var C = null, el = {}, sayac = 0, acildi = false, zaman = [];

  function $(id) { return document.getElementById(id); }
  function efekt(ad) { if (C && C.efekt && C.efekt[ad]) C.efekt[ad](); }
  function konus(m) { if (C && C.konus) C.konus(m); }
  function konfeti(n) { if (C && C.konfeti) C.konfeti(n); }

  /* ------------------------------------------------------------------ */
  /* 1) HEDEF YOLU                                                       */
  /* ------------------------------------------------------------------ */

  function yolYap() {
    var d = document.createElement('div');
    d.className = 'hedef-yol';
    d.innerHTML =
      '<span class="yol-bas">⭐</span>' +
      '<div class="yol-cizgi" id="sfrCizgi">' +
        '<div class="yol-dolgu"></div>' +
        '<div class="yol-noktalar" id="sfrNoktalar"></div>' +
        '<div class="yol-tas" id="sfrTas">' + C.hayvan + '</div>' +
      '</div>' +
      '<span class="yol-hedef" id="sfrHedef" title="Hedef">🔒</span>' +
      '<span class="yol-sayi"><b id="sfrSayi">0</b>/' + C.hedef + '</span>';
    C.kap.appendChild(d);

    el.cizgi = $('sfrCizgi');
    el.noktalar = $('sfrNoktalar');
    el.tas = $('sfrTas');
    el.hedef = $('sfrHedef');
    el.sayi = $('sfrSayi');

    // hedef sayısına göre nokta boyutu (kalabalıkta okunur kalsın)
    var boyut = (C.hedef > 30) ? 4 : (C.hedef > 25 ? 5 : 6);
    for (var i = 0; i < C.hedef; i++) {
      var n = document.createElement('i');
      n.style.width = boyut + 'px';
      n.style.height = boyut + 'px';
      el.noktalar.appendChild(n);
    }

    el.hedef.addEventListener('click', function () { if (acildi) ac(); });
  }

  function yoluGuncelle(hareket) {
    var oran = Math.min(1, sayac / C.hedef);
    el.cizgi.style.setProperty('--p', oran);
    el.sayi.textContent = Math.min(sayac, C.hedef);

    var n = el.noktalar.children;
    for (var i = 0; i < n.length; i++) n[i].classList.toggle('gecildi', i < sayac);

    if (hareket) {
      el.tas.classList.remove('zipla');
      void el.tas.offsetWidth;
      el.tas.classList.add('zipla');
    }

    el.hedef.classList.toggle('yakin', oran >= 0.75 && oran < 1);
    if (oran >= 1 && el.hedef.textContent !== '🔑') {
      el.hedef.textContent = '🔑';
      el.hedef.title = 'Şifreni gör';
      el.hedef.classList.remove('yakin');
      el.hedef.classList.add('acildi');
    }
  }

  /* ------------------------------------------------------------------ */
  /* 2) KATMAN (şifre kartı + simülasyon)                                */
  /* ------------------------------------------------------------------ */

  function katmanYap() {
    var d = document.createElement('div');
    d.className = 'sifre-katman';
    d.hidden = true;
    d.innerHTML =
      '<div class="sifre-kart" id="sfrKart">' +
        '<div class="kart-rozet">🎉 ' + C.hedef + ' yıldız topladın!</div>' +
        '<p class="kart-ust">Görevi bitirdin. İşte senin şifren:</p>' +
        '<div class="harf-satir">' +
          '<div class="harf">' + C.harf + '</div>' +
          '<button class="btn-harf-ses" id="sfrHarfSes" type="button" aria-label="Harfi dinle">' +
            '<span class="hoparlor">🔊</span><span>Dinle</span></button>' +
        '</div>' +
        '<p class="kart-alt">Şimdi bu şifreyi nereye yazacağını göstereceğim 👇</p>' +
        '<button class="btn-goster" id="sfrGoster" type="button">▶ Bana Göster</button>' +
      '</div>' +

      '<div class="simulasyon" id="sfrSim" hidden aria-hidden="true">' +
        '<div class="pl-cubuk" id="sfrCubuk">' +
          '<span class="pl-tutamac"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>' +
          '<span class="pl-daire pl-ev">🏠</span>' +
          '<span class="pl-daire pl-bir">' + C.adim + '</span>' +
          '<span class="pl-daire pl-soru" id="sfrSoru">?</span>' +
        '</div>' +

        '<div class="pl-modal" id="sfrModal">' +
          '<div class="pl-modal-serit"></div>' +
          '<div class="pl-modal-ic">' +
            '<div class="pl-baslik">' +
              '<span class="pl-bayrak">🚩</span>' +
              '<div class="pl-baslik-yazi"><h3>' + C.baslik + '</h3>' +
                '<p>İpuçlarını dikkatlice incele, doğru şifreyi (FLAG\'i) bul ve görevi tamamla.</p></div>' +
              '<span class="pl-kapat">✕</span>' +
            '</div>' +
            '<span class="pl-ipucu-baslik">💡 İpuçları</span>' +
            '<div class="pl-ipuclari"><span>1</span><span>2</span></div>' +
            '<div class="pl-cozuldu">🏆 0 öğrenci tarafından çözüldü</div>' +
            '<div class="pl-alan">' +
              '<div class="pl-alan-baslik">Bulduğun şifreyi (FLAG\'i) buraya yaz</div>' +
              '<div class="pl-girdi" id="sfrGirdi">' +
                '<span class="pl-girdi-yazi" id="sfrGirdiYazi">Şifre (FLAG) değerini yaz...</span>' +
                '<span class="pl-imlec" id="sfrImlec"></span>' +
                '<span class="pl-anahtar">🔑</span>' +
              '</div>' +
            '</div>' +
            '<div class="pl-kontrol" id="sfrKontrol">Şifreyi (FLAG\'i) Kontrol Et 🚀</div>' +
            '<div class="pl-basarili" id="sfrBasarili">✅ Görev tamamlandı!</div>' +
          '</div>' +
        '</div>' +

        '<div class="sahte-klavye" id="sfrKlavye">' +
          '<span class="klavye-yazi">Klavye</span>' +
          '<span class="klavye-tus" id="sfrTus">' + C.harf.toUpperCase() + '</span>' +
        '</div>' +

        '<div class="sahte-imlec" id="sfrImlecOk"><span class="halka"></span>➤</div>' +
      '</div>' +

      '<div class="anlatim" id="sfrAnlatim" hidden><span id="sfrAnlatimYazi"></span></div>' +

      '<div class="sim-dugmeler" id="sfrDugmeler" hidden>' +
        '<button class="btn-sim tekrar" id="sfrTekrar" type="button">🔁 Tekrar İzle</button>' +
        '<button class="btn-sim tamam" id="sfrAnladim" type="button">✅ Anladım</button>' +
      '</div>';

    C.stage.appendChild(d);

    el.katman = d;
    el.kart = $('sfrKart');
    el.sim = $('sfrSim');
    el.cubuk = $('sfrCubuk');
    el.soru = $('sfrSoru');
    el.modal = $('sfrModal');
    el.girdi = $('sfrGirdi');
    el.girdiYazi = $('sfrGirdiYazi');
    el.imlec = $('sfrImlec');
    el.kontrol = $('sfrKontrol');
    el.basarili = $('sfrBasarili');
    el.klavye = $('sfrKlavye');
    el.tus = $('sfrTus');
    el.ok = $('sfrImlecOk');
    el.anlatim = $('sfrAnlatim');
    el.anlatimYazi = $('sfrAnlatimYazi');
    el.dugmeler = $('sfrDugmeler');
    el.harfSes = $('sfrHarfSes');

    el.harfSes.addEventListener('click', harfiSeslendir);
    $('sfrGoster').addEventListener('click', function () { efekt('pop'); baslat(); });
    $('sfrTekrar').addEventListener('click', function () { efekt('pop'); baslat(); });
    $('sfrAnladim').addEventListener('click', function () { efekt('pop'); kapat(); });
  }

  /* ------------------------------------------------------------------ */
  /* 3) AKIŞ                                                             */
  /* ------------------------------------------------------------------ */

  function dur() {
    zaman.forEach(clearTimeout);
    zaman = [];
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (e) { } }
  }
  function sonra(ms, fn) { zaman.push(setTimeout(fn, ms)); }

  function ac() {
    dur();
    acildi = true;
    el.katman.hidden = false;
    el.kart.hidden = false;
    el.sim.hidden = true;
    el.anlatim.hidden = true;
    el.dugmeler.hidden = true;
    efekt('alkis');
    konfeti(40);
    sonra(600, function () {
      konus('Tebrikler! ' + C.hedef + ' yıldız topladın. Senin şifren: ' + C.ses + ' harfi.');
    });
  }

  function kapat() {
    dur();
    el.katman.hidden = true;
    sifirla();
  }

  function harfiSeslendir() {
    efekt('pop');
    el.harfSes.classList.add('okuyor');
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(C.ses);
      u.lang = 'tr-TR'; u.rate = 0.75; u.pitch = 1.2;
      u.onend = u.onerror = function () { el.harfSes.classList.remove('okuyor'); };
      speechSynthesis.speak(u);
    } catch (e) { el.harfSes.classList.remove('okuyor'); }
    setTimeout(function () { el.harfSes.classList.remove('okuyor'); }, 2200);
  }

  function merkez(e) {
    var s = C.stage.getBoundingClientRect(), r = e.getBoundingClientRect();
    var o = window.__sahneOlcek || 1;
    return { x: (r.left + r.width / 2 - s.left) / o, y: (r.top + r.height / 2 - s.top) / o };
  }
  function okuGotur(e, dx, dy) {
    var m = merkez(e);
    el.ok.style.left = (m.x + (dx || 0) - 10) + 'px';
    el.ok.style.top = (m.y + (dy || 0) - 8) + 'px';
  }
  function okTikla() {
    el.ok.classList.remove('tikla');
    void el.ok.offsetWidth;
    el.ok.classList.add('tikla');
  }
  function anlat(metin) {
    el.anlatim.hidden = false;
    el.anlatimYazi.textContent = metin;
    konus(metin.replace(/[👆✨⌨️🚀🎉🔑]/g, ''));
  }

  function sifirla() {
    el.cubuk.classList.remove('gorunur');
    el.soru.classList.remove('vurgu', 'basildi');
    el.modal.classList.remove('gorunur');
    el.kontrol.classList.remove('basildi');
    el.basarili.classList.remove('gorunur');
    el.girdiYazi.textContent = 'Şifre (FLAG) değerini yaz...';
    el.girdiYazi.classList.remove('yazildi');
    el.imlec.classList.remove('yanip');
    el.tus.classList.remove('basildi');
    el.klavye.classList.remove('gorunur');
    el.ok.classList.remove('gorunur', 'tikla');
    el.ok.style.left = '640px';
    el.ok.style.top = '700px';
  }

  function baslat() {
    dur(); sifirla();
    el.kart.hidden = true;
    el.sim.hidden = false;
    el.dugmeler.hidden = true;

    sonra(60, function () {
      el.ok.classList.add('gorunur');
      anlat('Şifreyi buraya yazacağız. Sağ üste bak! 👆');
      el.cubuk.classList.add('gorunur');
    });
    sonra(2300, function () {
      anlat('Mor renkli soru işaretine tıkla.');
      el.soru.classList.add('vurgu');
      okuGotur(el.soru);
    });
    sonra(4100, function () { okTikla(); el.soru.classList.add('basildi'); efekt('pop'); });
    sonra(4500, function () {
      el.soru.classList.remove('vurgu');
      el.modal.classList.add('gorunur');
      anlat('Şifre penceresi açıldı ✨');
    });
    sonra(6400, function () {
      anlat('Şimdi klavyeden ' + C.harf.toUpperCase() + ' harfine bas. ⌨️');
      el.klavye.classList.add('gorunur');
      el.imlec.classList.add('yanip');
      okuGotur(el.girdi, -180, 0);
    });
    sonra(8600, function () {
      el.tus.classList.add('basildi');
      el.girdiYazi.textContent = C.harf;
      el.girdiYazi.classList.add('yazildi');
      efekt('tut');
      konus(C.ses);
    });
    sonra(9400, function () { el.tus.classList.remove('basildi'); });
    sonra(10200, function () {
      anlat('Sonra yeşil düğmeye bas: Şifreyi Kontrol Et 🚀');
      el.imlec.classList.remove('yanip');
      okuGotur(el.kontrol);
    });
    sonra(12000, function () { okTikla(); el.kontrol.classList.add('basildi'); efekt('pop'); });
    sonra(12600, function () {
      el.basarili.classList.add('gorunur');
      anlat('Görev tamamlandı! 🎉 Aferin!');
      efekt('alkis');
      konfeti(46);
    });
    sonra(14200, function () { el.dugmeler.hidden = false; el.anlatim.hidden = true; });
  }

  /* ------------------------------------------------------------------ */
  /* 4) DIŞ ARAYÜZ                                                       */
  /* ------------------------------------------------------------------ */

  function kur(ayar) {
    C = ayar;
    C.adim = C.adim || 1;
    sayac = 0; acildi = false;          // her açılışta sıfırdan (kayıt tutulmaz)
    yolYap();
    katmanYap();
    yoluGuncelle(false);
    if (/sifre/i.test(location.search)) setTimeout(ac, 800);   // öğretmen önizlemesi
  }

  function yildiz(toplam) {
    if (!C) return;
    sayac = toplam;
    yoluGuncelle(true);
    if (!acildi && sayac >= C.hedef) {
      acildi = true;
      setTimeout(ac, 900);
    }
  }

  function kalan() { return C ? Math.max(0, C.hedef - sayac) : 0; }

  return { kur: kur, yildiz: yildiz, ac: ac, kapat: kapat, kalan: kalan };
})();
