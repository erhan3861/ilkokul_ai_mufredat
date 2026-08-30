/* =========================================================================
   AI-GALAXY • ORTAOKUL 8 (8. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   -------------------------------------------------------------------------
   Ders adları ve haftalık konular : ortaokul8/ders_linkleri_ve_sifreleri.md
   Etkinlik adları ve ekran metni  : ortaokul8/dersN/dersN_M.html gerçek başlıkları
   Uydurulan ders/etkinlik adı yoktur.

   NOT — 8. SINIFIN AYIRT EDİCİ YANLARI:
   • LGS yılıdır. Maarif 8. sınıf konuları (Mevsimler ve İklim, DNA ve Genetik
     Kod, Basınç, Periyodik Sistem, Asitler-Bazlar, Millî Uyanış, Üslü ve
     Kareköklü İfadeler) derse gömülüdür; AI konunun üstüne değil, içine girer.
   • İki farklı etkinlik kuşağı vardır:
       – Ders 1–6 : Lab = 20 bölüm / 4 kademe · Grup = 4 takım rolü + 10 aşama
                    · Rehber = 9 sayfalık görsel vitrin
       – Ders 7–9 : Lab = 7–8 ekranlı akış · Grup = 8 görevli takım akışı
                    · Rehber = prompt vitrini (9 / 8 / 4 ekran)
   • Ağırlık "istem yazmak"tan ÇIKTIYI DENETLEMEYE kayar: rubrik, CER
     (İddia–Kanıt–Açıklama), kaynak 5 ölçütü, kör değerlendirme (benchmark)
     ve sokratik koçluk.
   • Sesli okuma ve köprü butonları yoktur; şifre mor "?" → ✏️ Cevapla ile girilir.
   ========================================================================= */

