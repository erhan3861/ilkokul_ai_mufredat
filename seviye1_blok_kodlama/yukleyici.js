/* =========================================================================
   Ortak yükleyici
   1) Sabit 1280x800 tasarım sahnesini ekrana orantılı ölçekler (Genially mantığı)
   2) Three.js'i sırayla CDN'lerden dener, sonra oyunun script.js dosyasını yükler
   3) Motor gelmezse sayfadaki #hata kutusunu gösterir
   Kullanım: sayfanın sonunda <script src="../yukleyici.js"></script>
   ========================================================================= */

(function () {
  'use strict';

  /* ---------- 1) Sahne ölçekleme ---------- */
  var SAHNE_G = 1280, SAHNE_Y = 800;

  function olcekle() {
    var stage = document.getElementById('stage');
    if (!stage) return;
    var vg = window.innerWidth, vy = window.innerHeight;
    if (window.visualViewport) { vg = window.visualViewport.width; vy = window.visualViewport.height; }
    var o = Math.min(vg / SAHNE_G, vy / SAHNE_Y);
    stage.style.transform = 'translate(' + ((vg - SAHNE_G * o) / 2) + 'px,' +
                            ((vy - SAHNE_Y * o) / 2) + 'px) scale(' + o + ')';
    window.__sahneOlcek = o;
    if (window.__olcekDegisti) window.__olcekDegisti(o);
  }

  window.addEventListener('resize', olcekle);
  window.addEventListener('orientationchange', olcekle);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', olcekle);
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(olcekle).catch(function () { }); }
  window.addEventListener('load', olcekle);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', olcekle);
  olcekle();

  /* ---------- 2) Three.js + oyun ---------- */
  var kaynaklar = [
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js',
    'https://unpkg.com/three@0.128.0/build/three.min.js'
  ];
  var i = 0, oyunYuklendi = false;

  function hataGoster() {
    if (typeof THREE !== 'undefined') return;
    var g = document.getElementById('hata');
    if (g) g.hidden = false;
  }

  function oyunuYukle() {
    if (oyunYuklendi) return;
    oyunYuklendi = true;
    var o = document.createElement('script');
    o.src = 'script.js';          // sayfaya göre çözülür -> oyunun kendi klasörü
    o.onerror = hataGoster;
    document.body.appendChild(o);
  }

  function sonraki() {
    if (typeof THREE !== 'undefined') { oyunuYukle(); return; }
    if (i >= kaynaklar.length) { hataGoster(); return; }
    var s = document.createElement('script');
    s.src = kaynaklar[i++];
    s.onload = oyunuYukle;
    s.onerror = sonraki;
    document.head.appendChild(s);
  }

  sonraki();
})();
