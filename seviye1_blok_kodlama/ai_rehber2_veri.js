/* =========================================================================
   AI-GALAXY • İLKOKUL 2 • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ilkokul2/ders_linkleri_ve_sifreleri.md dosyasından,
   etkinlik adları ve bölüm başlıkları ilkokul2/dersN/dersN_M.html
   dosyalarının gerçek içeriğinden alınmıştır. Uydurulan başlık yoktur.
   ========================================================================= */

var AI_DERSLER = {

  1: {
    ad: 'Yapay Zekâ Nedir? (Komut mu, Soru mu?)',
    emoji: '🙋',
    konu: 'Komut mu, soru mu?',
    tekCumle: 'Yapay zekâ bir arkadaş değil, bir <b>yardımcıdır</b>: ona nazik ve açık konuşursak istediğimizi yapar. Bu derste çocuk “soru sormak” ile “iş istemek” arasındaki farkı keşfeder.',
    neden: [
      '2. sınıfta çocuk artık okuyup yazabiliyor; bu yüzden bu yıl <b>kendi cümlesini kendisi kurar</b>. İlk ders bu alışkanlığın temelini atar.',
      'Nezaket ve açıklık aynı beceridir: “ver şunu” ile “bana … verir misin” arasındaki fark, hem sınıfta hem ekranda işe yarar.',
      '“Komut mu, soru mu?” ayrımı, ilerideki blok kodlama derslerindeki <b>komut</b> kavramının dil tarafındaki karşılığıdır.'
    ],
    kazanim: [
      'Soru cümlesi ile <b>komut (görev) cümlesini</b> ayırt eder.',
      'Belirsiz bir isteği <b>açık</b> hâle getirir.',
      'İsteğini nazik bir kalıpla (“Lütfen … yazar mısın?”) söyler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Nazik mi, kaba mı?” (5 dk)',
        m: 'Aynı isteği iki türlü söyleyin: <b>“Kalemi ver.”</b> / <b>“Kalemi verir misin lütfen?”</b> Çocuklara sorun: “Hangisini duymak daha güzel?” Aynı şeyin yapay zekâ için de geçerli olduğunu söyleyin.' },
      { b: '2️⃣ Soru mu, komut mu? (5 dk)',
        m: 'Tahtaya iki kutu çizin: <b>SORUYORUM ❓</b> / <b>İSTİYORUM ⚡</b>. Cümleleri okuyun, çocuklar doğru kutuyu göstersin. (“Kedi kaç yaşında yaşar?” = soru · “Bana bir kedi resmi çiz.” = komut)' },
      { b: '3️⃣ Etkinlik (20 dk)',
        m: 'Ekrandaki üç etkinliği sırayla yaptırın (4. slayttaki tabloya bakın).' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes tek bir nazik komut cümlesi yazsın ve okusun: <b>“Lütfen bana … yazar mısın?”</b> Panoya asın; yıl boyunca kalıp olarak kullanılacak.' }
    ],
    ornekler: [
      { kotu: 'resim', iyi: 'Lütfen bana kar yağarken şemsiye tutan bir penguen resmi çizer misin?', not: 'Nezaket + kim + nerede + ne yapıyor.' },
      { kotu: 'bana bir şey anlat', iyi: 'Bana ormanda kaybolan bir tavşanı anlatan 3 cümle yazar mısın?', not: 'Konu + sayı belli.' },
      { kotu: 'kedi nasıl?', iyi: 'Kediyi anlatan 3 sıfat söyler misin?', not: 'Soru da olsa <b>ne istediğimiz</b> net olmalı.' }
    ],
    sorular: [
      'Bu cümle soru mu, komut mu? Nereden anladın?',
      '“Bana bir şey çiz” dediğimde ne çizecek? Ne eksik?',
      'Arkadaşından bir şey isterken nasıl söylersin? Yapay zekâya neden farklı söyleyelim?',
      'Sonuç istediğimiz gibi olmadıysa suç kimde? (<i>Cevap: hata değil, eksik anlatım</i>)'
    ],
    ipuclari: [
      '2. sınıfta çocuklar yazabildiği için <b>cümleyi kendileri yazsın</b>; öğretmen sadece okutup düzelttirsin.',
      '“Lütfen” kelimesi cevabı sihirli biçimde değiştirmez; ama <b>açık ve kibar konuşma alışkanlığı</b> tüm yıl işe yarar. Bunu açıkça söyleyin.',
      'Yanlış seçim yapan öğrenciye “yanlış” demeyin; <b>“eksik”</b> deyin ve neyi ekleyeceğini sordurun.'
    ]
  },

  2: {
    ad: 'Kutup Macerası & Tek ve Açık Görev',
    emoji: '🐧',
    konu: 'Tek ve açık görev',
    tekCumle: 'Bir seferde <b>tek bir iş</b> isteriz. Karışık ve çok işli cümleler yerine, tek ve açık bir görev vermeyi öğreniyoruz.',
    neden: [
      'Çocuk heyecanlanınca üç isteği tek cümlede söyler; sonuç karışır. “Tek görev” kuralı bunu düzeltir.',
      'Bir işi parçalara ayırmak, kodlamadaki <b>adım adım komut</b> mantığının tam kendisidir.',
      'Kısa ve tek amaçlı cümle kurmak, Türkçe dersindeki cümle bilgisini doğrudan destekler.'
    ],
    kazanim: [
      'Bir istekte <b>tek görev</b> olmasının nedenini söyler.',
      'Karışık bir cümleyi iki ayrı göreve böler.',
      'Görev cümlesinde <b>fiilin</b> (yaz, çiz, anlat, say) zorunlu olduğunu bilir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Üç işi aynı anda” (5 dk)',
        m: 'Bir öğrenciye aynı anda üç şey söyleyin: “Tahtaya çık, adını yaz, sonra da bir şarkı söyle.” Karışıklığı gösterin: <b>“Bir seferde bir iş.”</b>' },
      { b: '2️⃣ Kutup örneği (5 dk)',
        m: 'Tahtaya yazın: <i>“Kutup ayısını anlat, penguen çiz, sonra da bir şiir yaz.”</i> Sınıfça <b>üç ayrı göreve</b> bölün.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla yapılır; 2. etkinlikte gruplar 5 adımda kendi promptunu kurar.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her çocuk <b>tek görevli</b> bir cümle yazsın: “Bana … yaz/çiz/anlat.” Yanına kaç cümle istediğini de eklesin.' }
    ],
    ornekler: [
      { kotu: 'Kutup ayısını anlat ve penguen çiz.', iyi: 'Kutup ayısını anlatan 3 cümle yaz.', not: 'İki görev ayrıldı; sayı eklendi.' },
      { kotu: 'penguen', iyi: 'Buzun üstünde kayan sevimli bir penguen çiz.', not: 'Fiil + yer + sıfat.' },
      { kotu: 'kutup hakkında her şey', iyi: 'Kutupta yaşayan 4 hayvanı madde madde yaz.', not: '“Her şey” yerine <b>sayı</b> ve <b>biçim</b>.' }
    ],
    sorular: [
      'Bu cümlede kaç tane iş var? Ayırabilir miyiz?',
      'Görev cümlesinde hangi kelime kesinlikle olmalı? (<i>fiil</i>)',
      '“Her şeyi anlat” dersek yapay zekâ nereden başlar?',
      'Sen arkadaşına aynı anda üç iş versen ne olur?'
    ],
    ipuclari: [
      'Uzun cümleleri tahtada <b>makasla keser gibi</b> bölün; görsel ayırma çocukta iyi oturuyor.',
      'Her görevin sonuna “kaç cümle / kaç madde” eklemeyi alışkanlık hâline getirin — 4. derste bu konu derinleşecek.',
      'Grup çalışmasında konuşma sırasını kartla verin; herkes bir adım seçsin.'
    ]
  },

  3: {
    ad: 'Orman Safari & Konu Ekleme Stratejisi',
    emoji: '🦁',
    konu: 'Konu ekliyorum',
    tekCumle: 'Her istemin bir <b>konusu</b> vardır: uzay mı, orman mu, spor mu, masal mı? Konuyu söylersek yapay zekâ nereye bakacağını bilir.',
    neden: [
      'Konu belirtmek, sonucu daraltmanın en hızlı yoludur — çocuk tek kelimeyle sonucu değiştirdiğini görür.',
      'Görsel üretimde konu + kahraman + stil + mekân dörtlüsü bu derste ilk kez birlikte kullanılır.',
      'Konu seçimi, çocuğun kendi ilgi alanını fark etmesini sağlar; motivasyonu yükseltir.'
    ],
    kazanim: [
      'Bir istemin <b>konusunu</b> adlandırır (uzay, doğa, spor, okul, masal).',
      'Konuya uygun görsel ve stili eşleştirir.',
      'Konu + kahraman + stil + mekân kartlarını birleştirip cümle kurar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Bu hangi evren?” (5 dk)',
        m: 'Beş resim gösterin (uzay, orman, spor sahası, okul, masal). Çocuklar konuyu adlandırsın. Aynı kahramanı farklı konulara taşıyın: <b>“Panda uzayda mı, ormanda mı?”</b>' },
      { b: '2️⃣ Konu ekleme denemesi (5 dk)',
        m: 'Tahtaya “bir kedi çiz” yazın. Sonra sırayla ekleyin: <i>uzayda</i>, <i>ormanda</i>, <i>okulda</i>. Her eklemede sınıf hayalindeki resmi anlatsın.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → çark oyunu → rehber sırasıyla ilerleyin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her grup bir dörtlü kursun: <b>konu + kahraman + stil + mekân</b>. En yaratıcı kombinasyona alkış.' }
    ],
    ornekler: [
      { kotu: 'bir kedi çiz', iyi: 'Uzayda astronot kıyafeti giymiş bir kedi çiz.', not: 'Konu (uzay) + kıyafet ayrıntısı.' },
      { kotu: 'hayvan resmi', iyi: 'Masalsı bir ormanda yürüyen ayı çiz.', not: 'Konu + mekân + kahraman.' },
      { kotu: 'panda', iyi: 'Paten kayan bir panda çiz, spor konulu olsun.', not: 'Konu açıkça söylendi.' }
    ],
    sorular: [
      'Bu resmin konusu ne? Nereden anladın?',
      'Aynı kahramanı başka bir konuya taşısak ne değişir?',
      'Hangi konu sana daha yakın: uzay mı, orman mı, spor mu?',
      'Konu söylemezsek yapay zekâ nereye bakar?'
    ],
    ipuclari: [
      'Çark oyununda çıkan komik kombinasyonları silmeyin — <b>hata değil, keşif</b> olarak kullanın.',
      'Konu kelimesini her derste tekrar edin; yıl boyunca kullanılacak bir “etiket”tir.',
      'Görsel üretim yavaş olabilir; beklerken sınıfa “sizce ne çıkacak?” diye tahmin ettirin.'
    ]
  },

  4: {
    ad: 'Uzunluk Belirleme & İstem Listesi Sihirbazı',
    emoji: '📏',
    konu: 'Uzunluğu belirliyorum',
    tekCumle: 'Cevabın <b>ne kadar uzun</b> olacağını biz söyleriz: 3 cümle mi, 4 madde mi, 5 kelime mi? Sınır koymak okumayı kolaylaştırır.',
    neden: [
      '2. sınıf öğrencisi uzun metni okuyamaz ve sıkılır. Sınır koymak <b>okunabilir</b> sonuç üretir.',
      'Sayma ve ölçme becerisi matematik dersiyle doğrudan birleşir: cevabı parmakla sayarız.',
      '“Kaç tane?” sorusu, ilerideki bütün istemlerde kullanılacak bir alışkanlıktır.'
    ],
    kazanim: [
      'İsteme <b>cümle / madde / kelime sınırı</b> ekler.',
      'Gelen cevabı sayarak sınıra uyup uymadığını kontrol eder.',
      'Uzun ve kısa cevabı karşılaştırıp hangisinin daha kullanışlı olduğunu söyler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Kaç cümle?” (5 dk)',
        m: 'Bir öğrenciye “tatilini anlat” deyin, sonra “tatilini <b>2 cümleyle</b> anlat” deyin. İkisini karşılaştırın.' },
      { b: '2️⃣ Sayarak kontrol (5 dk)',
        m: 'Tahtaya bir cevap yazın. Sınıfça <b>parmakla sayın</b>: bir… iki… üç. “İstediğimiz kaçtı?” diye sorun.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvarda sınır koyma, çark oyununda uzunluk kuralı, rehberde 3-4-2 kuralları.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Panoya asın: <b>“Kaç cümle? Kaç madde? Kaç kelime?”</b> Yıl boyunca bu üç soru sorulacak.' }
    ],
    ornekler: [
      { kotu: 'Sağlık hakkında yaz.', iyi: 'Sağlıklı olmak için yapılması gerekenleri 3 cümleyle yaz.', not: 'Cümle sınırı eklendi.' },
      { kotu: 'Sporları anlat.', iyi: 'Sevilen 4 sporu madde madde yaz.', not: 'Madde sayısı + biçim.' },
      { kotu: 'Uzun bir masal yaz.', iyi: 'Kutup ayısı hakkında 2 cümlelik kısa bir masal yaz.', not: 'Kısa = okunabilir.' }
    ],
    sorular: [
      'Kaç cümle istedik? Gelen kaç cümle?',
      'Uzun cevabı okumak mı kolay, kısa cevabı mı?',
      'Liste ile düz yazı arasındaki fark ne?',
      'Sınır koymazsak ne olur?'
    ],
    ipuclari: [
      'Sayarken <b>her cümlenin sonundaki noktayı</b> gösterin; noktalama bilgisi pekişir.',
      'Sınıf için pratik ölçü: 2. sınıfta <b>2–4 cümle</b> ya da <b>3–5 madde</b> idealdir.',
      'Sınıra uymayan cevabı silmeyin; “nasıl kısaltırız?” diye sınıfça düzelttirin.'
    ]
  },

  5: {
    ad: 'Nasıl Olsun? Nezaketli Masal Yazan AI',
    emoji: '🌈',
    konu: 'Nasıl olsun?',
    tekCumle: 'Aynı bilgi <b>komik</b>, <b>sakin</b>, <b>meraklı</b> ya da <b>bilgili</b> anlatılabilir. “Nasıl olsun?” sorusu, anlatımın havasını (tonunu) seçmektir.',
    neden: [
      'Duygu tonu, çocuğun sıfat dağarcığını hızla büyütür — Türkçe dersinin sıfat konusuyla birebir örtüşür.',
      'Aynı cümlenin farklı tonlarını duymak, empati ve ses tonu farkındalığı geliştirir.',
      'Ton seçmek, sonucu değiştiren en eğlenceli ve en görünür ayardır; çocuk sebep-sonucu net görür.'
    ],
    kazanim: [
      'Bir anlatımın <b>tonunu</b> adlandırır (komik, sakin, meraklı, bilgili).',
      'İsteme uygun <b>sıfatlar</b> ekler.',
      'Aynı konuyu iki farklı tonla anlatıp farkı açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı cümle, dört ton (5 dk)',
        m: '“Bugün hava yağmurlu.” cümlesini sırayla <b>komik, sakin, meraklı, bilgili</b> okuyun. Çocuklar tonu tahmin etsin. Bu dramatizasyon dersin kalbidir.' },
      { b: '2️⃣ Hayvan–ton eşleşmesi (5 dk)',
        m: 'Etkinlikteki dörtlüyü tanıtın: <b>Komik Rakun</b>, <b>Bilge Baykuş</b>, <b>Neşeli Yunus</b>, <b>Zeki Tilki</b>. Her hayvan bir tonu temsil eder.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → duygu tiyatrosu → sıfat rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her çocuk bir ton seçip tek cümlesini <b>o tonda</b> okusun; sınıf tonu tahmin etsin.' }
    ],
    ornekler: [
      { kotu: 'Bana bir masal yaz.', iyi: 'Bana komik ve neşeli bir tonda, 3 cümlelik bir yunus masalı yaz.', not: 'Ton + sayı + kahraman.' },
      { kotu: 'tilki', iyi: 'Zeki ve kurnaz bir tilkiyi meraklı bir tonda anlat.', not: 'İki sıfat + ton.' },
      { kotu: 'baykuş anlat', iyi: 'Bilge baykuşu sakin bir tonda, 2 cümleyle anlat.', not: 'Ton + sınır.' }
    ],
    sorular: [
      'Bu cümle hangi tonda söylendi? Nereden anladın?',
      'Aynı cümleyi komik söylesek ne değişir?',
      'Hangi sıfatlar “sakin” hissettirir?',
      'Ton söylemezsek yapay zekâ hangi tonu seçer?'
    ],
    ipuclari: [
      'Tonu <b>önce siz canlandırın</b>; çocuk duymadan seçemez.',
      'Sıfat bulan her öğrenciyi alkışlatın — kelime dağarcığı ödüllendirmeyle büyür.',
      'Ton ile ses yüksekliğini karıştıran olursa düzeltin: ton <b>hava</b>dır, bağırmak değildir.'
    ]
  },

  6: {
    ad: 'Kimin İçin? Yapay Zekâ İle Ses ve Müzik',
    emoji: '🎯',
    konu: 'Kimin için?',
    tekCumle: 'Anlatımı <b>kime</b> yaptığımızı söylersek yapay zekâ doğru kelimeleri seçer: minik kardeşe başka, bilim insanına başka anlatılır.',
    neden: [
      'Hedef kitle düşünmek, çocuğun karşısındakini hesaba katmasını sağlar; sosyal beceriyi doğrudan besler.',
      'Aynı bilgiyi sadeleştirmek, çocuğun konuyu gerçekten anlayıp anlamadığını ortaya çıkarır.',
      'Rol ve seviye seçimi, ileriki derslerdeki karakter ve anlatıcı çalışmalarının temelidir.'
    ],
    kazanim: [
      'İsteme <b>dinleyici</b> ekler (“2. sınıf öğrencisine anlat”).',
      'Zor kelimeleri dinleyiciye göre sadeleştirir.',
      'Farklı rollerin (öğretmen, bilim insanı, dede, akran) anlatımını ayırt eder.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Kime anlatıyorum?” (5 dk)',
        m: 'Bir öğrenciye aynı olayı önce <b>minik kardeşine</b>, sonra <b>öğretmenine</b> anlattırın. Farkı sınıfça bulun.' },
      { b: '2️⃣ Kelime sadeleştirme (5 dk)',
        m: 'Zor bir kelime yazın (“fotosentez”, “yerçekimi”). <b>“Bunu kardeşim anlar mı?”</b> diye sorun ve birlikte sadeleştirin.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → dinleyici radyosu → rol rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her çocuk bir dinleyici seçsin: <b>“Ben bunu … anlatacağım.”</b> Cümlesini o dinleyiciye göre yazsın.' }
    ],
    ornekler: [
      { kotu: 'Yerçekimini anlat.', iyi: 'Yerçekimini 2. sınıf öğrencisinin anlayacağı şekilde 3 cümleyle anlat.', not: 'Dinleyici + sınır.' },
      { kotu: 'Uzayı anlat.', iyi: 'Uzayı minik kardeşime anlatır gibi, çok basit kelimelerle anlat.', not: 'Seviye belirtildi.' },
      { kotu: 'Bilgi ver.', iyi: 'Masalcı dede tonuyla, çocuklara ayıları anlat.', not: 'Rol + hedef kitle.' }
    ],
    sorular: [
      'Bu cevabı kim okuyacak?',
      'Bu kelimeyi kardeşim anlar mı? Nasıl söylerdik?',
      'Öğretmen ile arkadaşına aynı şekilde mi anlatırsın?',
      'Dinleyiciyi söylemezsek ne olur?'
    ],
    ipuclari: [
      '“2. sınıf öğrencisine anlat” kalıbını panoya asın; bu yılın en çok işe yarayan cümlesidir.',
      'Sadeleştirme yaparken çocuğun kendi kelimesini kullanın, siz yazmayın.',
      'Rol seçimini abartılı canlandırın (dede sesi, bilim insanı sesi) — kalıcılığı artırır.'
    ]
  },

  7: {
    ad: 'Çıktı Biçimi & Maarif Modeli Sohbeti',
    emoji: '📋',
    konu: 'Çıktı biçimi',
    tekCumle: 'Cevabın <b>biçimini</b> biz seçeriz: liste mi, masal mı, şiir mi, bilmece mi, karşılıklı konuşma mı?',
    neden: [
      'Biçim seçmek, aynı bilgiyi farklı kalıplara dökmeyi öğretir — metin türleri konusunu doğrudan destekler.',
      'Listenin alt alta, diyaloğun karşılıklı yazıldığını görmek, çocuğun sayfa düzeni farkındalığını geliştirir.',
      'Bu ders, Passaparola oyunuyla yıl boyunca öğrenilen AI kelimelerinin ilk büyük tekrarıdır.'
    ],
    kazanim: [
      'İsteme <b>biçim</b> ekler (liste, masal, şiir, bilmece, diyalog).',
      'Biçimleri görünüşünden tanır.',
      'Öğrendiği yapay zekâ kelimelerini hatırlayıp tanımını söyler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Biçim tahmini (5 dk)',
        m: 'Dört metni <b>sesli okuyun</b>: bir liste, bir bilmece, bir masal başlangıcı, bir diyalog. Çocuklar biçimi adlandırsın.' },
      { b: '2️⃣ Görünüşe dikkat (5 dk)',
        m: 'Tahtada listeyi alt alta, diyaloğu karşılıklı yazın. <b>Biçim gözle de ayırt edilir.</b>' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → canlı Passaparola → biçim rehberi. Passaparola için üstteki sarı düğmeyi kullanın.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Aynı konuyu iki biçimde isteyin (önce liste, sonra masal) ve sonuçları yan yana okutun.' }
    ],
    ornekler: [
      { kotu: 'Kutup ayısını anlat.', iyi: 'Kutup ayısını 4 maddelik liste hâlinde yaz.', not: 'Biçim: liste.' },
      { kotu: 'Bir şey yaz.', iyi: 'Yunuslar hakkında kafiyeli 4 satırlık bir şiir yaz.', not: 'Biçim + satır sayısı.' },
      { kotu: 'Bilmece.', iyi: 'Cevabı “penguen” olan eğlenceli bir bilmece yaz.', not: 'Biçim + cevap belirtildi.' }
    ],
    sorular: [
      'Bu yazı hangi biçimde? Nereden anladın?',
      'Aynı bilgiyi liste yerine masal olarak istesek ne değişir?',
      'Diyalog nedir? Kaç kişi konuşur?',
      'Hangi biçim okumak için daha kolay geldi?'
    ],
    ipuclari: [
      'Passaparola tahtada oynanır; <b>cevap düğmeyle açılır</b>, öğrenciler görmeden tahmin eder.',
      'Passaparola’da <b>I</b> ve <b>İ</b> ayrı harflerdir; yazarken karıştırmayın.',
      'Biçim menüsünü (📋 📖 ✍️ 🧩 💬) panoya asın; sonraki derslerde referans olur.'
    ]
  },

  8: {
    ad: 'Kurallar Ekliyorum & AI Tabu Oyunu',
    emoji: '🛡️',
    konu: 'Kurallar ekliyorum',
    tekCumle: 'İsteme <b>kural</b> ekleriz: “şu kelimeyi kullanma”, “korkutucu olmasın”, “basit kelimeler kullan”. Kural koymak sonucu güvenli ve bize uygun yapar.',
    neden: [
      'Yasak kelime koymak, çocuğu <b>başka yoldan anlatmaya</b> zorlar; kelime dağarcığı ve yaratıcılık birlikte çalışır.',
      '“Korkutucu şeyler istemeyiz” kuralı bir <b>güvenlik</b> konusudur ve yıl boyu geçerli sınıf kuralı olmalıdır.',
      'Kural koymak, kodlamadaki koşul ve sınır kavramlarının dil tarafındaki ilk hâlidir.'
    ],
    kazanim: [
      'İsteme <b>yasaklı kelime</b> ve <b>sınır</b> ekler.',
      'Bir şeyi yasaklı kelimeleri kullanmadan tarif eder.',
      'Güvenli olmayan isteği fark eder ve düzeltir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Sınıf tabusu (5 dk)',
        m: '“Kedi”yi <b>miyav, fare, tüy</b> demeden anlattırın. Zorluğu ve eğlenceyi birlikte yaşayın.' },
      { b: '2️⃣ Kural yazma (5 dk)',
        m: 'Tahtaya üç kural yazın: <b>3 cümle olsun · “büyük” kelimesini kullanma · korkutucu olmasın.</b> Aynı isteği bu kurallarla tekrar yazdırın.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → AI Tabu yarışması → sanat stili rehberi. Tabu kartları için üstteki sarı düğmeyi kullanın.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Sınıf kuralını hep birlikte söyleyin: <b>“Yapay zekâdan korkutucu şeyler istemeyiz.”</b> Panoya asın.' }
    ],
    ornekler: [
      { kotu: 'Bir canavar çiz.', iyi: 'Sevimli ve komik bir canavar çiz; korkutucu olmasın.', not: 'Güvenlik kuralı eklendi.' },
      { kotu: 'Pandayı anlat.', iyi: 'Pandayı anlat ama “bambu”, “Çin” ve “ayı” kelimelerini kullanma.', not: 'Yasaklı kelime kuralı.' },
      { kotu: 'Uzun uzun yaz.', iyi: 'Basit kelimelerle, 3 cümleyi geçmeden yaz.', not: 'Sadelik + sınır.' }
    ],
    sorular: [
      'Bu kelimeyi kullanmadan nasıl anlatırsın?',
      'Hangi istekler güvenli değildir? Neden?',
      'Kural koymak sonucu nasıl değiştirdi?',
      'Sınıfımızın kuralları var mı? Yapay zekânın neden olmasın?'
    ],
    ipuclari: [
      'Tabu oynatırken <b>öğretmen uyarısı ve kurallar etkinliğin içinde yazılıdır</b>; başlamadan okutun.',
      'Kuralı bozan gruba ceza vermeyin; sırayı devrettirin. Ceza yerine <b>sıra</b> kullanın.',
      'Yasaklı kelime listesi 3’ü geçmesin; 2. sınıfta 3 kelime zaten yeterince zordur.'
    ]
  },

  9: {
    ad: 'Eksik Ayrıntıyı Bul & İstem Dedektifi',
    emoji: '🔍',
    konu: 'Eksik ayrıntıyı bul',
    tekCumle: 'Sonuç istediğimiz gibi değilse istemimizde bir <b>eksik</b> vardır. Dedektif gibi bakıp eksik ayrıntıyı buluruz.',
    neden: [
      'Yıl boyunca öğrenilen bütün ögeler (konu, sayı, ton, dinleyici, biçim, kural) bu derste bir kontrol listesine dönüşür.',
      '“Hata değil, eksik” bakışı çocuğun denemekten korkmamasını sağlar.',
      'Eksiği bulmak, kendi çalışmasını gözden geçirme (öz değerlendirme) becerisidir.'
    ],
    kazanim: [
      'Bir istemdeki eksik ögeyi <b>adlandırır</b>.',
      'Bozuk bir istemi tamamlayıp düzeltir.',
      'Önce ve sonra hâlini karşılaştırıp farkı açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Bir şey çiz” (5 dk)',
        m: 'Tahtaya sadece <b>“Bir şey çiz.”</b> yazın. Sınıf ne eksik olduğunu bulsun: kim? nerede? nasıl? kaç tane?' },
      { b: '2️⃣ Dedektif listesi (5 dk)',
        m: 'Panoya dört soruyu asın: <b>KAHRAMAN KİM? · NEREDE GEÇİYOR? · NASIL OLSUN? · KAÇ CÜMLE?</b> Her eksik istemde sırayla sordurun.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Laboratuvar → canlı dedektiflik oyunu → tamamlama rehberi.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İlk ve son hâli yan yana okutun: <b>fark çocuğun kendi eseridir.</b>' }
    ],
    ornekler: [
      { kotu: 'Bir ev çiz.', iyi: 'Ormanın içinde, kırmızı çatılı, küçük bir ahşap ev çiz.', not: 'Mekân + renk + malzeme.' },
      { kotu: 'Bir hayvan anlat.', iyi: 'Kutupta yaşayan bir ayıyı 3 cümleyle, sakin bir tonda anlat.', not: 'Kim + nerede + kaç + ton.' },
      { kotu: 'Gökyüzü çiz.', iyi: 'Gün batımında, mor ve turuncu bulutları olan bir gökyüzü çiz.', not: 'Zaman + renk.' }
    ],
    sorular: [
      'Bu istemde ne eksik?',
      'Kahraman kim? Nerede geçiyor? Nasıl olsun? Kaç cümle?',
      'Eksiği ekleyince sonuç nasıl değişti?',
      'Sen kendi cümlende bir eksik bulabilir misin?'
    ],
    ipuclari: [
      'Dört dedektif sorusunu <b>her derste</b> tekrar ettirin; yıl sonuna kadar ezberlensin.',
      'Öğrencinin ilk denemesini silmeyin; karşılaştırma malzemesidir.',
      '“Yanlış” kelimesini kullanmayın; <b>“eksik”</b> deyin.'
    ]
  },

  10: {
    ad: 'Sonucu Geliştiriyorum & Akıllı Şehir Mimarları',
    emoji: '🏙️',
    konu: 'Sonucu geliştiriyorum',
    tekCumle: 'İlk sonuç son sonuç değildir: beğenmediğimizde istemi <b>geliştirip tekrar</b> deneriz.',
    neden: [
      'Yeniden deneme alışkanlığı, yılın en önemli kazanımıdır: çocuk ilk sonuçta durmayı bırakır.',
      'Geliştirme, öğrenilen dokuz dersin hepsini tek bir çalışmada birleştirir.',
      'Akıllı şehir teması, yapay zekânın günlük hayatta ne işe yaradığını somutlaştırır.'
    ],
    kazanim: [
      'Beğenmediği sonucu <b>geliştirerek</b> tekrar dener.',
      'Öğrendiği ögeleri (konu, sayı, ton, dinleyici, biçim, kural) tek istemde birleştirir.',
      'Çalışmasını sınıfa sunar.'
    ],
    nasil: [
      { b: 'ℹ️ İçerik hazırlanıyor',
        m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
      { b: '1️⃣ En sevdiğin etkinliği aç (10 dk)',
        m: 'Öğrenciler 1–9. derslerden birini açıp eski istemini bulur.' },
      { b: '2️⃣ Basamak basamak büyüt (20 dk)',
        m: 'Tahtaya basamak çizin: <b>konu → sayı → ton → kime → biçim → kural</b>. Cümleyi her basamakta biraz daha büyütün.' },
      { b: '3️⃣ Sergi (10 dk)',
        m: 'En iyi 3 istem ve sonucu panoya asın; veliler de görsün.' }
    ],
    ornekler: [
      { kotu: 'Bir şehir çiz.', iyi: 'Güneş panelleri ve yeşil parkları olan akıllı bir şehri, çocuklara anlatır gibi 3 cümleyle anlat.', not: 'Konu + ayrıntı + dinleyici + sınır.' },
      { kotu: 'Beğenmedim, tekrar yap.', iyi: 'Aynı resmi yap ama gökyüzü gün batımı olsun ve daha renkli olsun.', not: '<b>Neyin</b> değişeceği söylendi.' },
      { kotu: 'Daha iyi olsun.', iyi: 'Cümleleri kısalt, 3 cümleyi geçme ve basit kelimeler kullan.', not: '“Daha iyi” değil, <b>ölçülebilir</b> istek.' }
    ],
    sorular: [
      'Sonucu neden beğenmedin? Neresini değiştirelim?',
      'Hangi ögeyi eklersek daha iyi olur?',
      'İlk hâli ile son hâli arasında ne fark var?',
      'Bir yıl boyunca öğrendiğimiz kaç şeyi bu cümlede kullandın?'
    ],
    ipuclari: [
      '“Daha iyi yap” demek yetmez; <b>neyin</b> değişeceğini söyletin.',
      'Bu hafta yıl özeti olarak işlenebilir; yeni içerik geldiğinde program sayfası güncellenecektir.',
      'Sergide her çocuğun bir çalışması yer alsın; kimse dışarıda kalmasın.'
    ]
  }
};

