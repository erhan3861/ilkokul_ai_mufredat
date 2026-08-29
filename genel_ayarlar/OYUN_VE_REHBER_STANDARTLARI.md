# Oyun ve Öğretmen Rehberi Standartları

Bu dosya, `seviye1_blok_kodlama` projesinde oturmuş kuralları içerir. **Diğer sınıflarda / seviyelerde de aynen uygulanır.**
Kurallar emir kipindedir; yoruma açık ifade yoktur. Bir kural çakışırsa **küçük numaralı kural üstündür.**

---

## 1. SAYFA İSKELETİ (her sayfa için zorunlu)

1.1. Tüm içerik `<div class="stage-kapsayici"><div class="tutorial-stage" id="stage">` içine alınır.
1.2. Sahne ölçüsü **sabit 1280 × 800 px**'tir. Değiştirilmez.
1.3. `html, body` → `height: 100dvh; overflow: hidden;` — **sayfa asla kaydırılmaz.**
1.4. Ölçekleme JS ile yapılır: `oran = Math.min(vw/1280, vh/800)` → `transform: translate(x,y) scale(oran)`, `transform-origin: 0 0`.
1.5. Yeniden hesaplama olayları: `resize`, `orientationchange`, `visualViewport.resize`, `document.fonts.ready`, `load`.
1.6. İçerik sığmıyorsa **yazı küçültülmez, sayfalama yapılır** (bkz. 6. bölüm).
1.7. Ayrıntı: `genel_ayarlar/RESPONSIVE_TUTORIAL_PROMPT.md`.

---

## 2. YAZI TİPİ VE DİL

2.1. Font: **`'Baloo 2'`** (başlık/arayüz) + **`'Nunito'`** (uzun metin). Yedek: `system-ui, sans-serif`.
2.2. **`Fredoka` KULLANILMAZ** — `ğ, ş, ı` glifleri eksik, Türkçe metinde bozuk görünür.
2.3. Google Fonts satırı birebir şudur:
```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
```
2.4. Arayüz dili Türkçedir. Değişken/fonksiyon adları da Türkçedir (`hedefKutu`, `yildizEkle`).
2.5. Türkçe **I** ve **İ** ayrı harftir. Harf listesi/oyunu yazarken ikisi ayrı madde olur.

---

## 3. ÇOCUK ARAYÜZÜ (1–2. sınıf)

3.1. Düğme yüksekliği **en az 68 px**, yazı **en az 1 rem**, her düğmede **emoji + kısa etiket**.
3.2. Metin yerine **görsel/emoji** önceliklidir. Kelime bilgisi gerektiren ifade kullanılmaz.
3.3. Okuma bilmeyen öğrenci için **🔊 sesli okuma** düğmesi konur; `speechSynthesis`, `lang='tr-TR'`, `rate ≈ 0.9`.
3.4. **Ceza yoktur.** Yanlış tıklama/hamle sadece nazik uyarı üretir; puan düşmez, oyun bitmez.
3.5. Hedef, sayı ile değil **görsel ilerleme** ile anlatılır (yol + hayvan + nokta dizisi).
3.6. Her doğru eylem: ses efekti + ⭐ artışı; her tur sonu: konfeti + kutlama cümlesi.
3.7. Tur sonu mesajı **oyunun bittiği izlenimi vermez**. Doğru kalıp: `Tur bitti! … Şifre için N yıldız kaldı ⭐`.
3.8. Sonraki tur **kendiliğinden başlar**. Çocuğa "yeni tur" düğmesi arattırılmaz.
3.9. Soyut terim yasaktır (istem, özellik, nezaket, kaynak…). Somut karşılığı kullanılır (ekran, parmak, öğretmen…).

---

## 4. VERİ SAKLAMA

4.1. **`localStorage`, `sessionStorage`, çerez, IndexedDB KULLANILMAZ.**
4.2. Gerekçe: okul bilgisayarları ortaktır; her açılış **sıfırdan** başlamalıdır.
4.3. Skor, tur, açılan şifre yalnızca bellekte tutulur.

---

## 5. 3B OYUNLAR (Three.js)

5.1. Sürüm **r128**, sıralı CDN denemesi: cdnjs → jsdelivr → unpkg. Üçü de başarısızsa `#hata` kutusu gösterilir.
5.2. `renderer.outputEncoding = sRGBEncoding` **KULLANILMAZ.** r128'de malzeme renkleri lineer uzaya çevrilmediği için sahne solar.
5.3. Işık reçetesi: `HemisphereLight ≈ 0.62–0.72` + `DirectionalLight ≈ 1.15` (ana) + `≈ 0.45` (yan/dolgu).
5.4. Taban renkleri doygun seçilir; pastel/açık tonlar 3B'de yıkanmış görünür.
5.5. `renderer.setPixelRatio(min(devicePixelRatio × sahneOlcegi, 2.5))` — sahne büyütülünce bulanmasın.
5.6. Küçük eller için **görünmez ve büyük tıklama kutusu** konur (`colorWrite:false, depthWrite:false`); tam isabet gerekmez.
5.7. Sahne kurulumu `try/catch` içindedir; WebGL yoksa kullanıcıya anlaşılır uyarı verilir.
5.8. `.hata` kutusu için CSS'te **`.hata[hidden] { display: none; }`** kuralı zorunludur (yoksa `hidden` özniteliği ezilir ve uyarı hep görünür).