var AI_DERSLER = {

  1: {
    ad: 'Görevi Parçalara Ayırmak',
    emoji: '🧩',
    konu: 'Task decomposition (Fen 8: Mevsimler ve İklim)',
    tekCumle: 'Karmaşık bir görevi tek cümlede istemek yerine <b>girdi → işlem → çıktı</b> diye alt adımlara bölmek, 8. sınıf istem mühendisliğinin ilk kuralıdır.',
    neden: [
      '“Mevsimleri anlat” gibi tek parça istek, yapay zekânın hangi işi önce yapacağını bilememesine ve yüzeysel bir özete yol açar.',
      'Görev parçalama, blok kodlamadaki <b>algoritma kurma</b> becerisinin dil karşılığıdır; bu hafta iki müfredat aynı düşüncede buluşur.',
      'Mevsimler konusu 23° 27′ eksen eğikliği, ışık açısı ve enerji yoğunluğu gibi <b>zincirleme</b> bir nedensellik taşır; parçalamadan doğru anlatılamaz.'
    ],
    kazanim: [
      'Tek parça karmaşık istem ile parçalanmış istemi <b>ayırt eder</b>.',
      'Bir görevi <b>Tarih/Konum → Işık Açısı → İklim Raporu</b> gibi sıralı alt adımlara böler.',
      'Alt adımların sırasını bozunca sonucun neden bozulduğunu açıklar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Tek cümle yeter mi? (5 dk)',
        m: 'Tahtaya yazın: <b>“Mevsimleri bana anlat.”</b> Sınıfa sorun: yapay zekâ önce neyi hesaplamalı? Cevaplar çoğalınca “demek ki tek cümle yetmiyor” deyin.' },
      { b: '2️⃣ Üç kutu (5 dk)',
        m: 'Rehberdeki gerçek sırayı yazdırın: <b>1. Tarih/Konum · 2. Işık Açısı · 3. İklim Raporu.</b> Her kutunun çıktısı bir sonrakinin girdisidir.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Bireysel lab (20 bölüm) → Takım Atölyesi (4 rol, 10 aşama) → 9 sayfalık görsel vitrin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her takım alt adımlarını okusun. Sınıf <b>“sıra doğru mu?”</b> diye oylasın; bozuk sırayı birlikte düzeltin.' }
    ],
    ornekler: [
      { kotu: 'Mevsimleri bana anlat.', iyi: '1) 21 Aralık’ta ışınların geliş açısını hesapla. 2) Bu açının birim yüzeydeki enerjiye etkisini açıkla. 3) Sonucu iklim raporuna dönüştür.', not: 'Tek parça → üç alt adım.' },
      { kotu: 'Eksen eğikliği nedir?', iyi: 'Eksen eğikliği 0° olsaydı ne olurdu? Önce fiziksel nedeni, sonra sonucu yaz.', not: 'Neden ve sonuç ayrıldı.' },
      { kotu: 'İklim raporu yaz.', iyi: 'Yukarıdaki açı sonucunu kullanarak Ankara için 3 maddelik iklim raporu yaz.', not: 'Bir adımın çıktısı diğerinin girdisi.' }
    ],
    sorular: [
      'Bu görev kaç işten oluşuyor? Hepsini tek cümlede istesek ne olur?',
      'Hangi alt adım en başta olmalı? Neden?',
      'İkinci adımın girdisi nereden geliyor?',
      'Bir alt adımı çıkarsak sonuç nasıl bozulur?'
    ],
    ipuclari: [
      '8. sınıfta <b>sesli okuma butonu yoktur</b>; metni öğrenci okur.',
      'Lab’ın dört kademesi zorlaşarak ilerler; <b>sınıf süresine göre 10–12 bölüm</b> yeterlidir.',
      'Alt adımları deftere yazdırın — 29. haftadaki iş akışı şemasında tekrar kullanılacak.'
    ]
  },

  2: {
    ad: 'Prompt İçinde Öncelik Belirlemek',
    emoji: '🪜',
    konu: 'Kural hiyerarşisi (Fen 8: DNA ve Genetik Kod)',
    tekCumle: 'Bir istemdeki kurallar eşit değildir: <b>ZORUNLU</b> olan asla ihlal edilemez, <b>İKİNCİL</b> olan (stil, format) gerektiğinde feda edilir.',
    neden: [
      'Kurallar çakıştığında yapay zekâ hangisinden vazgeçeceğini bilemez; hiyerarşi bu belirsizliği bitirir.',
      'DNA’da A–T ve G–C eşleşmesi <b>ihlal edilemez bir kuraldır</b>; konu, öncelik kavramının birebir bilimsel karşılığıdır.',
      'Öncelik sıralaması yapmak, kodlamadaki koşul mantığının ve gerçek proje yönetiminin ortak becerisidir.'
    ],
    kazanim: [
      'Bir istemdeki kuralları <b>zorunlu</b> ve <b>ikincil</b> diye ayırır.',
      'İki kural çakıştığında hangisinin korunacağını gerekçelendirir.',
      'Kendi isteminde öncelik hiyerarşisini açıkça yazar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hangisinden vazgeçersin? (5 dk)',
        m: 'Tahtaya iki kural yazın: <b>“Bilimsel olarak doğru olsun”</b> ve <b>“Şiir gibi olsun.”</b> Çakışırsa hangisi kalır? Sınıf karar versin.' },
      { b: '2️⃣ İki kademe (5 dk)',
        m: '🔴 <b>ZORUNLU</b> (asla ihlal edilemez) · 🟡 <b>İKİNCİL</b> (stil/format). DNA eşleşme kuralını 🔴’ya, “tablo olsun”u 🟡’ye koydurun.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Prompt İçinde Öncelik Belirleme Labı (20 bölüm) → DNA & Prompt Öncelik Takım Atölyesi (4 rol) → 9 sayfalık vitrin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her takım <b>zorunlu kuralını</b> okusun. “Bu kural olmasaydı çıktı neyi yanlış yapardı?” diye tartıştırın.' }
    ],
    ornekler: [
      { kotu: 'DNA’yı anlat, tablo olsun, kısa olsun, eğlenceli olsun.', iyi: 'ZORUNLU: A–T ve G–C eşleşmesi doğru olacak. İKİNCİL: mümkünse tablo, en çok 5 satır.', not: 'İki kademe ayrı ayrı yazıldı.' },
      { kotu: 'Kısa olsun ama her şeyi anlat.', iyi: 'ZORUNLU: nükleotidin üç parçası eksiksiz olacak. İKİNCİL: kısalık — çelişirse doğruluğu koru.', not: 'Çakışmanın çözümü yazıldı.' },
      { kotu: 'EBOB EKOK konusunu şiir gibi anlat.', iyi: 'ZORUNLU: EBOB ve EKOK tanımları doğru olacak. İKİNCİL: anlatım kısa olsun.', not: 'Stil, doğruluğun önüne geçmiyor.' }
    ],
    sorular: [
      'Bu istemde ihlal edilemez kural hangisi?',
      'Hangi kural gerektiğinde feda edilebilir?',
      'İki kural çakıştı — model hangisini seçmeli, nereden anlayacak?',
      'DNA eşleşmesi neden “ikincil” olamaz?'
    ],
    ipuclari: [
      'Öğrenciler her şeyi zorunlu yazma eğiliminde olur; <b>en fazla iki zorunlu kural</b> sınırı koyun.',
      'Çakışma kuralını istemde açıkça yazdırın: <i>“Çelişirse doğruluğu koru.”</i>',
      'Renkli kalemle iki kademeyi işaretletin; görsel ayrım kalıcılığı artırır.'
    ]
  },

  3: {
    ad: 'Örnek Vererek Çıktıyı Yönlendirmek',
    emoji: '📐',
    konu: 'Few-shot prompting (Fen 8: Basınç)',
    tekCumle: 'Yapay zekâya <b>bir–iki çözülmüş örnek</b> göstermek, uzun uzun tarif etmekten çok daha tutarlı ve aynı biçimli çıktı verir.',
    neden: [
      'Few-shot, profesyonel istem mühendisliğinin en verimli tekniğidir; öğrenci “nasıl anlatırım”dan “nasıl örneklerim”e geçer.',
      'Basınç konusu üç ayrı formül ailesi (katı P=F/S, sıvı, gaz) içerir; aynı şablonla üçünü çözdürmek kavramı pekiştirir.',
      'Şablon kurmak, bir problemi <b>alan alan</b> düşünmeyi öğretir: verilen · istenen · formül · birim · sonuç.'
    ],
    kazanim: [
      'Rastgele istem ile <b>şablonlu (few-shot) istemi</b> ayırt eder.',
      'Bir çözümü şablon hâline getirip ikinci örneği aynı biçimde ürettirir.',
      'Şablonun eksik alanını fark edip tamamlar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Aynı kalıp (5 dk)',
        m: 'Tahtaya bir katı basıncı sorusunu <b>çözülmüş</b> yazın. Sınıf, çözümdeki sabit alanları (verilen · formül · birim · sonuç) bulsun.' },
      { b: '2️⃣ Şablonu adlandırın (5 dk)',
        m: 'Bu alanları kutu kutu yazdırın. “Yapay zekâya bu kutuları doldurt” deyin — few-shot budur.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Örnek Vererek Çıktıyı Yönlendirme Labı (20 bölüm) → Basınç & Few-Shot Takım Atölyesi (4 rol) → 9 sayfalık vitrin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İki takımın çıktısını yan yana okutun; <b>“şablon tutmuş mu?”</b> diye kontrol ettirin.' }
    ],
    ornekler: [
      { kotu: 'Basınç sorusu çöz.', iyi: 'Örnek: [Verilen: F=200 N, S=0,5 m² · Formül: P=F/S · Sonuç: 400 Pa]. Aynı biçimde şu soruyu çöz: F=150 N, S=0,25 m².', not: 'Bir örnek, sonra aynı kalıp.' },
      { kotu: 'Sıvı basıncını da anlat.', iyi: 'Yukarıdaki katı basıncı şablonunu koruyarak sıvı basıncı için de aynı beş alanı doldur.', not: 'Şablon yeni konuya taşındı.' },
      { kotu: 'Birim yazmayı unutma.', iyi: 'Her satırda birimi ayrı bir alan olarak göster; birim eksikse sonucu geçersiz say.', not: 'Alan zorunlu hâle getirildi.' }
    ],
    sorular: [
      'İki örneğin ortak kalıbı ne?',
      'Hangi alanı boş bıraktın? Sonucu nasıl etkiledi?',
      'Neden örnek göstermek tarif etmekten iyi?',
      'Bu şablonu hangi başka derste kullanabilirsin?'
    ],
    ipuclari: [
      'Örnek <b>doğru çözülmüş</b> olmalı; hatalı örnek, hatayı çoğaltır.',
      'Şablon alanlarının sırasını sabit tutun; sıra değişirse tutarlılık bozulur.',
      'Hızlı biten öğrenciye “gaz basıncı için üçüncü örneği sen kur” deyin.'
    ]
  },

  4: {
    ad: 'Çıktı Değerlendirme Ölçütü Yazmak',
    emoji: '📋',
    konu: 'Rubrik ve öz-denetim (Fen 8: Periyodik Sistem)',
    tekCumle: 'Çıktının iyi olduğunu <b>hissederek</b> değil, önceden yazdığımız <b>ölçülebilir rubrikle</b> söyleriz — ve rubriği modele kendi işini denetletmek için de kullanırız.',
    neden: [
      'Rubrik, öznel beğeniyi ölçüte çevirir; öğrenci “güzel olmuş” demek yerine gerekçe kurar.',
      'Modele kendi çıktısını rubrikle puanlatmak (<b>öz-denetim / LLM-as-a-Judge</b>) 8. sınıfın en ileri becerisidir.',
      'Periyodik sistem, kuralları ve <b>istisnaları</b> olan bir konudur; rubrik istisnaları yakalamanın aracı olur.'
    ],
    kazanim: [
      'Ölçülebilir değerlendirme ölçütü yazar (“doğru”, “güzel” gibi belirsiz sözcükler kullanmadan).',
      'Bir çıktıyı rubrikle puanlar ve puanını gerekçelendirir.',
      'Modelden <b>kendi çıktısını rubrikle denetlemesini</b> ister.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kaç puan? (5 dk)',
        m: 'Kısa bir AI çıktısı gösterin, sınıf 1–5 puan versin. Puanlar dağılınca “ortak ölçütümüz yok” tespitini yapın.' },
      { b: '2️⃣ Ölçütü ölçülebilir yapın (5 dk)',
        m: '“Doğru olsun” yerine <b>“7 periyot ve 8 grup adı eksiksiz verilsin”</b> yazdırın. Fark üzerine konuşun.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Çıktı Değerlendirme Ölçütü Yazma Labı (20 bölüm) → Periyodik Sistem & Rubrik Takım Atölyesi (4 rol) → 9 sayfalık vitrin (8. sayfa: Denetim Raporu).' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Bir takımın rubriğini başka takıma uygulatın. Aynı çıktıya farklı puan çıkarsa <b>ölçüt yeterince ölçülebilir değildir.</b>' }
    ],
    ornekler: [
      { kotu: 'Cevap doğru ve güzel olsun.', iyi: 'Ölçüt 1: 7 periyodun katman karşılığı var mı? Ölçüt 2: soygaz istisnası yazılmış mı? Her ölçüt 0–2 puan.', not: 'Belirsiz sıfat → sayılabilir ölçüt.' },
      { kotu: 'Kontrol et.', iyi: 'Rubriği kendi cevabına uygula, her ölçüte puan ver, eksik maddeyi düzelt.', not: 'Öz-denetim istendi.' },
      { kotu: 'Eksik bir şey var mı?', iyi: 'Rubrikte 2 puan alamayan her madde için tek cümlelik düzeltme öner.', not: 'Denetim çıktısı eyleme bağlandı.' }
    ],
    sorular: [
      'Bu ölçüt gerçekten ölçülebilir mi, yoksa görüş mü?',
      'İki kişi aynı çıktıya aynı puanı verir mi?',
      'Model kendi işini puanlarken neye dikkat etmeli?',
      'Hangi tek ekleme puanı en çok yükseltir?'
    ],
    ipuclari: [
      'Puan verirken <b>gerekçe zorunlu</b> olsun: “3 verdim çünkü…”',
      'Modelin kendine verdiği puana körü körüne güvenmeyin; <b>bir çıktıyı sınıf da puanlasın.</b>',
      'Rubrik kartını panoya asın; 6, 7 ve 8. derslerde tekrar kullanılacak.'
    ]
  },

  5: {
    ad: 'Araştırma Sorusu Oluşturmak',
    emoji: '🔎',
    konu: 'Odaklı soru ve hipotez (İnkılap 8)',
    tekCumle: 'Genel soru genel cevap getirir; <b>5N1K ve hipotez</b> ile daraltılmış soru, araştırılabilir bir cevap getirir.',
    neden: [
      'Yapay zekâdan iyi cevap almak önce iyi soru kurmayı gerektirir; soru kalitesi cevabın tavanını belirler.',
      '“Bir Kahraman Doğuyor” ünitesi kronoloji, coğrafya ve fikir dünyası gibi <b>ayrıştırılabilir</b> katmanlar taşır; her katman ayrı bir soru demektir.',
      'Hipotez kurmak, cevabı beklemeden önce <b>ne bulmayı umduğunu</b> söylemektir — bilimsel düşünmenin özü.'
    ],
    kazanim: [
      'Genel soru ile odaklı araştırma sorusunu ayırt eder.',
      '5N1K’yı kullanarak bir konuyu tek odaklı soruya indirger.',
      'Sorusuna sınanabilir bir <b>hipotez</b> ekler.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — İki soru (5 dk)',
        m: 'Tahtaya yazın: <b>“Atatürk’ü anlat.”</b> · <b>“Selanik’in çok uluslu yapısı Mustafa Kemal’in fikir dünyasını nasıl etkiledi?”</b> Farkı sınıf söylesin.' },
      { b: '2️⃣ 5N1K ile daraltın (5 dk)',
        m: 'Kim · Ne · Nerede · Ne zaman · Neden · Nasıl. Geniş konuyu birlikte tek soruya indirin.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Araştırma Sorusu Oluşturma Labı (20 bölüm) → Bir Kahraman Doğuyor & Derin Araştırma Takım Atölyesi (4 rol) → 9 sayfalık vitrin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her takım sorusunu <b>ve hipotezini</b> okusun; sınıf “bu soru araştırmayla cevaplanır mı?” diye karar versin.' }
    ],
    ornekler: [
      { kotu: 'Atatürk’ü anlat.', iyi: 'Selanik’in liman ve basın hayatının fikir dünyasına etkisini 3 örnekle açıkla.', not: 'Odak + örnek sayısı.' },
      { kotu: 'Askerî başarılarını yaz.', iyi: 'Çanakkale’de hangi karar sonucu en çok değiştirdi? Kaynak göstererek açıkla.', not: 'Tek olaya odaklandı.' },
      { kotu: 'Eğitimi nasıldı?', iyi: 'Hipotez: askerî eğitim planlama biçimini belirlemiştir. Destekleyen ve zayıflatan bilgileri ayrı listele.', not: 'Sınanabilir hipotez.' }
    ],
    sorular: [
      'Bu soru tek bir konuya mı odaklanıyor?',
      '5N1K’dan hangisi eksik?',
      'Hipotezin yanlış çıkarsa nasıl anlarsın?',
      'Soruyu nasıl daraltırsak daha güçlü olur?'
    ],
    ipuclari: [
      '“Nedir?” ile başlayan soruları <b>“nasıl / neden / hangi”</b> ile yeniden yazdırın; kalite anında yükselir.',
      'Hipotez, tahmin değildir: <b>yanlışlanabilir</b> olmalıdır.',
      'Soruları saklayın; 7. haftada kaynak değerlendirmesiyle birleşecek.'
    ]
  },

  6: {
    ad: 'İddia, Kanıt ve Açıklamayı Ayırmak',
    emoji: '⚖️',
    konu: 'CER modeli (Fen 8: Asitler ve Bazlar)',
    tekCumle: 'Bilimsel bir cümle üç parçadan oluşur: <b>İddia · Kanıt · Açıklama.</b> Kanıtı ve açıklaması olmayan cümle, ne kadar inandırıcı olursa olsun sadece bir iddiadır.',
    neden: [
      'Yapay zekâ akıcı ama kanıtsız cümle üretebilir; CER, öğrencinin bunu yakalamasını sağlayan en sade araçtır.',
      'Asit-baz konusu ölçülebilir kanıt (pH, turnusol, ayıraç rengi) sunar; model soyut kalmaz.',
      'CER, LGS’deki yorum sorularında ve fen okuryazarlığında doğrudan kullanılan bir düşünme kalıbıdır.'
    ],
    kazanim: [
      'Bir metni <b>iddia / kanıt / açıklama</b> olarak parçalar.',
      'Kanıtın iddiayı gerçekten desteklediğini denetler.',
      'Yapay zekâdan CER biçiminde cevap isteyen istem yazar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kanıtın var mı? (5 dk)',
        m: 'Tahtaya yazın: <b>“Limon suyu asittir.”</b> Sınıf inansın; sonra “kanıtın ne?” diye sorun. Turnusol cevabı gelene kadar bekleyin.' },
      { b: '2️⃣ Üç kutuyu kurun (5 dk)',
        m: '🧪 <b>İDDİA</b> · 🔍 <b>KANIT</b> · ⚖️ <b>AÇIKLAMA</b>. Yukarıdaki cümleyi birlikte kutulara dağıtın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'İddia, Kanıt ve Açıklamayı Ayırma Labı (20 bölüm) → Asit-Baz & CER Takım Atölyesi (4 rol) → 9 sayfalık vitrin.' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: '<b>“Kanıt yoksa karar yok”</b> cümlesini sınıf kuralı yapın; her takım kanıtını göstererek kararını savunsun.' }
    ],
    ornekler: [
      { kotu: 'Limon suyu asittir.', iyi: 'İDDİA: limon suyu asittir. KANIT: mavi turnusolü kırmızıya çevirir, pH’ı 7’den küçüktür. AÇIKLAMA: sulu çözeltisine H⁺ iyonu verdiği için.', not: 'Üç parça da yerinde.' },
      { kotu: 'Bu madde baz olabilir.', iyi: 'Bu maddenin baz olduğunu iddia ediyorsan hangi ayıraç sonucunu kanıt olarak sunarsın? Mekanizmayı da açıkla.', not: 'Kanıt ve mekanizma istendi.' },
      { kotu: 'Yapay zekâ öyle dedi.', iyi: 'Bu cümleyi CER biçiminde yeniden yaz; kanıt satırında ölçülebilir bir veri bulunsun.', not: 'Otorite değil, kanıt.' }
    ],
    sorular: [
      'Bu cümlenin kanıtı ne? Ölçülebilir mi?',
      'Açıklama kısmı var mı — <i>neden</i> böyle oluyor?',
      'Kanıt iddiayı gerçekten destekliyor mu, yoksa konuyu mu değiştiriyor?',
      'Yapay zekâ kanıtsız cümle kurduğunda nasıl anlarsın?'
    ],
    ipuclari: [
      '“Bence” ile başlayan cümleleri <b>iddia</b> kutusuna koydurun, kanıt sütununu boş bırakın — fark görünsün.',
      'Kanıt olarak “internette yazıyordu” kabul edilmesin; 7. hafta bunun üstüne kurulacak.',
      'CER kartını panoya asın; 8 ve 31. haftalarda tekrar kullanılacak.'
    ]
  },

  7: {
    ad: 'Kaynak Kalitesini Değerlendirmek',
    emoji: '🗂️',
    konu: 'Kaynak 5 ölçütü (İnkılap 8)',
    tekCumle: 'Akıcı bir yapay zekâ yanıtı <b>kaynak değildir</b>: her kaynağa <b>Kim · Kanıt · Güncel · Amaç · Teyit</b> diye beş soru sorarız.',
    neden: [
      '“Yapay zekâ böyle söyledi” cümlesi tek başına kanıt sayılmaz; bu dersin ana kuralı budur.',
      'Millî Uyanış dönemi, aynı olayın farklı amaçlarla anlatıldığı kaynaklarla doludur — <b>amaç</b> ölçütü burada somutlaşır.',
      '“Güncel olmak” tek başına yeterli değildir; öğrenci ölçütleri birlikte kullanmayı öğrenir.'
    ],
    kazanim: [
      'Bir kaynağı beş ölçütle değerlendirir.',
      'Kaynakları <b>en güçlüden en zayıfa</b> sıralar ve sıralamasını gerekçelendirir.',
      'Yapay zekâ yanıtını bağımsız bir kaynakla teyit eder.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Kanıt mı? (5 dk)',
        m: 'Sorun: <b>“Yapay zekâ böyle söyledi” cümlesi kanıt sayılır mı?</b> Sınıfı ikiye ayırıp tartıştırın, sonra kuralı yazın.' },
      { b: '2️⃣ Kaynak 5’i kurun (5 dk)',
        m: '<b>Kim?</b> (yazar, kurum, uzmanlık) · <b>Kanıt?</b> (veri, yöntem) · <b>Güncel?</b> · <b>Amaç?</b> (bilgilendirme mi, satış mı) · <b>Teyit?</b>' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'AI Kaynak Laboratuvarı (7 bölüm) → Takım Kaynak Görevleri (8 görev) → AI Kaynak ve Prompt Vitrini (9 ekran).' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Takımlara üç kaynağı sıralatın: üretici reklamı · yazarsız blog · yöntemi açık üniversite araştırması. Gerekçeler okunsun.' }
    ],
    ornekler: [
      { kotu: 'Bir sitede yazıyordu, demek ki doğru.', iyi: 'Bu bilgiyi Kaynak 5 ile değerlendir: yazan kim, kanıtı ne, tarihi ne, amacı ne, başka nerede doğrulanıyor?', not: 'Beş ölçüt birlikte.' },
      { kotu: 'Bu kaynak güncel, o yüzden en iyisi.', iyi: 'Güncelliği tek ölçüt sayma; yöntemi ve yazarı belirsizse güncellik tek başına yeterli değildir — gerekçeni yaz.', not: 'Tek ölçüt tuzağı.' },
      { kotu: 'Yapay zekâ söyledi, kesin doğrudur.', iyi: 'Yanıttaki iddiayı bağımsız bir kaynakla teyit et; farklıysa hangisine neden güvendiğini açıkla.', not: 'Teyit adımı eklendi.' }
    ],
    sorular: [
      'Bu bilgiyi kim yazmış? Konunun uzmanı mı?',
      'Kaynağın amacı ne — bilgilendirmek mi, satmak mı?',
      '“Güncel” olması neden tek başına yetmez?',
      'Aynı bilgiyi bağımsız ikinci bir yerde bulabildin mi?'
    ],
    ipuclari: [
      'Bu dersin etkinlikleri <b>yeni formattadır</b> (7 bölüm / 8 görev / 9 ekran); 1–6. haftadaki 20 bölümlü lab yapısını beklemeyin.',
      'Sıralama görevinde <b>gerekçe zorunlu</b>; sadece sıra numarası kabul etmeyin.',
      'Kaynak 5 kartını panoya asın; 23 ve 35. haftalarda tekrar kullanılacak.'
    ]
  },

  8: {
    ad: 'Birden Fazla AI Cevabını Karşılaştırmak',
    emoji: '🏁',
    konu: 'Model benchmark ve kör değerlendirme',
    tekCumle: 'Model adına değil <b>cevabın kanıtlanabilir niteliğine</b> bakarız: aynı görev, ortak ölçüt, kanıtlı karar.',
    neden: [
      'Öğrenci “yapay zekâ” diye tek bir şey olmadığını, araçların farklı güçlü yanları olduğunu görür.',
      '<b>Kör değerlendirme</b> (model adını gizleme) marka önyargısını kırar — gerçek benchmark yöntemidir.',
      'Bu hafta 4. haftanın rubriği ve 6. haftanın CER’i tek bir karar sürecinde birleşir.'
    ],
    kazanim: [
      'Aynı prompta gelen çıktıları <b>Göreve uyum · Doğruluk · Gerekçe · Belirsizlik</b> ölçütleriyle karşılaştırır.',
      'Modelin “emin olmadığını söylemesini” bir kalite göstergesi olarak tanır.',
      'Kararını en az iki kanıtla savunur.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Hangisi daha iyi? (5 dk)',
        m: 'Aynı prompttan gelmiş iki cevabı <b>model adı olmadan</b> gösterin. Gerekçeler dağılınca ortak ölçüt ihtiyacını gösterin.' },
      { b: '2️⃣ Dört ölçüt (5 dk)',
        m: '<b>Göreve uyum</b> (istenen işi yaptı mı) · <b>Doğruluk</b> (kontrol edilebilir mi) · <b>Gerekçe</b> (nasıl kurduğunu söylüyor mu) · <b>Belirsizlik</b> (emin olmadığını söylüyor mu).' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Karar Laboratuvarı (7 ekran) → Model Dedektifleri (8 görev) → Benchmark Araç Kutusu (8 araç promptu).' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'Her ekip kararını <b>iki kısa kanıtla</b> savunsun: “Beta’yı seçtik çünkü … ve …”' }
    ],
    ornekler: [
      { kotu: 'Bu cevap daha iyi.', iyi: 'Üç cevabı da dört ölçütle puanla; her puanın yanına cevaptan bir alıntı yaz.', not: 'Beğeni → kanıtlı ölçüt.' },
      { kotu: 'Hangi model daha akıllı?', iyi: 'Model adlarını gizleyerek cevapları A/B/C diye etiketle ve sadece içeriğe göre sırala.', not: 'Kör değerlendirme.' },
      { kotu: 'Uzun olan daha iyidir.', iyi: 'Promptun bütün koşullarını madde madde işaretle; koşulu atlayan cevabı uzunluğuna bakmadan ele.', not: 'Koşul denetimi.' }
    ],
    sorular: [
      'Promptun hangi koşulu atlanmış?',
      'Hangi cevap emin olmadığı yeri söylüyor? Bu iyi mi, kötü mü?',
      'Kararını hangi iki kanıtla savunuyorsun?',
      'Model adını bilseydin kararın değişir miydi? Neden?'
    ],
    ipuclari: [
      'Kıyaslama <b>aynı promptla</b> yapılmalıdır; prompt değişirse karşılaştırma geçersizdir.',
      'Uzunluğu kalite sanma eğilimini açıkça kırın.',
      '8.3 bir vitrin değil <b>araç kutusudur</b>: kopyalanabilir 8 benchmark promptu içerir.'
    ]
  },

  9: {
    ad: 'Sokratik Öğrenme Asistanı',
    emoji: '🧭',
    konu: 'Koçluk promptu (Mat 8: Üslü İfadeler)',
    tekCumle: 'İyi bir koç cevabı vermez: <b>Dinle → Teşhis et → Sor → Bekle → Uyarla</b> döngüsüyle düşünme yolunu açar.',
    neden: [
      'Öğrenci yapay zekâyı “cevap makinesi” olmaktan çıkarıp <b>öğrenme ortağı</b> olarak kurmayı öğrenir — LGS çalışmasında doğrudan işe yarar.',
      'Üslü ifadeler, yanılgıların (taban toplama, üs çarpma) çok net görüldüğü bir konudur; teşhis adımı somutlaşır.',
      'Koçluk promptu yazmak, 25. haftadaki <b>sistem promptunun</b> ilk adımıdır.'
    ],
    kazanim: [
      'Doğrudan cevap veren istem ile sokratik istemi ayırt eder.',
      '<b>Yön → Kural → İlk adım</b> ipucu merdivenini kurar.',
      'Modele “cevabı verme ve bekle” kuralını yazan bir koç promptu hazırlar.'
    ],
    nasil: [
      { b: '1️⃣ Isınma — Cevap mı, soru mu? (5 dk)',
        m: 'Bir üslü sayı hatası gösterin. Önce cevabı söyleyin, sonra tek bir soru sorun. Sınıfa sorun: <b>hangisinde daha çok düşündünüz?</b>' },
      { b: '2️⃣ Döngüyü kurun (5 dk)',
        m: 'Tahtaya yazın: <b>Dinle → Teşhis et → Sor → Bekle → Uyarla.</b> “Bekle” adımının neden zorunlu olduğunu tartıştırın.' },
      { b: '3️⃣ Etkinlik (25 dk)',
        m: 'Soru Merdiveni (8 ekran) → İpucu Zinciri (8 görev) → Koç Prompt Vitrini (4 ekran, kopyalanabilir koç promptları).' },
      { b: '4️⃣ Kapanış (5 dk)',
        m: 'İkişerli çalıştırın: biri koç, biri öğrenci. Koç <b>sonucu söylemeden</b> tek soruyla yönlendirsin.' }
    ],
    ornekler: [
      { kotu: 'Cevabı söyle: 3² × 3⁴ kaç?', iyi: 'Bana sonucu söyleme. Aynı tabanlı üslü sayılarda üslere ne yaptığımızı hatırlatan tek bir soru sor.', not: 'Sonuç gizli, kural hatırlatılıyor.' },
      { kotu: 'Yanlış, doğrusu 3⁶.', iyi: 'Hatayı doğrudan düzeltme; öğrencinin hangi kuralı karıştırdığını bulup onu sorgulatan bir soru sor.', not: 'Teşhis adımı.' },
      { kotu: 'İpucu ver.', iyi: 'İpucunu merdiven sırasıyla ver: önce yön, cevap gelmezse kural, yine gelmezse ilk adım. Her ipucundan sonra bekle.', not: 'Merdiven + bekleme kuralı.' }
    ],
    sorular: [
      'Koç cevabı verdi mi, düşündürdü mü?',
      'Öğrencinin karıştırdığı kural hangisi?',
      'Hangi merdiven basamağı yetti?',
      'Kendi koç promptunu yazsan ilk kuralı ne olurdu?'
    ],
    ipuclari: [
      '“Cevabı verme” ve “bekle” cümleleri istemde <b>açıkça yazılmalıdır</b>; yoksa model doğrudan cevaplar.',
      'Öğrenci koçluk yaparken cevabı ağzından kaçırırsa nazikçe merdivene döndürün; ceza yok.',
      '9.3 vitrindeki hazır koç promptlarını (matematik, yanılgı teşhisi, hobi) LGS çalışmasında kullandırabilirsiniz.'
    ]
  },

  10: {
    ad: 'Geri Bildirim Veren Yazı Asistanı',
    emoji: '✍️',
    konu: 'Ölçütlü geri bildirim (Türkçe 8)',
    tekCumle: 'Yapay zekâ metni <b>senin yerine yazmaz</b>; senin metnine ölçüte dayalı geri bildirim verir ve düzeltmeyi sen yaparsın.',
    neden: [
      '4. haftadaki rubrik becerisinin kendi yazına uygulanmış hâlidir.',
      'Paragrafta anlam ve mantık-muhakeme, LGS Türkçe’nin en çok soru gelen alanıdır; geri bildirim doğrudan bu beceriyi çalıştırır.',
      'Öğrenci “yazdır” ile “geliştir” arasındaki farkı öğrenir — akademik dürüstlüğün pratik karşılığı.'
    ],
    kazanim: [
      'Kendi metni için ölçütlü geri bildirim isteyen istem yazar.',
      'Gelen geri bildirimi <b>uygulamadan önce değerlendirir</b>.',
      'Metnin ilk ve son hâlini karşılaştırıp neyin geliştiğini söyler.'
    ],
    nasil: [
      { b: 'ℹ️ İçerik hazırlanıyor',
        m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b> (sayfalar “Hazırlanıyoruz” diyor). Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
      { b: '1️⃣ Kendi paragrafını yaz (10 dk)',
        m: 'Herkes bir konuda 6–8 cümlelik paragraf yazsın. <b>Yapay zekâ bu adımda kullanılmaz.</b>' },
      { b: '2️⃣ Ölçütlü geri bildirim iste (20 dk)',
        m: 'Üç ölçüt verdirin: ana fikir açık mı · destekleyici cümleler ana fikre bağlı mı · gereksiz cümle var mı. Model <b>düzeltmesin</b>, sadece söylesin.' },
      { b: '3️⃣ Düzeltmeyi öğrenci yapsın (10 dk)',
        m: 'Geri bildirimi uygulayıp uygulamamaya öğrenci karar versin; kararının gerekçesini yazsın.' }
    ],
    ornekler: [
      { kotu: 'Bu paragrafı sen yaz.', iyi: 'Paragrafımı yeniden yazma. Ana fikir açık mı, hangi cümle bağlanmıyor — sadece söyle.', not: 'Yazdırma değil, geri bildirim.' },
      { kotu: 'Düzelt.', iyi: 'Her sorun için bir ölçüt adı ve tek cümlelik gerekçe ver; düzeltmeyi ben yapacağım.', not: 'Ölçüt + gerekçe istendi.' },
      { kotu: 'İyi mi olmuş?', iyi: 'Üç ölçütün her birine 0–2 puan ver ve en düşük puanlı maddeyi göster.', not: 'Ölçülebilir geri bildirim.' }
    ],
    sorular: [
      'Geri bildirimin hangisini uyguladın, hangisini reddettin? Neden?',
      'Ana fikri hangi cümle taşıyor?',
      'Model senin yerine mi yazdı, yoksa sana mı gösterdi?',
      'İlk ve son hâl arasında ne değişti?'
    ],
    ipuclari: [
      'Kaynak dosyada bu ders <b>[CANLI]</b> görünse de etkinlik sayfaları henüz “Hazırlanıyoruz” diyor; ders yayına girince bu akış yerine gerçek etkinlikler kullanılacaktır.',
      'İlk taslak mutlaka <b>yapay zekâsız</b> yazılsın; yoksa geri bildirim anlamını yitirir.',
      'İlk ve son hâli birlikte saklatın; 21 ve 33. haftalarda kullanılacak.'
    ]
  }
};

