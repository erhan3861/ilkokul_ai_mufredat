/* =========================================================================
   AI-GALAXY • İLKOKUL 4 • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : ilkokul4/ders_linkleri_ve_sifreleri.md
   Ders kurgusu ve bölümler        : ilkokul4/dersN/dersN_ozet.md
   Etkinlik adları                 : ilkokul4/dersN/dersN_M.html gerçek başlıkları
   Uydurulan ders/etkinlik adı yoktur.
   NOT: 4. sınıfta sesli okuma butonları kaldırılmıştır. Maarif Modeli 4. sınıf
   konuları (Kayaçlar, Basamak Değeri, Kültürel Miras, Atasözleri…) derslere
   entegre edilmiştir; AÇIK GÖREV İSTEMİ MİMARİSİ ve GÖRSEL ÜRETİM esastır.
   ========================================================================= */

var AI_DERSLER = {

  1: {
    ad: 'Komut mu, Soru mu? — İstem ve Soru Arasındaki Fark',
    emoji: '🧭',
    konu: 'Soru cümlesi vs açık görev komutu',
    tekCumle: 'Soru sormak bilgi ister, <b>açık görev komutu</b> ise iş yaptırır. 4. sınıf yılının tamamı bu ayrımın üzerine kurulur.',
    neden: [
      '4. sınıf öğrencisi akıcı okuyup yazabiliyor; artık hazır şık seçmek yerine <b>kendi görev komutunu</b> kurabilir.',
      '“Kayaç nedir?” ile “Bir jeolog gibi kayaç türlerini 3 maddede anlat” arasındaki fark, sonucun tamamını değiştirir; sebep–sonuç anında görülür.',
      'Komut kavramı blok kodlamanın da temelidir; bu hafta iki müfredat aynı kelimede buluşur.'
    ],
    kazanim: [
      'Düz soru cümlesi ile <b>açık görev komutunu</b> ayırt eder.',
      'Bir görev komutunda <b>fiili</b> (anlat, yaz, çiz, listele) bulur.',
      'Kendi açık görev komutunu yazar ve sesli okur.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — İki cümle (5 dk)',
        m: 'Tahtaya yan yana yazın: <b>“Kayaç nedir?”</b> · <b>“Bir jeolog gibi kayaç türlerini 3 maddede anlat.”</b> Sınıf farkı söylesin.' },
      { b: '2️⃣ Soru mu, komut mu? (5 dk)',
        m: 'Beş cümle okuyun; sınıf her cümlede <b>“SORU!”</b> ya da <b>“KOMUT!”</b> desin. Komutlarda hangi fiilin geçtiğini yazdırın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Hibrit Çark grup çalışması → 8 sayfalık görsel & komut rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes bir Maarif konusu seçip <b>tek cümlelik açık görev komutunu</b> defterine yazsın; en iyi üçü panoya asılsın.' }
    ],
    ornekler: [
      { kotu: 'Kayaç nedir?', iyi: 'Bir jeolog gibi, kayaç türlerini ve fosillerin nasıl oluştuğunu 3 maddede anlat.', not: 'Rol + görev + konu + sayı.' },
      { kotu: 'Basamak değeri anlat.', iyi: '6 basamaklı bir sayının basamak değerlerini tablo hâlinde göster.', not: 'Görev + format.' },
      { kotu: 'ebru resmi', iyi: 'Geleneksel Türk ebru sanatıyla yapılmış lale motifli bir görsel çiz; renkler canlı olsun.', not: 'Konu + ayrıntı + görsel isteği.' }
    ],
    sorular: [
      'Bu cümle soru mu, komut mu? Nereden anladın?',
      'Görev hangi kelime? (<i>fiil: anlat, yaz, çiz, listele</i>)',
      'Rol eklersek cevap nasıl değişir?',
      '“Kayaç nedir?” sorusuna gelen cevabı derste kullanabilir miyiz?'
    ],
    ipuclari: [
      '4. sınıfta <b>sesli okuma butonları kaldırılmıştır</b>; okuma güçlüğü olan öğrenciye siz okuyun, ama cümleyi kendisi yazsın.',
      'Storybook modalı dersin anlatımıdır; <b>atlanmasın</b>, tahtadan birlikte okunsun.',
      '20 bölümün tamamı zorunlu değildir; sınıf süresine göre <b>10–12 bölüm</b> yeterlidir.'
    ]
  },

  2: {
    ad: 'Tek ve Açık Görev',
    emoji: '🎯',
    konu: 'Tek ve açık görev mimarisi',
    tekCumle: 'Bir istemde <b>tek bir görev</b> olur ve o görev açık yazılır: “Besinleri anlat” değil, “Protein içeren 4 besini tablo hâlinde yaz”.',
    neden: [
      'Belirsiz istek = belirsiz sonuç. Görevi tek ve açık yazmak, sonucu öğrencinin yönetmesini sağlar.',
      'Bir isteği tek göreve indirmek, kodlamadaki <b>adım adım komut</b> mantığının dil karşılığıdır.',
      'Türkçe dersindeki “konuyu sınırlandırma” ve “ana fikir” becerileri doğrudan çalışır.'
    ],
    kazanim: [
      'Belirsiz (muğlak) isteği fark eder.',
      'İçinde iki iş bulunan isteği <b>tek göreve</b> ayırır.',
      'Görevine sayı, yer ve ayrıntı ekleyerek açık hâle getirir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Belirsiz mi, açık mı? (5 dk)',
        m: 'Tahtaya yazın: <b>“Besinler nedir?”</b> / <b>“Protein içeren 4 besini tablo hâlinde yaz.”</b> Sınıf hangisinin daha kullanışlı olduğunu söylesin.' },
      { b: '2️⃣ İki görevi ayırın (5 dk)',
        m: '“Yönleri anlat ve pusula çiz” cümlesini <b>iki ayrı isteme</b> bölün. Her birinin sonucu ayrı ayrı ne olur, konuşun.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Hibrit Çark & Açık Görev Stüdyosu → 8 sayfalık açık görev rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her öğrenci geniş bir konuyu <b>üç adımda daraltıp</b> son hâlini okusun.' }
    ],
    ornekler: [
      { kotu: 'Besinler nedir?', iyi: 'Protein içeren 4 besini ve faydalarını tablo hâlinde yaz.', not: 'Sayı + format eklendi.' },
      { kotu: 'Yönleri anlat ve pusula çiz.', iyi: 'Ana ve ara yönleri 4 maddede açıkla.', not: 'İki görev ayrıldı, biri seçildi.' },
      { kotu: 'Toplama işlemi hakkında yaz.', iyi: '4 basamaklı eldeli toplama işlemini örnekle adım adım anlat.', not: 'Konu daraltıldı + adım istendi.' }
    ],
    sorular: [
      'Bu istekte kaç tane görev var?',
      'Hangi kelime belirsiz? Nasıl netleştiririz?',
      'Kaç tane bilgi istedik? Gelen kaç tane?',
      'Bu görevi arkadaşına versen ne yapardı?'
    ],
    ipuclari: [
      'Daraltmayı tahtada <b>merdiven</b> gibi çizin; görsel iniş 4. sınıfta da çok iyi çalışıyor.',
      'Çark istasyonlarını gruplara farklı dağıtın ki sonuçlar karşılaştırılabilsin.',
      '<b>Grup temsilcisi</b> şampiyon komutu sesli okusun; sunum becerisi bu derste başlar.'
    ]
  },

  3: {
    ad: 'Promptuma Konu Ekliyorum',
    emoji: '🪨',
    konu: 'Konu odaklı istem',
    tekCumle: 'Her istemin bir <b>konusu</b> vardır. Konuyu ders adıyla birlikte söylersek yapay zekâ hangi bilgiye bakacağını bilir.',
    neden: [
      'Konu, sonucu daraltmanın en hızlı yoludur; tek kelime sonucu tamamen değiştirir.',
      '4. sınıfta konu artık “uzay/hayvanlar” gibi geniş başlık değil, <b>gerçek ders konusudur</b>: yer kabuğu, çıkarma işlemi, çini sanatı.',
      'Konu seçimi öğrencinin derslerle yapay zekâ arasında köprü kurmasını sağlar.'
    ],
    kazanim: [
      'Bir istemin konusunu <b>ders adıyla</b> adlandırır.',
      'Konusuz istem ile konu odaklı istemi karşılaştırır.',
      'Aynı görevi farklı ders konularına taşıyıp sonucu karşılaştırır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Konusuz istem (5 dk)',
        m: 'Tahtaya <b>“Bana bir şeyler anlat.”</b> yazın. Sınıf ne çıkacağını tahmin etsin; sonra konuyu birlikte ekleyin.' },
      { b: '2️⃣ Ders konusunu yazdırın (5 dk)',
        m: 'Altı Maarif konusu sayın: Yer Kabuğu · Çıkarma İşlemi · Kültürel Değerler · Şiir ve Dörtlük · Mozaik Sanatı · Engelli Koşu. Her birine birer istem yazın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Hibrit Çark & Konu Mimarisi → 8 sayfalık konu odaklı istem rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes bir ders konusu seçip <b>tek cümlelik</b> konu odaklı istemini yazsın ve okusun.' }
    ],
    ornekler: [
      { kotu: 'Bana bir şeyler anlat.', iyi: 'Yer kabuğunun katmanlarını ve bor madenini 3 cümleyle anlat.', not: 'Konu: Fen Bilimleri.' },
      { kotu: 'Matematik anlat.', iyi: 'Zihinden çıkarma işlemi için 3 pratik yöntemi madde madde yaz.', not: 'Konu daraltıldı + sayı.' },
      { kotu: 'Sanat yaz.', iyi: 'Geleneksel çini sanatındaki lale motifini ve renklerini kısa bir paragrafta tanıt.', not: 'Konu + biçim.' }
    ],
    sorular: [
      'Bu istemin konusu hangi ders?',
      'Konuyu söylemezsek yapay zekâ nereden başlar?',
      'Aynı görevi başka bir derse taşısak ne değişir?',
      'Bu konu bu hafta hangi dersimizde geçiyor?'
    ],
    ipuclari: [
      'Haftanın Maarif konularını panoya asın; “bugün hangi konudan yazıyoruz?” diye kullanın.',
      'Konuyu istemde <b>kırmızıyla işaretletin</b>; hangi kelimenin sonucu değiştirdiği görünür olsun.',
      'Görsel üretim yavaşsa beklerken sınıfa “sizce ne çıkacak?” diye tahmin ettirin.'
    ]
  },

  4: {
    ad: 'Rol Veriyorum',
    emoji: '🎓',
    konu: 'Uzman rolü',
    tekCumle: 'Yapay zekâya <b>kim gibi</b> konuşacağını söylersek cevabın dili, örnekleri ve derinliği değişir.',
    neden: [
      'Rol vermek, cevabın uzmanlık düzeyini ayarlamanın en kolay yoludur: “bir bilim insanı gibi” ile “bir masalcı gibi” aynı konuyu apayrı anlatır.',
      'Uzman rolleri (kimyager, tarihçi, heykeltıraş, antrenör) çocuğa <b>meslek farkındalığı</b> kazandırır.',
      'Rol, istem mimarisinin birinci parçasıdır; 6. derste dört bileşen birleşirken bu ders temel olacaktır.'
    ],
    kazanim: [
      'İsteme <b>uzman rolü</b> ekler.',
      'Rolsüz ve rollü istemin sonucunu karşılaştırır.',
      'Konusuna uygun rolü kendisi seçer.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kim gibi? (5 dk)',
        m: '“Maddenin hallerini anlat” cümlesini üç kez okuyun: <b>bir bilim insanı gibi · bir masalcı gibi · bir spor spikeri gibi.</b> Sınıf farkı söylesin.' },
      { b: '2️⃣ Rol eşleştirme (5 dk)',
        m: 'Konu–rol eşleştirin: Maddenin nitelikleri → kimyager · Millî Mücadele → tarihçi · Kil heykel → heykeltıraş · Basketbol → antrenör.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Uzman Rol Stüdyosu → 8 sayfalık uzman rolü rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes bir rol seçip cümlesini <b>o rolün ağzından</b> okusun; sınıf rolü tahmin etsin.' }
    ],
    ornekler: [
      { kotu: 'Maddenin hallerini anlat.', iyi: 'Bir kimyager gibi, katı-sıvı-gaz hâllerini 3 örnekle anlat.', not: 'Rol + sayı.' },
      { kotu: 'Millî Mücadele hakkında yaz.', iyi: 'Bir tarihçi gibi, Millî Mücadele kahramanlarımızı kısa bir tanıtım yazısıyla anlat.', not: 'Rol + biçim.' },
      { kotu: 'Basketbol kuralı yaz.', iyi: 'Bir basketbol antrenörü gibi, pota atışının 3 temel kuralını maddeler hâlinde açıkla.', not: 'Rol + format + sayı.' }
    ],
    sorular: [
      'Bu istemde rol var mı? Kim gibi konuşmasını istedik?',
      'Rol değişince hangi kelimeler değişti?',
      'Bu konuya en uygun uzman kim olurdu?',
      'Rol söylemezsek yapay zekâ kim gibi konuşur?'
    ],
    ipuclari: [
      'Rolü <b>önce siz canlandırın</b>; duymadan seçmek zordur.',
      'Rol listesini panoya asın; 6. derstek dört bileşenli formülde tekrar kullanılacak.',
      'Grup temsilcisi rollü istemi sesli sunsun; sınıf hangi rolün seçildiğini bulsun.'
    ]
  },

  5: {
    ad: 'Format ve Çıktı Türü Belirliyorum',
    emoji: '📐',
    konu: 'Çıktı formatı',
    tekCumle: 'Cevabın <b>hangi biçimde</b> geleceğini biz seçeriz: tablo mu, liste mi, şiir mi, masal mı, görsel mi?',
    neden: [
      'Biçim seçmek aynı bilgiyi farklı kalıplara dökmeyi öğretir; metin türleri konusunu doğrudan destekler.',
      'Tablo ve liste bilgiyi düzenleme becerisidir; öğrenci ders çalışırken de kullanır.',
      'Format, istem mimarisinin dördüncü parçasıdır; bir sonraki derste dört bileşen birleşecektir.'
    ],
    kazanim: [
      'İsteme çıktı formatı ekler.',
      'Formatsız ve formatlı istemin sonucunu karşılaştırır.',
      'Aynı bilgiyi iki farklı formatta isteyip hangisinin daha kullanışlı olduğunu söyler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Biçim tahmini (5 dk)',
        m: 'Dört metin okuyun: bir tablo satırı, bir liste, bir şiir dörtlüğü, bir masal girişi. Çocuklar biçimi adlandırsın.' },
      { b: '2️⃣ Görünüşe dikkat (5 dk)',
        m: 'Tahtada listeyi alt alta, tabloyu sütunlu, şiiri dörtlük hâlinde yazın: <b>biçim gözle de ayırt edilir.</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Çıktı Format Stüdyosu (7 istasyon) → 8 sayfalık çıktı formatı rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Aynı konuyu iki formatta isteyin (önce tablo, sonra masal) ve sonuçları yan yana okutun.' }
    ],
    ornekler: [
      { kotu: 'Karışımları anlat.', iyi: 'Eleme, süzme ve mıknatısla ayırmayı 3 satırlık bir tabloda karşılaştır.', not: 'Format: tablo.' },
      { kotu: 'Kesirleri anlat.', iyi: 'Birim kesir ile bileşik kesrin farkını 2 kıtalık bir şiirle anlat.', not: 'Format: şiir.' },
      { kotu: 'Haklarımızı yaz.', iyi: 'Haklarımız ve sorumluluklarımızı 5 maddelik numaralı liste hâlinde yaz.', not: 'Format + sayı.' }
    ],
    sorular: [
      'Bu yazı hangi formatta? Nereden anladın?',
      'Tablo yerine masal istesek ne değişir?',
      'Hangi format ders çalışırken daha çok işine yarar?',
      'Format söylemezsek yapay zekâ hangi biçimi seçer?'
    ],
    ipuclari: [
      'Format menüsünü (📋 📊 📖 📝 🎨 💬) panoya asın; yıl boyunca referans olur.',
      'Tablo isteyen istemlerde <b>“kaç sütun?”</b> diye sordurun; sınır alışkanlığı sürsün.',
      '7. istasyon grup beyin fırtınasıdır; temsilci sunumunu atlamayın.'
    ]
  },

  6: {
    ad: 'Tam ve Eksiksiz İstem Mimarisi',
    emoji: '🏗️',
    konu: '4 bileşenli kusursuz istem',
    tekCumle: 'Kusursuz istem dört parçadan kurulur: <b>ROL + GÖREV + DETAY + FORMAT</b>. Bu ders yılın taşıyıcı kolonudur.',
    neden: [
      'İlk beş dersin ögeleri bu haftada tek bir formülde birleşir; öğrenci parçaları değil <b>bütünü</b> görür.',
      'Dört parçalı yapı, bir cümleyi parçalara ayırıp kontrol etme alışkanlığıdır — doğrudan bir <b>planlama</b> becerisi.',
      'Bu formül 7–12. derslerde yanıt değerlendirme ve revizyon için ölçüt olarak kullanılacaktır.'
    ],
    kazanim: [
      'Bir istemi <b>Rol + Görev + Detay + Format</b> olarak dört parçaya ayırır.',
      'Eksik istemdeki boş kutuyu adlandırır.',
      'Dört bileşenli kendi istemini yazar ve sınıfa sunar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Dört kutu (5 dk)',
        m: 'Tahtaya dört kutu çizin: <b>ROL · GÖREV · DETAY · FORMAT</b>. Birlikte doldurun: “bir fen öğretmeni gibi / açıkla / kütle ile hacim farkını / 3 maddede”.' },
      { b: '2️⃣ Eksik kutuyu buldurun (5 dk)',
        m: '“Kütleyi anlat.” cümlesini kutulara yerleştirin. <b>Hangi kutular boş kaldı?</b> Sınıf söylesin, birlikte doldurun.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Beyin Fırtınası & Sunum Stüdyosu (7 istasyon) → 8 sayfalık kusursuz istem rehberi.' },
      { b: '4️⃣ Kapanış — Sunum (5 dk)',
        m: 'Her grup dört bileşenli istemini yazsın; <b>grup temsilcisi sınıfa sesli sunsun.</b>' }
    ],
    ornekler: [
      { kotu: 'Kütleyi anlat.', iyi: 'Bir fen öğretmeni gibi, kütle ile hacim farkını eşit kollu terazi örneğiyle 3 maddede açıkla.', not: 'Dört bileşen tamam.' },
      { kotu: 'Deprem çantası yaz.', iyi: 'Bir afet uzmanı gibi, deprem çantasına konacak 6 malzemeyi numaralı liste hâlinde yaz.', not: 'Rol + görev + sayı + format.' },
      { kotu: 'Benzetme anlat.', iyi: 'Bir Türkçe öğretmeni gibi, benzetme sanatını Karagöz oyunundan örneklerle kısa bir diyalogda anlat.', not: 'Rol + detay + biçim.' }
    ],
    sorular: [
      'Bu istemde dört kutunun hangisi boş?',
      'Detay eklersek sonuç neden değişir?',
      'Format söylemezsek ne olur?',
      'Bu istemi bir cümlede birleştirebilir misin?'
    ],
    ipuclari: [
      'Dört kutuyu yıl boyunca panoda tutun; sonraki bütün dersler bu kutulara yeni öge ekler.',
      '“Yanlış” demeyin; <b>“eksik”</b> deyin ve hangi kutunun boş kaldığını sordurun.',
      'Bu haftanın istemlerini saklayın; 7 ve 8. derste bunları puanlayıp revize edeceksiniz.'
    ]
  },

  7: {
    ad: 'Yapay Zekâ Yanıtlarını İnceliyorum ve Değerlendiriyorum',
    emoji: '🔎',
    konu: 'Yanıt analizi ve puanlama',
    tekCumle: 'Gelen cevabı olduğu gibi kabul etmeyiz: <b>inceler, doğruluğunu kontrol eder ve puanlarız.</b> 2. Patika burada başlar.',
    neden: [
      'Yapay zekâ her zaman doğru yazmaz. Yanıtı denetlemek 4. sınıfın en önemli <b>dijital okuryazarlık</b> becerisidir.',
      'Öğrenci artık sadece istem yazan değil, sonucu <b>değerlendiren</b> kişidir; bu eleştirel düşünmenin başlangıcıdır.',
      '6. derste öğrenilen dört bileşen, bu derste bir <b>puanlama ölçütüne</b> dönüşür.'
    ],
    kazanim: [
      'Bir yapay zekâ yanıtındaki eksiği veya hatayı bulur.',
      'Yanıtı ölçütlere göre <b>puanlar</b> ve gerekçesini söyler.',
      'Yanıtın istenen göreve uyup uymadığını denetler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — İki yanıt (5 dk)',
        m: 'Aynı isteme gelen iki yanıtı tahtaya yazın; biri eksik, biri tam olsun. Sınıf <b>hangisi daha iyi ve neden</b> diye tartışsın.' },
      { b: '2️⃣ Puanlama ölçütü (5 dk)',
        m: 'Üç ölçüt belirleyin: <b>Doğru mu? · Görevi yapmış mı? · İstenen formatta mı?</b> Her yanıta 3 üzerinden puan verdirin.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → İstem Mühendisliği Stüdyosu (3 adımlı sihirbaz) → 8 sayfalık yanıt analiz rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Grup temsilcileri değerlendirmelerini sınıfa sunsun; <b>puanın gerekçesi</b> mutlaka söylensin.' }
    ],
    ornekler: [
      { kotu: '“Tamam, aynen yazayım.”', iyi: 'Bu yanıt LED lambanın tasarrufunu söylemiş ama 3 madde istemiştik, 1 madde gelmiş: eksik.', not: 'Görev uyumu denetlendi.' },
      { kotu: '“Bilgisayar yazdı, doğrudur.”', iyi: 'Bu bilgiyi ders kitabımızdan kontrol edelim; kaynak neyi söylüyor?', not: 'Doğrulama alışkanlığı.' },
      { kotu: '“Güzel olmuş.”', iyi: 'Doğruluk 3/3, görev 2/3, format 1/3 — formatı düzeltmemiz gerekiyor.', not: 'Ölçütlü puanlama.' }
    ],
    sorular: [
      'Bu yanıt istediğimiz görevi yapmış mı?',
      'İstediğimiz formatta mı gelmiş?',
      'Bu bilgiyi nereden kontrol edebiliriz?',
      'Bu yanıta 3 üzerinden kaç verirsin? Neden?'
    ],
    ipuclari: [
      '“Yapay zekâ hata yapabilir” cümlesini panoya asın; 11. derste bu konu derinleşecek.',
      'Puanı <b>gerekçesiz</b> kabul etmeyin; “neden 2 verdin?” sorusu dersin kalbidir.',
      '6. haftada saklanan istemleri buraya getirin; kendi çalışmasını puanlamak en güçlü alıştırmadır.'
    ]
  },

  8: {
    ad: 'Hatalı Yanıtları Düzeltiyorum — İstem Revizyonu',
    emoji: '🔁',
    konu: 'İstem revizyonu ve ikinci şans',
    tekCumle: 'Beğenmediğimiz yanıtta pes etmeyiz: <b>ne değişeceğini söyleyerek</b> yeni bir istem yazar, ikinci şans veririz.',
    neden: [
      'Revize etmek, ilk sonuçta durmamayı öğretir; deneme–düzeltme döngüsü hem yazmanın hem kodlamanın temelidir.',
      '“Daha iyi yap” değil, <b>“şunu şöyle değiştir”</b> demek ölçülebilir bir istektir; öğrenci somut yazmayı öğrenir.',
      '7. derste bulunan eksik, bu derste <b>düzeltilecek</b> hâle gelir; iki hafta bir bütündür.'
    ],
    kazanim: [
      'Hatalı yanıtta eksik kalan kuralı belirler.',
      'İsteme <b>ek kural</b> yazarak revize eder.',
      'İlk ve revize edilmiş sonucu karşılaştırıp farkı açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Pes etmek yok (5 dk)',
        m: 'Hatalı bir yanıt gösterin. <b>“Pes mi edelim, ikinci şans mı verelim?”</b> diye sorun; ikinci şansın nasıl yazılacağını konuşun.' },
      { b: '2️⃣ Revize komutu yazdırın (5 dk)',
        m: 'Üç örnek verin: <i>“Cümleleri kısalt.” · “Zor terimleri basitleriyle değiştir.” · “3 maddeyi geçme.”</i> Her biri <b>ölçülebilir</b> olmalı.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → Revizyon & İstem Stüdyosu (3 adımlı sihirbaz) → 8 sayfalık revize istem rehberi.' },
      { b: '4️⃣ Kapanış — Önce/sonra (5 dk)',
        m: 'İlk ve revize hâli yan yana panoya asılsın; <b>fark öğrencinin kendi eseridir.</b>' }
    ],
    ornekler: [
      { kotu: 'Beğenmedim, tekrar yaz.', iyi: 'Aynı konuyu yaz ama cümleleri kısalt ve 3 maddeyi geçme.', not: '<b>Ne</b> değişecek, açıkça yazıldı.' },
      { kotu: 'Daha iyi olsun.', iyi: 'Zor terimleri çıkar ve 4. sınıf öğrencisinin anlayacağı kelimelerle yeniden yaz.', not: 'Ölçülebilir istek.' },
      { kotu: 'Anlamadım.', iyi: 'Saat–dakika dönüşümünü örnek bir problemle, adım adım yeniden anlat.', not: 'Somut düzeltme talebi.' }
    ],
    sorular: [
      'Yanıtın neresini beğenmedin?',
      'Hangi kural eksik kalmış?',
      'Ne değişmesini isteyeceksin? Tek cümleyle söyle.',
      '“Daha iyi yap” demek neden yetmez?'
    ],
    ipuclari: [
      '<b>“Daha iyi yap”</b> cümlesini yasaklayın; öğrenci neyin değişeceğini yazsın.',
      'İlk denemeyi silmeyin; karşılaştırma malzemesidir.',
      'Revize edilmiş metinleri saklayın; 12. haftadaki rozet töreninde kullanılacak.'
    ]
  },

  9: {
    ad: 'Promptumu Geliştiriyorum — Eksik Ayrıntıyı Bul',
    emoji: '🕵️',
    konu: 'Eksik ayrıntıyı bul',
    tekCumle: 'Sonuç istediğimiz gibi değilse istemde bir <b>eksik</b> vardır. Dört geliştirme sorusuyla eksiği bulup tamamlarız.',
    neden: [
      'Yıl boyunca öğrenilen bütün ögeler bu derste bir <b>kontrol listesine</b> dönüşür.',
      '“Hata değil, eksik” bakışı öğrencinin denemekten korkmamasını sağlar.',
      'Eksiği kendi metninde bulmak, öz değerlendirme becerisidir; 12. haftadaki özgür tasarıma hazırlar.'
    ],
    kazanim: [
      'Bir istemdeki eksik ögeyi adlandırır.',
      'Dört geliştirme sorusunu sırayla uygular.',
      'İstemin önce ve sonra hâlini karşılaştırıp farkı açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Bana hikaye yaz.” (5 dk)',
        m: 'Tahtaya sadece bu cümleyi yazın. Sınıf ne eksik olduğunu bulsun.' },
      { b: '2️⃣ Dört soru panosu (5 dk)',
        m: 'Panoya asın: <b>1) KAHRAMAN / ROL KİM? 2) KONU NE? 3) ANLATIM ÜSLUBU NASIL? 4) KAÇ MADDE / FORMAT NE?</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Laboratuvar (20 bölüm) → İstem Geliştirme Stüdyosu (3 adımlı sihirbaz) → 8 sayfalık geliştirilmiş istem rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İlk ve son hâli yan yana okutun; her öğrenci <b>hangi soruyu ekleyince</b> sonucun düzeldiğini söylesin.' }
    ],
    ornekler: [
      { kotu: 'Bana hikaye yaz.', iyi: 'Bir ses teknolojileri uzmanı gibi, ses yalıtımını anlatan 3 maddelik eğlenceli bir liste yaz.', not: 'Dört soru da yanıtlandı.' },
      { kotu: 'Zamanı anlat.', iyi: 'Bir zaman şefi gibi, saat–dakika dönüşümünü 3 maddelik tabloyla öğretici bir tonda anlat.', not: 'Rol + konu + üslup + format.' },
      { kotu: 'Deprem çantası yaz.', iyi: 'Bir deprem çantası mimarı gibi, güvenli yaşam için 6 malzemeyi 2 kıtalık şiirle anlat.', not: 'Rol + konu + format.' }
    ],
    sorular: [
      'Bu istemde ne eksik?',
      'Kahraman kim? Konu ne? Üslup nasıl? Kaç madde?',
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
    emoji: '🔂',
    konu: 'İlk sonuç vs son sonuç',
    tekCumle: 'İlk sonuç son sonuç değildir: geliştirme komutlarıyla sonucu <b>kademe kademe</b> iyileştiririz.',
    neden: [
      '7, 8 ve 9. derslerin (incele → revize et → eksiği bul) doğal devamıdır; üçü burada tek akışta birleşir.',
      'Bir metni birden fazla kez geliştirmek, yazma sürecinin gerçek hâlidir.',
      'Öğrenci ilk sonuçta durmayı bırakır; kalite ile <b>tekrar deneme</b> arasındaki ilişkiyi görür.'
    ],
    kazanim: [
      'Aynı sonuca <b>art arda geliştirme komutları</b> uygular.',
      'Her adımda neyin değiştiğini söyler.',
      'İlk ve son hâli karşılaştırıp gelişimi açıklar.'
    ],
    nasil: [
      { b: 'ℹ️ İçerik hazırlanıyor',
        m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
      { b: '1️⃣ Eski istemini aç (10 dk)',
        m: 'Öğrenciler 6–9. derslerden birindeki istemini bulup sonucu tekrar üretsin.' },
      { b: '2️⃣ Üç geliştirme komutu (20 dk)',
        m: 'Sırayla uygulatın: <i>“Örnek ekle.” · “Cümleleri kısalt.” · “Tablo hâline getir.”</i> Her adımda sonucu deftere kaydettirin.' },
      { b: '3️⃣ Gelişim sergisi (10 dk)',
        m: 'İlk, ikinci ve son hâli yan yana panoya asın; sınıf hangi adımda en çok fark olduğunu konuşsun.' }
    ],
    ornekler: [
      { kotu: 'Beğenmedim.', iyi: 'Aynı metne bir günlük hayat örneği ekle.', not: '1. geliştirme adımı.' },
      { kotu: 'Uzun olmuş.', iyi: 'Cümleleri kısalt; her madde en fazla bir satır olsun.', not: '2. geliştirme adımı.' },
      { kotu: 'Karışık görünüyor.', iyi: 'Bu bilgiyi 3 satırlık bir tabloya dönüştür.', not: '3. geliştirme adımı.' }
    ],
    sorular: [
      'İlk sonuçla son sonuç arasında ne fark var?',
      'Hangi geliştirme komutu en çok işe yaradı?',
      'Bir sonuca kaç kez geliştirme komutu verebiliriz?',
      'Ne zaman “tamam, bitti” deriz?'
    ],
    ipuclari: [
      'Her geliştirme adımını ayrı ayrı kaydettirin; gelişim ancak böyle görünür.',
      'Bu hafta içerik gelene kadar 6–9. derslerin özeti olarak işlenebilir.',
      'Sonuçları saklayın; 12. haftadaki <b>Prompt Kaşifi</b> rozet töreninde kullanılacak.'
    ]
  }
};