---

## 6. PORTAL / PROGRAM SAYFASI

6.1. Sayfa başına **4 kart** (2 × 2). Daha fazlası okunmaz hâle gelir.
6.2. Hafta/adım numarası kartın solunda, **büyük** (≈ 3 rem) ve etiketli.
6.3. **Seçili hafta yeşildir** ve seçim kalıcıdır (karta tıklayınca da seçilir).
6.4. Üst şeritte üç araç bulunur: **🔍 canlı arama**, **hafta seçici** (kutuya yazılabilir + ▲▼), **sayfa gezinme** (◀ ▶ + `1 / N`).
6.5. Klavye: `←` `→` sayfa, `▲` `▼` hafta.
6.6. Arama Türkçe karakter duyarsızdır (`ı→i, ş→s, ğ→g, ü→u, ö→o, ç→c`).
6.7. Ekran görüntüsü **yalnızca hazır/oynanabilir içerikte** kullanılır; hazır olmayanda görsel konmaz.
6.8. Hazır olmayan hafta kartı **boş bırakılmaz**: başlık + emoji + kısa özet + alt adımlar yazılır, üzerine `⏳ İçerik hazırlanıyor` rozeti konur, düğmeler pasifleşir.
6.9. Yıllık plan **36 hafta** gösterir; içerik 10 haftalıksa geri kalanı 6.8'e göre görünür.

---

## 7. ÖĞRETMEN REHBERİ (her etkinlik için)

7.1. Rehber ayrı bir HTML sayfasıdır, oyunun içine gömülmez.
7.2. **Slayt düzeni sabittir, sırası değişmez:**
   1. **NEDEN?** — tek cümlelik öz + faydası + kazanımlar
   2. **NASIL ANLATILIR?** — 4 adımlı ders akışı, öğretmenin **ağzından cümlelerle**
   3. **ÖRNEKLER** — ❌ kötü → ✅ iyi karşılaştırması + neden iyi olduğu
   4. **ETKİNLİKLER** — o dersin adımları, süresi, gerçek bölümleri, nasıl işleneceği
   5. **EKRAN KULLANIMI** — çocuk ekranda ne yapacak, hangi sırayla, hangi düğmeye basacak
   6. **SORULAR & İPUÇLARI** — sınıf soruları + sık hatalar
7.3. Gezinme: `◀ Önceki / Sonraki ▶`, nokta göstergesi, `1 / N`, klavye okları, **🖨️ Yazdır** (yazdırmada tüm slaytlar alt alta).
7.4. İçerik **uygulamadaki gerçek ekranla birebir** olmalıdır. Uydurma etkinlik adı/bölüm yazılmaz; kaynak dosyadan okunur.
7.5. Ders adları, alt başlıklar ve şifreler zaten `ders_linkleri_ve_sifreleri.txt` benzeri dosyalarda vardır — **önce oraya bakılır.**
7.6. "⬅️ Geri" düğmesi `document.referrer` aynı siteyse **gelinen sayfaya** döner; değilse program sayfasına gider.
7.7. Rehber dili öğretmene hitap eder, çocuğa değil. Cümleler kısa ve uygulanabilir olur.

---

## 8. EK OYUN / KAYNAK SAYFALARI (Tabu, Passaparola vb.)

8.1. Ek sayfalar ayrı HTML dosyasıdır ve tek başına çalışır.
8.2. Bağlantı **üç yerde** görünür:
   - Rehberin **üst şeridinde** büyük sarı düğme,
   - İlgili **etkinlik kartının içinde** sarı çağrı kutusu (kartın boş alanını doldurur, sayfayı taşırmaz),
   - Program sayfasındaki ana kartta **adım listesinin altında küçük sarı çip** (kısa ad: `Tabu`, `Passaparola`).
8.3. Renk kodu sabittir: ek kaynak **sarı**, ana etkinlik **mor**, rehber **sarı**, kodlama **mavi**.
8.4. Yeni ek sayfa eklemek için tek yer değiştirilir: `EK_KAYNAK` tablosu (`{ ad, url, adim, yeniSekme }`).
8.5. Canlı oynanan sayfalarda **cevap gizlidir**; öğretmen düğmeye basınca açılır.
8.6. Öğretmen kararı düğmelerle verilir: 🟢 doğru / 🟡 pas / 🔴 yanlış → ilgili öğe **anında renk değiştirir**.
8.7. Süre alanı öğretmen tarafından **elle girilebilir**; birim `title` ile bildirilir (örn. "saniye olarak yaz, 180 = 3 dakika").
8.8. Oyun sonunda **sınıf puanı** üretilir: `puan = yeşil / toplam × 100` + yıldız derecesi + kısa yorum.
8.9. Kart/soru içerikleri yazdırılabilir olur (🖨️).

