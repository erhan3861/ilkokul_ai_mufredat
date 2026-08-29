# Küp Avcısı (Işık Tüneli) — Öğretmen Notu

**Patika:** 1. Kademe — Temel • **1–2. Sınıf** • **Adım 1**
**Ana hedef:** **Tıklama** (imleci hedefe götür → tek tıkla)
**Süre:** 8–12 dk
**Dosya:** `index.html` (tek başına açılır, kurulum gerekmez)

---

## Kazanımlar

| # | Kazanım | Oyunda karşılığı |
|---|---------|------------------|
| 1 | İmleci **hedefe götürür** | Uçan küpün üstüne gelir |
| 2 | **Tek tıkla** seçim yapar | Küpe tıklar, küp patlar |
| 3 | Göz–el koordinasyonu | Hareketli hedefi takip eder |
| 4 | Hedefi **bekleme/zamanlama** | Küp yaklaşınca tıklamayı öğrenir |
| 5 | Düğmelerin birer **komut** olduğunu fark eder | Hız, Dur, Renk, Yeni Tünel |

> Öğrenci “tıklamak” eylemini bilinçli bir **komut** olarak deneyimler:
> tıklarım → bir şey olur. Blok kodlamanın ilk sezgisi budur.

---

## Ders Akışı

**1) Isınma (1 dk)**
Ekranı yansıtın: “Bir ışık tünelinde uçuyoruz! İçinde parlayan küpler var. Sizce onları nasıl toplarız?”

**2) Gösterim (2 dk)**
Öğretmen **⏸️ Dur** düğmesine basar, duran tünelde bir küpe tıklayıp gösterir.
Sonra **▶️ Devam Et** ile uçuşu başlatır.

**3) Uygulama (6–8 dk)**
Her öğrenci **🐢 Yavaş** hızda başlar. Rahatlayınca 🚀 Normal, sonra ⚡ Hızlı.

**4) Paylaşım (2 dk)**
“Kaç yıldız topladın?” ⭐ sayacı okunur. 📸 ile ekran görüntüsü alınıp panoya basılabilir.

---

## Zorluk Ayarı (farklılaştırma)

| Öğrenci | Öneri |
|---------|-------|
| Fareyi yeni tanıyor | **⏸️ Dur** + **🎈 Büyük Küpler** açık → hareketsiz, kocaman hedef |
| Biraz alıştı | 🐢 Yavaş hız, Büyük Küpler açık |
| Rahat tıklıyor | 🚀 Normal hız, normal küp |
| Hazır | ⚡ Hızlı hız → zamanlama becerisi |

**🎈 Büyük Küpler** düğmesi küpleri 1,5 kat büyütür. Ayrıca her küpün etrafında
**görünmez ve daha geniş bir tıklama alanı** vardır; yani tam isabet gerekmez —
küçük eller için kasıtlı olarak affedicidir.

---

## Sorulacak Sorular

- 👉 “Küpe tıklayınca ne oldu?” → *patladı, yıldız kazandım*
- 👉 “Boşluğa tıklayınca ne oldu?” → *bir şey olmadı* (hedefi seçmek gerekiyor)
- 👉 “Hangi düğme tüneli durdurdu?” → komut–sonuç ilişkisi
- 👉 “Bütün küpleri toplayınca ne oldu?” → *yeni tünel açıldı* (görev tamamlama)

---

## Kontrol Rehberi

| Düğme | Ne yapar |
|-------|----------|
| 🐢 Hız | Yavaş → Normal → Hızlı |
| ⏸️ Dur | Uçuşu duraklatır / devam ettirir (klavyeden **Boşluk**) |
| 🎨 Renk | Gökkuşağı → Neon Mavi → Şeker → Orman teması |
| 🔁 Yeni Tünel | Bambaşka bir tünel çizer, turu 1'e döndürür (klavyeden **N**) |
| 📸 Fotoğraf | Ekran görüntüsünü PNG indirir |
| 🔊 Ses | Ses efektlerini ve sesli anlatımı açar-kapatır |
| 🎈 Büyük Küpler | Küpleri büyütür (kolay mod) |
| 🔊 Dinle | Yönergeyi Türkçe sesli okur |

Sağ üstte **tur numarası**, sol üstte **kalan küp**, üst şeritte **⭐ yıldız** görünür.
Toplanan küpler geri gelmez; toplanmayanlar tünel döngüsünde tekrar karşınıza çıkar —
**kaçırmak ceza değildir**, bu yaş grubunda kasıtlı bir tercihtir.

---

## Teknik Notlar

- Tünel her seferinde **rastgele** üretilir (kapalı spline eğrisi), yani her tur farklıdır.
- Fare, dokunmatik tahta ve **tablet** ile çalışır.
- Tam ekran için **F11**.
- 3B motoru (Three.js) CDN'den yüklenir → **internet bağlantısı gerekir.**
- Hareket hassasiyeti olan öğrenciler için: **⏸️ Dur** ile oyun tamamen sabit
  bir tıklama alıştırmasına dönüşür.
