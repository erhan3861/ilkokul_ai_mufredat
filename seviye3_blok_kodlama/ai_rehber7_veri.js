/* =========================================================================
   AI-GALAXY • ORTAOKUL 7 (7. SINIF) • ÖĞRETMEN REHBERİ
   Kaynak: ortaokul7/mufredat.md, ders_linkleri_ve_sifreleri.md,
   dersN_ozet.md ve dersN_M.html gerçek başlıkları.
   ========================================================================= */

var DERS_HAM = {
  1: {
    ad: "Güneş Sistemi ve Açık İstem Yazmak", emoji: "🪐",
    konu: "Görev Parçalama & Açık İstem Mimarisi",
    oz: "Güneş Sistemi araştırmasını <b>açık görev, veri alanı ve sıralı teslimlere</b> ayırmak belirsiz istemi uygulanabilir plana dönüştürür.",
    fayda: ["Uzay araştırması gibi büyük bir konu, küçük ve doğrulanabilir görevlere ayrılır.", "İleri blok kodlamadaki algoritma sırası ile istemdeki görev sırası birlikte düşünülür."],
    kazanim: ["Belirsiz ve açık istemi ayırt eder.", "Görevi alt teslimlere böler.", "İstenen çıktı biçimini ve başarı ölçütünü yazar."],
    akis: ["“Güneş Sistemi hakkında bir şey yap” cümlesindeki belirsizlikleri sınıfa buldurun.", "Konu · Görev · Veri · Çıktı · Ölçüt alanlarını örnek istemde işaretleyin.", "Açık İstem Labı → Takım Atölyesi → Görsel Rehber Vitrini sırasını uygulayın.", "Takımlar istemlerinin hangi cümlesinin ölçülebilir olduğunu gerekçelendirsin."],
    ornek: ["Güneş Sistemi anlat.", "Gezegenleri uzaklığa göre tablo yap; her satırda ad, tür ve bir doğrulanabilir özellik olsun.", "Görev, alanlar ve çıktı biçimi açıklandı."],
    sorular: ["İstenen görev tam olarak ne?", "Çıktıda hangi alanlar olmalı?", "Hangi adım önce gelmeli?", "Sonuç nasıl kontrol edilir?"],
    ipucu: "Öğrenci gerçek uzay verisini güvenilir kaynakla doğrulasın.",
    adim: [["Güneş Sistemi & Açık İstem Yazma Labı","Bireysel laboratuvar","uzayajanı7"],["Güneş Sistemi & Açık İstem Takım Atölyesi","Grup atölyesi","güneşsistemi7"],["Açık İstem Mimarisi Görsel Rehber Vitrini","Görsel rehber","otonomuzay7"]]
  },
  2: {
    ad: "Hücre Bölünmesi ve Komut Öncelik Kuralları", emoji: "🧬",
    konu: "Instruction Hierarchy, Mitoz & Oran-Orantı",
    oz: "Bir istemde <b>zorunlu bilimsel doğruluk, çıktı kuralı ve tercih edilen stil</b> doğru öncelik sırasına konmalıdır.",
    fayda: ["Çelişen komutlarda hangi kuralın korunacağı belirlenir.", "Mitoz sırası ve oran-orantı gibi değişmez kurallar görsel tercihlerden ayrılır."],
    kazanim: ["Kuralları öncelik düzeylerine ayırır.", "Çelişen komutu fark eder.", "Bilimsel doğruluğu en üst önceliğe yerleştirir."],
    akis: ["Mitoz evrelerini karışık sırada verin ve hangi kuralın değişemeyeceğini sorun.", "Zorunlu → çıktı düzeni → stil tercihi → kaçınılanlar sırasını modelleyin.", "Komut Öncelik Labı → Komut Sırası Atölyesi → Görsel Vitrin sırasını izleyin.", "Her takım en üst kuralını ve bir çelişkiyi açıklasın."],
    ornek: ["Mitozu neon ve istediğin sırada çiz.", "ZORUNLU: evreler bilimsel sırada. ÇIKTI: dört panelli şema. TERCİH: neon mavi başlık.", "Bilimsel sıra stil tercihinin önüne geçti."],
    sorular: ["Hangi kural değişemez?", "İki komut nerede çelişiyor?", "Stil hangi sırada olmalı?", "Kaçınılanlar neden somut yazılmalı?"],
    ipucu: "Bilimsel kuralı ders kitabıyla kontrol ettirin.",
    adim: [["Hücre Bölünmesi & Komut Öncelik Kuralları Labı","Bireysel laboratuvar","mitoz7"],["Hücre Bölünmesi & Komut Sırası Takım Atölyesi","Grup atölyesi","hücre7"],["Hücre Bölünmesi Görsel Rehber Vitrini","Görsel rehber","kuralhiyerarşisi7"]]
  },
  3: {
    ad: "Kuvvet, İş ve Şablon Yapılı Çıktılar", emoji: "⚡",
    konu: "Örnekli İstem & Enerji Dönüşümü",
    oz: "İki doğru örnek ve sabit alanlardan oluşan şablon, yeni enerji örneğini <b>aynı yapıda ve karşılaştırılabilir</b> üretir.",
    fayda: ["Kinetik ve potansiyel enerji örnekleri ortak veri alanlarıyla karşılaştırılır.", "Örnek gösterme, uzun ve düzensiz yanıt yerine tutarlı çıktı sağlar."],
    kazanim: ["Örneklerdeki ortak şablonu çıkarır.", "Eksik alanı bulur.", "Yeni örneği aynı alan düzeninde üretir."],
    akis: ["Kaykay rampası ve yay için iki enerji kartı gösterin; ortak alanları buldurun.", "Durum · Enerji Türü · Değişim · Gerekçe şablonunu tahtaya sabitleyin.", "Şablon Labı → Takım Atölyesi → Görsel Vitrin sırasını uygulayın.", "Takımlar üçüncü kartın örneklerle biçim ve bilim açısından tutarlılığını kontrol etsin."],
    ornek: ["Kinetik enerjiyi anlat.", "İki örnekteki Durum/Enerji Türü/Değişim/Gerekçe alanlarını koruyarak üçüncü kartı yaz.", "Örnekler çıktı yapısını yönlendirdi."],
    sorular: ["Ortak alanlar hangileri?", "Hangi alan eksik?", "Örnek doğru mu?", "Yeni çıktı aynı sırayı koruyor mu?"],
    ipucu: "Hatalı örneğin hatayı çoğaltacağını özellikle gösterin.",
    adim: [["Kuvvet, İş ve Şablon Yapılı Çıktılar Labı","Bireysel laboratuvar","enerji7"],["Kuvvet, İş ve Şablonlu İstem Takım Atölyesi","Grup atölyesi","kuvvet7"],["Kuvvet, İş ve Şablon Yapılı İstemler Görsel Rehber Vitrini","Görsel rehber","şablonluistem7"]]
  },
  4: {
    ad: "Uzay Üssü Performans Testi ve Rubrik Matrisi", emoji: "📊",
    konu: "Çıktı Ölçütü & Kalite Kontrolü",
    oz: "Yapay zekâ çıktısı beğeniyle değil, <b>önceden yazılmış ölçüt ve görünür kanıtla</b> değerlendirilir.",
    fayda: ["Rubrik, “güzel” gibi öznel yorumları ölçülebilir kalite kontrolüne dönüştürür.", "Eksik ölçüt, doğrudan bir revizyon komutuna çevrilir."],
    kazanim: ["Ölçüt ve puan düzeyi yazar.", "Puanı kanıtla gerekçelendirir.", "En düşük ölçüte göre çıktıyı revize eder."],
    akis: ["Aynı uzay üssüne verilmiş gerekçeli ve gerekçesiz iki puanı karşılaştırın.", "Doğruluk · düzen · uygulanabilirlik · güvenlik ölçütlerini modelleyin.", "Rubrik Labı → Takım Atölyesi → Görsel Rehber sırasını uygulayın.", "Takımlar en düşük puanı ve onu yükselten tek revizyonu sunsun."],
    ornek: ["Uzay üssü çok güzel, 5 yıldız.", "Güvenlik 2/5: acil çıkış görünmüyor. Revizyon: iki işaretli çıkış ekle.", "Puan kanıt ve düzeltmeyle bağlandı."],
    sorular: ["Puanın kanıtı ne?", "Ölçüt önceden belli miydi?", "En düşük puan hangisi?", "Hangi revizyon tek ölçütü yükseltir?"],
    ipucu: "Gerekçesiz puanı kabul etmeyin.",
    adim: [["Uzay Üssü Performans Testi ve Rubrik Labı","Bireysel laboratuvar","rubrik7"],["Uzay Üssü Rubrik Takım Atölyesi","Grup atölyesi","performans7"],["Uzay Üssü Performans Testi ve Rubrik Görsel Rehber Vitrini","Görsel rehber","uzayussu7"]]
  },
  5: {
    ad: "Zaman İçinde Bilim ve Hipotez Tasarımı", emoji: "⏳",
    konu: "Araştırma Sorusu & Bilim Tarihi",
    oz: "Güçlü araştırma sorusu tanım istemez; <b>değişken, ilişki ve doğrulanabilir kanıt</b> içerir.",
    fayda: ["Bilim tarihindeki gelişmeler neden-sonuç ve kanıt ilişkisiyle incelenir.", "Varsayım, tarihsel gerçek ve tahmin birbirinden ayrılır."],
    kazanim: ["Sınanabilir soru yazar.", "Değişkenleri belirler.", "Hipotezi kanıt ihtiyacıyla ilişkilendirir."],
    akis: ["“Teleskop nedir?” ile “Teleskop gelişimi keşif sayısını nasıl etkiledi?” sorularını karşılaştırın.", "Değişken · beklenen ilişki · kanıt alanlarını modelleyin.", "Hipotez Labı → Zaman Makinesi Takım Oyunu → Görsel Vitrin sırasını uygulayın.", "Takımlar sorularındaki değişkeni ve gerekli kanıtı söylesin."],
    ornek: ["Bilim insanlarını anlat.", "Teleskop çözünürlüğü artsaydı 17. yüzyıldaki gezegen gözlemleri nasıl değişirdi? İki kanıt türü belirt.", "Tanım yerine sınanabilir ilişki kuruldu."],
    sorular: ["Hangi değişken değişiyor?", "Bu gerçek mi varsayım mı?", "Hangi veri gerekir?", "Karşıt sonuç mümkün mü?"],
    ipucu: "Tarihsel varsayımı gerçek bilgi gibi sunmayın.",
    adim: [["Zaman İçinde Bilim ve Hipotez Labı","Bireysel laboratuvar","bilim7"],["Zaman Makinesi Hipotez Takım Oyunu","Grup oyunu","hipotez7"],["Zaman İçinde Bilim ve Hipotez Görsel Rehber Vitrini","Görsel rehber","keşif7"]]
  },
  6: {
    ad: "Karışımlar, Aynalar ve Yanılsama Tespiti", emoji: "🕵️",
    konu: "İddia–Kanıt–Açıklama & Doğrulama",
    oz: "Kendinden emin AI yanıtı kanıt değildir; <b>iddia, kanıt ve açıklama</b> ayrı ayrı sınanmalıdır.",
    fayda: ["Karışımlar ve aynalar konularında yanılsama somut örneklerle yakalanır.", "Öğrenci AI yanıtını bilimsel kaynakla karşılaştırmayı öğrenir."],
    kazanim: ["İddia, kanıt ve açıklamayı ayırır.", "Aşırı kesinlik dilini işaretler.", "Kararı güvenilir kaynakla gerekçelendirir."],
    akis: ["“Her karışım süzme ile ayrılır” iddiasını gösterip kanıt isteyin.", "İddia → Kaynak → Karşılaştırma → Sonuç zincirini tahtaya çizin.", "Yanılsama Labı → Halüsinasyon Avcısı → Doğrulama Vitrini sırasını uygulayın.", "Takımlar iddiayı doğru/eksik/yanlış diye sınıflandırıp kanıtını okusun."],
    ornek: ["AI söylediği için doğrudur.", "İddiayı Fen 7 ders kitabı ve güvenilir bilim kaynağıyla karşılaştır; uyuşmayan kısmı belirt.", "Otorite yerine doğrulama kullanıldı."],
    sorular: ["İddia hangisi?", "Kanıt iddiayı destekliyor mu?", "Hangi kelime aşırı kesin?", "Karşı kaynak ne diyor?"],
    ipucu: "AI yanıtını kaynak değil araştırma başlangıcı olarak konumlandırın.",
    adim: [["Karışımlar, Aynalar ve Yanılsama Labı","Bireysel laboratuvar","karışım7"],["Halüsinasyon Avcısı Takım Oyunu","Grup oyunu","doğrulama7"],["Karışımlar, Aynalar ve Doğrulama Görsel Vitrini","Görsel rehber","ayna7"]]
  },
  7: {
    ad: "İletişim, Medya Etiği ve Dijital Güvenlik", emoji: "🛡️",
    konu: "Kaynak Kalitesi & Medya Okuryazarlığı",
    oz: "Kaynak kalitesi; <b>kurum, kanıt, güncellik, amaç ve kullanım hakkı</b> birlikte incelenerek değerlendirilir.",
    fayda: ["Anonim paylaşım ile güvenilir kaynak arasındaki fark görünür olur.", "Dijital mahremiyet, telif ve medya etiği sınıf kuralına dönüşür."],
    kazanim: ["Kaynak kalitesini ölçütle puanlar.", "Manipülatif medya işaretlerini bulur.", "Kişisel veri ve telif sınırlarını uygular."],
    akis: ["Aynı haberi veren anonim gönderi ile kurumsal kaynağı karşılaştırın.", "Kim yayınladı · kanıt ne · tarih ne · amaç ne kontrolünü modelleyin.", "Doğrulama Labı → Siber Medya Dedektifi → Etik Vitrini sırasını uygulayın.", "Takımlar seçtikleri kaynağı ve bir risk işaretini sunsun."],
    ornek: ["Çok paylaşıldığı için doğru.", "Yayıncı, tarih, birincil kanıt ve bağımsız doğrulama bilgilerini kontrol ettim.", "Popülerlik yerine kaynak ölçütleri kullanıldı."],
    sorular: ["Kaynağın kurumu belli mi?", "Birincil kanıt var mı?", "İçerik ne amaçlıyor?", "Kişisel veri istiyor mu?"],
    ipucu: "Ödül veya korku dili kullanan içeriklerde durma kuralını hatırlatın.",
    adim: [["Yapay Zekâda Bilgi Doğrulama & Halüsinasyon Avı","Bireysel laboratuvar","medya7"],["Siber Medya Dedektifi Takım Oyunu","Grup oyunu","güvenlik7"],["Medya Etiği ve Dijital Güvenlik Görsel Vitrini","Görsel rehber","etik7"]]
  },
  8: {
    ad: "Yapay Zekâ Modellerini Karşılaştırma", emoji: "⚖️",
    konu: "Model Benchmark Arenası",
    oz: "Adil benchmark için modellere <b>aynı görev, aynı çıktı biçimi ve aynı rubrik</b> uygulanır.",
    fayda: ["Tek bir “en iyi model” yerine göreve uygun model seçimi yapılır.", "Hız, doğruluk, kaynak, güvenlik ve biçim ölçütleri ayrı değerlendirilir."],
    kazanim: ["Adil test koşulu kurar.", "Çıktıları ortak rubrikle puanlar.", "Göreve uygun model seçimini gerekçelendirir."],
    akis: ["İki modele farklı soru sormanın neden adil olmadığını tartıştırın.", "Aynı istem · aynı süre · aynı rubrik ilkesini gösterin.", "Benchmark Labı → 10 Adımlı Arena → 2. Ay Finali Vitrini sırasını uygulayın.", "Takımlar kazananı değil, hangi görevde hangi modelin uygun olduğunu sunsun."],
    ornek: ["Model A daha iyi.", "Aynı görevde doğruluk 4/5, kaynak 5/5; araştırma görevi için Model A daha uygun.", "Genel yargı görev ve ölçüte bağlandı."],
    sorular: ["Test koşulları aynı mı?", "Hangi ölçüt daha önemli?", "Puanın kanıtı nerede?", "Sonuç yalnız bu görev için mi geçerli?"],
    ipucu: "Model markasından çok ölçüt ve kanıtı öne çıkarın.",
    adim: [["Model Karşılaştırma ve Benchmark Labı","Bireysel laboratuvar","model7"],["10 Adımlı Model Karşılaştırma Arenası","Grup oyunu","arena7"],["Model Karşılaştırma ve 2. Ay Finali Görsel Vitrini","Görsel rehber","kıyaslama7"]]
  },
  9: {
    ad: "Matematik ve Geometri İpucu Koçu", emoji: "📐",
    konu: "Sokratik Asistan & Doğrular-Açılar",
    oz: "İyi öğrenme asistanı cevabı söylemez; <b>tanılayıcı soru ve kademeli ipucuyla</b> öğrencinin çözümü kurmasını sağlar.",
    fayda: ["Doğrular ve açılar ezber yerine düşünme adımlarıyla çalışılır.", "Öğrenci yardım seviyesini yönetir ve kendi çözümünü açıklar."],
    kazanim: ["“Cevabı verme” kuralı yazar.", "Üç kademeli ipucu tasarlar.", "Açı çözümünü kendi cümlesiyle açıklar."],
    akis: ["Bir açı sorusunu doğrudan çözün; sonra yalnız sorularla sınıfa çözdürün.", "Tanıla → hafif ipucu → yönlendirme → kritik ipucu sırasını gösterin.", "İpucu Labı → Geometri Koçu Takım Oyunu → Görsel Vitrin sırasını uygulayın.", "İkişerli gruplarda koç cevabı söylemeden çözümü buldursun."],
    ornek: ["Cevap 70 derecedir.", "Bu iki açı hangi toplamı oluşturur? Bilinen açıyı toplamdan çıkarırsan ne bulursun?", "Sonuç yerine düşünme yolu verildi."],
    sorular: ["Öğrenci ne biliyor?", "İpucu cevabı ele veriyor mu?", "En küçük sonraki yardım ne?", "Çözümü öğrenci açıklayabiliyor mu?"],
    ipucu: "Her ipucundan sonra düşünme süresi verin.",
    adim: [["Matematik ve Geometri İpucu Labı","Bireysel laboratuvar","ipucu7"],["Geometri ve İpucu Koçu Takım Oyunu","Grup oyunu","geometri7"],["Geometri ve İpucu Koçu Görsel Vitrini","Görsel rehber","açı7"]]
  },
  10: {
    ad: "Geri Bildirim Veren Yazı Asistanı", emoji: "✍️",
    konu: "Türkçe 7 Anlatım Biçimleri & Senaryo",
    oz: "Yapıcı AI editörü metni öğrenci yerine yazmaz; <b>ölçüte dayalı geri bildirim, soru ve sınırlı revizyon önerisi</b> verir.",
    fayda: ["Anlatım biçimleri ve senaryo yapısı somut ölçütlerle değerlendirilir.", "Öğrencinin yazarlığı korunur; AI yalnız geliştirme koçu olur."],
    kazanim: ["Yapıcı geri bildirim ölçütü yazar.", "Eleştiri ile yeniden yazmayı ayırır.", "Metne tek amaçlı revizyon komutu verir."],
    akis: ["“Bu metin kötü” ve kanıtlı geri bildirimi karşılaştırın.", "Güçlü yön · kanıt · geliştirme sorusu · tek öneri yapısını gösterin.", "Kaynak ders ekranları hazırlık durumundadır; rehberdeki sınıf içi yazı koçu akışını kullanın.", "Öğrenciler önce/sonra metninde yalnız bir ölçütün değiştiğini göstersin."],
    ornek: ["Hikâyeyi daha iyi yaz.", "Mekân betimlemesi güçlü. Olayın dönüm noktası hangi cümlede? Bu bölüme tek bir neden-sonuç cümlesi ekle.", "Metni ele geçirmek yerine yazarı yönlendirdi."],
    sorular: ["Geri bildirim hangi ölçüte dayanıyor?", "Kanıt metnin neresinde?", "AI metni yeniden mi yazdı?", "Öneri uygulanabilir mi?"],
    ipucu: "Hazırlık ekranını canlı etkinlik olarak göstermeyin.",
    adim: [["Yazı Asistanı Laboratuvarı","Hazırlık ekranı","senaryo7"],["Geri Bildirim Takım Çalışması","Hazırlık ekranı","hikaye7"],["Yazı Asistanı Görsel Rehberi","Hazırlık ekranı","tiyatro7"]]
  }
};

