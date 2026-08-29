/* =========================================================================
   AI-GALAXY • İLKOKUL 1 • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Her ders için: neden işlenir, nasıl anlatılır, bol örnek, üç etkinliğin
   işlenişi, sınıf soruları ve sık hatalar. Dil 1. sınıf seviyesine göre
   sadeleştirilmiştir; öğretmenin doğrudan okuyup uygulayabileceği biçimde.
   ========================================================================= */

var AI_DERSLER = {

  1: {
    ad: 'Yapay Zekâya Giriş ve Dedektiflik',
    emoji: '🕵️',
    tekCumle: 'Yapay zekâ sihir değildir: ona ne anlatırsak onu yapar. Bu derste çocuk, YZ ile konuşmanın bir “tarif verme” işi olduğunu keşfeder.',
    neden: [
      'Çocuk günlük hayatta YZ ile zaten karşılaşıyor (sesli asistan, öneriler, filtreler). Ne olduğunu bilmezse ya büyü sanır ya korkar.',
      '“İyi anlatırsam iyi sonuç alırım” fikri, bütün yılın temelidir. Bu ders o fikri ilk kez oturtur.',
      'Aynı zamanda <b>dikkatli bakma</b> ve <b>kelime seçme</b> becerisi çalışır — Türkçe dersini doğrudan destekler.'
    ],
    kazanim: [
      'Yapay zekânın bir <b>araç</b> olduğunu, kendi kendine düşünmediğini söyler.',
      'Bir nesneyi <b>sıfatlarla</b> (renk, boyut, duygu) anlatır.',
      'Anlattığı şey ile çıkan sonuç arasındaki bağı fark eder.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Ben söylüyorum, sen çiziyorsun” (5 dk)',
        m: 'Bir öğrenciye tahtayı verin. Siz “bir kedi çiz” deyin. Sonra “<b>turuncu, uykulu, şapkalı</b> bir kedi çiz” deyin. İki çizimi karşılaştırın: <b>“Hangisi aklımdakine daha yakın? Neden?”</b>' },
      { b: '2️⃣ Bağlantı kur (3 dk)',
        m: '“Yapay zekâ da tam böyle. Az söylersek <b>tahmin eder</b>, çok söylersek <b>bizim istediğimizi</b> yapar.” Cümleyi çocuklara tekrar ettirin.' },
      { b: '3️⃣ Etkinlik (20 dk)',
        m: 'Ekrandaki 3 etkinliği sırayla yaptırın (aşağıdaki “3 Etkinlik” sayfasına bakın).' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Tahtaya iki sütun: <b>AZ SÖZ</b> / <b>ÇOK SÖZ</b>. Çocukların bulduğu sıfatları yazın. “Yarın da böyle konuşacağız.”' }
    ],
    ornekler: [
      { kotu: 'kedi', iyi: 'turuncu, uykulu, şapkalı bir kedi', not: 'Renk + duygu + eşya eklendi.' },
      { kotu: 'araba', iyi: 'kırmızı, hızlı, yarış arabası', not: 'Üç sıfat = net resim.' },
      { kotu: 'ev çiz', iyi: 'bahçesinde iki ağaç olan mavi çatılı küçük ev', not: 'Çocuklar “kaç tane?” sorusunu sevmeye başlar.' }
    ],
    adimlar: [
      { ad: 'Kelime Avcısı & AI Dedektifi', sure: '15–20 dk',
        ne: 'Sıfat avlama ve bulanık görseli netleştirme oyunu.',
        nasil: 'Önce sınıfça 3 sıfat bulun, sonra öğrenciler tek tek denesin. Bulunan sıfatları tahtaya yazın.' },
      { ad: 'Kim, Nerede, Ne Zaman, Ne Yapıyor?', sure: '15 dk',
        ne: 'Dört soruyla cümle kurma oyunu (5N1K’nın çocuk hâli).',
        nasil: 'Grup çalışması: her grup dört soruyu doldurup en komik cümleyi seçsin, sınıfa okusun.' },
      { ad: 'Sıfat Rehberi & Prompt Sihirbazı', sure: '10 dk',
        ne: 'Videolu özet + istem cümlesi kurma stüdyosu.',
        nasil: 'Kapanışta kullanın; öğrenciler kendi cümlesini kurup okusun.' }
    ],
    sorular: [
      'Yapay zekâ bizi görüyor mu, yoksa sadece <b>yazdığımızı mı</b> okuyor?',
      '“Kedi” dediğimde herkesin aklına aynı kedi mi geldi?',
      'Daha iyi sonuç için ne eklemeliyiz? (renk, sayı, duygu, yer)',
      'Yanlış çıkarsa kimin hatası? (<i>Cevap: hata değil, eksik anlatım</i>)'
    ],
    ipuclari: [
      'Çocuklar “sihirli” demeye başlarsa hemen düzeltin: <b>“Sihir değil, tarif.”</b>',
      'Yazamayan öğrenci <b>sözlü</b> anlatsın, öğretmen yazsın. Amaç yazmak değil, düşünmek.',
      'Her doğru sıfat için alkış — kelime dağarcığı bu yaşta ödüllendirmeyle büyür.'
    ]
  },

  2: {
    ad: 'Prompt Kaşifi ve Açık Görevler',
    emoji: '🧭',
    tekCumle: 'Yapay zekâya “ne yapmasını” istediğimizi <b>açık bir görev</b> olarak söylemeyi öğreniyoruz: soru mu soruyorum, iş mi veriyorum?',
    neden: [
      'Çocuk çoğu zaman kafasındakini yarım söyler. “Açık görev” alışkanlığı, hem YZ’de hem sınıf içi iletişimde işe yarar.',
      'Soru ile komutu ayırmak, ileride kodlamadaki <b>komut</b> kavramının dil tarafındaki karşılığıdır.',
      'Kısa ve net konuşmak, 1. sınıfta cümle kurma becerisini doğrudan geliştirir.'
    ],
    kazanim: [
      'Soru cümlesi ile <b>görev (emir) cümlesini</b> ayırt eder.',
      'Yarım kalmış bir isteği tamamlar.',
      'İsteğini tek cümlede söyler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — “Yarım cümle” oyunu (5 dk)',
        m: 'Öğretmen yarım söyler: “Bana bir hikâye…”. Çocuklar tamamlar: “…yaz”, “…anlat”, “…çiz”. <b>Fiil olmadan görev olmaz</b> fikri sezdirilir.' },
      { b: '2️⃣ Soru mu, görev mi? (5 dk)',
        m: 'Tahtaya iki kutu çizin: <b>SORUYORUM ❓</b> / <b>İSTİYORUM ✅</b>. Cümleleri çocuklar doğru kutuya koysun.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Ekrandaki üç etkinlik sırayla yapılır.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes bir “açık görev” cümlesi kursun ve okusun: <b>“Bana … yaz/çiz/anlat.”</b>' }
    ],
    ornekler: [
      { kotu: 'kelebek', iyi: 'Bana kelebeği anlatan 2 cümle yaz.', not: 'Fiil + miktar eklendi.' },
      { kotu: 'hikâye', iyi: 'Bana ormanda kaybolan bir tavşanın hikâyesini anlat.', not: 'Kim + nerede + ne oldu.' },
      { kotu: 'yardım et', iyi: 'Bana 3 tane hayvan ismi say.', not: 'Ne isteniyor, kaç tane isteniyor — belli.' }
    ],
    adimlar: [
      { ad: 'Prompt Kaşifi & Komut Dedektifi', sure: '15 dk',
        ne: 'Cümleleri “soru / görev” diye ayırma ve eksik komutu bulma.',
        nasil: 'İlk 3 örneği sınıfça birlikte yapın, kalanını öğrenciler denesin.' },
      { ad: '5 Adımda Süper Prompt Laboratuvarı', sure: '15 dk',
        ne: 'Beş adımda istem cümlesi kurma atölyesi.',
        nasil: 'Her adımda durup “şimdi ne eklendi?” diye sorun.' },
      { ad: 'Soru, Komut ve Ayrıntı Rehberi', sure: '10 dk',
        ne: 'Özet rehber ve alıştırma.',
        nasil: 'Kapanış olarak kullanın; defterlerine bir cümle yazdırın.' }
    ],
    sorular: [
      '“Kelebek” demek yeterli mi? Ne eksik?',
      'Soru mu soruyorum, iş mi veriyorum? Nereden anlarız?',
      'Görev cümlesinde hangi kelime her zaman olmalı? (<i>fiil: yaz, çiz, anlat, say</i>)',
      'Arkadaşına bir görev ver: o anladı mı?'
    ],
    ipuclari: [
      'Cümleye <b>“Bana …”</b> ile başlatmak 1. sınıfta çok işe yarıyor.',
      'Uzun cümle istemeyin; <b>tek cümle, net fiil</b> yeterli.',
      'Yanlış örnekleri de tahtada bırakın: karşılaştırma öğretir.'
    ]
  },

  3: {
    ad: 'Konu Ekliyorum ve Görsel Üretim',
    emoji: '🎨',
    tekCumle: 'İsteğimize bir <b>konu</b> eklediğimizde sonuç bambaşka oluyor: “resim yap” ile “uzayda bisiklet süren panda çiz” arasındaki farkı görüyoruz.',
    neden: [
      'Konu eklemek, hayal gücünü somuta çevirmenin en kolay yoludur — 1. sınıf için en eğlenceli adım budur.',
      'Görsel üretim, sonucu <b>anında</b> gösterir; çocuk sebep-sonucu gözüyle görür.',
      'Konu seçmek, ileride “ana fikir” kavramının temelini atar.'
    ],
    kazanim: [
      'İsteğine <b>konu</b> ekler.',
      'Aynı isteğin farklı konularla farklı sonuç verdiğini görür.',
      'Kendi hayalini kelimelerle anlatır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Konu çarkı (5 dk)',
        m: 'Tahtaya 6 konu yazın (uzay, orman, deniz, okul, mutfak, sirk). Zar atın ya da parmakla seçtirin.' },
      { b: '2️⃣ Aynı istek, farklı konu (5 dk)',
        m: '“Bir kedi çiz” + seçilen konu → “uzayda bir kedi çiz”. Farkı konuşun.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla; görsel çıktıları sınıfça yorumlayın.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her çocuk kendi konusunu söylesin: <b>“Benim konum …”</b>' }
    ],
    ornekler: [
      { kotu: 'resim yap', iyi: 'Uzayda bisiklet süren bir panda çiz.', not: 'Kahraman + eylem + yer.' },
      { kotu: 'hayvan çiz', iyi: 'Denizin altında şapka takan bir ahtapot çiz.', not: 'Konu = yer + detay.' },
      { kotu: 'güzel bir şey', iyi: 'Sonbaharda yaprak toplayan bir sincap çiz.', not: '“Güzel” kelimesi bilgi taşımaz; konu taşır.' }
    ],
    adimlar: [
      { ad: 'Konu Kaşifleri & Görsel Stüdyosu', sure: '15–20 dk',
        ne: 'Konu seçip görsel istemi kurma.',
        nasil: 'Önce sınıfça bir tane kurun, sonra bireysel.' },
      { ad: 'Sihirli Konu Çarkı & Resim Yapbozu', sure: '15 dk',
        ne: 'Rastgele konu çarkı ve eşleştirme oyunu.',
        nasil: 'Grup yarışması olarak oynatın; en yaratıcı konuya alkış.' },
      { ad: '6 Konu 6 Muhteşem Görsel Rehberi', sure: '10 dk',
        ne: 'Örnek konu-görsel eşleşmeleri.',
        nasil: 'Kapanışta örnekleri gösterip “sen hangisini seçerdin?” diye sorun.' }
    ],
    sorular: [
      '“Resim yap” deyince ne çıktı? Konu ekleyince ne değişti?',
      'Konu neye benziyor: yer mi, kahraman mı, ikisi de mi?',
      'Aynı konuyu iki arkadaş farklı anlatabilir mi?',
      'Senin hayalindeki konu ne?'
    ],
    ipuclari: [
      'Çocuklar aynı konuda ısrar ederse (hep araba) bir “konu çarkı” zorunluluğu koyun.',
      'Görsel beklerken sabırsızlanan sınıfa “tahmin edin ne çıkacak?” oyunu oynatın.',
      'Çıkan görsel beklentiyi karşılamazsa <b>suç arama, eksik ara.</b>'
    ]
  },

  4: {
    ad: 'Uzunluğu Belirliyorum ve Cümle Ölçer',
    emoji: '📏',
    tekCumle: 'Ne kadar istediğimizi söylemeyi öğreniyoruz: “<b>2 cümle</b> yaz”, “<b>3 kelime</b> söyle”. Sayı vermek işi netleştirir.',
    neden: [
      'Miktar belirtmek, matematikteki sayma becerisiyle dili birleştirir — 1. sınıfta çok değerlidir.',
      'Çocuk “çok uzun” metinlerde kaybolur; kendi sınırını koymayı öğrenir.',
      'İleride kodlamada “kaç kere tekrar edeyim?” sorusunun dil karşılığıdır.'
    ],
    kazanim: [
      'İsteğine <b>sayı</b> ekler (2 cümle, 3 kelime, 5 isim).',
      'Kısa ve uzun cevabın farkını görür.',
      'Cümle sayar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Cümle sayma (5 dk)',
        m: 'Öğretmen bir metin okur, çocuklar parmakla cümle sayar. Nokta = bir cümle bitti.' },
      { b: '2️⃣ Sayıyı isteğe koy (5 dk)',
        m: '“Bana kedi anlat” → “Bana kedi hakkında <b>2 cümle</b> yaz.” Farkı ekranda gösterin.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes “2 cümlelik” bir istek kursun ve sonucu saysın.' }
    ],
    ornekler: [
      { kotu: 'kedileri anlat', iyi: 'Kediler hakkında 2 kısa cümle yaz.', not: 'Sayı + kısa.' },
      { kotu: 'meyve say', iyi: '5 tane meyve ismi say.', not: 'Kaç tane olduğu belli.' },
      { kotu: 'uzun hikâye yaz', iyi: '3 cümlelik kısa bir hikâye yaz.', not: '1. sınıf için 2–3 cümle idealdir.' }
    ],
    adimlar: [
      { ad: 'Cümle Ölçer & Prompt Dedektifi', sure: '15 dk',
        ne: 'Cümle sayma ve isteğe miktar ekleme.',
        nasil: 'Parmakla saydırın; sesli sayım sınıfı toplar.' },
      { ad: 'Sihirli Sayı Seçici & Hikâye Fabrikası', sure: '15 dk',
        ne: 'Sayı seçip o uzunlukta hikâye üretme.',
        nasil: 'Grup çalışması; her grup farklı sayı seçsin, sonuçları karşılaştırın.' },
      { ad: 'Çok Basit Prompt Rehberi', sure: '10 dk',
        ne: '1. sınıf seviyesinde örnek istemler.',
        nasil: 'Kapanış; bir örneği defterine yazdırın.' }
    ],
    sorular: [
      'Kaç cümle istedik, kaç cümle geldi?',
      'Sayı söylemezsek ne olur?',
      '2 cümle mi, 10 cümle mi bize daha kolay?',
      'Sen kaç cümle istersin?'
    ],
    ipuclari: [
      'Sayıyı <b>küçük</b> tutun: 2–3. Uzun metin bu yaşta motivasyonu düşürür.',
      'Gelen cevabı sınıfça <b>sayın</b> — doğrulama alışkanlığı kazandırır.',
      'Sayı ile birlikte “kısa” kelimesini de kullandırın.'
    ]
  },

  5: {
    ad: 'Promptuma Ayrıntı Ekliyorum (Duygu ve Ton)',
    emoji: '🌈',
    tekCumle: 'Aynı cümle <b>neşeli</b>, <b>uykulu</b> ya da <b>heyecanlı</b> söylenince değişir. Duygu eklemeyi öğreniyoruz.',
    neden: [
      'Duygu kelimeleri 1. sınıfta hem Türkçe hem sosyal-duygusal gelişim kazanımıdır.',
      'Ton eklemek, çocuğun kendi hissini fark edip ifade etmesini sağlar.',
      'Sonuçtaki değişim çok belirgin olduğu için sebep-sonuç ilişkisi güçlü pekişir.'
    ],
    kazanim: [
      'İsteğine <b>duygu/ton</b> ekler.',
      'Duygu kelimelerini tanır ve kullanır.',
      'Aynı konunun farklı tonlarda anlatılabileceğini görür.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Duygu yüzleri (5 dk)',
        m: 'Öğretmen bir cümleyi üç kez okur: mutlu, üzgün, şaşkın. Çocuklar hangisi olduğunu bulur.' },
      { b: '2️⃣ Duyguyu isteğe koy (5 dk)',
        m: '“Bir tavşan anlat” → “<b>Neşeli</b> bir tavşanı anlat.” Ekranda farkı gösterin.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Sınıf duygu duvarı: bulunan duygu kelimelerini tahtaya yazın (en az 8 kelime hedefleyin).' }
    ],
    ornekler: [
      { kotu: 'bir hikâye yaz', iyi: 'Neşeli bir tavşanın hikâyesini 2 cümlede yaz.', not: 'Duygu + sayı birlikte.' },
      { kotu: 'kedi çiz', iyi: 'Uykulu, tembel bir kedi çiz.', not: 'İki duygu sıfatı.' },
      { kotu: 'anlat', iyi: 'Heyecanlı bir sesle doğum günü partisini anlat.', not: 'Ton = nasıl anlatılacağı.' }
    ],
    adimlar: [
      { ad: 'Duygu Tonu & Sıfat Laboratuvarı', sure: '15 dk',
        ne: 'Duygu sıfatlarıyla istem kurma.',
        nasil: 'Duyguları önce yüz ifadesiyle canlandırın, sonra yazdırın.' },
      { ad: 'Duygu Tiyatrosu & Renkli Ton Çarkı', sure: '15 dk',
        ne: 'Duygu canlandırma ve ton seçme oyunu.',
        nasil: 'Sınıfı gruplara ayırın; her grup bir duyguyu canlandırsın.' },
      { ad: '5 Sihirli Duygu Rengi Rehberi', sure: '10 dk',
        ne: 'Duygu–renk eşleşmeleri rehberi.',
        nasil: 'Kapanışta “senin duygu rengin ne?” sorusuyla bitirin.' }
    ],
    sorular: [
      'Aynı cümle neşeli söylenince ne değişti?',
      'Hangi duygu kelimelerini biliyoruz?',
      'Bugün sen hangi duygudasın? Onu isteğine ekler misin?',
      'Duygu eklemezsek sonuç nasıl oluyor? (<i>düz, sıradan</i>)'
    ],
    ipuclari: [
      'Duygu kelimelerini <b>görsellerle</b> destekleyin (emoji kartları).',
      'Olumsuz duygular (kızgın, korkmuş) da çalışılabilir ama kapanış olumlu bitsin.',
      'Aynı çocuğa iki farklı ton denetin; farkı kendi görsün.'
    ]
  },

  6: {
    ad: 'Kimin İçin Anlatıyorum? (Hedef Kitle)',
    emoji: '👥',
    tekCumle: 'Aynı şeyi <b>anaokulu kardeşimize</b> ve <b>öğretmenimize</b> farklı anlatırız. Kime anlattığımızı söylemeyi öğreniyoruz.',
    neden: [
      'Dinleyiciye göre konuşmak, 1. sınıfın en önemli iletişim kazanımlarından biridir.',
      'Empati becerisini doğrudan çalıştırır: “O bunu anlar mı?”',
      'YZ’ye hedef kitle söylendiğinde cevap gözle görülür şekilde sadeleşir; çocuk etkiyi hemen görür.'
    ],
    kazanim: [
      'İsteğine <b>kime</b> bilgisini ekler.',
      'Basit ve zor anlatımı ayırt eder.',
      'Küçük kardeşine anlatır gibi sadeleştirir.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — İki dinleyici (5 dk)',
        m: '“Yağmuru anaokulundaki kardeşine anlat.” Sonra “aynı şeyi bir bilim insanına anlat.” Farkı konuşun.' },
      { b: '2️⃣ Hedef kitleyi isteğe koy (5 dk)',
        m: '“Yağmuru anlat” → “Yağmuru <b>5 yaşındaki bir çocuğa</b> anlat.”' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her çocuk bir dinleyici seçsin (anne, kardeş, öğretmen) ve bir cümle kursun.' }
    ],
    ornekler: [
      { kotu: 'yağmuru anlat', iyi: 'Yağmuru 5 yaşındaki kardeşime anlat.', not: 'Kime = sadelik ayarı.' },
      { kotu: 'uzayı anlat', iyi: 'Uzayı 1. sınıf öğrencisine 2 cümlede anlat.', not: 'Kitle + miktar.' },
      { kotu: 'kolay yaz', iyi: 'Anaokulu çocuğunun anlayacağı kelimelerle yaz.', not: '“Kolay” belirsiz; “kim” nettir.' }
    ],
    adimlar: [
      { ad: 'Hedef Kitle & Dinleyici Laboratuvarı', sure: '15 dk',
        ne: 'Farklı dinleyicilere göre cevap karşılaştırma.',
        nasil: 'İki cevabı yan yana okuyup “hangisi kardeşim için?” diye sorun.' },
      { ad: 'Dinleyici Radyosu & Hedef Kitle Kulesi', sure: '15 dk',
        ne: 'Dinleyici seçme ve uygun anlatım kurma oyunu.',
        nasil: 'Grup çalışması; her grup bir dinleyici çeksin.' },
      { ad: 'Hedef Kitle Rehberi', sure: '10 dk',
        ne: 'Örneklerle özet.',
        nasil: 'Kapanış; “kime” kelimesini panoya asın.' }
    ],
    sorular: [
      'Kardeşine anlatırken hangi kelimeleri kullanmazsın?',
      'Öğretmenine anlatırken ne değişir?',
      '“Kime” söylemezsek YZ ne yapar? (<i>ortalama bir cevap verir</i>)',
      'Sen en çok kime anlatmayı seviyorsun?'
    ],
    ipuclari: [
      'Sınıfta gerçek bir dinleyici seçtirin (yan sıradaki arkadaş) ve ona okutturun.',
      '“Anlaşıldı mı?” sorusunu dinleyiciye sordurun — asıl ölçüt budur.',
      'Uzun kelimeleri birlikte sadeleştirin.'
    ]
  },

  7: {
    ad: 'Çıktı Biçimini Seçiyorum',
    emoji: '📑',
    tekCumle: 'Cevabın <b>nasıl görünmesini</b> istediğimizi söylüyoruz: liste mi, hikâye mi, şarkı mı, tablo mu?',
    neden: [
      'Aynı bilginin farklı biçimlerde sunulabileceğini görmek, düzenleme ve sınıflandırma becerisini geliştirir.',
      'Liste yapmak 1. sınıfta sayma ve sıralama ile birebir örtüşür.',
      'Çocuk “ben nasıl istiyorum?” diye düşünmeye başlar — seçim yapma cesareti kazanır.'
    ],
    kazanim: [
      'İsteğine <b>biçim</b> ekler (liste, hikâye, şarkı, soru).',
      'Liste ile düz metni ayırt eder.',
      'İhtiyacına uygun biçimi seçer.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı bilgi, iki biçim (5 dk)',
        m: 'Meyveleri önce cümleyle, sonra alt alta liste hâlinde yazın. “Hangisi daha kolay okunuyor?”' },
      { b: '2️⃣ Biçimi isteğe koy (5 dk)',
        m: '“Meyveleri say” → “Meyveleri <b>alt alta liste</b> hâlinde yaz.”' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Sınıfça bir “biçim menüsü” yapın: liste 📝, hikâye 📖, şarkı 🎵, soru ❓' }
    ],
    ornekler: [
      { kotu: 'hayvanları anlat', iyi: '5 hayvanı alt alta liste yap.', not: 'Biçim + sayı.' },
      { kotu: 'kurallar', iyi: 'Sınıf kurallarını 3 maddelik liste yap.', not: 'Madde sayısı verildi.' },
      { kotu: 'anlat', iyi: 'Diş fırçalamayı kısa bir şarkı gibi yaz.', not: 'Biçim seçimi eğlenceyi artırır.' }
    ],
    adimlar: [
      { ad: 'Çıktı Biçimi & Tür Laboratuvarı', sure: '15 dk',
        ne: 'Biçim seçip sonucu karşılaştırma.',
        nasil: 'Aynı konuyu iki farklı biçimde alın, ekranda yan yana gösterin.' },
      { ad: 'AI Pasaportu & Kelime Avı Haritası', sure: '15 dk',
        ne: 'Biçim kartlarıyla oyun.',
        nasil: 'Her öğrenci bir biçim kartı çekip istem kursun.' },
      { ad: 'Çıktı Türleri Rehberi', sure: '10 dk',
        ne: 'Biçim örnekleri rehberi.',
        nasil: 'Kapanışta panoya asılacak biçim menüsünü birlikte oluşturun.' }
    ],
    sorular: [
      'Liste ne demek? Nerede kullanırız? (<i>alışveriş, kurallar</i>)',
      'Hikâye ile liste arasındaki fark ne?',
      'Sen hangi biçimi seversin?',
      'Biçim söylemezsek ne olur?'
    ],
    ipuclari: [
      'Listeyi <b>defterde</b> de yaptırın; ekran-defter köprüsü kalıcılığı artırır.',
      'Şarkı biçimi sınıfı çok canlandırır, kapanışta kullanın.',
      'Biçim kelimelerini görsel kartlara yazıp panoya asın.'
    ]
  },

  8: {
    ad: 'Kurallar Ekliyorum',
    emoji: '🚦',
    tekCumle: 'İsteğimize <b>kural</b> koymayı öğreniyoruz: “zor kelime kullanma”, “sadece 3 cümle”, “hayvan ismi verme”.',
    neden: [
      'Kural koymak, sınır belirlemektir; 1. sınıfta sınıf kuralları ile doğrudan bağ kurar.',
      'Kodlamadaki koşul (“şunu yapma”) fikrinin dil tarafındaki ilk hâlidir.',
      'Çocuk çıktının kalitesini kendi kontrol edebileceğini fark eder.'
    ],
    kazanim: [
      'İsteğine 1–2 <b>kural</b> ekler.',
      'Kuralın sonucu değiştirdiğini görür.',
      'Olumlu (yap) ve olumsuz (yapma) kuralı ayırt eder.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Sınıf kuralları (5 dk)',
        m: 'Sınıfın kendi kurallarını hatırlayın. “Kural ne işe yarar?”' },
      { b: '2️⃣ Kuralı isteğe koy (5 dk)',
        m: '“Bir hikâye yaz” → “Bir hikâye yaz ama <b>zor kelime kullanma</b>.”' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla; tabu oyunu sınıfı çok canlandırır.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Herkes bir kural söylesin; en yaratıcı kurala alkış.' }
    ],
    ornekler: [
      { kotu: 'hikâye yaz', iyi: '2 cümlelik hikâye yaz, zor kelime kullanma.', not: 'Sayı + kural.' },
      { kotu: 'meyve say', iyi: '4 meyve say ama elma deme.', not: 'Yasak kelime kuralı — oyunlaşır.' },
      { kotu: 'kısa yaz', iyi: 'Her cümle en fazla 5 kelime olsun.', not: 'Ölçülebilir kural.' }
    ],
    adimlar: [
      { ad: 'Kural & Tabu Laboratuvarı', sure: '15 dk',
        ne: 'Kurallı istem kurma.',
        nasil: 'Önce kuralsız, sonra kurallı sonucu karşılaştırın.' },
      { ad: 'AI Tabu Oyunu & Yasaklı Kelime Kulesi', sure: '15–20 dk',
        ne: 'Yasaklı kelime oyunu.',
        nasil: 'Gruplar hâlinde yarıştırın; kuralı bozan tur kaybeder.' },
      { ad: 'Prompt Kuralları Rehberi', sure: '10 dk',
        ne: 'Kural örnekleri rehberi.',
        nasil: 'Kapanışta sınıfın “altın kuralları” panosunu yapın.' }
    ],
    sorular: [
      'Kural koyunca cevap nasıl değişti?',
      'Hangi kural işe yaradı, hangisi zorlaştırdı?',
      'Çok fazla kural koyarsak ne olur?',
      'Sınıfımızın kuralları YZ kurallarına benziyor mu?'
    ],
    ipuclari: [
      'Aynı anda <b>en fazla 2 kural</b> — fazlası bu yaşta karmaşa yaratır.',
      'Kuralı bozan sonuç çıkarsa bunu ceza değil, <b>keşif</b> olarak sunun.',
      'Kuralları kısa ve somut yazdırın (“5 kelime”, “elma deme”).'
    ]
  },

  9: {
    ad: 'Eksik Ayrıntıyı Bul',
    emoji: '🔎',
    tekCumle: 'Sonuç istediğimiz gibi olmadıysa <b>ne eksik kalmış</b> diye bakıyoruz: kim? nerede? kaç tane? nasıl?',
    neden: [
      'Bu ders, yılın en önemli becerisini kazandırır: <b>hatayı arama değil, eksiği bulma</b>.',
      'Kodlamadaki “hata ayıklama” (debug) düşüncesinin dil tarafındaki karşılığıdır.',
      'Çocuk kendi isteğini gözden geçirme alışkanlığı kazanır — özdeğerlendirme.'
    ],
    kazanim: [
      'Bir isteğin eksik yanını bulur.',
      'Eksik olanı ekleyip <b>tekrar dener</b>.',
      'Sonucu isteğiyle karşılaştırır.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Eksik tarif (5 dk)',
        m: 'Öğretmen eksik tarif verir: “Bir şey çiz.” Çıkan karmaşayı gösterin. “Ne sormalıydık?”' },
      { b: '2️⃣ Dedektif soruları (5 dk)',
        m: 'Tahtaya 4 soru: <b>KİM? NEREDE? KAÇ TANE? NASIL?</b> Her eksik istemi bu 4 soruyla tamamlatın.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: '“Bugün ne öğrendik?” → <b>“Beğenmezsem eksik ararım, yeniden denerim.”</b>' }
    ],
    ornekler: [
      { kotu: 'bir şey çiz', iyi: 'Bahçede top oynayan iki çocuk çiz.', not: 'Kim + nerede + kaç tane.' },
      { kotu: 'hikâye kısa oldu', iyi: '3 cümlelik, sonu mutlu biten bir hikâye yaz.', not: 'Eksik: uzunluk ve son.' },
      { kotu: 'resim istediğim gibi değil', iyi: 'Kedi turuncu olsun, gözleri yeşil olsun.', not: 'Eksik ayrıntı eklendi.' }
    ],
    adimlar: [
      { ad: 'Eksik Prompt Dedektifliği', sure: '15 dk',
        ne: 'Eksik istemleri bulup tamamlama.',
        nasil: 'Dedektif rozeti verin; 4 soruyu her seferinde sorun.' },
      { ad: 'Eksik Prompt Dedektifleri & Hikâye Çarkı', sure: '15 dk',
        ne: 'Grup hâlinde eksik bulma oyunu.',
        nasil: 'Her grup bir eksik istem alsın, tamamlayıp sınıfa sunsun.' },
      { ad: 'Örnek Promptlar & Tamamlama Rehberi', sure: '10 dk',
        ne: 'Tamamlanmış örnekler.',
        nasil: 'Kapanış; “önce–sonra” örneklerini gösterin.' }
    ],
    sorular: [
      'Sonuç neden istediğin gibi olmadı?',
      'Hangi soruyu sormayı unuttuk?',
      'Ne eklersek düzelir?',
      'Tekrar denemek utanılacak bir şey mi? (<i>Hayır — herkes tekrar dener</i>)'
    ],
    ipuclari: [
      '4 soruyu (kim/nerede/kaç/nasıl) <b>panoya asın</b>; tüm yıl kullanılır.',
      '“Yanlış” kelimesi yerine <b>“eksik”</b> deyin — cesaret kırmaz.',
      'Bir öğrencinin ilk denemesini silmeyin; yan yana karşılaştırın.'
    ]
  },

  10: {
    ad: 'İlk Sonuç Son Sonuç Değildir',
    emoji: '🔁',
    tekCumle: 'İlk cevap beğenilmediyse iş bitmez: <b>düzeltir, ekler, yeniden deneriz</b>. Yılın tüm becerileri burada birleşir.',
    neden: [
      'Denemeye devam etme (azim) bu yaşta kazandırılacak en değerli tutumdur.',
      'Önceki 9 dersin hepsi burada birlikte kullanılır: konu, uzunluk, duygu, kitle, biçim, kural, eksik.',
      'Kodlamadaki “çalışmadıysa değiştir, tekrar çalıştır” döngüsünün aynısıdır.'
    ],
    kazanim: [
      'İlk sonucu değerlendirir.',
      'İsteğini <b>geliştirip</b> tekrar dener.',
      'Kendi ilerlemesini fark eder.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Önce/Sonra (5 dk)',
        m: 'Yılın başındaki basit bir istemi gösterin (“kedi”). “Şimdi biz bunu nasıl yazardık?”' },
      { b: '2️⃣ Geliştirme merdiveni (5 dk)',
        m: 'Tahtaya basamak çizin: konu → sayı → duygu → kime → biçim → kural. Her basamakta cümleyi büyütün.' },
      { b: '3️⃣ Etkinlik (20 dk)', m: 'Üç etkinlik sırayla; final ürünü sınıfça seçin.' },
      { b: '4️⃣ Kapanış — Sergi (5 dk)',
        m: 'En iyi 3 istem ve sonucu panoya asın. Yıl boyu örnek olarak kalsın.' }
    ],
    ornekler: [
      { kotu: 'kedi', iyi: 'Neşeli, turuncu bir kediyi 2 cümlede kardeşime anlat.', not: 'Yılın tüm parçaları tek cümlede.' },
      { kotu: 'beğenmedim', iyi: 'Daha kısa yaz ve sonu mutlu olsun.', not: 'Geliştirme isteği de bir istemdir.' },
      { kotu: 'tekrar yap', iyi: 'Aynı hikâyeyi 3 maddelik liste hâline getir.', not: 'Biçim değiştirerek yeniden deneme.' }
    ],
    adimlar: [
      { ad: 'Laboratuvar (10.1)', sure: '15 dk',
        ne: 'İstem geliştirme atölyesi.',
        nasil: 'Her öğrenci kendi cümlesini basamak basamak büyütsün.' },
      { ad: 'Grup Çalışması (10.2)', sure: '15 dk',
        ne: 'Grupla en iyi istemi kurma.',
        nasil: 'Gruplar birbirinin istemini geliştirsin (dönüşümlü).' },
      { ad: 'Görsel Rehber (10.3)', sure: '10 dk',
        ne: 'Yıl özeti görsel rehberi.',
        nasil: 'Kapanış sergisi ve değerlendirme.' }
    ],
    sorular: [
      'İlk cevabı beğendin mi? Neyi değiştirmek istersin?',
      'Yıl başında nasıl yazıyorduk, şimdi nasıl yazıyoruz?',
      'Bir isteği daha iyi yapan 3 şey söyle.',
      'Bir daha denemek seni yordu mu, yoksa eğlendirdi mi?'
    ],
    ipuclari: [
      'Bu ders bir <b>değerlendirme</b> dersidir: not değil, gelişim konuşun.',
      'Yıl başındaki örnekleri saklayıp burada gösterin — etkisi çok güçlüdür.',
      'Sergiyi veli görebileceği bir yere asın.'
    ]
  }
};

