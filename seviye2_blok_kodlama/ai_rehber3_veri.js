/* =========================================================================
   AI-GALAXY • İLKOKUL 3 • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : ilkokul3/ders_linkleri_ve_sifreleri.md
   Etkinlik adları ve bölüm başlıkları : ilkokul3/dersN/dersN_M.html
   Uydurulan ders/etkinlik adı yoktur.
   NOT: 3. sınıfta sesli komutlar kaldırılmıştır; metin okuryazarlığı ve
   İSTEMİ GELİŞTİRME–REVİZE ETME ön plandadır.
   ========================================================================= */

var AI_DERSLER = {

  1: {
    ad: 'İstem Mimarisi ve Detaylı Komut Tasarımı',
    emoji: '🏗️',
    konu: 'İstem mimarisi: Rol + Görev + Detay + Format',
    tekCumle: 'İyi bir istem rastgele yazılmaz, <b>inşa edilir</b>: Rol + Görev + Detay + Format. Bu ders yılın taşıyıcı kolonudur.',
    neden: [
      '3. sınıf öğrencisi akıcı okuyup yazabiliyor; artık hazır seçenek seçmek yerine <b>kendi istemini kurabilir</b>.',
      'Dört parçalı yapı, çocuğa bir cümleyi parçalara ayırıp kontrol etme alışkanlığı kazandırır — bu doğrudan bir <b>planlama</b> becerisidir.',
      '“Soru mu, komut mu?” ayrımı, blok kodlamadaki <b>komut</b> kavramının dil tarafındaki karşılığıdır; iki müfredat aynı haftada buluşur.'
    ],
    kazanim: [
      'Soru cümlesi ile <b>komut (görev) cümlesini</b> ayırt eder.',
      'Bir istemi <b>Rol + Görev + Detay + Format</b> olarak dört parçaya ayırır.',
      'Kendi istemini yazar ve yüksek sesle okur.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Dört kutu (5 dk)',
        m: 'Tahtaya dört kutu çizin: <b>ROL · GÖREV · DETAY · FORMAT</b>. Bir örnek doldurun: “bir öğretmen gibi / anlat / Mars’taki suyu / 3 cümlede”. Cümleyi birleştirip okuyun.' },
      { b: '2️⃣ Soru mu, komut mu? (5 dk)',
        m: 'Beş cümle okuyun; sınıf her cümle için <b>“SORU!”</b> ya da <b>“KOMUT!”</b> desin. Komutlarda hangi fiilin geçtiğini yazdırın.' },
      { b: '3️⃣ Etkinlik (20 dk)',
        m: 'Laboratuvar → grup atölyesi → örnek istem rehberi sırasıyla ilerleyin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes dört kutuyu kendi defterinde doldurup <b>tek cümle</b> hâline getirsin. En iyi üçü panoya asılsın.' }
    ],
    ornekler: [
      { kotu: 'Mars’ı anlat.', iyi: 'Bir uzay rehberi gibi, Mars’ta su olup olmadığını 3 kısa cümleyle anlat.', not: 'Rol + görev + detay + uzunluk.' },
      { kotu: 'kedi resmi', iyi: 'Mars’ta keşif yapan, kasklı sevimli bir kedi çiz; çizgi film stilinde olsun.', not: 'Mekân + ayrıntı + stil.' },
      { kotu: 'bilgi ver', iyi: 'Bana ebru sanatını 3 maddelik liste hâlinde anlat.', not: 'Konu + format.' }
    ],
    sorular: [
      'Bu istemde rol var mı? Kim gibi konuşmasını istedik?',
      'Görev hangi kelime? (<i>fiil: anlat, yaz, çiz, listele</i>)',
      'Detay eklersek sonuç neden değişir?',
      'Format söylemezsek yapay zekâ hangi biçimi seçer?'
    ],
    ipuclari: [
      '3. sınıfta <b>sesli okuma desteği kaldırılmıştır</b>; okuma güçlüğü olan öğrenciye siz okuyun, ama cümleyi kendisi yazsın.',
      'Dört kutuyu yıl boyunca panoda tutun; sonraki bütün derslerde bu kutulara yeni öge eklenecek.',
      '“Yanlış” demeyin; <b>“eksik”</b> deyin ve hangi kutunun boş kaldığını sordurun.'
    ]
  },

  2: {
    ad: 'Tek ve Açık Görev',
    emoji: '🎯',
    konu: 'Tek ve açık görev',
    tekCumle: 'Bir istemde <b>tek bir görev</b> olur ve o görev açık yazılır: “Hayvanlar hakkında yaz” değil, “Penguenler hakkında üç kısa bilgi yaz”.',
    neden: [
      'Geniş konu = belirsiz sonuç. Daraltmayı öğrenen çocuk, sonucu kendisi yönetmeye başlar.',
      'Bir isteği tek göreve indirmek, kodlamadaki <b>adım adım komut</b> mantığının dil karşılığıdır.',
      'Açık görev yazmak, Türkçe dersindeki “konuyu sınırlandırma” becerisini doğrudan çalıştırır.'
    ],
    kazanim: [
      'Belirsiz (muğlak) isteği fark eder.',
      'Geniş bir konuyu <b>daraltıp</b> tek göreve indirir.',
      'Görevine sayı ve ayrıntı ekler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Geniş mi, dar mı? (5 dk)',
        m: 'Tahtaya iki cümle yazın: “Hayvanlar hakkında yaz.” / “Penguenler hakkında üç kısa bilgi yaz.” Sınıf farkı söylesin.' },
      { b: '2️⃣ Daraltma alıştırması (5 dk)',
        m: '“Doğa” konusunu birlikte daraltın: doğa → orman → kutup → kutup ayısı → <b>kutup ayısının beslenmesi</b>. Her adımda sonucun nasıl netleştiğini söyleyin.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvarda 20 bölüm, ardından Açık Görev Mimarları Atölyesi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her öğrenci bir geniş konu alıp <b>üç adımda daraltsın</b> ve son hâlini okusun.' }
    ],
    ornekler: [
      { kotu: 'Hayvanlar hakkında yaz.', iyi: 'Penguenler hakkında üç kısa bilgi yaz.', not: 'Konu daraltıldı + sayı eklendi.' },
      { kotu: 'Kutupları anlat ve resim çiz.', iyi: 'Kutup ayısının nasıl beslendiğini 3 cümleyle anlat.', not: 'İki görev ayrıldı.' },
      { kotu: 'Sıfır atık hakkında her şey', iyi: 'Okulda sıfır atık için yapabileceğimiz 4 şeyi madde madde yaz.', not: '“Her şey” yerine sayı ve yer.' }
    ],
    sorular: [
      'Bu istekte kaç tane görev var?',
      'Konu çok mu geniş? Nasıl daraltırız?',
      'Kaç tane bilgi istedik? Gelen kaç tane?',
      'Arkadaşına bu görevi versen ne yapardı?'
    ],
    ipuclari: [
      'Daraltmayı tahtada <b>merdiven</b> gibi çizin; görsel iniş çocukta çok iyi oturuyor.',
      'Grup atölyesinde her gruba farklı bir geniş konu verin ki sonuçlar karşılaştırılabilsin.',
      'Sayı eklemeyi alışkanlık yapın — 4. derste bu konu derinleşecek.'
    ]
  },

  3: {
    ad: 'Promptuma Konu Ekliyorum',
    emoji: '🌌',
    konu: 'Konu ekliyorum',
    tekCumle: 'Her istemin bir <b>konusu</b> vardır. Konuyu söylersek yapay zekâ hangi dünyaya bakacağını bilir.',
    neden: [
      'Konu, sonucu daraltmanın en hızlı yoludur; tek kelimeyle sonucun tamamen değiştiği görülür.',
      'Altı ana kategori (uzay, hayvanlar, doğa, spor, okul, masallar) çocuğa <b>sınıflandırma</b> alışkanlığı kazandırır.',
      'Konu seçimi öğrencinin kendi ilgi alanını fark etmesini sağlar; motivasyonu yükseltir.'
    ],
    kazanim: [
      'Bir istemin konusunu adlandırır.',
      'Altı ana konu kategorisini tanır.',
      'Aynı görevi farklı konulara taşıyıp sonucu karşılaştırır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı kahraman, farklı konu (5 dk)',
        m: 'Tahtaya “bir kedi çiz” yazın. Sırayla ekleyin: <i>uzayda</i>, <i>ormanda</i>, <i>spor sahasında</i>. Her eklemede sınıf hayalindeki resmi anlatsın.' },
      { b: '2️⃣ Altı kategori (5 dk)',
        m: 'Uzay · Hayvanlar · Doğa · Spor · Okul · Masallar. Her kategoriye sınıfça birer örnek istem yazın.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Konu Mimarları Atölyesi → örnek istem rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her öğrenci bir kategori seçip <b>tek cümlelik</b> istemini yazsın ve okusun.' }
    ],
    ornekler: [
      { kotu: 'Bir sera anlat.', iyi: 'Uzay istasyonunda kurulan bir seranın nasıl çalıştığını 3 cümleyle anlat.', not: 'Konu: uzay.' },
      { kotu: 'Takım yaz.', iyi: 'Şampiyonlar spor kulübünün antrenman programını 4 maddede yaz.', not: 'Konu: spor + format.' },
      { kotu: 'masal', iyi: 'Masallar diyarındaki uçan halının hikâyesini kısa bir masal olarak yaz.', not: 'Konu + biçim.' }
    ],
    sorular: [
      'Bu istemin konusu hangi kategoride?',
      'Aynı görevi başka bir konuya taşısak ne değişir?',
      'Konu söylemezsek yapay zekâ nereden başlar?',
      'Hangi kategori sana en yakın geliyor? Neden?'
    ],
    ipuclari: [
      'Altı kategoriyi panoya asın; sonraki derslerde “bugün hangi konudan yazıyoruz?” diye kullanın.',
      'Grup atölyesinde çıkan beklenmedik eşleşmeleri silmeyin — <b>hata değil, keşif</b>.',
      'Görsel üretim yavaşsa beklerken sınıfa “sizce ne çıkacak?” diye tahmin ettirin.'
    ]
  },

  4: {
    ad: 'Uzunluğu ve Formatı Belirliyorum (1. Ay Şampiyonluğu)',
    emoji: '📏',
    konu: 'Uzunluğu belirliyorum',
    tekCumle: 'Cevabın <b>ne kadar uzun</b> ve <b>hangi biçimde</b> olacağını biz söyleriz. Sınır koymak, sonucu okunabilir yapar.',
    neden: [
      'Sınırsız cevap 3. sınıf öğrencisi için okunamayacak kadar uzun olur; sınır koymak sonucu kullanılabilir kılar.',
      'Sayma ve ölçme matematik dersiyle birleşir: cevabı sayarak kontrol ederiz.',
      'Bu hafta aynı zamanda <b>1. Ay Şampiyonluğu</b>dur: ilk dört dersin ögeleri tek istemde birleşir.'
    ],
    kazanim: [
      'İsteme cümle / madde / kelime sınırı ekler.',
      'Dört temel uzunluk formatını tanır.',
      'Gelen cevabı sayarak sınıra uyup uymadığını denetler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kaç cümle? (5 dk)',
        m: 'Bir öğrenciye “tatilini anlat” deyin, sonra “tatilini <b>2 cümleyle</b> anlat” deyin. İkisini karşılaştırın.' },
      { b: '2️⃣ Dört format (5 dk)',
        m: '1 cümlelik öz yanıt · 3 maddelik liste · kısa hikâye · 5 anahtar kelime. Dördünü tahtaya yazıp örnekleyin.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Format Terzileri Atölyesi → uzunluk rehberi.' },
      { b: '4️⃣ Kapanış — Ay şampiyonluğu (5 dk)',
        m: 'Herkes <b>Rol + Görev + Konu + Uzunluk</b> içeren tek bir istem yazsın. Sınıf en iyisini oylasın.' }
    ],
    ornekler: [
      { kotu: 'Geometriyi anlat.', iyi: 'Üçgen ve kareyi 1 cümlede karşılaştır.', not: 'Tek cümle sınırı.' },
      { kotu: 'Spor hakkında yaz.', iyi: 'Basketbolun 3 temel kuralını madde madde yaz.', not: 'Madde sayısı.' },
      { kotu: 'Uzun bir hikâye yaz.', iyi: 'Kutup ayısı hakkında kısa bir hikâye yaz; 5 cümleyi geçmesin.', not: 'Biçim + üst sınır.' }
    ],
    sorular: [
      'Kaç cümle istedik? Gelen kaç cümle?',
      'Liste ile düz yazının farkı ne?',
      '5 anahtar kelime ne işimize yarar?',
      'Sınır koymazsak ne olur?'
    ],
    ipuclari: [
      'Sayarken cümle sonlarındaki <b>noktayı</b> gösterin; noktalama bilgisi pekişir.',
      '3. sınıf için pratik ölçü: <b>3–5 cümle</b> ya da <b>3–5 madde</b>.',
      'Sınıra uymayan cevabı silmeyin; “nasıl kısaltırız?” diye birlikte düzelttirin.'
    ]
  },

  5: {
    ad: 'Nasıl Olsun? — Sıfat ve Anlatım Tonu Ekliyorum',
    emoji: '🎭',
    konu: 'Sıfat ve anlatım tonu',
    tekCumle: 'Aynı bilgi <b>altı farklı tonda</b> anlatılabilir. “Nasıl olsun?” sorusu anlatımın havasını seçmektir.',
    neden: [
      'Ton seçmek çocuğun sıfat dağarcığını hızla büyütür; Türkçe dersinin sıfat konusuyla birebir örtüşür.',
      'Aynı cümlenin farklı tonlarını duymak empati ve üslup farkındalığı geliştirir.',
      'Ton, sonucu değiştiren en görünür ayardır; sebep–sonuç ilişkisi anında fark edilir.'
    ],
    kazanim: [
      'Bir anlatımın tonunu adlandırır.',
      'İsteme uygun sıfatlar ekler.',
      'Aynı konuyu iki farklı tonda yazdırıp farkı açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı cümle, altı ton (5 dk)',
        m: '“Bugün hava yağmurlu.” cümlesini sırayla <b>eğlenceli, merak uyandırıcı, sakin, komik, bilgilendirici</b> okuyun; sınıf tonu tahmin etsin.' },
      { b: '2️⃣ Ton–ders eşleşmesi (5 dk)',
        m: 'Etkinlikteki eşleşmeyi tanıtın: Matematik → eğlenceli, Fen → merak uyandırıcı, Hayat Bilgisi → sakin, Beden Eğitimi → coşkulu, Görsel Sanatlar → estetik, Müzik → ritmik.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Ton Harfi Seç Atölyesi → 8 dersli ton rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her öğrenci bir ton seçip cümlesini <b>o tonda</b> okusun; sınıf tonu tahmin etsin.' }
    ],
    ornekler: [
      { kotu: 'Güneş sistemini anlat.', iyi: 'Güneş sistemini merak uyandırıcı bir tonda, 3 cümleyle anlat.', not: 'Ton + sınır.' },
      { kotu: 'Şekilleri anlat.', iyi: 'Üçgen ve kareyi eğlenceli ve komik bir tonda, kısa bir masalla anlat.', not: 'İki sıfat + biçim.' },
      { kotu: 'Ebru sanatı', iyi: 'Ebru sanatını estetik ve sakin bir tonda, çocuklara uygun kelimelerle anlat.', not: 'Ton + hedef kitle sezgisi.' }
    ],
    sorular: [
      'Bu metin hangi tonda yazılmış? Nereden anladın?',
      'Aynı bilgiyi komik tonda istesek ne değişir?',
      'Hangi sıfatlar “sakin” hissettirir?',
      'Ton söylemezsek yapay zekâ hangi tonu seçer?'
    ],
    ipuclari: [
      'Tonu <b>önce siz canlandırın</b>; duymadan seçmek zordur.',
      'Ton ile ses yüksekliğini karıştıran olursa düzeltin: ton <b>üsluptur</b>, bağırmak değildir.',
      'Bulunan her yeni sıfatı tahtaya yazıp sınıf sıfat panosu oluşturun.'
    ]
  },

  6: {
    ad: 'Kimin İçin? — Hedef Kitle Ekliyorum',
    emoji: '👥',
    konu: 'Hedef kitle ekliyorum',
    tekCumle: 'Anlatımı <b>kime</b> yaptığımızı söylersek yapay zekâ doğru kelimeleri ve doğru zorluğu seçer.',
    neden: [
      'Hedef kitle düşünmek, karşısındakini hesaba katma alışkanlığıdır; sosyal beceriyi doğrudan besler.',
      'Aynı bilgiyi sadeleştirmek, çocuğun konuyu gerçekten anlayıp anlamadığını ortaya çıkarır.',
      'Aynı metnin “1. sınıfa” ve “uzman bilim insanına” hâlini karşılaştırmak, <b>dil düzeyi</b> kavramını somutlaştırır.'
    ],
    kazanim: [
      'İsteme dinleyici ekler.',
      'Zor kelimeleri hedef kitleye göre sadeleştirir.',
      'Aynı konunun iki farklı seviyedeki anlatımını karşılaştırır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kime anlatıyorum? (5 dk)',
        m: 'Bir öğrenciye aynı olayı önce <b>1. sınıf kardeşine</b>, sonra <b>bir bilim insanına</b> anlattırın. Farkı sınıfça bulun.' },
      { b: '2️⃣ Kelime sadeleştirme (5 dk)',
        m: 'Zor bir kelime yazın (“fotosentez”, “yerçekimi”). <b>“Bunu 1. sınıf anlar mı?”</b> diye sorun ve birlikte sadeleştirin.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Hedef Kitle Çarkı Atölyesi → 8 dersli yaş karşılaştırma rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her öğrenci bir dinleyici seçsin: <b>“Ben bunu … anlatacağım.”</b> ve cümlesini ona göre yazsın.' }
    ],
    ornekler: [
      { kotu: 'Maddenin hallerini anlat.', iyi: 'Maddenin hallerini 1. sınıf öğrencisinin anlayacağı şekilde 3 cümleyle anlat.', not: 'Dinleyici + sınır.' },
      { kotu: 'Gezegenleri yaz.', iyi: 'Gezegenleri uzman bir bilim insanına anlatır gibi, terimleriyle birlikte listele.', not: 'Seviye yükseltildi.' },
      { kotu: 'Trafik kurallarını anlat.', iyi: 'Trafik kurallarını Türkçe bilmeyen turist bir arkadaşa anlatır gibi, çok basit cümlelerle yaz.', not: 'Hedef kitle + sadelik.' }
    ],
    sorular: [
      'Bu cevabı kim okuyacak?',
      'Bu kelimeyi 1. sınıf anlar mı? Nasıl söylerdik?',
      'Uzmana yazarken ne değişti?',
      'Dinleyiciyi söylemezsek ne olur?'
    ],
    ipuclari: [
      '“1. sınıf öğrencisine anlat” kalıbını panoya asın; yılın en çok işe yarayan cümlesidir.',
      'Sadeleştirmeyi öğrencinin kendi kelimeleriyle yaptırın; siz yazmayın.',
      'İki farklı seviyedeki metni yan yana okutmak, farkı en hızlı gösteren yoldur.'
    ]
  },

  7: {
    ad: 'Çıktı Biçimi — İstenen Formatta Yanıt Alıyorum',
    emoji: '📋',
    konu: 'Çıktı biçimi',
    tekCumle: 'Cevabın <b>biçimini</b> biz seçeriz: liste mi, tablo mu, bilmece mi, diyalog mu, soru-cevap mı?',
    neden: [
      'Biçim seçmek aynı bilgiyi farklı kalıplara dökmeyi öğretir — metin türleri konusunu doğrudan destekler.',
      'Tablo ve liste, bilgiyi düzenleme becerisidir; ders çalışırken de kullanılır.',
      'Biçim, sonucun görünüşünü değiştirir; çocuk sayfa düzeni farkındalığı kazanır.'
    ],
    kazanim: [
      'İsteme biçim ekler.',
      'Altı çıktı biçimini görünüşünden tanır.',
      'Aynı bilgiyi iki farklı biçimde isteyip karşılaştırır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Biçim tahmini (5 dk)',
        m: 'Dört metni okuyun: bir liste, bir bilmece, bir diyalog, bir tablo satırı. Çocuklar biçimi adlandırsın.' },
      { b: '2️⃣ Görünüşe dikkat (5 dk)',
        m: 'Tahtada listeyi alt alta, diyaloğu karşılıklı, tabloyu sütunlu yazın. <b>Biçim gözle de ayırt edilir.</b>' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Sihirli Format Macera Hikâyesi (6 engel) → 8 dersli format rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Aynı konuyu iki biçimde isteyin (önce tablo, sonra masal) ve sonuçları yan yana okutun.' }
    ],
    ornekler: [
      { kotu: 'Çarpım tablosunu anlat.', iyi: 'Çarpım tablosunun 3’lü sırasını renkli bir tablo hâlinde yaz.', not: 'Biçim: tablo.' },
      { kotu: 'Gezegen bilgisi ver.', iyi: 'Cevabı “Mars” olan gizemli bir bilmece yaz.', not: 'Biçim: bilmece + cevap belirtildi.' },
      { kotu: 'Trafik anlat.', iyi: 'Trafik kurallarını iki karakterin konuştuğu kısa bir tiyatro diyaloğu olarak yaz.', not: 'Biçim: diyalog.' }
    ],
    sorular: [
      'Bu yazı hangi biçimde? Nereden anladın?',
      'Aynı bilgiyi tablo yerine hikâye olarak istesek ne değişir?',
      'Hangi biçim ders çalışırken daha çok işine yarar?',
      'Diyalogda kaç kişi konuşuyor?'
    ],
    ipuclari: [
      'Biçim menüsünü (📋 📊 📖 🧩 ❓ 💬) panoya asın; sonraki derslerde referans olur.',
      'Tablo isteyen istemlerde “kaç sütun?” diye sordurun; sınır alışkanlığı sürsün.',
      'Macera hikâyesindeki 6 engeli gruplara sırayla dağıtın; herkes bir engel çözsün.'
    ]
  },

  8: {
    ad: 'Kurallar Ekliyorum & 2. Ay Şampiyonluğu',
    emoji: '🛡️',
    konu: 'Kurallar ekliyorum',
    tekCumle: 'İsteme <b>kural</b> ekleriz: uzunluk sınırı, güvenli üslup, basit kelime. Kural koymak sonucu bize uygun hâle getirir.',
    neden: [
      'Kural koymak, öğrencinin sonucu denetlemesidir; “gelen neyse odur” alışkanlığını kırar.',
      '“Korkutucu ifadeler kullanma” bir <b>güvenlik</b> konusudur ve yıl boyu geçerli sınıf kuralı olmalıdır.',
      'Kural ve sınır, blok kodlamadaki <b>koşul</b> kavramının dil tarafındaki ilk hâlidir — bu hafta iki müfredat yine buluşur.'
    ],
    kazanim: [
      'İsteme uzunluk, üslup ve sadelik kuralı ekler.',
      'Kuralsız ve kurallı istemin sonucunu karşılaştırır.',
      'Güvenli olmayan bir isteği fark eder ve düzeltir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kuralsız vs kurallı (5 dk)',
        m: 'Aynı isteği iki kez yazın; ikincisine üç kural ekleyin: <b>3 cümleyi geçmesin · korkutucu olmasın · basit kelimeler kullan.</b> Farkı konuşun.' },
      { b: '2️⃣ Hata istasyonları (5 dk)',
        m: 'Etkinlikteki beş hatayı tanıtın: çok uzun · korkutucu · üniversite dilinde · İngilizce terimli · karmakarışık liste. Her hataya bir düzeltme kuralı bulun.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Kural Dedektifleri ve Kod Fabrikası → şampiyon istem rehberi.' },
      { b: '4️⃣ Kapanış — 2. Ay Şampiyonluğu (5 dk)',
        m: 'Herkes <b>yedi bileşenli</b> (rol, görev, konu, uzunluk, ton, hedef kitle, kural) tek bir şampiyon istem yazsın.' }
    ],
    ornekler: [
      { kotu: 'Bir masal yaz.', iyi: 'Kısa bir masal yaz; 3 cümleyi geçmesin ve korkutucu olmasın.', not: 'Uzunluk + güvenlik kuralı.' },
      { kotu: 'Maddenin hallerini anlat.', iyi: 'Maddenin hallerini basit kelimelerle anlat; zor terim kullanma.', not: 'Sadelik kuralı.' },
      { kotu: 'Sporları listele.', iyi: 'Takım sporlarını en fazla 3 madde hâlinde, sıkıcı olmadan listele.', not: 'Madde sınırı + üslup.' }
    ],
    sorular: [
      'Bu istemde kaç kural var?',
      'Hangi istekler güvenli değildir? Neden?',
      'Kuralsız ve kurallı sonuç arasındaki fark ne?',
      'Sınıfımızın kuralları var; yapay zekânın neden olmasın?'
    ],
    ipuclari: [
      'Kural sayısını 3’te tutun; fazlası 3. sınıfta cümleyi karmaşıklaştırır.',
      '“Korkutucu şeyler istemeyiz” cümlesini panoya asıp yıl boyu tekrar ettirin.',
      'Şampiyon istemleri saklayın; 12. haftadaki rozet töreninde tekrar kullanılacak.'
    ]
  },

  9: {
    ad: 'Promptumu Geliştiriyorum — Eksik Ayrıntıyı Bul',
    emoji: '🔍',
    konu: 'Eksik ayrıntıyı bul',
    tekCumle: 'Sonuç istediğimiz gibi değilse istemde bir <b>eksik</b> vardır. Dört soruyla eksiği bulup tamamlarız.',
    neden: [
      'Yıl boyunca öğrenilen bütün ögeler bu derste bir <b>kontrol listesine</b> dönüşür.',
      '“Hata değil, eksik” bakışı çocuğun denemekten korkmamasını sağlar.',
      'Eksiği bulmak, kendi çalışmasını gözden geçirme (öz değerlendirme) becerisidir.'
    ],
    kazanim: [
      'Bir istemdeki eksik ögeyi adlandırır.',
      'Dört geliştirme sorusunu sırayla uygular.',
      'İstemin önce ve sonra hâlini karşılaştırıp farkı açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Bana bir hikâye yaz.” (5 dk)',
        m: 'Tahtaya sadece bu cümleyi yazın. Sınıf ne eksik olduğunu bulsun: kim? nerede? nasıl? kaç cümle?' },
      { b: '2️⃣ Dört soru panosu (5 dk)',
        m: 'Panoya asın: <b>KAHRAMAN KİM? · NEREDE GEÇİYOR? · NASIL OLSUN? · KAÇ CÜMLE?</b> Her eksik istemde sırayla sordurun.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → Eksik İpucu Avcıları ve Gizemli Kasa (6 kasa) → geliştirilmiş istem rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İlk ve son hâli yan yana okutun: <b>fark öğrencinin kendi eseridir.</b>' }
    ],
    ornekler: [
      { kotu: 'Geometri anlat.', iyi: 'Üçgen ve dörtgenin farkını, 3. sınıf öğrencisine 3 cümleyle, eğlenceli bir tonda anlat.', not: 'Konu + kitle + sayı + ton.' },
      { kotu: 'Gezegenleri yaz.', iyi: 'Güneş sistemindeki gezegenleri sıralı bir liste hâlinde, en fazla 8 madde yaz.', not: 'Biçim + sınır.' },
      { kotu: 'Ebru anlat.', iyi: 'Ebru sanatının nasıl yapıldığını 4 adımda, basit kelimelerle anlat.', not: 'Adım sayısı + sadelik.' }
    ],
    sorular: [
      'Bu istemde ne eksik?',
      'Kahraman kim? Nerede geçiyor? Nasıl olsun? Kaç cümle?',
      'Eksiği ekleyince sonuç nasıl değişti?',
      'Kendi cümlende bir eksik bulabilir misin?'
    ],
    ipuclari: [
      'Dört soruyu her derste tekrar ettirin; yıl sonuna kadar ezberlensin.',
      'Öğrencinin ilk denemesini silmeyin; karşılaştırma malzemesidir.',
      '“Yanlış” kelimesini kullanmayın; <b>“eksik”</b> deyin.'
    ]
  },

  10: {
    ad: 'İlk Sonuç Her Zaman Son Sonuç Değildir',
    emoji: '🔁',
    konu: 'Revize komutları',
    tekCumle: 'İlk sonuç son sonuç değildir: beğenmediğimizde <b>ne değişeceğini söyleyerek</b> revize ederiz.',
    neden: [
      'Revize etme, 3. sınıf müfredatının ayırt edici becerisidir: öğrenci artık sonucu düzeltmeyi öğrenir.',
      '“Daha iyi yap” değil, <b>“şunu şöyle değiştir”</b> demek ölçülebilir bir istektir.',
      'Yeniden deneme alışkanlığı, ilk sonuçta durmayı bırakmayı sağlar.'
    ],
    kazanim: [
      'Beğenmediği sonucu <b>revize komutu</b> ile düzeltir.',
      'Neyin değişeceğini açıkça yazar.',
      'Önceki ve sonraki sonucu karşılaştırır.'
    ],
    nasil: [
      { b: 'ℹ️ İçerik hazırlanıyor',
        m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
      { b: '1️⃣ Eski istemini aç (10 dk)',
        m: 'Öğrenciler 1–9. derslerden birindeki istemini bulup sonucu tekrar üretsin.' },
      { b: '2️⃣ Üç revize komutu yazdırın (20 dk)',
        m: 'Tahtaya örnek verin: <i>“Hikâyeyi daha komik yap.” · “Cümleleri kısalt.” · “Kahramanın adını değiştir.”</i> Herkes kendi metnine üç revize uygulasın.' },
      { b: '3️⃣ Önce–sonra sergisi (10 dk)',
        m: 'İlk ve son hâli yan yana panoya asın; sınıf farkı konuşsun.' }
    ],
    ornekler: [
      { kotu: 'Beğenmedim, tekrar yaz.', iyi: 'Aynı hikâyeyi yaz ama daha komik olsun ve 3 cümleyi geçmesin.', not: '<b>Ne</b> değişecek, açıkça yazıldı.' },
      { kotu: 'Daha iyi olsun.', iyi: 'Cümleleri kısalt ve zor kelimeleri basitleriyle değiştir.', not: 'Ölçülebilir istek.' },
      { kotu: 'Karakter hoşuma gitmedi.', iyi: 'Kahramanın adını “Pamuk” yap ve onu bir kutup ayısı olarak anlat.', not: 'Somut değişiklik.' }
    ],
    sorular: [
      'Sonucun neresini beğenmedin?',
      'Neyi değiştirmesini isteyeceksin? Tek cümleyle söyle.',
      'İlk hâli ile son hâli arasında ne fark var?',
      '“Daha iyi yap” demek neden yetmez?'
    ],
    ipuclari: [
      '“Daha iyi yap” cümlesini yasaklayın; öğrenci <b>neyin</b> değişeceğini yazsın.',
      'Bu hafta içerik gelene kadar 1–9. derslerin özeti olarak işlenebilir.',
      'Revize edilmiş metinleri saklayın; 12. haftadaki rozet töreninde kullanılacak.'
    ]
  }
};

