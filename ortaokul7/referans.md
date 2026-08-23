# 📑 Talent14 AI-GALAXY — Ortaokul 7 (O7) Tasarım, Müfredat ve Mimari Referans Dokümanı

Bu doküman, **Ortaokul 7 (7. Sınıf Türkiye Yüzyılı Maarif Modeli & İleri Yapay Zekâ Müfredatı)** kapsamındaki tüm derslerin, arayüzlerin, pedagojik süreçlerin ve K-12 güvenlik standartlarının oluşturulmasında temel referans rehberidir.

---

## 🎯 1. Müfredat Felsefesi ve Hedef Kitle

* **Hedef Kitle:** 7. Sınıf Öğrencileri (12–13 Yaş Grubu)
* **Tematik Yaklaşım:** 12–13 yaş grubunun heyecan duyduğu alanlar (**Uzay Ağları, Otonom Yapay Zekâ Ajanları, 3D Konsept Tasarım, Oyun İçi AI Botları, Geleceğin Veri Bilimi, Siber Güvenlik ve Multimodal Yapay Zekâ Stüdyoları**) ile **Türkiye Yüzyılı Maarif Modeli 7. Sınıf Ders Konuları (Fen Bilimleri 7, Matematik 7, Sosyal Bilgiler 7, Türkçe 7, Bilişim Teknolojileri 7)** ve **İleri Yapay Zekâ Mühendisliği Prensipleri (RAG, Fine-Tuning İlkeleri, Multi-Agent Swarms, Instruction Hierarchy, State Tracking, Synthetic Data, Prompt Injection Defense)** dengeli bir şekilde harmanlanır.

---

## 🏛️ 2. Türkiye Yüzyılı Maarif Modeli 7. Sınıf Entegrasyon İlkeleri

1. **🧪 Fen Bilimleri 7 Entegrasyonu:** Güneş Sistemi ve Ötegezegenler, Hücre ve Bölünmeler (Mitoz/Mayoz), Kuvvet ve Enerji (İş, Potansiyel/Kinetik), Saf Maddeler ve Karışımlar, Işığın Madde ile Etkileşimi (Aynalar, Mercekler), Canlılarda Üreme ve Gelişme.
2. **📐 Matematik 7 Entegrasyonu:** Tam Sayılarla İşlemler, Rasyonel Sayılar, Cebirsel İfadeler ve Eşitlikler, Oran ve Orantı, Yüzdeler, Doğrular ve Açılar, Çokgenler, Çember ve Daire, Veri Analizi (Çizgi ve Daire Grafikleri).
3. **🗺️ Sosyal Bilgiler 7 Entegrasyonu:** İletişim ve İnsan İlişkileri (Medya Okuryazarlığı & AI Etiği), Türk Tarihinde Yolculuk (Osmanlı & Bilim İnsanları), Yerleşme ve Nüfus, Zaman İçinde Bilim (Matbaa'dan AI'ya Bilgi Devrimi), Ekonomi ve Sosyal Hayat (Üretim & Dijital Ticaret), Etkin Vatandaşlık.
4. **📖 Türkçe 7 Entegrasyonu:** Metin Analizi ve Eleştirel Okuma, Hikâye Haritası ve Senaryo Yazımı, Fiiller ve Kip/Kişi Yapıları, Anlatım Biçimleri, Düşünceyi Geliştirme Yolları, Medya Okuryazarlığı ve Görsel Sunum.
5. **💻 Bilişim Teknolojileri 7 Entegrasyonu:** İleri Algoritma Mimarisi, Yapay Zekâ ve Veri Bilimi Giriş, Siber Güvenlik & Etik Hacking Temelleri, Otomasyon İş Akışları, Modelleri Karşılaştırma ve Benchmark.

---

## 🧩 3. Üçlü Bölüm Hiyerarşisi ve Ders Klasör Yapısı

Her ders klasörü (`ortaokul7/ders1`, `ortaokul7/ders2` ... `ortaokul7/ders36`) istisnasız şu 4 temel dosyadan ve yapıdan oluşur:

```
ortaokul7/dersX/
├── index.html            # Modül Ders Portalı (Giriş, Video, Mod Seçimi)
├── dersX_1.html          # 20 Bölümlük Bireysel İnteraktif Laboratuvar
├── dersX_2.html          # Canlı Grup Oyunu / Sınıf Turnuvası
├── dersX_3.html          # Görsel Rehber & İnteraktif Bilgi Kartları
├── dersX_ozet.md         # Eğitmen ve Öğrenci Ders Özet Raporu
├── gorsel_promptlari.md  # Ders İçi 3D Visual & Prompt Listesi
├── video1.mp4            # Tanıtım / Rehber Videosu
└── images/               # 3D Cyberpunk & Sci-Fi Görsel Varlıkları
```