/* =========================================================================
   GERÇEK ETKİNLİK İÇERİKLERİ (uygulamadaki sayfalarla birebir)
   Aşağıdaki tablo, yukarıdaki genel tanımların yerine geçer:
   her etkinliğin gerçek adı, gerçek bölümleri ve sınıfta nasıl
   yürütüleceği yazılıdır.
   ========================================================================= */

var AI_ETKINLIK = {

  1: [
    { ad: 'Kelime Avcısı & AI Dedektifi', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Sıfat seçerek bulanık görselleri netleştirme, dedektiflik ve sanat stili görevleri.',
      sayfalar: ['Sihirli Aşçı Yapay Zekâ!', 'Prompt (İstem) Nedir?', 'Sıfatların Sihirli Gücü!', '3 Farklı Dedektiflik Görevi!'],
      nasil: 'İlk iki sayfayı <b>tahtadan birlikte</b> okuyun (kavram tanıtımı). 3. sayfada sıfat türlerini (renk, boyut, durum, ışık) sınıfça sayın. 4. sayfadaki 20 görevi öğrenciler tek tek yapar; her doğru sıfatta bulanık görsel netleşir — <b>çocuk sebep-sonucu gözüyle görür.</b>' },
    { ad: 'Kim, Nerede, Ne Zaman, Ne Yapıyor?', sure: '15 dk', tur: 'Grup · 5N1K oyunu',
      ne: 'Emojili 5N1K prompt oyunu, sesli okuma desteği ve sınıfça “en komik prompt” yarışması.',
      nasil: 'Grupları 3–4 kişi yapın. Her grup dört kutuyu (kim/nerede/ne zaman/ne yapıyor) emoji seçerek doldurur. <b>Okuma bilmeyen öğrenci için 🔊 sesli okuma düğmesini kullandırın.</b> Sonunda her grup cümlesini okur, sınıf en komiğini seçer.' },
    { ad: 'Sıfat Rehberi & Prompt Sihirbazı', sure: '10 dk', tur: 'Kapanış · videolu rehber',
      ne: 'Videolu eğitim rehberi, sıfat formülleri, nitelikleştirme kartları ve istem cümlesi stüdyosu.',
      nasil: 'Videoyu tahtadan izletin, sonra “Prompt Sihirbazı”nda sınıfça <b>tek bir cümle</b> kurun. Kurulan cümleyi deftere yazdırın.' }
  ],

  2: [
    { ad: 'Prompt Kaşifi & Komut Dedektifi', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Soru ile komutu ayırt etme, belirsiz cümleleri netleştirme; sonunda “kaşif rozeti”.',
      sayfalar: ['Soru mu, Komut mu?', 'Belirsiz Göreve Son!', 'Çıktı Biçimini Seç!', '20 Harika Kaşif Görevi!'],
      nasil: '1. sayfayı tahtada birlikte yapın: her cümle için sınıf hep bir ağızdan “SORU!” ya da “KOMUT!” desin. 2. sayfada belirsiz cümleleri <b>çocuklara tamamlatın</b>. 20 görev bireysel yapılır; rozeti alan alkışlanır.' },
    { ad: '5 Adımda Süper Prompt Laboratuvarı', sure: '15 dk', tur: 'Grup · kart atölyesi',
      ne: 'Ne / Konu / Nasıl / Kaç Cümle kartlarını seçerek grupla açık prompt tasarlama.',
      nasil: 'Her gruba kart seçtirin; kartlar seçildikçe cümle büyür. <b>Her adımda durup “şimdi ne eklendi?” diye sorun.</b> Grupların cümlelerini yan yana okuyun.' },
    { ad: 'Soru, Komut ve Ayrıntı Rehberi', sure: '10 dk', tur: 'Kapanış · video + görsel',
      ne: 'Açık ve detaylı prompt vermenin püf noktaları, örneklerle.',
      nasil: 'Örnekleri sesli dinletin. Panoya “Bana … yaz/çiz/anlat” kalıbını asın.' }
  ],

  3: [
    { ad: 'Konu Kaşifleri & Görsel Stüdyosu', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: '6 ana konuyu inceleyip doğru görsel stilini eşleştirme; “Görsel Kaşif” rozeti.',
      sayfalar: ['Görselin Konusunu Seç!', 'Doğa ve Masal Evrenleri!', 'Spor ve Hareketli Konular!', '20 Harika Konu Görevi!'],
      nasil: 'Her sayfada önce <b>konuyu birlikte adlandırın</b> (“Bu hangi evren?”), sonra eşleştirmeyi çocuk yapsın. Yanlış eşleşmede “peki neresi uymadı?” diye sorun.' },
    { ad: 'Sihirli Konu Çarkı & Resim Yapbozu', sure: '15 dk', tur: 'Grup · çark oyunu',
      ne: 'Konu, Kahraman, Sanat Stili ve Mekân kartlarını döndürüp resim yapbozu oluşturma.',
      nasil: 'Çarkı gruplar sırayla döndürsün. Çıkan dörtlüyü cümleye çevirtin: “<b>uzayda</b> <b>panda</b> <b>çizgi film stilinde</b> bisiklet sürüyor”. En komik kombinasyona alkış.' },
    { ad: '6 Konu 6 Muhteşem Görsel Rehberi', sure: '10 dk', tur: 'Kapanış · sesli rehber',
      ne: 'Uzaydan masallara 6 konunun görselleri ve promptları; sesli dinleme ve kopyalama.',
      nasil: 'Görselleri gösterip “bu prompt neyi söylüyor?” diye çözümletin. Bir promptu deftere yazdırın.' }
  ],

  4: [
    { ad: 'Cümle Ölçer & Prompt Dedektifi', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Cevaba cümle/madde/kelime sınırı koymayı öğrenme; “Cümle Ölçer” rozeti.',
      sayfalar: ['Cümle Sınırı Koymayı Öğren!', 'Maddeli Liste İstiyorum!', 'Kelime Sayısı Belirleme!', '20 Harika Cümle Ölçer Görevi!'],
      nasil: 'Her sayfada gelen cevabı <b>sınıfça parmakla sayın</b> (bir… iki… üç). Sayı tutmuyorsa “istediğimiz kaçtı?” diye sorun. Bu ders matematikle birleşir.' },
    { ad: 'Sihirli Sayı Seçici & Hikâye Fabrikası', sure: '15 dk', tur: 'Grup · sayı seçici',
      ne: '1 Cümle / 3 Madde / 5 Kelime sınırını belirleyip en net komutu üretme yarışı.',
      nasil: 'Her grup farklı bir sınır seçsin. Sonuçları yan yana okuyup <b>“hangisi bize daha kolay geldi?”</b> diye tartıştırın (1. sınıfta cevap genelde 2–3 cümledir).' },
    { ad: '1. Sınıf Çok Basit Prompt Rehberi', sure: '10 dk', tur: 'Kapanış · 6 kural',
      ne: 'Kısa ve net prompt yazmanın 6 basit kuralı, sesli dinleme.',
      nasil: 'Altı kuralı sınıfça yüksek sesle okuyun ve panoya asın.' }
  ],

  5: [
    { ad: 'Duygu Tonu & Sıfat Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Konuşma havasını (komik, sakin, meraklı, bilgili) keşfedip eşleştirme.',
      sayfalar: ['Komik Rakun ve Neşeli Ton!', 'Bilge Baykuş ve Meraklı Ton!', 'Neşeli Yunus ve Sakin Ton!', 'Zeki Tilki ve Akıllı Bilgi Tonu!'],
      nasil: 'Her hayvan bir tonu temsil eder. <b>Önce siz o tonda konuşarak canlandırın</b> (rakun gibi neşeli, baykuş gibi meraklı), sonra çocuk eşleştirsin. Bu dramatizasyon dersin kalbidir.' },
    { ad: 'Duygu Tiyatrosu & Renkli Ton Çarkı', sure: '15 dk', tur: 'Grup · drama',
      ne: 'Duygu maskesi seçip öğretmenin sıfatlarını ekleyerek şampiyon komut üretme.',
      nasil: 'Gruplar maske çeker ve o duyguyla cümleyi <b>canlandırarak</b> okur. Sınıf duyguyu tahmin eder.' },
    { ad: '1. Sınıf 5 Sihirli Duygu Rengi Rehberi', sure: '10 dk', tur: 'Kapanış · sesli rehber',
      ne: 'Komik, Meraklı, Sakin, Bilgili, Sevimli anlatım kuralları.',
      nasil: 'Beş rengi panoya asın; yıl boyunca “bugün hangi renkle anlatalım?” diye kullanın.' }
  ],

  6: [
    { ad: 'Hedef Kitle & Dinleyici Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Cevabın kime anlatıldığını keşfetme, doğru seviyeyi seçme.',
      sayfalar: ['1. Sınıf Arkadaşına Anlatım!', 'Minik Kardeşe Anlatım!', 'Uzay Bilim İnsanına Anlatım!', 'Tatlı Dedeye / Büyükanneye Anlatım!'],
      nasil: 'Dört dinleyici gerçek hayattan tanıdık: arkadaş, kardeş, bilim insanı, dede. Her sayfada <b>“bu kelimeyi kardeşim anlar mı?”</b> sorusunu tekrarlayın. Anlamayacağı kelimeleri birlikte sadeleştirin.' },
    { ad: 'Dinleyici Radyosu & Hedef Kitle Kulesi', sure: '15 dk', tur: 'Grup · frekans oyunu',
      ne: 'Dinleyici frekansını ayarlayıp (Koala, Flamingo, Zürafa) kurala uygun komut üretme.',
      nasil: 'Her grup bir dinleyici çeker; ürettiği cümleyi <b>o dinleyiciymiş gibi</b> başka bir gruba okur. Anlaşıldıysa puan.' },
    { ad: '1. Sınıf Hedef Kitle Rehberi', sure: '10 dk', tur: 'Kapanış · sesli rehber',
      ne: 'Arkadaşa, bebeğe, dedeye, bilim insanına uygun anlatım kuralları.',
      nasil: 'Kapanışta her çocuk “ben bunu … anlatacağım” diye bir dinleyici seçsin.' }
  ],

  7: [
    { ad: 'Çıktı Biçimi & Tür Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Liste, bilmece, masal, diyalog biçimlerini tanıyıp eşleştirme.',
      sayfalar: ['Düzenli Liste Biçimi!', 'Eğlenceli Bilmece Biçimi!', 'Sihirli Masal Biçimi!', 'Karşılıklı Diyalog Biçimi!'],
      nasil: 'Her biçimi <b>önce sesli örnekle</b> tanıtın (bir bilmece sorun, bir masal cümlesi okuyun). Sonra çocuk eşleştirsin. Biçimlerin görünüşü (alt alta / karşılıklı) dikkat çekilecek asıl noktadır.' },
    { ad: 'AI Pasaportu & Kelime Avı Haritası', sure: '15 dk', tur: 'Grup · pasaport oyunu',
      ne: '10 AI kelimesine pasaport damgası; Tekboynuz, Kanguru, Papağan ile biçim üretme.',
      nasil: 'Öğrenilen kelimeler damgalandıkça sınıfça yüksek sesle tekrar edin. Pasaportu tamamlayan gruba rozet.' },
    { ad: '1. Sınıf Çıktı Türleri Rehberi', sure: '10 dk', tur: 'Kapanış · sesli rehber',
      ne: 'Liste, bilmece, masal, şiir, diyalog biçimleri özeti.',
      nasil: 'Biçim menüsünü (📝 📖 🎵 ❓) panoya asın.' }
  ],

  8: [
    { ad: 'Kural & Tabu Laboratuvarı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Cümle sınırı ve yasaklı kelime kurallarını belirleme.',
      sayfalar: ['Üç Cümle Kuralı!', 'Yasaklı Kelime Kuralı!', 'Korkutucu İfadeler Kullanma!', 'Basit Kelimeler Kullan!'],
      nasil: '3. sayfa (“korkutucu ifadeler”) bir <b>güvenlik</b> konusudur: “Yapay zekâdan korkutucu şeyler istemeyiz” cümlesini sınıfça tekrar ettirin. Bu, yıl boyu geçerli sınıf kuralı olsun.' },
    { ad: 'AI Tabu Oyunu & Yasaklı Kelime Kulesi', sure: '15–20 dk', tur: 'Grup · tabu',
      ne: 'Yasaklı kelimeleri söylemeden Panda, Yunus, Aslan’ı tarif etme.',
      nasil: 'Klasik tabu gibi oynatın. <b>Öğretmen uyarısı ve oyun kuralları etkinliğin içinde yazılıdır</b>, başlamadan okutun. Kuralı bozan grup sırayı devreder.' },
    { ad: '1. Sınıf Prompt Kuralları Rehberi', sure: '10 dk', tur: 'Kapanış · karşılaştırma',
      ne: 'Kelime sınırlama, korkutucu öğeleri eleme, iki promptu karşılaştırma.',
      nasil: 'İki promptu yan yana okutup “hangisi daha güvenli ve net?” diye oylatın.' }
  ],

  9: [
    { ad: 'Eksik Prompt Dedektifliği', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm',
      ne: 'Eksik kalan ayrıntıyı bulup promptu tamamlama.',
      sayfalar: ['Kahraman Kim?', 'Nerede Geçiyor?', 'Hikâye Nasıl Olsun?', 'Kaç Cümle Olsun?'],
      nasil: 'Dört sayfa tam olarak dört dedektif sorusudur. <b>Bu dörtlüyü panoya asın</b> ve her eksik promptta sırayla sordurun: KİM? NEREDE? NASIL? KAÇ CÜMLE?' },
    { ad: 'Eksik Prompt Dedektifleri & Hikâye Çarkı', sure: '15 dk', tur: 'Grup · dedektiflik',
      ne: 'Bozuk promptları grupla düzeltme; Sihirli Tavşan ve Ejderha hikâyesini tamamlama.',
      nasil: 'Her gruba bir bozuk prompt verin. Grup <b>eksiği bulup</b> düzeltilmiş hâlini okur. Düzeltmeden önce/sonra farkını tahtaya yazın.' },
    { ad: '1. Sınıf Örnek Promptlar & Tamamlama Rehberi', sure: '10 dk', tur: 'Kapanış · önce/sonra',
      ne: 'Bozuk ve tamamlanmış prompt karşılaştırmaları, sesli inceleme.',
      nasil: 'Kapanışta “bugün hangi soruyu sormayı öğrendik?” diye özetletin.' }
  ],

  10: [
    { ad: '10.1 Laboratuvar', sure: '15 dk', tur: 'Bireysel · hazırlanıyor',
      ne: 'Bireysel çalışma ve etkileşimli laboratuvar adımı (içerik hazırlanmaktadır).',
      nasil: 'İçerik yayınlanana kadar bu haftayı <b>yıl özeti</b> olarak işleyin: öğrenciler 1–9. derslerden en sevdikleri etkinliği tekrar açıp promptlarını geliştirsin.' },
    { ad: '10.2 Grup Çalışması', sure: '15 dk', tur: 'Grup · hazırlanıyor',
      ne: 'Takım atölyesi ve grup istem çalışması (içerik hazırlanmaktadır).',
      nasil: 'Gruplar yıl boyunca öğrendikleri 6 ögeyi (konu, sayı, duygu, kime, biçim, kural) kullanarak <b>tek bir şampiyon prompt</b> yazsın.' },
    { ad: '10.3 Görsel Rehber', sure: '10 dk', tur: 'Kapanış · hazırlanıyor',
      ne: 'Karşılaştırmalı görsel rehber ve sunum (içerik hazırlanmaktadır).',
      nasil: 'Yıl sonu sergisi yapın: en iyi 3 prompt ve sonucu panoya asılsın.' }
  ]
};

/* Gerçek içerikler genel tanımların yerine geçsin */
for (var _d in AI_ETKINLIK) {
  if (AI_DERSLER[_d]) AI_DERSLER[_d].adimlar = AI_ETKINLIK[_d];
}