/* =========================================================================
   ETKİNLİKLER — ilkokul3/dersN/dersN_M.html dosyalarındaki gerçek adlar
   ve gerçek bölüm başlıkları.
   ========================================================================= */

var AI_ETKINLIK = {

  1: [
    { ad: 'Komut mu, Soru mu?', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Soru ile komutu ayırma ve açık komut verme mantığını kurma.',
      sayfalar: ['1. Adım: Soru Nedir?', '2. Adım: Komut (Görev) Nedir?', '3. Adım: Neden Açık Komut Veriyoruz?', '4. Adım: 20 Bölümlü Dedektiflik Oyunu'],
      nasil: 'İlk üç adımı <b>tahtadan birlikte</b> okuyun. 20 bölüm bireysel yapılır; <b>sınıf süresine göre 10–12 bölüm yeterlidir.</b>' },
    { ad: 'İstem Mimarları Grup Atölyesi', sure: '15 dk', tur: 'Grup · rol + görev seçimi',
      ne: 'Grupça rol ve görev seçip 3 maddelik özgür fikir ekleyerek istem kurma.',
      sayfalar: ['Mars Kaşifi Kedi Macerası', 'Çevreci Robot Sıfır Atık Projesi', 'Geleneksel Ebru Sanatı', 'Berrak Denizler & Yunus Kaptan', 'Akıllı Şehir & Dikey Ormanlar'],
      nasil: 'Grupları 3–4 kişi yapın. Her grup rolü ve görevi seçer, üç maddelik fikrini yazar. <b>Grup temsilcisi cümleyi sesli okur.</b> Sonunda başarı şifresi çıkar.' },
    { ad: 'Kopyalanabilir Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · editör rehberi',
      ne: 'AI-Galaxy editörünün kullanımı ve beş hazır örnek istem.',
      sayfalar: ['AI-Galaxy Editörü Nasıl Kullanılır?', 'Kutup Ayıları Macerası', 'Sıfır Atık Projesi', 'Ebru Sanatı & Lale Motifi', 'Berrak Denizler & Yunus Kaptan'],
      nasil: 'Önce editör sayfasını gösterin. Her örnekte <b>“bu istem neyi söylüyor?”</b> diye çözümletin; bir istemi deftere yazdırın.' }
  ],

  2: [
    { ad: 'Tek ve Açık Görev', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Belirsiz isteği tanıma ve tek açık göreve indirme.',
      sayfalar: ['1. Adım: Belirsiz (Muğlak) İstek Nedir?', '2. Adım: Tek ve Açık Görev Nedir?', '3. Adım: Neden Açık Görev Veriyoruz?', '4. Adım: 20 Bölümlü Görev Dedektifliği'],
      nasil: '1–3. adımları birlikte okuyun. Her belirsiz istekte sınıf <b>“ne eksik?”</b> diye cevap versin.' },
    { ad: 'Açık Görev Mimarları Atölyesi', sure: '15 dk', tur: 'Grup · görev daraltma',
      ne: 'Geniş konuyu daraltıp grupça tek açık görev yazma.',
      sayfalar: ['Penguenler Macerası', 'Kutup Ayıları Koruma Projesi', 'Doğa Dostu Sıfır Atık Okulu', 'Geleneksel Ebru Sanatı Lale Motifi', 'Deniz Biyoloğu Yunus Kaptan'],
      nasil: 'Her gruba farklı bir macera verin. Grup, konuyu <b>üç adımda daraltıp</b> tek görev cümlesini yazsın; sonuçlar yan yana okunsun.' },
    { ad: 'Tek ve Açık Görev Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 5 örnek',
      ne: 'Beş farklı konuda tek ve açık görev örnekleri.',
      sayfalar: ['Editör Rehberi & Tek ve Açık Görev Formülü', 'Penguenler İçin Tek ve Açık Görev', 'Kutup Ayısı İçin Tek ve Açık Görev', 'Sıfır Atık Okulu İçin Tek ve Açık Görev', 'Ebru Sanatı İçin Tek ve Açık Görev'],
      nasil: 'Formülü panoya yazın, bir örneği deftere kopyalatın.' }
  ],

  3: [
    { ad: 'Konu Ekliyorum', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'İstemdeki konuyu tanıma ve altı ana kategoriyi ayırt etme.',
      sayfalar: ['1. Adım: Promptta Konu Nedir?', '2. Adım: 6 Ana Konu Kategorimiz', '3. Adım: Neden Konu Ekliyoruz?', '4. Adım: 20 Bölümlü Konu Dedektifliği'],
      nasil: 'Altı kategoriyi sınıfça sayın ve panoya yazın. Her bölümde önce <b>konuyu adlandırtın</b>, sonra seçtirin.' },
    { ad: 'Konu Mimarları Atölyesi', sure: '15 dk', tur: 'Grup · konu seçimi',
      ne: 'Farklı konu evrenlerinde grupça istem kurma.',
      sayfalar: ['Uzay Serası Macerası', 'Doğa Dostu Sıfır Atık Projesi', 'Şampiyonlar Spor Kulübü', 'Masallar Diyarı Uçan Halı', 'Deniz Biyoloğu Yunus Kaptan'],
      nasil: 'Her grup bir evren seçsin. Aynı görevi farklı evrenlerde yazdırıp <b>sonuçları karşılaştırın</b>.' },
    { ad: 'Konu Eklenmiş Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 5 konu',
      ne: 'Uzay, doğa, spor, masal konularında hazır istem örnekleri.',
      sayfalar: ['Editör Rehberi & Konu Ekleme Formülü', 'Uzay Konulu Örnek Komut', 'Doğa & Çevre Konulu Örnek Komut', 'Spor & Takım Oyunu Konulu Örnek Komut', 'Masallar Konulu Örnek Komut'],
      nasil: 'Her örnekte konuyu kırmızıyla işaretletin; konu değişince ne değiştiğini konuşun.' }
  ],

  4: [
    { ad: 'Uzunluğu Belirliyorum', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Yanıt uzunluğunu ve formatını belirleme.',
      sayfalar: ['1. Adım: Yanıt Uzunluğu ve Formatı Nedir?', '2. Adım: 4 Temel Uzunluk Formatımız', '3. Adım: Neden Uzunluk Belirleriz?', '4. Adım: 20 Bölümlü Prompt Metre Oyunu'],
      nasil: 'Gelen her cevabı <b>sayarak</b> denetletin. Sayı tutmuyorsa “istediğimiz kaçtı?” diye sorun.' },
    { ad: 'Format Terzileri Atölyesi', sure: '15 dk', tur: 'Grup · format seçimi',
      ne: 'Grupça uzunluk ve format seçip istemi ona göre dikme.',
      sayfalar: ['Uzay Serası Macerası', 'Doğa Dostu Sıfır Atık Okulu', 'Şampiyonlar Spor Kulübü', 'Masallar Diyarı Uçan Halı', 'Kutup Ayıları ve Penguenler'],
      nasil: 'Her grup farklı bir format seçsin (1 cümle / 3 madde / kısa hikâye / 5 kelime). Sonuçları yan yana okuyup <b>hangisinin daha kullanışlı</b> olduğunu tartıştırın.' },
    { ad: 'Uzunluğu Belirlenmiş Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 4 format',
      ne: 'Dört temel uzunluk formatının hazır örnekleri.',
      sayfalar: ['Editör Rehberi & Uzunluk Formülü', 'Bir Cümlelik Öz Yanıt Formatı', 'Üç Maddelik Liste Formatı', 'Kısa Hikâye Formatı', 'Beş Anahtar Kelime Önerisi Formatı'],
      nasil: 'Dört formatı panoya asın; yıl boyunca “bugün hangi format?” diye kullanın.' }
  ],

  5: [
    { ad: 'Sıfat ve Ton Ekliyorum', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Altı anlatım tonunu tanıma ve isteme uygun sıfat ekleme.',
      sayfalar: ['1. Adım: Sıfat ve Anlatım Tonu Nedir?', '2. Adım: 6 Renkli Anlatım Tonumuz', '3. Adım: Neden Ton Ekleriz?', '4. Adım: 20 Bölümlü Ton Dedektifliği'],
      nasil: 'Her tonu <b>önce siz canlandırarak</b> okuyun, sonra öğrenci eşleştirsin. Bu dramatizasyon dersin kalbidir.' },
    { ad: 'Ton Harfi Seç Atölyesi', sure: '15 dk', tur: 'Grup · ton + ders eşleşmesi',
      ne: 'Harf seçerek bir derse uygun anlatım tonunu belirleme.',
      sayfalar: ['E — Matematik Şekiller Masalı', 'M — Fen Bilimleri Güneş Sistemi', 'S — Hayat Bilgisi Deniz & Doğa', 'K — Türkçe & Gölge Oyunu Drama', 'B — Görsel Sanatlar & Ebru', 'Ç — Müzik & Orff Ritimleri'],
      nasil: 'Her grup bir harf çeker ve o tonda cümlesini <b>canlandırarak</b> okur; sınıf tonu tahmin eder.' },
    { ad: '8 Ders Anlatım Tonlu Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 8 ders',
      ne: 'Sekiz farklı derste ton kullanımının hazır örnekleri.',
      sayfalar: ['Matematik (Komik & Eğlenceli)', 'Fen Bilimleri (Merak Uyandırıcı)', 'Hayat Bilgisi (Sakin & Huzurlu)', 'Türkçe & Drama (Çocuklara Uygun)', 'Beden Eğitimi (Coşkulu)', 'Görsel Sanatlar (Estetik)', 'Müzik (Ritmik)'],
      nasil: 'Kendi branş dersinize uygun sayfayı açıp örneği deftere yazdırın.' }
  ],

  6: [
    { ad: 'Hedef Kitle Ekliyorum', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Anlatımın kime yapıldığını belirleme ve dil düzeyini ayarlama.',
      sayfalar: ['1. Adım: Hedef Kitle Nedir?', '2. Adım: Farklı Hedef Kitle Örneklerimiz', '3. Adım: Neden Hedef Kitle Ekleriz?', '4. Adım: 20 Bölümlü Hedef Kitle Oyunu'],
      nasil: 'Her bölümde <b>“bunu 1. sınıf anlar mı?”</b> sorusunu tekrarlayın; anlaşılmayan kelimeleri birlikte sadeleştirin.' },
    { ad: 'Hedef Kitle Çarkı Atölyesi', sure: '15 dk', tur: 'Grup · dinleyici çarkı',
      ne: 'Çarkla dinleyici seçip anlatımı o kitleye göre yazma.',
      sayfalar: ['1. Sınıf Öğrencisine — Matematik Şekilleri', 'Küçük Çocuğa — Güneş ve Gezegenler', 'Uzman Bilim İnsanına — Maddenin Halleri', 'Turist Arkadaşa — Trafik Kuralları', 'Spor Takımına — Oyun ve Pas Hareketleri', 'Sanat Sever Çocuklara — Ebru & Renk Çarkı'],
      nasil: 'Her grup bir dinleyici çeker; cümlesini <b>o dinleyiciymiş gibi</b> başka bir gruba okur. Anlaşıldıysa puan.' },
    { ad: '8 Ders & Yaş Karşılaştırma Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · karşılaştırma',
      ne: 'Aynı konunun farklı yaş gruplarına göre anlatımı.',
      sayfalar: ['Matematik (1. Sınıf Öğrencisine)', 'Fen (Küçük Bir Çocuğa)', 'Fen Karşılaştırması (Uzman Bilim İnsanına)', 'Hayat Bilgisi (Turist Arkadaşa)', 'Türkçe & Drama (Anaokulu Miniklerine)', 'Beden Eğitimi (Minik Sporculara)', 'Görsel Sanatlar (Sanat Kulübüne)'],
      nasil: 'İki farklı seviyedeki metni <b>yan yana</b> okutun; fark en hızlı böyle görülür.' }
  ],

  7: [
    { ad: 'Çıktı Biçimi Ekliyorum', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Altı çıktı formatını tanıma ve isteme ekleme.',
      sayfalar: ['1. Adım: Çıktı Biçimi Nedir?', '2. Adım: 6 Harika Çıktı Formatımız', '3. Adım: Neden Çıktı Biçimi Belirleriz?', '4. Adım: 20 Bölümlü Çıktı Biçimi Oyunu'],
      nasil: 'Her biçimi önce <b>siz örnekleyin</b>; listenin alt alta, diyaloğun karşılıklı, tablonun sütunlu olduğunu ekranda gösterin.' },
    { ad: 'Sihirli Format Macera Hikâyesi', sure: '15–20 dk', tur: 'Grup · 6 engelli macera',
      ne: 'Altı engeli doğru formatı seçerek aşma oyunu.',
      sayfalar: ['1. Engel: Sihirli Mağara Kapısı', '2. Engel: Kırmızı Asma Köprü', '3. Engel: Sihirli Şato Kapısı', '4. Engel: Sarmaşık Ormanı', '5. Engel: Kurtarma Gemisi', '6. Engel: Hazine Sandığı'],
      nasil: 'Altı engeli gruplara sırayla dağıtın; her grup bir engeli çözsün. <b>Her engelde hangi formatın seçildiğini sınıfa söyletin.</b>' },
    { ad: '8 Ders Çıktı Formatlı Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 7 format',
      ne: 'Tablo, bilmece, diyalog, soru-cevap, masal, liste formatlarının hazır örnekleri.',
      sayfalar: ['Matematik (Renkli Tablo)', 'Fen Bilimleri (Gizemli Bilmece)', 'Hayat Bilgisi & Drama (Tiyatro Diyaloğu)', 'Türkçe (Soru-Cevap Yarışma)', 'Görsel Sanatlar (Masal Hikâyesi)', 'Beden Eğitimi (Özet Liste)', 'Müzik (Ritim Tablosu)'],
      nasil: 'Biçim menüsünü panoya asın; sonraki derslerde referans olsun.' }
  ],

  8: [
    { ad: 'Kurallar Ekliyorum', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Uzunluk, güvenlik ve sadelik kurallarını isteme ekleme.',
      sayfalar: ['1. Adım: Kural Eklemek Nedir?', '2. Adım: Temel Kural Türlerimiz', '3. Adım: Kuralsız vs Kurallı İstem Farkı', '4. Adım: 20 Bölümlü Kural Oyunu'],
      nasil: '3. adım bir <b>güvenlik</b> konusudur: “Yapay zekâdan korkutucu şeyler istemeyiz” cümlesini sınıf kuralı yapın.' },
    { ad: 'Kural Dedektifleri ve Kod Fabrikası', sure: '15–20 dk', tur: 'Grup · 6 hata istasyonu',
      ne: 'Bozuk yanıtları doğru kuralı ekleyerek düzeltme.',
      sayfalar: ['1. İstasyon: Çok Uzun Yazdı (Kod 101)', '2. İstasyon: Korkutucu Konuştu (Kod 102)', '3. İstasyon: Üniversite Dilinde Yazdı (Kod 103)', '4. İstasyon: İngilizce Terim Karıştırdı (Kod 104)', '5. İstasyon: Karmakarışık Liste Üretti (Kod 105)', '6. Şampiyonluk İstasyonu: Kuralsız vs Kurallı'],
      nasil: 'Her gruba bir istasyon verin. Grup hatayı okur, <b>hangi kuralın eksik olduğunu</b> bulur ve düzeltilmiş istemi yazar.' },
    { ad: '8 Ders Kurallı Şampiyon Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 7 bileşen',
      ne: 'Yedi bileşenli şampiyon istem formülü ve ders örnekleri.',
      sayfalar: ['Editör Rehberi & 7 Bileşenli Şampiyon Formülü', 'Matematik (3 Cümle Sınırı)', 'Fen (Güvenli Üslup)', 'Hayat Bilgisi (Basit Kelimeler)', 'Türkçe (Zor Terim Olmasın)', 'Görsel Sanatlar (En Fazla 3 Madde)', 'Beden Eğitimi (Sıkıcı Olmama)', '2. Ay Şampiyonluk Görevi'],
      nasil: 'Yedi bileşeni panoya asın; ay şampiyonluğu istemleri bu formüle göre yazılsın.' }
  ],

  9: [
    { ad: 'Eksik Ayrıntıyı Bul', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Eksik istemi tanıma ve dört geliştirme sorusuyla tamamlama.',
      sayfalar: ['1. Adım: Eksik Prompt Nedir?', '2. Adım: 4 Geliştirme Sorusu', '3. Adım: Eksik vs Tamamlanmış İstem', '4. Adım: 20 Bölümlü Eksik Ayrıntı Oyunu'],
      nasil: 'Dört soruyu panoya asın ve her bölümde sırayla sordurun: <b>KİM? NEREDE? NASIL? KAÇ CÜMLE?</b>' },
    { ad: 'Eksik İpucu Avcıları ve Gizemli Kasa', sure: '15 dk', tur: 'Grup · 6 kasa',
      ne: 'Bozuk istemleri dört ipucuyla tamamlayıp kasaları açma.',
      sayfalar: ['1. Kasa: “Bana bir hikâye yaz.”', '2. Kasa', '3. Kasa', '4. Kasa', '5. Kasa', '6. Şampiyon Kasa: Bozuk vs Tamamlanmış İstem'],
      nasil: 'Her gruba bir kasa verin. Grup eksiği bulur, tamamlar ve şifreyi açar. <b>Önce/sonra farkını tahtaya yazın.</b>' },
    { ad: '8 Ders Geliştirilmiş Örnek Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · önce/sonra',
      ne: 'Eksik istemlerin dört soruyla tamamlanmış hâlleri.',
      sayfalar: ['Matematik: “Geometri anlat” ➔ Tamamlandı', 'Fen: “Gezegenleri yaz” ➔ Tamamlandı', 'Hayat Bilgisi: “Trafik anlat” ➔ Tamamlandı', 'Türkçe: “Kelime sor” ➔ Tamamlandı', 'Görsel Sanatlar: “Ebru anlat” ➔ Tamamlandı', 'Beden Eğitimi: “Spor kuralı yaz” ➔ Tamamlandı'],
      nasil: 'Kapanışta <b>“bugün hangi soruyu sormayı öğrendik?”</b> diye özetletin.' }
  ],

  10: [
    { ad: '10.1 Laboratuvar', sure: '15 dk', tur: 'Bireysel · hazırlanıyor',
      ne: 'Bireysel laboratuvar adımı (içerik hazırlanmaktadır).',
      nasil: 'İçerik yayınlanana kadar öğrenciler 1–9. derslerden birindeki istemini açıp <b>revize komutlarıyla</b> geliştirsin.' },
    { ad: '10.2 Grup Etkinliği', sure: '15 dk', tur: 'Grup · hazırlanıyor',
      ne: 'Grup atölyesi (içerik hazırlanmaktadır).',
      nasil: 'Gruplar yedi bileşenli formülle bir istem yazsın, sonra <b>üç revize komutu</b> uygulayıp sonucu iyileştirsin.' },
    { ad: '10.3 Görsel Rehber', sure: '10 dk', tur: 'Kapanış · hazırlanıyor',
      ne: 'Görsel rehber ve sunum (içerik hazırlanmaktadır).',
      nasil: 'Önce–sonra sergisi yapın: ilk ve revize edilmiş metinler yan yana panoya asılsın.' }
  ]
};

