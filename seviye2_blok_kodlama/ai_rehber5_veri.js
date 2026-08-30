/* =========================================================================
   AI-GALAXY • ORTAOKUL 5 (5. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : ortaokul5/ders_linkleri_ve_sifreleri.md
   Ders kurgusu ve bölümler        : ortaokul5/dersN/dersN_ozet.md (1–3)
   Etkinlik adları ve ekran metni  : ortaokul5/dersN/dersN_M.html gerçek başlıkları
   Uydurulan ders/etkinlik adı yoktur.

   NOT — 5. SINIFIN AYIRT EDİCİ YANLARI:
   • Sesli okuma / ses efekti butonları tamamen kaldırılmıştır.
   • Köprü (bridge) link butonları adım sonlarından kaldırılmıştır; şifre
     mor "?" → ✏️ Cevapla düğmesine girilir.
   • Kaydırma çubukları kaldırılmıştır; her sayfa sabit sahneye sığar.
   • Maarif Modeli 5. sınıf konuları ile hobi alanları (oyun tasarımı,
     3D dijital sanat, çizgi roman, doğa macerası, mutfak bilimi, spor)
     DENGELİ olarak eşleştirilmiştir.
   • Ağırlık artık "istem kurma"dan "İSTEM MÜHENDİSLİĞİ"ne kayar:
     parçalama → hiyerarşi → şablon → rubrik → soru tasarımı → kanıt →
     kaynak → model kıyaslama → sokratik koçluk.
   • K-12 güvenliği açık kuraldır: biyometrik yüz/ses klonlama yasak,
     şiddet ve korku yok.
   ========================================================================= */

