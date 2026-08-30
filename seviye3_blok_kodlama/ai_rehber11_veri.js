/* =========================================================================
   AI-GALAXY • LİSE 11 (11. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : lise11/ders_linkleri_ve_sifreleri.md
   Etkinlik adları ve ekran metni  : lise11/dersN/content.js & mufredat.md
   Uydurulan ders/etkinlik adı yoktur.

   NOT — 11. SINIFIN (LİSE 11) AYIRT EDİCİ YANLARI:
   • Lise uzmanlaşma ve ileri sorgulama düzeyidir.
   • Ağırlık "Kanıt ve Varsayım Denetimi", "Ön Bilgi & Kavram Yanılgısı",
     "Talimat Önceliği & Çakışma Çözümü", "Temsil Kaybı & Yorum Denetimi",
     "Bilimsel Kod & Kaynak İzi", "İddia–Kaynak Matrisi & Çelişki Ayıklama",
     "Kör Rubrik & Karşı Görüş Savunusu", "Model Sınırı & Bilişsel Sınama",
     "Varsayım & Korunum Yasaları", "Çoklu Mod & Sistem Orkestrasyonu",
     "Paydaş, Veri Akışı ve Etik Etki Analizi".
   • Üç aşamalı ders yapısı:
       – 1. Aşama: Bireysel Konu Keşfi, 5 Bileşenli Formül & Kanıt Kartı
       – 2. Aşama: Grup Atölyesi (4 Rol: Akış Sorumlusu, Prompt Mimarı, Sorgulayıcı, Sunucu)
                   Maarif, Hobi, Teknoloji, Geleceğin Meslekleri İstasyonları + Kanıt Kartı
       – 3. Aşama: Prompt Vitrini (4 Alan Şablonu) & 4 Boyutlu Kalite Kontrolü
   • Şifreler her aşamanın bitiş slaytında verilir (örn. 1. hafta: cerceve11, paydas11, problem11).
   ========================================================================= */

var AI_TEMEL = 'https://lise11.vercel.app';

var AI_GENEL_EKRAN = [
  { b: '1️⃣ Slayt Başlığı ve Odak Rozeti', m: 'Öğrenci ekranın sol üstündeki konuyu, kazanım etiketlerini ve odak cümlesini inceler.' },
  { b: '2️⃣ Temel Fikirler ve 5 Bileşenli Formül', m: 'Prompt mimarisi bileşenlerini (Rol + Görev + Bağlam + Detay + Format) ve kanıt-varsayım kurallarını inceler.' },
  { b: '3️⃣ Karşılaştırmalı Örnek (Önce / Sonra)', m: 'Belirsiz istek ile kanıt ve varsayım denetimli güçlü brief arasındaki farkı analiz eder.' },
  { b: '4️⃣ Grup Atölyesi ve İstasyon Görevleri', m: '4 takım rolünü (Akış, Mimar, Sorgulayıcı, Sunucu) paylaşır; Maarif, Hobi, Teknoloji ve Meslek istasyonlarında üretim + kanıt kartı hazırlar.' },
  { b: '5️⃣ Prompt Vitrini ve Kalite Kontrolü', m: 'Gerçek prompt şablonlarını inceler; 4 maddelik kalite kontrol listesinden geçirir.' },
  { b: '6️⃣ Tamamlama ve Şifre (FLAG)', m: 'Aşama sonu tebrik ekranında şifresini alır ve öğretmen onayına sunar.' }
];