for (var _d in AI_ETKINLIK) {
  if (AI_DERSLER[_d]) AI_DERSLER[_d].adimlar = AI_ETKINLIK[_d];
}

/* =========================================================================
   EKRAN KULLANIMI — öğrenci ekranda ne yapacak, hangi sırayla?
   (3. sınıfta sesli komut yoktur; okuma ve yazma esastır.)
   ========================================================================= */

var AI_GENEL_EKRAN = [
  { b: '📖 Görevi oku', m: 'Üstteki şeritte o bölümün görevi yazar. <b>3. sınıfta sesli okuma desteği kaldırılmıştır</b>; metni öğrenci kendisi okur, gerekirse siz yüksek sesle okuyun.' },
  { b: '👆 Seçeneklerden seç', m: 'Alttaki kartlardan doğru olanı tıklar. Yanlış seçimde “neden böyle düşündün?” diye sordurun.' },
  { b: '⌨️ Kendi istemini yaz', m: 'Etkinliklerde <b>serbest yazma kutuları</b> vardır. Hazır seçenekle yetinmeyin; öğrenci kendi cümlesini yazsın.' },
  { b: '🔄 Sonucu revize et', m: '3. sınıfın ayırt edici becerisi budur: beğenilmeyen sonuç için <b>ne değişeceğini</b> söyleyen yeni bir komut yazdırın.' },
  { b: '🔑 Bölüm şifresi', m: 'Etkinliğin sonunda başarı şifresi çıkar. Şifreler ders listesinde yazılıdır; sınıfa duyurmadan önce görevin bittiğinden emin olun.' },
  { b: '📊 İlerleme çubuğu', m: '20 bölümün tamamı zorunlu değildir; <b>sınıf süresine göre 10–12 bölüm yeterlidir.</b>' }
];