var AI_DERSLER = {

  1: {
    ad: 'Oyun Tasarımı ve Görev Parçalara Ayırmak',
    emoji: '🎮',
    konu: 'Task Decomposition — görevi alt adımlara bölme',
    tekCumle: 'Karmaşık bir işi yapay zekâya <b>tek parça</b> vermek yerine <b>4 alt adıma bölmek</b>, 5. sınıf istem mühendisliğinin ilk ve en güçlü alışkanlığıdır.',
    neden: [
      'Tek parça karmaşık istem, yapay zekânın hangi işi önce yapacağını bilememesine ve sonucun dağılmasına yol açar.',
      'Görev parçalama, blok kodlamadaki <b>algoritma kurma</b> becerisinin dil karşılığıdır; bu hafta iki müfredat aynı düşüncede buluşur.',
      'BlokDünya / KüpŞehir gibi tanıdık oyun evrenleri üzerinden çalışıldığı için soyut kavram somut bir tasarım işine dönüşür.'
    ],
    kazanim: [
      'Tek parça karmaşık istem ile parçalanmış istemi <b>ayırt eder</b>.',
      'Bir oyun tasarımı görevini <b>4 alt adıma</b> böler ve sırasını gerekçelendirir.',
      'Alt adımları doğru sırayla yazarak kendi oyun evreni istemini kurar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Tek cümle yeter mi? (5 dk)',
        m: 'Tahtaya yazın: <b>“Bana bir oyun yap.”</b> Sınıfa sorun: yapay zekâ önce neyi yapmalı? Cevaplar çoğalınca “demek ki tek cümle yetmiyor” deyin.' },
      { b: '2️⃣ Dört kutu (5 dk)',
        m: 'Tahtayı dörde bölün: <b>Dünyayı açıkla · Engeller & tablo · 3D maskot görseli · İpucu sorusu</b>. Bu, rehberdeki gerçek formüldür.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Oyun Dünyası Parçalama Atölyesi (grup) → 8 çeşitli hobi & oyun rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her grup kendi 4 alt adımını okusun. Sınıf <b>“sıra doğru mu?”</b> diye oylasın; sırası bozuk olanı birlikte düzeltin.' }
    ],
    ornekler: [
      { kotu: 'Bana volkan adası oyunu yap.', iyi: '1) Volkan adası temasını 2 cümlede tanımla. 2) 3 engeli tablo yap. 3) 3D Pixar maskot çizdir. 4) 2 ipucu sorusu ekle.', not: 'Tek parça → 4 alt adım.' },
      { kotu: 'Kesir şehri anlat.', iyi: 'KüpŞehir Kesir Mahallesi için önce mahalle temasını yaz, sonra kesir köprüsünü tablo hâlinde açıkla.', not: 'Önce tema, sonra içerik.' },
      { kotu: 'Mars üssü çiz.', iyi: 'Mars üssünün bölümlerini listele; ardından bu listeye göre izometrik 3D üs görseli için istem yaz.', not: 'Metin adımı görsel adımı besliyor.' }
    ],
    sorular: [
      'Bu görev kaç işten oluşuyor? Hepsini tek cümlede istesek ne olur?',
      'Hangi alt adım en başta olmalı? Neden?',
      'Bir alt adımı çıkarsak sonuç nasıl bozulur?',
      'Kodlamada da adımları sıraya koyuyor muyuz? Nerede benziyor?'
    ],
    ipuclari: [
      '5. sınıfta <b>sesli okuma butonu yoktur</b>; metni öğrenci okur. Okuma güçlüğü olan öğrenciye siz okuyun, cümleyi yine kendisi yazsın.',
      'Storybook modalı dersin anlatımıdır; <b>atlanmasın</b>, tahtadan birlikte okunsun.',
      '20 bölümün tamamı zorunlu değildir; sınıf süresine göre <b>10–12 bölüm</b> yeterlidir.'
    ]
  },

  2: {
    ad: '3D Oyun Maskotu ve Avatar Mimarisi',
    emoji: '🤖',
    konu: 'Instruction Hierarchy — komut hiyerarşisi',
    tekCumle: 'İstemdeki komutlar eşit değildir: <b>Zorunlu ➔ Tercih Edilen ➔ Kaçınılan</b> sırası, yapay zekâya neyden asla vazgeçmeyeceğini söyler.',
    neden: [
      'Karışık sırayla verilen emirlerde yapay zekâ hangisini önceleyeceğini bilemez; hiyerarşi bu belirsizliği bitirir.',
      '“Kaçınılan” (negatif istem) kavramı, K-12 güvenliğinin teknik karşılığıdır: gerçek insan yüzü, karanlık ve korkutucu öge burada yasaklanır.',
      'Öncelik sıralaması yapmak, proje yönetiminin ve kodlamadaki koşul mantığının ortak becerisidir.'
    ],
    kazanim: [
      'Bir istemdeki komutları <b>zorunlu / tercih edilen / kaçınılan</b> diye üçe ayırır.',
      '<b>Negatif istem</b> (avoid) yazarak istenmeyeni açıkça dışarıda bırakır.',
      'Kendi 3D maskotunu hiyerarşik istemle tasarlar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kırmızı, sarı, yeşil (5 dk)',
        m: 'Tahtaya üç renkli sütun çizin: 🔴 Zorunlu · 🟡 Tercih Edilen · 🟢 Kaçınılan. Sınıf bir maskot düşünsün, özellikleri sütunlara dağıtsın.' },
      { b: '2️⃣ Vazgeçilmez olan hangisi? (5 dk)',
        m: '“Neon gözlük mü, 3D Pixar stili mi vazgeçilmez?” diye sordurun. <b>Stil zorunludur, aksesuar tercihtir</b> sonucuna birlikte varın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Avatar Hiyerarşi Labı (20 bölüm) → Avatar & Maskot Mimarisi Atölyesi → 8 çeşitli avatar & maskot rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her grup <b>kaçınılan</b> maddesini okusun. “Bunu yazmasaydık ne olurdu?” sorusunu sınıfa tartıştırın.' }
    ],
    ornekler: [
      { kotu: 'Havalı bir robot maskot çiz, gözlüklü olsun, arka plan da güzel olsun.', iyi: 'ZORUNLU: 3D Pixar stili robot mimar avatarı. TERCİH: neon siber gözlük. KAÇINILAN: gerçek insan yüzü, karanlık arka plan.', not: 'Üç kademe ayrı ayrı yazıldı.' },
      { kotu: 'Ejderha yap ama korkunç olmasın.', iyi: 'ZORUNLU: sevimli kristal ejderha yavrusu, lav adası teması. TERCİH: parlayan kanat efekti. KAÇINILAN: sivri diş, korkutucu ifade.', not: 'Kaçınılan madde somutlaştı.' },
      { kotu: 'Uzay kedisi çiz, kask olsun, sade olsun.', iyi: 'ZORUNLU: 3D astronot kedi, oksijen kaskı. TERCİH: Mars üssü rozeti. KAÇINILAN: kalabalık arka plan, gerçekçi insan eli.', not: 'Sadelik “kaçınılan” ile sağlandı.' }
    ],
    sorular: [
      'Bu istemde vazgeçilmez olan hangi madde?',
      'Hangi özellik olmasa da olur? Neden tercih listesinde?',
      'Neyi yasaklamalıyız ki sonuç K-12 güvenli olsun?',
      'Sıra karışırsa sonuç nasıl değişir?'
    ],
    ipuclari: [
      'Kaçınılan maddesi <b>boş bırakılmasın</b>; en çok fark yaratan kademe budur.',
      '“Gerçek insan yüzü yok” kuralını sınıf kuralı hâline getirin ve her hafta tekrarlayın.',
      'Renkli kalemlerle üç kademeyi deftere işaretletin; görsel ayrım kalıcılığı artırır.'
    ]
  },

  3: {
    ad: 'Efsanevi Canavar ve Evcil Hayvan Şablonları',
    emoji: '🐉',
    konu: 'Few-Shot Prompting — örnekle öğretme',
    tekCumle: 'Yapay zekâya <b>1–2 örnek kart</b> gösterip “aynı şablonla üçüncüsünü yap” demek, tarif etmekten çok daha tutarlı sonuç verir.',
    neden: [
      'Few-shot, profesyonel istem mühendisliğinin temel tekniğidir; 5. sınıf bunu somut “pet kartı” üzerinden kavrayabilir.',
      'Şablon kurmak, aynı zamanda <b>tablo/alan mantığı</b>dır: tür, element, aksesuar, efekt, arka plan sabit alanlardır.',
      'Örnek vererek anlatmak, öğrencinin kendi kendine öğretme stratejisi geliştirmesini sağlar.'
    ],
    kazanim: [
      '<b>Rastgele istem</b> ile <b>şablonlu (few-shot) istemi</b> ayırt eder.',
      '5 parçalı şablonu (Tür · Element · Aksesuar · Efekt · Arka Plan) eksiksiz doldurur.',
      'Örnek 1 + Örnek 2 + Benim Karakterim biçiminde <b>istem zinciri</b> kurar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı kalıp (5 dk)',
        m: 'Tahtaya iki hazır pet kartı yazın (Kristal Ejderha, Siber Kedi). Sınıf <b>ortak kalıbı</b> bulsun: hangi bilgiler her ikisinde de var?' },
      { b: '2️⃣ Şablonu adlandırın (5 dk)',
        m: 'Beş alanı yazdırın: <b>TÜR · ELEMENT · AKSESUAR · EFEKT · ARKA PLAN</b>. Boş bir kart çizip sınıfla birlikte doldurun.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Few-Shot Pet Labı (20 bölüm) → Efsanevi Pet Mimarisi Atölyesi → 10 efsanevi pet few-shot rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İki grup kartını yan yana okusun; sınıf <b>“şablon tutmuş mu?”</b> diye kontrol etsin. Eksik alan varsa birlikte tamamlayın.' }
    ],
    ornekler: [
      { kotu: 'Bana havalı bir ejderha çiz.', iyi: 'TÜR: kristal ejderha yavrusu · ELEMENT: buz mavisi · AKSESUAR: gümüş taç · EFEKT: kar tanesi aurası · ARKA PLAN: sade stüdyo ışığı.', not: 'Beş alan da dolu.' },
      { kotu: 'Kedi ama uzaylı olsun.', iyi: 'Örnek 1 (kristal ejderha) ve Örnek 2 (siber kedi) formatını kullanarak üçüncü kartı aynı şablonda üret: galaksi tilkisi.', not: 'Gerçek few-shot zinciri.' },
      { kotu: 'Sevimli bir hayvan.', iyi: 'TÜR: pamuk şeker bulut ayısı · ELEMENT: pembe · AKSESUAR: yıldız kolye · EFEKT: parıltı · ARKA PLAN: açık gökyüzü.', not: 'Belirsizlik şablonla bitti.' }
    ],
    sorular: [
      'İki örnek kartın ortak kalıbı ne?',
      'Hangi alanı boş bıraktın? Sonucu nasıl etkiledi?',
      'Neden yapay zekâya örnek göstermek tarif etmekten iyi?',
      'Bu şablonu başka bir derste (fen, sosyal) nasıl kullanırdık?'
    ],
    ipuclari: [
      'Şablon alanlarını tahtada <b>sabit tutun</b>; sıra değişirse tutarlılık bozulur.',
      'K-12 kuralı: şiddet ve korku yok — <b>sevimli, cana yakın</b> 3D Pixar/Disney tarzı.',
      'Hızlı biten gruplara “dördüncü kartı da aynı şablonda yaz” deyin.'
    ]
  },

  4: {
    ad: 'Oyun Haritası ve Rubrik Testi',
    emoji: '🗺️',
    konu: 'Rubrikle istem kalitesi ölçme (1. Ay Projesi)',
    tekCumle: 'Bir istemin iyi olduğunu <b>hissederek</b> değil, <b>5 maddelik rubrikle puanlayarak</b> söyleriz.',
    neden: [
      'Rubrik, öznel beğeniyi ölçülebilir ölçüte çevirir; öğrenci “güzel olmuş” demek yerine gerekçe kurar.',
      'Bu hafta <b>1. Ay Projesi (Dijital Oyun Evreni Testi)</b> yapılır; rubrik projenin değerlendirme aracıdır.',
      'Ölçütle değerlendirme, ilerideki model kıyaslama (8. ders) ve kaynak değerlendirme (7. ders) haftalarının altyapısıdır.'
    ],
    kazanim: [
      '5 rubrik ölçütünü (Detay · Netlik · Üretkenlik · Güvenlik · Eğlence) tanır.',
      'Bir isteme <b>1–5 arası puan</b> verir ve puanını gerekçelendirir.',
      'Düşük puanlı istemi yükseltecek eklemeyi bulur.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kaç puan? (5 dk)',
        m: 'Tahtaya yazın: <b>“Matematik şehri haritası.”</b> Sınıf 1–5 arası puan versin. Puanlar dağılınca “ölçütümüz yok” tespitini yapın.' },
      { b: '2️⃣ Rubriği kurun (5 dk)',
        m: 'Beş ölçütü sırayla yazdırın: <b>Detay · Netlik · Üretkenlik · Güvenlik · Eğlence</b>. Her ölçüt için tek cümlelik soru yazın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Rubrik Puanlama Labı (20 bölüm) → Harita Atölyesi (Tema → Rubrik Puanlama → Takım İstemi) → 10 oyun haritası rubrik rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her takım <b>takım rubrik raporunu</b> okusun. En düşük puanlı ölçütü sınıfça birlikte yükseltin.' }
    ],
    ornekler: [
      { kotu: 'Matematik şehri haritası. (Rubrik: 1/5)', iyi: '3D izometrik KüpŞehir Matematik Haritası: sayı kulesi (5 kat), geometri parkı, kesir köprüsü — sade açık mavi gökyüzü. (5/5)', not: 'Detay + netlik yükseldi.' },
      { kotu: 'Volkan haritası çiz.', iyi: 'Volkan Adası macera haritası: lav nehri, güvenli patika, gizli mağara girişi; K-12 uygun, korkutucu öge yok.', not: 'Güvenlik ölçütü açıkça yazıldı.' },
      { kotu: 'Mars üssü haritası olsun, güzel olsun.', iyi: 'Astronot Mars üssü haritası: oksijen kapısı, sera modülü, iletişim kulesi — izometrik görünüm, canlı turuncu palet.', not: 'Eğlence + üretkenlik ölçütü karşılandı.' }
    ],
    sorular: [
      'Bu isteme kaç puan verdin? Hangi ölçütten kaybetti?',
      'Tek bir ekleme yapsan puanı en çok hangisi yükseltir?',
      '“Güvenlik” ölçütü neden var?',
      'İki takımın puanı farklıysa hangisi haklı? Nasıl karar veririz?'
    ],
    ipuclari: [
      'Puan verirken <b>gerekçe zorunlu</b> olsun: “4 verdim çünkü…” kalıbını dayatın.',
      'Bu hafta ay projesi haftasıdır; takım raporlarını saklayın, 8. haftada proje dosyasına eklenir.',
      'Rubrik kartını panoya asın; 7, 8 ve 9. derslerde tekrar kullanılacak.'
    ]
  },

  5: {
    ad: 'Gizemli Macera Sorusu Oluşturmak',
    emoji: '🔭',
    konu: 'Research Question Design — araştırma sorusu tasarımı',
    tekCumle: 'İyi bir araştırma sorusu üç şeyi birden yapar: <b>odaklıdır, merak uyandırır ve araştırılabilir.</b>',
    neden: [
      'Yapay zekâdan iyi cevap almak, önce iyi soru kurmayı gerektirir; soru kalitesi cevabın tavanını belirler.',
      'Fen Bilimleri ve uzay araştırmaları bağlamında çalışıldığı için bilimsel süreç becerileriyle doğrudan örtüşür.',
      '“Merak uyandırıcı” ölçütü, öğrencinin kendi ilgi alanını (uzay, derin deniz, mutfak kimyası) araştırmaya taşımasını sağlar.'
    ],
    kazanim: [
      'Basit bilgi sorusu ile <b>araştırma sorusunu</b> ayırt eder.',
      'Bir soruyu üç ölçütle (Odak · Merak · Araştırılabilirlik) değerlendirir.',
      'Geniş bir konuyu <b>tek odaklı araştırma sorusuna</b> dönüştürür.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — İki soru (5 dk)',
        m: 'Tahtaya yazın: <b>“Mars nedir?”</b> · <b>“Mars’ta sera kurmak için hangi üç sorun çözülmeli?”</b> Hangisi araştırma sorusu, sınıf söylesin.' },
      { b: '2️⃣ Üç ölçüt (5 dk)',
        m: '<b>ODAK</b> (tek konu mu?) · <b>MERAK</b> (“vay be” dedirtiyor mu?) · <b>ARAŞTIRILABİLİR</b> (cevaplanabilir mi?). Üçünü tahtaya sabitleyin.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Soru Dönüştürücü Labı (20 bölüm) → Araştırma Sorusu Atölyesi (Konu → Soru Değerlendirme → Takım Sorusu) → 10 araştırma sorusu rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her takım sorusunu okusun; sınıf üç ölçütle <b>✅/❌</b> versin. Bir ölçütü eksik olanı birlikte düzeltin.' }
    ],
    ornekler: [
      { kotu: 'Uzay hakkında bilgi ver.', iyi: 'Mars’ta bitki yetiştirmek için toprağın hangi üç özelliği değiştirilmelidir?', not: 'Odaklı + araştırılabilir.' },
      { kotu: 'Derin deniz canlıları nedir?', iyi: 'Karanlık derin denizde yaşayan canlılar ışığı nasıl üretir ve bunu ne için kullanır?', not: 'Merak uyandırıcı hâle geldi.' },
      { kotu: 'Mutfak kimyası anlat.', iyi: 'Kabartma tozu ile sirke tepkimesinde köpüğün yüksekliğini hangi değişken en çok etkiler?', not: 'Ölçülebilir tek değişken.' }
    ],
    sorular: [
      'Bu soru tek bir konuya mı odaklanıyor?',
      'Cevabını gerçekten merak ediyor musun?',
      'Bu soru araştırma ile cevaplanabilir mi, yoksa görüş mü ister?',
      'Soruyu nasıl daraltırsak daha güçlü olur?'
    ],
    ipuclari: [
      '“Nedir?” ile başlayan soruları <b>“nasıl / neden / hangi”</b> ile yeniden yazdırın; kalite anında yükselir.',
      'Sorular deftere yazılsın; 8. haftadaki araştırma dosyasında kullanılacak.',
      'Cevabı tek kelime olan soruları “bu araştırma sorusu değil” diye işaretletin.'
    ]
  },

  6: {
    ad: 'Oyun İçi Efsaneler vs Gerçekler',
    emoji: '🕵️',
    konu: 'Evidence-Based Reasoning — İKA modeli',
    tekCumle: 'Her iddia üç parçaya ayrılır: <b>İDDİA · KANITLAR · AÇIKLAMA</b>. Kanıtı ve açıklaması olmayan cümle, ne kadar inandırıcı olursa olsun efsanedir.',
    neden: [
      'Oyun dünyasında ve internette dolaşan “şehir efsaneleri” 5. sınıf öğrencisinin günlük gerçeğidir; ders doğrudan bu deneyime dokunur.',
      'İKA modeli, bilimsel düşünmenin sınıfta uygulanabilir en sade hâlidir.',
      'Yapay zekânın da hatalı bilgi üretebileceğini anlamak için önce <b>kanıt sorma alışkanlığı</b> gerekir.'
    ],
    kazanim: [
      'Bir cümleyi <b>iddia / kanıt / açıklama</b> olarak parçalar.',
      'Kanıtı olmayan iddiayı <b>efsane</b> olarak işaretler.',
      'Yapay zekâdan kanıt ve açıklama isteyen istem yazar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Doğru mu, efsane mi? (5 dk)',
        m: 'Tahtaya yazın: <b>“Mozart dinlemek IQ’yu 10 puan artırır.”</b> Parmak kaldırtın, sonra “kanıtın var mı?” diye sorun.' },
      { b: '2️⃣ İKA’yı kurun (5 dk)',
        m: 'Üç kutu çizin: 💬 <b>İDDİA</b> · 📋 <b>KANITLAR</b> · 🔍 <b>AÇIKLAMA</b>. Yukarıdaki cümleyi birlikte kutulara dağıtın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Efsane Dedektörü Labı (20 bölüm) → Efsane Jürisi Atölyesi (Efsane → İKA Puanlama → Jüri Kararı) → 10 oyun efsanesi İKA rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her jüri kararını gerekçesiyle açıklasın. <b>“Kanıt yoksa karar yok”</b> cümlesini sınıf kuralı yapın.' }
    ],
    ornekler: [
      { kotu: 'Oyun oynamak seni zeki yapar.', iyi: 'Bu iddiayı İKA modeliyle incele: iddia ne, hangi araştırmalar destekliyor, mekanizma nasıl açıklanıyor?', not: 'Kanıt ve açıklama istendi.' },
      { kotu: 'Mars’ta kesinlikle yaşam var.', iyi: '“Mars’ta yaşam var” iddiasının kanıt durumunu özetle; kesin bilgi ile olasılık arasındaki farkı belirt.', not: '“Kesinlikle” sözcüğü sorgulandı.' },
      { kotu: 'İnternetteki her bilgi doğrudur.', iyi: 'Bu cümleyi bir iddia olarak ele al; karşı kanıtları ve neden yanlış olduğunun açıklamasını 3 maddede yaz.', not: 'Karşı kanıt istendi.' }
    ],
    sorular: [
      'Bu cümlenin kanıtı ne? Kim söylemiş?',
      'Açıklama kısmı var mı — <i>neden</i> böyle oluyor?',
      'Kanıtı olmayan bir iddiaya ne deriz?',
      'Yapay zekâ da kanıtsız cümle kurabilir mi?'
    ],
    ipuclari: [
      'Sınıfta “bence” ile başlayan cümleleri <b>iddia</b> kutusuna koydurun; kanıt sütununu boş bırakın, fark görünsün.',
      'Jüri kararlarında oy çokluğu değil <b>kanıt gücü</b> belirleyici olsun.',
      'Bu haftanın çıktısı 7. haftada kaynak güvenilirliğiyle birleşecek; kartları saklayın.'
    ]
  },

  7: {
    ad: 'Dijital İçerik ve İnternet Güvenliği',
    emoji: '🔍',
    konu: 'Source Literacy — kaynak okur-yazarlığı',
    tekCumle: 'Bilginin doğruluğu kadar <b>nereden geldiği</b> de önemlidir: otorite, teyit ve şeffaflık üç temel kaynak ölçütüdür.',
    neden: [
      'Dijital yurttaşlık, Sosyal Bilgiler kazanımı olduğu kadar günlük hayatta doğrudan kullanılan bir güvenlik becerisidir.',
      '“Ücretsiz elmas” siteleri gibi somut tuzaklar üzerinden çalışıldığında kural soyut kalmaz.',
      'Kaynak değerlendirme, 6. haftadaki kanıt arayışının doğal devamıdır: kanıt varsa <b>kanıtın kaynağı</b> sorulur.'
    ],
    kazanim: [
      'Kaynakları <b>güvenilirlik piramidinde</b> sıralar.',
      'Üç ölçütle (Otorite · Teyit · Şeffaflık) kaynak değerlendirir.',
      'Kişisel bilgi isteyen ve ödül vaat eden içerikleri <b>tuzak</b> olarak tanır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hangisine inanırsın? (5 dk)',
        m: 'İki kaynak okuyun: <b>resmi oyun yapımcısının sitesi</b> ve <b>anonim bir sosyal medya paylaşımı</b>. Sınıf hangisini seçer, neden?' },
      { b: '2️⃣ Üç ölçüt (5 dk)',
        m: 'Tahtaya yazın: <b>OTORİTE</b> (yazan uzman mı?) · <b>TEYİT</b> (başka kaynak doğruluyor mu?) · <b>ŞEFFAFLIK</b> (tarih, yazar, link var mı?).' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Kaynak Dedektörü Labı (20 bölüm) → Kaynak İnceleme Atölyesi (Senaryo → Kaynak Analizi → Jüri Raporu) → 10 dijital kaynak güvenilirlik rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: '<b>“Ücretsiz elmas” kuralını</b> sınıf kuralı yapın: şifre, kişisel bilgi ve ödül vaadi = dur, öğretmene sor.' }
    ],
    ornekler: [
      { kotu: 'Bir sitede yazıyordu, demek ki doğru.', iyi: 'Bu bilgiyi üç ölçütle değerlendir: yazan kim, başka nerede doğrulanıyor, tarih ve kaynak linki var mı?', not: 'Ölçütlü değerlendirme.' },
      { kotu: 'Ücretsiz elmas veren siteyi denedim.', iyi: 'Ödül vaat eden ve kullanıcı bilgisi isteyen sitelerin neden güvenli olmadığını 3 maddede açıkla.', not: 'Tuzak açıkça adlandırıldı.' },
      { kotu: 'Yapay zekâ söyledi, kesin doğrudur.', iyi: 'Yapay zekânın verdiği bilgiyi resmi bir kaynakla karşılaştır; farklıysa hangisine neden güvendiğini yaz.', not: 'Teyit adımı eklendi.' }
    ],
    sorular: [
      'Bu bilgiyi kim yazmış? Uzman mı?',
      'Aynı bilgiyi başka güvenilir bir yerde bulabildik mi?',
      'Tarih ve kaynak linki var mı? Yoksa bu ne anlama gelir?',
      'Bir site senden kişisel bilgi isterse ne yaparsın?'
    ],
    ipuclari: [
      'Güvenilirlik piramidini panoya asın; her hafta bir kaynak eklettirin.',
      'Kişisel bilgi kuralını <b>her derste tekrar ettirin</b>; tek seferlik anlatım yetmez.',
      'Rehber sayfasındaki “otorite” başlığı kaynak dosyada eksik yazılmıştır; sınıfta <b>otorite</b> olarak okutun.'
    ]
  },

  8: {
    ad: 'Yapay Zekâ Oyun Karakterlerini Karşılaştırmak',
    emoji: '⚔️',
    konu: 'Model Comparison & Benchmark (2. Ay Projesi)',
    tekCumle: 'Aynı istemi farklı modellere verip sonuçları <b>5 ölçütle kıyaslamak</b>, hangi aracın hangi iş için uygun olduğunu gösterir.',
    neden: [
      'Öğrenci “yapay zekâ” diye tek bir şey olmadığını, araçların farklı güçlü yanları olduğunu görür.',
      'Kıyaslama, 4. haftadaki rubrik becerisinin <b>iki çıktı üzerinde</b> uygulanmış hâlidir.',
      'Bu hafta <b>2. Ay Projesi (Oyun ve Bilim Araştırma Dosyası)</b> teslim edilir; benchmark raporu dosyanın omurgasıdır.'
    ],
    kazanim: [
      'İki çıktıyı 5 ölçütle (Stil Uyumu · Komut Takibi · Üretkenlik & Detay · K-12 Güvenliği · Karakter Tutarlılığı) kıyaslar.',
      'El ve yüz anatomisi gibi <b>tipik yapay zekâ hatalarını</b> fark eder.',
      'Kıyaslama sonucunu gerekçeli bir rapora dönüştürür.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hangisi daha iyi? (5 dk)',
        m: 'Aynı istemden üretilmiş iki görseli yan yana gösterin. “Hangisi daha iyi?” diye sorun; gerekçeler dağılınca ölçüt ihtiyacını gösterin.' },
      { b: '2️⃣ Beş ölçüt (5 dk)',
        m: 'Tahtaya yazdırın: <b>Stil Uyumu · Komut Takibi · Üretkenlik & Detay · K-12 Güvenliği · Karakter Tutarlılığı</b>.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'AI Karakter Kıyaslama Labı (20 bölüm) → Karakter Kıyaslama ve 2. Ay Proje Atölyesi (Tema → Benchmark → Proje Dosyası) → 10 AI model karşılaştırma rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her ekip proje dosyasının <b>tek cümlelik sonucunu</b> okusun: “Bu iş için … modeli daha uygun çünkü …”' }
    ],
    ornekler: [
      { kotu: 'Bu resim daha güzel.', iyi: 'İki çıktıyı 5 ölçütle puanla: stil uyumu, komut takibi, detay, K-12 güvenliği, karakter tutarlılığı.', not: 'Beğeni → ölçüt.' },
      { kotu: 'Robotun eli garip olmuş.', iyi: 'Siberpunk robot mimar görselinde el anatomisini kontrol et; parmak sayısı ve el duruşu istemle uyuyor mu?', not: 'Anatomi testi adlandırıldı.' },
      { kotu: 'İkisi de aynı gibi.', iyi: 'Aynı karakteri iki farklı sahnede üret; yüz ve kostüm tutarlılığını karşılaştırıp farkı yaz.', not: 'Karakter tutarlılığı ölçüldü.' }
    ],
    sorular: [
      'Hangi ölçütte fark en büyük?',
      'İstemdeki hangi detay çizilmemiş?',
      'El, yüz veya yazı bölümünde hata var mı?',
      'Bu iş için hangi aracı seçersin, neden?'
    ],
    ipuclari: [
      'Kıyaslama <b>aynı istemle</b> yapılmalıdır; istem değişirse karşılaştırma geçersizdir.',
      'Ay projesi haftasıdır: 5. haftadaki araştırma soruları ve 4. haftadaki rubrik raporları dosyaya eklensin.',
      'K-12 güvenliği ölçütünde <b>gerçek kişi benzerliği</b> varsa çıktı elenir; bu kuralı tekrar edin.'
    ]
  },

  9: {
    ad: 'Sokratik Oyun Koçu',
    emoji: '🧙‍♂️',
    konu: 'Socratic Questioning — cevap değil ipucu veren AI',
    tekCumle: 'İyi bir koç cevabı vermez, <b>üç kademeli ipucu</b> verir: dikkat → yönlendirme → kritik mantık.',
    neden: [
      'Öğrenci yapay zekâyı “cevap makinesi” olmaktan çıkarıp <b>öğrenme ortağı</b> olarak kurmayı öğrenir.',
      'İpucu merdiveni, akran öğretiminde de doğrudan kullanılabilecek bir öğretme stratejisidir.',
      'Sistem promptu yazmanın (25. hafta) ilk adımıdır: yapay zekâya <b>nasıl davranacağı</b> söylenir.'
    ],
    kazanim: [
      'Doğrudan cevap veren istem ile <b>sokratik istemi</b> ayırt eder.',
      'Üç seviyeli ipucu merdivenini kurar.',
      'Yapay zekâya “cevabı verme, ipucu ver” kuralını yazan istem hazırlar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Cevap mı, ipucu mu? (5 dk)',
        m: 'Bir bilmece sorun. Önce cevabı söyleyin, sonra ipucu verin. Sınıfa sorun: <b>hangisinde daha çok düşündünüz?</b>' },
      { b: '2️⃣ Merdiveni kurun (5 dk)',
        m: '💡 <b>Seviye 1</b> genel gözlem sorusu · 🔍 <b>Seviye 2</b> konum/nesne ipucu · 🎯 <b>Seviye 3</b> kritik mantık. Üçünü tahtaya yazın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Sokratik İpucu Labı (20 bölüm) → Oyun Koçu Tasarım Atölyesi (Oyun Dünyası → Koç Değerlendirme → Sokratik Asistan) → 10 sokratik ipucu rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İkişerli çalıştırın: bir öğrenci koç, diğeri oyuncu. Koç <b>cevabı söylemeden</b> üç ipucuyla yönlendirsin.' }
    ],
    ornekler: [
      { kotu: 'Cevabı söyle: kapı şifresi kaç?', iyi: 'Bana cevabı verme. Önce nereye bakmam gerektiğini soran genel bir ipucu ver.', not: 'Seviye 1 ipucu.' },
      { kotu: 'Hangi bloğu koyayım?', iyi: 'Doğrudan söyleme; hangi iki blok arasında karar verdiğimi sor ve farkı düşündür.', not: 'Seviye 2 yönlendirme.' },
      { kotu: 'Bu soruyu çöz.', iyi: 'Cevabı verme; sadece “hangi işlem önce gelir?” diye sor ve nedenini bana söylet.', not: 'Seviye 3 kritik mantık.' }
    ],
    sorular: [
      'Koç cevabı verdi mi, düşündürdü mü?',
      'Hangi seviyede ipucu yeterli oldu?',
      'İpucu çok açık olursa ne olur?',
      'Kendine bir sokratik koç yazsan ilk kuralı ne olurdu?'
    ],
    ipuclari: [
      '“Cevabı verme” cümlesi istemde <b>açıkça yazılmalıdır</b>; yoksa yapay zekâ doğrudan cevaplar.',
      'Öğrenci koçluk yaparken cevabı ağzından kaçırırsa nazikçe merdivene döndürün; ceza yok.',
      'Bu ders 10. haftadaki hikâye editörünün ve 25. haftadaki sistem promptunun hazırlığıdır.'
    ]
  },

  10: {
    ad: 'Eğlenceli Çizgi Roman & Hikâye Editörü',
    emoji: '📚',
    konu: 'Hikâye unsurları ve diyalog editörlüğü',
    tekCumle: 'Yapay zekâ bir <b>editör</b> gibi kullanılabilir: hikâyenin unsurlarını kontrol eder, diyaloğu canlandırır, espriyi ölçüsünde tutar.',
    neden: [
      'Türkçe dersinin hikâye unsurları (kişi, yer, zaman, olay) doğrudan üretim işine dönüşür.',
      '9. haftadaki sokratik koçluğun devamıdır: yapay zekâya <b>rol ve davranış kuralı</b> verme alışkanlığı pekişir.',
      '2. modüldeki çizgi roman haftalarının (17–20) hazırlık dersidir.'
    ],
    kazanim: [
      'Hikâye unsurlarını istemde <b>ayrı ayrı</b> belirtir.',
      'İki karakterli kısa diyalog yazdırır ve editörlük yapar.',
      'Espriyi K-12 sınırında tutan kural yazar.'
    ],
    nasil: [
      { b: 'ℹ️ İçerik hazırlanıyor',
        m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
      { b: '1️⃣ Unsurları listeleyin (10 dk)',
        m: 'Kişi · Yer · Zaman · Olay. Öğrenciler 1–9. derslerden bir karakter seçip dördünü doldursun.' },
      { b: '2️⃣ Diyalog yazdırın (20 dk)',
        m: 'İki karakterli 6 replikli diyalog istensin. Kural: <b>kaba söz yok, kırıcı espri yok.</b>' },
      { b: '3️⃣ Editör turu (10 dk)',
        m: 'Eşler metni değiştirsin; her öğrenci arkadaşının metnine <b>tek bir geliştirme komutu</b> yazsın.' }
    ],
    ornekler: [
      { kotu: 'Komik bir hikâye yaz.', iyi: 'Kişi: robot mimar. Yer: KüpŞehir. Zaman: gece. Olay: kayıp blok. 6 replikli neşeli diyalog yaz.', not: 'Dört unsur da verildi.' },
      { kotu: 'Daha komik olsun.', iyi: 'Espriyi kelime oyununa dayandır; kimseyle alay etme, kırıcı ifade kullanma.', not: 'Espriye sınır konuldu.' },
      { kotu: 'Uzun oldu.', iyi: 'Her repliği en fazla 12 kelimeye indir; olay akışını koru.', not: 'Ölçülebilir düzenleme.' }
    ],
    sorular: [
      'Hikâyenin dört unsuru metinde var mı?',
      'Diyalog gerçekten iki sesli mi, yoksa tek kişi mi konuşuyor?',
      'Espri kimseyi incitiyor mu?',
      'Arkadaşının metnine hangi tek komutu verirdin?'
    ],
    ipuclari: [
      'Bu hafta içerik gelene kadar 1–9. derslerin karakterleri üzerinden işlenebilir.',
      'Diyalogları saklayın; 17–20. haftalarda çizgi roman karelerine dönüşecek.',
      '“Kırıcı espri yok” kuralını yazılı bir sınıf kuralı hâline getirin.'
    ]
  }
};