/* =========================================================================
   ETKİNLİKLER — ortaokul8/dersN/dersN_M.html dosyalarındaki gerçek adlar,
   gerçek kademeler / roller / ekranlar.
   Şifreler: ortaokul8/ders_linkleri_ve_sifreleri.md
   ========================================================================= */

var AI_ETKINLIK = {

  1: [
    { ad: 'Görevi Parçalara Ayırma Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm / 4 kademe',
      ne: 'Tek parça karmaşık istem ile parçalanmış istemi ayırma.',
      sayfalar: ['Görevi Tanı (Bölüm 1–5)', 'Hata Nerede? (Bölüm 6–10)', 'Alt Adımları Kur (Bölüm 11–15)', 'Şampiyon İstem (Bölüm 16–20)'],
      nasil: 'Her bölümde <b>“hangi adım önce gelmeli?”</b> diye sordurun. Sınıf süresine göre 10–12 bölüm yeterlidir. Şifre: <b>parçala8</b>' },
    { ad: 'Görevi Parçalara Ayırma Takım Atölyesi', sure: '15 dk', tur: 'Grup · 4 rol · 10 aşama',
      ne: 'Takımca rol paylaşıp mevsim/iklim görevini alt adımlara bölme.',
      sayfalar: ['🛰️ Mevsim Simülatörü', '🧩 İstem Mühendisi', '📊 İklim Analisti', '🛡️ Kalite Hakemi'],
      nasil: 'Dört rolü dört öğrenciye dağıtın; <b>Kalite Hakemi</b> her aşamada eksik adımı işaretlesin. Şifre: <b>iklim8</b>' },
    { ad: 'Görsel Rehber & Şampiyon İstem Vitrini', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Mevsimler fiziğinden şampiyon isteme uzanan görsel vitrin.',
      sayfalar: ['1. Ders Tanıtımı & Video', '2. Bilimsel Temel (23° 27′ eksen eğikliği)', '3. Enerji Yoğunluğu', '4. Mevsim Takvimi', '5. Prompt Mimarisi (Girdi → İşlem → Çıktı)', '6. Hatalı Prompt Analizi', '7. Şampiyon İstem', '8. Günlük Yaşam ve Mühendislik', '9. Ders Özeti & Şifre'],
      nasil: '6. ve 7. sayfayı yan yana okutun: <b>hatalı istem neden hatalı?</b> Bir istemi deftere yazdırın. Şifre: <b>mevsim8</b>' }
  ],

  2: [
    { ad: 'Prompt İçinde Öncelik Belirleme Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm / 4 kademe',
      ne: 'Zorunlu ve ikincil kuralları ayırma, çakışmayı çözme.',
      sayfalar: ['Kuralı Tanı (Bölüm 1–5)', 'Çakışma Nerede? (Bölüm 6–10)', 'Hiyerarşiyi Kur (Bölüm 11–15)', 'Şampiyon İstem (Bölüm 16–20)'],
      nasil: 'Her bölümde önce <b>“hangi kural ihlal edilemez?”</b> diye sordurun. Şifre: <b>öncelik8</b>' },
    { ad: 'DNA & Prompt Öncelik Takım Atölyesi', sure: '15 dk', tur: 'Grup · 4 rol · 10 aşama',
      ne: 'DNA eşleşme kuralları üzerinden istemde öncelik hiyerarşisi kurma.',
      sayfalar: ['🧬 DNA Mimarı', '🛡️ Öncelik Hakemi', '📊 Biyoistatistikçi', '🔬 Mutasyon Dedektifi'],
      nasil: '<b>Öncelik Hakemi</b> her aşamada “bu kural zorunlu mu, ikincil mi?” diye karar versin. Şifre: <b>dna8</b>' },
    { ad: 'Görsel Rehber & Şampiyon İstem Vitrini', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'DNA çift sarmalından prompt kural hiyerarşisine uzanan vitrin.',
      sayfalar: ['1. Ders Tanıtımı & Video', '2. Biyolojik Temel (çift sarmal, nükleotid)', '3. Genetik Hiyerarşi', '4. Hücresel Süreç', '5. Prompt Mimarisi', '6. Hatalı Prompt Analizi', '7. Şampiyon İstem', '8. Kavram Ayrımı', '9. Ders Özeti & Şifre'],
      nasil: '3. sayfadaki genetik hiyerarşi ile 5. sayfadaki prompt hiyerarşisini <b>aynı mantık</b> olarak eşleştirin. Şifre: <b>genetik8</b>' }
  ],

  3: [
    { ad: 'Örnek Vererek Çıktıyı Yönlendirme Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm / 4 kademe',
      ne: 'Rastgele istem ile few-shot şablonlu istemi ayırma.',
      sayfalar: ['Basınç & Örnek Tanı (1–5)', 'Hatalı Örnek Nerede? (6–10)', 'Few-Shot Şablonu Kur (11–15)', 'Şampiyon Şablon (16–20)'],
      nasil: 'Şablonun alanlarını tahtaya sabitleyin; her bölümde <b>hangi alanın eksik olduğunu</b> söyletin. Şifre: <b>örnek8</b>' },
    { ad: 'Basınç & Few-Shot Takım Atölyesi', sure: '15 dk', tur: 'Grup · 4 rol · 10 aşama',
      ne: 'Katı, sıvı ve gaz basıncını aynı şablonla çözdürme.',
      sayfalar: ['🧱 Katı Basıncı Mühendisi', '💧 Sıvı & Pascal Uzmanı', '🎈 Gaz & Torricelli Analisti', '🧩 Few-Shot Şablon Mimarı'],
      nasil: '<b>Şablon Mimarı</b> ortak kalıbı kurar, diğer üç rol aynı kalıbı kendi konusuna uygular. Şifre: <b>basınç8</b>' },
    { ad: 'Görsel Rehber & Few-Shot İstem Vitrini', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Üç basınç ailesinin formülleri ve few-shot istem örnekleri.',
      sayfalar: ['1. Ders Tanıtımı & Video', '2. Fizik Temeli (P = F / S)', '3. Hidrostatik Fizik', '4. Hidrolik Mühendislik', '5. Atmosferik Fizik', '6. Hatalı Prompt Analizi', '7. Şampiyon İstem', '8. Günlük Yaşam & Teknoloji', '9. Ders Özeti & Şifre'],
      nasil: 'Her kartta <b>birim satırını</b> parmakla gösterttirin; birimi eksik çıktıyı geçersiz saydırın. Şifre: <b>şablon8</b>' }
  ],

  4: [
    { ad: 'Çıktı Değerlendirme Ölçütü Yazma Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm / 4 kademe',
      ne: 'Ölçülebilir rubrik yazma ve hatalı ölçütü yakalama.',
      sayfalar: ['Tablo & Rubrik Tanı (1–5)', 'Hatalı Ölçüt Nerede? (6–10)', 'Puanlama Rubriği Kur (11–15)', 'Şampiyon Rubrik (16–20)'],
      nasil: '“Güzel, doğru, iyi” gibi belirsiz sözcük gördükçe sınıfa <b>“bu ölçülebilir mi?”</b> diye sordurun. Şifre: <b>rubrik8</b>' },
    { ad: 'Periyodik Sistem & Rubrik Takım Atölyesi', sure: '15 dk', tur: 'Grup · 4 rol · 10 aşama',
      ne: 'Periyodik sistem çıktısını takımca rubrikle denetleme.',
      sayfalar: ['⚛️ Element Sınıflandırıcısı', '📋 Rubrik Hakemi', '🔍 Periyot & Katman Analisti', '🧪 İstisna & Soygaz Dedektifi'],
      nasil: '<b>İstisna Dedektifi</b> rubriğe “istisnalar belirtildi mi?” maddesini eklesin. Şifre: <b>ölçüt8</b>' },
    { ad: 'Görsel Rehber & Rubrik İstem Vitrini', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Periyodik sistem bilgisi ve AI öz-denetim (LLM-as-a-Judge) örnekleri.',
      sayfalar: ['1. Ders Tanıtımı & Video', '2. Kimyasal Temel (7 periyot / 8 grup)', '3. Element Sınıfları', '4. Katman ve Değerlik', '5. Kritik LGS İstisnaları', '6. Hatalı Prompt Analizi', '7. Şampiyon İstem', '8. Denetim Raporu', '9. Ders Özeti & Şifre'],
      nasil: '8. sayfadaki <b>Denetim Raporu</b>nu tahtada birlikte okuyun: model kendi işini nasıl puanlamış? Şifre: <b>kalite8</b>' }
  ],

  5: [
    { ad: 'Araştırma Sorusu Oluşturma Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm / 4 kademe',
      ne: 'Genel soruyu odaklı araştırma sorusuna dönüştürme.',
      sayfalar: ['Genel vs Odaklı Soru (1–5)', 'Hatalı Soru Nerede? (6–10)', '5N1K & Hipotez Kur (11–15)', 'Şampiyon Soru (16–20)'],
      nasil: 'Her bölümde <b>5N1K’dan hangisinin eksik olduğunu</b> söyletin. Şifre: <b>soru8</b>' },
    { ad: 'Bir Kahraman Doğuyor & Derin Araştırma Takım Atölyesi', sure: '15 dk', tur: 'Grup · 4 rol · 10 aşama',
      ne: 'Selanik ve Millî Mücadele bağlamında takımca odaklı soru ve hipotez kurma.',
      sayfalar: ['📜 Tarih Araştırmacısı', '🎯 Hipotez Mimarı', '🔍 5N1K Dedektifi', '🏛️ Liderlik Analisti'],
      nasil: '<b>Hipotez Mimarı</b> her aşamada “bu hipotez yanlışlanabilir mi?” sorusunu sorsun. Şifre: <b>hipotez8</b>' },
    { ad: 'Görsel Rehber & Araştırma İstem Vitrini', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Coğrafi bağlamdan kişilik özelliklerine uzanan araştırma vitrini.',
      sayfalar: ['1. Ders Tanıtımı & Video', '2. Coğrafi & Kültürel Bağlam (Selanik)', '3. Eğitim Kronolojisi', '4. Fikir Dünyası', '5. Askerî Başarılar', '6. Hatalı Prompt Analizi', '7. Şampiyon İstem', '8. Kişilik Özellikleri', '9. Ders Özeti & Şifre'],
      nasil: 'Her sayfada <b>“buradan hangi araştırma sorusu çıkar?”</b> diye yazdırın. Şifre: <b>lider8</b>' }
  ],

  6: [
    { ad: 'İddia, Kanıt ve Açıklamayı Ayırma Labı', sure: '15–20 dk', tur: 'Bireysel · 20 bölüm / 4 kademe',
      ne: 'Bir metni CER (İddia–Kanıt–Açıklama) olarak parçalama.',
      sayfalar: ['Asit-Baz & CER’i Tanı (1–5)', 'Hatalı Kanıt Nerede? (6–10)', 'CER Şablonunu Kur (11–15)', 'Şampiyon Argüman (16–20)'],
      nasil: 'Her cümlede önce <b>“kanıtı ne?”</b> diye sordurun, sonra seçtirin. Şifre: <b>iddia8</b>' },
    { ad: 'Asit-Baz & CER Takım Atölyesi', sure: '15 dk', tur: 'Grup · 4 rol · 10 aşama',
      ne: 'Ayıraç sonuçlarını kanıt olarak kullanıp takımca argüman kurma.',
      sayfalar: ['🧪 İddia Savunucusu', '🔍 Kanıt Dedektifi', '⚖️ Bilimsel Hakem', '🌈 pH & Ayıraç Uzmanı'],
      nasil: '<b>Bilimsel Hakem</b> kanıtın iddiayı gerçekten desteklediğini denetlesin; desteklemiyorsa aşama geçilmesin. Şifre: <b>kanıt8</b>' },
    { ad: 'Görsel Rehber & CER İstem Vitrini', sure: '10 dk', tur: 'Kapanış · 9 sayfa',
      ne: 'Asit-baz kimyasından CER argümantasyonuna uzanan vitrin.',
      sayfalar: ['1. Ders Tanıtımı & Video', '2. Kimyasal Temel (asitler, H⁺)', '3. Bazlar ve pH Ölçeği', '4. Belirteç Tablosu', '5. Kimyasal Tepkime', '6. Hatalı Prompt Analizi', '7. Şampiyon İstem', '8. Çevresel Etki', '9. Ders Özeti & Şifre'],
      nasil: '4. sayfadaki belirteç tablosunu <b>kanıt kaynağı</b> olarak kullandırın. Şifre: <b>asitbaz8</b>' }
  ],

  7: [
    { ad: 'AI Kaynak Laboratuvarı', sure: '15 dk', tur: 'Bireysel · 7 bölüm',
      ne: '“Yapay zekâ böyle söyledi” cümlesinin neden kanıt olmadığını ve Kaynak 5 ölçütünü kavrama.',
      sayfalar: ['1. Başlangıç & ısınma sorusu', '2. Yöntem: Bir kaynağa beş soru sor (Kim · Kanıt · Güncel · Amaç · Teyit)', '3–6. Kaynak vakaları ve uygulama', '7. Kapanış ve şifre'],
      nasil: 'Isınma sorusunu <b>oylatın</b>, sonra doğru cevabı birlikte gerekçelendirin. Bu ders 1–6’dan farklı, yeni formattadır. Şifre: <b>kaynak8</b>' },
    { ad: 'Takım Kaynak Görevleri', sure: '15 dk', tur: 'Grup · 8 görev',
      ne: 'Kaynakları en güçlüden en zayıfa sıralayıp gerekçe yazma.',
      sayfalar: ['1 · Okuyun (vakadaki iddia ve kaynak ayrıntıları)', '2 · Tartışın (Kim, Kanıt, Güncellik, Amaç, Teyit)', '3 · Yazın (sıralama + gerekçe)'],
      nasil: 'Örnek vaka: üretici reklamı · yazarsız blog · yöntemi açık 2025 üniversite araştırması. <b>“Güncel olmak neden tek başına yetmez?”</b> sorusunu mutlaka tartıştırın. Şifre: <b>doğrulama8</b>' },
    { ad: 'AI Kaynak ve Prompt Vitrini', sure: '10 dk', tur: 'Kapanış · 9 ekran',
      ne: 'Kaynak 5 ölçütü ve kopyalanabilir doğrulama promptları.',
      sayfalar: ['1 · Dersin özü: AI yanıtını değil, kanıtı izle', '2 · Kaynak 5 (Kim · Kanıt · Güncel · Amaç · Teyit)', '3–8 · Kaynak vakaları ve prompt örnekleri', '9 · Özet ve şifre'],
      nasil: 'Kaynak 5 ekranını panoya asılacak şekilde yazdırın (🖨️). Şifre: <b>güvenlik8</b>' }
  ],

  8: [
    { ad: 'Karar Laboratuvarı', sure: '15 dk', tur: 'Bireysel · 7 ekran',
      ne: 'Benchmark ölçütlerini tanıma: göreve uyum, doğruluk, gerekçe, belirsizlik.',
      sayfalar: ['1 · Benchmark nedir? (aynı görev, ortak ölçüt, kanıtlı karar)', '2–6 · Ölçüt ölçüt karar alıştırmaları', '7 · Kapanış ve şifre'],
      nasil: 'Her ekranda <b>tek bir ölçüte</b> odaklandırın: “hangi ölçütte kazandı?” Şifre: <b>kıyasla8</b>' },
    { ad: 'Model Dedektifleri', sure: '15 dk', tur: 'Grup · 8 görev',
      ne: 'Üç model çıktısını (Alpha · Beta · Gamma) aynı matrisle puanlayıp kararı savunma.',
      sayfalar: ['1 · Promptu çöz (koşulları işaretle)', '2 · Kanıt avla (güçlü ve riskli ifadeler)', '3 · Matrise işle (aynı ölçüt)', '4 · Kararı savun (iki kısa kanıt)'],
      nasil: 'Model adları A/B/C olarak <b>gizli</b> tutulsun — kör değerlendirme. Karar iki alıntıyla savunulsun. Şifre: <b>benchmark8</b>' },
    { ad: 'Benchmark Araç Kutusu', sure: '10 dk', tur: 'Kapanış · 8 araç',
      ne: 'Kopyalanabilir benchmark promptları (kör değerlendirme, koşul denetimi, görev çeşitliliği testi…).',
      sayfalar: ['1 · Kör değerlendirme promptu', '2 · Koşul denetimi promptu', '3 · Görev çeşitliliği testi', '4–8 · Diğer denetim promptları'],
      nasil: 'Bu bir vitrin değil <b>araç kutusudur</b>: promptları kopyalatıp sonraki haftalarda kullandırın. Şifre: <b>şampiyonmodel8</b>' }
  ],

  9: [
    { ad: 'Soru Merdiveni', sure: '15 dk', tur: 'Bireysel · 8 ekran',
      ne: 'Sokratik koçun dört ilkesi ve Yön → Kural → İlk adım ipucu merdiveni.',
      sayfalar: ['1 · Koç modu: cevabı değil, düşünme yolunu görünür yap', '2 · Dört ilke (ön bilgiyi sor, tek soru sor, bekle, uyarla)', '3 · İpucu merdiveni (Yön → Kural → İlk adım)', '4 · Konuşma akışı (Dinle → Teşhis et → Sor → Bekle → Uyarla)', '5–8 · Üslü sayı yanılgılarında uygulama'],
      nasil: 'Her ekranda <b>“bu ipucu cevabı söylüyor mu?”</b> diye sordurun. Şifre: <b>sokratik8</b>' },
    { ad: 'İpucu Zinciri', sure: '15 dk', tur: 'Grup · 8 görev',
      ne: 'AI’nın zayıf cevabını sonucu söylemeyen tek bir sokratik soruya çevirme.',
      sayfalar: ['1 · Dinle (öğrenci ne düşünüyor?)', '2 · Teşhis et (hata veya eksik nerede?)', '3 · Sor (tek düşündürücü soru)', '4 · Bekle (yeni yanıt gelmeden ilerleme)'],
      nasil: 'Teslim: <b>bir sokratik soru + bir bekleme kuralı.</b> Sonucu söyleyen soru kabul edilmesin. Şifre: <b>üslüsayı8</b>' },
    { ad: 'Koç Prompt Vitrini', sure: '10 dk', tur: 'Kapanış · 4 ekran',
      ne: 'Kopyalanabilir koç promptları: matematik koçu, yanılgı teşhis koçu, hobi koçu.',
      sayfalar: ['1 · Ders ve hata teşhisi koçları', '2 · Hobi ve teknoloji koçları', '3 · Bekleme ve uyarlama kuralları', '4 · Özet ve şifre'],
      nasil: 'Öğrenciler bir koç promptunu <b>kendi zayıf konusuna</b> uyarlayıp deftere yazsın. Şifre: <b>ipucu8</b>' }
  ],

  10: [
    { ad: 'Yazı Asistanı Laboratuvarı', sure: '15 dk', tur: 'Bireysel · içerik hazırlanıyor',
      ne: 'Ölçütlü geri bildirim isteme (içerik hazırlanmaktadır).',
      nasil: 'Etkinlik yayına girene kadar: herkes 6–8 cümlelik paragrafını <b>yapay zekâsız</b> yazsın.' },
    { ad: 'Geri Bildirim Atölyesi', sure: '15 dk', tur: 'Grup · içerik hazırlanıyor',
      ne: 'Üç ölçütle geri bildirim alma (içerik hazırlanmaktadır).',
      nasil: 'Ölçütler: ana fikir açık mı · destekleyici cümleler bağlı mı · gereksiz cümle var mı. Model <b>düzeltmesin, söylesin.</b>' },
    { ad: 'Metin Geliştirme Görsel Rehberi', sure: '10 dk', tur: 'Kapanış · içerik hazırlanıyor',
      ne: 'İlk ve son hâlin karşılaştırılması (içerik hazırlanmaktadır).',
      nasil: 'Düzeltmeyi öğrenci yapsın; hangi geri bildirimi neden reddettiğini yazsın.' }
  ]
};