/* =========================================================================
   ETKİNLİKLER — ilkokul2/dersN/dersN_M.html dosyalarındaki gerçek adlar,
   gerçek bölüm başlıkları ve sınıfta nasıl yürütüleceği.
   ========================================================================= */

var AI_ETKINLIK = {

  1: [
    { ad: 'Nezaketli Komutlar ve Açık İfadeler Sihirbazı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Nezaketli ve açık istem kurma; belirsiz ifadeyi açık ifadeye çevirme.',
      sayfalar: ['Nezaketli & Açık İletişim!', 'Nitelikli Promptun 4 Sihirli Anahtarı!', 'Belirsiz vs. Açık İfadeler!', '20 Bölümlük Nezaket & İletişim Macerası!'],
      nasil: 'İlk iki sayfayı <b>tahtadan birlikte</b> okuyun; 4 anahtarı sınıfça sayın. 3. sayfada belirsiz cümleleri çocuklara açtırın. 20 bölüm bireysel yapılır; <b>sınıf süresine göre 8–10 bölüm yeterlidir.</b>' },
    { ad: 'Nezaket ve İletişim Dedektifleri', sure: '15 dk', tur: 'Grup · 5N1K oyunu',
      ne: 'Nezaket sözcüğü + nerede + ne zaman + ne yapıyor seçerek grupla istem kurma.',
      sayfalar: ['AI Resim Oyunu: 5N1K Dedektifliği!', '1. Adım: Nezaket Sözcüğünü Seç!', '2. & 3. Soru: NEREDE & NE ZAMAN?', '4. Soru: NE YAPIYOR?', 'Sihirli Prompt Fabrikası!', 'Grup Zamanı & En Komik Prompt Yarışması!'],
      nasil: 'Grupları 3–4 kişi yapın. Her grup dört kutuyu doldurur, fabrikada cümle birleşir. Sonunda her grup cümlesini <b>okur</b>; sınıf en komiğini seçer.' },
    { ad: 'Nezaketli Prompt Rehberi & Başarı Rozeti', sure: '10 dk', tur: 'Kapanış · videolu rehber',
      ne: 'Sıfat sihri videosu ve beş örnek görselin istemleri; başarı rozeti.',
      sayfalar: ['Sıfat Sihri & Video Rehberi', 'Sevimli Kızıl Panda', 'Masalsı Mantar Ev', 'Neşeli Robot Dost', 'Gökkuşağı Denizanası', 'Saat Kulesi Fil'],
      nasil: 'Videoyu tahtadan izletin. Her görselde <b>“bu istem neyi söylüyor?”</b> diye çözümletin; bir istemi deftere yazdırın.' }
  ],

  2: [
    { ad: 'Doğa Kaşifleri & Detaylı Betimleme Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Soru ile komutu ayırma, belirsiz görevi netleştirme, çıktı biçimi seçme.',
      sayfalar: ['Soru mu, Komut mu?', 'Belirsiz Göreve Son!', 'Çıktı Biçimini Seç!', '20 Harika Kaşif Görevi!'],
      nasil: '1. sayfayı tahtada birlikte yapın: her cümlede sınıf hep bir ağızdan <b>“SORU!”</b> ya da <b>“KOMUT!”</b> desin. 2. sayfada eksik olan genelde <b>fiildir</b>; çocuklara buldurun.' },
    { ad: '5 Adımda Süper Prompt Laboratuvarı', sure: '15 dk', tur: 'Grup · kart atölyesi',
      ne: 'Görev türü, konu, ton ve cümle sınırını sırayla seçip grup istemi kurma.',
      sayfalar: ['Ne İstiyorsun? (Görev Türü)', 'Hangi Konu? (Ana Özne)', 'Nasıl Olsun? (Duygu & Ton)', 'Kaç Cümle Olsun? (Sınır)', 'Grubunuzun Süper Promptu!', 'Öğretmen & Sınıf Oylaması!'],
      nasil: 'Kartlar seçildikçe cümle büyür. <b>Her adımda durup “şimdi ne eklendi?” diye sorun.</b> Son adımda sınıf oylaması yapın.' },
    { ad: 'Soru, Komut ve Ayrıntı Rehberi', sure: '10 dk', tur: 'Kapanış · örnekli rehber',
      ne: 'Soru–komut farkı ve belirsizlik örnekleri; usta kaşif kartı.',
      sayfalar: ['Soru Sormak mı, Komut Vermek mi?', 'Kutup Ayısı Örneği', 'Penguen ve Belirsizlik Örneği', 'Sevimli Robot & Duygu Ekleme', 'Meyve Bilmecesi & Biçim Seçimi', 'Usta Prompt Kaşifi Kartı'],
      nasil: 'Örnekleri sesli okutun. Panoya <b>“Bana … yaz / çiz / anlat.”</b> kalıbını asın.' }
  ],

  3: [
    { ad: 'Konu Kaşifleri & Görsel Stüdyosu', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Görselin konusunu belirleme ve konuya uygun evreni/stili eşleştirme.',
      sayfalar: ['Görselin Konusunu Seç!', 'Doğa ve Masal Evrenleri!', 'Spor ve Hareketli Konular!', '20 Harika Konu Görevi!'],
      nasil: 'Her sayfada önce <b>konuyu birlikte adlandırın</b> (“Bu hangi evren?”), sonra eşleştirmeyi çocuk yapsın. Yanlış eşleşmede “peki neresi uymadı?” diye sorun.' },
    { ad: 'Sihirli Konu Çarkı & Resim Yapbozu', sure: '15 dk', tur: 'Grup · çark oyunu',
      ne: 'Konu, kahraman, sanat stili ve mekân kartlarını birleştirip görsel yapboz kurma.',
      sayfalar: ['Konu Kartını Seç!', 'Kahraman Kartını Seç!', 'Sanat Stili Kartını Seç!', 'Mekân ve Detay Kartı!', 'Grubunuzun Tamamlanan Yapbozu!', 'Resim Oylaması ve Şampiyon!'],
      nasil: 'Gruplar sırayla kart seçer. Çıkan dörtlüyü <b>cümleye çevirtin</b>: “uzayda, çizgi film stilinde, paten kayan bir panda”. En yaratıcıya alkış.' },
    { ad: 'Soru, Komut ve Ayrıntı Rehberi (Görsel Konular)', sure: '10 dk', tur: 'Kapanış · 6 konu 6 görsel',
      ne: 'Altı farklı konunun görselleri ve istemleri; usta görsel konu kartı.',
      sayfalar: ['Uzay Konusu (Astronot Kedi)', 'Doğa Konusu (Masalsı Orman)', 'Spor Konusu (Patenli Panda)', 'Okul Konusu (Sihirli Sınıf)', 'Masallar Konusu (Alev Ejderhası)', 'Usta Görsel Konu Kartı'],
      nasil: 'Görselleri gösterip konuyu adlandırtın; bir istemi deftere yazdırın.' }
  ],

  4: [
    { ad: 'Cümle Ölçer & Prompt Dedektifi', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Cevaba cümle, madde ve kelime sınırı koymayı öğrenme.',
      sayfalar: ['Cümle Sınırı Koymayı Öğren!', 'Maddeli Liste İstiyorum!', 'Kelime Sayısı Belirleme!', '20 Harika Cümle Ölçer Görevi!'],
      nasil: 'Her sayfada gelen cevabı <b>sınıfça parmakla sayın</b> (bir… iki… üç). Sayı tutmuyorsa “istediğimiz kaçtı?” diye sorun. Bu ders matematikle birleşir.' },
    { ad: 'Sihirli İbre & Hikâye Fabrikası', sure: '15 dk', tur: 'Grup · çark + serbest yazma',
      ne: 'Uzunluk kuralını çarkla belirleyip kahraman ve duyguyu ekleyerek istem üretme.',
      sayfalar: ['Sihirli Çarkı Döndür! (Uzunluk Kuralı)', 'Kahramanı Seç veya Kendi Kelimeni Yaz!', 'Duyguyu Seç veya Kendi Duygunu Yaz!', 'Cümle Ölçer Testi!', 'Grubunuzun Özel Promptu!', 'Sınıf Cümle Şampiyonu!'],
      nasil: '2. sınıf yazabildiği için <b>“kendi kelimeni yaz”</b> kutularını mutlaka kullandırın; hazır seçenekle yetinmesinler.' },
    { ad: 'Metin Uzunluğu ve Madde Rehberi', sure: '10 dk', tur: 'Kapanış · 4 kural + rozet',
      ne: 'Cümle, madde ve bilmece kurallarının örnekli özeti.',
      sayfalar: ['3 Cümle Kuralı (Sağlık)', '4 Maddeli Liste Kuralı (Spor)', '2 Cümlelik Masal Kuralı', 'Bilmece Kuralı (Kutup Ayısı)', 'Usta Cümle Ölçer Rozeti'],
      nasil: 'Dört kuralı sınıfça yüksek sesle okuyun ve panoya asın.' }
  ],

  5: [
    { ad: 'Duygu Tonu & Sıfat Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Dört hayvanla dört anlatım tonunu (neşeli, meraklı, sakin, bilgili) keşfetme.',
      sayfalar: ['Komik Rakun ve Neşeli Ton!', 'Bilge Baykuş ve Meraklı Ton!', 'Neşeli Yunus ve Sakin Ton!', 'Zeki Tilki ve Akıllı Bilgi Tonu!'],
      nasil: '<b>Önce siz o tonda konuşarak canlandırın</b> (rakun gibi neşeli, baykuş gibi meraklı), sonra çocuk eşleştirsin. Bu dramatizasyon dersin kalbidir.' },
    { ad: 'Duygu Tiyatrosu & Renkli Ton Çarkı', sure: '15 dk', tur: 'Grup · drama',
      ne: 'Duygu maskesi ve ton seçip sıfat ekleyerek grup istemi üretme.',
      sayfalar: ['Duygu Maskesini ve Tonunu Seç!', 'Yeni Kahramanı Seç veya Kendi Karakterini Yaz!', 'Sıfat Ekle veya Öğretmeninin Kuralını Yaz!', 'Duygu Tiyatrosu Testi!', 'Grubunuzun Duygulu Promptu!', 'Sınıf Ton Şampiyonu!'],
      nasil: 'Gruplar maske çeker ve cümleyi <b>o duyguyla canlandırarak</b> okur; sınıf duyguyu tahmin eder. Öğretmen kuralı kutusuna kendi sıfatınızı yazdırabilirsiniz.' },
    { ad: 'Nitelikli Sıfat Rehberi', sure: '10 dk', tur: 'Kapanış · betimleme rehberi',
      ne: 'Deniz, orman ve bahçe betimlemeleriyle sıfat kullanımı; usta rozeti.',
      sayfalar: ['Deniz Canlıları Betimlemesi', 'Orman Canlıları Betimlemesi', 'Bilge ve Komik Sıfatlar', 'Çiçekli Bahçe Betimlemesi', 'Usta Sıfat Sihirbazı Rozeti'],
      nasil: 'Her sayfadan <b>iki yeni sıfat</b> seçtirip tahtaya yazın; sınıf sıfat panosu oluşsun.' }
  ],

  6: [
    { ad: 'Hedef Kitle & Dinleyici Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Aynı bilgiyi dört farklı dinleyiciye uygun anlatma.',
      sayfalar: ['2. Sınıf Arkadaşına Anlatım!', 'Minik Kardeşe Anlatım!', 'Uzay Bilim İnsanına Anlatım!', 'Tatlı Dedeye / Büyükanneye Anlatım!'],
      nasil: 'Her sayfada <b>“bu kelimeyi kardeşim anlar mı?”</b> sorusunu tekrarlayın. Anlaşılmayan kelimeleri birlikte sadeleştirin.' },
    { ad: 'Dinleyici Radyosu & Hedef Kitle Kulesi', sure: '15 dk', tur: 'Grup · frekans oyunu',
      ne: 'Dinleyici frekansı ve anlatım tarzı seçerek hedef kitleye uygun istem üretme.',
      sayfalar: ['Dinleyici Frekansını ve Hedef Kitleyi Seç!', 'Kahramanı Seç veya Kendi Karakterini Yaz!', 'Anlatım Tarzını Seç veya Öğretmenin Kuralını Yaz!', 'Hedef Kitle Filtresi Testi!', 'Grubunuzun Hedef Kitle Promptu!', 'Sınıf Hedef Kitle Şampiyonu!'],
      nasil: 'Her grup bir dinleyici çeker; cümlesini <b>o dinleyiciymiş gibi</b> başka bir gruba okur. Anlaşıldıysa puan.' },
    { ad: 'Rol ve İletişim Tonu Rehberi', sure: '10 dk', tur: 'Kapanış · 4 rol + rozet',
      ne: 'Öğretmen, bilim insanı, masalcı dede ve akran rollerinin anlatım farkları.',
      sayfalar: ['Sevecen Öğretmen Rolü', 'Meraklı Bilim İnsanı Rolü', 'Masalcı Dede Rolü', 'Akran Öğrenci Rolü', 'Usta Rol Sihirbazı Rozeti'],
      nasil: 'Dört rolü sırayla <b>canlandırarak</b> okutun; sınıf rolü tahmin etsin.' }
  ],

  7: [
    { ad: 'Çıktı Biçimi & Tür Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Liste, bilmece, masal ve diyalog biçimlerini tanıyıp eşleştirme.',
      sayfalar: ['Düzenli Liste Biçimi!', 'Eğlenceli Bilmece Biçimi!', 'Sihirli Masal Biçimi!', 'Karşılıklı Diyalog Biçimi!'],
      nasil: 'Her biçimi <b>önce sesli örnekleyin</b> (bir bilmece sorun, bir masal cümlesi okuyun). Listenin alt alta, diyaloğun karşılıklı olduğunu parmakla gösterin.' },
    { ad: 'Orijinal Passaparola AI Oyunu', sure: '15–20 dk', tur: 'Grup · passaparola',
      ne: '12 harflik çarkta yapay zekâ kelimelerini bulma ve grup istemi üretme.',
      sayfalar: ['Passaparola Alıştırma & Örnek Çarkı', 'Öğretmenle Canlı Passaparola Oyunu!', 'Kahramanı Seç!', 'Çıktı Türünü Seç veya İlave Bilgi Yaz!', 'Grubunuzun Passaparola Promptu!', 'Sınıf Passaparola Şampiyonu!'],
      nasil: 'Önce alıştırma çarkını birlikte deneyin, sonra canlı oyuna geçin. <b>Akıllı tahtada oynanacak öğretmen sürümü için aşağıdaki sarı düğmeyi kullanın.</b>' },
    { ad: 'Çıktı Türü ve Biçim Rehberi', sure: '10 dk', tur: 'Kapanış · 4 biçim + rozet',
      ne: 'Masal, şiir, bilmece ve liste biçimlerinin örnekli özeti.',
      sayfalar: ['Masal & Hikâye Biçimi', 'Kafiyeli Şiir Biçimi', 'Eğlenceli Bilmece Biçimi', 'Maddeli Liste Biçimi', 'Usta Biçim Sihirbazı Rozeti'],
      nasil: 'Biçim menüsünü (📖 ✍️ 🧩 📋) panoya asın; sonraki derslerde referans olsun.' }
  ],

  8: [
    { ad: 'Kural & Tabu Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Cümle sınırı, yasaklı kelime, güvenlik ve sadelik kurallarını belirleme.',
      sayfalar: ['Üç Cümle Kuralı!', 'Yasaklı Kelime Kuralı!', 'Korkutucu İfadeler Kullanma!', 'Basit Kelimeler Kullan!'],
      nasil: '3. sayfa bir <b>güvenlik</b> konusudur: “Yapay zekâdan korkutucu şeyler istemeyiz” cümlesini sınıfça tekrar ettirin ve yıl boyu geçerli sınıf kuralı yapın.' },
    { ad: 'AI Tabu ve Yasaklı Kelime Oyunu', sure: '15–20 dk', tur: 'Grup · tabu',
      ne: 'Penguen, Panda, Yunus, Aslan ve Kedi kartlarını yasaklı kelimeleri söylemeden anlatma.',
      sayfalar: ['AI Tabu Alıştırma & Örnek Kulesi', 'Sınıf AI Tabu Yarışması Başlıyor!', 'Kahramanı Seç!', 'Kural Türünü Seç veya İlave Kural Yaz!', 'Grubunuzun AI Tabu Promptu!', 'Sınıf AI Tabu Şampiyonu!'],
      nasil: 'Klasik tabu gibi oynatın. <b>Öğretmen uyarısı ve oyun kuralları etkinliğin içinde yazılıdır</b>, başlamadan okutun. Ek kart destesi için aşağıdaki sarı düğmeyi kullanın.' },
    { ad: 'Görsel ve Sanat Stili Rehberi', sure: '10 dk', tur: 'Kapanış · 4 stil + rozet',
      ne: 'Suluboya, 3D çizgi film, origami ve piksel stillerini tanıma.',
      sayfalar: ['Suluboya Resim Stili', '3D Çizgi Film Stili', 'Renkli Origami Sanatı', 'Nostaljik Piksel Sanatı', 'Usta Sanat Stili Sihirbazı Rozeti'],
      nasil: 'Dört stili yan yana gösterip <b>“aynı kahraman, farklı stil”</b> farkını sınıfça konuşun.' }
  ],

  9: [
    { ad: 'Eksik Prompt Dedektifliği', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Eksik kalan ayrıntıyı bulup istemi tamamlama.',
      sayfalar: ['Kahraman Kim?', 'Nerede Geçiyor?', 'Hikâye Nasıl Olsun?', 'Kaç Cümle Olsun?'],
      nasil: 'Dört sayfa tam olarak dört dedektif sorusudur. <b>Bu dörtlüyü panoya asın</b> ve her eksik istemde sırayla sordurun.' },
    { ad: 'Eksik Prompt Dedektifleri Grup Oyunu', sure: '15 dk', tur: 'Grup · dedektiflik',
      ne: 'Bozuk istemleri grupla tamamlama; mekân ve duyguyu ekleme.',
      sayfalar: ['Eksik Prompt Dedektifliği Alıştırma Masası', 'Öğretmenle Canlı Dedektiflik Oyunu!', 'Kahramanı Seç!', 'Mekân ve Duyguyu Tamamla veya İlave Bilgi Yaz!', 'Grubunuzun Tamamlanmış Promptu!', 'Sınıf Prompt Dedektifi Şampiyonu!'],
      nasil: 'Her gruba bir bozuk istem verin. Grup <b>eksiği bulup</b> düzeltilmiş hâlini okur. Önce/sonra farkını tahtaya yazın.' },
    { ad: 'Eksik Ayrıntı ve İstem Tamamlama Rehberi', sure: '10 dk', tur: 'Kapanış · önce/sonra',
      ne: 'Renk, mekân, doku ve gökyüzü ayrıntılarının tamamlanması.',
      sayfalar: ['Eksik Rengi Tamamlama', 'Eksik Mekânı Tamamlama', 'Eksik Dokuyu Tamamlama', 'Eksik Gökyüzü Atmosferi', 'Usta Eksik İstem Dedektifi Rozeti'],
      nasil: 'Kapanışta <b>“bugün hangi soruyu sormayı öğrendik?”</b> diye özetletin.' }
  ],

  10: [
    { ad: '10.1 Laboratuvar', sure: '15 dk', tur: 'Bireysel · hazırlanıyor',
      ne: 'Bireysel laboratuvar adımı (içerik hazırlanmaktadır).',
      nasil: 'İçerik yayınlanana kadar bu haftayı <b>yıl özeti</b> olarak işleyin: öğrenciler 1–9. derslerden en sevdikleri etkinliği açıp istemlerini geliştirsin.' },
    { ad: '10.2 Grup Etkinliği', sure: '15 dk', tur: 'Grup · hazırlanıyor',
      ne: 'Takım atölyesi ve grup istem çalışması (içerik hazırlanmaktadır).',
      nasil: 'Gruplar yıl boyunca öğrendikleri altı ögeyi (konu, sayı, ton, kime, biçim, kural) kullanarak <b>tek bir şampiyon istem</b> yazsın.' },
    { ad: '10.3 Görsel Rehber', sure: '10 dk', tur: 'Kapanış · hazırlanıyor',
      ne: 'Karşılaştırmalı görsel rehber ve sunum (içerik hazırlanmaktadır).',
      nasil: 'Yıl sonu sergisi yapın: en iyi 3 istem ve sonucu panoya asılsın.' }
  ]
};