### 🎯 Bölüm Dosyalarının Görevleri:
* **`index.html`:** Kullanıcıyı karşılayan ana portal. Dersin konusunu, kazanımlarını, 3D görsel/video kartını ve 3 ayrı öğrenme moduna (`1.1`, `1.2`, `1.3`) erişim butonlarını barındırır.
* **`dersX_1.html`:** Öğrencinin bireysel olarak tamamladığı **20 Bölümlük İnteraktif Laboratuvar**. Anında geri bildirim, puanlama sistemi ve 20. bölüm sonunda açılan **Öğretmen Takip Şifre Modalı** içerir.
* **`dersX_2.html`:** Sınıf içi etkileşimi, rekabeti ve takım çalışmasını artıran **Grup Oyunu / Turnuva**.
* **`dersX_3.html`:** Dersin teorik ve görsel özetini sunan, flip-card ve akordeon yapılı **Görsel Rehber**.

---

## 🎨 4. UI / UX Tasarım Dili ve Standartları

* **Tema:** Dark Cyberpunk / Advanced Sci-Fi Laboratory.
* **Arka Plan Gradient:** `linear-gradient(135deg, #0B0F19 0%, #1E1B4B 50%, #311042 100%)`
* **Cam Etkisi (Glassmorphism):**
  * `background: rgba(255, 255, 255, 0.06)`
  * `backdrop-filter: blur(16px)`
  * `border: 1.5px solid rgba(255, 255, 255, 0.16)`
* **Renk Paleti:**
  * **Birincil (Primary):** Neon Magenta (`#EC4899` / `#F472B6`)
  * **İkincil (Accent):** Siber Cyan (`#06B6D4`)
  * **Vurgu (Highlight):** Parlak Amber/Sarı (`#FDE047` / `#F59E0B`)
  * **Başarı (Success):** Emerald Yeşil (`#10B981`)
  * **Tehlike/Uyarı (Danger):** Kırmızı (`#EF4444`)
* **Tipografi:**
  * Başlıklar: `'Outfit', sans-serif` (Bold 800/900, Gradient Effect).
  * Gövde Metinleri: `'Plus Jakarta Sans'`, `'Inter', sans-serif`.
  * Vurgular ve Rozetler: `'Fredoka', sans-serif`.
* **Ekran & Layout Kuralı:**
  * Bireysel lab uygulamalarında (`dersX_1.html`) ekran **`100vh`** olarak kurgulanır (`overflow: hidden`). Kaydırma çubuğu gerektirmeyen, tüm içeriği 100% responsive şekilde ekrana sığdıran dinamik flex/grid mimarisi kullanılır.

---

## 🛡️ 5. K-12 Güvenlik, Biyometrik Veri ve Etik Kuralları

1. **🚫 Biyometrik Veri Yasağı:** Gerçek öğrenci fotoğrafları, yüz görüntüleri veya biyometrik ses klonlama araçları KESİNLİKLE kullanılmaz. Tüm örnekler 3D Cyberpunk, Sci-Fi veya dijital sanal karakterlerden oluşur.
2. **🛡️ Şiddet ve Yaş Sınırı Süzgeci:** Kurgularda şiddet, korku veya yetişkin ögeleri bulunamaz. Tüm senaryolar bilimsel keşif, gelecek teknolojileri ve üretkenlik odaklıdır.
3. **🔤 Türkçe Font ve Karakter Garantisi:** Tüm arayüzlerde Türkçe karakterlerin (`İ, ı, Ş, ş, Ğ, ğ, Ü, ü, Ö, ö, Ç, ç`) hatasız görüntülenmesi için `UTF-8` meta tagi ve Google Fonts entegrasyonu eksiksiz kurulur.
4. **🔑 Öğretmen Takip Şifre Akışı:** Her `X.1` bireysel lab çalışmasının 20. bölümü tamamlandığında başarı şifresi modalı açılır. Öğrenciler bu şifreyi canlı yayındaki öğretmen paneline iletir. (Şifreler dersin konusuyla uyumlu, akılda kalıcı ve sürüm uyumlu belirlenir: örn. `otonomajan7`, `ragmimarisi7`, `verianalizi7`).