var AI_GENEL_EKRAN = [
  { b: "1️⃣ Açılış anlatımını inceleyin", m: "Dersin kavram ve ölçütlerini sınıfla birlikte okuyun; ana ölçütü tahtada görünür tutun." },
  { b: "2️⃣ Bireysel seçimi gerekçelendirin", m: "Öğrenci seçimini yaptıktan sonra ekrandaki hangi kanıta dayandığını söyler." },
  { b: "3️⃣ Takım etkinliğini tamamlayın", m: "Rolleri paylaşın; ortak istem, rapor veya değerlendirmeyi birlikte üretin." },
  { b: "4️⃣ Görsel rehberle karşılaştırın", m: "Hazır örnekleri öğrencinin çıktısıyla ölçüt ölçüt karşılaştırın." },
  { b: "5️⃣ Tamamlama şifresini alın", m: "Etkinliğin kendi akışını tamamlayın; şifreyi yalnızca sonuç ekranından sonra kullanın." }
];

var AI_DERSLER = {};
var AI_ETKINLIK = {};
for (var no in DERS_HAM) {
  var h = DERS_HAM[no];
  var etkinlikler = h.adim.map(function (a, i) {
    return {
      ad: a[0], sure: i === 0 ? "15–20 dk" : (i === 1 ? "15 dk" : "10 dk"), tur: a[1],
      ne: i === 0 ? "Kavramı bireysel bölümlerde uygular ve seçimini gerekçelendirir." :
          (i === 1 ? "Takımca ortak ürün veya değerlendirme oluşturur." : "Gerçek örnekleri dersin ölçütleriyle karşılaştırır."),
      sayfalar: i === 0 ? ["Açılış anlatımı", "Bireysel uygulama bölümleri", "Tamamlama ve başarı şifresi"] :
                (i === 1 ? ["Takım görevi", "Ortak üretim ve kontrol", "Sunum ve başarı şifresi"] :
                 ["Kavram formülü", "Derse ait örnek kartlar", "Karşılaştırma ve kapanış"]),
      nasil: (i === 0 ? "Anlatımı birlikte inceleyin; her seçimden sonra gerekçe isteyin." :
              (i === 1 ? "Rolleri dağıtın; ortak karar ve temsilci sunumu yaptırın." :
               "Kartları sırayla gösterin; her örneği ana ölçütle karşılaştırın.")) + " Başarı şifresi: <b>" + a[2] + "</b>"
    };
  });
  AI_ETKINLIK[no] = etkinlikler;
  AI_DERSLER[no] = {
    ad: h.ad, emoji: h.emoji, konu: h.konu, tekCumle: h.oz,
    neden: h.fayda.concat(["Bu beceri Seviye 3 blok kodlamadaki problem çözme ve hata ayıklama alışkanlığıyla birlikte ilerler."]),
    kazanim: h.kazanim,
    nasil: [
      { b: "1️⃣ Isınma ve ön bilgiyi yoklama (5 dk)", m: h.akis[0] },
      { b: "2️⃣ Kavramı modelleme (8 dk)", m: h.akis[1] },
      { b: "3️⃣ Gerçek etkinlikleri uygulama (25 dk)", m: h.akis[2] },
      { b: "4️⃣ Gerekçeli kapanış (5 dk)", m: h.akis[3] }
    ],
    ornekler: [
      { kotu: h.ornek[0], iyi: h.ornek[1], not: h.ornek[2] },
      { kotu: "Sonucu hemen ver.", iyi: "Önce ölçütleri uygula; eksik kısmı kanıtla göster ve yalnız bir geliştirme önerisi sun.", not: "Cevap yerine değerlendirme süreci istendi." },
      { kotu: "Bu kesin doğrudur.", iyi: "İddiayı güvenilir kaynakla karşılaştır; doğrulanan ve belirsiz kalan kısmı ayrı yaz.", not: "Kesinlik yerine kanıt ve belirsizlik kullanıldı." }
    ],
    sorular: h.sorular,
    ipuclari: [h.ipucu, "Öğrenciden seçim veya puanın yanında mutlaka gerekçe isteyin.", "Kişisel veri, gerçek yüz/ses ve izinsiz telifli içerik kullanmayın."],
    adimlar: etkinlikler,
    ekran: AI_GENEL_EKRAN
  };
}

