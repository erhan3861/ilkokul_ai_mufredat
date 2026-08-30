/* =========================================================================
   AI-GALAXY • LİSE 10 (10. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : lise10/ders_linkleri_ve_sifreleri.md
   Etkinlik adları ve ekran metni  : lise10/dersN/content.js & mufredat.md
   Uydurulan ders/etkinlik adı yoktur.

   NOT — 10. SINIFIN (LİSE 10) AYIRT EDİCİ YANLARI:
   • Lise gelişim ve derinleşme seviyesidir. 10. sınıf Maarif alanları
     (Fotosentez/Solunum, İklim Değişikliği, Tanzimat/Modernleşme, Ökaryot Hücre,
     Kuvvet & Enerji Dönüşümü, Doğrusal Fonksiyonlar & Olasılık Ağacı)
     derse entegre edilmiştir.
   • Üç aşamalı ders yapısı:
       – 1. Aşama: Bireysel Konu Keşfi, 5 Bileşenli Formül & Mini Uygulama
       – 2. Aşama: Grup Atölyesi (4 Rol: Akış Sorumlusu, Prompt Mimarı, Sorgulayıcı, Sunucu)
                   Maarif, Hobi, Teknoloji, Geleceğin Meslekleri İstasyonları
       – 3. Aşama: Prompt Vitrini (4 Alan Şablonu) & 4 Boyutlu Kalite Kontrolü
   • Ağırlık: "Öğrenme Asistanlığı", "Prompt Mimarisi", "Format Dönüşümü ve Kayıp Kontrolü",
     "Sistemik Görselleştirme", "Halüsinasyon ve Kaynak Matrisi", "Kontrollü A/B Deneyi",
     "Bilimsel & Fiziksel Sahneleme", "Matematiksel Temsil" ve "Laboratuvar Sistem Prototipi".
   • Şifreler her aşamanın bitiş slaytında verilir (örn. 1. hafta: arastirma10, kapsam10, sorgu10).
   ========================================================================= */

var AI_TEMEL = 'https://lise10.vercel.app';

var AI_GENEL_EKRAN = [
  { b: '1️⃣ Slayt Başlığı ve Odak Rozeti', m: 'Öğrenci ekranın sol üstündeki konuyu, kazanım etiketlerini ve odak cümlesini inceler.' },
  { b: '2️⃣ Temel Fikirler ve 5 Bileşenli Formül', m: 'Prompt mimarisi bileşenlerini (Rol + Görev + Bağlam + Detay + Format) veya konunun çekirdek kuralını okur.' },
  { b: '3️⃣ Karşılaştırmalı Örnek (Önce / Sonra)', m: 'Eksik brief ile hedefe odaklı güçlü brief arasındaki farkı inceler.' },
  { b: '4️⃣ Grup Atölyesi ve İstasyon Görevleri', m: '4 takım rolünü (Akış, Mimar, Sorgulayıcı, Sunucu) paylaşır; Maarif, Hobi, Teknoloji ve Meslek istasyonlarında üretim yapar.' },
  { b: '5️⃣ Prompt Vitrini ve Kalite Kontrolü', m: 'Gerçek prompt şablonlarını inceler; 4 maddelik kalite kontrol listesinden geçirir.' },
  { b: '6️⃣ Tamamlama ve Şifre (FLAG)', m: 'Aşama sonu tebrik ekranında şifresini alır ve öğretmen onayına sunar.' }
];