for (var _d in AI_ETKINLIK) {
  if (AI_DERSLER[_d]) AI_DERSLER[_d].adimlar = AI_ETKINLIK[_d];
}

/* =========================================================================
   EKRAN KULLANIMI — öğrenci ekranda ne yapacak, hangi sırayla?
   (8. sınıfta sesli okuma ve köprü butonu yoktur.)
   ========================================================================= */

var AI_GENEL_EKRAN = [
  { b: '🧪 Bireysel lab · iki farklı format', m: '<b>Ders 1–6:</b> 20 bölüm, dört kademe hâlinde zorlaşır. <b>Ders 7–9:</b> 7–8 ekranlık akış. Hangi derste olduğunuzu önce kontrol edin.' },
  { b: '👥 Takım atölyesi · iki farklı format', m: '<b>Ders 1–6:</b> dört rol seçilir, 10 aşama oynanır. <b>Ders 7–9:</b> 8 görevlik takım akışı; rol seçimi yoktur.' },
  { b: '📋 Kopyala düğmeleri', m: 'Vitrin sayfalarındaki promptlar <b>kopyalanabilir</b>. Kopyalanan istem deftere de yazdırılsın.' },
  { b: '🗣️ Gerekçe zorunlu', m: '8. sınıfın ayırt edici kuralı: her karar <b>en az bir kanıtla</b> savunulur. “Bence” tek başına kabul edilmez.' },
  { b: '❓ Mor “?” Cevapla düğmesi', m: 'Adım sonlarında köprü linki yoktur. Başarı şifresi menüdeki mor <b>?</b> → ✏️ <b>Cevapla</b> düğmesine girilir.' },
  { b: '📊 İlerleme göstergesi', m: '20 bölümün tamamı zorunlu değildir; <b>sınıf süresine göre 10–12 bölüm</b> yeterlidir.' }
];

