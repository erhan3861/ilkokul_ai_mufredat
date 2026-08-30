/* =========================================================================
   AI-GALAXY • LİSE 9 (9. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : lise9/ders_linkleri_ve_sifreleri.md
   Etkinlik adları ve ekran metni  : lise9/assets/content.js & ders1..10
   Uydurulan ders/etkinlik adı yoktur.

   NOT — 9. SINIFIN (LİSE) AYIRT EDİCİ YANLARI:
   • Lise başlangıç seviyesidir. Maarif 9. sınıf alanları (Biyoloji, Kimya,
     Fizik, Matematik, Tarih, Coğrafya, Edebiyat) ve hobi/teknoloji/geleceğin
     meslekleri bağlamları doğrudan derse entegre edilmiştir.
   • Üç aşamalı ders yapısı:
       – 1. Aşama: Bireysel Konu Anlatımı, Kavramlar, Formül, Önce/Sonra & Mini Uygulama
       – 2. Aşama: Grup Atölyesi (4 Rol: Akış Sorumlusu, Prompt Mimarı, Sorgulayıcı, Sunucu)
                   Maarif, Hobi, Teknoloji, Geleceğin Meslekleri İstasyonları
       – 3. Aşama: Prompt Vitrini (4 Alan: Biyoloji/Tarih/Kodlama/Kariyer vb.) & Kalite Kontrolü
   • Ağırlık: "Prompt mimarisi", "Bilgiyi farklı biçimlerde temsil etme", "Doğrulama ve kaynak denetimi",
     "Bilimsel ve fiziksel görselleştirme", "Sistem tasarımı ve etik".
   • Şifreler her aşamanın bitiş slaytında verilir (örn. 1. hafta: rehber9, merak9, asistan9).
   ========================================================================= */