/* =========================================================================
   ETKİNLİKLER — ortaokul5/dersN/dersN_M.html dosyalarındaki gerçek adlar,
   gerçek sihirbaz adımları ve gerçek rehber sayfaları.
   Şifreler: ortaokul5/ders_linkleri_ve_sifreleri.md
   ========================================================================= */

var AI_ETKINLIK = {

  1: [
    { ad: 'Oyun Dünyası Görev Parçalama Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Tek parça karmaşık istem ile adım adım parçalanmış istemi ayırma.',
      sayfalar: ['Storybook: 4 görselli “görevi 4 alt adıma bölme” anlatımı', '1–7. Bölüm: 2 seçenekli tek parça vs parçalanmış istem', '8–14. Bölüm: 3–4 seçenekli doğru parçalama sırasını seçme', '15–20. Bölüm: 4–5 seçenekli şampiyon oyun mimarlığı'],
      nasil: 'Storybook’u <b>tahtadan birlikte</b> okuyun. Her bölümde “hangi adım önce gelmeli?” diye sordurun. Şifre: <b>oyunmimarisi</b>' },
    { ad: 'Oyun Dünyası Parçalama Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Grupça oyun evreni seçip görevi 4 alt adıma bölerek istem kurma.',
      sayfalar: ['1. Şablonu İncele (oyun evreni, karakter rolü, görev tipi + canlı önizleme)', '2. Oyununu Seç (BlokDünya Volkan Adası · KüpŞehir Kesir Şehri · Mars Uzay Üssü)', '3. İstemini Yaz & Parçala (4 alt görev, teslim ve şifre modalı)'],
      nasil: 'Grupları 3–4 kişi yapın. Her grup farklı bir evren alsın. <b>Grup temsilcisi 4 alt adımı sırayla okusun.</b> Şifre: <b>haritayapay</b>' },
    { ad: '8 Çeşitli Hobi & Oyun Görev Parçalama Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı farklı hobi alanında hazır parçalanmış istem örnekleri.',
      sayfalar: ['1. Editör Videosu & 4 Alt Adımlı Oyun Formülü', '2. Volkan Adası ve Lav Kaçışı Macerası', '3. Kesir Blok Kasabası ve Pizza Modelleri', '4. Pusulalı Harita ve Yön Bulma', '5. Büyülü Kütüphane Betimlemesi', '6. Siberpunk Oyun Avatarı ve Maskot', '7. Voleybol Servis ve Maç Sahası', '8. Tek Parça İstem vs Parçalanmış İstem'],
      nasil: 'Önce editör sayfasını gösterin. Her kartta <b>“kaç alt adım var?”</b> diye saydırın; bir istemi deftere yazdırın. Şifre: <b>decomposition5</b>' }
  ],

  2: [
    { ad: 'Avatar Hiyerarşi Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Karışık istem ile Zorunlu ➔ Tercih ➔ Kaçınılan sıralı istemi ayırma.',
      sayfalar: ['Storybook: “karışık emirler yerine hiyerarşi” anlatımı (4 görsel)', '1–7. Bölüm: 2 seçenekli karışık vs hiyerarşik istem', '8–14. Bölüm: 3–4 seçenekli zorunlu/kaçınılan kuralı ayırt etme', '15–20. Bölüm: 4–5 seçenekli şampiyon avatar mimarlığı'],
      nasil: 'Her bölümde önce <b>“hangi madde zorunlu?”</b> diye sordurun, sonra seçtirin. Şifre: <b>hiyerarşi</b>' },
    { ad: 'Avatar & Maskot Mimarisi Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Grupça hiyerarşik maskot istemi kurma ve negatif istem yazma.',
      sayfalar: ['1. Şablonu Keşfet 🛠️ (avatar türü, zorunlu kıyafet, tercih aksesuar, kaçınılan detay)', '2. Maskotunu Seç 🎯 (Siberpunk Robot Mimar · Kristal Ejderha Pet · Mars Astronot Kedi)', '3. Hiyerarşik İstem Yaz ✍️ (Zorunlu ➔ Tercih ➔ Kaçınılan, kopyala ve teslim)'],
      nasil: 'Her grup <b>kaçınılan</b> maddesini mutlaka doldursun. Temsilci üç kademeyi ayrı ayrı okusun. Şifre: <b>komutsırası</b>' },
    { ad: '8 Çeşitli Avatar & Maskot Hiyerarşi Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı avatar örneğinde komut hiyerarşisi ve kopyalanabilir istemler.',
      sayfalar: ['1. Editör Videosu & 3 Adımlı Komut Hiyerarşisi Formülü', '2. Siberpunk Robot Mimar Avatarı', '3. KüpŞehir 3D Blok Ustası', '4. Volkan Adası Kristal Ejderhası', '5. Mars Üssü Astronot Kedi', '6. Büyülü Karagöz Gölge Sahnesi', '7. Süper Lig Voleybolcu Maskot', '8. Karışık İstem vs Hiyerarşik İstem'],
      nasil: 'Kartlardaki <b>📋 İstemi Kopyala</b> düğmesini gösterin. Her kartta kaçınılan maddeyi bulup altını çizdirin. Şifre: <b>hierarchy5</b>' }
  ],

  3: [
    { ad: 'Few-Shot Pet Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Rastgele istem ile şablonlu (few-shot) istemi ayırma.',
      sayfalar: ['Storybook: “örnek şablon sunarak tutarlı kart üretme” anlatımı', '1–7. Bölüm: 2 seçenekli rastgele vs şablonlu istem', '8–14. Bölüm: 3–4 seçenekli şablon ögelerini tamamlama', '15–20. Bölüm: 3’lü few-shot istem zinciri kurma'],
      nasil: 'Şablonun beş alanını tahtaya sabitleyin; her bölümde <b>hangi alanın eksik olduğunu</b> söyletin. Şifre: <b>örnekşablon</b>' },
    { ad: 'Efsanevi Pet Mimarisi Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'İki örnek karttan yola çıkarak grupça üçüncü kartı aynı şablonda kurma.',
      sayfalar: ['1. Şablon Keşfi (Kristal Ejderha · Siber Kedi · Galaksi Tilkisi örnekleri)', '2. Pet Tasarımı (element, aksesuar ve yetenek seçimi)', '3. Few-Shot İstem (Örnek 1 + Örnek 2 + Benim Karakterim, teslim modalı)'],
      nasil: 'Grup önce iki örneği okusun, <b>sonra</b> kendi kartını yazsın. Sıra bozulursa şablon tutmaz. Şifre: <b>fewshot5</b>' },
    { ad: '10 Efsanevi Pet Few-Shot Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On hazır pet kartı ve kopyalanabilir few-shot istemleri.',
      sayfalar: ['1. Few-Shot Rehber Videosu & 5 Parçalı Formül', '2. Volkan Adası Kristal Ejderhası', '3. Siberpunk Şehir Kedisi', '4. Altın Ateş Anka Yavrusu', '5. Yıldız Tozu Galaksi Tilkisi', '6. Kristal Kabuklu Kaplumbağa', '7. Pamuk Şeker Bulut Ayısı', '8. Volkan Kıvılcım Kurdu', '9. Buz Sarmalı Penguen', '10. Fırtına Şimşek Kartalı', '11. Element Yeşim Baykuşu'],
      nasil: 'Her kartta beş alanı parmakla saydırın. Bir kartı deftere kopyalatıp <b>tek alanını değiştirtin</b>. Şifre: <b>templatecard</b>' }
  ],

  4: [
    { ad: 'Rubrik Puanlama Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Oyun haritası istemlerini 5 maddelik rubrikle puanlama.',
      sayfalar: ['Storybook: “Rubrik nedir?” + “Nasıl oynarsın?” anlatımı', '1–7. Bölüm: 2 seçenekli düşük/yüksek rubrik puanı tespiti', '8–14. Bölüm: 3 seçenekli en yüksek puanlı haritayı seçme', '15–20. Bölüm: şampiyon rubrik soruları'],
      nasil: 'Doğru cevapta harita görseli açılır. Her seçimden sonra <b>“hangi ölçütten puan aldı?”</b> diye sordurun. Şifre: <b>haritarubrik</b>' },
    { ad: 'Harita Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Takımca tema seçip rubrikle puanlayarak ortak harita istemi yazma.',
      sayfalar: ['1. Tema Seçimi (KüpŞehir Matematiği · Volkan Adası Macerası · Mars Üssü Haritası)', '2. Rubrik Puanlama (5 ölçütle takım puanı)', '3. Takım İstemi (oluşturulan istem + 📋 kopyala + takım rubrik raporu)'],
      nasil: 'Puan verirken <b>gerekçe zorunlu</b> olsun. Rapor ekranda çıkınca en düşük ölçütü birlikte yükseltin. Şifre: <b>rubrik5</b>' },
    { ad: '10 Oyun Haritası Rubrik Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On haritada rubriksiz istem (1/5) ile tam rubrikli istemin (5/5) karşılaştırması.',
      sayfalar: ['1. Rehber & 5 Maddelik Rubrik Formülü', '2. KüpŞehir Matematik Mahallesi', '3. Volkan Adası Macerası', '4. Astronot Mars Üssü Haritası', '5. Robot Yunus Deniz Altı Üssü', '6. Galaksi Tilkisi Sihirli Ormanı', '7. Profesör Panda Bilim Şehri', '8. Astro-Ritim DJ Kuş Festivali', '9. Siberpunk Robot Mimar Şehri', '10. Karagöz Tiyatrosu Haritası', '11. Süper Voleybol Arena Haritası'],
      nasil: 'Her kartta <b>1/5 → 5/5</b> farkını okutun; hangi eklemenin puanı yükselttiğini söyletin. Şifre: <b>mapcheck</b>' }
  ],

  5: [
    { ad: 'Soru Dönüştürücü Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Basit bilgi sorusunu güçlü araştırma sorusuna dönüştürme.',
      sayfalar: ['Storybook: “İyi araştırma sorusu nedir?” (Odaklı · Merak Uyandırıcı · Araştırılabilir)', '1–7. Bölüm: 2 seçenekli zayıf/güçlü soru tespiti', '8–14. Bölüm: 3 seçenekli en iyi araştırma sorusunu seçme', '15–20. Bölüm: şampiyon soru tasarımı'],
      nasil: 'Her bölümde <b>hangi ölçütün eksik olduğunu</b> söyletin. “Nedir?” soruları zayıf sayılır. Şifre: <b>marsarastir</b>' },
    { ad: 'Araştırma Sorusu Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Takımca konu seçip soruları değerlendirerek ortak araştırma sorusu yazma.',
      sayfalar: ['1. Konu Seçimi', '2. Soru Değerlendirme (üç ölçütle puanlama)', '3. Takım Sorusu (nihai soru + teslim ve şifre modalı)'],
      nasil: 'Takım sorusunu yazmadan önce <b>üç ölçütü yüksek sesle</b> okutun. Onaylanmayan soru düzeltilsin. Şifre: <b>soruguru5</b>' },
    { ad: '10 Araştırma Sorusu Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On alanda zayıf soru ile güçlü araştırma sorusunun karşılaştırması.',
      sayfalar: ['1. Rehber & 3 Araştırma Sorusu Kriteri', '2. Uzay ve Mars', '3. Derin Deniz Canlıları', '4. Matematik ve Doğa', '5. Hayvan Davranışları', '6. Mutfak Kimyası', '7. Yapay Zekâ ve Sanat', '8. Müzik ve Beyin', '9. Spor Biyomekaniği', '10. Kültür ve Tarih', '11. Doğa ve Teknoloji'],
      nasil: 'Öğrenciler kendi ilgi alanına en yakın kartı seçip <b>soruyu kendi konusuna uyarlasın</b>. Şifre: <b>soruusta5</b>' }
  ],

  6: [
    { ad: 'Efsane Dedektörü Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Oyun efsanelerini ve bilim iddialarını İKA modeliyle çözümleme.',
      sayfalar: ['Storybook: “İKA Modeli nedir?” (İddia · Kanıtlar · Açıklama)', '1–7. Bölüm: 2 seçenekli efsane/gerçek tespiti', '8–14. Bölüm: 3 seçenekli kanıt gücünü değerlendirme', '15–20. Bölüm: şampiyon kanıt soruları'],
      nasil: 'Her iddiada önce <b>“kanıtı ne?”</b> diye sordurun, sonra seçtirin. Şifre: <b>efsanehav</b>' },
    { ad: 'Efsane Jürisi Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Grupça bir efsaneyi İKA ile puanlayıp gerekçeli jüri kararı verme.',
      sayfalar: ['1. Efsane Seçimi', '2. İKA Puanlama (iddia, kanıt ve açıklama gücü)', '3. Jüri Kararı (gerekçeli karar + teslim ve şifre modalı)'],
      nasil: 'Karar <b>oy çokluğuyla değil kanıt gücüyle</b> verilsin. Temsilci gerekçeyi okusun. Şifre: <b>kanit6</b>' },
    { ad: '10 Oyun Efsanesi İKA Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On yaygın efsanenin kanıt durumunun kart kart incelenmesi.',
      sayfalar: ['1. Rehber & İKA Modeli 3 Bileşeni', '2. “Oyun Oynamak Seni Zeki Yapar”', '3. “Mars’ta Yaşam Kesinlikle Var”', '4. “Yunuslar İnsandan Daha Zeki”', '5. “Müzikle Matematik Daha İyi Öğrenilir”', '6. “Pandalar Evrimsel Bir Hata”', '7. “Yapay Zekâ Gerçek Sanatçıdan İyidir”', '8. “Enerji İçecekleri Performansı Artırır”', '9. “Tilkiler Köpekten 10 Kat Zeki”', '10. “Mozart IQ’yu 10 Puan Artırır”', '11. “İnternetteki Her Bilgi Doğrudur”'],
      nasil: 'Her kartta <b>“kesinlikle, her, en”</b> gibi abartı sözcüklerinin altını çizdirin. Şifre: <b>gercekci6</b>' }
  ],

  7: [
    { ad: 'Kaynak Dedektörü Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'İki–üç kaynak arasından en güvenilir olanı seçme.',
      sayfalar: ['Storybook: “Güvenilirlik Piramidi” — kaynakların 5 seviyesi', '1–7. Bölüm: 2 seçenekli güvenilir kaynak tespiti', '8–14. Bölüm: 3 seçenekli piramitte sıralama', '15–20. Bölüm: şampiyon kaynak soruları'],
      nasil: 'Doğru seçimde görsel kilidi açılır. Her seçimde <b>“hangi ölçütten geçti?”</b> diye sordurun. Şifre: <b>kaynak7</b>' },
    { ad: 'Kaynak İnceleme Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Grupça bir senaryodaki kaynakları analiz edip jüri raporu yazma.',
      sayfalar: ['1. Senaryo Seçimi', '2. Kaynak Analizi (otorite · teyit · şeffaflık)', '3. Jüri Raporu (gerekçeli rapor + teslim ve şifre modalı)'],
      nasil: 'Rapor yazılmadan önce <b>üç ölçütü tek tek</b> işaretletin. Eksik ölçüt varsa rapor tamamlanmasın. Şifre: <b>guven7</b>' },
    { ad: '10 Dijital Kaynak Güvenilirlik Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On kaynak türünün güvenilirlik açısından kart kart değerlendirilmesi.',
      sayfalar: ['1. Rehber & Kaynak Değerlendirme Kriterleri', '2. Resmi Oyun Yapımcı Web Sitesi', '3. Akademik ve Resmi Bilim Siteleri (.edu / .gov)', '4. Doğrulanmış Basın ve Yayın Kuruluşları', '5. Topluluk Ansiklopedileri (Wiki Sayfaları)', '6. Kişisel Bloglar ve Oyuncu Sayfaları', '7. Forumlar ve Kullanıcı Tartışma Grupları', '8. Anonim Sosyal Medya İddiaları', '9. “Ücretsiz Hile/Elmas” Siteleri', '10. Yapay Zekâ Cevapları ve Özetleri', '11. Bağımsız Doğrulama / Teyit Platformları'],
      nasil: 'Kartları güvenilirlik sırasına dizdirin. <b>“Ücretsiz elmas”</b> kartında sınıf kuralını tekrar ettirin. Şifre: <b>bilgiguven7</b>' }
  ],

  8: [
    { ad: 'AI Karakter Kıyaslama Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'İki model çıktısını 5 ölçütle kıyaslayıp üstün olanı seçme.',
      sayfalar: ['Storybook: “5 Karşılaştırma Kriteri” (Stil · Komut Takibi · Üretkenlik & Detay · K-12 Güvenliği · Karakter Tutarlılığı)', '1–7. Bölüm: 2 seçenekli üstün çıktı tespiti', '8–14. Bölüm: 3 seçenekli ölçüt eşleştirme', '15–20. Bölüm: şampiyon benchmark analizi'],
      nasil: 'Her karşılaştırmada <b>tek bir ölçüte</b> odaklandırın; “hangi ölçütte kazandı?” diye sordurun. Şifre: <b>benchmark8</b>' },
    { ad: 'Karakter Kıyaslama ve 2. Ay Proje Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Takımca benchmark yapıp 2. Ay Projesi araştırma dosyasını oluşturma.',
      sayfalar: ['1. Proje Teması', '2. Model Benchmark (5 ölçütle kıyaslama)', '3. Proje Dosyası (Oyun ve Bilim Araştırma Dosyası teslimi + şifre modalı)'],
      nasil: '<b>2. Ay Projesi haftasıdır.</b> 4. haftanın rubrik raporları ve 5. haftanın soruları dosyaya eklensin. Şifre: <b>proje8</b>' },
    { ad: '10 AI Model Karşılaştırma Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On sahnede model çıktılarının ölçüt ölçüt karşılaştırılması.',
      sayfalar: ['1. Rehber & Benchmark Kriterleri', '2. 3D Astronot Kedi (Uzay Üssü)', '3. Robot Yunus Deniz Altı Üssü', '4. Profesör Panda Bilim Şehri', '5. Volkan Adası Küçük Ejderhası', '6. KüpŞehir Voxel Mimar Kedi', '7. Galaksi Tilkisi Sihirli Ormanı', '8. Siberpunk Robot Mimar (El Anatomi Testi)', '9. DJ Kuş Festivali Sahnesi', '10. Süper Voleybol Arenası Sıçrama Pozu', '11. Geleneksel Karagöz Tiyatrosu 3D'],
      nasil: '<b>El anatomi testi</b> kartında parmakları saydırın; yapay zekânın tipik hatasını gösterin. Şifre: <b>modelcheck8</b>' }
  ],

  9: [
    { ad: 'Sokratik İpucu Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Cevabı veren istem ile sokratik ipucu veren istemi ayırma.',
      sayfalar: ['Storybook: “3 Seviyeli İpucu Merdiveni” (Hafif Dokunuş · Yönlendirme · Kritik Mantık)', '1–7. Bölüm: 2 seçenekli cevap/ipucu tespiti', '8–14. Bölüm: 3 seçenekli doğru ipucu seviyesini seçme', '15–20. Bölüm: şampiyon sokratik istem soruları'],
      nasil: 'Her bölümde <b>“bu ipucu cevabı söylüyor mu?”</b> diye sordurun. Şifre: <b>sokratik9</b>' },
    { ad: 'Oyun Koçu Tasarım Atölyesi', sure: '15 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Grupça cevabı vermeyen, üç kademeli ipucu veren AI koçu tasarlama.',
      sayfalar: ['1. Oyun Dünyası', '2. Koç Değerlendirme (ipucu seviyelerini puanlama)', '3. Sokratik Asistan (koç istemi + teslim ve şifre modalı)'],
      nasil: 'Koç isteminde <b>“cevabı verme”</b> cümlesi açıkça yazılsın; yoksa kabul etmeyin. Şifre: <b>koc9</b>' },
    { ad: '10 Sokratik İpucu Rehberi', sure: '10 dk', tur: 'Kapanış · 12 sayfa',
      ne: 'On oyun bulmacasında üç seviyeli ipucu merdiveni örnekleri.',
      sayfalar: ['1. Rehber & 3 Seviyeli İpucu Merdiveni', '2. Mars Üssü Oksijen Kapısı Şifresi', '3. KüpŞehir Kesir Köprüsü', '4. Volkan Adası Gizli Mağara Anahtarı', '5. Robot Yunus Neon Mercan Kapısı', '6. Profesör Panda Slime Kıvamı', '7. Galaksi Tilkisi Yıldız Geçidi', '8. Robot Mimar Kodlama Döngüsü', '9. DJ Kuş Nota Eşleşmesi', '10. Voleybol Arenası Skor Hesabı', '11. Karagöz Gölge Oyunu Dekoru'],
      nasil: 'Kartları ikişerli oynatın: biri koç, biri oyuncu. Koç <b>üç seviyeyi sırayla</b> kullansın. Şifre: <b>ipucu9</b>' }
  ],

  10: [
    { ad: 'Hikâye Editörü Labı', sure: '15–20 dk', tur: 'Bireysel · içerik hazırlanıyor',
      ne: 'Hikâye unsurlarını istemde ayrı ayrı belirtme (içerik hazırlanmaktadır).',
      nasil: 'Etkinlik yayına girene kadar: kişi · yer · zaman · olay dördünü deftere yazdırıp tek cümlelik istem kurdurun.' },
    { ad: 'Çizgi Roman & Diyalog Atölyesi', sure: '15 dk', tur: 'Grup · içerik hazırlanıyor',
      ne: 'İki karakterli neşeli diyalog yazdırma (içerik hazırlanmaktadır).',
      nasil: 'Gruplar 6 replikli diyalog yazsın. Kural: <b>kaba söz yok, kırıcı espri yok.</b>' },
    { ad: 'Hikâye Unsurları Görsel Rehberi', sure: '10 dk', tur: 'Kapanış · içerik hazırlanıyor',
      ne: 'Görsel rehber ve editör turu (içerik hazırlanmaktadır).',
      nasil: 'Eşler metin değiştirsin; herkes arkadaşının metnine <b>tek bir geliştirme komutu</b> yazsın.' }
  ]
};