/* Gerçek içerikler genel tanımların yerine geçsin */
for (var _d in AI_ETKINLIK) {
  if (AI_DERSLER[_d]) AI_DERSLER[_d].adimlar = AI_ETKINLIK[_d];
}

/* =========================================================================
   EKRAN KULLANIMI — çocuk ekranda ne yapacak, hangi sırayla?
   ========================================================================= */

var AI_GENEL_EKRAN = [
  { b: '🔊 Önce DİNLE', m: 'Her metnin ve her seçeneğin yanında <b>hoparlör düğmesi</b> vardır. 2. sınıfta okuma hızları çok farklıdır; <b>yavaş okuyan öğrenci için bu düğme zorunludur.</b>' },
  { b: '👀 Görevi oku', m: 'Üstteki şeritte o bölümün görevi yazar. Sınıfça yüksek sesle okuyun.' },
  { b: '👆 Seçeneklerden seç', m: 'Alttaki kartlardan doğru olanı tıklar. Her kartın kendi 🔊 düğmesi vardır.' },
  { b: '⌨️ Kendi kelimeni yaz', m: '2. sınıf etkinliklerinde <b>serbest yazma kutuları</b> vardır (“kendi kelimeni yaz”). Hazır seçenekle yetinmeyin; çocuk kendi kelimesini yazsın.' },
  { b: '✅ Tepkiyi izle', m: 'Doğru seçimde ekran anında değişir. <b>Sonucu birlikte yorumlayın:</b> “Ne değişti?”' },
  { b: '📊 İlerleme çubuğu', m: 'Üstteki ince çubuk kaçıncı bölümde olunduğunu gösterir. 20 bölümün tamamı zorunlu değildir; <b>sınıf süresine göre 8–10 bölüm yeterlidir.</b>' }
];

