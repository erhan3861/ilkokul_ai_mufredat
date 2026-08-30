/* =========================================================================
   AI-GALAXY • ORTAOKUL 6 (6. SINIF) • ÖĞRETMEN REHBERİ İÇERİĞİ
   Kaynaklar:
   • ortaokul6/mufredat.md
   • ortaokul6/ders_linkleri_ve_sifreleri.md
   • ortaokul6/dersN/dersN_ozet.md ve gerçek HTML başlıkları
   ========================================================================= */

function akisOlustur(maddeler) {
  var basliklar = [
    "1️⃣ Isınma ve ön bilgiyi yoklama (5 dk)",
    "2️⃣ Kavramı modelleme (8 dk)",
    "3️⃣ Gerçek etkinlikleri uygulama (25 dk)",
    "4️⃣ Gerekçeli kapanış (5 dk)"
  ];
  return maddeler.map(function (m, i) { return { b: basliklar[i], m: m }; });
}

var AI_DERSLER = {
  1: {
    ad: "Akıllı Şehir ve Görev Parçalama",
    emoji: "🏙️",
    konu: "Task Decomposition & Uzman AI Rolleri",
    tekCumle: "Karmaşık bir akıllı şehir problemini <b>uzman rollere ve sıralı alt görevlere</b> ayırmak, hem istem mühendisliğinin hem algoritmik düşünmenin temelidir.",
    neden: [
      "Tek parça görevler belirsiz çıktı üretir; parçalama hangi uzmanın hangi işi, hangi sırada yapacağını açıklar.",
      "Fen 6 akıllı şehir ve hücre sistemleri, blok kodlamadaki algoritma mantığıyla birlikte ele alınır.",
      "Öğrenci yapay zekâyı cevap makinesi değil, görevleri paylaştırılan bir proje ekibi gibi kullanır."
    ],
    kazanim: [
      "Bir problemi en az <b>üç uzman AI rolüne</b> ayırır.",
      "Alt görevleri bağımlılıklarına göre doğru sıraya dizer.",
      "Akıllı şehir çözümünü ölçülebilir teslimlere dönüştürür."
    ],
    akis: [
      "Tahtaya “2080 için akıllı şehir kur” yazın. Öğrencilere bu cümlenin içinde kaç ayrı iş olduğunu sorun.",
      "Araştırmacı, şehir plancısı ve 3D sanat yönetmeni rollerini üç sütunda modelleyin; her role tek teslim yazın.",
      "Akıllı Şehir Labı → 2080 Siberpunk Şehri Uzman AI Takım Atölyesi → Bilim & Gelecek Görev Parçalama Rehberi sırasını izleyin.",
      "Her takım rol sırasını okusun ve “Bu rolü çıkarırsak hangi teslim eksik kalır?” sorusunu yanıtlasın."
    ],
    ornekler: [
      { kotu: "Akıllı şehir yap.", iyi: "1) Enerji uzmanı tüketimi incelesin. 2) Şehir plancısı bölgeleri kursun. 3) 3D sanat yönetmeni görsel istemi yazsın.", not: "Tek görev, uzman rollere ve teslimlere ayrıldı." },
      { kotu: "Hücreyi şehir gibi anlat.", iyi: "Biyolog AI organelleri listelesin; sistem mimarı görev eşleştirme tablosu hazırlasın.", not: "Bilgi toplama ile model kurma ayrıldı." },
      { kotu: "Bir Mars üssü çiz.", iyi: "Önce ihtiyaç listesini çıkar, sonra yerleşim planını oluştur, en son izometrik 3D görsel istemini yaz.", not: "Görsel adım kendinden önceki veriyi kullanıyor." }
    ],
    sorular: ["Bu görev kaç alt iş içeriyor?", "Hangi uzman önce çalışmalı, neden?", "İki rol aynı işi yapıyor mu?", "Kodlama adımlarıyla görev parçalama nerede benziyor?"],
    ipuclari: ["Rol adından sonra somut bir teslim yazdırın.", "Sıra için tek doğruyu ezberletmeyin; bağımlılık gerekçesi isteyin.", "Kişisel veri ve gerçek kişi yüzü kullanılan görevleri kabul etmeyin."]
  },
  2: {
    ad: "3D Siber Ajan Kural Hiyerarşisi",
    emoji: "🤖",
    konu: "Instruction Hierarchy & Oran-Orantı",
    tekCumle: "Bir istemde kurallar eşit değildir: <b>zorunlu kısıt → tercih edilen stil → kaçınılanlar</b> sırası, güvenli ve tutarlı çıktı sağlar.",
    neden: [
      "Çelişen komutlarda öncelik yazılmazsa yapay zekâ görsel ayrıntıyı güvenlik veya ölçek kuralının önüne geçirebilir.",
      "1/5000 ölçek ve sıfır emisyon gibi ölçülebilir kurallar Matematik ve Fen kazanımlarıyla birleşir.",
      "Negatif istem, istenmeyen sonucu somut biçimde dışarıda bırakmayı öğretir."
    ],
    kazanim: ["Kuralları üç öncelik düzeyine ayırır.", "Ölçülebilir zorunlu kısıt yazar.", "Güvenli ve somut kaçınılanlar listesi oluşturur."],
    akis: [
      "Sınıfa güvenlik, neon renk ve bulanıklık kurallarını verin; hangisinin önce gelmesi gerektiğini oylatın.",
      "🔴 Zorunlu · 🟡 Tercih · 🟢 Kaçınılan katmanlarını gerçek siber ajan örneğiyle gösterin.",
      "Kural Hiyerarşisi Labı → Siberpunk Kural Protokolü Stüdyosu → Bilim & Kural Hiyerarşisi Rehberi sırasını uygulayın.",
      "Takımlar en üst önceliği ve bir negatif istemi okuyup nedenini açıklasın."
    ],
    ornekler: [
      { kotu: "Neon, güvenli, havalı bir ajan çiz.", iyi: "ZORUNLU: güvenli görev, 1/5000 ölçek. TERCİH: neon mavi. KAÇINILAN: gerçek kişi yüzü, bulanıklık.", not: "Öncelikler görünür oldu." },
      { kotu: "Sıfır emisyon olsun, biraz da duman ekle.", iyi: "ZORUNLU: sıfır emisyon. KAÇINILAN: egzoz ve yoğun duman.", not: "Çelişen ayrıntı kaldırıldı." },
      { kotu: "Güzel bir robot.", iyi: "ZORUNLU: yardımcı 3D siber ajan. TERCİH: volümetrik ışık. KAÇINILAN: silah ve korkutucu yüz.", not: "Soyut sıfat yerine test edilebilir maddeler yazıldı." }
    ],
    sorular: ["Bu kural zorunlu mu, tercih mi?", "İki kural çelişirse hangisi kazanmalı?", "Ölçek nasıl test edilir?", "Kaçınılanlar neden açık yazılmalı?"],
    ipuclari: ["Güvenlik her zaman stilin önündedir.", "“Havalı olmasın” gibi belirsiz negatifler yerine somut nesne yazdırın.", "Oran kuralını sayı ve birimle belirtin."]
  },
  3: {
    ad: "Multi-Shot Prompting ve JSON Çıktı Mimarisi",
    emoji: "🧬",
    konu: "Örnekli İstem & Düzenli Bilgi Kartı",
    tekCumle: "İki doğru örnek ve sabit alanlar vermek, yapay zekânın üçüncü bilgiyi <b>aynı düzende ve karşılaştırılabilir biçimde</b> üretmesini sağlar.",
    neden: [
      "Karışık paragraf yerine Organel Adı, Görevi ve 3D Şehir Benzetmesi alanları bilgiyi karşılaştırmayı kolaylaştırır.",
      "Multi-shot yaklaşımı örüntü bulma becerisini, düzenli çıktı ise veri okuryazarlığını geliştirir.",
      "JSON benzeri anahtar-değer mantığı sonraki değişken ve veri çalışmalarına hazırlık olur."
    ],
    kazanim: ["İki örnekten ortak şablonu çıkarır.", "Eksik alanı fark eder.", "Üçüncü organel kartını aynı alan düzeninde üretir."],
    akis: [
      "Çekirdek ve mitokondri için iki bilgi kartı gösterin; ortak alanları öğrencilerin bulmasını sağlayın.",
      "Alan adlarını sabitleyin: Organel, Görev, Şehir Benzetmesi, 3D Stil.",
      "Örnekli İstem Labı → 3D Hücre Şehri Kart Stüdyosu → Bilim & Örnekli Kart Rehberi sırasını izleyin.",
      "Takımlar üçüncü kartın alan sırası ve veri türünün örneklerle tutarlı olup olmadığını kontrol etsin."
    ],
    ornekler: [
      { kotu: "Mitokondriyi anlat.", iyi: "Örnek 1 ve 2’deki Organel/Görev/Benzetme/Stil alanlarını koruyarak mitokondri kartı üret.", not: "Biçim örnekten öğreniliyor." },
      { kotu: "Bir JSON yaz.", iyi: "Alanlar: organel_adi, gorev, sehir_benzetmesi, uc_boyutlu_stil. Her alan tek değer taşısın.", not: "Alan adı ve veri beklentisi açık." },
      { kotu: "Ribozom için aynısını yap.", iyi: "Aşağıdaki iki tam örneğin alan sırasını değiştirmeden ribozom için üçüncü kartı yaz.", not: "“Aynısı”nın referansı belirtildi." }
    ],
    sorular: ["İki örnekte ortak olan alanlar hangileri?", "Hangi alan eksik?", "Alan sırası değişirse karşılaştırma zorlaşır mı?", "Değer ile alan adı arasındaki fark nedir?"],
    ipuclari: ["JSON sözdizimini ezberletmek yerine düzenli alan mantığına odaklanın.", "Örnekler hatalıysa üçüncü çıktı da hatayı tekrarlar; önce örneği doğrulatın.", "Fen bilgisini ders kitabıyla kontrol ettirin."]
  },
  4: {
    ad: "Rubrik Matrisi ile Siber Şehir Testi",
    emoji: "📊",
    konu: "Rubrik & 1. Ay Akıllı Şehir Projesi",
    tekCumle: "Yapay zekâ çıktısı beğeniyle değil, <b>konu doğruluğu, düzen, görsel ölçüt ve güvenlik</b> içeren rubrikle test edilir.",
    neden: ["Rubrik rastgele “iyi/kötü” yorumunu gerekçeli değerlendirmeye çevirir.", "Eksik ölçüt istem iyileştirme döngüsüne doğrudan veri sağlar.", "İlk dört haftanın parçalama, hiyerarşi ve şablon becerileri tek projede birleşir."],
    kazanim: ["Dört ölçütlü rubrik uygular.", "Puanın yanına kanıt yazar.", "En düşük ölçüte göre istemi revize eder."],
    akis: [
      "Aynı şehir çıktısına iki farklı puan gösterin; hangisinin kanıtlı olduğunu sorun.",
      "Dört ölçütü tahtaya yazın ve her ölçüt için ekranda görülebilen bir kanıt tanımlayın.",
      "Rubrik Labı → Akıllı Şehir Değerlendirme Stüdyosu → Rubrik Test Rehberi sırasını uygulayın.",
      "Her takım en düşük puanlı ölçütünü ve bunu yükselten tek revizyon komutunu sunsun."
    ],
    ornekler: [
      { kotu: "Çok güzel, 5 yıldız.", iyi: "Konu 4/5: enerji kaynağı doğru; güvenlik 2/5: yaya yolu eksik.", not: "Puan kanıtla bağlandı." },
      { kotu: "Biraz geliştir.", iyi: "Güvenlik ölçütünü yükseltmek için aydınlatılmış yaya yolu ve acil çıkış ekle.", not: "Revizyon hedef ölçüte bağlı." },
      { kotu: "Her şey tam.", iyi: "Dört ölçütü ayrı puanla; eksik olanı belirt ve tek geliştirme önerisi yaz.", not: "Genel yargı parçalandı." }
    ],
    sorular: ["Bu puanın ekrandaki kanıtı ne?", "Hangi ölçüt diğerinden bağımsız?", "En düşük puan hangisi?", "Tek revizyon hangi puanı yükseltir?"],
    ipuclari: ["Gerekçesiz puanı kabul etmeyin.", "Rubriği etkinlik başlamadan görünür tutun.", "Yapay zekâ yanıtını rubrik ölçütü sanmayın; ölçüt öğretmen ve öğrenci tarafından belirlenir."]
  },
  5: {
    ad: "Dijital İpek Yolu Hipotez Sorusu",
    emoji: "🛤️",
    konu: "Hipotez Tasarımı & Dijital Ticaret",
    tekCumle: "Güçlü araştırma sorusu yalnızca “nedir?” demez; <b>değişkenler arasında sınanabilir bir ilişki</b> kurar.",
    neden: ["İpek Yolu ile dijital ticaret arasında neden-sonuç ilişkisi kurulur.", "Gelecek senaryosu üretirken tarihsel gerçek ile varsayım ayrılır.", "Öğrenci yapay zekâdan tek doğru değil, gerekçeli olasılıklar ister."],
    kazanim: ["Sınanabilir hipotez sorusu yazar.", "Varsayım ile tarihsel bilgiyi ayırır.", "Üç gerekçeli senaryoyu karşılaştırır."],
    akis: [
      "“İpek Yolu nedir?” ve “Fiber hatlar olsaydı ticaret nasıl değişirdi?” sorularını karşılaştırın.",
      "Eğer… olsaydı / değişken / beklenen etki yapısını modelleyin.",
      "Hipotez Sorusu Labı → Dijital İpek Yolu Stüdyosu → Hipotez Sorusu Rehberi sırasını izleyin.",
      "Takımlar sorusundaki değişkenleri ve hangi kanıtla sınanabileceğini söylesin."
    ],
    ornekler: [
      { kotu: "İpek Yolu nedir?", iyi: "Kervanlar yerine hızlı dijital ağlar olsaydı durak şehirlerinin ticaret rolü nasıl değişirdi?", not: "Tanım sorusu ilişki sorusuna dönüştü." },
      { kotu: "Geleceği anlat.", iyi: "İstanbul–Semerkant veri hattı gecikmeyi yarıya indirse küçük işletmelerin erişimi nasıl etkilenir?", not: "Değişken ve etki ölçülebilir." },
      { kotu: "Üç fikir ver.", iyi: "Aynı hipotez için üç senaryo yaz; her birinde bir gerekçe ve doğrulanması gereken veri belirt.", not: "Senaryolar kanıt ihtiyacıyla bağlandı." }
    ],
    sorular: ["Soruda hangi değişken değişiyor?", "Bu ifade tarihsel gerçek mi varsayım mı?", "Hipotezi hangi veri sınar?", "Karşıt sonuç mümkün mü?"],
    ipuclari: ["Varsayımları gerçekmiş gibi yazdırmayın.", "“Kesinlikle” yerine olasılık dili kullanın.", "Tarihsel bilgiyi güvenilir kaynakla doğrulatın."]
  },
  6: {
    ad: "Siber Efsaneler ve Gerçekler",
    emoji: "🕵️",
    konu: "Fact Checking & Yanılsama Tespiti",
    tekCumle: "Yapay zekânın kendinden emin anlatımı kanıt değildir; her iddia <b>kaynak, bilimsel kural ve karşı kanıtla</b> sınanmalıdır.",
    neden: ["Halüsinasyon kavramı somut bilim ve günlük yaşam iddialarıyla görünür olur.", "Fen 6 madde ve ısı bilgisi termos, yalıtım ve donanım örneklerinde uygulanır.", "Öğrenci iddia ile kanıtı birbirinden ayırır."],
    kazanim: ["İddia, kanıt ve açıklamayı ayırır.", "En az iki güvenilir kaynakla doğrulama yapar.", "Kesinlik dili kullanan şüpheli iddiaları işaretler."],
    akis: [
      "“Tahta kaşık ısıyı hiç iletmez” iddiasını gösterin; sınıftan kanıt isteyin.",
      "İddia → Kaynak → Karşılaştırma → Sonuç kontrol zincirini tahtada modelleyin.",
      "Gerçeklik Dedektifi Labı → Siber Efsane Avcıları Stüdyosu → Gerçeklik Kontrolü Rehberi sırasını uygulayın.",
      "Takımlar bir iddiayı “doğru/eksik/yanlış” diye sınıflandırıp kanıtını okusun."
    ],
    ornekler: [
      { kotu: "AI söyledi, doğrudur.", iyi: "İddiayı Fen 6 ders kitabı ve güvenilir bilim kaynağıyla karşılaştır; uyuşmayan kısmı işaretle.", not: "Otorite yerine doğrulama kullanıldı." },
      { kotu: "Termos ısıyı tamamen durdurur.", iyi: "Termos ısı aktarımını azaltır; “tamamen” ifadesini deney ve kaynakla sınayalım.", not: "Aşırı kesinlik düzeltildi." },
      { kotu: "Bu bilgi sahte.", iyi: "Kaynak adı yok, ölçüm verisi yok ve başka güvenilir kaynakla uyuşmuyor; bu nedenle güven düşük.", not: "Karar ölçütlerle gerekçelendirildi." }
    ],
    sorular: ["Buradaki iddia hangisi?", "Kanıt gerçekten iddiayı destekliyor mu?", "Hangi kelime aşırı kesinlik taşıyor?", "Karşı kaynak ne söylüyor?"],
    ipuclari: ["Yapay zekâyı kaynak olarak değil araştırma başlangıcı olarak konumlandırın.", "Öğrenciden bağlantı değil, kaynağın kurumunu ve tarihini de istemesini sağlayın.", "Kişisel sağlık deneyi yaptırmayın."]
  },
  7: {
    ad: "Akademik Kaynak Okuryazarlığı ve Dijital Etik",
    emoji: "📚",
    konu: "Source Literacy, Kaynakça & Dijital Haklar",
    tekCumle: "Güvenilir araştırma; <b>kaynağın kimliğini, kanıtını, güncelliğini ve kullanım hakkını</b> birlikte kontrol eder.",
    neden: ["Resmî ve akademik kaynak ile anonim paylaşım arasındaki fark görünür olur.", "Alıntı, kaynakça ve telif kavramları gerçek proje üretimine bağlanır.", "Dijital emeğe saygı sınıf kuralına dönüşür."],
    kazanim: ["Kaynağı otorite, kanıt ve güncellik ölçütleriyle değerlendirir.", "Kısa kaynakça notu yazar.", "İzin ve telif sınırlarını fark eder."],
    akis: [
      "Aynı iddiayı veren anonim paylaşım ve TÜBİTAK sayfasını karşılaştırın.",
      "Yazar/Kurum · Tarih · Kanıt · Kullanım Hakkı başlıklarını dört kontrol kutusu olarak gösterin.",
      "Dijital Etik Labı → Kaynakça Stüdyosu → Dijital Etik Rehberi sırasını izleyin.",
      "Her takım kullandığı bir kaynağı ve neden güvenilir bulduğunu 20 saniyede sunsun."
    ],
    ornekler: [
      { kotu: "İnternetten buldum.", iyi: "Kaynak: kurum adı, sayfa başlığı, yayın/güncelleme tarihi ve bağlantı.", not: "Kaynak izlenebilir oldu." },
      { kotu: "Bu resmi ödevime koydum.", iyi: "Görselin lisansını kontrol ettim; izin verilen kullanımı ve üreticiyi kaynakçada belirttim.", not: "Emeğe ve kullanım hakkına saygı gösterildi." },
      { kotu: "Üç site aynı şeyi söylüyor.", iyi: "Üç sitenin birbirini kopyalayıp kopyalamadığını ve özgün kanıt sunup sunmadığını kontrol ettim.", not: "Site sayısı kanıt sayısı değildir." }
    ],
    sorular: ["Kaynağın yazarı veya kurumu belli mi?", "Kanıt nerede?", "Bilgi güncel mi?", "Bu görseli kullanmaya izin var mı?"],
    ipuclari: ["Alan adı tek başına yeterli değildir; içerik ve tarih de incelensin.", "Kişisel bilgi isteyen veya ödül vadeden sayfalarda durma kuralını tekrarlatın.", "AI üretimi içerik kullanıldıysa bunu belirtmeyi öğretin."]
  },
  8: {
    ad: "Yapay Zekâ Modellerini Karşılaştırmak",
    emoji: "⚖️",
    konu: "AI Model Benchmark & İklim-Enerji Projesi",
    tekCumle: "En iyi model diye tek cevap yoktur; doğru seçim <b>görev, ölçüt, aynı test istemi ve kanıtlı karşılaştırma</b> ile yapılır.",
    neden: ["Hız, akıl yürütme, görsel üretim ve güvenlik gibi farklı güçlü yönler karşılaştırılır.", "Adil benchmark için tüm modellere aynı görev ve ölçüt verilir.", "Fen 6 ısı yalıtımı ve yenilenebilir enerji bilgisi proje raporuna dönüşür."],
    kazanim: ["Adil model karşılaştırma düzeni kurar.", "En az dört ölçütle puanlama yapar.", "Göreve uygun model seçimini gerekçelendirir."],
    akis: [
      "Aynı yarışta iki koşucuya farklı mesafe vermenin adil olup olmadığını sorun; bunu model testine bağlayın.",
      "Aynı istem · aynı süre · aynı rubrik ilkesini ve görev bazlı ölçütleri gösterin.",
      "Benchmark Labı → İklim & Gelecek Enerjisi Raporu Stüdyosu → AI Benchmark Rehberi sırasını uygulayın.",
      "Takımlar kazanan modeli değil, hangi görevde hangi modelin neden seçildiğini sunsun."
    ],
    ornekler: [
      { kotu: "Model A daha iyi.", iyi: "Aynı istemde doğruluk 4/5, kaynak kullanımı 5/5; bu araştırma görevi için Model A daha uygun.", not: "Genel yargı görev ve ölçüte bağlandı." },
      { kotu: "İki modele farklı soru sordum.", iyi: "Her modele aynı iklim sorusunu, aynı çıktı biçimini ve aynı süreyi verdim.", not: "Test adil hâle geldi." },
      { kotu: "En hızlı model kazandı.", iyi: "Hız 5/5 ama doğruluk 2/5; rapor görevi için doğruluk ağırlığı daha yüksek.", not: "Ölçüt ağırlığı göreve göre seçildi." }
    ],
    sorular: ["Test koşulları iki model için aynı mı?", "Bu görevde hangi ölçüt daha önemli?", "Puanın kanıtı hangi çıktıda?", "Tek model yerine model birleşimi gerekir mi?"],
    ipuclari: ["Gerçek öğrenci verisini modellere girmeyin.", "Model isimlerinden çok ölçütleri öne çıkarın.", "Benchmark sonucunun yalnızca test edilen görev için geçerli olduğunu vurgulayın."]
  },
  9: {
    ad: "Derin Sokratik Öğrenme Koçu",
    emoji: "💡",
    konu: "Sokratik İstem & Matematik 6 Açılar",
    tekCumle: "İyi öğrenme koçu cevabı söylemez; öğrencinin düşünmesini sağlayan <b>tanılayıcı soru ve kademeli ipucu</b> kullanır.",
    neden: ["Tümler, bütünler, komşu ve ters açılar ezber yerine düşünme basamaklarıyla çalışılır.", "Öğrenci yardım istemini yönetir ve kendi öğrenme sürecini fark eder.", "Doğrudan cevap veren AI ile koçluk yapan AI arasındaki fark görünür olur."],
    kazanim: ["“Cevabı verme” kuralı içeren koç istemi yazar.", "Üç kademeli ipucu tasarlar.", "Açı çözümünde düşünme adımlarını açıklar."],
    akis: [
      "Basit bir açı sorusunu doğrudan çözün; sonra yalnızca soru sorarak sınıfa çözdürün. İki yaklaşımı karşılaştırın.",
      "Tanıla → hafif ipucu → yönlendirici ipucu → kritik ipucu sırasını modelleyin.",
      "Sokratik AI Koçu Labı → Sokratik Matematik Koçu Stüdyosu → Sokratik Rehber sırasını uygulayın.",
      "İkişerli gruplarda biri koç biri öğrenci olsun; koç cevabı söylemeden çözümü buldursun."
    ],
    ornekler: [
      { kotu: "Cevap 65 derecedir.", iyi: "Bu iki açının toplamı kaç olmalı? Bildiğin açıyı toplamdan çıkarırsan ne bulursun?", not: "Sonuç yerine düşünme yolu verildi." },
      { kotu: "Bir ipucu ver.", iyi: "Cevabı söyleme. Önce açı türünü sor; gerekirse toplam kuralını hatırlat; son aşamada işlemi seçtir.", not: "İpucu kademeleri tanımlandı." },
      { kotu: "Yanlış yaptın.", iyi: "Hangi adımda 90° yerine 180° kullandığını birlikte kontrol edelim.", not: "Hata, incitmeden belirli adıma bağlandı." }
    ],
    sorular: ["Bu soru öğrencinin ne bildiğini ölçüyor?", "İpucu cevabı ele veriyor mu?", "Bir sonraki en küçük yardım nedir?", "Öğrenci çözümü kendi cümlesiyle açıklayabiliyor mu?"],
    ipuclari: ["Koç isteminde “cevabı doğrudan verme” cümlesi açık olsun.", "Yanlış cevapta ceza veya küçümseyici dil kullanmayın.", "Her ipucundan sonra öğrencinin düşünmesi için süre verin."]
  },
  10: {
    ad: "Siberpunk Tiyatro Senaryosu & Metin Editörü",
    emoji: "🎭",
    konu: "Türkçe 6 Tiyatro Metni & AI Eleştirmeni",
    tekCumle: "Yapay zekâ metin editörü; <b>perde, sahne yönergesi, replik, karakter sesi ve güvenli mizah</b> ölçütleriyle senaryoyu geliştirir.",
    neden: ["Türkçe 6 metin türleri gerçek bir siberpunk tiyatro üretimine dönüşür.", "Eleştiri, metni baştan yazmak yerine ölçüte göre iyileştirme amacı taşır.", "Karakter ve sahne tutarlılığı sonraki storyboard çalışmalarına hazırlık olur."],
    kazanim: ["Tiyatro metninin yapı taşlarını ayırır.", "Karakter sesini koruyan revizyon komutu yazar.", "Kırıcı olmayan mizah ve sahne güvenliği ölçütlerini uygular."],
    akis: [
      "Kısa bir paragraf ile tiyatro sahnesini yan yana gösterip biçim farklarını buldurun.",
      "Perde · Sahne · Yönerge · Karakter adı · Replik alanlarını örnek metinde işaretleyin.",
      "Kaynak projede 10. ders ekranları hazırlık durumundadır; öğretmen rehberindeki örnekler ve sınıf içi metin editörü akışıyla çalışın.",
      "Gruplar yalnızca bir ölçütü iyileştiren revizyonu önce/sonra biçiminde sunsun."
    ],
    ornekler: [
      { kotu: "Robotlar konuştu ve herkes güldü.", iyi: "SAHNE 1 — Neon istasyon. MİRA (şaşkın): Enerji haritası neden ters? ARK-6: Çünkü ben kuzeyi güncelledim!", not: "Sahne, yönerge ve karakter sesi eklendi." },
      { kotu: "Daha komik yap.", iyi: "Bir kelime oyunu ekle; hiçbir karakterle alay etme ve olay akışını değiştirme.", not: "Mizahın türü ve sınırı belirtildi." },
      { kotu: "Hepsini yeniden yaz.", iyi: "Yalnızca uzun replikleri 12 kelimenin altına indir; karakter adları ve sahne yönergeleri aynı kalsın.", not: "Editör görevi kontrollü tutuldu." }
    ],
    sorular: ["Bu metin neden tiyatro metni?", "Sahne yönergesi oyuncuya ne söylüyor?", "Karakterlerin sesleri ayırt ediliyor mu?", "Revizyon hangi ölçütü iyileştirdi?"],
    ipuclari: ["Hazırlık ekranlarını canlı etkinlik gibi göstermeyin; öğretmen akışını kullanın.", "Gerçek kişilerin ses ve yüzlerini taklit ettirmeyin.", "Kırıcı mizahı yazılı sınıf kuralıyla engelleyin."]
  }
};

