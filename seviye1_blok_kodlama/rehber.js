/* =========================================================================
   Öğretmen Rehberi — ortak slayt motoru
   - Sabit 1280x800 sahneyi ekrana orantılı ölçekler (oyunlarla aynı mantık)
   - Slaytlar arasında ileri/geri gezinme, noktalar, klavye kısayolları
   ========================================================================= */

(function () {
  'use strict';

  var SAHNE_G = 1280, SAHNE_Y = 800;

  function baslat() {
    var stage = document.getElementById('stage');
    var slaytlar = Array.prototype.slice.call(document.querySelectorAll('.slayt'));
    var onceki = document.getElementById('onceki');
    var sonraki = document.getElementById('sonraki');
    var noktaKap = document.getElementById('noktalar');
    var sayfaNo = document.getElementById('sayfaNo');
    var yazdir = document.getElementById('yazdir');
    var aktif = 0;

    /* --- ölçekleme --- */
    function olcekle() {
      if (!stage) return;
      var vg = window.innerWidth, vy = window.innerHeight;
      if (window.visualViewport) { vg = window.visualViewport.width; vy = window.visualViewport.height; }
      var o = Math.min(vg / SAHNE_G, vy / SAHNE_Y);
      stage.style.transform = 'translate(' + ((vg - SAHNE_G * o) / 2) + 'px,' +
                              ((vy - SAHNE_Y * o) / 2) + 'px) scale(' + o + ')';
    }
    window.addEventListener('resize', olcekle);
    window.addEventListener('orientationchange', olcekle);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', olcekle);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(olcekle).catch(function () { });
    window.addEventListener('load', olcekle);
    olcekle();

    if (!slaytlar.length) return;

    /* --- noktalar --- */
    var noktalar = [];
    slaytlar.forEach(function (s, i) {
      var b = document.createElement('button');
      b.className = 'nokta';
      b.type = 'button';
      b.title = (i + 1) + '. sayfa';
      b.setAttribute('aria-label', (i + 1) + '. sayfaya git');
      b.addEventListener('click', function () { goster(i); });
      if (noktaKap) noktaKap.appendChild(b);
      noktalar.push(b);
    });

    function goster(i) {
      aktif = Math.max(0, Math.min(slaytlar.length - 1, i));
      slaytlar.forEach(function (s, j) { s.classList.toggle('aktif', j === aktif); });
      noktalar.forEach(function (n, j) { n.classList.toggle('aktif', j === aktif); });
      if (onceki) onceki.disabled = (aktif === 0);
      if (sonraki) sonraki.disabled = (aktif === slaytlar.length - 1);
      if (sayfaNo) sayfaNo.textContent = (aktif + 1) + ' / ' + slaytlar.length;
    }

    if (onceki) onceki.addEventListener('click', function () { goster(aktif - 1); });
    if (sonraki) sonraki.addEventListener('click', function () { goster(aktif + 1); });
    if (yazdir) yazdir.addEventListener('click', function () { window.print(); });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); goster(aktif + 1); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); goster(aktif - 1); }
      if (e.key === 'Home') { e.preventDefault(); goster(0); }
      if (e.key === 'End') { e.preventDefault(); goster(slaytlar.length - 1); }
    });

    goster(0);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();
})();