var AI_TEMEL = 'https://lise9.vercel.app';

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
    konu: 'Açıklat · Örneklendir · Karşılaştır · Görselleştir (Biyoloji 9: Hücre Zarı)',
    tekCumle: 'Yapay zekâyı hazır ödev makinesi değil, <b>öğrenmeyi ve düşünmeyi destekleyen etkileşimli bir öğrenme ortağı</b> gibi yönlendirmek 9. sınıfın temelidir.',
    neden: [
      '“Fotosentezi anlat” gibi tek yönlü emirler yüzeysel ezbere yol açar; asistan rolü ise öğrencinin ne bildiğini ve neyi öğrenmek istediğini netleştirir.',
      'Sokratik etkileşim (önce bana soru sor, yanıtımı görmeden çözümü verme) öğrencinin bilişsel katılımını ve öz-denetimini sağlar.',
      '9. sınıf Biyoloji, Kodlama, Fotoğraf ve Kariyer bağlamlarında kişiselleştirilmiş öğrenme deneyimi kurulur.'
    ],
    kazanim: [
      'Hazır bilgi isteyen istem ile öğrenme odaklı etkileşimli istemi <b>ayırt eder</b>.',
      'Bir isteme <b>Hedef + Düzey + Yöntem + Etkileşim + Kontrol</b> bileşenlerini ekler.',
      'Yapay zekânın doğrudan cevap vermek yerine soru sorarak rehberlik etmesini sağlar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hazır cevap mı, düşündüren koç mu? (5 dk)',
        m: 'Tahtaya yazın: <b>“Fotosentezi anlat.”</b> Sınıfa sorun: Yapay zekâ bu cevabı verince konuyu gerçekten öğrenmiş olur musunuz? “Hayır, çünkü düşünmedik” yanıtını yakalayın.' },
      { b: '2️⃣ Öğrenme Formülü (5 dk)',
        m: '5 parçayı tahtaya açın: <b>1. Hedef · 2. Düzey · 3. Yöntem (benzetme) · 4. Etkileşim (bana soru sor) · 5. Kontrol (özetlet).</b>' },
      { b: '3️⃣ Etkinlik ve İstasyonlar (25 dk)',
        m: '1.1 Bireysel Keşif → 1.2 Grup Atölyesi (Maarif/Biyoloji, Hobi/Fotoğraf, Teknoloji/Python, Meslek İstasyonları) → 1.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre Paylaşımı (5 dk)',
        m: 'Öğrenciler ürettikleri asistan promptlarını sınıfta test eder. Aşama şifreleri: <b>rehber9 · merak9 · asistan9</b>.' }
    ],
    ornekler: [
      { kotu: 'Fotosentezi anlat.', iyi: '9. sınıf biyoloji düzeyinde fotosentezi önce günlük yaşam benzetmesiyle açıkla. Sonra iki kontrol sorusu sor; yanıtımı görmeden çözümü verme.', not: 'Tek yönlü emir → Düşündüren öğrenme asistanı.' },
      { kotu: 'Python kodumu düzelt.', iyi: 'Python öğrenme asistanı ol. Kodu hemen düzeltme. Önce beklediğim çıktı ile aldığım çıktıyı sor, ardından hatayı bulduracak tek bir test öner.', not: 'Hazır kod yerine adım adım hata ayıklama koçluğu.' },
      { kotu: 'Bana meslek öner.', iyi: 'Kariyer keşif asistanı ol. İlgi alanlarımı anlamak için bana tek tek 5 soru sor. Yanıtlarıma göre 3 gelecek mesleği ve lisede yapabileceğim projeleri listele.', not: 'Etkileşimli kariyer diyaloğu.' }
    ],
    adimlar: [
      { ad: 'Bireysel Konu Anlatımı & Keşif (Ders 1.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Öğrenme asistanı kavramı, formülü ve önce/sonra karşılaştırması.',
        sayfalar: ['Kavram Açıklaması', '3 Temel İlke (Açıklat, Örneklendir, Sorgulat)', '5 Parçalı Formül', 'Karşılaştırma Kartı', 'Mini Uygulama'],
        nasil: 'Öğrenci slaytları sırayla okur, tek konulu mini uygulama promptunu hazırlar. Şifre: rehber9', pass: 'rehber9' },
      { ad: 'Grup Atölyesi (Ders 1.2)', sure: '18 dk', tur: '4 Takım Rolü', ne: '4 farklı istasyonda (Biyoloji, Fotoğraf, Algoritma, Geleceğin Meslekleri) asistan tasarımı.',
        sayfalar: ['Rol Dağılımı', 'İstasyon 1: Maarif (Biyoloji)', 'İstasyon 2: Hobi (Fotoğraf)', 'İstasyon 3: Teknoloji (Algoritma)', 'İstasyon 4: Meslek (Kariyer)'],
        nasil: 'Takımlar rolleri paylaşır (Akış, Mimar, Sorgulayıcı, Sunucu); istasyon görevini çözer. Şifre: merak9', pass: 'merak9' },
      { ad: 'Prompt Vitrini & Kalite Kontrolü (Ders 1.3)', sure: '10 dk', tur: 'Vitrin & Denetim', ne: 'Biyoloji, Fotoğraf, Kodlama ve Kariyer prompt şablonları + 4 maddelik kontrol listesi.',
        sayfalar: ['Biyoloji Promptu', 'Fotoğraf Koçu', 'Python Asistanı', 'Kariyer Keşfi', '4 Kalite Kontrol Maddesi'],
        nasil: 'Öğrenciler hazır vitrin promptlarını inceler, kendi hedeflerine uyarlar. Şifre: asistan9', pass: 'asistan9' }
    ],
    sorular: [
      'Yapay zekâya doğrudan cevabı yazdırmak neden kalıcı öğrenme sağlamaz?',
      '“Bana soru sor” komutunu eklediğimizde yapay zekânın davranışı nasıl değişir?',
      'Öğrenme asistanı tasarlarken seviyenizi (9. sınıf) belirtmek neden önemlidir?',
      'Hangi derslerde sokratik öğrenme asistanı size en çok fayda sağlar?'
    ],
    ipuclari: [
      'Lise 9 arayüzünde slaytlar klavye sağ/sol oklarıyla veya butonlarla tam ekran geçişlidir.',
      'Öğrencilere yapay zekânın ilk yanıtına hemen razı olmayıp diyalog sürdürmelerini hatırlatın.',
      'Grup çalışmasında "Sorgulayıcı" rolündeki öğrenciye promptun kısıtlarını denetlettirin.'
    ]
  },

  2: {
    ad: 'İyi Prompt Nasıl Kurulur?',
    emoji: '🧱',
    konu: 'Rol + Görev + Bağlam + Detay + Çıktı Formatı (Coğrafya 9: İklim Değişikliği)',
    tekCumle: 'Bir promptu, yapay zekânın tahmin etmek zorunda kalmayacağı <b>5 bileşenli açık bir üretim briefine</b> dönüştürmek profesyonel istem mimarisidir.',
    neden: [
      'Eksik istemler jenerik, kalıplaşmış ve işe yaramaz sonuçlar üretir; kısıtlar ve bağlam ise sonucu doğrudan hedefe kilitler.',
      'Rol (kim gibi), Görev (ne yapacak), Bağlam (kim için), Detay (sınırlar) ve Format (nasıl sunacak) 5’lisi her alana uyarlanabilir evrensel bir yapıdır.',
      'Coğrafya, Edebiyat, Müzik ve Robotik alanlarında ölçülebilir çıktılar elde edilir.'
    ],
    kazanim: [
      'Bir promptun 5 temel bileşenini (Rol, Görev, Bağlam, Detay, Format) <b>tanımlar ve etiketler</b>.',
      'Belirsiz ve eksik bir istemi 5 bileşenli güçlü bir üretim briefine <b>dönüştürür</b>.',
      'Çıktı formatını tablo, liste veya madde şeklinde sabitleyerek çıktıyı standartlaştırır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aşçıya ne sipariş edersiniz? (5 dk)',
        m: '“Bana yemek yap derseniz ne gelir? Ama ‘9 kişilik, acısız, vejetaryen 3 çeşit akşam yemeği menüsü hazırla’ derseniz ne gelir?” benzetmesiyle başlayın.' },
      { b: '2️⃣ 5 Tuğla Modeli (5 dk)',
        m: 'Tuğlaları dizin: 🧱 <b>Rol</b> + 🧱 <b>Görev</b> + 🧱 <b>Bağlam</b> + 🧱 <b>Detay/Kısıt</b> + 🧱 <b>Format</b>.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '2.1 Bireysel Analiz → 2.2 Takım Brief Atölyesi (Edebiyat, Hobi, Teknoloji/Robotik, Uzay Tarımı) → 2.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruptan bir temsilci yazdıkları 5 bileşenli briefi okur. Şifreler: <b>rol9 · brief9 · format9</b>.' }
    ],
    ornekler: [
      { kotu: 'Bana iklim değişikliğini yaz.', iyi: '9. sınıf coğrafya öğretmeni rolünde, iklim değişikliğinin üç nedenini ve üç sonucunu Türkiye’den örneklerle açıkla. 2 sütunlu kısa tablo kullan; belirsiz verileri kesinmiş gibi sunma.', not: 'Tüm 5 bileşen (Rol, Görev, Bağlam, Kısıt, Tablo formatı) eksiksiz tanımlandı.' },
      { kotu: 'İlk Çağ hukukunu anlat.', iyi: '9. sınıf tarih öğretmeni rolünde, İlk Çağ uygarlıklarında hukuk anlayışını karşılaştır. Hedef kitle 15 yaş. 3 sütunlu tablo oluştur; emin olmadığın tarihleri belirt.', not: 'Kitle ve format kısıtları eklendi.' },
      { kotu: 'Gitar dersi ver.', iyi: 'Başlangıç gitar eğitmeni ol. Günde 20 dakika ayırabilen akustik gitar öğrencisi için 7 günlük tablo planı yaz. Isınma, teknik, parça ve öz kontrol ölçütleri olsun.', not: 'Süre ve malzeme kısıtıyla uygulanabilirlik sağlandı.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 2.1)', sure: '12 dk', tur: 'Bireysel', ne: '5 parçalı prompt mimarisi ve tamir alıştırmaları.',
        sayfalar: ['Konu Girişi', 'Rol, Görev, Ölçülebilirlik', '5 Parçalı Formül Tablosu', 'Önce/Sonra İklim Örneği', 'Brief Tamir Görevi'],
        nasil: 'Öğrenci 5 bileşeni inceler, eksik promptları tamir eder. Şifre: rol9', pass: 'rol9' },
      { ad: 'Grup Atölyesi (Ders 2.2)', sure: '18 dk', tur: 'Grup', ne: 'Edebiyat, Hobi/Gitar, Akıllı Okul ve Uzay Tarımı için 5 bileşenli üretim briefleri.',
        sayfalar: ['Rol Dağılımı', 'Edebiyat Briefi', 'Hobi Briefi', 'Teknoloji Briefi', 'Meslek Briefi'],
        nasil: 'Her grup seçtiği istasyon için 5 bileşeni doldurur. Şifre: brief9', pass: 'brief9' },
      { ad: 'Prompt Vitrini (Ders 2.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih, Müzik, Robotik ve 2035 Kariyer şablonları.',
        sayfalar: ['Tarih Karşılaştırma', 'Gitar Eğitmeni', 'Akıllı Okul Tasarımı', '2035 Uzay Tarımı', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, kısıtları test eder. Şifre: format9', pass: 'format9' }
    ],
    sorular: [
      'Bir promptta "Rol" belirtmek yapay zekânın kelime dağarcığını nasıl etkiler?',
      'Format kısıtı (örn. "2 sütunlu tablo yap") vermediğimizde ne tür karmaşa yaşanır?',
      'Hangi durumlarda "uydurma alıntı yapma / kesin değilse belirt" kısıtını eklemeliyiz?',
      'Uzun bir prompt yazmak her zaman iyi bir prompt yazdığımız anlamına gelir mi?'
    ],
    ipuclari: [
      'Gereksiz laf kalabalığı yerine her bileşenin net ve işlevsel olmasını vurgulayın.',
      'Çıktı formatı olarak Markdown tablo, maddeli liste, JSON gibi formatları deneyin.',
      'Kısıtların model halüsinasyonunu engellemedeki kritik rolünü hatırlatın.'
    ]
  },

  3: {
    ad: 'Aynı Bilgiyi Farklı Şekillerde Anlatmak',
    emoji: '🔄',
    konu: 'Tablo · İnfografik · Hikâye · Görsel (Tarih 9: Kuruluş Dönemi · Kimya 9: Bağlar)',
    tekCumle: 'İçeriği kopyalamak yerine amaca ve hedef kitleye uygun <b>farklı bir temsil biçimine (tablo, zaman çizelgesi, hikâye, infografik)</b> dönüştürmek bilgi tasarımıdır.',
    neden: [
      'Her format farklı bir bilişsel ihtiyacı karşılar: Tablo karşılaştırır, zaman çizelgesi kronolojiyi kurar, hikâye empati ve bağ kurdurur, infografik hızlı tarama sağlar.',
      'Dönüşüm esnasında çekirdek bilginin doğruluğunun korunması eleştirel düşünmeyi geliştirir.',
      'Kimya (İyonik/Kovalent), Tarih (İlk Çağ), Oyun Tasarımı ve Biyoteknoloji bağlamları somutlaştırılır.'
    ],
    kazanim: [
      'Aynı bilgiyi tablo, zaman çizelgesi, infografik veya hikâye formatına <b>dönüştürür</b>.',
      'Öğrenme amacına göre en uygun temsil biçimini <b>gerekçelendirerek seçer</b>.',
      'Format dönüşümü sırasında kavramsal doğruluğun kaybolup kaybolmadığını <b>denetler</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı olayı kime nasıl anlatırsınız? (5 dk)',
        m: '“Bir futbol maçını antrenöre mi, arkadaşınıza mı, gazete manşetine mi aynı anlatırsınız?” sorusuyla biçim-amaç ilişkisini kurun.' },
      { b: '2️⃣ Biçim Matrisi (5 dk)',
        m: '📊 <b>Tablo:</b> Karşılaştırma · ⏳ <b>Zaman Çizelgesi:</b> Süreç · 📖 <b>Hikâye:</b> Neden-Sonuç/Duygu · 🖼️ <b>İnfografik:</b> Hiyerarşi.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '3.1 Bireysel Dönüşüm → 3.2 Grup Atölyesi (Maarif/Kimya, Hobi/Spor, Teknoloji/Akış, Meslek/Biyoteknoloji) → 3.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar aynı bilgiyi farklı formatlarda sunar; sınıf en anlaşılır formatı seçer. Şifreler: <b>bicim9 · donusum9 · anlatim9</b>.' }
    ],
    ornekler: [
      { kotu: 'Osmanlı kuruluş dönemini farklı anlat.', iyi: 'Osmanlı Beyliği’nin kuruluşundaki 5 dönüm noktasını 9. sınıf zaman çizelgesine dönüştür. Her noktada tarih, olay ve önem alanı bulunsun.', not: 'Süreç ve kronoloji için zaman çizelgesi talimatı.' },
      { kotu: 'Kimyasal bağları anlat.', iyi: 'İyonik ve kovalent bağ bilgisini 9. sınıf tekrar tablosuna dönüştür: oluşum, elektron davranışı, örnek bileşik ve sık karıştırılan nokta sütunları olsun.', not: 'Karşılaştırma için çok sütunlu tablo yapısı.' },
      { kotu: 'Biyoteknoloji uzmanının işini anlat.', iyi: 'Bir biyoteknoloji uzmanının laboratuvardaki iş gününü 450 kelimelik bilgilendirici hikâyeye dönüştür: 3 gerçek görev, 1 ekip toplantısı ve 1 etik karar yer alsın.', not: 'Mesleki gerçekliği hikâyeleştirerek empati kurma.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 3.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Farklı temsil biçimleri ve hedef kitleye uyarlama kuralları.',
        sayfalar: ['Biçim Seçimi', 'Tablo / Hikâye / İnfografik', 'Dönüşüm Formülü', 'Osmanlı Kuruluş Örneği', 'Hızlı Karar Görevi'],
        nasil: 'Slaytları tamamlar, çekirdek bilgiyi formatlara dönüştürür. Şifre: bicim9', pass: 'bicim9' },
      { ad: 'Grup Atölyesi (Ders 3.2)', sure: '18 dk', tur: 'Grup', ne: 'Kimya, Hobi Tekniği, Dijital Akış ve Biyoteknoloji hikâyesi istasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Maarif Dönüşümü', 'İstasyon 2: Hobi Rehberi', 'İstasyon 3: Akış Şeması', 'İstasyon 4: Meslek Hikâyesi'],
        nasil: 'Grup seçtiği formatı üretir, kontrol kriterlerini işletir. Şifre: donusum9', pass: 'donusum9' },
      { ad: 'Prompt Vitrini (Ders 3.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Kimya Tablosu, Tarih Zaman Çizelgesi, Kural Akışı ve Meslek Hikâyesi şablonları.',
        sayfalar: ['Kimya Bağları', 'Anadolu Uygarlıkları', 'Kutu Oyunu Akışı', 'Biyoteknoloji Günü', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, kendi ders konusuna uyarlar. Şifre: anlatim9', pass: 'anlatim9' }
    ],
    sorular: [
      'Bir karşılaştırmayı metin olarak okumakla tabloda görmek arasındaki bilişsel fark nedir?',
      'Bir olayı hikâyeleştirdiğimizde hangi bilgileri kaybetme riski ortaya çıkar?',
      'Akış şeması hangi tür süreçleri anlatmak için vazgeçilmezdir?',
      'Hedef kitlenin yaş düzeyi değiştiğinde format tercihimiz nasıl değişir?'
    ],
    ipuclari: [
      'Öğrencilere "format seçimi amaçtan doğar" kuralını sık sık hatırlatın.',
      'Hikâye formatında bilimsel doğruluğun süsleme altında ezilmemesine dikkat çekin.',
      'Tablolarda başlık ve sütun hiyerarşisinin netliğini kontrol edin.'
    ]
  },

  4: {
    ad: 'Karmaşık Konuyu Görsele Dönüştürmek',
    emoji: '🧠',
    konu: 'Kavram → İlişki → Görsel Katman (Kimya 9: Atom Modelleri · Biyoloji 9: Hücre Zarı)',
    tekCumle: 'Görsel üretmeden önce <b>bilimsel doğruluğu, öğe ilişkilerini, katmanları ve etiketleri</b> bir sahne planına dönüştürmek görsel prompt mühendisliğidir.',
    neden: [
      'Yapay zekâ görsel modelleri sadece "güzel resim" üretmeye meyillidir; bilimsel doğruluk ve etiket sistemi ancak bilinçli promptla korunabilir.',
      'Model sınırlarını (örneğin Bohr atom modelinin bir öğretim modeli olduğunu, fotogerçekçi atom olmadığını) belirtmek bilimsel okuryazarlıktır.',
      'Biyoloji (Difüzyon), Kimya (Atom Yapısı), Spor (Basketbol Atışı) ve Akıllı Şehir sistemlerinde katmanlı görsel planı yapılır.'
    ],
    kazanim: [
      'Karmaşık bir kavramı <b>ana öğeler, ilişkiler, yönler ve etiketler</b> olarak sahneler.',
      'Görseldeki estetik detaylar ile bilimsel doğruluk arasındaki dengeyi <b>kurar</b>.',
      'Görsel modellerin sınırlarını ve temsili ölçekleri promptunda açıkça <b>belirtir</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Güzel mi, doğru mu? (5 dk)',
        m: 'Tahtaya iki atom çizimi örneği verin: biri rastgele renkli parıltılar, diğeri etiketli çekirdek ve katmanlar. Hangisi ders çalışmak için kullanılır?' },
      { b: '2️⃣ Katmanlama Formülü (5 dk)',
        m: '🖼️ <b>1. Konu · 2. Öğeler (en fazla 5) · 3. İlişki (oklar/yönler) · 4. Stil/Görsel Dil · 5. Doğruluk Kontrolü.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '4.1 Bireysel Keşif → 4.2 Grup Atölyesi (Hücre Zarı, Denklem Posteri, Basketbol Dizisi, Akıllı Şehir) → 4.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar görsel sahne taslaklarını sunar. Şifreler: <b>gorsel9 · katman9 · sahne9</b>.' }
    ],
    ornekler: [
      { kotu: 'Atomun havalı bir görselini yap.', iyi: 'Bohr modelinin sınırlarını belirterek 9. sınıf için atom yapısı infografiği tasarla. Çekirdek, proton, nötron ve elektron katmanlarını etiketle; ölçeklerin temsili olduğunu not et.', not: 'Model sınırları ve etiket hiyerarşisi tanımlandı.' },
      { kotu: 'Hücre zarından geçişi çiz.', iyi: '9. sınıf hücre zarından difüzyonu anlatan eğitim infografiği tasarla. İki taraftaki tanecik yoğunluğunu, hareket yönünü ve dengeyi 3 ardışık panelde göster. Okları Türkçe etiketle.', not: '3 ardışık panel ve hareket yönü okları.' },
      { kotu: 'Geleceğin akıllı şehrini çiz.', iyi: '2035 akıllı şehrinde enerji yönetimini gösteren izometrik sistem haritası için prompt yaz. Güneş paneli, depolama, binalar ve elektrikli ulaşım arasındaki akışları farklı oklarla etiketle; gizlilik uyarısı ekle.', not: 'Sistem bileşenleri ve akış okları.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 4.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Önce şema sonra estetik ilkesi, katmanlama ve görsel prompt yapısı.',
        sayfalar: ['Görsel Tasarım İlkesi', 'Öğe, İlişki, Etiket', 'Katmanlama Formülü', 'Atom Modeli Örneği', 'Katman Planı Görevi'],
        nasil: 'Katmanlama mantığını öğrenir, görsel briefi hazırlar. Şifre: gorsel9', pass: 'gorsel9' },
      { ad: 'Grup Atölyesi (Ders 4.2)', sure: '18 dk', tur: 'Grup', ne: 'Biyoloji şeması, Matematik denklem posteri, Hobi hareket dizisi, Akıllı şehir sistemi.',
        sayfalar: ['Roller', 'İstasyon 1: Biyoloji Şeması', 'İstasyon 2: Matematik Görseli', 'İstasyon 3: Hareket Dizisi', 'İstasyon 4: Sistem Haritası'],
        nasil: 'Grup görsel sahne promptunu yazar, etiketleri belirler. Şifre: katman9', pass: 'katman9' },
      { ad: 'Prompt Vitrini (Ders 4.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Difüzyon İnfografiği, Atom Modeli, Basketbol Serbest Atış, 2035 Enerji Sistemi.',
        sayfalar: ['Hücre Difüzyonu', 'Atom Yapısı', 'Basketbol Tekniği', 'Akıllı Şehir', 'Kalite Kontrol'],
        nasil: 'Vitrin promptlarını inceler, etiket sistemlerini analiz eder. Şifre: sahne9', pass: 'sahne9' }
    ],
    sorular: [
      'Görsel üretim yapay zekâsına "bilimsel infografik" dedirtmek için hangi anahtar kelimeleri kullanmalıyız?',
      'Bir görselde okların ve renk kodlarının anlamını lejant ile açıklamak neden önemlidir?',
      'Gerçek ölçek ile öğretim amaçlı temsili model arasındaki fark neden belirtilmelidir?',
      'Estetik detaylar ne zaman öğretici olmaktan çıkıp kafa karıştırıcı hale gelir?'
    ],
    ipuclari: [
      'Öğrencilere görsel prompt yazarken "fotogerçekçi atom" gibi imkansız isteklerden kaçınmalarını söyleyin.',
      'Sıralı süreçler için "3 ardışık panel" (comic strip / sequential panel) tekniğini kullandırın.',
      'Tüm etiketlerin Türkçe ve anlaşılır olmasını kural haline getirin.'
    ]
  },

  5: {
    ad: 'AI Hata Yapabilir mi?',
    emoji: '🔎',
    konu: 'Halüsinasyon · Kaynak Kalitesi · Çapraz Kontrol (Tarih 9: İddia & Kanıt)',
    tekCumle: 'Akıcı ve kendinden emin görünen bir yanıtı kanıt saymamak; <b>iddiaları ayırmak, kaynağı sorgulamak ve çapraz kontrol etmek</b> yapay zekâ okuryazarlığının kalbidir.',
    neden: [
      'Büyük dil modelleri bir arama motoru veya doğruluk makinesi değil, istatistiksel metin üreticisidir; alıntı, sayı ve kaynak uydurabilir (halüsinasyon).',
      'Birincil ve ikincil kaynak ayrımı yapabilmek lise düzeyinde bilimsel araştırma etiğinin temelidir.',
      'Tarihsel iddialar, Spor/Sağlık önerileri, Teknoloji haberleri ve Geleceğin Meslek tahminleri üzerinden doğrulama matrisi kurulur.'
    ],
    kazanim: [
      'Yapay zekânın ürettiği metindeki doğrulanabilir iddialar ile yorumları <b>birbirinden ayırır</b>.',
      'Kaynağın yetkinliği, yayın tarihi, amacı ve birincil kanıtını <b>5 ölçütle sorgular</b>.',
      'Yapay zekâya "kaynak uydurma, emin değilsen belirt" kısıtı vererek doğrulama promptu <b>yazar</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kendinden emin yalan! (5 dk)',
        m: 'Yapay zekânın çok akıcı ama tamamen uydurma bir tarihî alıntı örneğini tahtaya yansıtın. “Neden bu kadar inandırıcı duruyor?” diye tartışın.' },
      { b: '2️⃣ 5 Filtre Modeli (5 dk)',
        m: '🔍 <b>1. İddia ne? · 2. Kaynak kim? · 3. Tarih ne zaman? · 4. Kanıt neye dayanıyor? · 5. Karar/Güven düzeyi.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '5.1 Bireysel Analiz → 5.2 Grup Atölyesi (Tarih İddiası, Spor Sağlığı, AI Haberi, Kariyer Tahmini) → 5.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Her grup incelediği metindeki bir şüpheli iddiayı ve kontrol yöntemini açıklar. Şifreler: <b>suphe9 · kaynak9 · dogrula9</b>.' }
    ],
    ornekler: [
      { kotu: 'Bana kesin doğru bilgiler ve kaynaklar ver.', iyi: 'Yanıtındaki doğrulanabilir iddiaları listele. Her iddia için kaynak türü öner, emin olmadığın noktaları işaretle ve bağımsız kontrol adımı ver. Kaynak adı uydurma.', not: 'Uydurma kaynak yasağı ve şeffaf kontrol adımı.' },
      { kotu: 'Bu tarih metnini özetle.', iyi: 'Metindeki doğrulanabilir iddiaları tabloya çıkar: İddia, iddia türü, gerekli kaynak türü, mevcut kanıt ve belirsizlik sütunları olsun. Erişemediğin bilgiyi “kontrol edilmeli” yaz.', not: 'İddia-kanıt-belirsizlik ayrımı.' },
      { kotu: 'Bu AI aracı iyi mi?', iyi: '“Bu AI aracı üretkenliği %60 artırır” iddiası için araştırma planı yap: Örneklem, karşılaştırma grubu, ölçüm süresi ve çıkar çatışması sorularını yaz.', not: 'Pazarlama iddiasını ölçülebilir denetim sorularına dönüştürme.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 5.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Halüsinasyon mekanizması, kaynak güvenliği ve 5 adımlı doğrulama formülü.',
        sayfalar: ['Halüsinasyon Nedir?', 'İddia, Kanıt, Çapraz Kontrol', '5 Adımlı Formül', 'Doğrulama Talimatı Örneği', 'Kaynak Filtresi Görevi'],
        nasil: 'Metinleri inceler, doğrulama talimatı hazırlar. Şifre: suphe9', pass: 'suphe9' },
      { ad: 'Grup Atölyesi (Ders 5.2)', sure: '18 dk', tur: 'Grup', ne: 'Tarih iddiası, Spor/Sağlık önerisi, Teknoloji haberi ve Meslek tahmini istasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Tarih İddiası', 'İstasyon 2: Sağlık & Güvenlik', 'İstasyon 3: Teknoloji Haberi', 'İstasyon 4: Meslek Verisi'],
        nasil: 'Grup iddiaları ayırır, kaynak kalitesi matrisini doldurur. Şifre: kaynak9', pass: 'kaynak9' },
      { ad: 'Prompt Vitrini (Ders 5.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Tarih İddia Tablosu, Spor Güvenlik Filtresi, AI Araştırma Planı, 2035 Senaryoları.',
        sayfalar: ['Tarih Analizi', 'Spor Önerisi', 'Teknoloji Doğrulama', 'Kariyer Tahmini', 'Kalite Kontrol'],
        nasil: 'Doğrulama şablonlarını inceler. Şifre: dogrula9', pass: 'dogrula9' }
    ],
    sorular: [
      'Yapay zekâ bilmediği bir konuda neden "bilmiyorum" demek yerine uydurma eğilimindedir?',
      'Bir kaynağın "yazarının ve kurumunun belli olması" neden ilk kontrol maddesidir?',
      'Sağlık ve tarih gibi konularda çapraz kontrol yapmadan yapay zekâ çıktısını kullanmanın riskleri nelerdir?',
      '“Güven, görünüşten değil kanıttan gelir” sözü yapay zekâ için ne ifade eder?'
    ],
    ipuclari: [
      'Öğrencilere yapay zekâdan kaynak istediklerinde bazen var olmayan akademik makale başlıkları üretebileceğini gösterin.',
      'Çıktıyı her zaman okul kütüphanesi veya MEB ders kitabı gibi birincil kaynakla teyit ettirin.',
      'Şüpheci yaklaşımın bilimsel düşünmenin temeli olduğunu vurgulayın.'
    ]
  },

  6: {
    ad: 'Prompt Laboratuvarı',
    emoji: '🧫',
    konu: 'A/B Deneyi · Tek Değişken · Rubrik Matrisi',
    tekCumle: 'Aynı hedef için promptun yalnızca <b>tek bir bileşenini değiştirip (A/B deneyi)</b> iki çıktıyı ortak bir rubrikle ölçmek bilimsel prompt geliştirmedir.',
    neden: [
      'Birden fazla şeyi aynı anda değiştirdiğimizde sonucun hangisinden dolayı iyileştiğini bilemeyiz; kontrollü deney tek değişkenle yapılır.',
      '“Bence bu daha güzel” sübjektif bir beğeni ifadesidir; “Doğruluk: 5, Açıklık: 4” ise ölçülebilir bir değerlendirmedir.',
      'Fen, Hobi/Müzik, Teknoloji/Jargon ve Meslek Kişiselleştirme alanlarında kontrollü A/B deneyleri tasarlanır.'
    ],
    kazanim: [
      'Bir promptta <b>tek bir bağımsız değişken</b> (rol, format veya bağlam) belirler.',
      'A ve B sürümlerini aynı hedef için çalıştırarak çıktıları <b>karşılaştırır</b>.',
      '4 ölçütlü rubrikle (Doğruluk, Açıklık, Uygunluk, Uygulanabilirlik) çıktıları <b>puanlar ve gerekçelendirir</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hangisi daha iyi? (5 dk)',
        m: 'Tahtaya iki prompt yazın: Biri benzetmesiz, diğeri benzetmeli. Çıktıları yan yana koyun. Hangisi neden daha iyi?' },
      { b: '2️⃣ A/B Deney Protokolü (5 dk)',
        m: '🧪 <b>Sabit Hedef</b> → <b>Sürüm A (Temel)</b> → <b>Tek Değişken</b> → <b>Sürüm B</b> → <b>4 Ölçütlü Rubrik</b>.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '6.1 Bireysel Keşif → 6.2 Grup Atölyesi (Fen Deneyi, Format Deneyi, Rol Değişkeni, Kişiselleştirme) → 6.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar rubrik puanlarını ve en iyi sürümü paylaşır. Şifreler: <b>deney9 · kiyas9 · olcut9</b>.' }
    ],
    ornekler: [
      { kotu: 'A: Kısa anlat.\nB: Uzman ol, örnek ver, tablo yap, çok ayrıntılı anlat.', iyi: 'A: Konuyu 150 kelimeyle açıkla.\nB: Konuyu 150 kelimeyle ve günlük yaşamdan bir benzetmeyle açıkla.\nTek değişken: benzetme', not: 'Geçersiz çok değişkenli deneye karşı tek değişkenli kontrollü deney.' },
      { kotu: 'İki çıktıyı kıyasla.', iyi: 'A ve B çıktılarını doğruluk, açıklık, hedefe uygunluk ve uygulanabilirlik açısından 1–5 ölçeğinde puanla. Her puana kanıt göster; hangi koşulda hangisinin yararlı olduğunu açıkla.', not: 'Kanıt temelli rubrik hakemliği.' },
      { kotu: 'Piyano dersi yaz.', iyi: 'Başlangıç piyano çalışması için aynı içeriği üret: A sürümü kısa paragraf, B sürümü 5 günlük tablo. Takip edilebilirliği karşılaştıracak 3 soru yaz.', not: 'Format değişkeninin kullanım etkisini test etme.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 6.1)', sure: '12 dk', tur: 'Bireysel', ne: 'A/B deneyi mantığı, tek değişken kuralı ve 4 ölçütlü mini rubrik.',
        sayfalar: ['Laboratuvar Mantığı', 'Hipotez, Değişken, Ölçüm', 'Deney Formülü', 'Kontrollü Deney Örneği', 'Mini Rubrik Görevi'],
        nasil: 'A/B deney mantığını çözer, hipotez kurar. Şifre: deney9', pass: 'deney9' },
      { ad: 'Grup Atölyesi (Ders 6.2)', sure: '18 dk', tur: 'Grup', ne: 'Fen deneyi, Format deneyi, Rol değişkeni ve Kişiselleştirme karşılaştırması.',
        sayfalar: ['Roller', 'İstasyon 1: Fen Deneyi', 'İstasyon 2: Format Deneyi', 'İstasyon 3: Rol Değişkeni', 'İstasyon 4: Meslek Profili'],
        nasil: 'Grup tek değişkeni değiştirir, rubrikle puanlar. Şifre: kiyas9', pass: 'kiyas9' },
      { ad: 'Prompt Vitrini (Ders 6.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Deney Tasarımı, Çıktı Hakemi, Piyano Planı, Revizyon Şablonu.',
        sayfalar: ['Deney Tasarımı', 'Çıktı Hakemi', 'Hobi Formatı', 'Revizyon Örneği', 'Kalite Kontrol'],
        nasil: 'Rubrik şablonlarını inceler, revizyon yapar. Şifre: olcut9', pass: 'olcut9' }
    ],
    sorular: [
      'Bir deneyde birden fazla değişkeni aynı anda değiştirirsek neden kesin bir sonuca varamayız?',
      'Rubrikteki "Uygulanabilirlik" ölçütü ile "Doğruluk" ölçütü ne zaman çatışabilir?',
      'Yapay zekâyı iki çıktıyı değerlendiren tarafsız bir hakem olarak nasıl kullanabiliriz?',
      'En düşük puan alan boyutu iyileştirmek için nasıl bir revizyon stratejisi izlenir?'
    ],
    ipuclari: [
      'Öğrencilere A ve B sürümlerini yazarken kelime sınırını ve hedefi sabit tutturun.',
      'Rubrik puanlamasında öğrencilerden her puan için çıktının içinden bir cümle alıntılamalarını isteyin.',
      'Kazanan ilan etmek yerine "Hangi durumda A, hangi durumda B tercih edilir?" tartışması yaptırın.'
    ]
  },

  7: {
    ad: 'Fen Bilimlerini Görselleştir',
    emoji: '🔬',
    konu: 'Atom · Hücre · DNA · Fotosentez (Biyoloji 9 · Kimya 9)',
    tekCumle: 'Bilimsel bilgiyi dekoratif bir resme değil; <b>doğrulanabilir, etiketli ve süreç adımlarını gösteren görsel bir modele</b> dönüştürmektir.',
    neden: [
      'Fen bilimlerinde görsel bir iddiadır; yanlış yerleştirilmiş bir organel veya yanlış yönlü bir ok yanlış kavram oluşumuna yol açar.',
      'Mikro ve makro düzeylerin, temsil renklerinin ve modellerin sınırlarının açıkça tanımlanması gerekir.',
      'Bitki/Hayvan Hücresi, Fotosentez Süreç Şeması, DNA Çift Sarmalı ve Biyoteknoloji Laboratuvarı modellenir.'
    ],
    kazanim: [
      'Ders kazanımına uygun bilimsel görsel modelini <b>tasarlar</b>.',
      'Süreçlerdeki madde ve enerji akışlarını <b>farklı ok türleriyle temsil eder</b>.',
      'Görseldeki bileşenlerin, renklerin ve ölçeklerin <b>temsili olduğunu belirten lejant ekler</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Resim mi, bilimsel model mi? (5 dk)',
        m: 'Dekoratif bir DNA çizimi ile şeker-fosfat omurgası ve baz eşleşmelerini gösteren posteri kıyaslatın.' },
      { b: '2️⃣ Fen Görseli Formülü (5 dk)',
        m: '🔬 <b>1. Kazanım · 2. Model Temsili · 3. Bileşenler · 4. Etiket Sistemi · 5. Hata Kontrolü.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '7.1 Bireysel Keşif → 7.2 Grup Atölyesi (Hücre Atlası, Fotosentez Akışı, DNA Modeli, Biyomedikal) → 7.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar fen görsel şablonlarını tanıtır. Şifreler: <b>bilim9 · dna9 · mikroskop9</b>.' }
    ],
    ornekler: [
      { kotu: 'Renkli ve muhteşem bir DNA resmi yap.', iyi: 'DNA’nın çift sarmal yapısını 9. sınıf için eğitim posteri planla. Şeker-fosfat omurgası, A-T ve G-C eşleşmelerini etiketle; renklerin temsili olduğunu belirt.', not: 'Dekoratif resim yerine etiketli bilimsel model.' },
      { kotu: 'Bitki ve hayvan hücresini çiz.', iyi: 'Bitki ve hayvan hücresini yan yana karşılaştıran 9. sınıf infografiği tasarla. Ortak organeller aynı renkte, özgü yapılar vurgu renginde olsun. Türkçe etiketle.', not: 'Ortak ve farklı yapıların renk kodlaması.' },
      { kotu: 'Fotosentezi anlat.', iyi: 'Fotosentezi 3 katmanlı süreç şeması olarak görselleştir: Yaprağa giren maddeler, kloroplast enerji dönüşümü, ürünler. Madde akışını düz, enerji akışını kesik okla göster.', not: 'Madde ve enerji için farklı ok sistemleri.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 7.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Bilimsel görsel iddiadır ilkesi, yapı/süreç/ölçek ayrımı.',
        sayfalar: ['Bilimsel Görsel İlkesi', 'Yapı, Süreç, Ölçek', 'Fen Görsel Formülü', 'DNA Posteri Örneği', 'Doğruluk Kontrolü Görevi'],
        nasil: 'Model sınırlarını inceler, görsel briefini oluşturur. Şifre: bilim9', pass: 'bilim9' },
      { ad: 'Grup Atölyesi (Ders 7.2)', sure: '18 dk', tur: 'Grup', ne: 'Hücre Atlası, Fotosentez Akışı, DNA Modeli ve Biyoteknoloji Alanı.',
        sayfalar: ['Roller', 'İstasyon 1: Hücre Atlası', 'İstasyon 2: Fotosentez Akışı', 'İstasyon 3: DNA Modeli', 'İstasyon 4: Biyoteknoloji'],
        nasil: 'Grup bilimsel görsel promptunu yazar. Şifre: dna9', pass: 'dna9' },
      { ad: 'Prompt Vitrini (Ders 7.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Bitki/Hayvan Hücresi, Fotosentez Şeması, DNA Sarmalı, Biyoteknoloji Laboratuvarı.',
        sayfalar: ['Hücre Karşılaştırma', 'Fotosentez Akışı', 'DNA Sarmalı', 'Biyoteknoloji Çalışması', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, lejantları denetler. Şifre: mikroskop9', pass: 'mikroskop9' }
    ],
    sorular: [
      'Bir fen görselinde madde akışı ile enerji akışını aynı tür okla göstermek neden hatadır?',
      'Organellerin veya atomların renkleri neden "gerçek renk" değil "temsili kod" olarak adlandırılır?',
      'Öğretim amaçlı bir modelin sınırlarını belirtmek neden bilimsel dürüstlüktür?',
      'Gereksiz 3D ışıklandırma ve efektler fen bilgisini nasıl gölgeleyebilir?'
    ],
    ipuclari: [
      'Öğrencilere "bitki besini topraktan alır" gibi kökleşmiş kavram yanılgılarını önleyecek ok hiyerarşisi kurdurun.',
      'Etiketlerin Türkçe karşılıklarını ders kitabıyla birebir eşleştirin.',
      'Süreç anlatımlarında soldan sağa veya yukarıdan aşağıya net bir akış yönü belirleyin.'
    ]
  },

  8: {
    ad: 'Fizik Bir Sahne Olsaydı',
    emoji: '⚡',
    konu: 'Kuvvet · Hareket · Enerji · Dalgalar (Fizik 9)',
    tekCumle: 'Soyut fizik ilişkilerini <b>nesne, referans noktası, vektör okları ve ardışık anlarla (önce, etkileşim, sonra)</b> anlaşılır bir sahneye dönüştürmektir.',
    neden: [
      'Fizikte dinamik süreçler durağan tek bir karede kaybolur; ardışık sahneler ve serbest cisim diyagramları neden-sonuç bağını kurar.',
      'Hız vektörü, kuvvet oku ve enerji dönüşüm çubukları aynı sahnede birleştiğinde soyut formüller somutlaşır.',
      'Kuvvet (Alışveriş Arabası), Enerji (Kaykay Rampası), Ses Dalgaları ve Depo Robotu sahneleri modellenir.'
    ],
    kazanim: [
      'Bir fiziksel etkileşimi <b>serbest cisim diyagramı ve ardışık panellerle</b> sahneler.',
      'Kuvvet, hız ve ivme vektörlerinin <b>yön, büyüklük ve etki noktalarını</b> doğru tanımlar.',
      'Sürtünme, hava direnci gibi varsayımları <b>açıkça belirten fizik sahnesi promptu</b> yazar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hızlı giden araba resmi fizik anlatır mı? (5 dk)',
        m: 'Dramatik ışıklı bir araba resmi ile hız vektörü ve net kuvvet oku çizilmiş 3 karelik sahneyi kıyaslayın.' },
      { b: '2️⃣ Fizik Sahne Yönetmenliği (5 dk)',
        m: '⚡ <b>1. Sistem/Nesne · 2. Başlangıç Durumu · 3. Etkileşim/Kuvvetler · 4. Vektör/Grafik Gösterimi · 5. Gözlenen Sonuç.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '8.1 Bireysel Keşif → 8.2 Grup Atölyesi (Kuvvet Sahnesi, Enerji Parkuru, Dalga Stüdyosu, Robotik Depo) → 8.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar vektör oklarını ve enerji dönüşümlerini açıklar. Şifreler: <b>kuvvet9 · enerji9 · hareket9</b>.' }
    ],
    ornekler: [
      { kotu: 'Hızlı giden etkileyici bir araba çiz.', iyi: 'Düz yolda hızlanan bir aracın 3 ardışık anını göster. Hız vektörü ve net kuvvet oku aynı renk sisteminde olsun; ölçek ilişkisini açıklayan lejant ekle.', not: 'Sinematik belirsizlik yerine vektörlü fizik sahnesi.' },
      { kotu: 'Alışveriş arabasını iten insan çiz.', iyi: 'Alışveriş arabasını iten öğrenciyi 2 panelli göster: Solda gerçek sahne, sağda serbest cisim diyagramı. Uygulanan kuvvet, sürtünme, ağırlık ve normal kuvvet oklarını etiketle.', not: 'Gerçek sahne + Serbest cisim diyagramı yan yana.' },
      { kotu: 'Kaykay yapan çocuk çiz.', iyi: 'U rampasındaki kaykaycının hareketini 3 karede göster: Her karede hız oku, kinetik ve potansiyel enerji çubukları bulunsun. Sürtünme ihmal varsayımını görünür yaz.', not: 'Ardışık kareler ve enerji dönüşüm çubukları.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 8.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sistem sınırlandırma, kuvvet vektörleri ve ardışık anlar kuralı.',
        sayfalar: ['Fizik Sahnesi Mantığı', 'Sistem, Kuvvet, Anlar', 'Fizik Sahnesi Formülü', 'Hızlanan Araç Örneği', 'Sahne Yönetmeni Soruları'],
        nasil: 'Fiziksel değişkenleri tanımlar, vektör planını yapar. Şifre: kuvvet9', pass: 'kuvvet9' },
      { ad: 'Grup Atölyesi (Ders 8.2)', sure: '18 dk', tur: 'Grup', ne: 'Kuvvet Sahnesi, Enerji Parkuru, Dalga Stüdyosu ve Depo Robotu istasyonları.',
        sayfalar: ['Roller', 'İstasyon 1: Kuvvet Sahnesi', 'İstasyon 2: Enerji Parkuru', 'İstasyon 3: Dalga Stüdyosu', 'İstasyon 4: Meslek Sahnesi'],
        nasil: 'Grup serbest cisim diyagramı ve ardışık an promptunu üretir. Şifre: enerji9', pass: 'enerji9' },
      { ad: 'Prompt Vitrini (Ders 8.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Kuvvet Diyagramı, U Rampa Enerjisi, Müzik Dalgaları, Depo Robotu Fiziği.',
        sayfalar: ['Kuvvet Diyagramı', 'U Rampa Enerjisi', 'Ses Dalgaları', 'Depo Robotu', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, varsayımları kontrol eder. Şifre: hareket9', pass: 'hareket9' }
    ],
    sorular: [
      'Bir fizik sahnesinde referans noktası belirlemezsek hız ve konum nasıl belirsizleşir?',
      'Kinetik ve potansiyel enerji çubuklarının toplam yüksekliği sürtünmesiz ortamda neden sabit kalmalıdır?',
      'Ses dalgasında yükseklik (şiddet/genlik) ile frekansı (incelik/kalınlık) ayırt etmek için nasıl bir görsel kod kullanılır?',
      'Fizik sahnesinde "varsayımlar" (sürtünme ihmal, sabit kütle) neden açıkça yazılmalıdır?'
    ],
    ipuclari: [
      'Vektör oklarının boyunun kuvvetin büyüklüğüyle orantılı olmasına dikkat çekin.',
      'Ardışık anlarda zaman akışının (t0, t1, t2) net işaretlenmesini sağlayın.',
      'Diyagram ile gerçekçi görseli yan yana iki panel olarak kurgulattırın.'
    ]
  },

  9: {
    ad: 'Matematiği Görünür Hale Getirmek',
    emoji: '📐',
    konu: 'Geometri · Oran · Doğrusal Fonksiyon · Olasılık Ağacı (Matematik 9)',
    tekCumle: 'Matematiksel ilişkileri dekoratif sayılarla değil; <b>doğru grafik, eşit ölçekli eksenler, geometrik adımlar ve olasılık ağacıyla</b> görselleştirmektir.',
    neden: [
      'Grafik okuryazarlığı ve görsel temsil, soyut cebirsel ve geometrik kavramların zihinde somutlaşmasını sağlar.',
      'Sıfırdan başlamayan veya eşit aralıklı olmayan eksenler veriyi yanıltıcı sunar; doğru grafik güvenilir bilgidir.',
      'Doğrusal Fonksiyonlar (y=2x+1), Üçgen İç Açıları İspatı, İki Yazı-Tura Olasılık Ağacı ve Enerji Tüketim Paneli görselleştirilir.'
    ],
    kazanim: [
      'Bir matematiksel ilişkiyi <b>tablo, denklem ve koordinat grafiği</b> olarak bir arada temsil eder.',
      'Geometrik bir ispatı <b>adım adım çizgiler ve eş açılarla</b> sahneler.',
      'Olasılık deneyini <b>dallar, yol olasılıkları ve toplamı 1 kuralıyla</b> ağaç modeline dönüştürür.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Yanıltıcı grafikler! (5 dk)',
        m: 'Eksenleri hileli çizilmiş bir haber grafiğini gösterin: “Neden artış 10 kat gibi görünüyor?” Eksenlerin önemini vurgulayın.' },
      { b: '2️⃣ Matematiksel Temsil Formülü (5 dk)',
        m: '📐 <b>1. Kavram/İlişki · 2. Veri/Değerler · 3. Temsil Türü · 4. Okuma Açıklaması · 5. Ölçek Doğrulama.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '9.1 Bireysel Keşif → 9.2 Grup Atölyesi (Geometri İspatı, Hobi Verisi, Olasılık Ağacı, Veri Analizi) → 9.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar grafik ve olasılık şablonlarını paylaşır. Şifreler: <b>desen9 · geometri9 · olasilik9</b>.' }
    ],
    ornekler: [
      { kotu: 'Fonksiyonlarla ilgili renkli poster yap.', iyi: 'y=2x+1 fonksiyonunu 9. sınıf için tablo, koordinat grafiği ve günlük yaşam örneğiyle aynı renk kodunda göster. Eksenleri, birimleri ve noktaları etiketle.', not: 'Tablo, denklem ve grafik üçlüsü aynı renk kodunda.' },
      { kotu: 'Üçgenin iç açılarını anlat.', iyi: 'Üçgenin iç açılar toplamını paralel doğru yaklaşımıyla açıklayan 4 adımlı görsel ispat planı yaz. Her adımda eklenen çizgiyi, eş açıları ve kuralı etiketle.', not: '4 adımlı geometrik ispat dizisi.' },
      { kotu: 'Olasılık hesabı yap.', iyi: 'İki kez yazı-tura atma deneyini olasılık ağacı olarak göster: Her dalın olasılığını, 4 sonucun yol olasılığını ve toplamın 1 kontrolünü ekle. Sade simgeler kullan.', not: 'Dallar, yol çarpımları ve toplam 1 kontrolü.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 9.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Değişken, temsil türü, eşleştirme kuralları ve grafik güvenliği.',
        sayfalar: ['Matematiksel Temsil İlkesi', 'Değişken, Temsil, Eşleme', 'Temsil Formülü', 'Fonksiyon Görseli Örneği', 'Grafik Güvenliği Görevi'],
        nasil: 'Matematiksel temsil kurallarını inceler. Şifre: desen9', pass: 'desen9' },
      { ad: 'Grup Atölyesi (Ders 9.2)', sure: '18 dk', tur: 'Grup', ne: 'Geometri Atölyesi, Hobi Verisi Grafiği, Olasılık Oyunu ve Karar Grafiği.',
        sayfalar: ['Roller', 'İstasyon 1: Geometri Atölyesi', 'İstasyon 2: Hobi Verisi', 'İstasyon 3: Olasılık Oyunu', 'İstasyon 4: Karar Modeli'],
        nasil: 'Grup grafik veya olasılık ağacı promptu üretir. Şifre: geometri9', pass: 'geometri9' },
      { ad: 'Prompt Vitrini (Ders 9.3)', sure: '10 dk', tur: 'Vitrin', ne: 'Fonksiyon İnfografiği, Paralel Doğru İspatı, Yazı-Tura Ağacı, Veri Gösterge Paneli.',
        sayfalar: ['Doğrusal Fonksiyon', 'Geometri İspatı', 'Olasılık Ağacı', 'Veri Analist Paneli', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, eksenleri doğrular. Şifre: olasilik9', pass: 'olasilik9' }
    ],
    sorular: [
      'Bir doğrusal fonksiyonda tablo, grafik ve sözel model aynı renk kodunu paylaştığında öğrenme nasıl kolaylaşır?',
      'Bir grafikte eksenlerin sıfırdan başlatılmaması ne tür yanılgılara yol açar?',
      'Olasılık ağacında dalların uçlarındaki olasılıkların toplamının 1 etmesi neden matematiksel bir zorunluluktur?',
      'Geometrik ispatta her adımda tek bir çizgi eklemenin pedagojik faydası nedir?'
    ],
    ipuclari: [
      'Öğrencilere grafik promptu yazarken "eksenleri sıfırdan başlat, eşit aralık kullan" kısıtını eklettirin.',
      'Olasılık ağaçlarında bağımsız olaylar için çarpma kuralının görünür olmasını sağlayın.',
      'Geometrik şekillerde harf ve sembollerin çakışmamasını denetleyin.'
    ]
  },

  10: {
    ad: 'Geleceğin Laboratuvarını Tasarla',
    emoji: '🧪',
    konu: 'Bilim + Teknoloji + İnsan + Etik (Sistem Tasarımı Finali)',
    tekCumle: 'Bir araştırma merkezini sadece görsel olarak değil; <b>gerçek problem, uzmanlar, iş akışı, güvenlik ve etik boyutlarıyla</b> prompt mimarisiyle tasarlamaktır.',
    neden: [
      'İlk 9 haftanın tüm becerileri (Asistan, 5 Bileşen, Temsil, Görselleştirme, Doğrulama, A/B Deneyi, Fen/Fizik/Matematik) bu büyük sistem tasarımında birleşir.',
      'Yalnızca fütüristik cihazlar çizmek yetmez; veri akışı, insan denetimi, güvenlik ve çevre sınırları sistem düşüncesini oluşturur.',
      'İklim Dayanıklılığı Laboratuvarı, Biyomedikal Sensör Merkezi, Ay Üssü Uzay Tarımı ve 90 Saniyelik Proje Savunması tasarlanır.'
    ],
    kazanim: [
      'Çözülecek gerçek bir ihtiyaca yönelik <b>laboratuvar sistem mimarisi</b> kurar.',
      'İnsan uzmanlar, araçlar, veri akışı ve güvenlik bölgeleri arasındaki <b>ilişkileri sahneler</b>.',
      'Tasarım kararlarını, AI prompt stratejisini ve etik sınırları <b>savunma sunumuna dönüştürür</b>.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Bilim kurgu mu, işleyen sistem mi? (5 dk)',
        m: '“Geleceğin laboratuvarı sadece parlayan ekranlar mıdır, yoksa gerçek bir sorunu çözen iş akışı mıdır?” sorusuyla başlayın.' },
      { b: '2️⃣ Sistem Tasarımı Formülü (5 dk)',
        m: '🧪 <b>1. Misyon/Sorun · 2. Ekip/Uzmanlar · 3. Alan/Mekân · 4. Teknoloji/Araçlar · 5. Etik & Güvenlik Sınırları.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: '10.1 Bireysel Keşif → 10.2 Grup Atölyesi (İklim Laboratuvarı, Biyomedikal Merkez, Uzay Tarımı, Proje Savunması) → 10.3 Prompt Vitrini.' },
      { b: '4️⃣ Kapanış ve Şifre (5 dk)',
        m: 'Gruplar 90 saniyelik laboratuvar savunmalarını yapar. 1. Dönem Zirvesi tamamlanır! Şifreler: <b>lab9 · inovasyon9 · gelecek9</b>.' }
    ],
    ornekler: [
      { kotu: 'Çok gelişmiş geleceğin laboratuvarını çiz.', iyi: '2040 kent tarımı laboratuvarını tasarla. Amaç su tüketimini azaltmak. Biyolog, veri analisti ve robotik teknisyenin çalışma alanlarını; numune, veri ve atık akışlarını; güvenlik ve etik kuralları göster.', not: 'Sadece görsel değil; problem, ekip, akış ve etik kurallar bir arada.' },
      { kotu: 'İklim laboratuvarı yap.', iyi: '2040 iklim dayanıklılığı laboratuvarının izometrik kesit görseli için prompt yaz: Su analizi, kent ısı adası, prototip alanlarını; çevre mühendisi ve şehir plancısının iş akışlarını etiketle.', not: 'İzometrik kesit ve uzman iş akışı.' },
      { kotu: 'Laboratuvarımı sun.', iyi: 'Laboratuvar tasarımını 90 saniyelik öğrenci sunumuna dönüştür: Problem, hedef kullanıcı, 3 tasarım kararı, kullanılan AI prompt stratejisi, etik risk ve sonraki test.', not: 'Gerekçeli ve ölçülü proje savunması.' }
    ],
    adimlar: [
      { ad: 'Bireysel Keşif (Ders 10.1)', sure: '12 dk', tur: 'Bireysel', ne: 'Sistem briefi, gerekçeli gelecek tasarımı ve 5 parçalı laboratuvar formülü.',
        sayfalar: ['Sistem Tasarımı Girişi', 'Misyon, Ekip, Alan, Teknoloji, Etik', 'Laboratuvar Formülü', 'Kent Tarımı Örneği', 'Tasarım Savunması Görevi'],
        nasil: 'Sistem bileşenlerini planlar, briefini oluşturur. Şifre: lab9', pass: 'lab9' },
      { ad: 'Grup Atölyesi (Ders 10.2)', sure: '18 dk', tur: 'Grup', ne: 'İklim Laboratuvarı, Biyomedikal Merkez, Uzay Tarımı ve 90 Saniyelik Savunma.',
        sayfalar: ['Roller', 'İstasyon 1: İklim Laboratuvarı', 'İstasyon 2: Sağlık Teknolojisi', 'İstasyon 3: Uzay Tarımı', 'İstasyon 4: Sunum Stüdyosu'],
        nasil: 'Grup laboratuvar sistem haritasını ve savunmasını hazırlar. Şifre: inovasyon9', pass: 'inovasyon9' },
      { ad: 'Prompt Vitrini (Ders 10.3)', sure: '10 dk', tur: 'Vitrin', ne: '2040 İklim Merkezi, Biyomedikal Sensör Alanı, Ay Üssü Tarımı, Proje Savunması.',
        sayfalar: ['İklim Merkezi', 'Biyomedikal Laboratuvarı', 'Ay Üssü Tarımı', 'Proje Savunması', 'Kalite Kontrol'],
        nasil: 'Şablonları inceler, final projesini tamamlar. Şifre: gelecek9', pass: 'gelecek9' }
    ],
    sorular: [
      'Bir laboratuvar tasarımında çözülen problemi açıkça tanımlamazsak teknoloji nasıl amaçsızlaşır?',
      'Biyomedikal bir sistemde insan uzman onayı ve veri gizliliği neden tasarıma baştan eklenmelidir?',
      'Uzay tarımı gibi kapalı döngü sistemlerde arıza senaryosu (fail-safe) planlamak neden hayati önem taşır?',
      'İlk 10 haftada öğrendiğiniz hangi prompt becerisi bu projede en çok işinize yaradı?'
    ],
    ipuclari: [
      'Öğrencilere laboratuvarı tasarlarken "numune girişi → analiz → veri modeli → atık bertarafı" akışını çizdirin.',
      'Sunum aşamasında abartılı bilim kurgu iddialarından kaçınıp gerçekçi mühendislik çözümlerini ödüllendirin.',
      '10 haftalık ilk dönemi başarıyla bitiren sınıfa tebrik ve rozet takdimi yapın.'
    ]
  }

};

/* Planlanan 11–36. Haftalar (Lise 9 Müfredatındaki Gelecek Dersler) */
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