/* =========================================================================
   ETKİNLİKLER — ilkokul4/dersN/dersN_M.html dosyalarındaki gerçek adlar
   ve gerçek bölüm başlıkları.
   ========================================================================= */

var AI_ETKINLIK = {

  1: [
    { ad: 'Komut mu, Soru mu? Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Düz soru cümlesi ile açık görev komutunu ayırma.',
      sayfalar: ['Storybook: Soru sormak vs açık görev komutu (4 görsel)', '1–7. Bölüm: 2 seçenekli soru/komut tespiti', '8–14. Bölüm: 3–4 seçenekli en zengin komutu seçme', '15–20. Bölüm: 4–5 seçenekli şampiyonluk soruları'],
      nasil: 'Storybook’u <b>tahtadan birlikte</b> okuyun. 20 bölüm bireysel yapılır; <b>sınıf süresine göre 10–12 bölüm yeterlidir.</b> Şifre: <b>bilgi</b>' },
    { ad: 'Hibrit Çark & İstem Mimarlığı', sure: '15 dk', tur: 'Grup · 6 çark istasyonu',
      ne: 'Çarkla konu ve format seçip grupça açık görev komutu tasarlama.',
      sayfalar: ['1. Kayaç & Fosil', '2. Basamak Değeri', '3. Kültürel Miras', '4. Atasözü Tiyatrosu', '5. Orff Ritimleri', '6. Şampiyon İstem'],
      nasil: 'Grupları 3–4 kişi yapın. Grup konuyu ve formatı seçer, baykuş ilham kutusundaki fikirle kendi detayını yazar. <b>Grup temsilcisi komutu sesli okur.</b> Şifre: <b>komut</b>' },
    { ad: '8 Çeşitli Ders Görsel & Görev Komutu Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı farklı derste hazır açık görev komutu ve görsel örnekleri.',
      sayfalar: ['1. Editör Rehberi & Açık Görev Formülü', '2. Fen (Kayaçlar ve Fosiller)', '3. Matematik (Basamak Değeri)', '4. Sosyal & Görsel Sanatlar (Kültürel Miras & Ebru)', '5. Türkçe & Drama (Atasözleri & Gölge Oyunu)', '6. Müzik (Orff Çalgıları)', '7. Beden Eğitimi (Bayrak Yarışı)', '8. Düz Soru vs Açık Görev Komutu'],
      nasil: 'Önce editör sayfasını gösterin. Her örnekte <b>“bu komut neyi söylüyor?”</b> diye çözümletin; bir komutu deftere yazdırın. Şifre: <b>istem</b>' }
  ],

  2: [
    { ad: 'Tek ve Açık Görev Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Belirsiz isteği tanıma ve tek açık göreve indirme.',
      sayfalar: ['Storybook: Belirsiz istem vs tek ve açık görev', '1–7. Bölüm: 2 seçenekli belirsiz/açık tespiti', '8–14. Bölüm: 3–4 seçenekli en açık görevi seçme', '15–20. Bölüm: 4–5 seçenekli şampiyonluk soruları'],
      nasil: 'Her belirsiz istekte sınıf <b>“ne eksik?”</b> diye cevap versin. Şifre: <b>açık</b>' },
    { ad: 'Hibrit Çark & Açık Görev Stüdyosu', sure: '15 dk', tur: 'Grup · 6 çark istasyonu',
      ne: 'Geniş konuyu daraltıp grupça tek açık görev yazma.',
      sayfalar: ['1. Besin Grupları', '2. Toplama Problemi', '3. Harita Yönleri', '4. Ana Fikir & Deyim', '5. Suluboya Sanatı', '6. Şampiyon Açık Görev'],
      nasil: 'Her gruba farklı bir istasyon verin. Grup konuyu <b>üç adımda daraltıp</b> tek görev cümlesini yazsın; sonuçlar yan yana okunsun. Şifre: <b>görev</b>' },
    { ad: '8 Çeşitli Ders Tek ve Açık Görev Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste tek ve açık görev örnekleri.',
      sayfalar: ['1. Editör Rehberi & Tek ve Açık Görev Formülü', '2. Fen (Besin Grupları & Proteinler)', '3. Matematik (Doğal Sayılarla Toplama)', '4. Sosyal Bilgiler (Harita & Yönler)', '5. Türkçe & Drama (Deyimler & Gölge Oyunu)', '6. Görsel Sanatlar (Suluboya Renk Karışımları)', '7. Beden Eğitimi (Jimnastik Esneklik)', '8. Belirsiz İstem vs Tek ve Açık Görev'],
      nasil: 'Formülü panoya yazın, bir örneği deftere kopyalatın. Şifre: <b>hedef</b>' }
  ],

  3: [
    { ad: 'Konu Odaklı İstem Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Konusuz istem ile konu odaklı istemi ayırma.',
      sayfalar: ['Storybook: Konusuz istem vs ders konusu eklenmiş istem', '1–7. Bölüm: 2 seçenekli konu tespiti', '8–14. Bölüm: 3–4 seçenekli en konu odaklı istemi seçme', '15–20. Bölüm: 4–5 seçenekli şampiyonluk soruları'],
      nasil: 'Her bölümde önce <b>konuyu adlandırtın</b>, sonra seçtirin. Şifre: <b>konu</b>' },
    { ad: 'Hibrit Çark & Konu Mimarisi', sure: '15 dk', tur: 'Grup · 6 çark istasyonu',
      ne: 'Farklı Maarif konularında grupça konu odaklı istem kurma.',
      sayfalar: ['1. Yer Kabuğu & Maden', '2. Çıkarma İşlemi', '3. Kültürel Değerler', '4. Şiir & Dörtlük Yapısı', '5. Mozaik Sanatı', '6. Şampiyon Konu İstem'],
      nasil: 'Her grup bir istasyon seçsin. Aynı görevi farklı konularda yazdırıp <b>sonuçları karşılaştırın</b>. Şifre: <b>miras</b>' },
    { ad: '8 Çeşitli Ders Konu Odaklı İstem Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste konu odaklı hazır istem örnekleri.',
      sayfalar: ['1. Editör Rehberi & Konu Odaklı İstem Formülü', '2. Fen (Yer Kabuğunun Yapısı)', '3. Matematik (Doğal Sayılarla Çıkarma)', '4. Sosyal & Görsel Sanatlar (Kültürel Değerler & Mozaik)', '5. Türkçe & Drama (Şiir & Dörtlük)', '6. Görsel Sanatlar (Mozaik Taş Desenleri)', '7. Beden Eğitimi (Engelli Koşu)', '8. Konusuz İstem vs Konu Odaklı İstem'],
      nasil: 'Her örnekte konuyu kırmızıyla işaretletin; konu değişince ne değiştiğini konuşun. Şifre: <b>kayaç</b>' }
  ],

  4: [
    { ad: 'Uzman Rolü İstem Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Rolsüz istem ile uzman rolü eklenmiş istemi ayırma.',
      sayfalar: ['Storybook: Rolsüz düz istem vs uzman rolü', '1–7. Bölüm: 2 seçenekli rol tespiti', '8–14. Bölüm: 3–4 seçenekli en uygun uzman rolünü seçme', '15–20. Bölüm: 4–5 seçenekli şampiyonluk soruları'],
      nasil: 'Rolü <b>önce siz canlandırın</b>; sonra öğrenci seçsin. Şifre: <b>rol</b>' },
    { ad: 'Uzman Rol Stüdyosu', sure: '15 dk', tur: 'Grup · 6 istasyon',
      ne: 'Konuya uygun uzman rolünü seçip grupça rollü istem yazma.',
      sayfalar: ['1. Yer Kabuğu', '2. Eldeli Toplama', '3. Harita Okuma', '4. Karagöz Oyunu', '5. Mozaik Sanatı', '6. Şampiyon'],
      nasil: 'Her grup bir istasyon alır ve rolü seçer. <b>Grup temsilcisi cümleyi o rolün ağzından okur</b>; sınıf rolü tahmin eder. Şifre: <b>uzman</b>' },
    { ad: '8 Çeşitli Ders Uzman Rolü Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste uzman rolü eklenmiş hazır istem örnekleri.',
      sayfalar: ['1. Editör Rehberi & Uzman Rol Formülü', '2. Fen (Yer Kabuğunun Yapısı)', '3. Matematik (Eldeli Toplama & Çıkarma)', '4. Sosyal Bilgiler (Harita & Yön Pusulası)', '5. Türkçe & Drama (Karagöz Tiyatrosu)', '6. Görsel Sanatlar (Mozaik Taş Desenleri)', '7. Beden Eğitimi (Atletizm Engelli Koşu)', '8. Rolsüz İstem vs Uzman Rolü Eklenmiş İstem'],
      nasil: 'Rol listesini panoya asın; 6. derste dört bileşenli formülde tekrar kullanılacak. Şifre: <b>madde</b>' }
  ],

  5: [
    { ad: 'Çıktı Formatı İstem Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Formatsız istem ile net çıktı formatı eklenmiş istemi ayırma.',
      sayfalar: ['Storybook: Formatsız düz istem vs net çıktı formatı', '1–7. Bölüm: 2 seçenekli format tespiti', '8–14. Bölüm: 3–4 seçenekli en iyi çıktı formatını seçme', '15–20. Bölüm: 4–5 seçenekli şampiyonluk soruları'],
      nasil: 'Her formatı <b>önce siz örnekleyin</b>; listenin alt alta, tablonun sütunlu olduğunu ekranda gösterin. Şifre: <b>format</b>' },
    { ad: 'Çıktı Format Stüdyosu', sure: '15–20 dk', tur: 'Grup · 7 istasyon',
      ne: 'Grupça çıktı formatını seçip istemi ona göre kurma ve sunma.',
      sayfalar: ['1. Saf Madde', '2. Kesirler', '3. Haklarımız', '4. Hikâye Özeti', '5. Origami', '6. Şampiyon', '7. Grup Beyin Fırtınası & Sunum'],
      nasil: 'Her grup farklı bir format seçsin. <b>7. istasyonda grup temsilcisi sınıfa sunar</b>; hangisinin daha kullanışlı olduğunu tartıştırın. Şifre: <b>tablo</b>' },
    { ad: '8 Çeşitli Ders Çıktı Formatı Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste çıktı formatı belirlenmiş hazır istem örnekleri.',
      sayfalar: ['1. Editör Rehberi & Çıktı Formatı Formülü', '2. Fen (Saf Madde ve Karışımları Ayırma)', '3. Matematik (Kesirler & Pay/Payda)', '4. Sosyal Bilgiler (Haklarımız ve Sorumluluklarımız)', '5. Türkçe & Drama (Hikâye Unsurları & Özet)', '6. Görsel Sanatlar (Origami)', '7. Beden Eğitimi (Jimnastik Denge)', '8. Formatsız İstem vs Net Çıktı Formatlı İstem'],
      nasil: 'Format menüsünü panoya asın; yıl boyunca “bugün hangi format?” diye kullanın. Şifre: <b>karışım</b>' }
  ],

  6: [
    { ad: 'Kusursuz İstem Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Eksik istem ile 4 bileşenli tam istemi ayırma.',
      sayfalar: ['Storybook: Eksik istem vs Rol + Görev + Detay + Format', '1–7. Bölüm: 2 seçenekli eksik/tam tespiti', '8–14. Bölüm: 3–4 seçenekli 4 bileşenli istemi seçme', '15–20. Bölüm: 4–5 seçenekli kusursuz istem şampiyonluğu'],
      nasil: 'Her bölümde <b>hangi kutunun boş kaldığını</b> söyletin. Şifre: <b>mimar</b>' },
    { ad: 'Beyin Fırtınası & Sunum Stüdyosu', sure: '15–20 dk', tur: 'Grup · 7 istasyon',
      ne: 'Grupça dört bileşenli özgün istem kurma ve sınıfa sunma.',
      sayfalar: ['1. Kütle ve Hacim', '2. Çarpma/Bölme', '3. Deprem Çantası', '4. Karagöz Tiyatrosu', '5. Çini Sanatı', '6. Şampiyon İstem', '7. Grup Beyin Fırtınası & Sunum'],
      nasil: '1. ve 2. sınıf sade tasarımındadır, ekrana tam sığar. <b>7. aşamada grup temsilcisi tahtadaki öğretmene ve sınıfa sesli sunar.</b> Şifre: <b>kusursuz</b>' },
    { ad: '8 Çeşitli Ders Kusursuz İstem Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste 4 bileşenli kusursuz istem örnekleri.',
      sayfalar: ['1. Editör Rehberi & 4 Bileşenli Kusursuz Formül', '2. Fen (Kütle ve Hacim Ölçümü)', '3. Matematik (Çarpma & Kalansız Bölme)', '4. Sosyal Bilgiler (Deprem Çantası)', '5. Türkçe & Drama (Benzetme Sanatı & Karagöz)', '6. Görsel Sanatlar (Çini Sanatı)', '7. Beden Eğitimi (Voleybol Pas)', '8. Eksik İstem vs 4 Bileşenli Kusursuz İstem'],
      nasil: 'Dört kutuyu panoya asın; bu hafta yazılan istemleri saklayın, 7. haftada puanlanacak. Şifre: <b>terazi</b>' }
  ],

  7: [
    { ad: 'Yanıt Analiz Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Hatalı/eksik yanıt ile tam ve doğru yanıtı ayırma, kaliteyi değerlendirme.',
      sayfalar: ['Storybook: Yanıtı kabullenmek vs inceleyip puanlamak', '1–7. Bölüm: 2 seçenekli hatalı/doğru yanıt tespiti', '8–14. Bölüm: 3–4 seçenekli yanıt kalitesi değerlendirme', '15–20. Bölüm: 4–5 seçenekli yanıt analizcisi şampiyonluğu'],
      nasil: 'Her seçimde <b>“neden bu daha iyi?”</b> diye gerekçe sordurun. Şifre: <b>analiz</b>' },
    { ad: 'İstem Mühendisliği Stüdyosu', sure: '15–20 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Şablondan yola çıkıp görev seçme ve grupça kendi istemini yazma.',
      sayfalar: ['Adım 1: Şablonu Keşfet (Fen · Matematik · Sosyal Bilgiler · Türkçe)', 'Adım 2: Görevini Seç (Çevre Dostu Şehir · Zaman Yolcusu LED Lamba · Kesir Canavarları Adası · Öğretmenimizin Özel Görevi)', 'Adım 3: İstemini Yaz (kelime sayacı + sunum)'],
      nasil: 'Her grup bir şablon ve bir proje seçer, istemini yazar. <b>Temsilci değerlendirmesini gerekçesiyle sunar.</b> Şifre: <b>puan</b>' },
    { ad: '8 Çeşitli Ders Yanıt Analiz Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste yapay zekâ yanıtlarının incelenmesi.',
      sayfalar: ['1. Yanıt Analiz Rehberi & Değerlendirme Formülü', '2. Fen (Ampul & LED Lambalar)', '3. Matematik (Kesir Karşılaştırma)', '4. Sosyal Bilgiler (Sıfır Atık & Geri Dönüşüm)', '5. Türkçe & Drama (Ana Fikir & Noktalama)', '6. Görsel Sanatlar (Seramik Sanatı)', '7. Beden Eğitimi (Masa Tenisi & Raket)', '8. Hatalı/Eksik Yanıt vs Revize Kusursuz Yanıt'],
      nasil: '8. sayfadaki karşılaştırmayı sınıfça puanlatın; 8. haftada bu yanıtlar revize edilecek. Şifre: <b>ampul</b>' }
  ],

  8: [
    { ad: 'İstem Revizyon Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Eksik istem ile ikinci şans veren revize istemi ayırma.',
      sayfalar: ['Storybook: Pes etmek vs ikinci şans verip revize etmek', '1–7. Bölüm: 2 seçenekli eksik/revize tespiti', '8–14. Bölüm: 3–4 seçenekli hatalı yanıtı düzelten istemi seçme', '15–20. Bölüm: 4–5 seçenekli revizyon mimarlığı şampiyonluğu'],
      nasil: 'Her bölümde <b>hangi kuralın eklendiğini</b> söyletin. Şifre: <b>revizyon</b>' },
    { ad: 'Revizyon & İstem Stüdyosu', sure: '15–20 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Şablon seçip revize görevi belirleme ve grupça revize istem yazma.',
      sayfalar: ['Adım 1: Şablonu Keşfet (Fen · Matematik · Sosyal Bilgiler · Türkçe & Drama)', 'Adım 2: Görevini Seç (Megafon ve Ses Teknolojileri · Zamanı Ölçme Hesabı · Kroki ve Yönler Haritası · Öğretmenimizin Özel Revizyon Görevi)', 'Adım 3: İstemini Yaz (kelime sayacı + sunum)'],
      nasil: 'Grup önce ilk istemi, sonra <b>revize hâlini</b> yazsın; ikisi yan yana okunsun. Şifre: <b>düzeltme</b>' },
    { ad: '8 Çeşitli Ders Revize İstem Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Altı derste revize edilmiş istem örnekleri.',
      sayfalar: ['1. İstem Revizyon Rehberi & İkinci Şans Formülü', '2. Fen (Ses Teknolojileri & Megafon)', '3. Matematik (Zamanı Ölçme & Saat)', '4. Sosyal Bilgiler (Kroki & Yönler)', '5. Türkçe & Drama (Noktalama İşaretleri)', '6. Görsel Sanatlar (Ebru Sanatı Teknikleri)', '7. Beden Eğitimi (Atletizm & Engelli Koşu)', '8. Pes Etmek vs İkinci Şans Verip Revize İstem Yazmak'],
      nasil: 'Revize edilmiş metinleri saklayın; 12. haftadaki rozet töreninde kullanılacak. Şifre: <b>megafon</b>' }
  ],

  9: [
    { ad: 'Eksik Ayrıntıyı Bul Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Eksik istemi tanıma ve dört geliştirme sorusuyla tamamlama.',
      sayfalar: ['Storybook: Eksik prompt nedir? 4 geliştirme sorusu', '1–7. Bölüm: 2 seçenekli basit eksik parça tespiti', '8–14. Bölüm: 3–4 seçenekli “Bana hikaye yaz” istemini geliştirme', '15–20. Bölüm: 4–5 seçenekli istem geliştirme şampiyonluğu'],
      nasil: 'Dört soruyu panoya asın ve her bölümde sırayla sordurun: <b>KİM? · KONU NE? · ÜSLUP NASIL? · KAÇ MADDE?</b> Şifre: <b>eksik</b>' },
    { ad: 'İstem Geliştirme Stüdyosu', sure: '15–20 dk', tur: 'Grup · 3 adımlı sihirbaz',
      ne: 'Şablonu keşfetme, görev seçme ve grupça geliştirilmiş istem yazma.',
      sayfalar: ['Adım 1: Şablonu Keşfet (Fen · Matematik · Sosyal Bilgiler · Türkçe & Drama)', 'Adım 2: Görevini Seç (Ses Yalıtımı ve Gürültü Kirliliği · Zamanı Ölçme Hesabı · Deprem Çantası ve Güvenli Yaşam · Öğretmenimizin Özel Geliştirme Görevi)', 'Adım 3: İstemini Yaz (metin ya da görsel istemi, kelime sayacı + sunum)'],
      nasil: 'Grup dört soruyu sırayla yanıtlayarak istemini kursun; <b>temsilci sınıfa sunsun.</b> Şifre: <b>tamir</b>' },
    { ad: '8 Çeşitli Ders Geliştirilmiş İstem Rehberi', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Eksik istemlerin dört soruyla tamamlanmış hâlleri.',
      sayfalar: ['1. Editör Rehberi & 4 Geliştirme Sorusu Formülü', '2. Fen (Ses Kirliliği ve Ses Yalıtım Teknolojileri)', '3. Matematik (Zamanı Ölçme ve Dakika Dönüşümleri)', '4. Sosyal Bilgiler (Afet Yönetimi ve Deprem Çantası)', '5. Türkçe (Atasözleri ve Tırnak İşareti)', '6. Görsel Sanatlar (Geleneksel El Sanatları ve Çini)', '7. Beden Eğitimi (Takım Oyunları ve Kuralları)', '8. Eksik Prompt vs Tamamlatılmış Şampiyon Prompt'],
      nasil: 'Kapanışta <b>“bugün hangi soruyu sormayı öğrendik?”</b> diye özetletin. Şifre: <b>gelişim</b>' }
  ],

  10: [
    { ad: '10.1 Laboratuvar', sure: '15 dk', tur: 'Bireysel · hazırlanıyor',
      ne: 'Bireysel laboratuvar adımı (içerik hazırlanmaktadır).',
      nasil: 'İçerik yayınlanana kadar öğrenciler 6–9. derslerden birindeki istemini açıp <b>art arda geliştirme komutlarıyla</b> iyileştirsin.' },
    { ad: '10.2 Grup Etkinliği', sure: '15 dk', tur: 'Grup · hazırlanıyor',
      ne: 'Grup atölyesi (içerik hazırlanmaktadır).',
      nasil: 'Gruplar dört bileşenli bir istem yazsın, sonra <b>üç geliştirme komutu</b> uygulayıp her adımı deftere kaydetsin.' },
    { ad: '10.3 Görsel Rehber', sure: '10 dk', tur: 'Kapanış · hazırlanıyor',
      ne: 'Görsel rehber ve sunum (içerik hazırlanmaktadır).',
      nasil: 'Gelişim sergisi yapın: ilk, ikinci ve son hâl yan yana panoya asılsın.' }
  ]
};