var AI_EKRAN = {

  1: [
    { b: '1️⃣ Dört kutuyu tanıtın', m: 'Ekranda istem <b>Rol + Görev + Detay + Format</b> olarak parçalara ayrılır. Her parçayı tahtadaki kutularla eşleştirin.' },
    { b: '2️⃣ Soru mu, komut mu?', m: 'Öğrenci her cümle için iki karttan birini seçer. Sınıfça hep bir ağızdan cevap verdirin.' },
    { b: '3️⃣ Açık komuta çevirtin', m: '3. adımda kapalı bir istek açık hâle getirilir; eksik olan genelde <b>detay</b> ya da <b>format</b>tır.' },
    { b: '4️⃣ Grup atölyesinde rol seçtirin', m: 'Grup önce rolü, sonra görevi seçer; ardından üç maddelik özgür fikrini <b>yazar</b>.' },
    { b: '5️⃣ Temsilci okusun', m: 'Grup temsilcisi tamamlanan istemi sesli okur; sonunda başarı şifresi görünür.' }
  ],

  2: [
    { b: '1️⃣ Belirsiz isteği gösterin', m: 'Ekrandaki muğlak cümleyi okutun: <b>“Hayvanlar hakkında yaz.”</b> Sınıf ne eksik olduğunu söylesin.' },
    { b: '2️⃣ Daraltmayı seçtirin', m: 'Öğrenci daraltılmış seçeneği tıklar; her seçimde sonucun nasıl netleştiğini konuşun.' },
    { b: '3️⃣ Atölyede macera seçtirin', m: 'Grup bir macera seçer ve tek görev cümlesini yazar.' },
    { b: '4️⃣ Cümleleri yan yana okutun', m: 'Grupların cümlelerini karşılaştırıp <b>en açık olanını</b> oylatın.' }
  ],

  3: [
    { b: '1️⃣ Konuyu adlandırtın', m: 'Ekranda altı kategori vardır. Önce konuyu sınıfa söyletin, sonra seçtirin.' },
    { b: '2️⃣ Evrenleri karşılaştırın', m: '“Doğa ve masal evrenleri” bölümünde iki görseli yan yana koyup farkı konuşturun.' },
    { b: '3️⃣ Atölyede evren seçtirin', m: 'Grup bir evren seçip aynı görevi o evrende yazar.' },
    { b: '4️⃣ Aynı görev, farklı konu', m: 'İki grubun cümlesini yan yana okutun: <b>tek kelime sonucu nasıl değiştirdi?</b>' }
  ],

  4: [
    { b: '1️⃣ Formatı seçtirin', m: 'Ekranda dört format vardır: 1 cümle / 3 madde / kısa hikâye / 5 kelime.' },
    { b: '2️⃣ Gelen cevabı SAYDIRIN', m: 'Sınıfça sayın. İstenen sayı ile gelen sayı tutuyor mu?' },
    { b: '3️⃣ Terzi atölyesinde ölçü alın', m: 'Grup formatı seçer ve istemi ona göre “diker”.' },
    { b: '4️⃣ Ay şampiyonluğunu yaptırın', m: 'Kapanışta dört ögeyi (rol, görev, konu, uzunluk) içeren tek istem yazdırın.' }
  ],

  5: [
    { b: '1️⃣ Tonu siz canlandırın', m: 'Cümleyi <b>önce siz o tonda okuyun</b>, sonra ekrandaki eşleştirmeyi yaptırın.' },
    { b: '2️⃣ Altı tonu tanıtın', m: 'Eğlenceli, merak uyandırıcı, sakin, komik, bilgilendirici, çocuklara uygun.' },
    { b: '3️⃣ Harf çektirin', m: 'Atölyede grup bir harf seçer; harf bir ton–ders eşleşmesini açar.' },
    { b: '4️⃣ Canlandırarak okutun', m: 'Grup cümlesini o tonda okur; sınıf tonu tahmin eder.' }
  ],

  6: [
    { b: '1️⃣ Dinleyiciyi tanıtın', m: '1. sınıf öğrencisi, küçük çocuk, uzman bilim insanı, turist arkadaş.' },
    { b: '2️⃣ İki anlatımı karşılaştırın', m: 'Aynı bilginin iki farklı seviyedeki hâlini okutun: <b>“Hangisi 1. sınıf için?”</b>' },
    { b: '3️⃣ Çarkı çevirtin', m: 'Atölyede hedef kitle çarkı döner; her frekans farklı bir dinleyicidir.' },
    { b: '4️⃣ Zor kelimeleri sadeleştirtin', m: 'Anlaşılmayan kelimeleri öğrenci kendi kelimeleriyle değiştirsin.' }
  ],

  7: [
    { b: '1️⃣ Biçimi örnekleyin', m: 'Liste, tablo, hikâye, bilmece, soru-cevap, diyalog. Her birini önce siz okuyun.' },
    { b: '2️⃣ Görünüşe dikkat çektirin', m: 'Listenin alt alta, diyaloğun karşılıklı, tablonun sütunlu olduğunu parmakla gösterin.' },
    { b: '3️⃣ Macerada engelleri açtırın', m: 'Altı engelin her biri doğru format seçilince açılır; grup hangi formatı seçtiğini söylesin.' },
    { b: '4️⃣ İki biçimi karşılaştırın', m: 'Aynı bilgiyi tablo ve masal olarak isteyip yan yana okutun.' }
  ],

  8: [
    { b: '1️⃣ Kuralı okutun', m: 'Ekrandaki kural türlerini sınıfça yüksek sesle tekrar ettirin.' },
    { b: '2️⃣ Güvenlik kuralını vurgulayın', m: '“Korkutucu ifadeler kullanma” bölümünü <b>sınıf kuralı</b> hâline getirin.' },
    { b: '3️⃣ Hata istasyonlarını dağıtın', m: 'Her grup bir bozuk yanıtı okur ve hangi kuralın eksik olduğunu bulur.' },
    { b: '4️⃣ Kuralsız vs kurallı', m: 'Son istasyonda iki sonucu yan yana koyup <b>hangisi daha güvenli ve net?</b> diye oylatın.' }
  ],

  9: [
    { b: '1️⃣ Bozuk istemi okutun', m: '<b>“Bana bir hikâye yaz.”</b> Sınıf ne eksik olduğunu bulur.' },
    { b: '2️⃣ Dört soruyu sordurun', m: 'Kahraman kim? Nerede geçiyor? Nasıl olsun? Kaç cümle olsun?' },
    { b: '3️⃣ Kasaları açtırın', m: 'Her kasa, eksik tamamlanınca açılır; grup şifreyi bulur.' },
    { b: '4️⃣ Önce–sonra karşılaştırın', m: 'Tamamlanan istemi ilk hâliyle yan yana okutun.' }
  ],

  10: [
    { b: 'ℹ️ İçerik hazırlanıyor', m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
    { b: '1️⃣ Eski istemini aç', m: 'Öğrenci 1–9. derslerden birindeki istemini bulup sonucu tekrar üretir.' },
    { b: '2️⃣ Üç revize komutu yaz', m: '“Daha komik yap.” · “Cümleleri kısalt.” · “Kahramanın adını değiştir.”' },
    { b: '3️⃣ Önce–sonra sergisi', m: 'İlk ve son hâli yan yana panoya asın; sınıf farkı konuşsun.' }
  ]
};

for (var _e in AI_EKRAN) {
  if (AI_DERSLER[_e]) AI_DERSLER[_e].ekran = AI_EKRAN[_e];
}