var AI_EKRAN = {

  1: [
    { b: '1️⃣ Dört kademeyi gösterin', m: 'Lab üstünde <b>Görevi Tanı · Hata Nerede? · Alt Adımları Kur · Şampiyon İstem</b> yazar; sınıfa nerede olduklarını gösterin.' },
    { b: '2️⃣ İstem analizini okutun', m: 'Ekrandaki istemi öğrenci okur, türünü seçer. Yanlışta “neden böyle düşündün?” diye sordurun.' },
    { b: '3️⃣ Takımda rol dağıtın', m: '🛰️ Mevsim Simülatörü · 🧩 İstem Mühendisi · 📊 İklim Analisti · 🛡️ Kalite Hakemi.' },
    { b: '4️⃣ 10 aşamayı sırayla geçin', m: 'Her aşamada Kalite Hakemi eksik adımı işaretlesin; aşama ancak onaylanınca geçilsin.' }
  ],

  2: [
    { b: '1️⃣ Çakışmayı gösterin', m: 'Ekranda birbiriyle çelişen iki kural vardır; sınıf hangisinin zorunlu olduğunu söylesin.' },
    { b: '2️⃣ Hiyerarşiyi kurdurun', m: '11–15. bölümlerde öğrenci kuralları kendi sıralar. 🔴 zorunlu, 🟡 ikincil.' },
    { b: '3️⃣ Takımda rol dağıtın', m: '🧬 DNA Mimarı · 🛡️ Öncelik Hakemi · 📊 Biyoistatistikçi · 🔬 Mutasyon Dedektifi.' },
    { b: '4️⃣ Hakem karar versin', m: 'Öncelik Hakemi her aşamada “zorunlu mu, ikincil mi?” diye onaylasın.' }
  ],

  3: [
    { b: '1️⃣ Çözülmüş örneği okutun', m: 'Ekrandaki few-shot örneğinin alanlarını (verilen · formül · birim · sonuç) saydırın.' },
    { b: '2️⃣ Eksik alanı buldurun', m: '6–10. bölümlerde hatalı örnek vardır; hangi alanın yanlış olduğunu söyletin.' },
    { b: '3️⃣ Takımda rol dağıtın', m: '🧱 Katı · 💧 Sıvı & Pascal · 🎈 Gaz & Torricelli · 🧩 Şablon Mimarı.' },
    { b: '4️⃣ Aynı şablon, üç konu', m: 'Şablon Mimarı kalıbı kurar; üç uzman aynı kalıbı kendi konusuna uygular.' }
  ],

  4: [
    { b: '1️⃣ Rubriği ölçülebilir yapın', m: 'Ekrandaki belirsiz ölçütü sınıf birlikte ölçülebilir hâle getirsin.' },
    { b: '2️⃣ Hatalı ölçütü yakalatın', m: '6–10. bölümlerde ölçüt bozuktur; “bu iki kişi aynı puanı verir mi?” diye sordurun.' },
    { b: '3️⃣ Takımda rol dağıtın', m: '⚛️ Element Sınıflandırıcısı · 📋 Rubrik Hakemi · 🔍 Periyot Analisti · 🧪 İstisna Dedektifi.' },
    { b: '4️⃣ Denetim raporunu okutun', m: 'Vitrinin 8. sayfasında modelin <b>kendi çıktısını puanladığı</b> rapor vardır; tahtada birlikte inceleyin.' }
  ],

  5: [
    { b: '1️⃣ Genel/odaklı ayrımını yaptırın', m: '1–5. bölümlerde iki soru yan yanadır; sınıf odaklı olanı seçsin.' },
    { b: '2️⃣ 5N1K’yı işaretletin', m: '11–15. bölümlerde eksik olan soru sözcüğünü buldurun.' },
    { b: '3️⃣ Takımda rol dağıtın', m: '📜 Tarih Araştırmacısı · 🎯 Hipotez Mimarı · 🔍 5N1K Dedektifi · 🏛️ Liderlik Analisti.' },
    { b: '4️⃣ Hipotezi yanlışlatın', m: 'Hipotez Mimarı “bu hipotez nasıl yanlış çıkabilir?” sorusunu her aşamada sorsun.' }
  ],

  6: [
    { b: '1️⃣ Üç kutuyu tanıtın', m: 'Ekranda cümle İDDİA · KANIT · AÇIKLAMA olarak parçalanır; tahtadaki kutularla eşleştirin.' },
    { b: '2️⃣ Hatalı kanıtı buldurun', m: '6–10. bölümlerde kanıt iddiayı desteklemez; sınıf farkı bulsun.' },
    { b: '3️⃣ Takımda rol dağıtın', m: '🧪 İddia Savunucusu · 🔍 Kanıt Dedektifi · ⚖️ Bilimsel Hakem · 🌈 pH & Ayıraç Uzmanı.' },
    { b: '4️⃣ Hakem onaylamadan geçmeyin', m: 'Bilimsel Hakem kanıtı yetersiz bulursa aşama tekrar edilsin.' }
  ],

  7: [
    { b: '1️⃣ Isınma sorusunu oylatın', m: '<b>“Yapay zekâ böyle söyledi” kanıt sayılır mı?</b> Önce oylatın, sonra gerekçelendirin.' },
    { b: '2️⃣ Kaynak 5’i uygulatın', m: 'Kim · Kanıt · Güncel · Amaç · Teyit. Her vakada beşini tek tek işaretletin.' },
    { b: '3️⃣ Takımda sıralatın', m: 'Grup üç kaynağı en güçlüden en zayıfa dizsin; <b>her biri için gerekçe</b> yazsın.' },
    { b: '4️⃣ Güncellik tuzağını konuşun', m: '“Güncel olmak neden tek başına yeterli değildir?” sorusunu mutlaka tartıştırın.' }
  ],

  8: [
    { b: '1️⃣ Dört ölçütü tanıtın', m: 'Göreve uyum · Doğruluk · Gerekçe · Belirsizlik. Laboratuvarın 1. ekranındadır.' },
    { b: '2️⃣ Model adlarını gizleyin', m: 'Alpha/Beta/Gamma yerine A/B/C deyin — <b>kör değerlendirme</b>.' },
    { b: '3️⃣ Matrise işletin', m: 'Grup her modeli aynı ölçütle puanlar; puanın yanına cevaptan alıntı yazdırın.' },
    { b: '4️⃣ Kararı iki kanıtla savundurun', m: '“Beta’yı seçtik çünkü … ve …” kalıbını dayatın.' }
  ],

  9: [
    { b: '1️⃣ Koç modunu tanıtın', m: 'Cevabı değil düşünme yolunu görünür yapmak. Dört ilkeyi 2. ekrandan okutun.' },
    { b: '2️⃣ Merdiveni gösterin', m: 'Yön → Kural → İlk adım. Her basamaktan sonra <b>bekleme</b> zorunludur.' },
    { b: '3️⃣ Zayıf cevabı soruya çevirtin', m: 'Grup, sonucu söylemeyen tek bir soru yazar.' },
    { b: '4️⃣ Bekleme kuralını yazdırın', m: 'Teslim iki parçadır: bir sokratik soru <b>ve</b> bir bekleme kuralı.' }
  ],

  10: [
    { b: 'ℹ️ İçerik hazırlanıyor', m: 'Bu dersin üç etkinliği kaynak projede <b>henüz yayınlanmadı</b>. Hafta boş kalmasın diye aşağıdaki akışı uygulayın.' },
    { b: '1️⃣ Paragrafı yapay zekâsız yazdırın', m: '6–8 cümlelik ilk taslak öğrencinin kendi kalemiyle yazılsın.' },
    { b: '2️⃣ Üç ölçütle geri bildirim aldırın', m: 'Ana fikir · destekleyici cümleler · gereksiz cümle. Model düzeltmesin, söylesin.' },
    { b: '3️⃣ Düzeltmeyi öğrenci yapsın', m: 'Reddedilen geri bildirimin gerekçesi de yazılsın.' }
  ]
};

for (var _e in AI_EKRAN) {
  if (AI_DERSLER[_e]) AI_DERSLER[_e].ekran = AI_EKRAN[_e];
}