for (var _d in AI_ETKINLIK) {
  if (AI_DERSLER[_d]) AI_DERSLER[_d].adimlar = AI_ETKINLIK[_d];
}

/* =========================================================================
   EKRAN KULLANIMI — öğrenci ekranda ne yapacak, hangi sırayla?
   (4. sınıfta sesli okuma butonu yoktur; okuma, yazma ve değerlendirme esastır.)
   ========================================================================= */

var AI_GENEL_EKRAN = [
  { b: '📖 Storybook’u birlikte okuyun', m: 'Sayfa açılışında 4 görselli ders anlatımı modalı gelir. <b>4. sınıfta sesli okuma butonu yoktur</b>; metni öğrenci okur, gerekirse siz yüksek sesle okuyun.' },
  { b: '👆 Seçeneklerden seç', m: 'Bölümler 2 → 3–4 → 4–5 seçenekli olarak zorlaşır. Yanlış seçimde “neden böyle düşündün?” diye sordurun.' },
  { b: '⌨️ Kendi istemini yaz', m: 'Grup çalışmalarında <b>serbest yazma kutusu</b> vardır. Hazır seçenekle yetinmeyin; grup kendi detayını yazsın.' },
  { b: '📢 Temsilci sunumu', m: '4. sınıfın ayırt edici adımıdır: şampiyon istem <b>grup temsilcisi tarafından sınıfa sesli sunulur.</b>' },
  { b: '❓ Mor “?” Cevapla düğmesi', m: 'Bölüm sonunda çıkan başarı şifresi, menüdeki mor <b>?</b> → ✏️ <b>Cevapla</b> düğmesine girilir. Şifreler ders listesinde yazılıdır.' },
  { b: '📊 İlerleme çubuğu', m: '20 bölümün tamamı zorunlu değildir; <b>sınıf süresine göre 10–12 bölüm yeterlidir.</b>' }
];