var ADIM_BILGISI = {
  1: [
    ["Akıllı Şehir & Uzman AI Görev Parçalama Labı", "Bireysel · 20 bölüm", "Karmaşık şehir görevini uzman rollere ve alt teslimlere ayırır.", "oyunmimarisi6"],
    ["2080 Siberpunk Şehri — Uzman AI Takım Atölyesi", "Grup çalışması", "Takım rolleriyle ortak şehir çözümü ve istemi kurar.", "haritayapay6"],
    ["8 Bilim & Gelecek Görev Parçalama Görsel Rehberi", "Görsel rehber", "Farklı bilim görevlerinde parçalama örneklerini karşılaştırır.", "decomposition6"]
  ],
  2: [
    ["3D Siber Ajan Kural Hiyerarşisi Labı", "Bireysel · 20 bölüm", "Zorunlu, tercih ve kaçınılan kuralları sınıflandırır.", "hiyerarşi6"],
    ["2080 Siberpunk Kural Protokolü Stüdyosu", "Grup çalışması", "Ölçek, güvenlik ve stil önceliklerini takımca yazar.", "komutsırası6"],
    ["8 Bilim & Kural Hiyerarşisi Görsel Rehberi", "Görsel rehber", "Kural katmanlarını örnek kartlarda inceler.", "hierarchy6"]
  ],
  3: [
    ["Örnekli İstem & Bilgi Kartı Labı", "Bireysel · 20 bölüm", "İki örnekten düzenli bilgi kartı şablonunu çıkarır.", "örnekşablon6"],
    ["3D Hücre Şehri Kart Stüdyosu", "Grup çalışması", "Organelleri tutarlı alanlarla şehir kartına dönüştürür.", "multishot6"],
    ["8 Bilim & Örnekli Kart Rehberi", "Görsel rehber", "Örnekli komut ve düzenli çıktı kartlarını inceler.", "visualjson6"]
  ],
  4: [
    ["Rubrik & Kontrol Listesi Labı", "Bireysel · 20 bölüm", "Çıktıları dört ölçütle puanlar ve kanıt seçer.", "haritarubrik6"],
    ["Akıllı Şehir Değerlendirme Stüdyosu", "Grup · 1. Ay Projesi", "Şehir prototipini rubrikle test edip revize eder.", "rubrik6"],
    ["8 Bilim & Rubrik Test Rehberi", "Görsel rehber", "Eksik ve güçlü çıktıları ölçütlere göre karşılaştırır.", "citycheck6"]
  ],
  5: [
    ["Hipotez Sorusu Tasarım Labı", "Bireysel · 20 bölüm", "Tanım sorusunu sınanabilir hipotez sorusuna dönüştürür.", "ipekyoluhipotez"],
    ["Dijital İpek Yolu Hipotez Stüdyosu", "Grup çalışması", "Tarih ve dijital ticareti bir gelecek senaryosunda birleştirir.", "soruguru6"],
    ["8 Bilim & Hipotez Sorusu Rehberi", "Görsel rehber", "Güçlü soru ve hipotez örneklerini inceler.", "soruusta6"]
  ],
  6: [
    ["Efsane Avcısı & Gerçeklik Dedektifi Labı", "Bireysel · 20 bölüm", "İddia, kanıt ve açıklamayı ayırarak yanılsamayı bulur.", "efsanehav6"],
    ["Siber Efsane Avcıları Stüdyosu", "Grup çalışması", "Fen iddialarını kaynaklarla kontrol edip karar raporu yazar.", "kanıt6"],
    ["8 Bilim & Gerçeklik Kontrolü Rehberi", "Görsel rehber", "Doğrulama zincirini farklı iddialarda uygular.", "gerçekçi6"]
  ],
  7: [
    ["Dijital Etik & Kaynak Okuryazarlığı Labı", "Bireysel · 20 bölüm", "Kaynağı kurum, kanıt, tarih ve etik ölçütleriyle inceler.", "kaynak6"],
    ["Dijital Etik & Kaynakça Stüdyosu", "Grup çalışması", "Takım araştırmasına kısa ve dürüst kaynakça ekler.", "güven6"],
    ["8 Bilim & Dijital Etik Rehberi", "Görsel rehber", "Kaynak güvenilirliği ve telif örneklerini karşılaştırır.", "bilgiguven6"]
  ],
  8: [
    ["AI Model Benchmark Labı", "Bireysel · 20 bölüm", "Aynı görevde model çıktılarını ortak rubrikle kıyaslar.", "benchmark6"],
    ["İklim ve Gelecek Enerjisi Raporu Stüdyosu", "Grup · 2. Ay Projesi", "Göreve uygun model birleşimiyle enerji raporu hazırlar.", "proje6"],
    ["8 Bilim & AI Benchmark Rehberi", "Görsel rehber", "Benchmark ölçütlerini farklı model görevlerinde inceler.", "modelcheck6"]
  ],
  9: [
    ["Sokratik AI Koçu Labı", "Bireysel · 20 bölüm", "Doğrudan cevap ile düşündüren ipucunu ayırır.", "sokratik6"],
    ["Sokratik Matematik Koçu Stüdyosu", "Grup çalışması", "Açı problemleri için kademeli koç istemi tasarlar.", "koç6"],
    ["8 Bilim & Sokratik Rehberi", "Görsel rehber", "Soru ve ipucu merdiveni örneklerini inceler.", "ipucu6"]
  ],
  10: [
    ["Siberpunk Tiyatro & Metin Eleştirmeni Labı", "Bireysel · hazırlık ekranı", "Tiyatro yapı taşlarını ve editör ölçütlerini çalıştırır.", "hikaye6"],
    ["Siberpunk Tiyatro Yazarları Stüdyosu", "Grup · hazırlık ekranı", "Takımca sahne ve diyalog revizyonu planlar.", "diyalog6"],
    ["Siberpunk Tiyatro Canlı Rehberi", "Görsel rehber · hazırlık ekranı", "Sahne, replik ve güvenli mizah örneklerini inceler.", "esprili6"]
  ]
};

