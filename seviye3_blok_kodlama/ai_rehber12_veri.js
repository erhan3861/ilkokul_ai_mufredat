/* =========================================================================
   AI-GALAXY • LİSE 12 (12. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : lise12/ders_linkleri_ve_sifreleri.md
   Etkinlik adları ve ekran metni  : lise12/dersN/content.js & mufredat.md
   Uydurulan ders/etkinlik adı yoktur.

   NOT — 12. SINIFIN (LİSE 12) AYIRT EDİCİ YANLARI:
   • Lise mezuniyet, sistem tasarımı, risk yönetişimi ve jüri savunması düzeyidir.
   • Ağırlık "Ölçülebilir Kabul Ölçütleri", "Teknik Şartname ve Red-Team",
     "Sürüm Kontrolü ve Yayın Onayı", "Erişilebilirlik ve Doğruluk Protokolü",
     "Güven Puanı ve Eskalasyon Eşiği", "Yeniden Üretilebilir Karar Günlüğü",
     "Uzman Doğrulaması ve İnsan Onayı", "Nicel Model ve Simülasyon Testi",
     "Yanıltıcı Ölçek Güvenliği", "Tez, Yönetişim ve 90sn Jüri Savunması".
   • Üç aşamalı ders yapısı:
       – 1. Aşama: Bireysel Konu Keşfi, 5 Bileşenli Formül & Sistem Şartnamesi
       – 2. Aşama: Grup Atölyesi (4 Rol: Akış Sorumlusu, Prompt Mimarı, Sorgulayıcı, Sunucu)
                   Maarif, Hobi, Teknoloji, Geleceğin Meslekleri İstasyonları + Sistem Savunması
       – 3. Aşama: Prompt Vitrini (4 Alan Şablonu) & 4 Boyutlu Kalite Kontrolü
   • Şifreler her aşamanın bitiş slaytında verilir (örn. 1. hafta: tez12, olcut12, basari12).
   ========================================================================= */

var AI_TEMEL = 'https://lise12.vercel.app';

var AI_GENEL_EKRAN = [
  { b: '1️⃣ Slayt Başlığı ve Odak Rozeti', m: 'Öğrenci ekranın sol üstündeki konuyu, kazanım etiketlerini ve odak cümlesini inceler.' },
  { b: '2️⃣ Temel Fikirler ve 5 Bileşenli Formül', m: 'Prompt mimarisi bileşenlerini (Rol + Görev + Bağlam + Detay + Format) ve sistem/savunma standartlarını okur.' },
  { b: '3️⃣ Karşılaştırmalı Örnek (Önce / Sonra)', m: 'Belirsiz istek ile üretim standartlarına sahip teknik şartname arasındaki farkı analiz eder.' },
  { b: '4️⃣ Grup Atölyesi ve İstasyon Görevleri', m: '4 takım rolünü (Akış, Mimar, Sorgulayıcı, Sunucu) paylaşır; Maarif, Hobi, Teknoloji ve Meslek istasyonlarında üretim + sistem savunması hazırlar.' },
  { b: '5️⃣ Prompt Vitrini ve Kalite Kontrolü', m: 'Gerçek prompt şablonlarını inceler; 4 maddelik kalite ve risk kontrol listesinden geçirir.' },
  { b: '6️⃣ Tamamlama ve Şifre (FLAG)', m: 'Aşama sonu tebrik ekranında şifresini alır ve öğretmen onayına sunar.' }
];