var AI_EKRAN = {

  1: [
    { b: '1️⃣ Storybook’u açın', m: '4 görselli anlatım modalını tahtadan birlikte okuyun: soru sormak ile açık görev komutu vermek arasındaki fark.' },
    { b: '2️⃣ Soru mu, komut mu?', m: 'Öğrenci her cümle için iki karttan birini seçer. Sınıfça hep bir ağızdan cevap verdirin.' },
    { b: '3️⃣ Çark istasyonunu seçtirin', m: 'Grup 6 istasyondan birini seçer; konuyu ve komut formatını belirler.' },
    { b: '4️⃣ Baykuş ilham kutusu', m: 'Sevimli baykuş fikir verir; grup kendi <b>özel görev detayını</b> yazma kutusuna yazar.' },
    { b: '5️⃣ Temsilci okusun', m: 'Kupa kazanan temsilci kartı çıkar; komut sesli okunur, sonra başarı şifresi görünür.' }
  ],

  2: [
    { b: '1️⃣ Belirsiz isteği gösterin', m: 'Ekrandaki muğlak cümleyi okutun: <b>“Besinler nedir?”</b> Sınıf ne eksik olduğunu söylesin.' },
    { b: '2️⃣ Daraltmayı seçtirin', m: 'Öğrenci daraltılmış seçeneği tıklar; her seçimde sonucun nasıl netleştiğini konuşun.' },
    { b: '3️⃣ Çarkta istasyon seçtirin', m: 'Grup bir Maarif konusu seçer ve tek görev cümlesini yazar.' },
    { b: '4️⃣ Cümleleri yan yana okutun', m: 'Grupların cümlelerini karşılaştırıp <b>en açık olanını</b> oylatın.' }
  ],

  3: [
    { b: '1️⃣ Konuyu adlandırtın', m: 'Ekranda konusuz istem vardır. Önce hangi dersin konusu olduğunu söyletin, sonra seçtirin.' },
    { b: '2️⃣ Konuyu işaretletin', m: 'Cümlede konuyu belirten kelimeyi parmakla gösterttirin.' },
    { b: '3️⃣ Çarkta konu seçtirin', m: 'Grup bir istasyon seçip aynı görevi o konuda yazar.' },
    { b: '4️⃣ Aynı görev, farklı konu', m: 'İki grubun cümlesini yan yana okutun: <b>tek kelime sonucu nasıl değiştirdi?</b>' }
  ],

  4: [
    { b: '1️⃣ Rolü canlandırın', m: 'Cümleyi <b>önce siz o rolün ağzından okuyun</b>, sonra ekrandaki eşleştirmeyi yaptırın.' },
    { b: '2️⃣ Uzmanları tanıtın', m: 'Kimyager, tarihçi, heykeltıraş, antrenör… Her konuya uygun uzmanı sınıf bulsun.' },
    { b: '3️⃣ Stüdyoda rol seçtirin', m: 'Grup istasyonunu ve rolünü seçer, rollü istemini yazar.' },
    { b: '4️⃣ Rol tahmin oyunu', m: 'Temsilci cümlesini rolün ağzından okur; sınıf hangi uzman olduğunu tahmin eder.' }
  ],

  5: [
    { b: '1️⃣ Formatı örnekleyin', m: 'Tablo, liste, şiir, masal, görsel. Her birini önce siz okuyun ya da gösterin.' },
    { b: '2️⃣ Görünüşe dikkat çektirin', m: 'Listenin alt alta, tablonun sütunlu, şiirin dörtlük olduğunu parmakla gösterin.' },
    { b: '3️⃣ Stüdyoda format seçtirin', m: 'Grup 7 istasyondan birini seçer ve istemini o formata göre kurar.' },
    { b: '4️⃣ 7. istasyonda sunum', m: 'Grup beyin fırtınası yapar; temsilci sonucu <b>sınıfa sesli sunar.</b>' }
  ],

  6: [
    { b: '1️⃣ Dört kutuyu tanıtın', m: 'Ekranda istem <b>Rol + Görev + Detay + Format</b> olarak parçalanır. Her parçayı tahtadaki kutularla eşleştirin.' },
    { b: '2️⃣ Boş kutuyu buldurun', m: 'Eksik istemlerde hangi kutunun boş kaldığını sınıf söylesin.' },
    { b: '3️⃣ 7 istasyonu dağıtın', m: 'Sade tasarım ekrana tam sığar; her gruba bir istasyon verin.' },
    { b: '4️⃣ 7. aşamada sunum', m: 'Gruplar özgün istemlerini kurgular; <b>temsilci tahtadaki öğretmene ve sınıfa sesli sunar.</b>' }
  ],

  7: [
    { b: '1️⃣ İki yanıtı karşılaştırın', m: 'Ekranda hatalı/eksik yanıt ile tam yanıt yan yanadır. Sınıf farkı bulur.' },
    { b: '2️⃣ Ölçütle puanlatın', m: 'Doğru mu? · Görevi yapmış mı? · İstenen formatta mı? Üç ölçütle puan verdirin.' },
    { b: '3️⃣ Sihirbazda şablon seçtirin', m: 'Adım 1’de ders şablonu, Adım 2’de proje görevi seçilir.' },
    { b: '4️⃣ İstemi yazdırın ve sundurun', m: 'Adım 3’te grup istemini yazar; kelime sayacı çalışır, temsilci gerekçesiyle sunar.' }
  ],

  8: [
    { b: '1️⃣ Hatalı yanıtı okutun', m: 'Ekrandaki bozuk yanıtı sınıfça okuyun: <b>neyi yanlış yapmış?</b>' },
    { b: '2️⃣ Ek kuralı buldurun', m: 'Hangi kural eklenirse yanıt düzelir? Sınıf birlikte karar versin.' },
    { b: '3️⃣ Sihirbazda revize görevi seçtirin', m: 'Adım 2’de revizyon görevi (megafon, saat, kroki) seçilir.' },
    { b: '4️⃣ Önce–sonra okutun', m: 'İlk istem ile revize istem yan yana okunsun; fark sınıfça söylensin.' }
  ],

  9: [
    { b: '1️⃣ Bozuk istemi okutun', m: '<b>“Bana hikaye yaz.”</b> Sınıf ne eksik olduğunu bulur.' },
    { b: '2️⃣ Dört soruyu sordurun', m: 'Kahraman/rol kim? Konu ne? Anlatım üslubu nasıl? Kaç madde / format ne?' },
    { b: '3️⃣ Sihirbazda istemi kurdurun', m: 'Adım 1 şablon, Adım 2 görev, Adım 3 yazma. Metin ya da görsel istemi seçilebilir.' },
    { b: '4️⃣ Önce–sonra karşılaştırın', m: 'Tamamlanan istemi ilk hâliyle yan yana okutun.' }
  ],

  10: [
    { b: 'ℹ️ İçerik hazırlanıyor', m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
    { b: '1️⃣ Eski istemini aç', m: 'Öğrenci 6–9. derslerden birindeki istemini bulup sonucu tekrar üretir.' },
    { b: '2️⃣ Üç geliştirme komutu yaz', m: '“Örnek ekle.” · “Cümleleri kısalt.” · “Tablo hâline getir.”' },
    { b: '3️⃣ Gelişim sergisi', m: 'İlk, ikinci ve son hâli yan yana panoya asın; en çok fark hangi adımda?' }
  ]
};

for (var _e in AI_EKRAN) {
  if (AI_DERSLER[_e]) AI_DERSLER[_e].ekran = AI_EKRAN[_e];
}