var AI_EKRAN = {

  1: [
    { b: '1️⃣ İki cümleyi dinletin 🔊', m: 'Ekranda nezaketli ve kaba istem yan yana gösterilir. Hoparlöre basıp <b>ikisini de dinletin</b>; sınıf hangisinin daha iyi olduğunu söylesin.' },
    { b: '2️⃣ 4 anahtarı sayın', m: '“Nitelikli Promptun 4 Sihirli Anahtarı” sayfasında dört öge sırayla açılır. <b>Parmakla sayarak</b> tekrar ettirin.' },
    { b: '3️⃣ Belirsizi açığa çevirtin', m: '“Belirsiz vs. Açık İfadeler” sayfasında bulanık cümle verilir; öğrenci açık hâlini seçer ya da yazar.' },
    { b: '4️⃣ 20 bölüme geçin', m: 'Son sayfada 20 bölümlük macera başlar. Her doğru seçimde ekran değişir; <b>“ne değişti?”</b> diye sordurun.' },
    { b: '5️⃣ Rozeti gösterin', m: 'Sonda “Şampiyon AI Dedektifi” rozeti çıkar. Rozet alan öğrenciyi sınıfa alkışlatın.' }
  ],

  2: [
    { b: '1️⃣ Cümleyi dinletin 🔊', m: 'Sınıf hep birlikte karar versin: <b>“SORU mu, KOMUT mu?”</b>' },
    { b: '2️⃣ İki kutudan seçtirin', m: 'Öğrenci soru/komut kartlarından birini tıklar. Yanlışta panik yok: <b>“Neden böyle düşündün?”</b> diye sordurun.' },
    { b: '3️⃣ Belirsiz görevi düzelttirin', m: '“Belirsiz Göreve Son!” bölümünde eksik olan genelde <b>fiildir</b> (yaz/çiz/anlat).' },
    { b: '4️⃣ 5 adımlı kart atölyesi', m: '2. etkinlikte kartlar seçildikçe cümle büyür. Her adımda durup <b>“şimdi ne eklendi?”</b> diye sorun.' },
    { b: '5️⃣ Oylama yaptırın', m: 'Son adımda sınıf en iyi istemi oylar; kazanan cümle tahtaya yazılır.' }
  ],

  3: [
    { b: '1️⃣ Konuyu adlandırtın', m: 'Ekranda konu kartları (uzay, doğa, spor, okul, masal) vardır. Önce 🔊 ile adını dinletin.' },
    { b: '2️⃣ Görsel/stille eşleştirtin', m: 'Seçilen konuya uygun görseli tıklar. Yan yana görselleri karşılaştırın: <b>“Hangisi uzayda geçiyor?”</b>' },
    { b: '3️⃣ Dört kartı seçtirin', m: '2. etkinlikte Konu → Kahraman → Stil → Mekân sırayla seçilir; her seçimde yapboz büyür.' },
    { b: '4️⃣ Cümleye çevirtin', m: 'Tamamlanan yapbozu <b>tek bir cümle</b> hâline getirtin ve yüksek sesle okutun.' },
    { b: '5️⃣ Şampiyonu oylatın', m: 'Son adımda sınıf en iyi resmi oylar.' }
  ],

  4: [
    { b: '1️⃣ Sınırı seçtirin', m: 'Ekranda cümle / madde / kelime sınırı seçenekleri vardır. Önce dinletin, sonra seçtirin.' },
    { b: '2️⃣ Gelen cevabı SAYDIRIN', m: 'Ekrana gelen cevabı sınıfça <b>parmakla sayın</b>. İstenen sayı ile gelen sayı tutuyor mu?' },
    { b: '3️⃣ Çarkı döndürtün', m: '2. etkinlikte sihirli ibre uzunluk kuralını belirler; grup kuralın esiri olur.' },
    { b: '4️⃣ Serbest kutuyu kullandırın', m: '“Kendi kelimeni yaz” kutusuna çocuk <b>kendi kahramanını</b> yazsın; hazır seçenekle yetinmesin.' },
    { b: '5️⃣ Cümle ölçer testini yaptırın', m: 'Test adımında sınırın tutup tutmadığı kontrol edilir; tutmuyorsa birlikte kısaltın.' }
  ],

  5: [
    { b: '1️⃣ Tonu siz canlandırın 🔊', m: 'Her bölümde bir hayvan bir tonu temsil eder. Cümleyi <b>önce siz o tonda okuyun</b>, sonra ekrandan dinletin.' },
    { b: '2️⃣ Tonu eşleştirtin', m: 'Öğrenci doğru ton kartını seçer. Yanlışsa iki tonu da sesli okuyup farkı hissettirin.' },
    { b: '3️⃣ Maske seçtirin', m: '2. etkinlikte gruplar duygu maskesi seçer ve cümleyi <b>canlandırarak</b> okur.' },
    { b: '4️⃣ Öğretmen kuralını yazın', m: '“Öğretmeninin kuralını yaz” kutusuna kendi sıfatınızı yazdırabilirsiniz (ör. “çok sevimli olsun”).' },
    { b: '5️⃣ Ton şampiyonunu seçtirin', m: 'Sınıf en iyi tonlanmış cümleyi oylar.' }
  ],

  6: [
    { b: '1️⃣ Dinleyiciyi tanıtın', m: 'Ekranda dört dinleyici vardır: 2. sınıf arkadaşı, minik kardeş, bilim insanı, dede/büyükanne.' },
    { b: '2️⃣ İki anlatımı karşılaştırın 🔊', m: 'Aynı bilginin iki farklı anlatımını dinletin: <b>“Hangisi kardeşim için?”</b>' },
    { b: '3️⃣ Frekansı ayarlatın', m: '2. etkinlikte “dinleyici radyosu” çevrilir; her frekans farklı bir hedef kitledir.' },
    { b: '4️⃣ Filtre testini yaptırın', m: 'Test adımında cümlenin dinleyiciye uyup uymadığı kontrol edilir.' },
    { b: '5️⃣ Zor kelimeleri sadeleştirtin', m: 'Anlaşılmayan kelimeleri birlikte değiştirin. <b>Dersin asıl kazanımı budur.</b>' }
  ],

  7: [
    { b: '1️⃣ Biçimi sesli örnekleyin 🔊', m: 'Liste, bilmece, masal, diyalog… Her birini önce <b>siz seslendirin</b>, sonra ekrandan dinletin.' },
    { b: '2️⃣ Görünüşe dikkat çektirin', m: 'Listenin alt alta, diyaloğun karşılıklı olduğunu ekranda parmakla gösterin.' },
    { b: '3️⃣ Alıştırma çarkını deneyin', m: '2. etkinliğin 1. adımı alıştırma çarkıdır: harflere dokunup örnek soruları görün.' },
    { b: '4️⃣ Canlı oyuna geçin', m: '2. adımda öğretmenle canlı Passaparola başlar. <b>Akıllı tahta sürümü için sarı düğmeyi açın.</b>' },
    { b: '5️⃣ Grup istemini kurdurun', m: 'Kahraman ve çıktı türü seçilerek grup istemi tamamlanır; sınıf şampiyonu oylanır.' }
  ],

  8: [
    { b: '1️⃣ Kuralı okutun/dinletin 🔊', m: 'Ekranda “Üç Cümle Kuralı”, “Yasaklı Kelime Kuralı” gibi kurallar çıkar. Sınıfça yüksek sesle tekrar ettirin.' },
    { b: '2️⃣ Güvenlik kuralını vurgulayın', m: '“Korkutucu ifadeler kullanma” bölümü bir <b>güvenlik</b> konusudur; sınıf kuralı hâline getirin.' },
    { b: '3️⃣ Alıştırma kulesini gezdirin', m: '2. etkinliğin 1. adımında beş kart vardır (Penguen, Panda, Yunus, Aslan, Kedi). Kart seçilince yasaklılar kırmızı görünür.' },
    { b: '4️⃣ Yarışmayı başlatın', m: '2. adımda sınıf tabu yarışması başlar. Kuralı bozan grup <b>sırayı devreder</b>; ceza yoktur.' },
    { b: '5️⃣ Kural türünü seçtirin', m: 'Grup kendi kural türünü seçer ya da öğretmenin ilave kuralını yazar.' }
  ],

  9: [
    { b: '1️⃣ Bozuk istemi dinletin 🔊', m: 'Ekrandaki eksik cümleyi dinletin: <b>“Bir şey çiz.”</b> Sınıf ne eksik olduğunu bulur.' },
    { b: '2️⃣ Dört soruyu sordurun', m: 'Bölümler sırasıyla <b>Kahraman kim? / Nerede geçiyor? / Nasıl olsun? / Kaç cümle?</b> diye ilerler.' },
    { b: '3️⃣ Dedektif masasını kullandırın', m: '2. etkinliğin 1. adımı alıştırma masasıdır; birlikte çözün, sonra canlı oyuna geçin.' },
    { b: '4️⃣ Mekân ve duyguyu tamamlatın', m: '4. adımda serbest yazma kutusu vardır; çocuk kendi ayrıntısını yazar.' },
    { b: '5️⃣ Önce–sonra karşılaştırın', m: 'Tamamlanan istemi ilk hâliyle yan yana okutun. <b>Fark çocuğun kendi eseridir.</b>' }
  ],

  10: [
    { b: 'ℹ️ İçerik hazırlanıyor', m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye yıl özeti yapın:' },
    { b: '1️⃣ Eski etkinliği tekrar açın', m: 'Öğrenciler 1–9. derslerden en sevdikleri etkinliği açıp istemlerini <b>geliştirir.</b>' },
    { b: '2️⃣ Basamak basamak büyütün', m: 'Tahtaya basamak çizin: konu → sayı → ton → kime → biçim → kural. Cümleyi birlikte büyütün.' },
    { b: '3️⃣ Sergi yapın', m: 'En iyi 3 istem ve sonucu panoya asılsın; veliler de görsün.' }
  ]
};

for (var _e in AI_EKRAN) {
  if (AI_DERSLER[_e]) AI_DERSLER[_e].ekran = AI_EKRAN[_e];
}