var AI_DERSLER = {

  1: {
    ad: 'AI Benim Öğrenme Asistanım',
    emoji: '🧭',
    konu: 'Ölçülebilir Öğrenme Sistemi ve İnsan Sorumluluğu (Biyoloji 12: Fotosentez & Solunum)',
    tekCumle: 'Yapay zekâyı hazır cevap veren bir araçtan çok; <b>ölçülebilir kabul ölçütleri, geri bildirim döngüsü ve insan sorumluluğuyla çalışan bir öğrenme sistemi</b> olarak tasarlamaktır.',
    neden: [
      '12. sınıf mezuniyet aşamasında öğrenci, yapay zekâ çıktısını doğrulamaktan kendisinin sorumlu olduğunu bilmeli ve kabul testleri kurmalıdır.',
      'Öğrenme hedefini kabul ölçütü, risk sahibi ve insan onay noktalarıyla sistemleştirir.',
      'Fotosentez Enerji Dönüşümü, Diyafram-Enstantane Dengesi, Mobil Veri Akışı ve Yenilenebilir Enerji Mühendisliği istasyonlarıyla çok disiplinli öğrenme kurulur.'
    ],
    kazanim: [
      'Hazır cevap almak ile ölçülebilir bir öğrenme sistemi tasarlamayı <b>ayırt eder</b>.',
      'Öğrenme sürecine <b>Kabul Testi → Geri Bildirim Döngüsü → İnsan Onay Noktası</b> ekler.',
      'Yapay zekâ yanıtının tüm bilimsel sorumluluğunu üstlenerek <b>karar kanıtı kaydeder</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Cevap mı, ölçülebilir sistem mi? (5 dk)',
        m: 'Tahtaya yazın: <b>“Fotosentezi anlat.”</b> Sorun: “Bu çıktının doğruluğunu ve öğrenme hedefinize ulaştığını hangi nesnel kabul ölçütüyle test edersiniz?”' },
      { b: '2️⃣ Sistemik Asistan Formülü (5 dk)',
        m: 'Formülü tahtaya yazın: <b>1. Rol (Danışman) · 2. Konu (Enerji Dönüşümü) · 3. Düzey (12. sınıf) · 4. Yöntem (Kabul Testli) · 5. Sorumluluk/Onay (İnsan Karar İzi).</b>' },
      { b: '3️⃣ Etkinlik ve İstasyonlar (25 dk)',
        m: '1.1 Bireysel Keşif → 1.2 Grup Atölyesi (Maarif/Fotosentez, Hobi/Diyafram, Teknoloji/Veri Akışı, Meslek/Enerji) → 1.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Öğrenciler ürettikleri sistem brieflerini ve kabul testlerini sunar. Şifreler: <b>tez12 · olcut12 · basari12</b>.' }
    ],
    ornekler: [
      { kotu: 'Fotosentezi anlat.', iyi: '10. sınıf biyoloji öğrencisine fotosentezi önce günlük yaşam benzetmesiyle, sonra bilimsel kavramlarla açıkla; ışığa bağlı ve bağımsız tepkimeleri karşılaştıran tablo ve üç kavrama sorusu ekle. Öğrenme hedefini ölçülebilir kabul ölçütü, geri bildirim döngüsü ve insan sorumluluğuyla bir öğrenme sistemi olarak tasarla.', not: 'Sistemik brief, kabul testleri ve insan onayı.' },
      { kotu: 'Fotoğraf ayarlarını söyle.', iyi: 'Fotoğraf eğitmeni rolünde, diyafram ve enstantane dengesini su musluğu benzetmesiyle açıkla; 3 çekim hatası verip öğrencinin bunları analiz etmesini sağla; kabul ölçütü olarak pozlama değerinin tutarlılığını test et.', not: 'Kabul ölçütlü hata analizi.' },
      { kotu: 'Yenilenebilir enerji nedir?', iyi: 'Yenilenebilir enerji uzmanı olarak, güneş ve rüzgâr santrallerinin şebeke entegrasyonunu açıkla; kabul testlerini, risk sahibini, insan onayını ve jüriye sunulacak kanıtı ayrı başlıklarda ver.', not: 'Risk sahibi ve jüri kanıtı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 1.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Öğrenme hedefini yazma, öğretme biçimini seçme ve kabul testleri kurma.',
        sayfalar: ['Öğrenme Asistanı Kavramı', '3 Temel İlke', '5 Bileşenli Formül', 'Karşılaştırma Kartı', 'Mini Uygulama'],
        nasil: 'Öğrenci slaytları tamamlar, sistemik asistan briefini yazar. Şifre: tez12', pass: 'tez12' },
      { ad: 'Grup Atölyesi (Ders 1.2)', sure: '18 dk', tur: 'Grup', ne: 'Fotosentez, Fotoğrafçılık, Veri Akışı ve Enerji Mühendisliği istasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Maarif (Fotosentez)', 'İstasyon 2: Hobi (Diyafram)', 'İstasyon 3: Teknoloji (Veri Akışı)', 'İstasyon 4: Meslek (Enerji)'],
        nasil: 'Grup 4 rolü paylaşır; sunum kartı ve sistem savunması hazırlar. Şifre: olcut12', pass: 'olcut12' },
      { ad: 'Prompt Vitrini (Ders 1.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Maarif, Hobi, Teknoloji ve Meslek şablonları + Kalite & Risk Kontrolü.',
        sayfalar: ['Maarif Promptu', 'Hobi Koçu', 'Teknoloji Asistanı', 'Meslek Danışmanı', '4 Kalite Kontrolü'],
        nasil: 'Şablonları inceler, kendi öğrenme hedefine uyarlar. Şifre: basari12', pass: 'basari12' }
    ],
    sorular: [
      'Yapay zekânın ürettiği bir ders materyalinde hukuki ve bilimsel sorumluluk neden modele değil, hazırlayan insana aittir?',
      'Öğrenme hedefine "ölçülebilir kabul testi" eklemek öğrenci değerlendirmesini nasıl güçlendirir?',
      '12. sınıf düzeyinde bir prompt yazarken "insan onayı ve durdurma eşiği" tanımlamak neden gereklidir?',
      'Bir öğrenme asistanı geri bildirim döngüsü olmadan çalıştığında hangi bilişsel riskler doğar?'
    ],
    ipuclari: [
      'Öğrencilere kabul ölçütlerini "çıktı şu 3 koşulu sağlamalıdır" şeklinde somut yazdırmalarını sağlayın.',
      'Sınıfta en iyi kabul testi senaryosunu tahtada çalıştırın.',
      'Klavye sağ/sol oklarıyla slayt geçişini akıllı tahtada gösterin.'
    ]
  },

  2: {
    ad: 'İyi Prompt Nasıl Kurulur?',
    emoji: '🧱',
    konu: 'Teknik Şartname, Kabul ve Geri Dönüş Koşulu (Coğrafya 12: İklim Değişikliği)',
    tekCumle: 'Belirsiz bir isteği rol, görev, bağlam, ayrıntı ve çıktı biçimiyle; <b>teknik şartname, kabul kriterleri ve hata durumunda geri dönüş koşuluyla</b> profesyonel bir üretim briefine dönüştürmektir.',
    neden: [
      'İleri düzey mühendislik ve yazılım süreçlerinde promptlar birer "Teknik Şartname (Spec)" olarak yazılır.',
      'İklim Değişikliği Bilgilendirme Kartı, Gitar Çalışma Planı, Kulüp Web Briefi ve Robotik Kariyer Tanıtımı modellenir.',
      'Kabul kriterleri, geri dönüş mekanizmaları ve öncelik kuralları açıkça tanımlanır.'
    ],
    kazanim: [
      'Bir promptu <b>teknik şartname ve kabul kriterleri</b> ile yapılandırır.',
      'Modelin başarısız olması durumunda devreye girecek <b>geri dönüş (fallback) kuralı</b> tanımlar.',
      'Çıktıyı 6 satırlık tablo ve standartlaştırılmış teslim formatı olarak <b>sınırlandırır</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — İstek mi, teknik şartname mi? (5 dk)',
        m: '“Bir mimar müteahhite ‘güzel bir ev yap’ demez, teknik şartname verir. Prompt yazarken de aynı mühendislik disiplini gerekir.”' },
      { b: '2️⃣ Şartname Modeli (5 dk)',
        m: '🧱 <b>1. Rol · 2. Görev · 3. Bağlam · 4. Kabul Kriterleri (Spec) · 5. Geri Dönüş (Fallback).</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '2.1 Bireysel Keşif → 2.2 Takım Brief Atölyesi (İklim, Gitar, Web Brief, Robotik) → 2.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar teknik şartname niteliğindeki brieflerini sunar. Şifreler: <b>gereksinim12 · sartname12 · spec12</b>.' }
    ],
    ornekler: [
      { kotu: 'İklim değişikliği için güzel bir şey hazırla.', iyi: 'Bir fen iletişimcisi olarak 10. sınıf öğrencileri için iklim değişikliğinin üç nedenini ve üç sonucunu açıkla; Türkiye’den iki örnek kullan, belirsiz iddiaları işaretle ve çıktıyı 6 satırlık tablo olarak ver. Çıktı şartnameye uymazsa yalnızca eksik satırları revize et.', not: 'Teknik şartname, kısıtlar ve geri dönüş kuralı.' },
      { kotu: 'Gitar planı yap.', iyi: 'Klasik gitar eğitmeni rolünde, haftalık 25 dakikalık parmak egzersiz tablosu hazırla; kabul kriteri: her güne spesifik metronom değeri ve parmak kombinasyonu eklenmeli.', not: 'Ölçülebilir kabul kriteri.' },
      { kotu: 'Robotik mesleğini anlat.', iyi: 'Endüstriyel robotik uzmanı olarak, 2035 üretim hattındaki mühendisin görevlerini 3 başlıkta özetle; şartname dışı jenerik ifadeleri ele ve kaynak izini belirt.', not: 'Jenerik ifade filtresi ve kaynak izi.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 2.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Rolü amaca bağlama, bağlam ve sınır koyma, çıktıyı tarif etme formülü.',
        sayfalar: ['Prompt Mimarisi Girişi', '3 Tasarım Kuralı', '5 Bileşenli Formül', 'İklim Karşılaştırması', 'Brief Tamir Görevi'],
        nasil: 'Öğrenci 5 bileşeni inceler, teknik şartnameyi kurar. Şifre: gereksinim12', pass: 'gereksinim12' },
      { ad: 'Grup Atölyesi (Ders 2.2)', sure: '18 dk', tur: 'Grup', ne: 'İklim Kartı, Gitar Planı, Web Sayfası Briefi ve Robotik Tanıtımı.',
        sayfalar: ['Roller', 'İstasyon 1: İklim Kartı', 'İstasyon 2: Gitar Planı', 'İstasyon 3: Web Briefi', 'İstasyon 4: Robotik Tanıtımı'],
        nasil: 'Grup şartname ve sistem savunmasını tamamlar. Şifre: sartname12', pass: 'sartname12' },
      { ad: 'Prompt Vitrini (Ders 2.3)', sure: '10 dk', tur: 'Vitrin', ne: 'İklim, Gitar, Web Kulübü ve Robotik Şablonları + Kalite Kontrol.',
        sayfalar: ['İklim Şablonu', 'Hobi Şablonu', 'Web Tasarım Şablonu', 'Robotik Şablonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, şartname kurallarını test eder. Şifre: spec12', pass: 'spec12' }
    ],
    sorular: [
      'Prompt mühendisliğinde "Teknik Şartname (Spec)" yaklaşımı profesyonel hayatta neden zorunludur?',
      'Bir promptta "geri dönüş (fallback) koşulu" bulunmazsa model hata yaptığında süreç nasıl tıkanır?',
      'Kabul kriterlerinin evet/hayır ile denetlenebilir olması ne sağlar?',
      '12. sınıf düzeyinde bir prompt yazarken gereksinimlerin netliği teslim süresini nasıl kısaltır?'
    ],
    ipuclari: [
      'Öğrencilere her promptun sonuna "Kabul kriteri: ..." ve "Hata durumu: ..." maddeleri eklettirin.',
      'Sınıfta en net şartnameyi seçin.',
      'Tablo formatında sütun parametrelerini açıkça belirletin.'
    ]
  },

  3: {
    ad: 'Aynı Bilgiyi Farklı Şekillerde Anlatmak',
    emoji: '🔄',
    konu: 'Sürüm, Bilgi Kaybı ve Yayın Onayı (Tarih 12: Tanzimat & Modernleşme)',
    tekCumle: 'Aynı doğru bilgiyi tablo, infografik, hikâye veya görsel sahneye dönüştürürken <b>sürüm takibi yapmak, bilgi kaybını ölçmek ve yayın onay kriterlerini denetlemektir</b>.',
    neden: [
      'Kurumsal yayıncılık ve akademik iletişimde her format dönüşümü bir "sürüm (version)" olarak kaydedilir ve onaydan geçer.',
      'Tanzimat Dönemi Dönüşümleri, Basketbol Hücum Seti, İnternet Paketinin Yolculuğu ve Biyoteknoloji Uzmanı günü dönüştürülür.',
      'Sürümleme, kayıp kontrolü ve yayın onayı protokolleri uygulanır.'
    ],
    kazanim: [
      'Bir bilgi paketini <b>karşılaştırma tablosu, infografik ve tarihsel kurguya</b> dönüştürür.',
      'Her format dönüşümünü <b>sürüm (v1.0, v1.1) ve kayıp analiziyle</b> belgeler.',
      'Yayın öncesi <b>bilimsel doğruluk ve onay kriterlerini</b> denetler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Yayın onayı kimde? (5 dk)',
        m: 'Tarihî bir konuyu görselleştiren bir ajansın hazırladığı infografiği yayınlamadan önce tarihçinin onayından geçirme sürecini tartışın.' },
      { b: '2️⃣ Sürüm & Onay Modeli (5 dk)',
        m: '🔄 <b>1. Orijinal Çekirdek · 2. Temsil Sürümü (v1.0) · 3. Kayıp Analizi · 4. Düzeltme (v1.1) · 5. Yayın Onayı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '3.1 Bireysel Keşif → 3.2 Grup Atölyesi (Tanzimat, Basketbol, İnternet Paketi, Biyoteknoloji) → 3.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar 3 formatlı sürümleri ve yayın onay raporlarını sunar. Şifreler: <b>protokol12 · tekrar12 · kayit12</b>.' }
    ],
    ornekler: [
      { kotu: 'Osmanlı modernleşmesini farklı anlat.', iyi: 'Tanzimat döneminin temel dönüşümlerini aynı bilgi çekirdeğini koruyarak karşılaştırma tablosu, 5 kutulu infografik planı ve bir öğrencinin gözünden 150 kelimelik tarihsel kurgu olarak üret; kurgu ile tarihsel olguyu ayır. Her temsilin koruduğu bilgiyi sürüm kaydı ve yayın onayıyla listele.', not: 'Sürüm kaydı, olgu-kurgu ayrımı ve yayın onayı.' },
      { kotu: 'Basketbol taktiği yaz.', iyi: 'Pick and roll hücum setini oyuncu tablosuna, taktik tahtası şemasına ve heyecanlı maç anı hikâyesine dönüştür; antrenör yayın onayı kriterlerini karşılaştır.', not: 'Onay kriterleri ve format dönüşümü.' },
      { kotu: 'İnternet nasıl çalışır?', iyi: 'Bir veri paketinin yolculuğunu: TCP/IP tablosu, router akış şeması ve 200 kelimelik mikro öykü olarak üret; teknik doğruluk kaybını denetleyip v1.0 sürümünü kaydet.', not: 'Teknik sürümleme ve kayıp analizi.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 3.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Özü sabitleme, temsili amaca göre seçme ve bilgi kaybı denetimi.',
        sayfalar: ['Bilgi Tasarımı Girişi', '3 Temel Kural', 'Dönüşüm Formülü', 'Tanzimat Örneği', 'Kayıp Kontrolü Görevi'],
        nasil: 'Bilgi paketini 3 farklı temsile dönüştürür. Şifre: protokol12', pass: 'protokol12' },
      { ad: 'Grup Atölyesi (Ders 3.2)', sure: '18 dk', tur: 'Grup', ne: 'Tanzimat Dönüşümleri, Basketbol Seti, Veri Paketi ve Biyoteknoloji İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Tanzimat', 'İstasyon 2: Basketbol Seti', 'İstasyon 3: Veri Paketi', 'İstasyon 4: Biyoteknoloji'],
        nasil: 'Grup sürüm kartını ve yayın onay raporunu tamamlar. Şifre: tekrar12', pass: 'tekrar12' },
      { ad: 'Prompt Vitrini (Ders 3.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Spor, İnternet Ağı ve Biyoteknoloji Şablonları + Kalite Kontrol.',
        sayfalar: ['Tarih Dönüşümü', 'Spor Şeması', 'Teknoloji Akışı', 'Meslek Hikâyesi', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, sürümleme kurallarını test eder. Şifre: kayit12', pass: 'kayit12' }
    ],
    sorular: [
      'Farklı kitleler için üretilen içeriklerde "sürüm takibi" yapılmazsa hangi kavram kargaşaları doğar?',
      'Yayın onay kriterlerinde en az bir bağımsız uzman kontrolü bulunmasının önemi nedir?',
      'Bir infografik ile hikâye arasındaki bilgi kaybı oranı nasıl minimize edilir?',
      '12. sınıf düzeyinde içerik üretirken telif, etik ve bilimsel referans nasıl belgelenir?'
    ],
    ipuclari: [
      'Öğrencilere her çıktının altına "Sürüm: v1.0, Onay: Bekliyor, Kayıp Oranı: Düşük" gibi metaveriler eklettirin.',
      'Tablolarda karşılaştırma kriterlerini net tutun.',
      'Süreç sıralamasını kontrol ettirin.'
    ]
  },

  4: {
    ad: 'Karmaşık Konuyu Görsele Dönüştürmek',
    emoji: '🧬',
    konu: 'Doğruluk Protokolü, Erişilebilirlik ve Red-Team (Biyoloji 12: Ökaryot Hücre)',
    tekCumle: 'Karmaşık bir sistemi bilimsel öğeler, ilişkiler ve görsel hiyerarşiyle anlatırken <b>doğruluk protokolü uygulamak, renk körlüğü/erişilebilirlik standartlarını sağlamak ve red-team testinden geçirmektir</b>.',
    neden: [
      'Görseller tüm öğrenciler için erişilebilir (renk körlüğü uyumlu, alt yazılı) olmalı ve kasıtlı hata arama (red-team) testinden geçmelidir.',
      'Ökaryot Hücre Kesiti, Oyun Mekaniği Sistemi, Akıllı Ev Sensör Ağı ve Uzay Tarımı İstasyonu modellenir.',
      'Doğruluk protokolü, kontrast standartları ve negatif kısıtlar uygulanır.'
    ],
    kazanim: [
      'Karmaşık bir sistemi <b>nesneler, süreçler ve ölçekler</b> olarak modeller.',
      'Görsel çıktının <b>erişilebilirlik ve renk kontrastı standartlarına</b> uygunluğunu sağlar.',
      'Görseli kasıtlı hatalara karşı <b>red-team denetiminden</b> geçirir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Herkes görebiliyor mu? (5 dk)',
        m: 'Kırmızı-yeşil renk körü olan bir öğrencinin aynı hücre şemasındaki mitokondri ve kloroplastı ayırt edip edemeyeceğini tartışın.' },
      { b: '2️⃣ Red-Team ve Doğruluk Formülü (5 dk)',
        m: '🧬 <b>1. Sistem Kavramı · 2. Öğeler · 3. Erişilebilir Kodlama · 4. Doğruluk Protokolü · 5. Red-Team Testi.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '4.1 Bireysel Keşif → 4.2 Grup Atölyesi (Ökaryot Hücre, Oyun Seviyesi, Akıllı Ev, Uzay Tarımı) → 4.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar görsel sahneleme ve red-team raporlarını sunar. Şifreler: <b>nedensel12 · karsiolgu12 · neden12</b>.' }
    ],
    ornekler: [
      { kotu: 'Hücreyi gösteren görsel yap.', iyi: '10. sınıf düzeyinde ökaryot hücreyi kesit infografiği olarak tasarla; çekirdek, mitokondri, ribozom ve zar yapısını etiketle, madde–enerji ilişkisini oklarla göster, organellerin ölçeğini temsili olarak belirt ve hatalı organel ekleme. Renk körlüğüne uygun kontrast paleti ve red-team hata kontrolü ekle.', not: 'Erişilebilir palet, doğruluk protokolü ve red-team.' },
      { kotu: 'Oyun haritası çiz.', iyi: '2D platform oyun mekaniğini gösteren şematik plan: Başlangıç, tuzaklar, enerji kaynakları ve çıkış kapısını yüksek kontrastlı sembollerle etiketle; mekanik çelişkileri red-team ile test et.', not: 'Yüksek kontrast ve mekanik denetimi.' },
      { kotu: 'Akıllı ev resmi yap.', iyi: 'Akıllı ev sensör ağını gösteren izometrik kesit görseli tasarla: Sensörler ve hub arasındaki veri akışını kesik oklarla göster; erişilebilir lejant ve gizlilik rozeti ekle.', not: 'Erişilebilir lejant ve veri gizliliği.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 4.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sistemi parçalara ayırma, ilişkiyi görünür yapma ve yanlış görselleştirmeyi önleme.',
        sayfalar: ['Görsel Hiyerarşi Girişi', '3 Tasarım Kuralı', 'Görsel Formülü', 'Ökaryot Hücre Örneği', 'Görsel Harita Görevi'],
        nasil: 'Sistemik görselleştirme promptunu ve red-team listesini kurar. Şifre: nedensel12', pass: 'nedensel12' },
      { ad: 'Grup Atölyesi (Ders 4.2)', sure: '18 dk', tur: 'Grup', ne: 'Ökaryot Hücre, Oyun Seviyesi Mekaniği, Akıllı Ev ve Uzay Tarımı İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Ökaryot Hücre', 'İstasyon 2: Oyun Mekaniği', 'İstasyon 3: Akıllı Ev Ağı', 'İstasyon 4: Uzay Tarımı'],
        nasil: 'Grup erişilebilirlik ve red-team savunma kartını tamamlar. Şifre: karsiolgu12', pass: 'karsiolgu12' },
      { ad: 'Prompt Vitrini (Ders 4.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Biyoloji Kesiti, Oyun Haritası, Sensör Ağı ve Uzay İstasyonu Şablonları.',
        sayfalar: ['Hücre Kesiti', 'Oyun Haritası', 'Akıllı Sensörler', 'Uzay İstasyonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, hiyerarşi ve erişilebilirlik kurallarını test eder. Şifre: neden12', pass: 'neden12' }
    ],
    sorular: [
      'Görsel tasarımlarda "Red-Team (Kasıtlı Hata Arama)" ekibi kurmak kaliteyi nasıl artırır?',
      'Renk körlüğü ve erişilebilirlik ilkeleri eğitsel infografiklerde neden zorunlu bir standarttır?',
      'İzometrik kesit çizimlerinde sembollerin sadece renkle değil, şekille de ayrıştırılması neden gerekir?',
      '12. sınıf öğrencisi için görsel okuryazarlık ve eleştirel gözlem neden kritik bir yetkinliktir?'
    ],
    ipuclari: [
      'Öğrencilere renk kodlaması yaparken yanında mutlaka harf veya ikon da kullandırın.',
      'Sınıfta bir grubu diğer grubun çizimini "red-team" olarak denetlemekle görevlendirin.',
      'Negatif kısıtları net ve somut tanımlatın.'
    ]
  },

  5: {
    ad: 'AI Hata Yapabilir mi?',
    emoji: '🔎',
    konu: 'Güven Puanı, Eskalasyon ve Yayın Eşiği (Halüsinasyon & Stres Testi)',
    tekCumle: 'Yapay zekâ çıktısındaki iddiaları stres testine tabi tutmak; <b>güven puanı hesaplamak, riskli iddiaları eskalasyon eşiğiyle uzman onayına yönlendirmek ve yayın standardı koymaktır</b>.',
    neden: [
      'Büyük dil modellerinin hatalarını tespit etmek yetmez; yayınlanabilirlik eşiği (%95 güven) ve uzman eskalasyon kuralları konulmalıdır.',
      'Tarihsel Olaylar, Spor Performansı Tavsiyeleri, Cihaz Özellikleri ve 2035 Kariyer Tahminleri stres testinden geçirilir.',
      'İddia–kaynak–güven matrisi, eskalasyon protokolü ve yayın onay eşiği uygulanır.'
    ],
    kazanim: [
      'Yapay zekâ yanıtındaki iddialara <b>sayısal güven puanı (1–5)</b> atar.',
      'Güven eşiğinin altındaki iddialar için <b>uzman eskalasyon protokolü</b> işletir.',
      'Doğrulanmamış verilerin <b>yayınlanmasını durduran güvenlik eşiği</b> kurar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Yayınlanır mı, durdurulur mu? (5 dk)',
        m: 'Yapay zekânın %80 doğru ama %20 kritik hata içeren bir sağlık/tarih metnini doğrudan yayınlamanın yaratacağı hukuki ve etik riskleri tartışın.' },
      { b: '2️⃣ Eskalasyon ve Güven Formülü (5 dk)',
        m: '🔎 <b>1. İddia Analizi · 2. Stres Testi · 3. Güven Puanı (1-5) · 4. Eskalasyon Eşiği · 5. Yayın Kararı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '5.1 Bireysel Keşif → 5.2 Grup Atölyesi (Tarihsel Olay, Spor Tavsiyesi, Cihaz İddiası, 2035 Kariyer) → 5.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar stres testi raporlarını ve eskalasyon kararlarını sunar. Şifreler: <b>redteam12 · strestest12 · dayaniklilik12</b>.' }
    ],
    ornekler: [
      { kotu: 'Bu AI cevabı doğru mu?', iyi: 'Aşağıdaki AI çıktısındaki doğrulanabilir iddiaları tabloya ayır. Her iddia için gereken kaynak türünü, güncellik ihtiyacını, bağımsız doğrulama adımını ve 1–5 güven puanını yaz; 4 puanın altındaki iddialar için eskalasyon uyarısı ekle.', not: 'Stres testi, güven puanı ve eskalasyon kuralı.' },
      { kotu: 'Sporcu takviyesi öner.', iyi: 'Aşağıdaki sporcu beslenme tavsiyesindeki bilimsel iddiaları ayıkla; klinik çalışma desteği olmayanları işaretle ve uzman onayı olmadan yayınlanamaz notu düş.', not: 'Uzman onayı ve yayın durdurma eşiği.' },
      { kotu: 'Gelecekte hangi meslekler yok olacak?', iyi: '2035 meslek tahminleri metnindeki sayısal iddiaları listele; araştırma raporu kaynağı, varsayımlar ve güven sınırlarını ayrı başlıklarda sun; belirsizlik dilini zorunlu kıl.', not: 'Tahmin güven sınırları ve belirsizlik kuralı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 5.1)', sure: '12 dk', tur: 'Bireysel', ne: 'İddiayı ayıklama, kaynağı değerlendirme ve güven puanı verme kuralları.',
        sayfalar: ['Halüsinasyon Mekanizması', '3 Denetim Kuralı', 'Denetim Formülü', 'Doğrulama Örneği', 'Kaynak Tablosu Görevi'],
        nasil: 'Çıktıyı stres testine tabi tutar. Şifre: redteam12', pass: 'redteam12' },
      { ad: 'Grup Atölyesi (Ders 5.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarihsel Olay, Spor Tavsiyesi, Cihaz Özelliği ve 2035 Kariyer Tahmini.',
        sayfalar: ['Roller', 'İstasyon 1: Tarih Metni', 'İstasyon 2: Spor Tavsiyesi', 'İstasyon 3: Cihaz İddiası', 'İstasyon 4: 2035 Öngörüleri'],
        nasil: 'Grup eskalasyon ve güven matrisini tamamlar. Şifre: strestest12', pass: 'strestest12' },
      { ad: 'Prompt Vitrini (Ders 5.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Sağlık, Teknoloji ve Gelecek Mesleği Denetim Şablonları.',
        sayfalar: ['Tarih Denetimi', 'Sağlık Filtresi', 'Cihaz Doğrulama', 'Kariyer Raporu', 'Kalite Kontrol'],
        nasil: 'Doğrulama şablonlarını inceler, yayın eşiğini test eder. Şifre: dayaniklilik12', pass: 'dayaniklilik12' }
    ],
    sorular: [
      'Bir yapay zekâ çıktısında "Eskalasyon Eşiği (Uzmana Yönlendirme)" neden otomatik sistemlerin emniyet sübabıdır?',
      'Sayısal güven puanı (1–5) atamak sübjektif şüpheyi nasıl nesnel bir kalite ölçütüne çevirir?',
      'Kritik alanlarda (tıp, hukuk, mühendislik) neden "sıfır halüsinasyon" toleransı uygulanır?',
      'Birincil akademik kaynaklar ile popüler internet kaynakları arasındaki güvenilirlik farkı nedir?'
    ],
    ipuclari: [
      'Öğrencilere güven puanı 3 ve altı olan maddeleri kırmızıyla işaretlettirin.',
      'Sayısal verilerin orijinal araştırma raporu linkini aratın.',
      'Sınıfta MEB ders kitabı ve bilimsel makalelerle çapraz kontrol yaptırın.'
    ]
  },

  6: {
    ad: 'Prompt Laboratuvarı',
    emoji: '🧪',
    konu: 'Yeniden Üretilebilir Deney ve Karar Günlüğü (A/B Deneyi & Yönetişim)',
    tekCumle: 'Kontrollü prompt deneylerini <b>yeniden üretilebilir parametrelerle kaydetmek, karar günlüğü tutmak ve risk yönetişimi çerçevesinde revizyon yapmaktır</b>.',
    neden: [
      'Bilimsel ve endüstriyel standartlarda bir yapay zekâ deneyi başkaları tarafından da aynı sonuçla tekrarlanabilir (reproducible) olmalıdır.',
      'Fizikte Enerji Dönüşümü, Kısa Öykü Açılışı, Uygulama Hata Mesajı ve Veri Analisti Özeti test edilir.',
      'Deney parametreleri, karar gerekçeleri ve risk yönetişim matrisi oluşturulur.'
    ],
    kazanim: [
      'Yeniden üretilebilir <b>kontrollü A/B deney protokolü</b> hazırlar.',
      'Tüm tasarım tercihlerini <b>karar günlüğünde (decision log)</b> belgeler.',
      'Sonuçları <b>risk ve yönetişim ölçütleriyle</b> denetler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Deney tekrarlanabilir mi? (5 dk)',
        m: '“Yaptığınız prompt deneyini başka bir sınıftaki öğrenci aynı adımlarla çalıştırdığında aynı sonuca varabilir mi?” sorusunu tartışın.' },
      { b: '2️⃣ Karar Günlüğü Formülü (5 dk)',
        m: '🧪 <b>1. Hipotez · 2. Sabitler · 3. Tek Değişken · 4. Karar Günlüğü · 5. Yönetişim Onayı.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '6.1 Bireysel Keşif → 6.2 Grup Atölyesi (Enerji Açıklaması, Öykü Açılışı, Hata Mesajı, Veri Analisti) → 6.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar karar günlüklerini ve yönetişim raporlarını sunar. Şifreler: <b>risk12 · yonetisim12 · kontrol12</b>.' }
    ],
    ornekler: [
      { kotu: 'İki prompt yazıp hangisi güzel bak.', iyi: 'Aynı fizik açıklaması için A ve B promptları üret; yalnız çıktı formatını değiştir. Her çıktıyı doğruluk, kavramsal açıklık, görsel düzen ve 12. sınıf uygunluğu ölçütleriyle 1–4 puanla; karar gerekçesini karar günlüğüne kaydet.', not: 'Tek değişkenli deney, 1–4 rubrik ve karar günlüğü.' },
      { kotu: 'Öykü başlangıcını değiştir.', iyi: 'Tarihî bir öykü açılışı için: Sürüm A (üçüncü şahıs) vs Sürüm B (birinci şahıs). Empati ve tarihsel doğruluk parametrelerini karar günlüğünde karşılaştır.', not: 'Bakış açısı değişkeni ve karar kaydı.' },
      { kotu: 'Hata mesajını düzelt.', iyi: 'Mobil uygulama hata mesajı için teknik kod vs kullanıcı çözümü A/B testi; çözüm hızı ve risk puanını yönetişim günlüğüne yaz.', not: 'Kullanıcı riski ve yönetişim kaydı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 6.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Hipotez kurma, tek değişkeni koruma ve karar günlüğü tutma.',
        sayfalar: ['A/B Laboratuvar Girişi', '3 Deney Kuralı', 'Deney Formülü', 'Fizik Deneyi Örneği', 'Karar Günlüğü Görevi'],
        nasil: 'Tek değişkenli deney protokolünü ve karar günlüğünü hazırlar. Şifre: risk12', pass: 'risk12' },
      { ad: 'Grup Atölyesi (Ders 6.2)', sure: '18 dk', tur: 'Grup', ne: 'Fizik Açıklaması, Öykü Açılışı, Hata Mesajı ve Veri Analisti İstasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Fizik Açıklaması', 'İstasyon 2: Öykü Açılışı', 'İstasyon 3: Hata Mesajı', 'İstasyon 4: Veri Analisti'],
        nasil: 'Grup çıktıları puanlar ve yönetişim günlüğünü tamamlar. Şifre: yonetisim12', pass: 'yonetisim12' },
      { ad: 'Prompt Vitrini (Ders 6.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Deney Şablonu, Öykü Değişkeni, Hata Mesajı ve Karar Günlüğü Rehberi.',
        sayfalar: ['Deney Tasarımı', 'Edebi Değişken', 'Kullanıcı Deneyimi', 'Karar Günlüğü', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, yeniden üretilebilirlik testlerini yapar. Şifre: kontrol12', pass: 'kontrol12' }
    ],
    sorular: [
      'Prompt mühendisliğinde "Karar Günlüğü (Decision Log)" tutmak gelecekteki revizyonları nasıl hızlandırır?',
      'Yeniden üretilebilirlik (reproducibility) ilkesi yapay zekâ araştırmalarında neden temel bir bilimsel şarttır?',
      'Bir prompttaki tek bir parametre değişikliğinin yarattığı risk nasıl ölçülür?',
      '12. sınıf düzeyinde sistematik deney tasarımı öğrencilere hangi akademik alışkanlığı kazandırır?'
    ],
    ipuclari: [
      'Öğrencilere neden o tercihi yaptıklarını tek cümlelik kanıtla karar günlüğüne yazdırın.',
      'Sınıfta iki grubun deneylerini birbirine tekrarlatın.',
      'Revizyon gerekçesini somut veriyle destekletin.'
    ]
  },

  7: {
    ad: 'Fen Bilimlerini Görselleştir',
    emoji: '🔬',
    konu: 'Uzman Doğrulaması ve Sürüm Kontrolü (DNA · Azot Döngüsü · Biyosensör)',
    tekCumle: 'Bilimsel süreçleri doğru ölçek, etiket ve açıklama katmanlarıyla görselleştirirken <b>uzman doğrulaması protokolü uygulamak ve sürüm kontrolüyle bilimsel denetim sağlamaktır</b>.',
    neden: [
      'Bilimsel görselleştirmede en küçük bir enzim veya yön hatası büyük kavram yanılgılarına yol açar; uzman onay adımları zorunludur.',
      'DNA Eşlenmesi, Akvaryum Azot Döngüsü, Biyosensör Çalışma Prensibi ve Genetik Danışmanlık Laboratuvarı modellenir.',
      'Enzim adımları, 5′ → 3′ yönü, sürüm kayıtları ve uzman doğrulama rozetleri eklenir.'
    ],
    kazanim: [
      'Bir fen sürecini <b>4 aşamalı bilimsel infografik briefine</b> dönüştürür.',
      'Görseldeki bilimsel iddiaları <b>uzman doğrulama protokolüyle</b> teyit eder.',
      'Görsel çıktının <b>sürüm geçmişini ve revizyon izini</b> belgeler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Bilimsel hakemlik (5 dk)',
        m: 'Bir ders kitabında yayınlanacak DNA şemasının biyoloji komisyonundan nasıl onay aldığını tartışın.' },
      { b: '2️⃣ Uzman Doğrulama Formülü (5 dk)',
        m: '🔬 <b>1. Bilimsel Olgu · 2. Ölçek & Yön · 3. 4 Aşamalı Süreç · 4. Sürüm Kaydı · 5. Uzman Onay İzi.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '7.1 Bireysel Keşif → 7.2 Grup Atölyesi (DNA Eşlenmesi, Azot Döngüsü, Biyosensör, Genetik Laboratuvarı) → 7.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar bilimsel görsel brieflerini ve uzman doğrulama raporlarını sunar. Şifreler: <b>sorumluluk12 · eskalasyon12 · insanonay12</b>.' }
    ],
    ornekler: [
      { kotu: 'DNA görseli hazırla.', iyi: 'DNA’nın eşlenmesini 12. sınıf düzeyinde 4 aşamalı bilimsel infografik olarak tasarla; anahtar enzimleri etiketle, yeni ve eski zincirleri renk kodla, okuma yönünü (5′→3′) göster; uzman onay kriterlerini ve sürüm kaydını ekle.', not: '4 aşama, enzim etiketleri, yön kontrolü ve uzman onayı.' },
      { kotu: 'Azot döngüsünü çiz.', iyi: 'Akvaryum azot döngüsünü 3 aşamalı şema olarak görselleştir: Amonyak → Nitrit → Nitrat. Bakteri türlerini etiketle; biyolojik tutarlılık onay rozeti ekle.', not: 'Bakteri türleri ve biyolojik onay rozeti.' },
      { kotu: 'Biyosensör resmi yap.', iyi: 'Diyabet takip biyosensörünün çalışma prensibini kesit olarak göster: Glukoz, enzim, elektrot ve sinyal ekranı; nanometre ölçek uyarısı ve sürüm notu ekle.', not: 'Biyosensör kesiti ve sürüm notu.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 7.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Bilimsel modeli seçme, süreci sıralama ve uzman doğrulama kuralları.',
        sayfalar: ['Fen Görseli İlkesi', '3 Tasarım Kuralı', 'Fen Formülü', 'DNA Eşlenmesi Örneği', 'Uzman Brief Görevi'],
        nasil: 'Fen sürecini görsel briefe dönüştürür. Şifre: sorumluluk12', pass: 'sorumluluk12' },
      { ad: 'Grup Atölyesi (Ders 7.2)', sure: '18 dk', tur: 'Grup', ne: 'DNA Eşlenmesi, Azot Döngüsü, Biyosensör ve Genetik Danışmanlık.',
        sayfalar: ['Roller', 'İstasyon 1: DNA Eşlenmesi', 'İstasyon 2: Azot Döngüsü', 'İstasyon 3: Biyosensör', 'İstasyon 4: Genetik Danışmanlık'],
        nasil: 'Grup 4 aşamalı sunum ve uzman doğrulama kartını hazırlar. Şifre: eskalasyon12', pass: 'eskalasyon12' },
      { ad: 'Prompt Vitrini (Ders 7.3)', sure: '10 dk', tur: 'Vitrin', ne: 'DNA Replikasyonu, Azot Döngüsü, Biyosensör ve Genetik Laboratuvarı Şablonları.',
        sayfalar: ['DNA Replikasyonu', 'Azot Döngüsü', 'Biyosensör Kesiti', 'Genetik Danışmanlık', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, uzman doğrulama kriterlerini test eder. Şifre: insanonay12', pass: 'insanonay12' }
    ],
    sorular: [
      'Bilimsel görselleştirmede uzman doğrulaması olmadan üretilen içerikler eğitimde ne tür riskler yaratır?',
      'DNA replikasyonunda 5′ → 3′ yönünün yanlış gösterilmesi hangi biyokimyasal yasayla çelişir?',
      'Görsel sürümlerinde revizyon geçmişini tutmanın akademik değeri nedir?',
      'Görsel modellerin ürettiği süsleyici detayları bilimsel etiketlerden ayırma refleksi nasıl kazanılır?'
    ],
    ipuclari: [
      'Öğrencilere biyolojik süreçleri 4 net aşamada kurdurun.',
      'Replikasyon enzimlerinin isimlerini MEB 12 kitabıyla eşleştirin.',
      'Sürüm geçmişini belgelendirin.'
    ]
  },

  8: {
    ad: 'Fizik Bir Sahne Olsaydı',
    emoji: '⚡',
    konu: 'Nicel Model, Simülasyon ve Doğrulama Testi (Kuvvet · Enerji Dönüşümü · Dalga)',
    tekCumle: 'Soyut fizik kavramlarını <b>kuvvet vektörleri, referans noktaları, zaman anları, enerji çubukları ve sayısal simülasyon doğrulama testleriyle</b> dinamik sahnelere dönüştürmektir.',
    neden: [
      '12. sınıf düzeyinde fizik sahnelemesi sadece nitel tasvir değil, sayısal büyüklükler ve korunum formülleriyle tutarlı olmalıdır.',
      'Kaykay Rampasında Enerji Dönüşümü, Basketbol Parabolik Hareketi, Elektrikli Bisiklet Enerji Akışı ve Rüzgâr Türbini modellenir.',
      'Kinetik, potansiyel ve ısı enerjisi nicel değerlerle korunur; doğrulama testi uygulanır.'
    ],
    kazanim: [
      'Bir hareketi <b>3 zaman karesi ve sayısal vektör bileşenleriyle</b> sahneler.',
      'Enerji dönüşümlerini <b>nicel korunum formülleriyle</b> doğrular.',
      'Fizik yasalarına (Termodinamik 1. Yasa, Newton Yasaları) <b>sayısal tutarlılık testi yapar</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Çizim formülü tutuyor mu? (5 dk)',
        m: 'Kaykaycının tepe noktasındaki potansiyel enerjisi ile dip noktasındaki kinetik enerjisinin sayısal olarak eşit olup olmadığını kontrol ettirin.' },
      { b: '2️⃣ Nicel Sahneleme Formülü (5 dk)',
        m: '⚡ <b>1. Sahne/Ortam · 2. Sayısal Başlangıç (m, v, h) · 3. Vektörler · 4. Zaman Anları (t0-t1-t2) · 5. Sayısal Korunum Testi.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '8.1 Bireysel Keşif → 8.2 Grup Atölyesi (Kaykay Rampası, Basketbol Atışı, Elektrikli Bisiklet, Rüzgâr Türbini) → 8.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar fizik sahnelerindeki nicel enerji hesaplarını ve simülasyon testlerini sunar. Şifreler: <b>surum12 · degisiklik12 · uretim12</b>.' }
    ],
    ornekler: [
      { kotu: 'Enerjiyi sinematik göster.', iyi: 'Bir kaykaycının rampadan inişini 3 zaman karesiyle görselleştir; hız vektörü, yerçekimi kuvveti, kinetik–potansiyel enerji çubukları ve sürtünme nedeniyle ısıya dönüşen enerjiyi göster; sayısal enerji korunum doğrulama testini ekle.', not: '3 zaman anı, kuvvet vektörleri ve sayısal enerji testi.' },
      { kotu: 'Basketbol atışını çiz.', iyi: 'Basketbol serbest atışındaki topun yörüngesini 4 konumda göster; her konumda hız vektörünün vx ve vy bileşenlerini etiketle; tepe noktasında vy=0 olduğunu sayısal doğrula.', not: 'Vektör bileşenleri ve vy=0 doğrulaması.' },
      { kotu: 'Rüzgâr türbini nasıl çalışır?', iyi: 'Rüzgâr türbininin enerji dönüşümünü gösteren şema: Kinetik → Mekanik → Elektrik. Betz limiti (%59.3 maksimum verim) uyarısını ve nicel verimlilik tablosunu ekle.', not: 'Betz limiti ve nicel verim tablosu.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 8.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sahneyi fiziksel kurma, nicelikleri kodlama ve simülasyon testi yapma kuralları.',
        sayfalar: ['Fizik Sahnesi Girişi', '3 Sahneleme Kuralı', 'Fizik Formülü', 'Kaykay Rampası Örneği', 'Nicel Sahne Görevi'],
        nasil: 'Fizik sahnesi promptunu hazırlar. Şifre: surum12', pass: 'surum12' },
      { ad: 'Grup Atölyesi (Ders 8.2)', sure: '18 dk', tur: 'Grup', ne: 'Kaykay Rampası, Basketbol Parabolü, Elektrikli Bisiklet ve Rüzgâr Türbini.',
        sayfalar: ['Roller', 'İstasyon 1: Kaykay Rampası', 'İstasyon 2: Basketbol Atışı', 'İstasyon 3: Elektrikli Bisiklet', 'İstasyon 4: Rüzgâr Türbini'],
        nasil: 'Grup nicel vektör ve enerji hesap kartını tamamlar. Şifre: degisiklik12', pass: 'degisiklik12' },
      { ad: 'Prompt Vitrini (Ders 8.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Rampa Enerjisi, Parabolik Yörünge, Elektrikli Bisiklet ve Türbin Simülasyonu.',
        sayfalar: ['Rampa Enerjisi', 'Basketbol Yörüngesi', 'Bisiklet Enerji Akışı', 'Türbin Simülasyonu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, sayısal korunum testini yapar. Şifre: uretim12', pass: 'uretim12' }
    ],
    sorular: [
      'Bir fiziki sahne çiziminde nitel anlatım ile nicel hesap tutarlılığı arasındaki fark nedir?',
      'Rüzgâr türbinlerinde Betz limiti gibi fiziksel sınırları prompta eklemek çıktıyı nasıl profesyonelleştirir?',
      'Parabolik harekette yatay hızın sabit kalması hangi Newton yasasının sonucudur?',
      'Sayısal simülasyon doğrulaması yapay zekâ çıktısını nasıl bilimsel bir araca dönüştürür?'
    ],
    ipuclari: [
      'Öğrencilere t0, t1, t2 zaman anlarında enerji toplamının sabit kaldığını tabloyaptırın.',
      'Enerji çubuklarında standart renk kodları kullandırın.',
      'Vektör oklarının başlangıç noktasını kütle merkezine yerleştirtin.'
    ]
  },

  9: {
    ad: 'Matematiği Görünür Hale Getirmek',
    emoji: '📐',
    konu: 'Yanıltıcı Ölçek Testi ve Erişilebilir Alternatif (Grafik · Fonksiyon · Risk)',
    tekCumle: 'Matematiksel ilişkileri <b>doğru eksenler, eşit ölçek, kesişim noktaları, değer tablosu ve yanıltıcı ölçek güvenlik testleriyle</b> somut, tarafsız ve erişilebilir biçimde görselleştirmektir.',
    neden: [
      'Medyada ve raporlarda grafik eksenleri manipüle edilerek halk yanıltılabilir; 12. sınıf öğrencisi yanıltıcı ölçek testlerini uygulayabilmelidir.',
      'Doğrusal Fonksiyonlar, Oyun Kazanma Olasılığı Ağacı, İnternet Kullanım Verisi ve Aktüerya Risk Modeli modellenir.',
      'Sıfırdan başlayan y ekseni, eşit aralıklar, alternatif metin (alt-text) ve değer tutarlılığı denetlenir.'
    ],
    kazanim: [
      'Bir fonksiyonu <b>denklem, değer tablosu ve koordinat grafiği</b> olarak sahneler.',
      'Grafikleri <b>yanıltıcı ölçek ve manipülasyon testinden</b> geçirir.',
      'Görme engelliler ve ekran okuyucular için <b>erişilebilir alternatif veri tablosu</b> ekler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Grafik yalan söyler mi? (5 dk)',
        m: 'Aynı veri setinin y ekseni 0’dan başlayan dürüst grafiği ile y ekseni 90’dan başlayan yanıltıcı grafiğini kıyaslatın.' },
      { b: '2️⃣ Dürüst Grafik Formülü (5 dk)',
        m: '📐 <b>1. Kavram/İlişki · 2. X/Y Değişkenleri · 3. Temsil Türü · 4. Yanıltıcı Ölçek Testi · 5. Erişilebilir Alternatif.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '9.1 Bireysel Keşif → 9.2 Grup Atölyesi (Doğrusal Fonksiyon, Olasılık Ağacı, İnternet Verisi, Aktüerya) → 9.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar grafik ve erişilebilirlik raporlarını sunar. Şifreler: <b>portfolyo12 · kanit12 · savunma12</b>.' }
    ],
    ornekler: [
      { kotu: 'Fonksiyon grafiğini güzel göster.', iyi: 'y=2x−3 doğrusal fonksiyonunu koordinat düzleminde göster; eksenleri ve birimleri etiketle, kesişimleri işaretle, x değerleri için küçük bir tablo ekle; yanıltıcı basık ölçek kullanma ve ekran okuyucu için alternatif metin ver.', not: 'Koordinat düzlemi, dürüst ölçek ve erişilebilir alt-text.' },
      { kotu: 'Oyun olasılığını hesapla.', iyi: 'Bir kutu oyununda peş peşe 2 kart çekme olasılığını ağaç diyagramı olarak tasarla; her dalın bağımlı olasılık değerlerini ve toplamın 1 olduğunu göster; olasılık tablosuyla doğrula.', not: 'Bağımlı olasılık ağacı ve tablo doğrulama.' },
      { kotu: 'İnternet veri grafiği yap.', iyi: 'Aylık internet veri kullanımını gösteren çizgi grafik tasarla; y eksenini mutlaka sıfırdan başlat, eksen aralıklarını eşit tut ve yanıltıcı ölçek testinden geçir.', not: 'Sıfırdan başlayan dürüst y ekseni.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 9.1)', sure: '12 dk', tur: 'Bireysel', ne: 'İlişkiyi belirleme, temsili seçme ve yanıltıcı ölçek testi yapma kuralları.',
        sayfalar: ['Matematiksel Temsil Girişi', '3 Temsil Kuralı', 'Temsil Formülü', 'Fonksiyon Grafiği Örneği', 'Dürüst Grafik Görevi'],
        nasil: 'Matematiksel ilişkiyi dürüst temsille anlatır. Şifre: portfolyo12', pass: 'portfolyo12' },
      { ad: 'Grup Atölyesi (Ders 9.2)', sure: '18 dk', tur: 'Grup', ne: 'Doğrusal Fonksiyon, Olasılık Ağacı, İnternet Verisi ve Aktüerya Modeli.',
        sayfalar: ['Roller', 'İstasyon 1: Doğrusal Fonksiyon', 'İstasyon 2: Olasılık Ağacı', 'İstasyon 3: İnternet Verisi', 'İstasyon 4: Aktüerya Risk'],
        nasil: 'Grup dürüst grafik ve erişilebilirlik kartını tamamlar. Şifre: kanit12', pass: 'kanit12' },
      { ad: 'Prompt Vitrini (Ders 9.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Fonksiyon Koordinatı, Olasılık Ağacı, Veri Paneli ve Aktüerya Şablonları.',
        sayfalar: ['Doğrusal Fonksiyon', 'Olasılık Ağacı', 'İnternet Veri Paneli', 'Aktüerya Riski', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, dürüst ölçek testini yapar. Şifre: savunma12', pass: 'savunma12' }
    ],
    sorular: [
      'Medyada y ekseni sıfırdan başlatılmayan grafikler kamuoyunda nasıl bir algı manipülasyonu yaratır?',
      'Bir matematiksel grafiğe "ekran okuyucu için alternatif tablo" eklemek neden evrensel tasarım kuralıdır?',
      'Denklem, grafik ve tablo arasında tutarsızlık tespit edildiğinde ilk hangi adım kontrol edilmelidir?',
      '12. sınıf mezunu bir gencin veri okuryazarlığında yanıltıcı grafikleri teşhis edebilmesi neden hayatidir?'
    ],
    ipuclari: [
      'Öğrencilere grafik çıktılarında y ekseninin sıfır noktasını kontrol ettirin.',
      'Koordinat ekseninde değişken isimleri ve birimleri eksiksiz yazdırın.',
      'Olasılık ağacında toplam 1 kuralını uygulatın.'
    ]
  },

  10: {
    ad: 'Geleceğin Laboratuvarını Tasarla',
    emoji: '🚀',
    konu: 'Tez, Yönetişim, Risk ve Jüri Savunması (Büyük Mezuniyet Prototipi)',
    tekCumle: 'Bir araştırma merkezini problem, kullanıcı rolleri, mekân kesiti, veri akışı, biyogüvenlik ve etik boyutlarıyla bütünleşik bir sistem prototipine dönüştürüp <b>jüri önünde 90 saniyelik tez savunmasını yapmaktır</b>.',
    neden: [
      '12. sınıfın ve tüm lise AI-Galaxy programının zirvesi: Öğrenci tüm prompt mühendisliği, modelleme, güvenlik ve denetim kazanımlarını tek bir büyük mezuniyet projesinde savunur.',
      'Kuraklığa Dayanıklı Tarım Laboratuvarı, Vatandaş Bilimi Gözlem İstasyonu, Robotik/AI Test Merkezi ve Uzay Biyolojisi Üssü tasarlanır.',
      'Sistem mimarisi, risk matrisi, etik yönetişim protokolü ve 90 saniyelik sözlü savunma tezi hazırlanır.'
    ],
    kazanim: [
      'Küresel bir probleme yönelik <b>bütünleşik laboratuvar sistem mimarisi</b> kurar.',
      'Sistemin tüm <b>risk ve biyogüvenlik protokollerini</b> belgeler.',
      'Projeyi jüri önünde <b>90 saniyelik yapılandırılmış tez savunmasıyla</b> başarıyla sunar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Büyük Mezuniyet Savunması (5 dk)',
        m: '“Bugün sadece bir prompt yazmıyoruz; 12 yıllık eğitim hayatınızın ve 10 haftalık AI uzmanlığınızın büyük sistem tezini jüriye sunuyorsunuz!”' },
      { b: '2️⃣ Tez ve Savunma Formülü (5 dk)',
        m: '🚀 <b>1. Problem Tezi · 2. Sistem Mimarisi · 3. Veri/Numune Akışı · 4. Risk & Yönetişim · 5. 90sn Savunma.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '10.1 Bireysel Keşif → 10.2 Grup Atölyesi (Tarım Laboratuvarı, Vatandaş Bilimi, Robotik/AI Merkezi, Uzay Biyolojisi) → 10.3 Prompt Vitrini & Jüri Sunumu.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar mezuniyet tezlerini sunar; Lise AI-Galaxy Mezuniyet Zirvesi tamamlanır! Şifreler: <b>mezuniyet12 · sistem12 · final12</b>.' }
    ],
    ornekler: [
      { kotu: 'Geleceğin laboratuvarını çiz.', iyi: '2035’te kuraklığa dayanıklı tarım araştıran bir laboratuvar için görsel sistem briefi oluştur; araştırmacı rolleri, sensörler, numune akışı, veri panosu, enerji kullanımı, biyogüvenlik ve insan onay noktalarını katmanlı şema olarak tarif et. 90 saniyelik jüri savunma tezini ekle.', not: 'Bütünleşik mimari, biyogüvenlik ve jüri savunma tezi.' },
      { kotu: 'Uzay üssü resmi yap.', iyi: 'Ay yüzeyindeki uzay biyolojisi laboratuvarının izometrik kesitini tasarla: Bitki büyüme odası, radyasyon kalkanı, kapalı devre su arıtma ve tahliye kapısı; biyogüvenlik protokolü ve risk yönetişim matrisi ekle.', not: 'Kapalı devre sistemler ve risk yönetişimi.' },
      { kotu: 'Robotik test merkezi briefi yaz.', iyi: 'Otonom tarım robotlarını test eden araştırma merkezinin iş akışı haritasını oluştur: Sensör kalibrasyonu, simülasyon odası, saha deneme alanı ve acil durdurma butonlarını şemada göster; jüriye sistem kanıtını sun.', not: 'İş akışı ve jüri sistem kanıtı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 10.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Araştırma problemini seçme, sistemi haritalama ve jüri tezi hazırlama.',
        sayfalar: ['Sistem Mimarisi Girişi', '3 Tasarım Kuralı', 'Prototip Formülü', 'Tarım Laboratuvarı Örneği', 'Mezuniyet Tezi Görevi'],
        nasil: 'Geleceğin laboratuvarını iş akışıyla planlar. Şifre: mezuniyet12', pass: 'mezuniyet12' },
      { ad: 'Grup Atölyesi (Ders 10.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarım Laboratuvarı, Vatandaş Bilimi, Robotik Test Merkezi ve Uzay Biyolojisi.',
        sayfalar: ['Roller', 'İstasyon 1: Tarım Laboratuvarı', 'İstasyon 2: Vatandaş Bilimi', 'İstasyon 3: Robotik Merkezi', 'İstasyon 4: Uzay Biyolojisi'],
        nasil: 'Grup büyük sistem prototip ve jüri savunma kartını tamamlar. Şifre: sistem12', pass: 'sistem12' },
      { ad: 'Prompt Vitrini (Ders 10.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarım Merkezi, Gözlem İstasyonu, Robotik Merkezi ve Uzay Biyolojisi Şablonları.',
        sayfalar: ['Tarım Laboratuvarı', 'Gözlem İstasyonu', 'Robotik Merkezi', 'Uzay Biyolojisi', 'Kalite Kontrol'],
        nasil: 'Final mezuniyet şablonlarını inceler, 90sn savunmasını yapar. Şifre: final12', pass: 'final12' }
    ],
    sorular: [
      'Geleceğin laboratuvar tasarımında veri güvenliği, biyogüvenlik ve etik sınırların bir arada düşünülmesi neden zorunludur?',
      '90 saniyelik yapılandırılmış jüri savunması yaparken en kritik 3 argüman ne olmalıdır?',
      'Lise hayatı boyunca öğrendiğiniz blok kodlama, prompt mühendisliği ve eleştirel düşünme üniversite/kariyer hayatınızda size nasıl rehberlik edecek?',
      'Yapay zekâ çağında bir gencin sahip olabileceği en değerli entelektüel erdem nedir?'
    ],
    ipuclari: [
      'Öğrencilere savunma konuşmasını "Problem → Sistem Çözümü → Risk Yönetimi → Kanıt" sırasıyla yaptırın.',
      'Sınıfta gerçek bir jüri paneli oluşturup sunumları dinleyin.',
      'Mezuniyet seviyesindeki tüm öğrencileri kutlayın, başarı belgelerini takdim edin.'
    ]
  }

};

/* Planlanan 11–36. Haftalar (Lise 12 Müfredatındaki Gelecek Dersler) */
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