---

## 9. ŞİFRE (CTF) MODÜLÜ

9.1. Hedef puana ulaşınca modül **kendiliğinden** açılır.
9.2. Sıra sabittir: **şifre kartı** (büyük harf + yeşil 🔊 Dinle) → **platform simülasyonu** → **✅ Anladım**.
9.3. Simülasyon **izlemeliktir**: `pointer-events: none`, çocuk müdahale edemez.
9.4. Simülasyon platformun gerçek arayüzünü taklit eder: araç çubuğu → mor `?` → FLAG penceresi → klavyeden harf → kontrol düğmesi → ✅.
9.5. Her adım hem yazıyla hem **Türkçe seslendirmeyle** anlatılır.
9.6. Hedef puanlar adım adım artar (örn. 20 → 23 → 26 → 29 → 32 → 35).
9.7. Her oyunun **kendi hayvanı** ve **kendi şifre harfi** olur; kilit hedefe varınca 🔑 anahtara döner.
9.8. Öğretmen önizlemesi için adrese `?sifre` eklenince modül hedef beklemeden açılır.

---

## 10. KOD VE DOSYA DÜZENİ

10.1. Ortak dosyalar seviye klasörünün kökünde durur ve tekrarlanmaz:
   `oyun.css` (kabuk), `yukleyici.js` (ölçek + Three yükleyici), `sifre.css` / `sifre.js` (hedef yolu + CTF), `rehber.css` / `rehber.js` (slayt motoru).
10.2. Her oyun kendi klasöründedir: `index.html`, `style.css` (yalnız tema değişkenleri), `script.js`, `rehber.html`.
10.3. Tema, CSS değişkenleriyle ayarlanır (`--t1, --t2, --t-sahne1, --t-baslik…`); ortak kabuk kopyalanmaz.
10.4. Modül çağrıları `try/catch` ile sarılır — bir modül hatası oyunu durdurmamalıdır.
10.5. Yayın öncesi **`node --check dosya.js`** çalıştırılır.
10.6. Klasör/dosya adları küçük harf ve alt çizgilidir, Türkçe karakter içermez (`sakli_nesneler`, `ai_rehber.html`).

---

## 11. YAYIN (Vercel)

11.1. Her seviye klasörü kendi Vercel projesidir; `vercel --prod --yes` klasör içinden çalıştırılır.
11.2. Klasörde **`vercel.json` → `{ "trailingSlash": true }`** zorunludur. Yoksa `/oyun` adresinde CSS/JS kök dizinde aranır ve sayfa çıplak açılır.
11.3. Sayfa adı değişirse eski adrese **yönlendirme dosyası** bırakılır (paylaşılmış linkler kırılmasın).
11.4. Yayından sonra doğrulama yapılır: sayfa + `style.css` + `script.js` **200** dönmelidir.
11.5. Git commit'i **yalnız ilgili klasörle sınırlıdır**: `git commit -m "..." -- <klasor>`.

---

## 12. EKRAN GÖRÜNTÜSÜ ALMA

12.1. Görseller elle değil, headless tarayıcıyla alınır:
```
chrome --headless=new --hide-scrollbars --enable-unsafe-swiftshader --window-size=1280,800 --virtual-time-budget=9000 --screenshot="cikti.png" "URL"
```
12.2. `--enable-unsafe-swiftshader` WebGL oyunlarının render olması için gereklidir.
12.3. Görsel **480 × 300** boyutuna küçültülüp `.jpg` (kalite ≈ 82) olarak kaydedilir; hedef ≈ 20–30 KB.
12.4. Görseller `onizleme/` klasöründe, `haftaN_oyunadi.jpg` biçiminde durur.

---

## 13. İÇERİK YAZIM İLKELERİ

13.1. Bir cümlede tek fikir; 1. sınıf için en fazla 8–10 kelime.
13.2. Örnekler **somut ve sınıfta denenebilir** olur ("turuncu, uykulu, şapkalı bir kedi").
13.3. "Yanlış" yerine **"eksik"** denir; çocuğun denemesi cesaretlendirilir.
13.4. Her etkinlikte öğretmene **ne söyleyeceği** yazılır, sadece ne yapılacağı değil.
13.5. Güvenlik konuları (kişisel bilgi, korkutucu içerik) sınıf kuralı hâline getirilir ve tekrar ettirilir.
13.6. Uydurulan hiçbir ders adı/etkinlik kullanılmaz; kaynak dosya yoksa **önce sorulur.**