var AI_ETKINLIK = {};
for (var no in ADIM_BILGISI) {
  AI_ETKINLIK[no] = ADIM_BILGISI[no].map(function (a, i) {
    return {
      ad: a[0],
      sure: i === 0 ? "15–20 dk" : (i === 1 ? "15 dk" : "10 dk"),
      tur: a[1],
      ne: a[2],
      sayfalar: i === 0
        ? ["Ders anlatımı ve örnek ekranı", "Bireysel seçimler, gerekçe ve ilerleme", "Tamamlama ve başarı şifresi"]
        : (i === 1
          ? ["Takım görevi ve rol paylaşımı", "Ortak üretim veya değerlendirme", "Sunum ve başarı şifresi"]
          : ["Kavram formülü", "Derse ait örnek kartlar", "Karşılaştırma ve kapanış"]),
      nasil: (i === 0
        ? "Önce anlatımı birlikte inceleyin; öğrenci seçiminden sonra mutlaka gerekçe isteyin."
        : (i === 1
          ? "Rolleri dağıtın; tek öğrencinin ekranı yönetmesine izin vermeden ortak karar ve temsilci sunumu yaptırın."
          : "Kartları sırayla gösterin; her örneği dersin ana ölçütüyle karşılaştırın.")) +
        " Başarı şifresi: <b>" + a[3] + "</b>"
    };
  });
  AI_DERSLER[no].adimlar = AI_ETKINLIK[no];
  AI_DERSLER[no].nasil = akisOlustur(AI_DERSLER[no].akis);
}

var AI_GENEL_EKRAN = [
  { b: "1️⃣ Ders anlatımını inceleyin", m: "Açılış anlatımı veya örnek ekranı sınıfla birlikte okuyun; dersin ölçütlerini tahtada görünür tutun." },
  { b: "2️⃣ Bireysel seçim ve gerekçe", m: "Öğrenci seçimini yapmadan önce düşünür; seçimden sonra hangi kanıta dayandığını söyler." },
  { b: "3️⃣ Takım atölyesini tamamlayın", m: "Rolleri paylaşın, ortak istemi veya raporu üretin ve temsilciye gerekçesiyle sundurun." },
  { b: "4️⃣ Görsel rehberle karşılaştırın", m: "Hazır örnekleri öğrencinin çıktısıyla ölçüt ölçüt karşılaştırın." },
  { b: "5️⃣ Tamamlama şifresini alın", m: "Etkinliğin kendi tamamlama akışını bitirin; şifreyi yalnızca ders tamamlandıktan sonra kullanın." }
];

for (var d in AI_DERSLER) {
  AI_DERSLER[d].ekran = AI_GENEL_EKRAN;
}