for (var _d in AI_ETKINLIK) {
  if (AI_DERSLER[_d]) AI_DERSLER[_d].adimlar = AI_ETKINLIK[_d];
}

/* =========================================================================
   EKRAN KULLANIMI — öğrenci ekranda ne yapacak, hangi sırayla?
   (5. sınıfta sesli okuma yoktur, köprü butonları kaldırılmıştır,
    kaydırma çubuğu yoktur.)
   ========================================================================= */

var AI_GENEL_EKRAN = [
  { b: '📖 Storybook’u birlikte okuyun', m: 'Sayfa açılışında 4 görselli ders anlatımı modalı gelir. <b>5. sınıfta sesli okuma butonu yoktur</b>; metni öğrenci okur.' },
  { b: '🔒 Bulanıklık %100 → görsel kilidi', m: 'Doğru cevapta bölüm görselinin bulanıklığı azalır ve kilit açılır. Yanlışta ceza yoktur; “neden böyle düşündün?” diye sordurun.' },
  { b: '🧩 3 adımlı sihirbaz', m: 'Grup atölyeleri üç panelli sihirbazdır: <b>Şablon → Seçim → İstem</b>. Alt şeritteki “Adım 1 / 3” göstergesinden takip edilir.' },
  { b: '📋 İstemi Kopyala', m: 'Oluşan takım istemi kopyalanabilir. İstem <b>deftere de yazdırılsın</b>; ay projesi dosyasında kullanılacak.' },
  { b: '📢 Temsilci sunumu', m: 'Her atölye sonunda grup temsilcisi istemi ve gerekçesini <b>sınıfa sesli sunar.</b>' },
  { b: '❓ Mor “?” Cevapla düğmesi', m: 'Adım sonlarında köprü linki yoktur. Başarı şifresi menüdeki mor <b>?</b> → ✏️ <b>Cevapla</b> düğmesine girilir.' }
];