var AI_DERSLER = {

  1: {
    ad: 'AI Benim Öğrenme Asistanım',
    emoji: '🧭',
    konu: 'Açıklama, Örnek, Karşılaştırma ve Anlama Kontrolü (Biyoloji 10: Fotosentez & Solunum)',
    tekCumle: 'Yapay zekâyı hazır cevabı veren bir araçtan çok, <b>düşünme sürecini görünür kılan ve anlama kontrolü yapan kişisel bir öğrenme koçu</b> olarak yönlendirmektir.',
    neden: [
      '“Fotosentezi anlat” gibi tek yönlü komutlar ezberi besler; 10. sınıf öğrencisi önce benzetme, sonra bilimsel kavram ve mini kavrama soruları istemelidir.',
      'Işığa bağlı ve bağımsız tepkimeleri karşılaştıran tablo ve kavrama soruları bilişsel derinlik sağlar.',
      'Fotoğrafçılık (diyafram-enstantane), Mobil Veri Akışı ve Yenilenebilir Enerji Mühendisliği istasyonlarıyla çok disiplinli öğrenme kurulur.'
    ],
    kazanim: [
      'Hazır cevap istemek ile öğrenme odaklı çok adımlı asistan promptu kurmayı <b>ayırt eder</b>.',
      'Bir konuyu <b>Açıklatma → Karşılaştırma Tablosu → 3 Kontrol Sorusu</b> adımlarına böler.',
      'Yapay zekânın yanıtından sonra kendi öğrenme düzeyini denetler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hazır cevap mı, akıllı koç mu? (5 dk)',
        m: 'Tahtaya yazın: <b>“Fotosentezi anlat.”</b> Öğrencilere sorun: “Bu çıktı sınavda veya projede gerçekten işinize yarar mı, yoksa düşünmenizi engeller mi?”' },
      { b: '2️⃣ 5 Parçalı Asistan Formülü (5 dk)',
        m: 'Formülü tahtaya yazın: <b>1. Rol (Öğretici) · 2. Konu (Fotosentez) · 3. Düzey (10. sınıf) · 4. Yöntem (Benzetme + Tablo) · 5. Kontrol (3 Soru).</b>' },
      { b: '3️⃣ Etkinlik ve İstasyonlar (25 dk)',
        m: '1.1 Bireysel Keşif → 1.2 Grup Atölyesi (Maarif/Fotosentez, Hobi/Fotoğraf, Teknoloji/Mobil, Meslek/Enerji) → 1.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Öğrenciler ürettikleri koç promptlarını çalıştırır ve 3 kontrol sorusunu yanıtlar. Şifreler: <b>arastirma10 · kapsam10 · sorgu10</b>.' }
    ],
    ornekler: [
      { kotu: 'Fotosentezi anlat.', iyi: '10. sınıf biyoloji öğrencisine fotosentezi önce günlük yaşam benzetmesiyle, sonra bilimsel kavramlarla açıkla; ışığa bağlı ve bağımsız tepkimeleri karşılaştıran tablo ve 3 kavrama sorusu ekle.', not: 'Tek yönlü anlatım → Karşılaştırmalı ve sorulu öğrenme koçu.' },
      { kotu: 'Fotoğrafçılık ayarlarını söyle.', iyi: 'Başlangıç fotoğraf eğitmeni ol. Diyafram ve enstantane dengesini su musluğu benzetmesiyle açıkla. Ardından 3 farklı çekim senaryosu verip hangi ayarı seçeceğimi bana sor.', not: 'Kavramı benzetmeyle somutlaştırıp öğrenciyi sınama.' },
      { kotu: 'Yenilenebilir enerji nedir?', iyi: 'Yenilenebilir enerji mühendisi rolünde, güneş ve rüzgâr santrallerinin şebekeye bağlanma mantığını 10. sınıf düzeyinde 4 maddede özetle; 2 kritik avantajı tablo yap.', not: 'Uzman bakışı ve yapılandırılmış özet.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 1.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Öğrenme hedefini yazma, öğretme biçimini seçme ve anlama kontrolü formülü.',
        sayfalar: ['Öğrenme Asistanı Kavramı', '3 Temel İlke', '5 Bileşenli Formül', 'Karşılaştırma Kartı', 'Mini Uygulama'],
        nasil: 'Öğrenci slaytları sırayla tamamlar, mini uygulama promptunu hazırlar. Şifre: arastirma10', pass: 'arastirma10' },
      { ad: 'Grup Atölyesi (Ders 1.2)', sure: '18 dk', tur: 'Grup', ne: 'Fotosentez, Fotoğrafçılık, Mobil Veri Akışı ve Enerji Mühendisliği istasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Maarif (Fotosentez)', 'İstasyon 2: Hobi (Diyafram)', 'İstasyon 3: Teknoloji (Veri Akışı)', 'İstasyon 4: Meslek (Enerji)'],
        nasil: 'Grup 4 rolü paylaşır; sunum kartını hazırlar. Şifre: kapsam10', pass: 'kapsam10' },
      { ad: 'Prompt Vitrini (Ders 1.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Fotosentez, Fotoğrafçılık, Mobil Veri ve Enerji Mühendisliği şablonları + 4 Kalite Kontrol maddesi.',
        sayfalar: ['Maarif Promptu', 'Hobi Koçu', 'Teknoloji Asistanı', 'Meslek Danışmanı', '4 Kalite Kontrolü'],
        nasil: 'Şablonları inceler, kendi öğrenme hedefine uyarlar. Şifre: sorgu10', pass: 'sorgu10' }
    ],
    sorular: [
      'Yapay zekâdan hazır özet almakla, ona kontrol soruları sordurmak arasındaki kalıcılık farkı nedir?',
      'Öğrenme asistanına "günlük yaşam benzetmesi" kuralı koymak soyut kavramları nasıl somutlaştırır?',
      '10. sınıf düzeyinde bir konuyu çalışırken hangi çıktı formatları tekrarı kolaylaştırır?',
      'Yapay zekânın verdiği cevabın doğruluğunu hangi MEB ders kitabı ünitesiyle teyit etmeliyiz?'
    ],
    ipuclari: [
      'Öğrencilere yapay zekânın sorduğu sorulara hemen cevap vermeyip önce kendi defterlerine not almalarını önerin.',
      'Sınıf içinde en iyi 3 kavrama sorusunu tahtada tartışın.',
      'Klavye sağ/sol oklarıyla slayt geçişini akıllı tahtada gösterin.'
    ]
  },

  2: {
    ad: 'İyi Prompt Nasıl Kurulur?',
    emoji: '🧱',
    konu: 'Rol + Görev + Bağlam + Detay + Format (Coğrafya 10: İklim Değişikliği)',
    tekCumle: 'Belirsiz bir isteği <b>rol, görev, bağlam, ayrıntı/kısıt ve çıktı biçimiyle</b> denetlenebilir profesyonel bir üretim briefine dönüştürmektir.',
    neden: [
      'Rolü süs için değil, gerekli uzmanlık bakış açısını kazandırmak için tanımlamak gerekir.',
      'Bağlam ve sınırlar (örn. Türkiye’den 2 örnek, belirsiz iddiaları işaretle) model halüsinasyonunu engeller.',
      'İklim Değişikliği, Gitar Çalışma Planı, Kulüp Web Sitesi Briefi ve Robotik Uzmanı tanıtımı modellenir.'
    ],
    kazanim: [
      'Bir promptu <b>Rol, Görev, Bağlam, Detay ve Format</b> olarak 5 parçaya böler.',
      'Sınırları ve kısıtları net olan üretim briefi <b>hazırlar</b>.',
      'Çıktı formatını 6 satırlık tablo, madde imleri veya JSON olarak <b>standartlaştırır</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Sipariş tam mı? (5 dk)',
        m: '“İklim değişikliği için güzel bir şey hazırla derseniz ne gelir? Ama 10. sınıf için Türkiye odaklı 6 satırlık tablo derseniz ne gelir?” kıyaslamasını yapın.' },
      { b: '2️⃣ 5 Bileşen Modeli (5 dk)',
        m: '🧱 <b>1. Rol (Uzmanlık) · 2. Görev (Eylem) · 3. Bağlam (Kim/Neden) · 4. Detay (Sınırlar) · 5. Format (Teslim Yapısı).</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '2.1 Bireysel Keşif → 2.2 Takım Brief Atölyesi (İklim, Gitar, Web Brief, Robotik) → 2.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar 5 bileşenli brieflerini paylaşır. Şifreler: <b>kisit10 · oncelik10 · mimari10</b>.' }
    ],
    ornekler: [
      { kotu: 'İklim değişikliği için güzel bir şey hazırla.', iyi: 'Bir fen iletişimcisi olarak 10. sınıf öğrencileri için iklim değişikliğinin 3 nedenini ve 3 sonucunu açıkla; Türkiye’den 2 örnek kullan, belirsiz iddiaları işaretle ve çıktıyı 6 satırlık tablo olarak ver.', not: '5 bileşen eksiksiz tanımlandı.' },
      { kotu: 'Gitar dersi planı yap.', iyi: 'Klasik gitar eğitmeni rolünde, 10. sınıf öğrencisi için 1 haftalık günlük 25 dakikalık parmak egzersiz tablosu hazırla; her gün için ısınma, parça ve öz kontrol ölçütü ekle.', not: 'Süre, enstrüman ve günlük ölçüt kısıtı.' },
      { kotu: 'Robotik mesleğini anlat.', iyi: 'Endüstriyel robotik uzmanı olarak, 2035 üretim hattında çalışan bir mühendisin tipik iş gününü 3 başlıkta (sensör kontrolü, güvenlik denetimi, etik karar) tasvir et.', not: 'Gerçekçi iş görevleri ve etik boyut.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 2.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Rolü amaca bağlama, bağlam ve sınır koyma, çıktıyı tarif etme formülü.',
        sayfalar: ['Prompt Mimarisi Girişi', '3 Tasarım Kuralı', '5 Bileşenli Formül', 'İklim Karşılaştırması', 'Brief Tamir Görevi'],
        nasil: 'Öğrenci 5 bileşeni inceler, eksik promptları tamir eder. Şifre: kisit10', pass: 'kisit10' },
      { ad: 'Grup Atölyesi (Ders 2.2)', sure: '18 dk', tur: 'Grup', ne: 'İklim Kartı, Gitar Planı, Web Sayfası Briefi ve Robotik Tanıtımı.',
        sayfalar: ['Roller', 'İstasyon 1: İklim Kartı', 'İstasyon 2: Gitar Planı', 'İstasyon 3: Web Briefi', 'İstasyon 4: Robotik Tanıtımı'],
        nasil: 'Grup 5 bileşenli briefi üretir ve denetler. Şifre: oncelik10', pass: 'oncelik10' },
      { ad: 'Prompt Vitrini (Ders 2.3)', sure: '10 dk', tur: 'Vitrin', ne: 'İklim, Gitar, Web Kulübü ve Robotik Şablonları + Kalite Kontrol.',
        sayfalar: ['İklim Şablonu', 'Hobi Şablonu', 'Web Tasarım Şablonu', 'Robotik Şablonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, kısıtları test eder. Şifre: mimari10', pass: 'mimari10' }
    ],
    sorular: [
      'Bir promptta "Rol" vermenin çıktı tonuna ve uzmanlık derinliğine etkisi nedir?',
      'Kısıt (örneğin "belirsiz iddiaları işaretle") eklemediğimizde yapay zekâ nasıl davranır?',
      'Formatı tablo olarak sabitlemek hangi bilişsel avantajı sağlar?',
      'Gereksiz uzunluktaki promptlar ile odaklı 5 bileşenli promptlar arasındaki fark nedir?'
    ],
    ipuclari: [
      'Öğrencilere "Rol" verirken jenerik değil, o konunun uzmanı olan spesifik unvanlar seçtirin.',
      'Tablo çıktılarında sütun başlıklarını prompt içinde önceden tanımlatın.',
      'Kısıtların en az iki adet olmasına dikkat edin.'
    ]
  },

  3: {
    ad: 'Aynı Bilgiyi Farklı Şekillerde Anlatmak',
    emoji: '🔄',
    konu: 'Tablo · İnfografik · Hikâye · Görsel (Tarih 10: Tanzimat & Modernleşme)',
    tekCumle: 'Aynı doğru bilgiyi hedef kitleye ve amaca göre <b>tabloya, infografiğe, hikâyeye veya görsel sahneye dönüştürürken çekirdek bilginin kaybını denetlemektir</b>.',
    neden: [
      'Temsil biçimi değişse de korunacak ana kavram çekirdeği sabittir.',
      'Karşılaştırma için tablo, süreç için infografik akışı, duygu ve empati için hikâye kullanılır.',
      'Tanzimat Dönemi, Basketbol Hücum Seti, İnternet Paketinin Yolculuğu ve Biyoteknoloji Uzmanı günü dönüştürülür.'
    ],
    kazanim: [
      'Bir bilgi paketini <b>karşılaştırma tablosu, infografik planı ve tarihsel kurguya</b> dönüştürür.',
      'Dönüşüm sonrasında çekirdek bilginin <b>eksiksiz korunduğunu denetler</b>.',
      'Hedef kitlenin ihtiyacına en uygun temsil formatını <b>gerekçelendirir</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı haber, üç farklı gazete (5 dk)',
        m: 'Tarihî bir reformu tablo olarak görmekle, dönemin bir öğrencisinin günlüğünden okumak arasındaki farkı tartışın.' },
      { b: '2️⃣ Bilgi Dönüşüm Matrisi (5 dk)',
        m: '🔄 <b>1. Bilgi Çekirdeği · 2. Hedef Kitle · 3. Amaç · 4. Temsil Biçimi · 5. Kayıp Kontrolü.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '3.1 Bireysel Keşif → 3.2 Grup Atölyesi (Tanzimat, Basketbol, İnternet Paketi, Biyoteknoloji) → 3.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar ürettikleri 3 formatı sunar; sınıf bilgi kaybı olup olmadığını oylar. Şifreler: <b>ornek10 · kalip10 · fewshot10</b>.' }
    ],
    ornekler: [
      { kotu: 'Osmanlı modernleşmesini farklı anlat.', iyi: 'Tanzimat döneminin temel dönüşümlerini aynı bilgi çekirdeğini koruyarak karşılaştırma tablosu, 5 kutulu infografik planı ve bir öğrencinin gözünden 150 kelimelik tarihsel kurgu olarak üret; kurgu ile tarihsel olguyu ayır.', not: '3 temsil biçimi ve kurgu-olgu ayrımı.' },
      { kotu: 'Basketbol hücum taktiği yaz.', iyi: 'Pick and roll hücum setini başlangıç oyuncusu için 4 adımlı akış tablosuna, antrenör için saha şeması metnine ve taraftar için heyecanlı bir maç anı anlatısına dönüştür.', not: '3 farklı hedef kitle ve amaç odaklı temsil.' },
      { kotu: 'İnternet nasıl çalışır?', iyi: 'Bir veri paketinin sunucudan telefona yolculuğunu: 1) TCP/IP tablosu, 2) 4 kutulu router akış şeması, 3) 200 kelimelik mikro macera hikâyesi olarak üret.', not: 'Teknik süreçlerin 3 farklı anlatımı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 3.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Özü sabitleme, temsili amaca göre seçme ve bilgi kaybı denetimi.',
        sayfalar: ['Bilgi Tasarımı Girişi', '3 Temel Kural', 'Dönüşüm Formülü', 'Tanzimat Örneği', 'Kayıp Kontrolü Görevi'],
        nasil: 'Bilgi paketini 3 farklı temsile dönüştürür. Şifre: ornek10', pass: 'ornek10' },
      { ad: 'Grup Atölyesi (Ders 3.2)', sure: '18 dk', tur: 'Grup', ne: 'Tanzimat Dönüşümleri, Basketbol Seti, Veri Paketi ve Biyoteknoloji İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Tanzimat', 'İstasyon 2: Basketbol Seti', 'İstasyon 3: Veri Paketi', 'İstasyon 4: Biyoteknoloji'],
        nasil: 'Grup seçtiği istasyonun 3 formatlı sunum kartını hazırlar. Şifre: kalip10', pass: 'kalip10' },
      { ad: 'Prompt Vitrini (Ders 3.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Spor, İnternet Ağı ve Biyoteknoloji Şablonları + Kalite Kontrol.',
        sayfalar: ['Tarih Dönüşümü', 'Spor Şeması', 'Teknoloji Akışı', 'Meslek Hikâyesi', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, bilgi kaybı kriterlerini denetler. Şifre: fewshot10', pass: 'fewshot10' }
    ],
    sorular: [
      'Bir bilgiyi hikâyeleştirirken hangi kritik verilerin kaybolma riski yüksektir?',
      'İnfografik formatı hangi tür ilişkileri göstermede tablodan daha üstündür?',
      'Hedef kitlenin ön bilgisi az olduğunda hangi temsil biçimiyle başlamak gerekir?',
      'Dönüşüm sonrası "bilgi kaybı kontrolü" neden zorunlu bir kalite adımıdır?'
    ],
    ipuclari: [
      'Hikâye anlatımlarında öğrencilerin tarihî olayları kurgudan ayırmak için parantez içi açıklama kullanmalarını sağlayın.',
      'Tablo formatında en az 3 farklı sütun parametresi belirletin.',
      'Süreç anlatımlarında adım numaralarının atlanmamasına dikkat edin.'
    ]
  },

  4: {
    ad: 'Karmaşık Konuyu Görsele Dönüştürmek',
    emoji: '🧬',
    konu: 'Öğe · İlişki · Etiket · Görsel Hiyerarşi (Biyoloji 10: Ökaryot Hücre)',
    tekCumle: 'Karmaşık bir sistemi <b>bilimsel doğruluğu koruyan öğeler, ilişkiler, etiketler ve görsel hiyerarşiyle</b> anlaşılır bir görsel sahneye dönüştürmektir.',
    neden: [
      'Görsel modeller rastgele estetik detaylar üretir; organel ölçekleri, zar geçirgenliği ve ok yönleri ancak bilinçli promptla doğru kurulur.',
      'Ökaryot Hücre, Oyun Mekaniği Sistemi, Akıllı Ev Sensör Ağı ve Uzay Tarımı İstasyonu modellenir.',
      'Öğe listesi, ilişki türü (madde/enerji akışı), renk kodları ve yasaklı hatalar tanımlanır.'
    ],
    kazanim: [
      'Karmaşık bir sistemi <b>nesneler, süreçler ve ölçekler</b> olarak parçalar.',
      'Görseldeki ok, renk, katman ve sıraların <b>anlamlarını Lejant ile açıklar</b>.',
      'Hatalı organel veya yanlış ölçek eklenmesini önleyen <b>negatif kısıtlar yazar</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Renkli karmaşa mı, öğretici kesit mi? (5 dk)',
        m: 'Hücreyi sadece renkli bir damla gibi çizen yapay zekâ resmi ile etiketli organel kesiti infografiğini kıyaslatın.' },
      { b: '2️⃣ Görsel Hiyerarşi Formülü (5 dk)',
        m: '🧬 <b>1. Sistem Kavramı · 2. Öğeler · 3. İlişki/Akışlar · 4. Renk/Ok Kodu · 5. Yasaklı Hatalar.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '4.1 Bireysel Keşif → 4.2 Grup Atölyesi (Ökaryot Hücre, Oyun Seviyesi, Akıllı Ev, Uzay Tarımı) → 4.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar görsel sahneleme promptlarını tanıtır. Şifreler: <b>sentez10 · kanit10 · atif10</b>.' }
    ],
    ornekler: [
      { kotu: 'Hücreyi gösteren görsel yap.', iyi: '10. sınıf düzeyinde ökaryot hücreyi kesit infografiği olarak tasarla; çekirdek, mitokondri, ribozom ve zar yapısını etiketle, madde–enerji ilişkisini oklarla göster, organellerin ölçeğini temsili olarak belirt ve hatalı organel ekleme.', not: 'Kesit infografiği, etiketler ve negatif kısıt.' },
      { kotu: 'Oyun haritası çiz.', iyi: '2D platform oyununun seviye mekaniğini gösteren şematik harita planla; oyuncu başlangıcı, tuzaklar, enerji kaynakları ve çıkış kapısını farklı renk kodlarıyla etiketle.', not: 'Oyun tasarımı öğe ve akış haritası.' },
      { kotu: 'Akıllı ev resmi yap.', iyi: 'Akıllı ev sensör ağını gösteren izometrik kesit görseli tasarla: Sıcaklık sensörü, güvenlik kamerası ve merkezi hub arasındaki veri akışını kesik oklarla göster; veri gizliliği rozeti ekle.', not: 'Sensör ağı, veri akış okları ve gizlilik notu.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 4.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sistemi parçalara ayırma, ilişkiyi görünür yapma ve yanlış görselleştirmeyi önleme.',
        sayfalar: ['Görsel Hiyerarşi Girişi', '3 Tasarım Kuralı', 'Görsel Formülü', 'Ökaryot Hücre Örneği', 'Görsel Harita Görevi'],
        nasil: 'Sistemik görselleştirme promptunu kurar. Şifre: sentez10', pass: 'sentez10' },
      { ad: 'Grup Atölyesi (Ders 4.2)', sure: '18 dk', tur: 'Grup', ne: 'Ökaryot Hücre, Oyun Seviyesi Mekaniği, Akıllı Ev ve Uzay Tarımı İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Ökaryot Hücre', 'İstasyon 2: Oyun Mekaniği', 'İstasyon 3: Akıllı Ev Ağı', 'İstasyon 4: Uzay Tarımı'],
        nasil: 'Grup görsel öğe ve ilişki haritasını tamamlar. Şifre: kanit10', pass: 'kanit10' },
      { ad: 'Prompt Vitrini (Ders 4.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Biyoloji Kesiti, Oyun Haritası, Sensör Ağı ve Uzay İstasyonu Şablonları.',
        sayfalar: ['Hücre Kesiti', 'Oyun Haritası', 'Akıllı Sensörler', 'Uzay İstasyonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, hiyerarşi kurallarını test eder. Şifre: atif10', pass: 'atif10' }
    ],
    sorular: [
      'Görsel bir promptta "negatif kısıt" (örneğin "hatalı organel ekleme") yazmak neden kritiktir?',
      'Bir sistem şemasında okların kalınlığı ve çizgi tipi (düz/kesik) neyi ifade etmelidir?',
      'İzometrik kesit görseli hangi tür karmaşık sistemleri anlatmada en etkilidir?',
      'Görsel hiyerarşi (ana öğe vs ikincil öğe) doğru kurulmazsa öğrenci ne tür bir kafa karışıklığı yaşar?'
    ],
    ipuclari: [
      'Öğrencilere kesit çizimlerinde ana organelleri en fazla 5–6 adetle sınırlandırmalarını söyleyin.',
      'Her ok türünün anlamını bir lejant tablosuyla açıklamalarını sağlayın.',
      'Görsel modellerde Türkçe etiketlerin doğru yazılması için prompt içinde tırnak işareti kullandırmayı deneyin.'
    ]
  },

  5: {
    ad: 'AI Hata Yapabilir mi?',
    emoji: '🔎',
    konu: 'Halüsinasyon · Kaynak Kalitesi · Çapraz Kontrol · Belirsizlik Dili',
    tekCumle: 'Yapay zekâ çıktısındaki iddiaları ayıklamak; <b>kaynak kalitesi, çapraz kontrol ve belirsizlik diliyle</b> güven düzeyini bilimsel olarak değerlendirmektir.',
    neden: [
      'Büyük dil modelleri akıcı ve profesyonel görünen yanlış bilgiler üretebilir (halüsinasyon).',
      'Tarih, sayı, alıntı ve nedensellik iddiaları bağımsız birincil kaynaklarla teyit edilmelidir.',
      'Tarihsel Olaylar, Spor Performansı Tavsiyeleri, Cihaz Özellikleri ve 2035 Kariyer Tahminleri denetlenir.'
    ],
    kazanim: [
      'Yapay zekâ yanıtındaki iddiaları <b>iddia–kaynak–doğrulama tablosuna</b> ayırır.',
      'Bilginin güven düzeyini <b>Yüksek, Orta, Doğrulanmalı</b> şeklinde sınıflandırır.',
      'Doğrulanmamış bilgileri kesin gerçekmiş gibi sunmaktan <b>kaçınır</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kusursuz görünen yanılgı (5 dk)',
        m: 'Yapay zekânın çok mantıklı gelen ama uydurma bir tarihî antlaşma maddesi örneğini gösterin: “Nasıl bu kadar kendinden emin konuşabiliyor?”' },
      { b: '2️⃣ 5 Adımlı Denetim Formülü (5 dk)',
        m: '🔎 <b>1. İddia Ne? · 2. Kaynak Kim? · 3. Güncel mi? · 4. Bağımsız Destek Var mı? · 5. Güven Hükmü.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '5.1 Bireysel Keşif → 5.2 Grup Atölyesi (Tarihsel Olay, Spor Tavsiyesi, Cihaz İddiası, 2035 Kariyer) → 5.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar şüpheli iddiaları ve çapraz kontrol adımlarını açıklar. Şifreler: <b>veri10 · grafik10 · hikaye10</b>.' }
    ],
    ornekler: [
      { kotu: 'Bu AI cevabı doğru mu?', iyi: 'Aşağıdaki AI çıktısındaki doğrulanabilir iddiaları tabloya ayır. Her iddia için gereken kaynak türünü, güncellik ihtiyacını, bağımsız doğrulama adımını ve güven düzeyini yaz; doğrulanmamış ayrıntıları kesinleştirme.', not: 'İddia–kaynak–doğrulama matrisi.' },
      { kotu: 'Sporcu takviyesi öner.', iyi: 'Aşağıdaki sporcu beslenme tavsiyesindeki bilimsel iddiaları ayıkla; klinik çalışma desteği olanlar ile kişiye özel risk taşıyanları ayrı sütunlarda göster; kesin tıbbi tavsiye dili kullanma.', not: 'Klinik kanıt ve güvenlik kontrolü.' },
      { kotu: 'Gelecekte hangi meslekler yok olacak?', iyi: '2035 meslek tahminleri metnindeki sayısal iddiaları listele; araştırma raporu kaynağı, varsayımlar ve belirsizlikleri ayrı başlıklarda sun; tek bir geleceği kesinmiş gibi sunma.', not: 'Tahmin ile kesin olgu ayrımı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 5.1)', sure: '12 dk', tur: 'Bireysel', ne: 'İddiayı ayıklama, kaynağı değerlendirme ve sonucu sınırlı yazma kuralları.',
        sayfalar: ['Halüsinasyon Mekanizması', '3 Denetim Kuralı', 'Denetim Formülü', 'Doğrulama Örneği', 'Kaynak Tablosu Görevi'],
        nasil: 'Çıktıyı iddia-kaynak tablosuyla denetler. Şifre: veri10', pass: 'veri10' },
      { ad: 'Grup Atölyesi (Ders 5.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarihsel Olay, Spor Tavsiyesi, Cihaz Özelliği ve 2035 Kariyer Tahmini.',
        sayfalar: ['Roller', 'İstasyon 1: Tarih Metni', 'İstasyon 2: Spor Tavsiyesi', 'İstasyon 3: Cihaz İddiası', 'İstasyon 4: 2035 Öngörüleri'],
        nasil: 'Grup doğrulama matrisini doldurur. Şifre: grafik10', pass: 'grafik10' },
      { ad: 'Prompt Vitrini (Ders 5.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Sağlık, Teknoloji ve Gelecek Mesleği Denetim Şablonları.',
        sayfalar: ['Tarih Denetimi', 'Sağlık Filtresi', 'Cihaz Doğrulama', 'Kariyer Raporu', 'Kalite Kontrol'],
        nasil: 'Doğrulama şablonlarını inceler, belirsizlik dilini test eder. Şifre: hikaye10', pass: 'hikaye10' }
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
    konu: 'Tek Değişken · A/B Deneyi · Rubrik · Revizyon',
    tekCumle: 'Aynı görevde promptun yalnızca <b>tek bir bileşenini değiştirerek (A/B deneyi)</b> sonuç farkını 4 ölçütlü rubrikle ölçmek ve gerekçeli revizyon yapmaktır.',
    neden: [
      'Bilimsel yöntemde olduğu gibi, prompt geliştirmede de aynı anda birden fazla şeyi değiştirmek sonucun nedenini gizler.',
      'Fizikte Enerji Dönüşümü, Kısa Öykü Açılışı, Uygulama Hata Mesajı ve Veri Analisti Özeti test edilir.',
      'Doğruluk, Açıklık, Görsel Düzen ve 10. Sınıfa Uygunluk boyutlarında 1–4 rubrik puanlaması yapılır.'
    ],
    kazanim: [
      'Kontrollü bir prompt A/B deneyinde <b>tek bir bağımsız değişken</b> belirler.',
      'İki çıktıyı <b>4 ölçütlü rubrik matrisiyle (1–4)</b> puanlar ve gerekçe yazar.',
      'En zayıf boyutu iyileştiren <b>hedefli revizyon promptu</b> üretir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Neyi değiştirdik? (5 dk)',
        m: 'Aynı fizik görevi için: Sürüm A (düz paragraf) vs Sürüm B (adım adım maddeler). Tek değişken nedir? Format!' },
      { b: '2️⃣ A/B Deney Formülü (5 dk)',
        m: '🧪 <b>1. Sabit Amaç · 2. Sabit Bağlam · 3. Tek Değişken · 4. Ortak Rubrik · 5. Gerekçeli Revizyon.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '6.1 Bireysel Keşif → 6.2 Grup Atölyesi (Enerji Açıklaması, Öykü Açılışı, Hata Mesajı, Veri Analisti) → 6.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar rubrik puanlarını ve revizyon sonuçlarını sunar. Şifreler: <b>brief10 · kadraj10 · kompozisyon10</b>.' }
    ],
    ornekler: [
      { kotu: 'İki prompt yazıp hangisi güzel bak.', iyi: 'Aynı fizik açıklaması için A ve B promptları üret; yalnız çıktı formatını değiştir. Her çıktıyı doğruluk, kavramsal açıklık, görsel düzen ve 10. sınıf uygunluğu ölçütleriyle 1–4 puanla; farkın nedenini yaz.', not: 'Tek değişkenli kontrollü deney ve 1–4 rubrik.' },
      { kotu: 'Öykü başlangıcını değiştir.', iyi: 'Tarihî bir öykü açılışı için: Sürüm A’da üçüncü tekil şahıs, Sürüm B’de birinci tekil şahıs anlatıcı kullan. Diğer tüm mekân ve zaman ayrıntılarını sabit tut; empati düzeyini puanla.', not: 'Bakış açısı değişkeninin etkisi.' },
      { kotu: 'Hata mesajını düzelt.', iyi: 'Mobil uygulama için: Sürüm A’da teknik hata kodu, Sürüm B’de kullanıcı dostu çözüm adımı iste. Çözüm süresi ve kullanıcı stresini rubrikle değerlendir.', not: 'Kullanıcı deneyimi değişkeni.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 6.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Hipotez kurma, tek değişkeni koruma ve rubrikle karşılaştırma kuralları.',
        sayfalar: ['A/B Laboratuvar Girişi', '3 Deney Kuralı', 'Deney Formülü', 'Fizik Deneyi Örneği', 'Mini Rubrik Görevi'],
        nasil: 'Tek değişkenli iki promptu hazırlar. Şifre: brief10', pass: 'brief10' },
      { ad: 'Grup Atölyesi (Ders 6.2)', sure: '18 dk', tur: 'Grup', ne: 'Fizik Açıklaması, Öykü Açılışı, Hata Mesajı ve Veri Analisti İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Fizik Açıklaması', 'İstasyon 2: Öykü Açılışı', 'İstasyon 3: Hata Mesajı', 'İstasyon 4: Veri Analisti'],
        nasil: 'Grup çıktıları 1–4 rubrikle puanlar. Şifre: kadraj10', pass: 'kadraj10' },
      { ad: 'Prompt Vitrini (Ders 6.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Deney Şablonu, Öykü Değişkeni, Hata Mesajı ve Revizyon Rehberi.',
        sayfalar: ['Deney Tasarımı', 'Edebi Değişken', 'Kullanıcı Deneyimi', 'Revizyon Şablonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, revizyon stratejilerini test eder. Şifre: kompozisyon10', pass: 'kompozisyon10' }
    ],
    sorular: [
      'Prompt deneyi yaparken hem rolü hem formatı aynı anda değiştirirsek neyi kaybederiz?',
      '1–4 puanlık rubrikte "Kanıt Gösterme" zorunluluğu öğrencinin değerlendirmesini nasıl nesnelleştirir?',
      'En düşük puan alan boyuta yönelik revizyon yaparken diğer başarılı parçaları korumak neden önemlidir?',
      'A/B deney mantığı yazılım ve yapay zekâ sektöründe hangi süreçlerde kullanılır?'
    ],
    ipuclari: [
      'Öğrencilere rubrik puanı verirken "bence" yerine "çıktının 2. satırındaki ifade nedeniyle" dedirtin.',
      'Sınıfta iki grubun aynı promptu çalıştırıp rubrik puanlarını karşılaştırmasını sağlayın.',
      'Revizyonun sadece tek bir kelime/cümle değişikliğiyle bile yapılabileceğini gösterin.'
    ]
  },

  7: {
    ad: 'Fen Bilimlerini Görselleştir',
    emoji: '🔬',
    konu: 'Bilimsel Ölçek · DNA Eşlenmesi · Azot Döngüsü · Biyosensör (Biyoloji 10)',
    tekCumle: 'Bilimsel süreçleri <b>doğru ölçek, etiket, renk kodu, enzim aşamaları ve açıklama katmanlarıyla</b> bilimsel görsel prompta dönüştürmektir.',
    neden: [
      'Biyolojik süreçler (DNA eşlenmesi, enzimler, azot döngüsü) dinamik ve katmanlıdır; durağan resimler kavram yanılgısına yol açar.',
      'DNA Eşlenmesi, Akvaryum Azot Döngüsü, Biyosensör Çalışma Prensibi ve Genetik Danışmanlık Laboratuvarı modellenir.',
      'Anahtar enzimler, eski/yeni zincir renk kodları ve okuma yönü (5′ → 3′) bilimsel doğrulukla tarif edilir.'
    ],
    kazanim: [
      'Bir fen sürecini <b>4 aşamalı bilimsel infografik briefine</b> dönüştürür.',
      'Görseldeki renklerin ve ölçeklerin <b>temsili olduğunu belirten bilimsel not ekler</b>.',
      'Enzimlerin, moleküllerin ve akış yönlerinin <b>biyolojik doğruluğunu denetler</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — DNA nasıl kopyalanır? (5 dk)',
        m: 'Rastgele sarmal resmi ile helikaz, polimeraz enzimlerini ve yeni/eski zincir renk kodlarını gösteren 4 panelli infografiği kıyaslatın.' },
      { b: '2️⃣ Fen Görsel Formülü (5 dk)',
        m: '🔬 <b>1. Bilimsel Olgu · 2. Ölçek/Düzey · 3. 4 Aşamalı Süreç · 4. Renk/Etiket Kodu · 5. Temsili Ölçek Uyarısı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '7.1 Bireysel Keşif → 7.2 Grup Atölyesi (DNA Eşlenmesi, Azot Döngüsü, Biyosensör, Genetik Laboratuvarı) → 7.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar bilimsel görsel brieflerini sunar. Şifreler: <b>problem10 · prototip10 · cozum10</b>.' }
    ],
    ornekler: [
      { kotu: 'DNA görseli hazırla.', iyi: 'DNA’nın eşlenmesini 10. sınıf düzeyinde 4 aşamalı bilimsel infografik olarak tasarla; anahtar enzimleri etiketle, yeni ve eski zincirleri renk kodla, okuma yönünü göster ve renklerin temsili olduğunu not et.', not: '4 aşama, enzim etiketleri ve temsili renk uyarısı.' },
      { kotu: 'Azot döngüsünü çiz.', iyi: 'Akvaryum ekosistemindeki azot döngüsünü 3 aşamalı şema olarak görselleştir: Balık atığı (amonyak) → Nitrit bakterisi → Nitrat bitki besini. Bakteri türlerini etiketle.', not: 'Kapalı ekosistemde mikroorganizma ve madde akışı.' },
      { kotu: 'Biyosensör resmi yap.', iyi: 'Diyabet takip biyosensörünün çalışma prensibini kesit olarak göster: Glukoz molekülü, enzim tabakası, elektrot ve dijital sinyal ekranını etiketle; nanometre ölçeğinin temsili olduğunu belirt.', not: 'Molekülden elektrik sinyaline biyosensör kesiti.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 7.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Bilimsel modeli seçme, süreci sıralama ve doğruluk notu ekleme kuralları.',
        sayfalar: ['Fen Görseli İlkesi', '3 Tasarım Kuralı', 'Fen Formülü', 'DNA Eşlenmesi Örneği', 'Bilimsel Brief Görevi'],
        nasil: 'Fen sürecini görsel briefe dönüştürür. Şifre: problem10', pass: 'problem10' },
      { ad: 'Grup Atölyesi (Ders 7.2)', sure: '18 dk', tur: 'Grup', ne: 'DNA Eşlenmesi, Azot Döngüsü, Biyosensör ve Genetik Danışmanlık.',
        sayfalar: ['Roller', 'İstasyon 1: DNA Eşlenmesi', 'İstasyon 2: Azot Döngüsü', 'İstasyon 3: Biyosensör', 'İstasyon 4: Genetik Danışmanlık'],
        nasil: 'Grup 4 aşamalı görsel sunum kartını hazırlar. Şifre: prototip10', pass: 'prototip10' },
      { ad: 'Prompt Vitrini (Ders 7.3)', sure: '10 dk', tur: 'Vitrin', ne: 'DNA Replikasyonu, Azot Döngüsü, Biyosensör ve Genetik Laboratuvarı Şablonları.',
        sayfalar: ['DNA Replikasyonu', 'Azot Döngüsü', 'Biyosensör Kesiti', 'Genetik Danışmanlık', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, biyolojik etiketleri denetler. Şifre: cozum10', pass: 'cozum10' }
    ],
    sorular: [
      'DNA eşlenmesinde eski zincir ile yeni sentezlenen zinciri farklı renkle kodlamak öğrenmeye nasıl katkı sağlar?',
      'Moleküler düzeyde görsel üretirken "ölçeklerin temsili olduğu" uyarısını eklemek neden bilimsel bir zorunluluktur?',
      'Azot döngüsünde amonyak, nitrit ve nitrat adımlarını ok yönleriyle göstermenin önemi nedir?',
      'Gereksiz 3D ışık efektleri yerine sade 2D/vektörel infografik tercih etmenin faydaları nelerdir?'
    ],
    ipuclari: [
      'Öğrencilere biyolojik süreçleri "1. Başlangıç → 2. Enzim Etkisi → 3. Sentez → 4. Sonuç" olarak 4 kutuya böldürün.',
      'MEB Biyoloji 10 kitabındaki replikasyon şemalarıyla etiket isimlerini birebir eşleştirin.',
      'Renk seçiminde zıt ve net ayırt edilebilir renkler kullandırın.'
    ]
  },

  8: {
    ad: 'Fizik Bir Sahne Olsaydı',
    emoji: '⚡',
    konu: 'Vektör · Referans Noktası · Enerji Dönüşümü · Isı Kaybı (Fizik 10)',
    tekCumle: 'Soyut fizik kavramlarını <b>kuvvet vektörleri, referans noktaları, zaman anları ve enerji dönüşüm çubuklarıyla</b> okunabilir dinamik sahnelere dönüştürmektir.',
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
        m: 'Gruplar fizik sahnelerindeki enerji çubuklarını ve vektörleri sunar. Şifreler: <b>rubrik10 · kalite10 · revizyon10</b>.' }
    ],
    ornekler: [
      { kotu: 'Enerjiyi sinematik göster.', iyi: 'Bir kaykaycının rampadan inişini 3 zaman karesiyle görselleştir; hız vektörü, yerçekimi kuvveti, kinetik–potansiyel enerji çubukları ve sürtünme nedeniyle ısıya dönüşen enerjiyi göster; toplam enerjiyi nedensiz artırma.', not: '3 zaman anı, kuvvet vektörleri ve enerji korunum çubukları.' },
      { kotu: 'Basketbol atışını çiz.', iyi: 'Basketbol serbest atışındaki topun yörüngesini 4 konumda göster; her konumda hızın yatay ve dikey bileşen vektörlerini ve yerçekimi ivmesini etiketle; hava direnci ihmal notu ekle.', not: 'Parabolik yörünge ve vektör bileşenleri.' },
      { kotu: 'Rüzgâr türbini nasıl çalışır?', iyi: 'Rüzgâr türbininin enerji dönüşümünü gösteren şema: Kinetik rüzgâr enerjisi → Mekanik dönme → Jeneratörde elektrik üretimi. Enerji kaybını ve verimlilik yüzdesini lejantta belirt.', not: 'Akış şeması ve verimlilik lejantı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 8.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sahneyi fiziksel kurma, nicelikleri kodlama ve yanlış sezgiyi önleme kuralları.',
        sayfalar: ['Fizik Sahnesi Girişi', '3 Sahneleme Kuralı', 'Fizik Formülü', 'Kaykay Rampası Örneği', 'Ölçülebilir Sahne Görevi'],
        nasil: 'Fizik sahnesi promptunu hazırlar. Şifre: rubrik10', pass: 'rubrik10' },
      { ad: 'Grup Atölyesi (Ders 8.2)', sure: '18 dk', tur: 'Grup', ne: 'Kaykay Rampası, Basketbol Parabolü, Elektrikli Bisiklet ve Rüzgâr Türbini.',
        sayfalar: ['Roller', 'İstasyon 1: Kaykay Rampası', 'İstasyon 2: Basketbol Atışı', 'İstasyon 3: Elektrikli Bisiklet', 'İstasyon 4: Rüzgâr Türbini'],
        nasil: 'Grup vektör ve enerji çubuklu sahne kartını tamamlar. Şifre: kalite10', pass: 'kalite10' },
      { ad: 'Prompt Vitrini (Ders 8.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Rampa Enerjisi, Parabolik Yörünge, Elektrikli Bisiklet ve Türbin Simülasyonu.',
        sayfalar: ['Rampa Enerjisi', 'Basketbol Yörüngesi', 'Bisiklet Enerji Akışı', 'Türbin Simülasyonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, enerji korunumunu denetler. Şifre: revizyon10', pass: 'revizyon10' }
    ],
    sorular: [
      'Bir fiziki sahnede sürtünme olduğunda kinetik ve potansiyel enerji toplamı neden azalır ve bu enerji nereye gider?',
      'Hız vektörünün büyüklüğü ile kuvvet vektörünün yönü arasındaki farkı nasıl görselleştirebiliriz?',
      'Bir parabolik harekette tepe noktasında düşey hız neden sıfırdır ve bunu görselde nasıl işaretleriz?',
      'Fiziksel görsel promptlarında "varsayımlar" (örn. hava direnci ihmal) belirtilmezse ne tür kavram yanılgıları oluşur?'
    ],
    ipuclari: [
      'Öğrencilere 3 panelli çizim yaptırırken her panelin altına t0=0s, t1=1s, t2=2s gibi zaman etiketleri eklettirin.',
      'Enerji çubuklarında Renk 1=Kinetik, Renk 2=Potansiyel, Renk 3=Isı standardı getirin.',
      'Vektör oklarının başlangıç noktasını cismin kütle merkezine yerleştirtin.'
    ]
  },

  9: {
    ad: 'Matematiği Görünür Hale Getirmek',
    emoji: '📐',
    konu: 'Doğrusal Fonksiyon · Eğim & Değişim Oranı · Olasılık Ağacı · Risk Modeli (Matematik 10)',
    tekCumle: 'Matematiksel ilişkileri <b>doğru eksenler, eşit ölçek, kesişim noktaları, değer tablosu ve olasılık ağacıyla</b> somut ve tutarlı biçimde görselleştirmektir.',
    neden: [
      'Soyut cebirsel fonksiyonlar koordinat düzleminde değer tablosu ve eğim anlamıyla birleştiğinde kalıcılaşır.',
      'Doğrusal Fonksiyonlar (y=2x-3), Oyun Kazanma Olasılığı Ağacı, İnternet Kullanım Verisi ve Aktüerya Risk Modeli modellenir.',
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
        m: 'Gruplar grafik ve olasılık modellerini sunar. Şifreler: <b>zincir10 · akis10 · pipeline10</b>.' }
    ],
    ornekler: [
      { kotu: 'Fonksiyon grafiğini güzel göster.', iyi: 'y=2x−3 doğrusal fonksiyonunu koordinat düzleminde göster; eksenleri ve birimleri etiketle, kesişimleri işaretle, x değerleri için küçük bir tablo ekle ve eğimin değişim oranı anlamını kısa notla açıkla.', not: 'Koordinat düzlemi, kesişim noktaları, değer tablosu ve eğim notu.' },
      { kotu: 'Oyun olasılığını hesapla.', iyi: 'Bir kutu oyununda peş peşe 2 kart çekme olasılığını ağaç diyagramı olarak tasarla; her dalın bağımlı olasılık değerlerini, 4 yolun sonucunu ve toplamın 1 olduğunu göster.', not: 'Bağımlı olasılık ağacı ve toplam 1 kontrolü.' },
      { kotu: 'İnternet veri grafiği yap.', iyi: 'Aylık internet veri kullanımını gösteren çizgi grafik ve dağılım pasta grafiğini yan yana tasarla; eksen aralıklarını eşit tut ve yanıltıcı basık ölçek kullanma.', not: 'İki grafik türü ve eşit ölçek güvenliği.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 9.1)', sure: '12 dk', tur: 'Bireysel', ne: 'İlişkiyi belirleme, temsili seçme ve ölçek/etiket denetimi kuralları.',
        sayfalar: ['Matematiksel Temsil Girişi', '3 Temsil Kuralı', 'Temsil Formülü', 'Fonksiyon Grafiği Örneği', 'İki Temsilli Görev'],
        nasil: 'Matematiksel ilişkiyi iki temsille anlatır. Şifre: zincir10', pass: 'zincir10' },
      { ad: 'Grup Atölyesi (Ders 9.2)', sure: '18 dk', tur: 'Grup', ne: 'Doğrusal Fonksiyon, Olasılık Ağacı, İnternet Verisi ve Aktüerya Modeli.',
        sayfalar: ['Roller', 'İstasyon 1: Doğrusal Fonksiyon', 'İstasyon 2: Olasılık Ağacı', 'İstasyon 3: İnternet Verisi', 'İstasyon 4: Aktüerya Risk'],
        nasil: 'Grup matematiksel temsil sunum kartını hazırlar. Şifre: akis10', pass: 'akis10' },
      { ad: 'Prompt Vitrini (Ders 9.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Fonksiyon Koordinatı, Olasılık Ağacı, Veri Paneli ve Aktüerya Şablonları.',
        sayfalar: ['Doğrusal Fonksiyon', 'Olasılık Ağacı', 'İnternet Veri Paneli', 'Aktüerya Riski', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, eksen tutarlılığını test eder. Şifre: pipeline10', pass: 'pipeline10' }
    ],
    sorular: [
      'Bir fonksiyonda denklem ile koordinat grafiği aynı x değerlerinde farklı y verirse ne tür bir hata yapılmıştır?',
      'Eğimin pozitif veya negatif olması grafik çizgisinin yönünü nasıl belirler?',
      'Olasılık ağacında dalların yol boyunca çarpılması kuralı hangi matematiksel ilkeye dayanır?',
      'Yanıltıcı grafik tasarımları (örneğin y eksenini sıfırdan başlatmamak) halkı ve öğrencileri nasıl aldatır?'
    ],
    ipuclari: [
      'Öğrencilere değer tablosunda x=-1, 0, 1, 2 gibi kolay hesaplanan noktaları seçtirin.',
      'Koordinat ekseninde x ve y eksenlerinin oklarını ve isimlerini mutlaka yazdırın.',
      'Olasılık ağaçlarında her düğümdeki dalların toplamının 1 olduğunu kontrol ettirin.'
    ]
  },

  10: {
    ad: 'Geleceğin Laboratuvarını Tasarla',
    emoji: '🚀',
    konu: 'Problem · İş Akışı · Biyogüvenlik · Etik & İnsan Onayı (Bütünleşik Sistem Prototipi)',
    tekCumle: 'Bir araştırma merkezini <b>problem, kullanıcı rolleri, mekân kesiti, veri akışı, biyogüvenlik ve etik sınırlarıyla</b> bütünleşik bir sistem prototipine dönüştürmektir.',
    neden: [
      '10 haftalık prompt mühendisliği ve görselleştirme yolculuğu bu büyük sistem briefinde zirveye ulaşır.',
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
        m: 'Gruplar final laboratuvar prototiplerini sunar; 1. Dönem Zirvesi tamamlanır! Şifreler: <b>finalprototip10 · disiplin10 · final10</b>.' }
    ],
    ornekler: [
      { kotu: 'Geleceğin laboratuvarını çiz.', iyi: '2035’te kuraklığa dayanıklı tarım araştıran bir laboratuvar için görsel sistem briefi oluştur; araştırmacı rolleri, sensörler, numune akışı, veri panosu, enerji kullanımı, biyogüvenlik ve insan onay noktalarını katmanlı şema olarak tarif et.', not: 'Problem, roller, numune akışı, enerji ve biyogüvenlik bir arada.' },
      { kotu: 'Uzay üssü resmi yap.', iyi: 'Ay yüzeyinde çalışan uzay biyolojisi laboratuvarının izometrik kesitini tasarla: Bitki büyüme odası, radyasyon kalkanı, kapalı devre su arıtma ve acil durum tahliye kapısını etiketle; biyogüvenlik protokolünü belirt.', not: 'Kapalı devre sistemler ve biyogüvenlik protokolü.' },
      { kotu: 'Robotik test merkezi briefi yaz.', iyi: 'Otonom tarım robotlarını test eden araştırma merkezinin iş akışı haritasını oluştur: Sensör kalibrasyonu, simülasyon odası, saha deneme alanı ve acil durdurma butonlarını şemada göster.', not: 'Test aşamaları ve acil güvenlik noktaları.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 10.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Araştırma problemini seçme, sistemi haritalama ve güvenli tasarlama kuralları.',
        sayfalar: ['Sistem Mimarisi Girişi', '3 Tasarım Kuralı', 'Prototip Formülü', 'Tarım Laboratuvarı Örneği', 'Sistem Tasarım Görevi'],
        nasil: 'Geleceğin laboratuvarını iş akışıyla planlar. Şifre: finalprototip10', pass: 'finalprototip10' },
      { ad: 'Grup Atölyesi (Ders 10.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarım Laboratuvarı, Vatandaş Bilimi, Robotik Test Merkezi ve Uzay Biyolojisi.',
        sayfalar: ['Roller', 'İstasyon 1: Tarım Laboratuvarı', 'İstasyon 2: Vatandaş Bilimi', 'İstasyon 3: Robotik Merkezi', 'İstasyon 4: Uzay Biyolojisi'],
        nasil: 'Grup bütünleşik sistem prototip kartını hazırlar. Şifre: disiplin10', pass: 'disiplin10' },
      { ad: 'Prompt Vitrini (Ders 10.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarım Merkezi, Gözlem İstasyonu, Robotik Merkezi ve Uzay Biyolojisi Şablonları.',
        sayfalar: ['Tarım Laboratuvarı', 'Gözlem İstasyonu', 'Robotik Merkezi', 'Uzay Biyolojisi', 'Kalite Kontrol'],
        nasil: 'Final şablonlarını inceler, portfolyosunu tamamlar. Şifre: final10', pass: 'final10' }
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

/* Planlanan 11–36. Haftalar (Lise 10 Müfredatındaki Gelecek Dersler) */
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