var AI_DERSLER = {

  1: {
    ad: 'AI Benim Öğrenme Asistanım',
    emoji: '🧭',
    konu: 'Ön Bilgi, Kavram Yanılgısı ve Anlama Kanıtı (Biyoloji 11: Fotosentez Enerji Dönüşümü)',
    tekCumle: 'Yapay zekâyı hazır cevap almak için değil; <b>ön bilgiyi açığa çıkaran, olası kavram yanılgılarını belirleyen ve anlama kanıtı toplayan kişisel bir öğrenme koçu</b> olarak yönlendirmektir.',
    neden: [
      '11. sınıf öğrencisi hazır bilgiyi doğrudan tüketmek yerine kendi bilişsel sürecini ve varsayımlarını sorgulamalıdır.',
      'Öğrenme açıklamasında ön bilgi, kavram yanılgısı ve anlama kanıtı ayrı gösterilmelidir.',
      'Fotosentez Enerji Dönüşümü, Diyafram-Enstantane Dengesi, Mobil Veri Akışı ve Yenilenebilir Enerji Mühendisliği istasyonlarıyla çok disiplinli öğrenme kurulur.'
    ],
    kazanim: [
      'Hazır cevap istemek ile öğrenme koçu yönlendirmeyi <b>ayırt eder</b>.',
      'Öğrenme sürecini <b>Ön Bilgi → Açıklama → Kavram Yanılgısı Testi → Anlama Kanıtı</b> adımlarına böler.',
      'Yapay zekânın yanıtındaki eksiklikleri ve varsayımları <b>denetler</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hazır bilgi mi, bilişsel koçluk mu? (5 dk)',
        m: 'Tahtaya yazın: <b>“Fotosentezdeki enerji dönüşümünü anlat.”</b> Sorun: “Bu çıktı öğrencinin hangi kavram yanılgısını yakalayabilir?”' },
      { b: '2️⃣ Kanıt Odaklı Asistan Formülü (5 dk)',
        m: 'Formülü tahtaya yazın: <b>1. Rol (Öğretici) · 2. Konu (Enerji Dönüşümü) · 3. Düzey (11. sınıf) · 4. Yöntem (Kavramsal Köprü) · 5. Kanıt/Sınama (Yanılgı Analizi).</b>' },
      { b: '3️⃣ Etkinlik ve İstasyonlar (25 dk)',
        m: '1.1 Bireysel Keşif → 1.2 Grup Atölyesi (Maarif/Fotosentez, Hobi/Diyafram, Teknoloji/Veri Akışı, Meslek/Enerji) → 1.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Öğrenciler ürettikleri koçluk promptlarını çalıştırır. Şifreler: <b>cerceve11 · paydas11 · problem11</b>.' }
    ],
    ornekler: [
      { kotu: 'Fotosentezi anlat.', iyi: '11. sınıf biyoloji öğrencisine fotosentezi önce günlük yaşam benzetmesiyle, sonra bilimsel kavramlarla açıkla; ışığa bağlı ve bağımsız tepkimeleri karşılaştıran tablo ve 3 kavrama sorusu ekle. Öğrenme açıklamasında ön bilgiyi, kavram yanılgısını ve anlama kanıtını ayrı göster.', not: 'Tek yönlü anlatım → Ön bilgi, yanılgı ve anlama kanıtı içeren koçluk briefi.' },
      { kotu: 'Fotoğraf ayarlarını söyle.', iyi: 'Fotoğrafçılık eğitmeni rolünde, diyafram ve enstantane dengesini su musluğu ve havuz benzetmesiyle açıkla; 3 çekim hatası verip öğrencinin bunları analiz etmesini sağla.', not: 'Hata analizi ve kavramsal sınama.' },
      { kotu: 'Yenilenebilir enerji nedir?', iyi: 'Yenilenebilir enerji uzmanı olarak, güneş ve rüzgâr santrallerinin şebeke entegrasyonunu açıkla; varsayımları, gerekli kanıtları ve güven sınırını ayrı başlıklarda ver.', not: 'Varsayım ve güven sınırı kısıtları.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 1.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Öğrenme hedefini yazma, öğretme biçimini seçme ve anladığını sınatma.',
        sayfalar: ['Öğrenme Asistanı Kavramı', '3 Temel İlke', '5 Bileşenli Formül', 'Karşılaştırma Kartı', 'Mini Uygulama'],
        nasil: 'Öğrenci slaytları sırayla tamamlar, kanıt odaklı asistan promptunu yazar. Şifre: cerceve11', pass: 'cerceve11' },
      { ad: 'Grup Atölyesi (Ders 1.2)', sure: '18 dk', tur: 'Grup', ne: 'Fotosentez, Fotoğrafçılık, Veri Akışı ve Enerji Mühendisliği istasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Maarif (Fotosentez)', 'İstasyon 2: Hobi (Diyafram)', 'İstasyon 3: Teknoloji (Veri Akışı)', 'İstasyon 4: Meslek (Enerji)'],
        nasil: 'Grup 4 rolü paylaşır; sunum kartı ve kanıt kartı hazırlar. Şifre: paydas11', pass: 'paydas11' },
      { ad: 'Prompt Vitrini (Ders 1.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Maarif, Hobi, Teknoloji ve Meslek şablonları + Kalite Kontrolü.',
        sayfalar: ['Maarif Promptu', 'Hobi Koçu', 'Teknoloji Asistanı', 'Meslek Danışmanı', '4 Kalite Kontrolü'],
        nasil: 'Şablonları inceler, kendi öğrenme hedefine uyarlar. Şifre: problem11', pass: 'problem11' }
    ],
    sorular: [
      'Yapay zekâdan hazır özet almak ile ona "kavram yanılgımı yakala" komutu vermek arasındaki fark nedir?',
      'Öğrenme açıklamasında "ön bilgi" ve "anlama kanıtı" ayrımını yapmak öğrenciye ne kazandırır?',
      '11. sınıf düzeyinde bir konuyu çalışırken hangi çıktı formatları kalıcı öğrenmeyi destekler?',
      'Yapay zekânın verdiği cevabın güven sınırını nasıl bağımsız kaynaklarla denetleriz?'
    ],
    ipuclari: [
      'Öğrencilere yapay zekâya "Bana doğrudan cevap verme, beni adım adım yönlendir" komutunu ekletin.',
      'Sınıfta en iyi anlama kanıtı sorusunu seçip tahtada test edin.',
      'Klavye sağ/sol oklarıyla slayt geçişini akıllı tahtada gösterin.'
    ]
  },

  2: {
    ad: 'İyi Prompt Nasıl Kurulur?',
    emoji: '🧱',
    konu: 'Talimat Önceliği ve Çakışma Çözümü (Coğrafya 11: İklim Değişikliği)',
    tekCumle: 'Belirsiz bir isteği rol, görev, bağlam, ayrıntı ve çıktı biçimiyle yapılandırmak; <b>kısıt ve format arasındaki çakışmaları öncelik sırasıyla çözmektir</b>.',
    neden: [
      'Karmaşık promptlarda bazen format (örn. 100 kelime) ile içerik (örn. 5 detaylı örnek) birbiriyle çakışır; modelin hangi talimata öncelik vereceği netleştirilmelidir.',
      'İklim Değişikliği Kartı, Gitar Çalışma Planı, Kulüp Web Briefi ve Robotik Kariyer Tanıtımı modellenir.',
      'Çakışma çözümü, kısıt hiyerarşisi ve denetlenebilir format standartları uygulanır.'
    ],
    kazanim: [
      'Bir promptu <b>Rol, Görev, Bağlam, Detay ve Format</b> bileşenlerine ayırır.',
      'Prompttaki çakışan talepleri <b>öncelik sırasına koyarak</b> çözer.',
      'Çıktıyı 6 satırlık tablo veya yapılandırılmış format olarak <b>standartlaştırır</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Çakışan talimatlar (5 dk)',
        m: '“Hem 3 paragraflık detaylı analiz yaz hem de 50 kelimeyi geçme derseniz model ne yapar?” çakışmasını tartışın.' },
      { b: '2️⃣ Talimat Hiyerarşisi Modeli (5 dk)',
        m: '🧱 <b>1. Rol (Uzmanlık) · 2. Görev (Eylem) · 3. Bağlam (Kim/Neden) · 4. Öncelikli Kısıt · 5. Teslim Formatı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '2.1 Bireysel Keşif → 2.2 Takım Brief Atölyesi (İklim, Gitar, Web Brief, Robotik) → 2.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar çakışmasız 5 bileşenli brieflerini sunar. Şifreler: <b>baglam11 · varsayim11 · context11</b>.' }
    ],
    ornekler: [
      { kotu: 'İklim değişikliği için güzel bir şey hazırla.', iyi: 'Bir fen iletişimcisi olarak 10. sınıf öğrencileri için iklim değişikliğinin 3 nedenini ve 3 sonucunu açıkla; Türkiye’den 2 örnek kullan, belirsiz iddiaları işaretle ve çıktıyı 6 satırlık tablo olarak ver. Rol, görev, bağlam, kısıt ve format arasındaki çakışmaları öncelik sırasıyla çöz.', not: '5 bileşen ve kısıt önceliği eksiksiz tanımlandı.' },
      { kotu: 'Gitar planı yap.', iyi: 'Klasik gitar eğitmeni rolünde, 11. sınıf öğrencisi için haftalık 25 dakikalık parmak egzersiz tablosu hazırla; kısıt çakışması durumunda teknik doğruluğu süre kısıtının önüne koy.', not: 'Açık kural önceliği.' },
      { kotu: 'Robotik mesleğini anlat.', iyi: 'Endüstriyel robotik uzmanı olarak, 2035 üretim hattındaki mühendisin görevlerini 3 başlıkta özetle; varsayımları ve güven sınırını ayrı belirt.', not: 'Varsayım ve güvenilirlik denetimi.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 2.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Rolü amaca bağlama, bağlam ve sınır koyma, çıktıyı tarif etme formülü.',
        sayfalar: ['Prompt Mimarisi Girişi', '3 Tasarım Kuralı', '5 Bileşenli Formül', 'İklim Karşılaştırması', 'Brief Tamir Görevi'],
        nasil: 'Öğrenci 5 bileşeni inceler, eksik promptları tamir eder. Şifre: baglam11', pass: 'baglam11' },
      { ad: 'Grup Atölyesi (Ders 2.2)', sure: '18 dk', tur: 'Grup', ne: 'İklim Kartı, Gitar Planı, Web Sayfası Briefi ve Robotik Tanıtımı.',
        sayfalar: ['Roller', 'İstasyon 1: İklim Kartı', 'İstasyon 2: Gitar Planı', 'İstasyon 3: Web Briefi', 'İstasyon 4: Robotik Tanıtımı'],
        nasil: 'Grup 5 bileşenli briefi ve kanıt kartını hazırlar. Şifre: varsayim11', pass: 'varsayim11' },
      { ad: 'Prompt Vitrini (Ders 2.3)', sure: '10 dk', tur: 'Vitrin', ne: 'İklim, Gitar, Web Kulübü ve Robotik Şablonları + Kalite Kontrol.',
        sayfalar: ['İklim Şablonu', 'Hobi Şablonu', 'Web Tasarım Şablonu', 'Robotik Şablonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, kısıtları test eder. Şifre: context11', pass: 'context11' }
    ],
    sorular: [
      'Bir promptta birden fazla kısıt çeliştiğinde yapay zekâ nasıl davranır?',
      'Talimat önceliğini açıkça belirtmek modelin halüsinasyonunu nasıl azaltır?',
      'Tablo çıktısında sütun başlıklarını ve veri tiplerini önceden tanımlamanın avantajı nedir?',
      '11. sınıf düzeyinde bir brief yazarken "varsayımlar" neden ayrı bir başlıkta istenmelidir?'
    ],
    ipuclari: [
      'Öğrencilere "Kısıt 1 ile Kısıt 2 çelişirse Kısıt 1\'e uy" şeklinde açık talimatlar yazdırın.',
      'Sınıf içinde en net 5 bileşenli briefi seçin.',
      'Tablo formatında en az 3 farklı sütun parametresi belirletin.'
    ]
  },

  3: {
    ad: 'Aynı Bilgiyi Farklı Şekillerde Anlatmak',
    emoji: '🔄',
    konu: 'Temsil Kaybı ve Yorum Denetimi (Tarih 11: Tanzimat & Modernleşme)',
    tekCumle: 'Aynı doğru bilgiyi tablo, infografik, hikâye veya görsel sahneye dönüştürürken <b>her temsilin koruduğu, kaybettiği ve yorum kattığı bilgiyi bilimsel olarak denetlemektir</b>.',
    neden: [
      'Bilgi bir formattan diğerine aktarılırken veri kaybı veya istem dışı sübjektif yorum eklenmesi riski oluşur.',
      'Tanzimat Dönemi Dönüşümleri, Basketbol Hücum Seti, İnternet Paketinin Yolculuğu ve Biyoteknoloji Uzmanı günü dönüştürülür.',
      'Kurgu ile tarihsel olgu birbirinden ayrılır; temsil kaybı matrisi doldurulur.'
    ],
    kazanim: [
      'Bir bilgi paketini <b>karşılaştırma tablosu, infografik ve tarihsel kurguya</b> dönüştürür.',
      'Dönüşümde <b>bilgi kaybı ve eklenen yorum payını</b> analiz eder.',
      'Hedef kitlenin ihtiyacına en uygun temsil formatını <b>gerekçelendirir</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Temsilde ne kayboldu? (5 dk)',
        m: 'Tarihî bir kanun metnini drama senaryosuna dönüştürdüğümüzde hangi hukuki nüansların kaybolabileceğini tartışın.' },
      { b: '2️⃣ Temsil Kaybı Matrisi (5 dk)',
        m: '🔄 <b>1. Çekirdek Bilgi · 2. Temsil Biçimi · 3. Korunan Öğe · 4. Kaybolan Detay · 5. Eklenen Yorum.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '3.1 Bireysel Keşif → 3.2 Grup Atölyesi (Tanzimat, Basketbol, İnternet Paketi, Biyoteknoloji) → 3.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar 3 farklı temsil ve kayıp analizini sunar. Şifreler: <b>kanit11 · guven11 · matris11</b>.' }
    ],
    ornekler: [
      { kotu: 'Osmanlı modernleşmesini farklı anlat.', iyi: 'Tanzimat döneminin temel dönüşümlerini aynı bilgi çekirdeğini koruyarak karşılaştırma tablosu, 5 kutulu infografik planı ve bir öğrencinin gözünden 150 kelimelik tarihsel kurgu olarak üret; kurgu ile tarihsel olguyu ayır. Her temsilin koruduğu, kaybettiği ve yorum kattığı bilgiyi karşılaştır.', not: '3 temsil biçimi ve kayıp-yorum analizi.' },
      { kotu: 'Basketbol taktiği yaz.', iyi: 'Pick and roll hücum setini oyuncu tablosuna, taktik tahtası şemasına ve heyecanlı maç anı hikâyesine dönüştür; her formatın avantajını ve eksik bıraktığı boyutu listele.', not: 'Format karşılaştırması ve sınırlılıklar.' },
      { kotu: 'İnternet nasıl çalışır?', iyi: 'Bir veri paketinin yolculuğunu: TCP/IP tablosu, router akış şeması ve 200 kelimelik mikro öykü olarak üret; teknik doğruluk kaybını denetle.', not: 'Teknik doğruluğun temsiller arası korunması.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 3.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Özü sabitleme, temsili amaca göre seçme ve bilgi kaybı denetimi.',
        sayfalar: ['Bilgi Tasarımı Girişi', '3 Temel Kural', 'Dönüşüm Formülü', 'Tanzimat Örneği', 'Kayıp Kontrolü Görevi'],
        nasil: 'Bilgi paketini 3 farklı temsile dönüştürür. Şifre: kanit11', pass: 'kanit11' },
      { ad: 'Grup Atölyesi (Ders 3.2)', sure: '18 dk', tur: 'Grup', ne: 'Tanzimat Dönüşümleri, Basketbol Seti, Veri Paketi ve Biyoteknoloji İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Tanzimat', 'İstasyon 2: Basketbol Seti', 'İstasyon 3: Veri Paketi', 'İstasyon 4: Biyoteknoloji'],
        nasil: 'Grup 3 formatlı sunum ve kanıt kartını tamamlar. Şifre: guven11', pass: 'guven11' },
      { ad: 'Prompt Vitrini (Ders 3.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Spor, İnternet Ağı ve Biyoteknoloji Şablonları + Kalite Kontrol.',
        sayfalar: ['Tarih Dönüşümü', 'Spor Şeması', 'Teknoloji Akışı', 'Meslek Hikâyesi', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, bilgi kaybı kriterlerini denetler. Şifre: matris11', pass: 'matris11' }
    ],
    sorular: [
      'Hikâye formatı duygu ve empati katarken hangi somut verilerin geri planda kalmasına yol açar?',
      'Bir infografik akışında oklar neden sadece yönü değil, sebep-sonuç ilişkisini de taşımalıdır?',
      'Farklı formatlardaki dönüşümlerde "kurgu" ile "tarihsel gerçek" ayrımı nasıl korunur?',
      'Temsil kaybı analizi yapmak karar vericilere ve araştırmacılara nasıl fayda sağlar?'
    ],
    ipuclari: [
      'Öğrencilere hikâye metinlerinde olgusal bilgileri kalın (bold) yazdırmayı deneyin.',
      'Tablolarda en az 3 farklı karşılaştırma kriteri kullandırın.',
      'Süreç adımlarının kronolojik sırasını kontrol ettirin.'
    ]
  },

  4: {
    ad: 'Karmaşık Konuyu Görsele Dönüştürmek',
    emoji: '🧬',
    konu: 'Bilimsel Kod, Ölçek ve Kaynak İzi (Biyoloji 11: Ökaryot Hücre)',
    tekCumle: 'Karmaşık bir sistemi bilimsel doğruluğu koruyan öğeler, ilişkiler, etiketler ve görsel hiyerarşiyle anlatırken <b>görsel kodların bilimsel anlamını, ölçek sınırlılığını ve kaynak gerektiren iddiaları belirtmektir</b>.',
    neden: [
      'Görseller sadece estetik değil, epistemik (bilgi taşıyıcı) araçlardır; her renk ve okun bilimsel bir karşılığı olmalıdır.',
      'Ökaryot Hücre Kesiti, Oyun Mekaniği Sistemi, Akıllı Ev Sensör Ağı ve Uzay Tarımı İstasyonu modellenir.',
      'Ölçek dışı öğeler, temsili renk uyarıları ve hatalı organel yasakları tanımlanır.'
    ],
    kazanim: [
      'Karmaşık bir sistemi <b>nesneler, süreçler ve ölçekler</b> olarak parçalar.',
      'Görseldeki kodların (renk, ok, kesik çizgi) <b>bilimsel anlamını açıklar</b>.',
      'Ölçek sınırlılıklarını ve kaynak izini <b>lejantta görünür kılar</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Görsel bir iddia mıdır? (5 dk)',
        m: '“Bir hücre görselinde mitokondrinin çekirdekten büyük çizilmesi sadece bir çizim tercihi midir, yoksa kavram yanılgısı mıdır?” tartışmasını açın.' },
      { b: '2️⃣ Bilimsel Görselleştirme Formülü (5 dk)',
        m: '🧬 <b>1. Sistem Kavramı · 2. Öğeler · 3. İlişki & Akışlar · 4. Bilimsel Kod/Lejant · 5. Ölçek & Hata Kısıtı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '4.1 Bireysel Keşif → 4.2 Grup Atölyesi (Ökaryot Hücre, Oyun Seviyesi, Akıllı Ev, Uzay Tarımı) → 4.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar görsel sahneleme ve kanıt kartlarını sunar. Şifreler: <b>arguman11 · munazara11 · celikadam11</b>.' }
    ],
    ornekler: [
      { kotu: 'Hücreyi gösteren görsel yap.', iyi: '10. sınıf düzeyinde ökaryot hücreyi kesit infografiği olarak tasarla; çekirdek, mitokondri, ribozom ve zar yapısını etiketle, madde–enerji ilişkisini oklarla göster, organellerin ölçeğini temsili olarak belirt ve hatalı organel ekleme. Görsel kodların bilimsel anlamını, ölçek sınırlılığını ve kaynak gerektiren iddiaları belirt.', not: 'Kesit infografiği, bilimsel etiketler ve kaynak izi.' },
      { kotu: 'Oyun haritası çiz.', iyi: '2D platform oyun mekaniğini gösteren şematik plan: Başlangıç, tuzaklar, enerji kaynakları ve çıkış kapısını renk kodlarıyla etiketle; mekanik ilişkileri lejantta açıkla.', not: 'Oyun tasarım haritası ve mekanik lejantı.' },
      { kotu: 'Akıllı ev resmi yap.', iyi: 'Akıllı ev sensör ağını gösteren izometrik kesit görseli tasarla: Sıcaklık sensörü, kamera ve merkezi hub arasındaki veri akışını kesik oklarla göster; gizlilik rozeti ve ölçek uyarısı ekle.', not: 'Sensör ağı ve veri gizliliği notu.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 4.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sistemi parçalara ayırma, ilişkiyi görünür yapma ve yanlış görselleştirmeyi önleme.',
        sayfalar: ['Görsel Hiyerarşi Girişi', '3 Tasarım Kuralı', 'Görsel Formülü', 'Ökaryot Hücre Örneği', 'Görsel Harita Görevi'],
        nasil: 'Sistemik görselleştirme promptunu ve kanıt kartını kurar. Şifre: arguman11', pass: 'arguman11' },
      { ad: 'Grup Atölyesi (Ders 4.2)', sure: '18 dk', tur: 'Grup', ne: 'Ökaryot Hücre, Oyun Seviyesi Mekaniği, Akıllı Ev ve Uzay Tarımı İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Ökaryot Hücre', 'İstasyon 2: Oyun Mekaniği', 'İstasyon 3: Akıllı Ev Ağı', 'İstasyon 4: Uzay Tarımı'],
        nasil: 'Grup görsel öğe, ilişki ve kanıt kartını tamamlar. Şifre: munazara11', pass: 'munazara11' },
      { ad: 'Prompt Vitrini (Ders 4.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Biyoloji Kesiti, Oyun Haritası, Sensör Ağı ve Uzay İstasyonu Şablonları.',
        sayfalar: ['Hücre Kesiti', 'Oyun Haritası', 'Akıllı Sensörler', 'Uzay İstasyonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, hiyerarşi kurallarını test eder. Şifre: celikadam11', pass: 'celikadam11' }
    ],
    sorular: [
      'Görsel kodların (renk tonu, ok tipi) bilimsel bir anlam taşıması neden kritik bir zorunluluktur?',
      'Mikroskobik yapılar görselleştirilirken "temsili ölçek" uyarısı eklenmezse ne olur?',
      'İzometrik kesit çizimlerinde katmanlar arası veri/madde akışı nasıl gösterilmelidir?',
      'Görsel hiyerarşi ile zihinsel öğrenme sırası arasındaki ilişki nedir?'
    ],
    ipuclari: [
      'Öğrencilere ana organelleri en fazla 5–6 adetle sınırlandırmalarını söyleyin.',
      'Her ok türünün anlamını bir lejant tablosuyla açıklamalarını sağlayın.',
      'Negatif kısıtları net olarak tanımlatın.'
    ]
  },

  5: {
    ad: 'AI Hata Yapabilir mi?',
    emoji: '🔎',
    konu: 'İddia–Kaynak Matrisi ve Çelişki (Halüsinasyon & Kanıt Seviyesi)',
    tekCumle: 'Yapay zekâ çıktısındaki iddiaları ayıklamak; <b>kaynak kalitesi, çapraz kontrol, çelişki analizi ve belirsizlik diliyle</b> güven düzeyini bilimsel olarak değerlendirmektir.',
    neden: [
      'Büyük dil modelleri akıcı ve profesyonel görünen yanlış bilgiler üretebilir (halüsinasyon).',
      'Tarih, sayı, alıntı ve nedensellik iddiaları bağımsız birincil kaynaklarla teyit edilmelidir.',
      'Tarihsel Olaylar, Spor Performansı Tavsiyeleri, Cihaz Özellikleri ve 2035 Kariyer Tahminleri denetlenir.'
    ],
    kazanim: [
      'Yapay zekâ yanıtındaki iddiaları <b>iddia–kaynak–doğrulama tablosuna</b> ayırır.',
      'Bilginin güven düzeyini <b>Yüksek, Orta, Doğrulanmalı</b> şeklinde sınıflandırır.',
      'Çelişkili veya doğrulanmamış bilgileri <b>belirsizlik diliyle</b> raporlar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kusursuz görünen yanılgı (5 dk)',
        m: 'Yapay zekânın çok mantıklı gelen ama uydurma bir tarihî antlaşma maddesi örneğini gösterin: “Nasıl bu kadar kendinden emin konuşabiliyor?”' },
      { b: '2️⃣ 5 Adımlı Denetim Formülü (5 dk)',
        m: '🔎 <b>1. İddia Ne? · 2. Kaynak Kim? · 3. Güncel mi? · 4. Bağımsız Destek Var mı? · 5. Güven Hükmü.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '5.1 Bireysel Keşif → 5.2 Grup Atölyesi (Tarihsel Olay, Spor Tavsiyesi, Cihaz İddiası, 2035 Kariyer) → 5.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar şüpheli iddiaları ve çapraz kontrol adımlarını açıklar. Şifreler: <b>senaryo11 · belirsizlik11 · gelecek11</b>.' }
    ],
    ornekler: [
      { kotu: 'Bu AI cevabı doğru mu?', iyi: 'Aşağıdaki AI çıktısındaki doğrulanabilir iddiaları tabloya ayır. Her iddia için gereken kaynak türünü, güncellik ihtiyacını, bağımsız doğrulama adımını ve güven düzeyini yaz; doğrulanmamış ayrıntıları kesinleştirme.', not: 'İddia–kaynak–doğrulama matrisi.' },
      { kotu: 'Sporcu takviyesi öner.', iyi: 'Aşağıdaki sporcu beslenme tavsiyesindeki bilimsel iddiaları ayıkla; klinik çalışma desteği olanlar ile kişiye özel risk taşıyanları ayrı sütunlarda göster; kesin tıbbi tavsiye dili kullanma.', not: 'Klinik kanıt ve güvenlik kontrolü.' },
      { kotu: 'Gelecekte hangi meslekler yok olacak?', iyi: '2035 meslek tahminleri metnindeki sayısal iddiaları listele; araştırma raporu kaynağı, varsayımlar ve belirsizlikleri ayrı başlıklarda sun; tek bir geleceği kesinmiş gibi sunma.', not: 'Tahmin ile kesin olgu ayrımı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 5.1)', sure: '12 dk', tur: 'Bireysel', ne: 'İddiayı ayıklama, kaynağı değerlendirme ve sonucu sınırlı yazma kuralları.',
        sayfalar: ['Halüsinasyon Mekanizması', '3 Denetim Kuralı', 'Denetim Formülü', 'Doğrulama Örneği', 'Kaynak Tablosu Görevi'],
        nasil: 'Çıktıyı iddia-kaynak tablosuyla denetler. Şifre: senaryo11', pass: 'senaryo11' },
      { ad: 'Grup Atölyesi (Ders 5.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarihsel Olay, Spor Tavsiyesi, Cihaz Özelliği ve 2035 Kariyer Tahmini.',
        sayfalar: ['Roller', 'İstasyon 1: Tarih Metni', 'İstasyon 2: Spor Tavsiyesi', 'İstasyon 3: Cihaz İddiası', 'İstasyon 4: 2035 Öngörüleri'],
        nasil: 'Grup doğrulama matrisini doldurur. Şifre: belirsizlik11', pass: 'belirsizlik11' },
      { ad: 'Prompt Vitrini (Ders 5.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Sağlık, Teknoloji ve Gelecek Mesleği Denetim Şablonları.',
        sayfalar: ['Tarih Denetimi', 'Sağlık Filtresi', 'Cihaz Doğrulama', 'Kariyer Raporu', 'Kalite Kontrol'],
        nasil: 'Doğrulama şablonlarını inceler, belirsizlik dilini test eder. Şifre: gelecek11', pass: 'gelecek11' }
    ],
    sorular: [
      'Yapay zekâ kaynak veya alıntı uydurduğunda bunu metnin akışından anlamak neden zordur?',
      'Bir iddiaya "Yüksek Güven" verebilmek için hangi bağımsız kaynak kriterleri aranır?',
      'Teknoloji ve meslek tahminlerinde neden "kesin sonuç" yerine "belirsizlik dili" kullanılmalıdır?',
      'MEB ders kitapları ve resmî akademik kaynaklar neden birinci basamak teyit kaynağıdır?'
    ],
    ipuclari: [
      'Öğrencilere yapay zekâya "Emin olmadığın kısımları [Teyit Edilmeli] etiketiyle yaz" komutunu vermeyi öğretin.',
      'Sayısal verilerin kaynağını sorma alışkanlığı kazandırın.',
      'Sınıfta gerçek bir ders kitabı sayfasıyla yapay zekâ çıktısını canlı karşılaştırın.'
    ]
  },

  6: {
    ad: 'Prompt Laboratuvarı',
    emoji: '🧪',
    konu: 'Kör Rubrik ve Alternatif Açıklama (A/B Deneyi & Revizyon)',
    tekCumle: 'Aynı görevde promptun yalnızca tek bir öğesini değiştirerek (A/B deneyi) <b>sonuç farkını kör rubrikle ölçmek, alternatif açıklamaları sorgulamak ve gerekçeli revizyon yapmaktır</b>.',
    neden: [
      'Kör rubrik değerlendirmesi, değerlendiricinin hangi çıktının hangi prompttan geldiğini bilmeden objektif puanlama yapmasını sağlar.',
      'Fizikte Enerji Dönüşümü, Kısa Öykü Açılışı, Uygulama Hata Mesajı ve Veri Analisti Özeti test edilir.',
      'Doğruluk, Açıklık, Görsel Düzen ve 11. Sınıfa Uygunluk boyutlarında 1–4 rubrik puanlaması yapılır.'
    ],
    kazanim: [
      'Kontrollü bir prompt A/B deneyinde <b>tek bir bağımsız değişken</b> belirler.',
      'İki çıktıyı <b>kör rubrik matrisiyle (1–4)</b> puanlar ve gerekçe yazar.',
      'En zayıf boyutu iyileştiren <b>hedefli revizyon promptu</b> üretir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Neyi değiştirdik? (5 dk)',
        m: 'Aynı fizik görevi için iki farklı promptun çıktılarını yansıtın; hangi çıktının daha anlaşılır olduğunu kör rubrikle değerlendirtin.' },
      { b: '2️⃣ A/B Deney Formülü (5 dk)',
        m: '🧪 <b>1. Sabit Amaç · 2. Sabit Bağlam · 3. Tek Değişken · 4. Kör Rubrik · 5. Gerekçeli Revizyon.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '6.1 Bireysel Keşif → 6.2 Grup Atölyesi (Enerji Açıklaması, Öykü Açılışı, Hata Mesajı, Veri Analisti) → 6.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar rubrik puanlarını ve revizyon sonuçlarını sunar. Şifreler: <b>veri11 · karar11 · model11</b>.' }
    ],
    ornekler: [
      { kotu: 'İki prompt yazıp hangisi güzel bak.', iyi: 'Aynı fizik açıklaması için A ve B promptları üret; yalnız çıktı formatını değiştir. Her çıktıyı doğruluk, kavramsal açıklık, görsel düzen ve 11. sınıf uygunluğu ölçütleriyle 1–4 puanla; farkın nedenini yaz.', not: 'Tek değişkenli kontrollü deney ve 1–4 rubrik.' },
      { kotu: 'Öykü başlangıcını değiştir.', iyi: 'Tarihî bir öykü açılışı için: Sürüm A’da üçüncü şahıs, Sürüm B’de birinci şahıs anlatıcı kullan. Diğer tüm mekân ve zaman ayrıntılarını sabit tut; empati düzeyini puanla.', not: 'Bakış açısı değişkeninin etkisi.' },
      { kotu: 'Hata mesajını düzelt.', iyi: 'Mobil uygulama için: Sürüm A’da teknik hata kodu, Sürüm B’de kullanıcı dostu çözüm adımı iste. Çözüm süresi ve kullanıcı stresini rubrikle değerlendir.', not: 'Kullanıcı deneyimi değişkeni.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 6.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Hipotez kurma, tek değişkeni koruma ve rubrikle karşılaştırma kuralları.',
        sayfalar: ['A/B Laboratuvar Girişi', '3 Deney Kuralı', 'Deney Formülü', 'Fizik Deneyi Örneği', 'Mini Rubrik Görevi'],
        nasil: 'Tek değişkenli iki promptu hazırlar. Şifre: veri11', pass: 'veri11' },
      { ad: 'Grup Atölyesi (Ders 6.2)', sure: '18 dk', tur: 'Grup', ne: 'Fizik Açıklaması, Öykü Açılışı, Hata Mesajı ve Veri Analisti İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Fizik Açıklaması', 'İstasyon 2: Öykü Açılışı', 'İstasyon 3: Hata Mesajı', 'İstasyon 4: Veri Analisti'],
        nasil: 'Grup çıktıları 1–4 rubrikle puanlar. Şifre: karar11', pass: 'karar11' },
      { ad: 'Prompt Vitrini (Ders 6.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Deney Şablonu, Öykü Değişkeni, Hata Mesajı ve Revizyon Rehberi.',
        sayfalar: ['Deney Tasarımı', 'Edebi Değişken', 'Kullanıcı Deneyimi', 'Revizyon Şablonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, revizyon stratejilerini test eder. Şifre: model11', pass: 'model11' }
    ],
    sorular: [
      'Prompt deneyi yaparken aynı anda iki değişkeni değiştirmek neden hipotezi bozar?',
      'Kör rubrik değerlendirmesi öznel beğenileri nasıl engeller?',
      'En düşük puan alan boyuta yönelik revizyon yaparken neleri korumalıyız?',
      'A/B deney mantığı yazılım ve yapay zekâ sektöründe hangi süreçlerde kullanılır?'
    ],
    ipuclari: [
      'Öğrencilere puanlama yaparken somut satır ve kelime kanıtı göstertin.',
      'Sınıfta iki grubun aynı promptu çalıştırıp rubrik puanlarını karşılaştırmasını sağlayın.',
      'Revizyonun tek bir cümle değişikliğiyle bile yapılabileceğini gösterin.'
    ]
  },

  7: {
    ad: 'Fen Bilimlerini Görselleştir',
    emoji: '🔬',
    konu: 'Model Sınırı ve Yanlış Kavrama Testi (DNA · Azot Döngüsü · Biyosensör)',
    tekCumle: 'Bilimsel süreçleri <b>doğru ölçek, etiket, renk kodu ve açıklama katmanlarıyla görsel prompta dönüştürürken modelin sınırlarını ve olası yanlış kavramaları test etmektir</b>.',
    neden: [
      'Biyolojik süreçler (DNA eşlenmesi, enzimler, azot döngüsü) dinamik ve katmanlıdır; model sınırları bilinmezse yanıltıcı çizimler üretilir.',
      'DNA Eşlenmesi, Akvaryum Azot Döngüsü, Biyosensör Çalışma Prensibi ve Genetik Danışmanlık Laboratuvarı modellenir.',
      'Anahtar enzimler, yeni ve eski zincir renk kodları ve okuma yönü (5′ → 3′) bilimsel doğrulukla tarif edilir.'
    ],
    kazanim: [
      'Bir fen sürecini <b>4 aşamalı bilimsel infografik briefine</b> dönüştürür.',
      'Görseldeki renklerin ve ölçeklerin <b>temsili olduğunu belirten bilimsel not ekler</b>.',
      'Modelin sınırlarını ve olası kavram yanılgılarını <b>test eder</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — DNA nasıl kopyalanır? (5 dk)',
        m: 'Rastgele sarmal resmi ile helikaz, polimeraz enzimlerini ve yeni/eski zincir renk kodlarını gösteren 4 panelli infografiği kıyaslatın.' },
      { b: '2️⃣ Fen Görsel Formülü (5 dk)',
        m: '🔬 <b>1. Bilimsel Olgu · 2. Ölçek/Düzey · 3. 4 Aşamalı Süreç · 4. Renk/Etiket Kodu · 5. Temsili Ölçek Uyarısı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '7.1 Bireysel Keşif → 7.2 Grup Atölyesi (DNA Eşlenmesi, Azot Döngüsü, Biyosensör, Genetik Laboratuvarı) → 7.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar bilimsel görsel brieflerini sunar. Şifreler: <b>rol11 · isakisi11 · orkestrasyon11</b>.' }
    ],
    ornekler: [
      { kotu: 'DNA görseli hazırla.', iyi: 'DNA’nın eşlenmesini 11. sınıf düzeyinde 4 aşamalı bilimsel infografik olarak tasarla; anahtar enzimleri etiketle, yeni ve eski zincirleri renk kodla, okuma yönünü göster ve renklerin temsili olduğunu not et.', not: '4 aşama, enzim etiketleri ve temsili renk uyarısı.' },
      { kotu: 'Azot döngüsünü çiz.', iyi: 'Akvaryum ekosistemindeki azot döngüsünü 3 aşamalı şema olarak görselleştir: Balık atığı (amonyak) → Nitrit bakterisi → Nitrat bitki besini. Bakteri türlerini etiketle.', not: 'Kapalı ekosistemde mikroorganizma ve madde akışı.' },
      { kotu: 'Biyosensör resmi yap.', iyi: 'Diyabet takip biyosensörünün çalışma prensibini kesit olarak göster: Glukoz molekülü, enzim tabakası, elektrot ve dijital sinyal ekranını etiketle; nanometre ölçeğinin temsili olduğunu belirt.', not: 'Molekülden elektrik sinyaline biyosensör kesiti.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 7.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Bilimsel modeli seçme, süreci sıralama ve doğruluk notu ekleme kuralları.',
        sayfalar: ['Fen Görseli İlkesi', '3 Tasarım Kuralı', 'Fen Formülü', 'DNA Eşlenmesi Örneği', 'Bilimsel Brief Görevi'],
        nasil: 'Fen sürecini görsel briefe dönüştürür. Şifre: rol11', pass: 'rol11' },
      { ad: 'Grup Atölyesi (Ders 7.2)', sure: '18 dk', tur: 'Grup', ne: 'DNA Eşlenmesi, Azot Döngüsü, Biyosensör ve Genetik Danışmanlık.',
        sayfalar: ['Roller', 'İstasyon 1: DNA Eşlenmesi', 'İstasyon 2: Azot Döngüsü', 'İstasyon 3: Biyosensör', 'İstasyon 4: Genetik Danışmanlık'],
        nasil: 'Grup 4 aşamalı görsel sunum kartını hazırlar. Şifre: isakisi11', pass: 'isakisi11' },
      { ad: 'Prompt Vitrini (Ders 7.3)', sure: '10 dk', tur: 'Vitrin', ne: 'DNA Replikasyonu, Azot Döngüsü, Biyosensör ve Genetik Laboratuvarı Şablonları.',
        sayfalar: ['DNA Replikasyonu', 'Azot Döngüsü', 'Biyosensör Kesiti', 'Genetik Danışmanlık', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, biyolojik etiketleri denetler. Şifre: orkestrasyon11', pass: 'orkestrasyon11' }
    ],
    sorular: [
      'DNA eşlenmesinde eski zincir ile yeni sentezlenen zinciri farklı renkle kodlamak öğrenmeye nasıl katkı sağlar?',
      'Moleküler düzeyde görsel üretirken "ölçeklerin temsili olduğu" uyarısını eklemek neden bilimsel bir zorunluluktur?',
      'Azot döngüsünde amonyak, nitrit ve nitrat adımlarını ok yönleriyle göstermenin önemi nedir?',
      'Gereksiz 3D efektler yerine sade vektörel infografik tercih etmenin faydaları nelerdir?'
    ],
    ipuclari: [
      'Öğrencilere biyolojik süreçleri 4 net aşamaya böldürün.',
      'Ders kitabındaki replikasyon şemalarıyla etiket isimlerini birebir eşleştirin.',
      'Renk seçiminde net zıtlıklar kullandırın.'
    ]
  },

  8: {
    ad: 'Fizik Bir Sahne Olsaydı',
    emoji: '⚡',
    konu: 'Varsayım, Nicelik ve Korunum Yasası (Kuvvet · Enerji Dönüşümü · Dalga)',
    tekCumle: 'Soyut fizik kavramlarını <b>kuvvet okları, referans noktaları, zaman anları ve enerji korunum çubuklarıyla</b> okunabilir dinamik sahnelere dönüştürmektir.',
    neden: [
      'Fiziksel olaylar tek bir durağan fotoğrafta anlaşılamaz; en az 3 zaman anı (t0, t1, t2) ve enerji çubukları gereklidir.',
      'Kaykay Rampasında Enerji Dönüşümü, Basketbol Parabolik Hareketi, Elektrikli Bisiklet Enerji Akışı ve Rüzgâr Türbini modellenir.',
      'Kinetik, potansiyel ve sürtünmeyle ısıya dönüşen enerji miktarları korunur; toplam enerji nedensiz artırılamaz.'
    ],
    kazanim: [
      'Bir hareketi <b>3 zaman karesi ve serbest cisim vektörleriyle</b> sahneler.',
      'Kinetik, potansiyel ve ısı enerjisi dönüşümlerini <b>orantılı çubuk grafiklerle</b> gösterir.',
      'Fizik yasalarına (Enerjinin Korunumu, Newton Yasaları) <b>uygunluk denetimi yapar</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Sinematik resim mi, fizik sahnesi mi? (5 dk)',
        m: 'Dramatik efektli bir kaykay resmi ile hız vektörü, yerçekimi kuvveti ve enerji dönüşüm çubukları olan 3 panelli sahneyi kıyaslatın.' },
      { b: '2️⃣ Fizik Sahneleme Formülü (5 dk)',
        m: '⚡ <b>1. Sahne/Ortam · 2. Başlangıç Koşulları · 3. Kuvvet/Vektörler · 4. Zaman Değişimi (t0-t1-t2) · 5. Yasa Kontrolü.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '8.1 Bireysel Keşif → 8.2 Grup Atölyesi (Kaykay Rampası, Basketbol Atışı, Elektrikli Bisiklet, Rüzgâr Türbini) → 8.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar fizik sahnelerindeki enerji çubuklarını ve vektörleri sunar. Şifreler: <b>etik11 · onyargi11 · etki11</b>.' }
    ],
    ornekler: [
      { kotu: 'Enerjiyi sinematik göster.', iyi: 'Bir kaykaycının rampadan inişini 3 zaman karesiyle görselleştir; hız vektörü, yerçekimi kuvveti, kinetik–potansiyel enerji çubukları ve sürtünme nedeniyle ısıya dönüşen enerjiyi göster; toplam enerjiyi nedensiz artırma.', not: '3 zaman anı, kuvvet vektörleri ve enerji korunum çubukları.' },
      { kotu: 'Basketbol atışını çiz.', iyi: 'Basketbol serbest atışındaki topun yörüngesini 4 konumda göster; her konumda hızın yatay ve dikey bileşen vektörlerini ve yerçekimi ivmesini etiketle; hava direnci ihmal notu ekle.', not: 'Parabolik yörünge ve vektör bileşenleri.' },
      { kotu: 'Rüzgâr türbini nasıl çalışır?', iyi: 'Rüzgâr türbininin enerji dönüşümünü gösteren şema: Kinetik rüzgâr enerjisi → Mekanik dönme → Jeneratörde elektrik üretimi. Enerji kaybını ve verimlilik yüzdesini lejantta belirt.', not: 'Akış şeması ve verimlilik lejantı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 8.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sahneyi fiziksel kurma, nicelikleri kodlama ve yanlış sezgiyi önleme kuralları.',
        sayfalar: ['Fizik Sahnesi Girişi', '3 Sahneleme Kuralı', 'Fizik Formülü', 'Kaykay Rampası Örneği', 'Ölçülebilir Sahne Görevi'],
        nasil: 'Fizik sahnesi promptunu hazırlar. Şifre: etik11', pass: 'etik11' },
      { ad: 'Grup Atölyesi (Ders 8.2)', sure: '18 dk', tur: 'Grup', ne: 'Kaykay Rampası, Basketbol Parabolü, Elektrikli Bisiklet ve Rüzgâr Türbini.',
        sayfalar: ['Roller', 'İstasyon 1: Kaykay Rampası', 'İstasyon 2: Basketbol Atışı', 'İstasyon 3: Elektrikli Bisiklet', 'İstasyon 4: Rüzgâr Türbini'],
        nasil: 'Grup vektör ve enerji çubuklu sahne kartını tamamlar. Şifre: onyargi11', pass: 'onyargi11' },
      { ad: 'Prompt Vitrini (Ders 8.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Rampa Enerjisi, Parabolik Yörünge, Elektrikli Bisiklet ve Türbin Simülasyonu.',
        sayfalar: ['Rampa Enerjisi', 'Basketbol Yörüngesi', 'Bisiklet Enerji Akışı', 'Türbin Simülasyonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, enerji korunumunu denetler. Şifre: etki11', pass: 'etki11' }
    ],
    sorular: [
      'Bir fiziki sahnede sürtünme olduğunda kinetik ve potansiyel enerji toplamı neden azalır ve bu enerji nereye gider?',
      'Hız vektörünün büyüklüğü ile kuvvet vektörünün yönü arasındaki farkı nasıl görselleştirebiliriz?',
      'Bir parabolik harekette tepe noktasında düşey hız neden sıfırdır ve bunu görselde nasıl işaretleriz?',
      'Fiziksel görsel promptlarında "varsayımlar" (örn. hava direnci ihmal) belirtilmezse ne tür kavram yanılgıları oluşur?'
    ],
    ipuclari: [
      'Öğrencilere her panelin altına t0, t1, t2 zaman etiketleri eklettirin.',
      'Enerji çubuklarında standart renk kodları belirleyin.',
      'Vektör oklarının başlangıç noktasını kütle merkezine yerleştirtin.'
    ]
  },

  9: {
    ad: 'Matematiği Görünür Hale Getirmek',
    emoji: '📐',
    konu: 'Temsiller Arası Dönüşüm ve Ölçek Etkisi (Fonksiyon · Grafik · Olasılık)',
    tekCumle: 'Matematiksel ilişkileri <b>doğru eksenler, eşit ölçek, kesişim noktaları, değer tablosu ve olasılık ağacıyla</b> somut ve tutarlı biçimde görselleştirmektir.',
    neden: [
      'Soyut cebirsel fonksiyonlar koordinat düzleminde değer tablosu ve eğim anlamıyla birleştiğinde kalıcılaşır.',
      'Doğrusal Fonksiyonlar, Oyun Kazanma Olasılığı Ağacı, İnternet Kullanım Verisi ve Aktüerya Risk Modeli modellenir.',
      'Eksenlerin eşit aralıklı olması, birimlerin açık yazılması ve iki temsil arasında değer tutarlılığı denetlenir.'
    ],
    kazanim: [
      'Bir fonksiyonu <b>denklem, değer tablosu ve koordinat grafiği</b> olarak bir arada sahneler.',
      'Eğimin <b>değişim oranı anlamını</b> grafik üzerinde görsel notla açıklar.',
      'Olasılık deneylerini <b>ağaç dalları ve yol çarpımlarıyla</b> modeller.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Eğim ne anlatır? (5 dk)',
        m: 'y=2x-3 fonksiyonunda x her 1 birim arttığında y’nin 2 birim artmasını merdiven basamağı benzetmesiyle tahtada gösterin.' },
      { b: '2️⃣ Matematiksel Temsil Formülü (5 dk)',
        m: '📐 <b>1. Kavram/İlişki · 2. X ve Y Değişkenleri · 3. Görsel Temsil Türü · 4. Aralık/Ölçek · 5. Tutarlılık Doğrulama.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '9.1 Bireysel Keşif → 9.2 Grup Atölyesi (Doğrusal Fonksiyon, Olasılık Ağacı, İnternet Verisi, Aktüerya) → 9.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar grafik ve olasılık modellerini sunar. Şifreler: <b>coklumod11 · medya11 · sistem11</b>.' }
    ],
    ornekler: [
      { kotu: 'Fonksiyon grafiğini güzel göster.', iyi: 'y=2x−3 doğrusal fonksiyonunu koordinat düzleminde göster; eksenleri ve birimleri etiketle, kesişimleri işaretle, x değerleri için küçük bir tablo ekle ve eğimin değişim oranı anlamını kısa notla açıkla.', not: 'Koordinat düzlemi, kesişim noktaları, değer tablosu ve eğim notu.' },
      { kotu: 'Oyun olasılığını hesapla.', iyi: 'Bir kutu oyununda peş peşe 2 kart çekme olasılığını ağaç diyagramı olarak tasarla; her dalın bağımlı olasılık değerlerini, 4 yolun sonucunu ve toplamın 1 olduğunu göster.', not: 'Bağımlı olasılık ağacı ve toplam 1 kontrolü.' },
      { kotu: 'İnternet veri grafiği yap.', iyi: 'Aylık internet veri kullanımını gösteren çizgi grafik ve dağılım pasta grafiğini yan yana tasarla; eksen aralıklarını eşit tut ve yanıltıcı basık ölçek kullanma.', not: 'İki grafik türü ve eşit ölçek güvenliği.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 9.1)', sure: '12 dk', tur: 'Bireysel', ne: 'İlişkiyi belirleme, temsili seçme ve ölçek/etiket denetimi kuralları.',
        sayfalar: ['Matematiksel Temsil Girişi', '3 Temsil Kuralı', 'Temsil Formülü', 'Fonksiyon Grafiği Örneği', 'İki Temsilli Görev'],
        nasil: 'Matematiksel ilişkiyi iki temsille anlatır. Şifre: coklumod11', pass: 'coklumod11' },
      { ad: 'Grup Atölyesi (Ders 9.2)', sure: '18 dk', tur: 'Grup', ne: 'Doğrusal Fonksiyon, Olasılık Ağacı, İnternet Verisi ve Aktüerya Modeli.',
        sayfalar: ['Roller', 'İstasyon 1: Doğrusal Fonksiyon', 'İstasyon 2: Olasılık Ağacı', 'İstasyon 3: İnternet Verisi', 'İstasyon 4: Aktüerya Risk'],
        nasil: 'Grup matematiksel temsil sunum kartını hazırlar. Şifre: medya11', pass: 'medya11' },
      { ad: 'Prompt Vitrini (Ders 9.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Fonksiyon Koordinatı, Olasılık Ağacı, Veri Paneli ve Aktüerya Şablonları.',
        sayfalar: ['Doğrusal Fonksiyon', 'Olasılık Ağacı', 'İnternet Veri Paneli', 'Aktüerya Riski', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, eksen tutarlılığını test eder. Şifre: sistem11', pass: 'sistem11' }
    ],
    sorular: [
      'Bir fonksiyonda denklem ile koordinat grafiği aynı x değerlerinde farklı y verirse ne tür bir hata yapılmıştır?',
      'Eğimin pozitif veya negatif olması grafik çizgisinin yönünü nasıl belirler?',
      'Olasılık ağacında dalların yol boyunca çarpılması kuralı hangi matematiksel ilkeye dayanır?',
      'Yanıltıcı grafik tasarımları (örneğin y eksenini sıfırdan başlatmamak) neden etik dışıdır?'
    ],
    ipuclari: [
      'Öğrencilere değer tablosunda kolay hesaplanan noktaları seçtirin.',
      'Koordinat ekseninde x ve y eksenlerinin oklarını ve isimlerini mutlaka yazdırın.',
      'Olasılık ağaçlarında her düğümdeki dalların toplamının 1 olduğunu kontrol ettirin.'
    ]
  },

  10: {
    ad: 'Geleceğin Laboratuvarını Tasarla',
    emoji: '🚀',
    konu: 'Paydaş, Veri Akışı ve Etik Etki (Bütünleşik Sistem Prototipi)',
    tekCumle: 'Bir araştırma merkezini <b>problem, kullanıcı rolleri, mekân kesiti, veri akışı, biyogüvenlik ve etik etki boyutlarıyla</b> bütünleşik bir sistem prototipine dönüştürmektir.',
    neden: [
      '10 haftalık prompt mühendisliği, modelleme ve denetim yolculuğu bu büyük sistem briefinde zirveye ulaşır.',
      'Kuraklığa Dayanıklı Tarım Laboratuvarı, Vatandaş Bilimi Gözlem İstasyonu, Robotik/AI Test Merkezi ve Uzay Biyolojisi Üssü tasarlanır.',
      'Sensörler, numune akışları, veri panoları, biyogüvenlik seviyeleri ve insan onay noktaları şematize edilir.'
    ],
    kazanim: [
      'Gerçek bir küresel soruna yönelik <b>laboratuvar sistem mimarisi ve iş akışı</b> kurar.',
      'Farklı uzmanlıkların, araçların ve veri hatlarının <b>kesit haritasını sahneler</b>.',
      'Etik ikilemleri ve insan denetim noktalarını <b>sistem briefinde görünür kılar</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Sadece cihaz mı, çalışan sistem mi? (5 dk)',
        m: '“2035 kuraklık laboratuvarı sadece pahalı aletlerden mi ibarettir, yoksa tohumdan tarlaya uzanan bir iş akışı mıdır?” sorusuyla başlayın.' },
      { b: '2️⃣ Sistem Prototipi Formülü (5 dk)',
        m: '🚀 <b>1. Çözülen Problem · 2. Kullanıcı/Uzmanlar · 3. Mekân & Cihazlar · 4. Güvenlik/Etik Sınırlar · 5. Çıktı Formatı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '10.1 Bireysel Keşif → 10.2 Grup Atölyesi (Tarım Laboratuvarı, Vatandaş Bilimi, Robotik/AI Merkezi, Uzay Biyolojisi) → 10.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar final laboratuvar prototiplerini sunar; 1. Dönem Zirvesi tamamlanır! Şifreler: <b>studio11 · prototip11 · savunma11</b>.' }
    ],
    ornekler: [
      { kotu: 'Geleceğin laboratuvarını çiz.', iyi: '2035’te kuraklığa dayanıklı tarım araştıran bir laboratuvar için görsel sistem briefi oluştur; araştırmacı rolleri, sensörler, numune akışı, veri panosu, enerji kullanımı, biyogüvenlik ve insan onay noktalarını katmanlı şema olarak tarif et.', not: 'Problem, roller, numune akışı, enerji ve biyogüvenlik bir arada.' },
      { kotu: 'Uzay üssü resmi yap.', iyi: 'Ay yüzeyinde çalışan uzay biyolojisi laboratuvarının izometrik kesitini tasarla: Bitki büyüme odası, radyasyon kalkanı, kapalı devre su arıtma ve acil durum tahliye kapısını etiketle; biyogüvenlik protokolünü belirt.', not: 'Kapalı devre sistemler ve biyogüvenlik protokolü.' },
      { kotu: 'Robotik test merkezi briefi yaz.', iyi: 'Otonom tarım robotlarını test eden araştırma merkezinin iş akışı haritasını oluştur: Sensör kalibrasyonu, simülasyon odası, saha deneme alanı ve acil durdurma butonlarını şemada göster.', not: 'Test aşamaları ve acil güvenlik noktaları.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 10.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Araştırma problemini seçme, sistemi haritalama ve güvenli tasarlama kuralları.',
        sayfalar: ['Sistem Mimarisi Girişi', '3 Tasarım Kuralı', 'Prototip Formülü', 'Tarım Laboratuvarı Örneği', 'Sistem Tasarım Görevi'],
        nasil: 'Geleceğin laboratuvarını iş akışıyla planlar. Şifre: studio11', pass: 'studio11' },
      { ad: 'Grup Atölyesi (Ders 10.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarım Laboratuvarı, Vatandaş Bilimi, Robotik Test Merkezi ve Uzay Biyolojisi.',
        sayfalar: ['Roller', 'İstasyon 1: Tarım Laboratuvarı', 'İstasyon 2: Vatandaş Bilimi', 'İstasyon 3: Robotik Merkezi', 'İstasyon 4: Uzay Biyolojisi'],
        nasil: 'Grup bütünleşik sistem prototip kartını hazırlar. Şifre: prototip11', pass: 'prototip11' },
      { ad: 'Prompt Vitrini (Ders 10.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarım Merkezi, Gözlem İstasyonu, Robotik Merkezi ve Uzay Biyolojisi Şablonları.',
        sayfalar: ['Tarım Laboratuvarı', 'Gözlem İstasyonu', 'Robotik Merkezi', 'Uzay Biyolojisi', 'Kalite Kontrol'],
        nasil: 'Final şablonlarını inceler, portfolyosunu tamamlar. Şifre: savunma11', pass: 'savunma11' }
    ],
    sorular: [
      'Bir laboratuvar tasarımında numune akışı ile veri akışını ayrı ok türleriyle göstermek neden önemlidir?',
      'Biyogüvenlik seviyeleri ve insan onayı noktaları neden yapay zekâya tamamen bırakılamaz?',
      'Geleceğin laboratuvarlarında yenilenebilir enerji ve atık geri dönüşümü nasıl bir sistem bileşenidir?',
      'İlk 10 haftada öğrendiğiniz hangi beceriler (prompt formülü, A/B testi, görsel katmanlama) bu projede birleşti?'
    ],
    ipuclari: [
      'Öğrencilere laboratuvarı çizerken "Temiz Alan (Ofis/Veri)" ile "Riskli Alan (Numune/Biyoloji)" ayrımını renklerle yaptırın.',
      'Acil durum butonlarını ve insan kontrol noktalarını kırmızı etiketle vurgulatın.',
      '10 haftayı başarıyla bitiren tüm öğrencileri tebrik edin ve sertifika/rozet takdim edin.'
    ]
  }

};

/* Planlanan 11–36. Haftalar (Lise 11 Müfredatındaki Gelecek Dersler) */
var PLAN_DERSLER = [
  { no: 11, ad: 'Sürdürülebilir Bir Dünya Tasarla', emoji: '🌱', ozet: 'Sürdürülebilirlik, çevre ve iklim sistemleri için prompt tasarımı.' },
  { no: 12, ad: 'Bilimsel Proje Challenge', emoji: '🏆', ozet: 'TÜBİTAK ve bilim yarışmaları için araştırma ve keşif briefi.' },
  { no: 13, ad: 'Tarihi Bir Ana Geri Dön', emoji: '⏳', ozet: 'Tarihsel dönem, coğrafya ve atmosferi yeniden canlandıran promptlar.' },
  { no: 14, ad: 'Bir Tarihi Karakterin Gözünden', emoji: '👤', ozet: 'Tanık ve aktör bakış açısıyla tarihsel empati ve anlatım.' },
  { no: 15, ad: 'Edebiyattan Görsele', emoji: '📖', ozet: 'Edebi metin, şiir ve tasviri sahne görseline dönüştürme.' },
  { no: 16, ad: 'Bir Romanın Dünyasını Tasarla', emoji: '🏰', ozet: 'Mekân, atmosfer ve dünya inşası (World-building).' },
  { no: 17, ad: 'Coğrafyayı Görselleştir', emoji: '🗺️', ozet: 'Harita okuryazarlığı, yer şekilleri, iklim ve beşerî coğrafya.' },
  { no: 18, ad: 'Kültürel Mirasın Geleceği', emoji: '🏛️', ozet: 'Tarihî eserlerin korunması, restorasyon ve dijital miras.' },
  { no: 19, ad: 'Bir Ders Konusundan Hikâye Çıkarmak', emoji: '🎭', ozet: 'Bilimsel kavramları kurgusal ve öğretici anlatılara çevirme.' },
  { no: 20, ad: 'Karakter Oluşturma', emoji: '🪪', ozet: '360° karakter profili: Fiziksel görünüm, motivasyon ve zayıflıklar.' },
  { no: 21, ad: 'Başlangıç, Problem, Çözüm', emoji: '🎬', ozet: 'Üç perdeli senaryo yapısı ve dramatik kurgu promptu.' },
  { no: 22, ad: 'Bir Bilim Kurgu Hikâyesi Yaz', emoji: '🚀', ozet: 'Gelecek teknolojileri ve etik ikilemler ekseninde bilim kurgu.' },
  { no: 23, ad: 'Görsellerle Hikâye Anlatmak', emoji: '🖼️', ozet: 'Görsel seriler, panel sıralaması ve anlatı ritmi.' },
  { no: 24, ad: 'Eğitsel Çizgi Roman', emoji: '🗯️', ozet: 'Konuşma balonları, paneller ve eğitsel çizgi roman tasarımı.' },
  { no: 25, ad: 'Kamera Açıları', emoji: '🎥', ozet: 'Geniş açı, yakın çekim, alt açı, üst açı ve anlamları.' },
  { no: 26, ad: 'Kompozisyon ve Perspektif', emoji: '📐', ozet: 'Üçler kuralı, kaçış noktaları, derinlik ve odak merkezi.' },
  { no: 27, ad: 'Işık, Renk ve Atmosfer', emoji: '🌈', ozet: 'Sıcak/soğuk ışık, dramatik gölgeler ve renk paletleri.' },
  { no: 28, ad: 'Kamera Hareketleri', emoji: '📹', ozet: 'Pan, tilt, dolly, zoom ve tracking hareketlerini prompta yazma.' },
  { no: 29, ad: 'Sinematik Prompt Yazma', emoji: '🎞️', ozet: 'Lens türleri, aydınlatma ve yönetmen vizyonunu ifade etme.' },
  { no: 30, ad: 'Whiteboard ile Düşünmek', emoji: '📋', ozet: 'Dijital tahta, zihin haritası ve görsel beyin fırtınası.' },
  { no: 31, ad: 'Storyboard Nedir?', emoji: '🖼️', ozet: 'Sahne taslakları, kamera notları ve storyboard karesi yapısı.' },
  { no: 32, ad: 'Eğitsel Storyboard', emoji: '📚', ozet: 'Ders videosu veya animasyonu için adım adım görsel senaryo.' },
  { no: 33, ad: 'Storyboard Yönetmenliği', emoji: '🎬', ozet: 'Görsel devamlılık, ritim ve sahne geçişlerinin yönetimi.' },
  { no: 34, ad: 'Görseli Canlandırmak', emoji: '✨', ozet: 'Yapay zekâ video araçlarıyla durağan görseli hareketlendirme.' },
  { no: 35, ad: 'Ses, Anlatıcı ve Kısa Video', emoji: '🎙️', ozet: 'Seslendirme, müzik ve video katmanlarının birleştirilmesi.' },
  { no: 36, ad: 'AI ile Üretkenlik Zirvesi', emoji: '🏆', ozet: 'Yıl sonu büyük proje sergisi ve üretkenlik portfolyosu.' }
];

function patikaAdi(dersNo) {
  if (dersNo <= 10) return '🧭 1. MODÜL · PROMPTTAN BİLİMSEL TASARIMA';
  if (dersNo <= 18) return '🌍 2. MODÜL · KÜLTÜR, TARİH & DÜNYA İNŞASI';
  if (dersNo <= 27) return '🎨 3. MODÜL · HİKÂYE, ÇİZGİ ROMAN & GÖRSEL SANATLAR';
  return '🎬 4. MODÜL · SİNEMA, STORYBOARD & VİDEO';
}