var AI_EKRAN = {

  1: [
    { b: '1️⃣ Storybook’u açın', m: '4 görselli anlatımı tahtadan okuyun: tek parça istem neden yetmez?' },
    { b: '2️⃣ İstem türünü seçtirin', m: 'Ekranda istem cümlesi ve iki etiket vardır. Öğrenci “tek parça” ya da “parçalanmış” der.' },
    { b: '3️⃣ Sihirbazda evren seçtirin', m: 'Adım 2’de BlokDünya Volkan Adası, KüpŞehir Kesir Şehri veya Mars Uzay Üssü seçilir.' },
    { b: '4️⃣ Dört alt görevi yazdırın', m: 'Adım 3’te grup 4 alt adımı sırayla yazar; canlı önizleme tuvalinde sonucu görür.' },
    { b: '5️⃣ Temsilci okusun', m: 'Teslim modalı açılır; temsilci 4 adımı sırayla okur, sonra şifre görünür.' }
  ],

  2: [
    { b: '1️⃣ Karışık istemi okutun', m: 'Ekrandaki karışık avatar istemini sınıf okusun: hangi emir önce?' },
    { b: '2️⃣ Üç kademeyi işaretletin', m: 'Zorunlu 🔴 · Tercih 🟡 · Kaçınılan 🟢. Her maddeyi bir kademeye yerleştirtin.' },
    { b: '3️⃣ Sihirbazda maskot seçtirin', m: 'Adım 2’de Siberpunk Robot Mimar, Kristal Ejderha Pet veya Mars Astronot Kedi seçilir.' },
    { b: '4️⃣ Kaçınılanı yazdırın', m: 'Adım 3’te <b>kaçınılan</b> alanı boş bırakılmasın: “gerçek insan yüzü yok, karanlık arka plan yok”.' }
  ],

  3: [
    { b: '1️⃣ İki örneği okutun', m: 'Ekrandaki iki hazır pet kartını okutun; ortak şablonu sınıf bulsun.' },
    { b: '2️⃣ Eksik alanı buldurun', m: 'Bölümlerde şablonun hangi alanı boşsa parmakla gösterttirin.' },
    { b: '3️⃣ Sihirbazda pet tasarlatın', m: 'Adım 2’de element, aksesuar ve yetenek seçilir.' },
    { b: '4️⃣ Zinciri kurdurun', m: 'Adım 3’te <b>Örnek 1 + Örnek 2 + Benim Karakterim</b> sırası korunsun.' }
  ],

  4: [
    { b: '1️⃣ Rubriği tanıtın', m: 'Storybook’taki 5 ölçütü tahtaya yazın; ekrandakiyle birebir aynıdır.' },
    { b: '2️⃣ Puan verdirin', m: 'Her bölümde istem okunur, puan seçilir. <b>Gerekçe zorunlu.</b>' },
    { b: '3️⃣ Sihirbazda tema seçtirin', m: 'Adım 1’de KüpŞehir / Volkan Adası / Mars Üssü temalarından biri seçilir.' },
    { b: '4️⃣ Takım raporunu okutun', m: 'Adım 3’te takım istemi ve <b>📊 Takım Rubrik Raporu</b> çıkar; en düşük ölçütü birlikte yükseltin.' }
  ],

  5: [
    { b: '1️⃣ Üç ölçütü tanıtın', m: 'Odak · Merak · Araştırılabilirlik. Storybook’tan birlikte okuyun.' },
    { b: '2️⃣ Soruyu dönüştürtün', m: 'Ekrandaki zayıf soruyu güçlü hâline çeviren seçeneği buldurun.' },
    { b: '3️⃣ Sihirbazda konu seçtirin', m: 'Adım 1’de takım konusunu seçer; Adım 2’de aday soruları puanlar.' },
    { b: '4️⃣ Takım sorusunu yazdırın', m: 'Adım 3’te nihai soru yazılır; <b>üç ölçüt yüksek sesle</b> kontrol edilsin.' }
  ],

  6: [
    { b: '1️⃣ İKA’yı tanıtın', m: 'İddia · Kanıtlar · Açıklama. Storybook’taki üç kutuyu tahtaya çizin.' },
    { b: '2️⃣ Kanıt sordurun', m: 'Her efsanede önce “kanıtı ne?” diye sordurun, sonra seçtirin.' },
    { b: '3️⃣ Sihirbazda efsane seçtirin', m: 'Adım 1’de efsane, Adım 2’de İKA puanlaması yapılır.' },
    { b: '4️⃣ Jüri kararını okutun', m: 'Adım 3’te gerekçeli karar yazılır; <b>kanıt gücü</b> belirleyicidir.' }
  ],

  7: [
    { b: '1️⃣ Piramidi gösterin', m: 'Güvenilirlik piramidinin 5 seviyesini storybook’tan okutun.' },
    { b: '2️⃣ Kaynağı seçtirin', m: 'İki–üç kaynaktan en güvenilirini seçtirin; doğruda görsel kilidi açılır.' },
    { b: '3️⃣ Sihirbazda senaryo seçtirin', m: 'Adım 1’de senaryo, Adım 2’de otorite/teyit/şeffaflık analizi yapılır.' },
    { b: '4️⃣ Jüri raporunu yazdırın', m: 'Adım 3’te rapor yazılır. <b>Kişisel bilgi ve ödül vaadi = dur</b> kuralını tekrarlatın.' }
  ],

  8: [
    { b: '1️⃣ Beş ölçütü tanıtın', m: 'Stil · Komut Takibi · Üretkenlik & Detay · K-12 Güvenliği · Karakter Tutarlılığı.' },
    { b: '2️⃣ İki çıktıyı kıyaslatın', m: 'Her bölümde tek bir ölçüte odaklanın: “hangi ölçütte kazandı?”' },
    { b: '3️⃣ Sihirbazda benchmark yaptırın', m: 'Adım 1’de proje teması, Adım 2’de 5 ölçütlü kıyaslama.' },
    { b: '4️⃣ Proje dosyasını teslim ettirin', m: 'Adım 3’te <b>2. Ay Projesi</b> dosyası oluşur; önceki haftaların çıktıları eklensin.' }
  ],

  9: [
    { b: '1️⃣ Merdiveni tanıtın', m: 'Seviye 1 dikkat · Seviye 2 yönlendirme · Seviye 3 kritik mantık.' },
    { b: '2️⃣ Cevap mı, ipucu mu?', m: 'Her bölümde “bu ipucu cevabı söylüyor mu?” diye sordurun.' },
    { b: '3️⃣ Sihirbazda dünya seçtirin', m: 'Adım 1’de oyun dünyası, Adım 2’de koç değerlendirmesi yapılır.' },
    { b: '4️⃣ Koç istemini yazdırın', m: 'Adım 3’te <b>“cevabı verme”</b> cümlesi istemde açıkça bulunsun.' }
  ],

  10: [
    { b: 'ℹ️ İçerik hazırlanıyor', m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
    { b: '1️⃣ Dört unsuru yazdırın', m: 'Kişi · Yer · Zaman · Olay. 1–9. derslerden bir karakter seçilsin.' },
    { b: '2️⃣ Diyalog yazdırın', m: 'İki karakterli 6 replikli diyalog; kaba söz ve kırıcı espri yok.' },
    { b: '3️⃣ Editör turu yaptırın', m: 'Eşler metin değiştirsin; herkes tek bir geliştirme komutu yazsın.' }
  ]
};

for (var _e in AI_EKRAN) {
  if (AI_DERSLER[_e]) AI_DERSLER[_e].ekran = AI_EKRAN[_e];
}
