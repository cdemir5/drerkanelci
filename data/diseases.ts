export interface DiseaseSection {
  title: string;
  content: string;
}

export interface DiseaseFAQ {
  question: string;
  answer: string;
}

export interface Disease {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  sections: DiseaseSection[];
  symptoms?: string[];
  treatments?: string[];
  faqs: DiseaseFAQ[];
  parentSlug?: string;
  parentTitle?: string;
}

export const diseases: Record<string, Disease> = {
  // ===== MIYOM =====
  "miyom-nedir": {
    slug: "miyom-nedir",
    title: "Miyom Nedir?",
    metaTitle: "Miyom Nedir? Belirtileri, Nedenleri ve Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Miyom (fibroid) nedir? Rahim miyomlarının belirtileri, nedenleri ve modern tedavi yöntemleri hakkında detaylı bilgi. Doç. Dr. Erkan Elçi.",
    heroDescription:
      "Rahim miyomları (fibroidler), rahmin kas dokusundan gelişen iyi huylu tümörlerdir. Üreme çağındaki kadınların yaklaşık %70-80'inde görülebilen miyomlar, çoğu zaman belirti vermez.",
    sections: [
      {
        title: "Miyom (Fibroid) Nedir?",
        content:
          "Miyomlar, rahmin düz kas hücrelerinden gelişen iyi huylu (benign) tümörlerdir. Fibroid veya leiomyom olarak da adlandırılırlar. Tek başlarına veya birden fazla sayıda bulunabilirler. Boyutları birkaç milimetreden birkaç santimetreye kadar değişkenlik gösterebilir. Miyomlar kadınlarda en sık görülen pelvik tümörlerdir ve üreme çağındaki kadınlarda oldukça yaygındır.\n\nMiyomlar bulundukları konuma göre üçe ayrılır:\n\n- **Subseröz miyomlar**: Rahmin dış yüzeyinde büyüyen miyomlardır.\n- **İntramural miyomlar**: Rahim duvarı içinde büyüyen miyomlardır. En sık görülen tiptir.\n- **Submüköz miyomlar**: Rahim boşluğuna doğru büyüyen miyomlardır. En çok semptom veren tiptir.",
      },
      {
        title: "Miyom Nedenleri ve Risk Faktörleri",
        content:
          "Miyomların kesin nedeni tam olarak bilinmemekle birlikte, östrojen ve progesteron hormonlarının miyom büyümesinde önemli rol oynadığı bilinmektedir. Risk faktörleri şunlardır:\n\n- Aile öyküsü (genetik yatkınlık)\n- Erken yaşta adet görmeye başlama\n- Obezite\n- Hiç doğum yapmamış olmak\n- D vitamini eksikliği\n- Kırmızı et tüketiminin fazla olması\n- Alkol kullanımı",
      },
      {
        title: "Miyom Tedavi Yöntemleri",
        content:
          "Miyom tedavisi, miyomun boyutu, sayısı, konumu, hastanın yaşı ve gelecekteki gebelik planlarına göre belirlenir. Tedavi seçenekleri:\n\n- **İlaç tedavisi**: Hormon düzenleyici ilaçlar ile miyom büyümesinin kontrolü\n- **Miyomektomi**: Cerrahi olarak miyomların çıkarılması (rahim korunur)\n- **Laparoskopik cerrahi**: Minimal invaziv yöntemle miyom çıkarılması\n- **Robotik cerrahi**: Robot yardımlı hassas miyom cerrahisi\n- **Histeroskopik miyomektomi**: Rahim içi miyomların histeroskop ile çıkarılması\n- **Histerektomi**: İleri vakalarda rahmin alınması",
      },
    ],
    symptoms: [
      "Adet kanamalarında artış ve uzama",
      "Adetler arası kanama",
      "Pelvik bölgede ağrı ve baskı hissi",
      "Sık idrara çıkma",
      "Kabızlık",
      "Karında şişkinlik",
      "Bel ağrısı",
      "Ağrılı cinsel ilişki",
      "Kısırlık veya tekrarlayan düşükler",
    ],
    faqs: [
      {
        question: "Miyom kanser yapar mı?",
        answer:
          "Miyomlar iyi huylu tümörlerdir ve kansere dönüşme olasılıkları çok düşüktür (%0.1'den az). Ancak düzenli takip önemlidir.",
      },
      {
        question: "Miyomum var, hamile kalabilir miyim?",
        answer:
          "Miyomlar gebeliği zorlaştırabilir ancak imkansız hale getirmez. Miyomun boyutu ve konumu önemlidir. Gerekirse ameliyat sonrası gebelik planlanabilir.",
      },
      {
        question: "Miyom ameliyatı sonrası iyileşme süreci nasıldır?",
        answer:
          "Laparoskopik ve robotik cerrahi ile yapılan miyom ameliyatlarında iyileşme süreci açık cerrahiye göre çok daha hızlıdır. Genellikle 1-2 hafta içinde günlük aktivitelere dönülebilir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "izsiz-miyom-ameliyati": {
    slug: "izsiz-miyom-ameliyati",
    title: "İzsiz Miyom Ameliyatı",
    metaTitle: "İzsiz Miyom Ameliyatı İstanbul | Doç. Dr. Erkan Elçi",
    metaDescription:
      "İzsiz miyom ameliyatı hakkında bilgi edinin. Laparoskopik ve robotik cerrahi ile izsiz miyom tedavisi. İstanbul'da uzman doktor.",
    heroDescription:
      "İzsiz miyom ameliyatı, minimal invaziv cerrahi teknikleri kullanılarak, karında büyük kesi açmadan gerçekleştirilen modern bir cerrahi yöntemdir.",
    sections: [
      {
        title: "İzsiz Miyom Ameliyatı Nedir?",
        content:
          "İzsiz miyom ameliyatı, geleneksel açık cerrahiden farklı olarak, karında büyük kesi yapılmadan gerçekleştirilen miyom çıkarma ameliyatıdır. Bu yöntemde laparoskopik veya robotik cerrahi teknikleri kullanılır. Birkaç milimetrelik küçük kesiler aracılığıyla kamera ve cerrahi aletler karın boşluğuna yerleştirilir.\n\nDoç. Dr. Erkan Elçi, ileri laparoskopik cerrahi ve robotik cerrahi deneyimi ile izsiz miyom ameliyatında uzmanlaşmıştır.",
      },
      {
        title: "İzsiz Miyom Ameliyatının Avantajları",
        content:
          "- Karında büyük iz kalmaz\n- Daha az ağrı\n- Daha az kanama\n- Hastanede kalış süresi kısadır (genellikle 1-2 gün)\n- İşe ve günlük aktivitelere hızlı dönüş\n- Enfeksiyon riski düşüktür\n- Kozmetik açıdan mükemmel sonuçlar",
      },
      {
        title: "Kimler İçin Uygundur?",
        content:
          "İzsiz miyom ameliyatı, miyom boyutu ve konumuna bağlı olarak birçok hasta için uygun bir seçenektir. Özellikle:\n\n- Doğurganlığını korumak isteyen kadınlar\n- Hızlı iyileşme isteyen hastalar\n- Kozmetik kaygıları olan hastalar\n- Birden fazla miyomu olan hastalar\n\nAmeliyat öncesi detaylı değerlendirme ile en uygun yöntem belirlenir.",
      },
    ],
    faqs: [
      {
        question: "İzsiz miyom ameliyatı ağrılı mıdır?",
        answer:
          "Açık cerrahiye kıyasla çok daha az ağrılıdır. Ameliyat sonrası ağrı kontrolü kolaylıkla sağlanır.",
      },
      {
        question: "Ameliyat sonrası ne zaman işe dönebilirim?",
        answer:
          "Genellikle 1-2 hafta içinde normal aktivitelere ve işe dönülebilir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "vajinal-miyom-ameliyati": {
    slug: "vajinal-miyom-ameliyati",
    title: "Vajinal Miyom Ameliyatı",
    metaTitle: "Vajinal Miyom Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Vajinal miyom ameliyatı hakkında bilgi. Submüköz miyomların vajinal yolla tedavisi. İstanbul'da uzman jinekolog.",
    heroDescription:
      "Vajinal miyom ameliyatı, özellikle rahim boşluğuna doğru büyüyen (submüköz) miyomların vajinal yoldan çıkarılması işlemidir.",
    sections: [
      {
        title: "Vajinal Miyom Ameliyatı Nedir?",
        content:
          "Vajinal miyom ameliyatı, rahim ağzından sarkan veya rahim boşluğuna doğru büyümüş miyomların vajinal yoldan çıkarılması işlemidir. Bu yöntem özellikle submüköz miyomlar ve rahim ağzından sarkan pedünküllü miyomlar için idealdir.\n\nHisteroskopik miyomektomi olarak da bilinen bu yöntemde, rahim ağzından girilerek özel aletler ile miyom çıkarılır. Karında herhangi bir kesi yapılmaz.",
      },
      {
        title: "Vajinal Miyom Ameliyatının Avantajları",
        content:
          "- Karında hiçbir kesi yoktur\n- Anestezi süresi kısadır\n- Aynı gün taburcu olunabilir\n- İyileşme süreci çok hızlıdır\n- Rahim korunur\n- Doğurganlık etkilenmez",
      },
    ],
    faqs: [
      {
        question: "Vajinal miyom ameliyatı sonrası hamile kalabilir miyim?",
        answer:
          "Evet, vajinal miyom ameliyatı rahim koruyucu bir işlemdir ve sonrasında hamile kalmanız mümkündür.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  // ===== JİNEKOLOJİK ONKOLOJİ =====
  "rahim-agzi-kanseri": { slug: "rahim-agzi-kanseri", title: "Rahim Ağzı (Serviks) Kanseri", metaTitle: "Rahim Ağzı Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Rahim ağzı (servikal) kanseri belirtileri, teşhisi ve tedavi yöntemleri. Jinekolojik onkoloji uzmanı.", heroDescription: "Servikal kanser, rahim ağzında gelişen bir kanser türüdür. HPV enfeksiyonu en önemli nedenidir. Erken teşhis ile tedavi başarısı %90'ın üzerindedir.", sections: [{ title: "Rahim Ağzı Kanseri Nedir?", content: "Servikal kanser, rahim ağzının (serviks) hücrelerinde başlayan bir kanser türüdür. Dünya genelinde kadınlarda en sık görülen kanserlerden biridir. HPV (İnsan Papilloma Virüsü) enfeksiyonu servikal kanserin en önemli nedenidir.\n\nDüzenli tarama (smear testi ve HPV testi) ile erken teşhis mümkündür ve erken evrede yakalanan servikal kanserin tedavi başarısı %90'ın üzerindedir." }, { title: "Tedavi Yaklaşımı", content: "Tedavi kanserin evresine göre planlanır:\n\n- **Evre 0 (Karsinoma in situ)**: Konizasyon veya LEEP ile tedavi\n- **Evre I**: Radikal histerektomi ve lenf nodu diseksiyonu\n- **Evre II**: Kemoradyoterapi ± cerrahi\n- **Evre III-IV**: Kemoradyoterapi\n\nDoç. Dr. Erkan Elçi, robotik ve laparoskopik cerrahi yöntemlerini uygulamaktadır." }], symptoms: ["Cinsel ilişki sonrası kanama", "Adetler arası anormal kanama", "Menopoz sonrası kanama", "Kötü kokulu vajinal akıntı", "Pelvik ağrı", "Bacaklarda şişlik"], faqs: [{ question: "Servikal kanser önlenebilir mi?", answer: "Evet, HPV aşısı ve düzenli tarama ile servikal kanser büyük ölçüde önlenebilir." }, { question: "HPV aşısı ne zaman yaptırılmalıdır?", answer: "HPV aşısı ideal olarak 9-14 yaş arasında yaptırılmalıdır, ancak 26 yaşına kadar yapılabilir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "rahim-kanseri": { slug: "rahim-kanseri", title: "Rahim Kanseri Tanı ve Tedavisi", metaTitle: "Rahim Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Rahim kanseri (endometrium kanseri) belirtileri, teşhisi ve tedavi yöntemleri. Robotik cerrahi ile tedavi.", heroDescription: "Rahim kanseri (endometrium kanseri), rahmin iç tabakasından kaynaklanan en yaygın jinekolojik kanser türüdür.", sections: [{ title: "Rahim Kanseri Nedir?", content: "Endometrium kanseri olarak da bilinen rahim kanseri, rahmin iç tabakasını döşeyen hücrelerde başlar. Kadınlarda en sık görülen jinekolojik kanserdir ve genellikle menopoz sonrası dönemde ortaya çıkar.\n\nErken evrede teşhis edildiğinde tedavi başarısı çok yüksektir. En önemli belirti menopoz sonrası vajinal kanamadır." }, { title: "Tedavi Yaklaşımı", content: "Rahim kanseri tedavisinde cerrahi temel tedavi yöntemidir:\n\n- **Cerrahi**: Histerektomi + bilateral salpingo-ooferektomi + lenf nodu değerlendirmesi\n- **Radyoterapi**: Cerrahi sonrası gerekli vakalarda\n- **Kemoterapi**: İleri evre vakalarda\n- **Hormoterapi**: Seçilmiş vakalarda\n\nRobotik cerrahi, rahim kanseri ameliyatlarında minimal invaziv bir yaklaşım sunar." }], symptoms: ["Menopoz sonrası vajinal kanama", "Adet düzensizlikleri", "Pelvik ağrı", "Anormal vajinal akıntı", "İstemsiz kilo kaybı"], faqs: [{ question: "Rahim kanseri kimlerde görülür?", answer: "Genellikle 50 yaş üstü kadınlarda görülür. Obezite, diyabet, hipertansiyon ve hiç doğum yapmamış olmak risk faktörleridir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "yumurtalik-kanseri": { slug: "yumurtalik-kanseri", title: "Yumurtalık Kanseri Tedavisi", metaTitle: "Yumurtalık Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Yumurtalık (over) kanseri belirtileri, teşhisi ve cerrahi tedavi yöntemleri.", heroDescription: "Yumurtalık kanseri, overlerde gelişen ve erken belirti vermemesi nedeniyle 'sessiz katil' olarak bilinen kanser türüdür.", sections: [{ title: "Yumurtalık Kanseri Nedir?", content: "Over kanseri, yumurtalıklarda başlayan bir kanser türüdür. Erken evrede belirgin semptom vermemesi nedeniyle genellikle ileri evrede teşhis edilir. Düzenli jinekolojik muayene ve ultrason takibi erken teşhis için önemlidir." }, { title: "Tedavi Yöntemleri", content: "Tedavi genellikle cerrahi ve kemoterapinin kombinasyonundan oluşur:\n\n- **Primer sitoredüktif cerrahi**: Tümörün mümkün olduğunca tamamen çıkarılması\n- **Kemoterapi**: Cerrahi öncesi veya sonrası\n- **Hedefe yönelik tedavi**: PARP inhibitörleri, anti-anjiojenik tedaviler\n- **İntraperitoneal kemoterapi**: Seçilmiş vakalarda" }], symptoms: ["Karında şişlik ve gerginlik", "Pelvik veya karın ağrısı", "Yeme güçlüğü veya erken doyma hissi", "Sık idrara çıkma", "Kilo kaybı", "Yorgunluk", "Kabızlık"], faqs: [{ question: "Over kanseri erken teşhis edilebilir mi?", answer: "Düzenli jinekolojik muayene, ultrason ve CA-125 gibi tümör belirteçleri ile erken teşhis şansı artırılabilir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "vulva-kanseri": { slug: "vulva-kanseri", title: "Vulva Kanseri Tedavisi", metaTitle: "Vulva Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Vulva kanseri belirtileri, teşhisi ve tedavi yöntemleri.", heroDescription: "Vulva kanseri, kadın dış genital organlarında gelişen nadir görülen bir kanser türüdür.", sections: [{ title: "Vulva Kanseri Nedir?", content: "Vulva kanseri, kadın dış genital bölgesinde gelişen bir kanser türüdür. Jinekolojik kanserlerin yaklaşık %4'ünü oluşturur. HPV ile ilişkili olabilir.\n\nErken evrede teşhis edildiğinde tedavi başarısı yüksektir." }, { title: "Tedavi Yöntemleri", content: "- **Geniş lokal eksizyon**: Erken evre tümörlerde\n- **Vulvektomi**: İleri vakalarda\n- **Lenf nodu diseksiyonu**: Sentinel lenf nodu biyopsisi\n- **Radyoterapi**: Cerrahi öncesi veya sonrası\n- **Kemoterapi**: İleri evre vakalarda" }], symptoms: ["Vulvada kaşıntı veya yanma", "Vulvada kitle veya ülser", "Vulvada renk değişikliği", "Kanama", "Ağrı"], faqs: [{ question: "Vulva kanserinden korunmak mümkün mü?", answer: "HPV aşısı, düzenli jinekolojik muayene ve vulvadaki değişikliklerin erken fark edilmesi korunmada önemlidir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "vajina-kanseri": { slug: "vajina-kanseri", title: "Vajina Kanseri Tedavisi", metaTitle: "Vajina Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Vajina kanseri belirtileri, teşhisi ve tedavi yöntemleri hakkında bilgi.", heroDescription: "Vajina kanseri, vajinal kanalda gelişen nadir görülen bir jinekolojik kanser türüdür.", sections: [{ title: "Vajina Kanseri Nedir?", content: "Vajina kanseri, vajinal kanalın iç yüzeyini döşeyen hücrelerde başlayan nadir bir kanser türüdür. Tüm jinekolojik kanserlerin yaklaşık %1-2'sini oluşturur. Genellikle 60 yaş üstü kadınlarda görülür.\n\nHPV enfeksiyonu, vajina kanseri için önemli bir risk faktörüdür. Erken teşhis tedavi başarısını artırır." }, { title: "Tedavi Seçenekleri", content: "- **Cerrahi**: Erken evre tümörlerde lokal eksizyon veya vajinektomi\n- **Radyoterapi**: Birincil tedavi olarak veya cerrahi sonrası\n- **Kemoradyoterapi**: İleri evre vakalarda\n- **Brakiterapi**: İnternal radyoterapi uygulaması" }], symptoms: ["Vajinal kanama (özellikle menopoz sonrası)", "Anormal vajinal akıntı", "Pelvik ağrı", "İdrar yaparken ağrı", "Vajinal kitle hissi"], faqs: [{ question: "Vajina kanseri nasıl teşhis edilir?", answer: "Jinekolojik muayene, kolposkopi, biyopsi ve görüntüleme yöntemleri ile teşhis konulur." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "tup-kanseri": { slug: "tup-kanseri", title: "Tüp Kanseri Tedavisi", metaTitle: "Tüp (Fallop Tüpü) Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Fallop tüpü kanseri belirtileri, teşhisi ve tedavi yöntemleri.", heroDescription: "Tüp kanseri (fallop tüpü kanseri), yumurta kanallarında gelişen nadir görülen bir jinekolojik kanser türüdür.", sections: [{ title: "Tüp Kanseri Nedir?", content: "Fallop tüpü kanseri, yumurtalıkları rahme bağlayan tüplerde gelişen nadir bir kanser türüdür. Son araştırmalar, yumurtalık kanseri olarak bilinen vakaların önemli bir kısmının aslında tüplerden kaynaklandığını göstermektedir.\n\nBelirtileri yumurtalık kanserine benzer ve genellikle ileri evrede tanı konulur." }, { title: "Tedavi Yaklaşımı", content: "Tedavi yumurtalık kanseri protokollerine benzer:\n\n- **Cerrahi**: Total histerektomi + bilateral salpingo-ooferektomi + omentektomi + lenf nodu disseksiyonu\n- **Kemoterapi**: Platin bazlı kemoterapi\n- **Hedefe yönelik tedavi**: Uygun vakalarda" }], faqs: [{ question: "Tüp kanseri ile yumurtalık kanseri arasındaki fark nedir?", answer: "Tüp kanseri fallop tüplerinden, yumurtalık kanseri ise yumurtalıklardan kaynaklanır. Tedavi protokolleri benzerdir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "periton-kanseri": { slug: "periton-kanseri", title: "Periton Kanseri Tedavisi", metaTitle: "Periton Kanseri Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Periton (karın zarı) kanseri belirtileri, teşhisi ve tedavi yöntemleri.", heroDescription: "Periton kanseri, karın boşluğunu kaplayan zarda (periton) gelişen nadir bir kanser türüdür.", sections: [{ title: "Periton Kanseri Nedir?", content: "Primer peritoneal kanser, karın boşluğunun iç yüzeyini kaplayan periton dokusundan kaynaklanan nadir bir kanser türüdür. Yumurtalık kanseri ile benzer özellikler taşır.\n\nYumurtalıkları alınmış kadınlarda bile gelişebilir. Tedavi yaklaşımı yumurtalık kanserine benzerdir." }, { title: "Tedavi Seçenekleri", content: "- **Sitoredüktif cerrahi**: Tümörün mümkün olduğunca tamamen çıkarılması\n- **HIPEC**: Sıcak kemoterapi uygulaması (seçilmiş vakalarda)\n- **Sistemik kemoterapi**: Platin bazlı rejimler\n- **Hedefe yönelik tedaviler**: PARP inhibitörleri" }], faqs: [{ question: "Periton kanseri tedavi edilebilir mi?", answer: "Uygun cerrahi ve kemoterapi ile tedavi edilebilir. Erken teşhis ve deneyimli cerrahi ekip tedavi başarısını artırır." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "rahim-sarkomu": { slug: "rahim-sarkomu", title: "Rahim Sarkomu Tedavisi", metaTitle: "Rahim Sarkomu Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Rahim sarkomu nedir? Belirtileri, teşhisi ve tedavi yöntemleri.", heroDescription: "Rahim sarkomu, rahmin kas veya bağ dokusundan kaynaklanan nadir görülen bir kanser türüdür.", sections: [{ title: "Rahim Sarkomu Nedir?", content: "Rahim sarkomu, rahmin kas dokusundan (miyometrium) veya bağ dokusundan kaynaklanan nadir bir malign tümördür. Tüm rahim kanserlerinin yaklaşık %3-7'sini oluşturur.\n\nTipleri:\n- **Leiomiyosarkom**: En sık görülen tip, rahim düz kas hücrelerinden gelişir\n- **Endometrial stromal sarkom**: Rahim iç tabakasının bağ dokusundan gelişir\n- **Andiferansiye rahim sarkomu**: Nadir ve agresif tip" }, { title: "Tedavi Yaklaşımı", content: "- **Cerrahi**: Total histerektomi + bilateral salpingo-ooferektomi\n- **Kemoterapi**: İleri evre veya nüks vakalarda\n- **Radyoterapi**: Seçilmiş vakalarda\n- **Hormon tedavisi**: Endometrial stromal sarkomda" }], symptoms: ["Anormal vajinal kanama", "Pelvik ağrı veya baskı hissi", "Hızla büyüyen rahim kitlesi", "Karında şişlik"], faqs: [{ question: "Rahim sarkomu miyomdan nasıl ayırt edilir?", answer: "Hızlı büyüme, menopoz sonrası büyüme ve şüpheli görüntüleme bulguları sarkomu düşündürür. Kesin tanı patolojik inceleme ile konulur." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "hpv-asilamasi": { slug: "hpv-asilamasi", title: "HPV Aşılaması", metaTitle: "HPV Aşısı Hakkında Bilgi | Doç. Dr. Erkan Elçi", metaDescription: "HPV aşısı nedir? Kimlere yapılır? HPV aşısının kanser önlemede önemi.", heroDescription: "HPV aşısı, rahim ağzı kanseri ve diğer HPV ilişkili kanserlerin önlenmesinde en etkili yöntemdir.", sections: [{ title: "HPV Aşısı Nedir?", content: "HPV aşısı, İnsan Papilloma Virüsü'nün (HPV) yüksek riskli tiplerine karşı koruma sağlayan bir aşıdır. Özellikle tip 16 ve 18 gibi kansere neden olabilen HPV tiplerine karşı etkilidir.\n\nAşı, rahim ağzı kanseri, vulva kanseri, vajina kanseri ve genital siğillerin önlenmesinde büyük rol oynar." }, { title: "HPV Aşısı Kimlere Yapılır?", content: "- **İdeal yaş aralığı**: 9-14 yaş arası kız çocuklarına\n- **Yetişkin kadınlar**: 26 yaşına kadar yapılabilir\n- **45 yaşına kadar**: Doktor değerlendirmesi ile uygulanabilir\n- **Aşı şeması**: 2 veya 3 doz halinde uygulanır\n\nAşı, cinsel aktivite başlamadan önce yapıldığında en etkilidir." }], faqs: [{ question: "HPV aşısı güvenli midir?", answer: "Evet, HPV aşısı dünya genelinde milyonlarca kişiye uygulanmış ve güvenliği kanıtlanmıştır." }, { question: "HPV aşısı olduktan sonra tarama yaptırmam gerekir mi?", answer: "Evet, aşı tüm HPV tiplerine karşı koruma sağlamadığından düzenli smear testi ve HPV taraması devam etmelidir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "hipec": { slug: "hipec", title: "HIPEC (Sıcak Kemoterapi Uygulaması)", metaTitle: "HIPEC Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "HIPEC (hipertermik intraperitoneal kemoterapi) nedir? Karın içi kanser tedavisinde sıcak kemoterapi.", heroDescription: "HIPEC, karın içine yayılmış kanserlerde cerrahi sonrası uygulanan sıcak kemoterapi yöntemidir.", sections: [{ title: "HIPEC Nedir?", content: "HIPEC (Hipertermik İntraperitoneal Kemoterapi), sitoredüktif cerrahi sonrasında karın boşluğuna ısıtılmış kemoterapi ilacının doğrudan uygulanması işlemidir.\n\nKemoterapi ilacı 41-43°C'ye ısıtılarak karın boşluğuna verilir. Isı, kemoterapi ilacının etkinliğini artırır ve kanser hücrelerini daha etkili bir şekilde yok eder." }, { title: "HIPEC Kimlere Uygulanır?", content: "- Yumurtalık kanseri (peritoneal yayılım)\n- Periton kanseri\n- Kolorektal kanser peritoneal metastazları\n- Appendiks kanseri\n- Mezotelyoma\n\nHasta seçimi kritik önem taşır ve multidisipliner yaklaşım gerektirir." }], faqs: [{ question: "HIPEC ameliyatı ne kadar sürer?", answer: "Sitoredüktif cerrahi ile birlikte toplam 6-12 saat sürebilir. HIPEC uygulaması kendisi yaklaşık 60-90 dakika sürer." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "metastatik-kanser": { slug: "metastatik-kanser", title: "Metastatik Jinekolojik Kanserlerin Tedavisi", metaTitle: "Metastatik Jinekolojik Kanser Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Metastatik jinekolojik kanserlerin tedavi yöntemleri ve yaklaşımları.", heroDescription: "Metastatik jinekolojik kanserler, başlangıç noktasından başka organlara yayılmış kanserlerdir.", sections: [{ title: "Metastatik Kanser Nedir?", content: "Metastatik kanser, orijinal (primer) tümörün bulunduğu organdan başka organlara yayılmış kanserdir. Jinekolojik kanserlerde en sık metastaz bölgeleri periton, karaciğer, akciğer ve lenf nodlarıdır.\n\nMetastatik jinekolojik kanserlerin tedavisi multidisipliner bir yaklaşım gerektirir." }, { title: "Tedavi Yaklaşımları", content: "- **Sitoredüktif cerrahi**: Mümkün olduğunca tümör dokusunun çıkarılması\n- **Kemoterapi**: Sistemik tedavi\n- **Hedefe yönelik tedavi**: Moleküler hedeflere yönelik ilaçlar\n- **İmmünoterapi**: Bağışıklık sistemini güçlendiren tedaviler\n- **HIPEC**: Seçilmiş vakalarda sıcak kemoterapi\n- **Palyatif tedavi**: Yaşam kalitesini artıran destekleyici tedaviler" }], faqs: [{ question: "Metastatik kanser tedavi edilebilir mi?", answer: "Modern tedavi yöntemleri ile birçok metastatik kanser kontrol altına alınabilir ve yaşam süresi uzatılabilir. Tedavi planı her hasta için özelleştirilir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "trofoblastik-tumorler": { slug: "trofoblastik-tumorler", title: "Trofoblastik Tümörlerin Tedavisi", metaTitle: "Gestasyonel Trofoblastik Hastalıklar | Doç. Dr. Erkan Elçi", metaDescription: "Trofoblastik tümörler (mol gebelik, koryokarsinom) teşhis ve tedavisi.", heroDescription: "Gestasyonel trofoblastik hastalıklar, gebelik dokusundan (trofoblast) kaynaklanan nadir tümörlerdir.", sections: [{ title: "Trofoblastik Hastalıklar Nedir?", content: "Gestasyonel trofoblastik hastalıklar (GTH), plasentayı oluşturan trofoblast hücrelerinden kaynaklanan bir grup hastalıktır.\n\nTipleri:\n- **Komplet mol gebelik**: Tüm gebelik dokusu anormal\n- **Parsiyel mol gebelik**: Kısmen normal, kısmen anormal doku\n- **İnvaziv mol**: Rahim duvarına invazyon gösteren mol\n- **Koryokarsinom**: Malign trofoblastik tümör\n- **Plasental site trofoblastik tümör**: Nadir tip" }, { title: "Tedavi Yöntemleri", content: "- **Vakum küretaj**: Mol gebeliğin boşaltılması\n- **Kemoterapi**: Malign trofoblastik tümörlerde\n- **Cerrahi**: Dirençli vakalarda histerektomi\n- **Beta-hCG takibi**: Tedavi sonrası düzenli hormon takibi\n\nTrofoblastik tümörler kemoterapiye çok iyi yanıt verir ve kür oranları %90-100'dür." }], faqs: [{ question: "Mol gebelik sonrası tekrar hamile kalabilir miyim?", answer: "Evet, beta-hCG değeri normale döndükten ve uygun süre beklendikten sonra sağlıklı bir gebelik mümkündür." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "nuks-kanser": { slug: "nuks-kanser", title: "Nüks Kanserlerin Tedavisi", metaTitle: "Nüks Jinekolojik Kanser Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Tekrarlayan (nüks) jinekolojik kanserlerin tedavi yöntemleri.", heroDescription: "Nüks kanser, başarılı tedavi sonrası tekrarlayan kanserdir. Modern tedavi yöntemleri ile yönetilebilir.", sections: [{ title: "Nüks Kanser Nedir?", content: "Nüks (rekürren) kanser, daha önce tedavi edilmiş bir kanserin belirli bir süre sonra tekrar ortaya çıkmasıdır. Aynı bölgede (lokal nüks) veya farklı bölgelerde (uzak nüks) görülebilir.\n\nNüks kanser tedavisi, ilk tedaviye göre farklılık gösterebilir ve multidisipliner yaklaşım gerektirir." }, { title: "Tedavi Yaklaşımları", content: "- **Sekonder sitoredüktif cerrahi**: Tekrarlayan tümörün cerrahi olarak çıkarılması\n- **İkinci sıra kemoterapi**: Farklı kemoterapi rejimleri\n- **Hedefe yönelik tedavi**: PARP inhibitörleri, anti-anjiojenik ajanlar\n- **İmmünoterapi**: Checkpoint inhibitörleri\n- **Radyoterapi**: Lokal nüks vakalarda\n- **HIPEC**: Peritoneal nüks vakalarda" }], faqs: [{ question: "Nüks kanser tedavi edilebilir mi?", answer: "Evet, birçok nüks kanser tedavi edilebilir. Tedavi planı nüksün yerine, zamanına ve hastanın genel durumuna göre kişiselleştirilir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  "meme-kanseri-taramasi": { slug: "meme-kanseri-taramasi", title: "Meme Kanseri Taraması", metaTitle: "Meme Kanseri Taraması | Doç. Dr. Erkan Elçi", metaDescription: "Meme kanseri taraması, erken teşhis yöntemleri ve risk faktörleri hakkında bilgi.", heroDescription: "Meme kanseri kadınlarda en sık görülen kanser türüdür. Düzenli tarama ile erken teşhis hayat kurtarır.", sections: [{ title: "Meme Kanseri Taraması Neden Önemlidir?", content: "Meme kanseri, kadınlarda en sık görülen kanser türüdür. Erken evrede teşhis edildiğinde tedavi başarısı %95'in üzerindedir. Bu nedenle düzenli tarama büyük önem taşır.\n\nJinekolojik muayene sırasında meme muayenesi de yapılmalı ve gerekli taramalar planlanmalıdır." }, { title: "Tarama Yöntemleri", content: "- **Kendi kendine meme muayenesi**: Ayda bir kez\n- **Klinik meme muayenesi**: Yıllık jinekolojik kontrol sırasında\n- **Mamografi**: 40 yaşından itibaren yıllık\n- **Meme ultrasonografisi**: Dens meme yapısında ek tarama\n- **Meme MR**: Yüksek riskli kadınlarda\n- **Genetik test**: BRCA1/BRCA2 mutasyon taşıyıcılarında" }], faqs: [{ question: "Meme kanseri taramasına kaç yaşında başlamalıyım?", answer: "20 yaşından itibaren kendi kendine muayene, 40 yaşından itibaren yıllık mamografi önerilir. Aile öyküsü varsa daha erken başlanabilir." }], parentSlug: "jinekolojik-onkoloji", parentTitle: "Jinekolojik Onkoloji" },

  // ===== GENİTAL ESTETİK =====
  "labioplasti": { slug: "labioplasti", title: "Labioplasti Nedir?", metaTitle: "Labioplasti Ameliyatı | Doç. Dr. Erkan Elçi", metaDescription: "Labioplasti (iç dudak estetiği) ameliyatı hakkında bilgi. Güvenli genital estetik.", heroDescription: "Labioplasti, kadın dış genital bölgesindeki iç dudakların estetik ve fonksiyonel düzeltilmesi amacıyla yapılan cerrahi bir işlemdir.", sections: [{ title: "Labioplasti Nedir?", content: "Labioplasti, labium minusların (iç dudaklar) asimetri, sarkma veya aşırı büyüklük durumlarında şekillendirilmesi amacıyla yapılan cerrahi bir işlemdir. Hem estetik hem de fonksiyonel sorunları giderir.\n\nDoğum, yaşlanma, hormonal değişiklikler veya genetik faktörler nedeniyle iç dudaklarda büyüme veya asimetri oluşabilir." }, { title: "Nasıl Yapılır?", content: "İşlem lokal veya genel anestezi altında gerçekleştirilir. Süre yaklaşık 30-60 dakikadır. İki temel teknik:\n\n- **Trim tekniği**: Fazla dokunun kenardan kesilmesi\n- **Kama (Wedge) tekniği**: V şeklinde doku çıkarılması, doğal görünümü korur\n\nİyileşme süreci genellikle 2-4 haftadır." }], faqs: [{ question: "Labioplasti ağrılı mıdır?", answer: "Anestezi altında yapıldığından ağrı hissedilmez. Ameliyat sonrası hafif rahatsızlık olabilir." }, { question: "Cinsel hayatım etkilenir mi?", answer: "Olumsuz etkilemez, aksine rahatsızlık varsa düzelme sağlar. 6 hafta sonra cinsel ilişkiye başlanabilir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "vajinal-daraltma": { slug: "vajinal-daraltma", title: "Vajinal Daraltma (Vajinoplasti)", metaTitle: "Vajinal Daraltma Ameliyatı | Doç. Dr. Erkan Elçi", metaDescription: "Vajinal daraltma (vajinoplasti) ameliyatı hakkında bilgi. Vajinal gevşeklik tedavisi.", heroDescription: "Vajinal daraltma, doğum veya yaşlanma nedeniyle gevşemiş vajinal dokuların sıkılaştırılması amacıyla yapılan cerrahi işlemdir.", sections: [{ title: "Vajinal Daraltma Nedir?", content: "Vajinoplasti, vajinal kanalın daraltılması ve çevre kasların sıkılaştırılması amacıyla yapılan cerrahi prosedürdür. Doğum sonrası vajinal gevşeklik yaşayan kadınlarda uygulanır.\n\nHem fonksiyonel hem estetik iyileşme sağlar." }, { title: "Kimler İçin Uygundur?", content: "- Normal doğum sonrası vajinal gevşeklik yaşayanlar\n- Birden fazla doğum yapmış kadınlar\n- Yaşlanmaya bağlı vajinal gevşeklik\n- İdrar kaçırma problemi olanlar\n- Cinsel memnuniyetsizlik yaşayanlar" }], faqs: [{ question: "Ameliyat ne kadar sürer?", answer: "Genellikle 1-2 saat sürer ve aynı gün taburcu olunabilir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "klitoris-estetigi": { slug: "klitoris-estetigi", title: "Klitoris Estetiği", metaTitle: "Klitoris Estetiği | Doç. Dr. Erkan Elçi", metaDescription: "Klitoris estetiği (klitoral hud redüksiyonu) hakkında bilgi.", heroDescription: "Klitoris estetiği, klitoris üzerindeki fazla deri dokusunun düzeltilmesi amacıyla yapılan cerrahi işlemdir.", sections: [{ title: "Klitoris Estetiği Nedir?", content: "Klitoral hud redüksiyonu olarak da bilinen klitoris estetiği, klitorisi örten derinin (prepusyum) fazla olduğu durumlarda bu dokunun azaltılması işlemidir.\n\nFazla deri dokusu klitorisi tamamen örtebilir, bu durum hem estetik kaygılara hem de cinsel tatminsizliğe yol açabilir." }, { title: "İşlem Nasıl Yapılır?", content: "İşlem genellikle lokal anestezi altında 30-45 dakikada tamamlanır. Klitorisi örten fazla deri dokusu dikkatli bir şekilde çıkarılır. Sıklıkla labioplasti ile birlikte uygulanır.\n\nİyileşme süreci 2-4 haftadır." }], faqs: [{ question: "Klitoris estetiği duyarlılığı etkiler mi?", answer: "Deneyimli ellerde yapıldığında duyarlılık korunur, hatta fazla deri nedeniyle azalmış duyarlılık artabilir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "monsplasti": { slug: "monsplasti", title: "Monsplasti (Venüs Tepesi Estetiği)", metaTitle: "Monsplasti Ameliyatı | Doç. Dr. Erkan Elçi", metaDescription: "Monsplasti (venüs tepesi estetiği) hakkında bilgi.", heroDescription: "Monsplasti, genital bölgenin üst kısmındaki yağ birikiminin estetik olarak düzeltilmesi işlemidir.", sections: [{ title: "Monsplasti Nedir?", content: "Monsplasti, pubis bölgesindeki (venüs tepesi/mons pubis) aşırı yağ birikiminin veya deri sarkmasının düzeltilmesi amacıyla yapılan estetik cerrahi işlemdir.\n\nKilo değişimleri, yaşlanma veya genetik faktörler nedeniyle bu bölgede belirgin yağlanma veya sarkma oluşabilir." }, { title: "İşlem Yöntemleri", content: "- **Liposakşın**: Yağ emme ile hacim azaltma\n- **Cerrahi eksizyon**: Fazla deri çıkarılması\n- **Kombine yöntem**: Hem yağ emme hem deri çıkarma\n\nİşlem genellikle lokal anestezi altında yapılır. İyileşme 2-4 haftadır." }], faqs: [{ question: "Monsplasti sonrası iz kalır mı?", answer: "Liposakşın ile yapıldığında neredeyse iz kalmaz. Deri çıkarma gerektiren vakalarda izler bikini hattında gizlenir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "perinoplasti": { slug: "perinoplasti", title: "Perinoplasti", metaTitle: "Perinoplasti Ameliyatı | Doç. Dr. Erkan Elçi", metaDescription: "Perinoplasti (perine bölgesi onarımı) hakkında bilgi.", heroDescription: "Perinoplasti, vajina ile anüs arasındaki bölgenin (perine) onarımı ve yeniden şekillendirilmesi işlemidir.", sections: [{ title: "Perinoplasti Nedir?", content: "Perinoplasti, perine bölgesinin (vajina girişi ile anüs arası) doğum sonrası oluşan hasarların veya yaşlanmaya bağlı değişikliklerin cerrahi olarak düzeltilmesidir.\n\nDoğum sırasında epizyotomi veya yırtık nedeniyle perine bölgesinde deformasyon oluşabilir." }, { title: "Kimler İçin Uygundur?", content: "- Doğum sonrası perine hasarı olanlar\n- Epizyotomi izi nedeniyle rahatsızlık yaşayanlar\n- Perine bölgesinde gevşeklik hissedenler\n- Vajinal germe ile birlikte uygulanmak istenenler" }], faqs: [{ question: "Perinoplasti vajinal germe ile birlikte yapılabilir mi?", answer: "Evet, çoğunlukla vajinoplasti ile birlikte uygulanır ve daha kapsamlı bir iyileşme sağlar." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "barbieplasti": { slug: "barbieplasti", title: "Barbieplasti (Barbie Vajina Estetiği)", metaTitle: "Barbieplasti | Doç. Dr. Erkan Elçi", metaDescription: "Barbieplasti (Barbie vajina estetiği) hakkında bilgi.", heroDescription: "Barbieplasti, dış genital bölgenin düzgün ve sade bir görünüm kazanması amacıyla yapılan kapsamlı genital estetik işlemdir.", sections: [{ title: "Barbieplasti Nedir?", content: "Barbieplasti, iç dudakların (labia minora) dış dudakların (labia majora) arasında görünmeyecek şekilde küçültülmesi işlemidir. İsim, pürüzsüz ve sade bir görünüm hedeflenmesinden gelir.\n\nGenellikle labioplasti, klitoral hud redüksiyonu ve gerekirse monsplastiyi içeren kombine bir prosedürdür." }, { title: "İşlem Detayları", content: "- Birden fazla prosedürün kombine uygulanması\n- Genellikle genel anestezi altında yapılır\n- Süre: 1-2 saat\n- İyileşme: 4-6 hafta\n- Kişiye özel planlama yapılır" }], faqs: [{ question: "Barbieplasti kalıcı mıdır?", answer: "Evet, cerrahi sonuçlar kalıcıdır. Ancak yaşlanma ve hormonal değişimler hafif değişikliklere yol açabilir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "kok-hucre-eksosom": { slug: "kok-hucre-eksosom", title: "Kök Hücre ve Eksosom Tedavisi", metaTitle: "Kök Hücre ve Eksosom Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Genital bölgede kök hücre ve eksosom tedavisi. Rejuvenasyon ve doku yenilenmesi.", heroDescription: "Kök hücre ve eksosom tedavisi, genital bölgede doku yenilenmesi ve gençleştirme amacıyla uygulanan yenilikçi bir tedavi yöntemidir.", sections: [{ title: "Kök Hücre ve Eksosom Tedavisi Nedir?", content: "Kök hücre tedavisi, vücudun kendi kök hücrelerinin genital bölgeye uygulanarak doku yenilenmesini sağlayan bir yöntemdir. Eksosom tedavisi ise hücreler arası iletişimi sağlayan nano boyuttaki veziküllerin uygulanmasıdır.\n\nBu tedaviler vajinal gevşeklik, kuruluk ve inkontinans gibi sorunlarda etkilidir." }, { title: "Uygulama Alanları", content: "- Vajinal gençleştirme (rejuvenasyon)\n- Vajinal kuruluk tedavisi\n- Hafif-orta düzeyde inkontinans\n- Cinsel fonksiyon iyileştirme\n- Liken skleroz tedavisi\n- Cerrahi sonrası iyileşmeyi hızlandırma" }], faqs: [{ question: "Kök hücre tedavisi ağrılı mıdır?", answer: "İşlem lokal anestezi altında yapılır ve genellikle ağrısızdır. İşlem sonrası günlük aktivitelere hemen dönülebilir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "prp-mezoterapi": { slug: "prp-mezoterapi", title: "PRP ve Mezoterapi", metaTitle: "Genital PRP ve Mezoterapi | Doç. Dr. Erkan Elçi", metaDescription: "Genital bölgede PRP ve mezoterapi uygulamaları.", heroDescription: "PRP ve mezoterapi, genital bölgede doku yenilenmesi ve gençleştirme amacıyla uygulanan non-invaziv tedavi yöntemleridir.", sections: [{ title: "Genital PRP Nedir?", content: "PRP (Platelet Rich Plasma - Trombositten Zengin Plazma), hastanın kendi kanından elde edilen büyüme faktörlerinin genital bölgeye enjekte edilmesidir.\n\nO-Shot (Orgasm Shot) olarak da bilinen bu uygulama, cinsel fonksiyonu iyileştirmek ve doku yenilenmesini sağlamak amacıyla kullanılır." }, { title: "Uygulama Alanları", content: "- Vajinal gençleştirme\n- Cinsel istek ve tatmin artırma\n- Vajinal kuruluk tedavisi\n- Hafif inkontinans\n- Vulvar liken skleroz\n- Mezoterapi ile birlikte kombine tedaviler" }], faqs: [{ question: "PRP tedavisi kaç seans gerektirir?", answer: "Genellikle 3-4 seans, 4-6 hafta arayla uygulanır. Sonuçlar kademeli olarak ortaya çıkar." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "yag-injeksiyonu": { slug: "yag-injeksiyonu", title: "Yağ İnjeksiyonu", metaTitle: "Genital Yağ İnjeksiyonu | Doç. Dr. Erkan Elçi", metaDescription: "Genital bölgede yağ injeksiyonu uygulamaları.", heroDescription: "Yağ injeksiyonu, genital bölgede hacim kazandırma ve şekillendirme amacıyla uygulanan doğal bir dolgu yöntemidir.", sections: [{ title: "Genital Yağ İnjeksiyonu Nedir?", content: "Genital yağ injeksiyonu, hastanın kendi vücudundan (karın, kalça vb.) alınan yağ dokusunun işlenerek genital bölgeye enjekte edilmesidir. Doğal bir dolgu maddesi olduğu için alerji riski yoktur.\n\nÖzellikle labia majora'da (dış dudaklar) hacim kaybı olan kadınlarda ve G-noktası büyütme amacıyla uygulanır." }, { title: "Uygulama Alanları", content: "- Labia majora dolgunlaştırma\n- G-noktası büyütme\n- Vajinal gençleştirme\n- Deri altı hacim artırma\n- Asimetri düzeltme" }], faqs: [{ question: "Yağ injeksiyonu kalıcı mıdır?", answer: "Enjekte edilen yağın yaklaşık %50-70'i kalıcıdır. Gerekirse 6 ay sonra tekrar uygulanabilir." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  "orgazm-asisi": { slug: "orgazm-asisi", title: "Orgazm Aşısı (O-Shot)", metaTitle: "Orgazm Aşısı (O-Shot) | Doç. Dr. Erkan Elçi", metaDescription: "Orgazm aşısı (O-Shot) hakkında bilgi. Cinsel fonksiyonu iyileştiren PRP uygulaması.", heroDescription: "Orgazm aşısı (O-Shot), kadınlarda cinsel fonksiyonu ve memnuniyeti artırmak amacıyla uygulanan PRP bazlı bir tedavidir.", sections: [{ title: "Orgazm Aşısı Nedir?", content: "O-Shot (Orgasm Shot) veya orgazm aşısı, hastanın kendi kanından elde edilen PRP'nin (Trombositten Zengin Plazma) klitoral bölge ve vajinal duvara enjekte edilmesidir.\n\nBüyüme faktörleri sayesinde bölgesel kan akımı artar, sinir uçları canlanır ve doku yenilenmesi sağlanır." }, { title: "Faydaları", content: "- Cinsel istek ve uyarılma artışı\n- Orgazm yoğunluğunda artış\n- Vajinal kuruluk azalması\n- Hafif stres inkontinansında iyileşme\n- Ağrılı cinsel ilişkide (disparoni) düzelme\n\nİşlem yaklaşık 30 dakika sürer ve anestezi ile ağrısız şekilde uygulanır." }], faqs: [{ question: "O-Shot sonuçları ne zaman görülür?", answer: "İlk etkiler 1-2 hafta içinde hissedilir, tam etki 4-8 hafta içinde ortaya çıkar." }], parentSlug: "genital-estetik", parentTitle: "Genital Estetik" },

  // ===== HPV / KOLPOSKOPİ =====
  "hpv-kolposkopi": {
    slug: "hpv-kolposkopi",
    title: "HPV ve Kolposkopi",
    metaTitle: "HPV Tedavisi ve Kolposkopi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "HPV (İnsan Papilloma Virüsü) teşhisi, tedavisi ve kolposkopi hakkında bilgi. HPV aşısı ve tarama.",
    heroDescription:
      "HPV (İnsan Papilloma Virüsü), cinsel yolla bulaşan en yaygın virüstür. Kolposkopi, rahim ağzı değişikliklerinin detaylı incelenmesini sağlayan önemli bir tanı yöntemidir.",
    sections: [
      {
        title: "HPV Nedir?",
        content:
          "HPV (İnsan Papilloma Virüsü), 200'den fazla tipi bulunan bir virüs ailesidir. Cinsel yolla bulaşır ve kadınların yaklaşık %80'i yaşamlarının bir döneminde HPV ile enfekte olur. HPV tipleri düşük riskli ve yüksek riskli olarak ikiye ayrılır:\n\n- **Düşük riskli HPV tipleri** (tip 6, 11): Genital siğillere neden olur\n- **Yüksek riskli HPV tipleri** (tip 16, 18): Rahim ağzı kanserine neden olabilir\n\nÇoğu HPV enfeksiyonu bağışıklık sistemi tarafından 1-2 yıl içinde temizlenir. Ancak kalıcı yüksek riskli HPV enfeksiyonu kanser riskini artırır.",
      },
      {
        title: "Kolposkopi Nedir?",
        content:
          "Kolposkopi, özel bir büyüteç (kolposkop) kullanılarak rahim ağzının detaylı incelenmesidir. Smear testinde anormallik saptandığında veya HPV pozitifliğinde uygulanır.\n\nKolposkopi sırasında:\n- Rahim ağzı özel solüsyonlarla boyanır\n- Anormal alanlar tespit edilir\n- Gerekirse biyopsi alınır\n- İşlem ağrısız ve kısa sürelidir",
      },
      {
        title: "HPV Tedavisi ve Korunma",
        content:
          "- **HPV Aşısı**: En etkili korunma yöntemidir. 9-26 yaş arasında önerilir\n- **Düzenli tarama**: Smear testi ve HPV testi ile düzenli kontrol\n- **Genital siğil tedavisi**: Kriyoterapi, lazer, elektrokoter\n- **Prekanseröz lezyonlar**: LEEP, konizasyon\n- **Bağışıklık güçlendirme**: Sağlıklı yaşam tarzı",
      },
    ],
    faqs: [
      {
        question: "HPV bulaşıcı mıdır?",
        answer:
          "Evet, HPV cinsel temas yoluyla bulaşır. Kondom kullanımı riski azaltır ancak tamamen önlemez.",
      },
      {
        question: "HPV pozitif çıktım, kanser mi olacağım?",
        answer:
          "HPV pozitifliği kanser demek değildir. Çoğu HPV enfeksiyonu kendiliğinden iyileşir. Düzenli takip ile riskiniz kontrol altında tutulur.",
      },
      {
        question: "Kolposkopi ağrılı mıdır?",
        answer:
          "Kolposkopi genellikle ağrısız bir işlemdir. Biyopsi alınması durumunda hafif bir rahatsızlık hissedilebilir.",
      },
    ],
  },

  // ===== HPV ALT SAYFALAR =====
  "cin-siniflandirmasi": { slug: "cin-siniflandirmasi", title: "CIN Sınıflandırması", metaTitle: "CIN Sınıflandırması | Doç. Dr. Erkan Elçi", metaDescription: "CIN (Servikal İntraepitelyal Neoplazi) sınıflandırması ve tedavi yaklaşımları.", heroDescription: "CIN, rahim ağzında kanser öncesi hücre değişikliklerinin sınıflandırma sistemidir.", sections: [{ title: "CIN Nedir?", content: "CIN (Servikal İntraepitelyal Neoplazi), rahim ağzında kanser öncesi (prekanseröz) hücre değişikliklerini tanımlayan bir sınıflandırma sistemidir.\n\nCIN dereceleri:\n- **CIN 1 (Düşük dereceli)**: Hafif displazi, genellikle kendiliğinden iyileşir\n- **CIN 2 (Orta dereceli)**: Orta displazi, tedavi gerektirebilir\n- **CIN 3 (Yüksek dereceli)**: Ağır displazi veya karsinoma in situ, tedavi gerektirir\n\nCIN kanser değildir ancak tedavi edilmezse yıllar içinde kansere dönüşebilir." }, { title: "Tedavi Yaklaşımı", content: "- **CIN 1**: Takip (çoğu kendiliğinden geriler)\n- **CIN 2-3**: LEEP (Loop Elektrocerrahi Eksizyon Prosedürü), konizasyon veya kriyoterapi\n- **Düzenli takip**: Tedavi sonrası smear ve HPV testi ile kontrol" }], faqs: [{ question: "CIN 1 tedavi gerektirir mi?", answer: "Genellikle takip yeterlidir çünkü vakaların %60-70'i 1-2 yıl içinde kendiliğinden geriler. Ancak düzenli kontrol şarttır." }], parentSlug: "hpv-kolposkopi", parentTitle: "HPV / Kolposkopi" },

  "hsil": { slug: "hsil", title: "HSIL (Yüksek Dereceli Skuamöz İntraepitelyal Lezyon)", metaTitle: "HSIL Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "HSIL nedir? Yüksek dereceli servikal lezyon teşhis ve tedavisi.", heroDescription: "HSIL, rahim ağzında yüksek dereceli prekanseröz değişiklikleri ifade eden bir sitolojik tanıdır.", sections: [{ title: "HSIL Nedir?", content: "HSIL (High-grade Squamous Intraepithelial Lesion), smear testinde saptanan yüksek dereceli hücre değişikliklerini ifade eder. CIN 2 ve CIN 3'e karşılık gelir.\n\nHSIL, tedavi edilmezse rahim ağzı kanserine ilerleme riski taşır. Bu nedenle aktif tedavi gerektirir." }, { title: "Tedavi", content: "- **Kolposkopi ve biyopsi**: Lezyonun değerlendirilmesi\n- **LEEP**: En sık uygulanan tedavi yöntemi\n- **Konizasyon**: Daha geniş doku çıkarılması\n- **Lazer ablasyon**: Seçilmiş vakalarda\n- **Histerektomi**: Çocuk istemeyen, tekrarlayan vakalarda" }], faqs: [{ question: "HSIL kanser midir?", answer: "Hayır, HSIL kanser değildir ancak kanser öncesi bir durumdur. Tedavi ile kansere ilerleme önlenir." }], parentSlug: "hpv-kolposkopi", parentTitle: "HPV / Kolposkopi" },

  "lsil": { slug: "lsil", title: "LSIL (Düşük Dereceli Skuamöz İntraepitelyal Lezyon)", metaTitle: "LSIL Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "LSIL nedir? Düşük dereceli servikal lezyon takip ve tedavisi.", heroDescription: "LSIL, rahim ağzında düşük dereceli hücre değişikliklerini ifade eden bir sitolojik bulgudur.", sections: [{ title: "LSIL Nedir?", content: "LSIL (Low-grade Squamous Intraepithelial Lesion), smear testinde saptanan düşük dereceli hücre değişiklikleridir. Genellikle HPV enfeksiyonunun yol açtığı geçici değişikliklerdir.\n\nLSIL vakalarının büyük çoğunluğu 1-2 yıl içinde kendiliğinden iyileşir. Ancak düzenli takip gereklidir." }, { title: "Yaklaşım", content: "- **Takip**: 6-12 ay sonra smear testi tekrarı\n- **Kolposkopi**: Gerekli görülürse detaylı inceleme\n- **HPV testi**: Yüksek riskli HPV tiplerinin araştırılması\n- **Tedavi**: Persiste eden vakalarda LEEP veya kriyoterapi" }], faqs: [{ question: "LSIL tehlikeli midir?", answer: "Genellikle tehlikeli değildir ve çoğu vaka kendiliğinden düzelir. Ancak düzenli takip ile HSIL'e ilerleme riski kontrol altında tutulmalıdır." }], parentSlug: "hpv-kolposkopi", parentTitle: "HPV / Kolposkopi" },

  "genital-sigil": { slug: "genital-sigil", title: "Genital Siğil (Kondilom)", metaTitle: "Genital Siğil Tedavisi | Doç. Dr. Erkan Elçi", metaDescription: "Genital siğil (kondilom) nedenleri, belirtileri ve tedavi yöntemleri.", heroDescription: "Genital siğil (kondilom), HPV'nin düşük riskli tipleri (tip 6 ve 11) tarafından oluşturulan deri ve mukoza lezyonlarıdır.", sections: [{ title: "Genital Siğil Nedir?", content: "Genital siğiller (kondiloma akuminata), HPV'nin özellikle tip 6 ve 11 tarafından oluşturulan iyi huylu lezyonlardır. Cinsel yolla bulaşır ve genital bölgede siğil benzeri çıkıntılar oluşturur.\n\nHem kadın hem erkeklerde görülebilir. Kendiliğinden gerileme mümkündür ancak tedavi genellikle gereklidir." }, { title: "Tedavi Yöntemleri", content: "- **Topikal tedaviler**: İmiquimod krem, podofillotoksin\n- **Kriyoterapi**: Sıvı nitrojen ile dondurma\n- **Elektrokoter**: Elektrik ile yakma\n- **Lazer tedavisi**: CO2 lazer ile buharlaştırma\n- **Cerrahi eksizyon**: Büyük lezyonlarda\n- **TCA (Triklorasetik asit)**: Kimyasal yakma" }], faqs: [{ question: "Genital siğil tekrar eder mi?", answer: "Evet, tedavi sonrası tekrarlama olasılığı %20-30'dur. HPV virüsü vücutta kalabilir ve tekrar aktivasyon gösterebilir." }], parentSlug: "hpv-kolposkopi", parentTitle: "HPV / Kolposkopi" },

  // ===== ENDOMETRİOZİS =====
  "belirtileri-tedavi": { slug: "belirtileri-tedavi", title: "Endometriozis Belirtileri ve Tedavi Yöntemleri", metaTitle: "Endometriozis Belirtileri ve 5 Tedavi Yöntemi | Doç. Dr. Erkan Elçi", metaDescription: "Endometriozis belirtileri nelerdir? 5 etkili tedavi yöntemi hakkında bilgi.", heroDescription: "Endometriozis, kadınların %10-15'inde görülen kronik bir hastalıktır. Doğru tanı ve tedavi ile yaşam kalitesi önemli ölçüde artırılabilir.", sections: [{ title: "Endometriozis Belirtileri", content: "Endometriozis belirtileri hastadan hastaya değişir. En yaygın belirtiler:\n\n- **Şiddetli adet ağrısı (Dismenore)**: Normal ağrı kesicilerle geçmeyen adet ağrısı\n- **Kronik pelvik ağrı**: Adet dışında da süren karın alt bölgesi ağrısı\n- **Ağrılı cinsel ilişki (Disparoni)**: Özellikle derin penetrasyonda ağrı\n- **Kısırlık**: Endometriozisli kadınların %30-50'sinde kısırlık görülür\n- **Bağırsak ve mesane semptomları**: Adet döneminde ishal, kabızlık, ağrılı idrar" }, { title: "5 Etkili Tedavi Yöntemi", content: "1. **Ağrı Yönetimi**: NSAID grubu ağrı kesiciler, sıcak uygulama\n2. **Hormonal Tedavi**: Doğum kontrol hapı, progesteron, GnRH analogları\n3. **Laparoskopik Cerrahi**: Endometriozis odaklarının temizlenmesi\n4. **Robotik Cerrahi**: İleri evre vakalarda hassas cerrahi\n5. **Fertilite Tedavisi**: Kısırlık durumunda yardımcı üreme teknikleri" }], symptoms: ["Şiddetli adet ağrısı", "Kronik pelvik ağrı", "Ağrılı cinsel ilişki", "Kısırlık", "Ağrılı idrar yapma", "Ağrılı dışkılama", "Aşırı adet kanaması", "Yorgunluk"], faqs: [{ question: "Endometriozis tedavisi ne kadar sürer?", answer: "Endometriozis kronik bir hastalık olduğundan tedavi süresi değişkendir. Hormonal tedavi uzun süreli olabilir, cerrahi tedavi ise tek seferde yapılır." }], parentSlug: "endometriozis", parentTitle: "Endometriozis" },

  "bas-etme-yollari": { slug: "bas-etme-yollari", title: "Endometriozis ile Baş Etmenin Yolları", metaTitle: "Endometriozis ile Baş Etme Yolları | Doç. Dr. Erkan Elçi", metaDescription: "Endometriozis ile yaşam. Günlük hayatta baş etme yöntemleri ve yaşam kalitesini artırma.", heroDescription: "Endometriozis kronik bir hastalıktır ancak doğru yaklaşımlarla yaşam kalitesi önemli ölçüde artırılabilir.", sections: [{ title: "Endometriozis ile Yaşam", content: "Endometriozis kronik bir hastalık olsa da uygun tedavi ve yaşam tarzı değişiklikleri ile semptomlar kontrol altına alınabilir:\n\n- **Düzenli egzersiz**: Ağrıyı azaltır, endorfin salınımını artırır\n- **Sağlıklı beslenme**: Anti-inflamatuar diyet, omega-3 zengin gıdalar\n- **Stres yönetimi**: Yoga, meditasyon, nefes egzersizleri\n- **Uyku düzeni**: Yeterli ve kaliteli uyku\n- **Destek grupları**: Benzer deneyimleri paylaşan hastalarla iletişim" }, { title: "Tıbbi Destek", content: "- Düzenli doktor kontrolü\n- Ağrı yönetim planı\n- Hormonal tedavi uyumu\n- Psikolojik destek gerektiğinde\n- Fertilite planlaması için erken danışmanlık" }], faqs: [{ question: "Endometriozis diyetle kontrol edilebilir mi?", answer: "Diyet tek başına tedavi değildir ancak anti-inflamatuar diyet semptomları hafifletebilir. Tıbbi tedavi ile birlikte uygulanmalıdır." }], parentSlug: "endometriozis", parentTitle: "Endometriozis" },

  "endometriozis-nedir": {
    slug: "endometriozis-nedir",
    title: "Endometriozis Nedir?",
    metaTitle: "Endometriozis Nedir? Belirtileri ve Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Endometriozis hastalığı nedir? Belirtileri, nedenleri ve modern tedavi yöntemleri hakkında bilgi.",
    heroDescription:
      "Endometriozis, rahim iç tabakasını oluşturan dokunun (endometrium) rahim dışında büyümesi ile karakterize kronik bir hastalıktır.",
    sections: [
      {
        title: "Endometriozis Nedir?",
        content:
          "Endometriozis, normalde rahmin iç yüzeyini döşeyen endometrium dokusunun, rahmin dışındaki bölgelerde (yumurtalıklar, tüpler, periton, bağırsak vb.) yerleşip büyümesi ile ortaya çıkan kronik bir hastalıktır.\n\nÜreme çağındaki kadınların yaklaşık %10-15'inde görülür. Ağrı ve kısırlığın en önemli nedenlerinden biridir.\n\nEndometriozis dokusu, rahim içindeki doku gibi her adet döneminde kanar ancak bu kan vücuttan atılamaz. Bu durum iltihaplanma, yapışıklık ve kist oluşumuna yol açar.",
      },
      {
        title: "Endometriozis Tedavisi",
        content:
          "Tedavi, hastanın yaşına, semptomlarının şiddetine ve gebelik planlarına göre kişiselleştirilir:\n\n- **İlaç tedavisi**: Ağrı kesiciler, hormonal tedaviler (doğum kontrol hapı, progestin, GnRH analogları)\n- **Laparoskopik cerrahi**: Endometriozis odaklarının ve yapışıklıkların temizlenmesi\n- **Robotik cerrahi**: İleri evre endometrioziste hassas cerrahi\n- **Fertilite tedavisi**: Kısırlık durumunda yardımcı üreme teknikleri\n\nDoç. Dr. Erkan Elçi, ileri laparoskopik cerrahi deneyimi ile endometriozis tedavisinde uzmanlaşmıştır.",
      },
    ],
    symptoms: [
      "Şiddetli adet ağrısı (dismenore)",
      "Kronik pelvik ağrı",
      "Ağrılı cinsel ilişki (disparoni)",
      "Kısırlık",
      "Ağrılı idrar yapma",
      "Ağrılı dışkılama",
      "Adet döneminde ishal veya kabızlık",
      "Aşırı adet kanaması",
      "Yorgunluk",
    ],
    faqs: [
      {
        question: "Endometriozis kısırlığa neden olur mu?",
        answer:
          "Endometriozis kadınlarda kısırlığın en önemli nedenlerinden biridir. Ancak tedavi ile gebelik mümkündür.",
      },
      {
        question: "Endometriozis tamamen iyileşir mi?",
        answer:
          "Endometriozis kronik bir hastalıktır ve tam iyileşme garanti edilemez. Ancak uygun tedavi ile semptomlar kontrol altına alınabilir ve yaşam kalitesi önemli ölçüde artırılabilir.",
      },
    ],
    parentSlug: "endometriozis",
    parentTitle: "Endometriozis",
  },

  "cikolata-kisti": {
    slug: "cikolata-kisti",
    title: "Çikolata Kisti (Endometrioma)",
    metaTitle: "Çikolata Kisti Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Çikolata kisti (endometrioma) nedir? Belirtileri, tedavisi ve ameliyat yöntemleri hakkında bilgi.",
    heroDescription:
      "Çikolata kisti (endometrioma), endometriozis hastalığının yumurtalıklarda oluşturduğu, içi koyu kahverengi kanla dolu kistlerdir.",
    sections: [
      {
        title: "Çikolata Kisti Nedir?",
        content:
          "Çikolata kisti (endometrioma), endometriozis dokusunun yumurtalıklara yerleşmesi sonucu oluşan kistlerdir. İçlerinde biriken eski kan, çikolata renginde koyu kahverengi bir görüntü oluşturur, bu nedenle 'çikolata kisti' olarak adlandırılır.\n\nÇikolata kistleri tek veya çift taraflı olabilir. Boyutları birkaç santimetreden 10 cm'nin üzerine kadar çıkabilir.",
      },
      {
        title: "Çikolata Kisti Tedavisi",
        content:
          "Tedavi, kistin boyutu, hastanın yaşı ve gebelik planlarına göre belirlenir:\n\n- **Takip**: Küçük (<3 cm) ve semptomsuz kistlerde düzenli ultrason takibi\n- **İlaç tedavisi**: Hormonal tedaviler ile kistin büyümesinin engellenmesi\n- **Laparoskopik cerrahi (Kistektomi)**: Kistin yumurtalık korunarak çıkarılması\n- **Robotik cerrahi**: Hassas kist çıkarma ve yumurtalık koruma\n\n**Kistektomi Nedir?**\nKistektomi, yumurtalık üzerinde oluşan kistin (çikolata kisti, dermoid kist vb.) yumurtalık dokusu korunarak cerrahi olarak çıkarılması işlemidir. Laparoskopik veya robotik yöntemle gerçekleştirilen kistektomide amaç, sağlıklı yumurtalık dokusunu maksimum düzeyde koruyarak kistin tamamını temizlemektir. Bu sayede hastanın yumurtalık rezervi ve doğurganlık kapasitesi korunmuş olur.\n\nDoç. Dr. Erkan Elçi, kistektomi (kist çıkarma) ameliyatlarında uzmanlaşmıştır.",
      },
    ],
    symptoms: [
      "Pelvik ağrı",
      "Ağrılı adet dönemleri",
      "Ağrılı cinsel ilişki",
      "Kısırlık",
      "Düzensiz adet kanaması",
    ],
    faqs: [
      {
        question: "Çikolata kisti ameliyat edilmeli mi?",
        answer:
          "4 cm üzeri kistlerde, ağrı ve kısırlık durumunda veya büyüme gösteren kistlerde ameliyat önerilir.",
      },
      {
        question: "Çikolata kisti ameliyatı sonrası hamile kalabilir miyim?",
        answer:
          "Evet, başarılı bir kistektomi sonrası hamile kalma şansınız artar. Ameliyat yumurtalık koruyucu şekilde yapılır.",
      },
    ],
    parentSlug: "endometriozis",
    parentTitle: "Endometriozis",
  },

  // ===== EK UZMANLIK ALANLARI =====
  "robotik-cerrahi": {
    slug: "robotik-cerrahi",
    title: "Robotik Cerrahi",
    metaTitle: "Robotik Cerrahi | Doç. Dr. Erkan Elçi - İstanbul",
    metaDescription:
      "Jinekolojide robotik cerrahi uygulamaları. Da Vinci robotik cerrahi sistemi ile minimal invaziv ameliyatlar.",
    heroDescription:
      "Robotik cerrahi, cerrahın robot kolları aracılığıyla gerçekleştirdiği, en ileri minimal invaziv cerrahi teknolojidir.",
    sections: [
      {
        title: "Robotik Cerrahi Nedir?",
        content:
          "Robotik cerrahi, cerrahın bir konsol aracılığıyla robot kollarını kontrol ederek gerçekleştirdiği minimal invaziv cerrahi yöntemidir. Da Vinci cerrahi sistemi dünyada en yaygın kullanılan robotik cerrahi platformudur.\n\nRobotik cerrahi, cerrahın ellerinin hareketlerini daha hassas ve titremesiz bir şekilde ameliyat alanına aktarır. 3D yüksek çözünürlüklü görüntüleme ve 540 dereceye kadar dönebilen aletler sayesinde geleneksel cerrahiye göre çok daha hassas operasyonlar yapılabilir.",
      },
      {
        title: "Jinekolojide Robotik Cerrahi Uygulamaları",
        content:
          "Doç. Dr. Erkan Elçi'nin robotik cerrahi uyguladığı jinekolojik durumlar:\n\n- **Miyomektomi**: Miyomların robotik cerrahi ile çıkarılması\n- **Histerektomi**: Rahim alınması ameliyatı\n- **Endometriozis cerrahisi**: İleri evre endometriozis tedavisi\n- **Jinekolojik kanser cerrahisi**: Rahim, yumurtalık ve rahim ağzı kanseri ameliyatları\n- **Sakrokolpopeksi**: Pelvik taban onarımı\n- **Tubal reanastomoz**: Tüplerin yeniden birleştirilmesi",
      },
      {
        title: "Robotik Cerrahinin Avantajları",
        content:
          "- Daha küçük kesiler (8-12 mm)\n- Daha az ağrı ve kanama\n- Daha düşük enfeksiyon riski\n- Kısa hastane yatış süresi (genellikle 1 gece)\n- Hızlı iyileşme ve işe dönüş\n- Daha az yapışıklık oluşumu\n- 3D görüntüleme ile yüksek hassasiyet\n- Daha iyi kozmetik sonuç",
      },
    ],
    faqs: [
      {
        question: "Robotik cerrahi güvenli midir?",
        answer:
          "Evet, robotik cerrahi deneyimli cerrahlar tarafından uygulandığında çok güvenli bir yöntemdir. Komplikasyon oranları açık cerrahiye kıyasla düşüktür.",
      },
      {
        question: "Robotik cerrahi her hasta için uygun mudur?",
        answer:
          "Her hasta için en uygun cerrahi yöntem, hastalığın türü, evresi ve hastanın genel sağlık durumuna göre belirlenir. Detaylı değerlendirme sonrası karar verilir.",
      },
    ],
  },

  "kisirlik-tedavisi": {
    slug: "kisirlik-tedavisi",
    title: "Kısırlık (İnfertilite) Tedavisi",
    metaTitle: "Kısırlık Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Kadın kısırlığı (infertilite) nedenleri, teşhisi ve tedavi yöntemleri. Cerrahi ve tıbbi tedavi seçenekleri.",
    heroDescription:
      "Kısırlık (infertilite), düzenli ve korunmasız cinsel ilişkiye rağmen 1 yıl içinde gebeliğin oluşmaması durumudur.",
    sections: [
      {
        title: "Kısırlık Nedir?",
        content:
          "İnfertilite (kısırlık), bir çiftin düzenli ve korunmasız cinsel ilişkiye rağmen 12 ay içinde (35 yaş üstü kadınlarda 6 ay) gebelik elde edememesi durumudur. Çiftlerin yaklaşık %15'i infertilite problemi ile karşılaşır.\n\nKısırlık nedenleri kadın, erkek veya her iki taraftan kaynaklanabilir. Kadın kaynaklı nedenler tüm vakaların yaklaşık %40'ını oluşturur.",
      },
      {
        title: "Kadın Kısırlığının Nedenleri",
        content:
          "- **Ovülasyon bozuklukları**: PCOS, erken yumurtalık yetmezliği\n- **Tüp faktörü**: Tüp tıkanıklığı, yapışıklıklar\n- **Endometriozis**: Endometriozis kaynaklı kısırlık\n- **Uterin faktör**: Miyomlar, polipler, septum\n- **Yaş faktörü**: 35 yaş sonrası yumurta kalitesinde düşüş\n- **Açıklanamayan kısırlık**: Tüm testlerin normal çıktığı durumlar",
      },
      {
        title: "Kısırlık Tedavi Yöntemleri",
        content:
          "Doç. Dr. Erkan Elçi'nin uyguladığı kısırlık tedavi yaklaşımları:\n\n- **Cerrahi tedavi**: Miyomektomi, polipektomi, tüp açma ameliyatı, endometriozis cerrahisi\n- **Histeroskopi**: Rahim içi patolojilerin teşhis ve tedavisi\n- **Laparoskopik cerrahi**: Yapışıklık giderme, kist çıkarma, tüp tamiri\n- **Ovülasyon indüksiyonu**: İlaçla yumurtlama uyarımı\n- **IUI yönlendirmesi**: Uygun hastalarda intrauterin inseminasyon\n- **IVF yönlendirmesi**: Gerekli vakalarda tüp bebek merkezi yönlendirmesi",
      },
    ],
    faqs: [
      {
        question: "Ne zaman doktora başvurmalıyım?",
        answer:
          "35 yaş altında 1 yıl, 35 yaş üstünde 6 ay korunmasız ilişkiye rağmen gebelik oluşmazsa doktora başvurulmalıdır.",
      },
      {
        question: "Kısırlık tedavisi ne kadar sürer?",
        answer:
          "Tedavi süresi altta yatan nedene göre değişir. Bazı cerrahi tedaviler sonrası hemen gebelik şansı oluşurken, bazı durumlarda süreç birkaç ay sürebilir.",
      },
    ],
  },

  "yuksek-riskli-gebelikler": {
    slug: "yuksek-riskli-gebelikler",
    title: "Yüksek Riskli Gebelikler",
    metaTitle: "Yüksek Riskli Gebelik Takibi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Yüksek riskli gebelik nedir? Risk faktörleri, takip ve tedavi yöntemleri. Uzman perinatoloji yaklaşımı.",
    heroDescription:
      "Yüksek riskli gebelik, anne veya bebeğin sağlığını tehdit eden durumların eşlik ettiği gebeliklerdir.",
    sections: [
      {
        title: "Yüksek Riskli Gebelik Nedir?",
        content:
          "Yüksek riskli gebelik, annenin veya bebeğin sağlığını olumsuz etkileyebilecek tıbbi, obstetrik veya sosyal faktörlerin mevcut olduğu gebeliklerdir. Bu gebeliklerde yakın takip ve uzman yönetimi büyük önem taşır.\n\nDoç. Dr. Erkan Elçi, 23 yıllık deneyimi ile yüksek riskli gebeliklerin takibi ve yönetiminde uzmanlaşmıştır.",
      },
      {
        title: "Yüksek Riskli Gebelik Nedenleri",
        content:
          "- **Anne yaşı**: 35 yaş üstü veya 18 yaş altı\n- **Kronik hastalıklar**: Diyabet, hipertansiyon, tiroid hastalıkları\n- **Gebeliğe bağlı hipertansiyon (Preeklampsi)**\n- **Gestasyonel diyabet**\n- **Çoğul gebelik**: İkiz, üçüz gebelikler\n- **Plasenta previa**: Plasentanın rahim ağzını kapatması\n- **Erken doğum riski**\n- **Rh uyuşmazlığı**\n- **Önceki gebelik komplikasyonları**",
      },
      {
        title: "Yüksek Riskli Gebelik Takibi",
        content:
          "Yüksek riskli gebeliklerde standart gebelik takibine ek olarak:\n\n- Daha sık kontrol muayeneleri\n- Detaylı ultrason takipleri\n- NST (Non-Stres Test) ile bebek kalp atışı takibi\n- Biyofizik profil değerlendirmesi\n- Kan testleri ile metabolik takip\n- Gerekli durumlarda hospitalizasyon\n- Doğum zamanı ve şekli planlaması",
      },
    ],
    faqs: [
      {
        question: "Yüksek riskli gebeliğim var, normal doğum yapabilir miyim?",
        answer:
          "Risk faktörünün türüne ve şiddetine bağlıdır. Her vaka özel olarak değerlendirilir ve en güvenli doğum şekli planlanır.",
      },
      {
        question: "Gestasyonel diyabet nedir?",
        answer:
          "Gebelikte ortaya çıkan şeker hastalığıdır. Genellikle doğum sonrası düzelir ancak ilerleyen yıllarda tip 2 diyabet riski artar. Diyet, egzersiz ve gerekirse insülin ile tedavi edilir.",
      },
    ],
  },

  "ileri-laparoskopik-cerrahi": {
    slug: "ileri-laparoskopik-cerrahi",
    title: "İleri Laparoskopik Cerrahi",
    metaTitle: "İleri Laparoskopik Cerrahi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Jinekolojide ileri laparoskopik cerrahi uygulamaları. Minimal invaziv cerrahi ile tedavi İstanbul.",
    heroDescription:
      "İleri laparoskopik cerrahi, karında küçük kesiler aracılığıyla kamera ve özel aletler kullanılarak gerçekleştirilen minimal invaziv cerrahi yöntemidir.",
    sections: [
      {
        title: "İleri Laparoskopik Cerrahi Nedir?",
        content:
          "Laparoskopik cerrahi, karında 5-10 mm'lik küçük kesilerden kamera (laparoskop) ve cerrahi aletler yerleştirilerek gerçekleştirilen minimal invaziv cerrahi yöntemidir. İleri laparoskopik cerrahi, daha karmaşık ve teknik açıdan zorlayıcı operasyonları kapsar.\n\nDoç. Dr. Erkan Elçi, ileri laparoskopik cerrahi alanında geniş deneyime sahiptir.",
      },
      {
        title: "Jinekolojide Laparoskopik Cerrahi Uygulamaları",
        content:
          "- **Miyomektomi**: Miyomların laparoskopik olarak çıkarılması\n- **Kistektomi**: Yumurtalık kistlerinin çıkarılması\n- **Histerektomi**: Laparoskopik rahim alınması\n- **Endometriozis cerrahisi**: Endometriozis odaklarının temizlenmesi\n- **Tüp cerrahisi**: Ektopik gebelik, tüp bağlama, tüp açma\n- **Yapışıklık giderme**: Adeziyolizis\n- **Pelvik taban onarımı**: Laparoskopik sakrokolpopeksi\n- **Lenf nodu diseksiyonu**: Kanser cerrahisinde",
      },
      {
        title: "Laparoskopik Cerrahinin Avantajları",
        content:
          "- Daha küçük kesiler ve daha az iz\n- Daha az ağrı\n- Daha az kanama\n- Kısa hastane yatış süresi\n- Hızlı iyileşme\n- Düşük enfeksiyon riski\n- Daha erken işe ve günlük yaşama dönüş\n- Yapışıklık riskinde azalma",
      },
    ],
    faqs: [
      {
        question: "Laparoskopik cerrahi her hasta için uygun mudur?",
        answer:
          "Çoğu jinekolojik cerrahi laparoskopik olarak yapılabilir. Ancak bazı durumlarda açık cerrahiye geçiş gerekebilir. Her hasta özel olarak değerlendirilir.",
      },
      {
        question: "Laparoskopik ameliyat sonrası ne zaman işe dönebilirim?",
        answer:
          "Ameliyatın kapsamına bağlı olarak genellikle 1-2 hafta içinde işe dönülebilir.",
      },
    ],
  },

  // ===== YENİ MİYOM GİRİŞLERİ =====
  "dikissiz-miyom-ameliyati": {
    slug: "dikissiz-miyom-ameliyati",
    title: "Kesik ve Dikiş İzi Olmadan Miyom Ameliyatı",
    metaTitle: "Dikişsiz Miyom Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Kesik ve dikiş izi olmadan miyom ameliyatı. Karında iz bırakmayan modern miyom tedavisi. İstanbul'da uzman jinekolog.",
    heroDescription:
      "Kesik ve dikiş izi olmadan miyom ameliyatı, karında herhangi bir kesi yapılmadan, doğal vücut açıklıkları kullanılarak gerçekleştirilen ileri cerrahi tekniktir.",
    sections: [
      {
        title: "Dikişsiz Miyom Ameliyatı Nedir?",
        content:
          "Dikişsiz miyom ameliyatı, geleneksel açık cerrahi veya laparoskopik cerrahiden farklı olarak karın duvarında hiçbir kesi yapılmadan gerçekleştirilen miyom çıkarma işlemidir. Bu yöntemde vajinal yoldan girilerek (vNOTES tekniği) veya histeroskopik yöntemle miyomlar çıkarılır.\n\nDoç. Dr. Erkan Elçi, bu ileri cerrahi teknikte uzmanlaşmış olup hastalara kesi izi bırakmadan miyom tedavisi sunmaktadır. İşlem sonrası karında hiçbir yara izi veya dikiş izi kalmaz.",
      },
      {
        title: "Avantajları ve Kimler İçin Uygundur?",
        content:
          "Dikişsiz miyom ameliyatının avantajları:\n\n- Karında hiçbir kesi ve dikiş izi olmaz\n- Ameliyat sonrası ağrı çok azdır\n- İyileşme süreci son derece hızlıdır\n- Enfeksiyon riski minimumdur\n- Kozmetik açıdan mükemmel sonuçlar\n- Hastanede kalış süresi kısadır\n\nBu yöntem özellikle kozmetik kaygıları olan, hızlı iyileşme isteyen ve uygun anatomik yapıya sahip hastalarda tercih edilmektedir.",
      },
    ],
    faqs: [
      {
        question: "Her miyom dikişsiz yöntemle çıkarılabilir mi?",
        answer:
          "Miyomun boyutu, sayısı ve konumu bu yöntemin uygunluğunu belirler. Detaylı değerlendirme sonrası en uygun cerrahi yöntem belirlenir.",
      },
      {
        question: "Dikişsiz miyom ameliyatı sonrası iyileşme süreci nasıldır?",
        answer:
          "Karında kesi olmadığından iyileşme çok hızlıdır. Genellikle birkaç gün içinde günlük aktivitelere dönülebilir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "vnotes-miyom-ameliyati": {
    slug: "vnotes-miyom-ameliyati",
    title: "Vnotes ile Miyom Ameliyatı",
    metaTitle: "vNOTES ile Miyom Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "vNOTES (Vaginal Natural Orifice Transluminal Endoscopic Surgery) ile miyom ameliyatı. Karında iz bırakmayan yenilikçi cerrahi.",
    heroDescription:
      "vNOTES ile miyom ameliyatı, vajinal yoldan endoskopik olarak gerçekleştirilen, karında hiçbir kesi izi bırakmayan ileri cerrahi tekniktir.",
    sections: [
      {
        title: "vNOTES ile Miyom Ameliyatı Nedir?",
        content:
          "vNOTES (Vaginal Natural Orifice Transluminal Endoscopic Surgery), doğal bir vücut açıklığı olan vajinadan girilerek endoskopik aletler ve kamera yardımıyla gerçekleştirilen cerrahi yöntemdir. Bu teknikle miyomlar karında hiçbir kesi yapılmadan çıkarılabilir.\n\nvNOTES, laparoskopik cerrahinin tüm avantajlarını sunarken karında iz bırakmama avantajını da ekler. Doç. Dr. Erkan Elçi, Türkiye'de vNOTES tekniğini uygulayan deneyimli cerrahlardan biridir.",
      },
      {
        title: "vNOTES Miyom Ameliyatının Avantajları",
        content:
          "- Karında hiçbir kesi ve iz yoktur\n- Laparoskopik cerrahiye göre daha az ağrı\n- Daha kısa ameliyat süresi\n- Aynı gün veya ertesi gün taburculuk\n- Hızlı günlük yaşama dönüş\n- Düşük komplikasyon oranı\n- Rahim koruyucu uygulanabilir",
      },
      {
        title: "Kimler İçin Uygundur?",
        content:
          "vNOTES ile miyom ameliyatı aşağıdaki hastalar için uygun olabilir:\n\n- Submüköz ve intramural miyomları olan hastalar\n- Karında iz istemeyen hastalar\n- Daha önce karın ameliyatı geçirmiş ve yapışıklık riski olan hastalar\n- Hızlı iyileşme isteyen hastalar\n\nHer hastanın uygunluğu detaylı muayene ve görüntüleme sonrası değerlendirilir.",
      },
    ],
    faqs: [
      {
        question: "vNOTES ile miyom ameliyatı güvenli midir?",
        answer:
          "Evet, deneyimli ellerde vNOTES güvenli bir cerrahi yöntemdir. Uluslararası çalışmalar laparoskopik cerrahi ile benzer güvenlik profiline sahip olduğunu göstermiştir.",
      },
      {
        question: "vNOTES sonrası hamile kalabilir miyim?",
        answer:
          "Evet, vNOTES ile miyomektomi rahim koruyucu bir işlemdir. Uygun iyileşme süresi sonrası gebelik planlanabilir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "rahim-koruyucu-miyom-ameliyati": {
    slug: "rahim-koruyucu-miyom-ameliyati",
    title: "Rahim Koruyucu Miyom Ameliyatı",
    metaTitle: "Rahim Koruyucu Miyom Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Rahim koruyucu miyom ameliyatı (miyomektomi) hakkında bilgi. Rahmi koruyarak miyom tedavisi. İstanbul'da uzman jinekolog.",
    heroDescription:
      "Rahim koruyucu miyom ameliyatı (miyomektomi), miyomların çıkarılırken rahmin tamamen korunduğu cerrahi bir yöntemdir. Doğurganlığın sürdürülmesi hedeflenir.",
    sections: [
      {
        title: "Rahim Koruyucu Miyom Ameliyatı Nedir?",
        content:
          "Miyomektomi olarak da bilinen rahim koruyucu miyom ameliyatı, miyomların rahimden çıkarılması ve rahmin onarılarak yerinde bırakılması işlemidir. Bu yöntem özellikle çocuk sahibi olmak isteyen veya rahimini korumak isteyen kadınlar için tercih edilir.\n\nAmeliyat laparoskopik, robotik, histeroskopik veya vNOTES tekniği ile minimal invaziv olarak gerçekleştirilebilir. Doç. Dr. Erkan Elçi, rahim koruyucu miyom ameliyatlarında geniş deneyime sahiptir.",
      },
      {
        title: "Cerrahi Yöntemler",
        content:
          "Rahim koruyucu miyom ameliyatında kullanılan yöntemler:\n\n- **Laparoskopik miyomektomi**: Karında küçük kesilerle miyomların çıkarılması\n- **Robotik miyomektomi**: Robot yardımlı hassas cerrahi\n- **Histeroskopik miyomektomi**: Rahim içi miyomlarda rahim ağzından girilerek çıkarma\n- **vNOTES miyomektomi**: Vajinal yoldan karında iz bırakmadan cerrahi\n\nMiyomun boyutu, sayısı ve konumuna göre en uygun yöntem seçilir.",
      },
    ],
    faqs: [
      {
        question: "Rahim koruyucu ameliyat sonrası hamile kalabilir miyim?",
        answer:
          "Evet, rahim koruyucu ameliyatın temel amacı doğurganlığın korunmasıdır. İyileşme süresi sonrası (genellikle 3-6 ay) gebelik planlanabilir.",
      },
      {
        question: "Miyomektomi sonrası miyomlar tekrar oluşabilir mi?",
        answer:
          "Evet, miyomektomi sonrası yeni miyom oluşma olasılığı %15-30 arasındadır. Düzenli takip önemlidir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "rahim-alinmadan-miyom-ameliyati": {
    slug: "rahim-alinmadan-miyom-ameliyati",
    title: "Rahim Alınmadan Miyom Ameliyatı",
    metaTitle: "Rahim Alınmadan Miyom Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Rahim alınmadan miyom ameliyatı. Rahmi koruyarak miyom tedavisi yöntemleri. İstanbul'da uzman doktor.",
    heroDescription:
      "Rahim alınmadan miyom ameliyatı, miyomların cerrahi olarak çıkarılırken rahmin yerinde bırakılmasını sağlayan modern tedavi yaklaşımıdır.",
    sections: [
      {
        title: "Rahim Alınmadan Miyom Tedavisi",
        content:
          "Günümüzde miyom tedavisinde rahmin alınması (histerektomi) son seçenek olarak değerlendirilmektedir. Miyomektomi olarak adlandırılan rahim koruyucu cerrahi, miyomların çıkarılmasını sağlarken rahimi tamamen korur.\n\nDoç. Dr. Erkan Elçi, minimal invaziv cerrahi teknikleri kullanarak hastaların rahimlerini koruyarak miyom tedavisi uygulamaktadır. Laparoskopik, robotik, histeroskopik ve vNOTES yöntemleri ile rahim alınmadan miyom ameliyatı gerçekleştirilmektedir.",
      },
      {
        title: "Hangi Durumlarda Rahim Korunabilir?",
        content:
          "Rahim koruyucu cerrahi aşağıdaki durumlarda uygulanabilir:\n\n- Çocuk sahibi olmak isteyen kadınlarda\n- Rahimini korumayı tercih eden hastalarda\n- Tek veya birden fazla miyomu olan hastalarda\n- Farklı lokalizasyonlardaki miyomlarda\n\nMiyomun boyutu çok büyük olsa bile deneyimli ellerde rahim koruyucu cerrahi mümkündür. Ameliyat öncesi detaylı görüntüleme ile cerrahi plan oluşturulur.",
      },
    ],
    faqs: [
      {
        question: "Çok sayıda miyomum var, yine de rahim korunabilir mi?",
        answer:
          "Evet, deneyimli bir cerrah tarafından çok sayıda miyom bile rahim korunarak çıkarılabilir. Ameliyat öncesi MR ile detaylı planlama yapılır.",
      },
      {
        question: "Ameliyat sonrası adet düzenim değişir mi?",
        answer:
          "Miyomektomi sonrası adet düzeni genellikle normale döner. Aşırı kanama şikayeti olan hastalarda belirgin düzelme görülür.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "kapali-miyom-ameliyati": {
    slug: "kapali-miyom-ameliyati",
    title: "Kapalı Miyom Ameliyatı",
    metaTitle: "Kapalı Miyom Ameliyatı İstanbul | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Kapalı miyom ameliyatı (laparoskopik miyomektomi) hakkında bilgi. Minimal invaziv miyom tedavisi. İstanbul.",
    heroDescription:
      "Kapalı miyom ameliyatı, karında büyük kesi açılmadan, küçük delikler aracılığıyla laparoskopik veya robotik olarak gerçekleştirilen miyom çıkarma cerrahisidir.",
    sections: [
      {
        title: "Kapalı Miyom Ameliyatı Nedir?",
        content:
          "Kapalı miyom ameliyatı, geleneksel açık cerrahide yapılan büyük karın kesisi yerine, 5-10 mm'lik küçük kesiler aracılığıyla kamera ve cerrahi aletler kullanılarak yapılan miyom çıkarma ameliyatıdır. Laparoskopik veya robotik cerrahi teknikleri ile gerçekleştirilir.\n\nDoç. Dr. Erkan Elçi, kapalı miyom ameliyatında geniş deneyime sahip olup hastalara minimal invaziv yöntemlerle tedavi sunmaktadır.",
      },
      {
        title: "Kapalı Ameliyatın Avantajları",
        content:
          "Açık cerrahiye kıyasla kapalı miyom ameliyatının avantajları:\n\n- Daha küçük kesiler (5-10 mm)\n- Önemli ölçüde daha az ağrı\n- Daha az kan kaybı\n- Kısa hastanede kalış süresi (1-2 gün)\n- Hızlı iyileşme (1-2 hafta içinde işe dönüş)\n- Düşük enfeksiyon riski\n- Daha az yapışıklık oluşumu\n- Güzel kozmetik sonuç",
      },
      {
        title: "Ameliyat Süreci",
        content:
          "Kapalı miyom ameliyatı genel anestezi altında yapılır. Karın bölgesine yerleştirilen trokarlar aracılığıyla kamera ve cerrahi aletler yerleştirilir. Miyom dikkatli bir şekilde rahim duvarından ayrılır ve çıkarılır. Rahim duvarı katmanlar halinde dikilir.\n\nAmeliyat süresi miyomun boyutu ve sayısına göre 1-3 saat arasında değişir. Genellikle 1 gece hastanede kalış yeterlidir.",
      },
    ],
    faqs: [
      {
        question: "Her miyom kapalı yöntemle çıkarılabilir mi?",
        answer:
          "Çoğu miyom kapalı yöntemle çıkarılabilir. Çok büyük miyomlarda bile deneyimli cerrahlar tarafından laparoskopik cerrahi uygulanabilmektedir.",
      },
      {
        question: "Kapalı miyom ameliyatı sonrası ne zaman normal yaşama dönebilirim?",
        answer:
          "Genellikle 1-2 hafta içinde günlük aktivitelere ve işe dönülebilir. Ağır egzersiz için 4-6 hafta beklenmesi önerilir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "rahim-cikartmadan-miyom-ameliyati": {
    slug: "rahim-cikartmadan-miyom-ameliyati",
    title: "Rahim Çıkartmadan Miyom Ameliyatı",
    metaTitle: "Rahim Çıkartmadan Miyom Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Rahim çıkartmadan miyom ameliyatı hakkında bilgi. Rahim koruyucu cerrahi ile miyom tedavisi. İstanbul.",
    heroDescription:
      "Rahim çıkartmadan miyom ameliyatı, miyomların rahim korunarak çıkarıldığı, doğurganlığı ve rahim bütünlüğünü muhafaza eden cerrahi bir yaklaşımdır.",
    sections: [
      {
        title: "Rahim Çıkartmadan Miyom Ameliyatı Nedir?",
        content:
          "Günümüzde miyom tedavisinde rahmin çıkartılması (histerektomi) yalnızca kesinlikle gerekli durumlarda uygulanmaktadır. Modern cerrahi teknikler sayesinde miyomlar rahimden çıkartılırken rahim tamamen korunabilir.\n\nDoç. Dr. Erkan Elçi, rahim koruyucu miyom cerrahisinde uzmanlaşmış olup hastalarına en az invaziv yöntemlerle tedavi sunmaktadır. Laparoskopik, robotik, histeroskopik ve vNOTES gibi ileri cerrahi teknikler kullanılmaktadır.",
      },
      {
        title: "Tedavi Yaklaşımı",
        content:
          "Rahim koruyucu miyom tedavisinde cerrahi yöntem seçimi miyomun özelliklerine göre belirlenir:\n\n- **Submüköz miyomlar**: Histeroskopik miyomektomi ile rahim içinden çıkarılır\n- **İntramural miyomlar**: Laparoskopik veya robotik cerrahi ile çıkarılır\n- **Subseröz miyomlar**: Laparoskopik veya vNOTES ile çıkarılır\n- **Çoklu miyomlar**: Kombine yaklaşımlarla tedavi edilir\n\nAmeliyat sonrası rahimin iyileşme süreci yakından takip edilir.",
      },
    ],
    faqs: [
      {
        question: "Rahim çıkartılmadan miyom ameliyatı güvenli midir?",
        answer:
          "Evet, miyomektomi güvenli ve yaygın olarak uygulanan bir cerrahi işlemdir. Deneyimli cerrahlar tarafından minimal invaziv yöntemlerle güvenle gerçekleştirilir.",
      },
      {
        question: "Ameliyat sonrası tekrar miyom oluşur mu?",
        answer:
          "Yeni miyom oluşma ihtimali mevcuttur ancak bu oran %15-30 civarındadır. Düzenli ultrason takibi ile erken tespit edilebilir.",
      },
      {
        question: "Miyom ameliyatı sonrası ne kadar süre sonra hamile kalabilirim?",
        answer:
          "Genellikle ameliyattan 3-6 ay sonra gebelik planlanabilir. Bu süre rahimin tam olarak iyileşmesi için gereklidir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  "sikca-sorulan-sorular": {
    slug: "sikca-sorulan-sorular",
    title: "Miyom Sıkça Sorulan Sorular",
    metaTitle: "Miyom Hakkında Sıkça Sorulan Sorular | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Miyom hakkında en çok sorulan sorular ve yanıtları. Miyom tedavisi, ameliyatı ve takibi ile ilgili merak edilenler.",
    heroDescription:
      "Miyom (rahimde iyi huylu tümör) hakkında hastaların en sık sorduğu soruları ve uzman yanıtlarını bu sayfada bulabilirsiniz.",
    sections: [
      {
        title: "Miyom Hakkında Genel Sorular",
        content:
          "Miyomlar, rahim kas dokusundan gelişen iyi huylu tümörlerdir ve üreme çağındaki kadınların büyük bir kısmında görülebilir. Çoğu miyom belirti vermez ve rutin jinekolojik muayene sırasında tesadüfen saptanır. Ancak bazı miyomlar adet düzensizliği, ağrı, basınç hissi ve kısırlığa neden olabilir.\n\nAşağıda hastaların miyom hakkında en sık sorduğu soruların yanıtlarını bulabilirsiniz.",
      },
      {
        title: "Tedavi ve Ameliyat ile İlgili Sorular",
        content:
          "Miyom tedavisi hastanın yaşı, miyomun boyutu ve konumu, semptomların şiddeti ve gelecekteki doğurganlık planlarına göre kişiselleştirilir. Tedavi seçenekleri ilaç tedavisinden minimal invaziv cerrahiye kadar geniş bir yelpazeyi kapsar.\n\nModern cerrahi teknikler sayesinde miyom ameliyatları artık laparoskopik, robotik ve vNOTES gibi minimal invaziv yöntemlerle güvenle yapılabilmektedir.",
      },
    ],
    faqs: [
      {
        question: "Miyom kanser olabilir mi?",
        answer:
          "Miyomların kanserleşme (malign dönüşüm) riski çok düşüktür, %0.1'den azdır. Ancak hızlı büyüme gösteren miyomlarda ileri tetkik gerekebilir.",
      },
      {
        question: "Miyom ilaçla tedavi edilebilir mi?",
        answer:
          "İlaç tedavisi miyomları küçültebilir veya semptomları hafifletebilir ancak kalıcı tedavi sağlamaz. İlaç kesildiğinde miyomlar genellikle tekrar büyür. Kesin tedavi cerrahidir.",
      },
      {
        question: "Hamilelikte miyom tehlikeli midir?",
        answer:
          "Çoğu miyom gebelikte sorun çıkarmaz. Ancak bazı miyomlar düşük riski, erken doğum, plasentanın erken ayrılması veya doğum güçlüğüne neden olabilir. Gebelik öncesi değerlendirme önemlidir.",
      },
    ],
    parentSlug: "miyom",
    parentTitle: "Miyom",
  },

  // ===== YENİ GENİTAL ESTETİK GİRİŞLERİ =====
  "genital-estetik-labioplasti": {
    slug: "genital-estetik-labioplasti",
    title: "Genital Estetik ve Labioplasti",
    metaTitle: "Genital Estetik ve Labioplasti | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Genital estetik ve labioplasti ameliyatı hakkında kapsamlı bilgi. Kadın genital estetiğinde uzman yaklaşım.",
    heroDescription:
      "Genital estetik ve labioplasti, kadın dış genital bölgesinin estetik ve fonksiyonel olarak iyileştirilmesini amaçlayan cerrahi ve non-invaziv işlemlerdir.",
    sections: [
      {
        title: "Genital Estetik ve Labioplasti Nedir?",
        content:
          "Kadın genital estetiği, dış genital bölgedeki estetik ve fonksiyonel sorunların giderilmesi amacıyla uygulanan prosedürlerin genel adıdır. Labioplasti ise bu alanda en sık uygulanan cerrahi işlem olup iç dudakların (labium minus) şekillendirilmesini kapsar.\n\nDoğum, yaşlanma, hormonal değişiklikler veya genetik faktörler nedeniyle dış genital bölgede çeşitli değişiklikler meydana gelebilir. Bu değişiklikler hem estetik kaygılara hem de günlük yaşamda rahatsızlığa neden olabilir.",
      },
      {
        title: "Uygulanan İşlemler",
        content:
          "Genital estetik kapsamında uygulanan başlıca işlemler:\n\n- **Labioplasti**: İç dudakların küçültülmesi ve şekillendirilmesi\n- **Klitoral hud redüksiyonu**: Klitoris üzerindeki fazla derinin alınması\n- **Vajinoplasti**: Vajinal daraltma ameliyatı\n- **Perinoplasti**: Perine bölgesinin onarımı\n- **Monsplasti**: Venüs tepesi estetiği\n- **Non-invaziv işlemler**: PRP, lazer, kök hücre tedavileri",
      },
      {
        title: "Ameliyat Süreci ve İyileşme",
        content:
          "Genital estetik işlemler genellikle lokal veya genel anestezi altında gerçekleştirilir. İşlem süresine bağlı olarak aynı gün taburculuk mümkündür. İyileşme süreci:\n\n- İlk 48 saat: Dinlenme ve soğuk uygulama\n- 1-2 hafta: Günlük aktivitelere dönüş\n- 4-6 hafta: Cinsel ilişki yasağı\n- 3 ay: Tam iyileşme ve nihai sonuç",
      },
    ],
    faqs: [
      {
        question: "Genital estetik ameliyat acı verir mi?",
        answer:
          "İşlem anestezi altında yapıldığından ağrı hissedilmez. Ameliyat sonrası hafif rahatsızlık olabilir, ağrı kesicilerle kontrol edilir.",
      },
      {
        question: "Genital estetik sonrası cinsel hayat ne zaman başlar?",
        answer:
          "Genellikle ameliyattan 4-6 hafta sonra cinsel ilişkiye başlanabilir. Tam iyileşme doktorunuz tarafından değerlendirilir.",
      },
    ],
    parentSlug: "genital-estetik",
    parentTitle: "Genital Estetik",
  },

  "dogal-genital-estetik": {
    slug: "dogal-genital-estetik",
    title: "Doğal Kadın Genital Estetiği",
    metaTitle: "Doğal Genital Estetik | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Doğal görünümlü kadın genital estetiği. Doğal sonuçlar hedefleyen genital estetik uygulamaları.",
    heroDescription:
      "Doğal kadın genital estetiği, dış genital bölgenin anatomik yapısına uygun, doğal görünüm hedefleyen estetik cerrahi yaklaşımdır.",
    sections: [
      {
        title: "Doğal Genital Estetik Nedir?",
        content:
          "Doğal genital estetik, kadın dış genital bölgesinin kişinin anatomik yapısına en uygun şekilde, doğal görünümü koruyarak estetik düzeltme yapılmasıdır. Amaç abartılı bir değişiklik değil, hastanın kendini rahat ve güvende hissetmesini sağlayan doğal bir sonuç elde etmektir.\n\nDoç. Dr. Erkan Elçi, her hastanın anatomik yapısını değerlendirerek kişiye özel cerrahi planlama yapar ve doğal sonuçlar hedefler.",
      },
      {
        title: "Doğal Estetik Yaklaşımın Özellikleri",
        content:
          "Doğal genital estetik yaklaşımda:\n\n- Hastanın anatomik yapısı temel alınır\n- Doğal oranlar ve simetri hedeflenir\n- Aşırı doku çıkarılmasından kaçınılır\n- Duyarlılık ve fonksiyon korunur\n- Minimal iz bırakan teknikler tercih edilir\n- Her hasta için bireysel planlama yapılır\n\nSonuçlar doğal görünümlü ve hastanın beklentilerine uygun olacak şekilde planlanır.",
      },
    ],
    faqs: [
      {
        question: "Doğal genital estetik ile normal labioplasti arasındaki fark nedir?",
        answer:
          "Doğal genital estetik, anatomik yapıyı ve doğal oranları korumayı ön planda tutan bir yaklaşım felsefesidir. Aşırı doku çıkarılması yerine estetik ve fonksiyonel denge hedeflenir.",
      },
      {
        question: "Sonuçlar kalıcı mıdır?",
        answer:
          "Cerrahi sonuçlar kalıcıdır. Yaşlanma ve hormonal değişimler zamanla hafif değişikliklere neden olabilir ancak genel sonuç korunur.",
      },
    ],
    parentSlug: "genital-estetik",
    parentTitle: "Genital Estetik",
  },

  "revizyon-genital-estetik": {
    slug: "revizyon-genital-estetik",
    title: "Revizyon Kadın Genital Estetiği",
    metaTitle: "Revizyon Genital Estetik | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Revizyon genital estetik ameliyatı. Daha önceki genital estetik ameliyatlarının düzeltilmesi.",
    heroDescription:
      "Revizyon genital estetik, daha önce yapılmış genital estetik ameliyatlarında istenmeyen sonuçların düzeltilmesi amacıyla gerçekleştirilen ikincil cerrahi müdahaledir.",
    sections: [
      {
        title: "Revizyon Genital Estetik Nedir?",
        content:
          "Revizyon genital estetik, daha önce yapılan genital estetik ameliyatlarında ortaya çıkan estetik veya fonksiyonel sorunların düzeltilmesi amacıyla yapılan ikincil cerrahidir. Asimetri, aşırı doku çıkarılması, yetersiz düzeltme veya skar dokusu oluşumu gibi durumlar revizyon cerrahisi gerektirebilir.\n\nRevizyon cerrahisi, ilk ameliyattan daha karmaşık olabilir ve deneyimli bir cerrah tarafından dikkatli planlama gerektirir.",
      },
      {
        title: "Hangi Durumlarda Revizyon Gerekir?",
        content:
          "Revizyon genital estetik aşağıdaki durumlarda gerekli olabilir:\n\n- **Asimetri**: İlk ameliyat sonrası oluşan düzensizlikler\n- **Aşırı doku çıkarılması**: Fazla doku alınması nedeniyle gerginlik veya ağrı\n- **Yetersiz düzeltme**: İstenen sonucun elde edilememesi\n- **Skar dokusu**: Belirgin yara izi oluşumu\n- **Fonksiyonel sorunlar**: Ağrı, duyarlılık kaybı veya cinsel fonksiyon bozukluğu\n\nDoç. Dr. Erkan Elçi, revizyon genital estetik cerrahisinde deneyimli olup her vakayı özenle değerlendirir.",
      },
    ],
    faqs: [
      {
        question: "Revizyon ameliyatı ne zaman yapılabilir?",
        answer:
          "İlk ameliyattan en az 6 ay sonra revizyon cerrahisi planlanabilir. Bu süre dokuların tam olarak iyileşmesi için gereklidir.",
      },
      {
        question: "Revizyon cerrahisi daha riskli midir?",
        answer:
          "Revizyon cerrahisi skar dokusu nedeniyle teknik olarak daha zor olabilir. Ancak deneyimli bir cerrah tarafından yapıldığında güvenle uygulanır.",
      },
    ],
    parentSlug: "genital-estetik",
    parentTitle: "Genital Estetik",
  },

  "barbie-genital-estetik": {
    slug: "barbie-genital-estetik",
    title: "Barbie Genital Estetik",
    metaTitle: "Barbie Genital Estetik | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Barbie genital estetik hakkında bilgi. Düz ve sade genital görünüm hedefleyen kapsamlı estetik cerrahi.",
    heroDescription:
      "Barbie genital estetik, dış genital bölgenin düz, sade ve pürüzsüz bir görünüm kazanması amacıyla birden fazla prosedürün birlikte uygulandığı kapsamlı bir genital estetik yaklaşımıdır.",
    sections: [
      {
        title: "Barbie Genital Estetik Nedir?",
        content:
          "Barbie genital estetik, iç dudakların (labia minora) dış dudakların (labia majora) arasında tamamen gizlenecek şekilde küçültülmesi ve dış genital bölgenin düz, sade bir görünüm kazanması amacıyla yapılan kapsamlı estetik cerrahidir.\n\nBu prosedür genellikle birden fazla işlemi kapsar: labioplasti, klitoral hud redüksiyonu ve gerektiğinde monsplasti. Her hastanın anatomisi ve beklentileri farklı olduğundan kişiye özel planlama yapılır.",
      },
      {
        title: "İşlem Detayları ve İyileşme",
        content:
          "Barbie genital estetik ameliyatı genel veya lokal anestezi altında gerçekleştirilir. Ameliyat süresi uygulanan prosedürlerin kapsamına göre 1-2 saat arasında değişir.\n\nİyileşme süreci:\n- İlk hafta: Dinlenme, buz uygulama, ağrı yönetimi\n- 2-3 hafta: Günlük aktivitelere dönüş\n- 6 hafta: Cinsel ilişki yasağının kaldırılması\n- 3 ay: Nihai sonucun değerlendirilmesi",
      },
    ],
    faqs: [
      {
        question: "Barbie genital estetik kalıcı mıdır?",
        answer:
          "Evet, cerrahi sonuçlar kalıcıdır. Yaşlanma ve hormonal değişimler hafif değişikliklere neden olsa da genel görünüm korunur.",
      },
      {
        question: "Bu ameliyat duyarlılığı etkiler mi?",
        answer:
          "Deneyimli bir cerrah tarafından yapıldığında sinir yapıları korunur ve duyarlılık olumsuz etkilenmez.",
      },
    ],
    parentSlug: "genital-estetik",
    parentTitle: "Genital Estetik",
  },

  "barbie-vajina-estetigi": {
    slug: "barbie-vajina-estetigi",
    title: "Barbie Vajina Estetiği",
    metaTitle: "Barbie Vajina Estetiği | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Barbie vajina estetiği ameliyatı hakkında bilgi. Sade ve düz vajinal estetik görünüm.",
    heroDescription:
      "Barbie vajina estetiği, kadın dış genital bölgesinin pürüzsüz, sade ve estetik bir görünüm kazanması için uygulanan kombine cerrahi prosedürdür.",
    sections: [
      {
        title: "Barbie Vajina Estetiği Nedir?",
        content:
          "Barbie vajina estetiği, popüler kültürde 'Barbie look' olarak adlandırılan, dış genital bölgenin düz ve sade bir görünüme kavuşturulması amacıyla uygulanan kombine estetik cerrahi işlemdir. Bu işlemde iç dudaklar dış dudakların içine gizlenecek şekilde küçültülür.\n\nBarbieplasti olarak da bilinen bu prosedür, labioplasti, klitoral hud redüksiyonu ve gerekirse ek prosedürlerin birlikte uygulanmasını kapsar. Sonuç olarak pürüzsüz ve estetik bir görünüm elde edilir.",
      },
      {
        title: "Ameliyat ve Sonrası",
        content:
          "Ameliyat genel veya lokal anestezi altında 1-2 saat sürer. Genellikle aynı gün taburculuk mümkündür.\n\n- İlk 1-2 hafta hafif şişlik ve morluk görülebilir\n- Özel hijyen önerilerine uyulmalıdır\n- 4-6 hafta sonra cinsel ilişkiye başlanabilir\n- Spor aktiviteleri 3-4 hafta sonra başlanabilir\n- Nihai sonuç 2-3 ay içinde değerlendirilir\n\nDoç. Dr. Erkan Elçi, her hastanın beklentilerini dinleyerek kişiye özel cerrahi plan oluşturur.",
      },
    ],
    faqs: [
      {
        question: "Barbie vajina estetiği ile barbieplasti aynı şey midir?",
        answer:
          "Evet, her ikisi de aynı prosedürü tanımlamak için kullanılmaktadır. İç dudakların dış dudaklar arasında görünmeyecek şekilde küçültülmesi işlemidir.",
      },
      {
        question: "Ameliyat sonrası iz kalır mı?",
        answer:
          "Dikkatli cerrahi teknik ile izler genital bölgenin doğal kıvrımları içinde gizlenir ve zamanla belirgin şekilde solarak kaybolur.",
      },
    ],
    parentSlug: "genital-estetik",
    parentTitle: "Genital Estetik",
  },

  // ===== YENİ HPV / KOLPOSKOPİ GİRİŞLERİ =====
  "hpv-nedir": {
    slug: "hpv-nedir",
    title: "HPV Nedir?",
    metaTitle: "HPV Nedir? Belirtileri ve Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "HPV (İnsan Papilloma Virüsü) nedir? HPV tipleri, bulaşma yolları, belirtileri ve tedavi yöntemleri hakkında bilgi.",
    heroDescription:
      "HPV (İnsan Papilloma Virüsü), cinsel yolla bulaşan en yaygın enfeksiyondur. 200'den fazla tipi bulunan HPV, kadınlarda rahim ağzı kanseri başta olmak üzere çeşitli hastalıklara neden olabilir.",
    sections: [
      {
        title: "HPV (İnsan Papilloma Virüsü) Nedir?",
        content:
          "HPV (Human Papillomavirus - İnsan Papilloma Virüsü), 200'den fazla tipi bulunan bir virüs ailesidir. Cinsel temasla bulaşan en yaygın enfeksiyondur ve cinsel aktif kadınların yaklaşık %80'i yaşamları boyunca en az bir kez HPV ile enfekte olur.\n\nHPV tipleri risk derecelerine göre ikiye ayrılır:\n- **Düşük riskli tipler (HPV 6, 11)**: Genital siğillere neden olur, kanser riski taşımaz\n- **Yüksek riskli tipler (HPV 16, 18, 31, 33, 45)**: Rahim ağzı, vulva, vajina ve anogenital bölge kanserlerine yol açabilir\n\nÇoğu HPV enfeksiyonu bağışıklık sistemi tarafından 1-2 yıl içinde temizlenir. Ancak kalıcı enfeksiyon kanser riskini artırır.",
      },
      {
        title: "HPV Bulaşma Yolları ve Korunma",
        content:
          "HPV başlıca cinsel temas yoluyla bulaşır. Bulaşma yolları:\n\n- Vajinal, anal veya oral cinsel ilişki\n- Deri teması (genital bölge teması)\n- Nadiren anneden bebeğe doğum sırasında\n\nKorunma yöntemleri:\n- **HPV aşısı**: En etkili korunma yöntemidir\n- **Kondom kullanımı**: Riski azaltır ancak tam koruma sağlamaz\n- **Düzenli tarama**: Smear testi ve HPV testi\n- **Tek eşlilik**: Risk azaltıcı faktör",
      },
    ],
    faqs: [
      {
        question: "HPV pozitiflik kanser anlamına mı gelir?",
        answer:
          "Hayır, HPV pozitifliği kanser demek değildir. Enfeksiyonların büyük çoğunluğu bağışıklık sistemi tarafından temizlenir. Düzenli takip ve kontrol ile riskler yönetilir.",
      },
      {
        question: "HPV virüsü vücuttan tamamen temizlenebilir mi?",
        answer:
          "Evet, sağlıklı bağışıklık sistemi HPV enfeksiyonunu genellikle 1-2 yıl içinde temizler. Ancak bazı vakalarda virüs kalıcı olabilir ve takip gerektirir.",
      },
      {
        question: "Erkeklerde HPV görülür mü?",
        answer:
          "Evet, HPV hem kadınlarda hem erkeklerde görülür. Erkeklerde genital siğiller ve nadir olarak penil kanser, anal kanser ve orofarenks kanserine neden olabilir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "hpv-iliskili-hastaliklar": {
    slug: "hpv-iliskili-hastaliklar",
    title: "HPV İlişkili Hastalıklar",
    metaTitle: "HPV İlişkili Hastalıklar | Doç. Dr. Erkan Elçi",
    metaDescription:
      "HPV ile ilişkili hastalıklar: rahim ağzı kanseri, genital siğiller, CIN lezyonları ve diğer HPV kaynaklı sağlık sorunları.",
    heroDescription:
      "HPV (İnsan Papilloma Virüsü) birçok hastalığa neden olabilir. Genital siğillerden rahim ağzı kanserine kadar geniş bir yelpazede HPV ilişkili hastalıklar görülmektedir.",
    sections: [
      {
        title: "HPV ile İlişkili Hastalıklar Nelerdir?",
        content:
          "HPV enfeksiyonu çeşitli hastalıklara yol açabilir:\n\n- **Genital siğiller (Kondilom)**: Düşük riskli HPV tipleri (6, 11) tarafından oluşturulur\n- **Servikal displazi (CIN)**: Rahim ağzında prekanseröz değişiklikler\n- **Rahim ağzı (serviks) kanseri**: Yüksek riskli HPV tipleri tarafından oluşturulur\n- **Vulva kanseri**: HPV ile ilişkili olabilir\n- **Vajina kanseri**: HPV enfeksiyonuna bağlı gelişebilir\n- **Anal kanser**: Hem kadın hem erkeklerde\n- **Orofarenks kanseri**: Ağız ve boğaz kanserleri\n- **VIN/VaIN**: Vulvar ve vajinal intraepitelyal neoplaziler",
      },
      {
        title: "Tanı ve Takip",
        content:
          "HPV ilişkili hastalıkların tanı ve takibinde kullanılan yöntemler:\n\n- **PAP smear testi**: Rahim ağzından alınan hücrelerin incelenmesi\n- **HPV DNA testi**: HPV varlığı ve tiplemesi\n- **Kolposkopi**: Rahim ağzının büyüteç altında incelenmesi\n- **Biyopsi**: Şüpheli lezyonlardan doku alınması\n- **Vulvoskopi**: Vulva bölgesinin detaylı incelenmesi\n\nDüzenli tarama ve erken teşhis, HPV ilişkili kanserlerin önlenmesinde hayati önem taşır.",
      },
    ],
    faqs: [
      {
        question: "HPV her zaman hastalık yapar mı?",
        answer:
          "Hayır, HPV enfeksiyonlarının büyük çoğunluğu hiçbir belirti vermeden bağışıklık sistemi tarafından temizlenir. Ancak bazı vakalarda kalıcı enfeksiyon hastalığa yol açabilir.",
      },
      {
        question: "HPV ilişkili hastalıklar tedavi edilebilir mi?",
        answer:
          "Evet, genital siğiller ve prekanseröz lezyonlar etkili yöntemlerle tedavi edilebilir. Erken teşhis ile kanser gelişimi önlenebilir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "asc-h": {
    slug: "asc-h",
    title: "ASC-H Nedir ve Nasıl Tedavi Edilir?",
    metaTitle: "ASC-H Nedir? Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "ASC-H (Atypical Squamous Cells - Cannot Exclude HSIL) nedir? Smear testinde ASC-H sonucu ve tedavi yaklaşımı.",
    heroDescription:
      "ASC-H (Yüksek Dereceli Lezyon Eklenemeyen Atipik Skuamöz Hücreler), smear testinde saptanan ve HSIL'in dışlanamadığı bir sitolojik bulgudur.",
    sections: [
      {
        title: "ASC-H Nedir?",
        content:
          "ASC-H (Atypical Squamous Cells - Cannot Exclude HSIL), smear testinde tespit edilen anormal hücre değişikliklerini ifade eden bir sitolojik tanıdır. ASCUS'tan farklı olarak, ASC-H sonucunda yüksek dereceli bir lezyon (HSIL) olasılığı dışlanamamaktadır.\n\nASC-H sonucu alan hastaların yaklaşık %40-50'sinde kolposkopik biyopside CIN 2 veya CIN 3 (yüksek dereceli prekanseröz değişiklik) saptanır. Bu nedenle ASC-H sonucu ciddiye alınmalı ve derhal kolposkopi yapılmalıdır.",
      },
      {
        title: "ASC-H Tedavi Yaklaşımı",
        content:
          "ASC-H sonucu alındığında izlenen yol:\n\n1. **Kolposkopi**: Rahim ağzının büyüteç altında detaylı incelenmesi\n2. **Biyopsi**: Anormal alanlardan doku örnekleri alınması\n3. **Endoservikal küretaj**: Rahim ağzı kanalının değerlendirilmesi\n\nBiyopsi sonucuna göre tedavi planlanır:\n- **CIN 1**: Takip veya tedavi\n- **CIN 2-3**: LEEP veya konizasyon\n- **Normal biyopsi**: 6-12 ay sonra kontrol",
      },
    ],
    faqs: [
      {
        question: "ASC-H sonucu kanser mi demektir?",
        answer:
          "Hayır, ASC-H kanser değildir. Ancak yüksek dereceli prekanseröz lezyon olasılığı yüksek olduğundan mutlaka kolposkopi ile değerlendirilmelidir.",
      },
      {
        question: "ASC-H ile ASCUS arasındaki fark nedir?",
        answer:
          "ASCUS düşük riskli atipik hücreleri ifade ederken, ASC-H yüksek dereceli lezyon olasılığının dışlanamadığı atipik hücreleri ifade eder. ASC-H daha ciddi bir bulgudur.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "ascus": {
    slug: "ascus",
    title: "ASCUS Nedir ve Nasıl Tedavi Edilir?",
    metaTitle: "ASCUS Nedir? Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "ASCUS (Atipik Skuamöz Hücreler - Önemi Belirsiz) nedir? Smear testinde ASCUS sonucu ne anlama gelir ve nasıl tedavi edilir?",
    heroDescription:
      "ASCUS (Atypical Squamous Cells of Undetermined Significance), smear testinde en sık karşılaşılan anormal bulgudur ve genellikle düşük riskli bir durumu ifade eder.",
    sections: [
      {
        title: "ASCUS Nedir?",
        content:
          "ASCUS (Atypical Squamous Cells of Undetermined Significance), servikal smear testinde en sık görülen anormal bulgudur. 'Önemi belirsiz atipik skuamöz hücreler' anlamına gelir. Hücreler tamamen normal değildir ancak belirgin bir lezyon da göstermemektedir.\n\nASCUS sonuçlarının büyük çoğunluğu (%80-90) iyi huyludur ve HPV enfeksiyonu, iltihaplanma, hormonal değişiklikler veya mekanik irritasyon gibi nedenlerle ortaya çıkabilir. Ancak az bir kısmında altta yatan prekanseröz bir lezyon bulunabilir.",
      },
      {
        title: "ASCUS Sonucunda Ne Yapılır?",
        content:
          "ASCUS sonucu alındığında iki yaklaşım izlenebilir:\n\n**1. HPV Testi (Reflex HPV):**\n- HPV negatif ise: 3 yıl sonra rutin tarama\n- HPV pozitif ise: Kolposkopi\n\n**2. Tekrar Smear Testi:**\n- 6-12 ay sonra smear tekrarı\n- Normal ise: Rutin taramaya dönüş\n- Anormal ise: Kolposkopi\n\nDoç. Dr. Erkan Elçi, her hastayı bireysel olarak değerlendirerek en uygun takip planını belirler.",
      },
    ],
    faqs: [
      {
        question: "ASCUS sonucu tehlikeli midir?",
        answer:
          "ASCUS genellikle düşük riskli bir bulgudur. Vakaların büyük çoğunluğunda ciddi bir sorun saptanmaz. Ancak HPV testi veya kontrol muayenesi ile takip önemlidir.",
      },
      {
        question: "ASCUS sonucu alan herkes kolposkopi olmalı mıdır?",
        answer:
          "Hayır, öncelikle HPV testi yapılır. HPV pozitif ise kolposkopi önerilir. HPV negatif ise rutin tarama ile takip yeterlidir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "pap-smear": {
    slug: "pap-smear",
    title: "PAP Smear ve HPV",
    metaTitle: "PAP Smear Testi ve HPV Taraması | Doç. Dr. Erkan Elçi",
    metaDescription:
      "PAP smear testi nedir? HPV taraması ile birlikte servikal kanser tarama programları hakkında bilgi.",
    heroDescription:
      "PAP smear testi, rahim ağzından alınan hücrelerin mikroskop altında incelenmesiyle yapılan, rahim ağzı kanserini erken teşhis etmeye yönelik en önemli tarama yöntemidir.",
    sections: [
      {
        title: "PAP Smear Testi Nedir?",
        content:
          "PAP smear (Papanicolaou) testi, rahim ağzından (serviks) alınan hücrelerin laboratuvarda incelenmesidir. Bu test ile rahim ağzındaki anormal hücre değişiklikleri (displazi), prekanseröz lezyonlar ve kanser erken aşamada tespit edilebilir.\n\nPAP smear testi jinekolojik muayene sırasında yapılır, ağrısız bir işlemdir ve birkaç dakika sürer. Sonuçlar genellikle 1-2 hafta içinde çıkar.",
      },
      {
        title: "PAP Smear ve HPV Testi Birlikte Tarama",
        content:
          "Günümüzde servikal kanser taramasında PAP smear ve HPV testi birlikte kullanılmaktadır (ko-test):\n\n- **21-29 yaş**: 3 yılda bir PAP smear\n- **30-65 yaş**: 5 yılda bir HPV testi + PAP smear (ko-test) veya 3 yılda bir PAP smear\n- **65 yaş üstü**: Önceki taramaları normal olan kadınlarda tarama sonlandırılabilir\n\nHPV testi, PAP smear'den daha hassas bir tarama aracıdır ve prekanseröz lezyonları daha erken tespit edebilir.",
      },
      {
        title: "Anormal Smear Sonuçları",
        content:
          "PAP smear sonuçları Bethesda sistemi ile raporlanır:\n\n- **Normal**: Anormal hücre yok\n- **ASCUS**: Önemi belirsiz atipik hücreler\n- **ASC-H**: Yüksek dereceli lezyon dışlanamayan atipik hücreler\n- **LSIL**: Düşük dereceli lezyon\n- **HSIL**: Yüksek dereceli lezyon\n- **AGC**: Atipik glandüler hücreler\n\nAnormal sonuçlarda kolposkopi ve gerekirse biyopsi ile ileri değerlendirme yapılır.",
      },
    ],
    faqs: [
      {
        question: "PAP smear testi ne sıklıkla yaptırılmalıdır?",
        answer:
          "21 yaşından itibaren 3 yılda bir, 30 yaşından sonra HPV testi ile birlikte 5 yılda bir önerilir. Anormal sonuçlarda daha sık kontrol gerekebilir.",
      },
      {
        question: "PAP smear testi ağrılı mıdır?",
        answer:
          "Hayır, PAP smear testi genellikle ağrısız bir işlemdir. Rahim ağzından nazikçe hücre alınır ve işlem birkaç saniye sürer.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "hpv-asilamasi-2": {
    slug: "hpv-asilamasi-2",
    title: "HPV Aşılaması",
    metaTitle: "HPV Aşısı ve Korunma | Doç. Dr. Erkan Elçi",
    metaDescription:
      "HPV aşılaması hakkında bilgi. HPV aşısı kimlere yapılır, kaç doz uygulanır, yan etkileri nelerdir?",
    heroDescription:
      "HPV aşısı, rahim ağzı kanseri ve diğer HPV ilişkili hastalıkların önlenmesinde en etkili korunma yöntemidir. Aşı ile HPV enfeksiyonunun büyük çoğunluğu önlenebilir.",
    sections: [
      {
        title: "HPV Aşısı ve Önemi",
        content:
          "HPV aşısı, İnsan Papilloma Virüsü'nün belirli tiplerine karşı koruma sağlayan profilaktik bir aşıdır. Mevcut aşılar:\n\n- **Gardasil 9 (9-valanlı)**: HPV tip 6, 11, 16, 18, 31, 33, 45, 52, 58'e karşı koruma\n- **Gardasil 4 (4-valanlı)**: HPV tip 6, 11, 16, 18'e karşı koruma\n- **Cervarix (2-valanlı)**: HPV tip 16, 18'e karşı koruma\n\nAşı, rahim ağzı kanserinin %90'ından fazlasını, genital siğillerin ise %90'ından fazlasını önleyebilir.",
      },
      {
        title: "Aşı Kimlere ve Nasıl Uygulanır?",
        content:
          "HPV aşısı uygulama rehberi:\n\n- **9-14 yaş**: 2 doz (0 ve 6-12. ayda)\n- **15-26 yaş**: 3 doz (0, 2. ve 6. ayda)\n- **27-45 yaş**: Doktor değerlendirmesi ile uygulanabilir\n\nAşı en etkili cinsel aktivite başlamadan önce yapıldığında olur. Ancak cinsel aktif bireylerde de fayda sağlar çünkü tüm HPV tiplerine aynı anda maruz kalınmamış olabilir.\n\nHPV aşısı güvenlidir ve dünya genelinde 300 milyondan fazla doz uygulanmıştır.",
      },
    ],
    faqs: [
      {
        question: "HPV aşısı yaptırdıktan sonra tarama yaptırmaya devam etmeli miyim?",
        answer:
          "Evet, aşı tüm HPV tiplerine karşı koruma sağlamadığından düzenli smear testi ve HPV taramasına devam edilmelidir.",
      },
      {
        question: "HPV aşısının yan etkileri var mıdır?",
        answer:
          "Enjeksiyon yerinde ağrı, kızarıklık ve şişlik en sık görülen yan etkilerdir. Ciddi yan etkiler son derece nadirdir. Aşı güvenliği kanıtlanmıştır.",
      },
      {
        question: "Erkeklere de HPV aşısı yapılmalı mıdır?",
        answer:
          "Evet, HPV aşısı erkeklere de önerilmektedir. Genital siğil, anal kanser ve orofarenks kanserinden korunma sağlar.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "genital-sigil-tedavisi": {
    slug: "genital-sigil-tedavisi",
    title: "Genital Siğil Tedavisi",
    metaTitle: "Genital Siğil Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Genital siğil (kondilom) tedavi yöntemleri. Lazer, kriyoterapi, elektrokoter ve topikal tedaviler.",
    heroDescription:
      "Genital siğil tedavisi, HPV kaynaklı siğillerin çeşitli yöntemlerle ortadan kaldırılmasını amaçlar. Tedavi yöntemleri siğilin boyutu, sayısı ve konumuna göre belirlenir.",
    sections: [
      {
        title: "Genital Siğil Tedavi Yöntemleri",
        content:
          "Genital siğil tedavisinde çeşitli yöntemler kullanılmaktadır:\n\n- **Lazer tedavisi (CO2 lazer)**: Siğillerin lazer ile buharlaştırılması, en etkili yöntemlerden biridir\n- **Kriyoterapi**: Sıvı nitrojen ile siğillerin dondurularak yok edilmesi\n- **Elektrokoter**: Elektrik enerjisi ile siğillerin yakılması\n- **TCA (Triklorasetik asit)**: Kimyasal yakma yöntemi\n- **Topikal tedaviler**: İmiquimod krem, podofillotoksin solüsyonu\n- **Cerrahi eksizyon**: Büyük veya dirençli siğillerde cerrahi çıkarma\n\nDoç. Dr. Erkan Elçi, her hastaya en uygun tedavi yöntemini belirleyerek etkili tedavi uygulamaktadır.",
      },
      {
        title: "Tedavi Sonrası ve Takip",
        content:
          "Genital siğil tedavisi sonrası dikkat edilmesi gerekenler:\n\n- Tedavi sonrası bölgenin temiz ve kuru tutulması\n- Doktor tarafından önerilen bakım protokolüne uyulması\n- Cinsel ilişkinin tedavi bölgesi iyileşene kadar ertelenmesi\n- Düzenli kontrol muayenelerine gidilmesi\n\nTedavi sonrası tekrarlama oranı %20-30 civarındadır. HPV virüsü vücutta latent kalabildiğinden düzenli takip önemlidir. Bağışıklık sistemini güçlendirici önlemler tekrarlama riskini azaltabilir.",
      },
    ],
    faqs: [
      {
        question: "Genital siğil tedavisi ağrılı mıdır?",
        answer:
          "Tedavi lokal anestezi altında yapıldığından işlem sırasında ağrı hissedilmez. İşlem sonrası hafif yanma hissi olabilir.",
      },
      {
        question: "Genital siğil tedavisi sonrası tekrarlar mı?",
        answer:
          "Evet, %20-30 oranında tekrarlama görülebilir. HPV virüsü vücutta kalabilir ve tekrar aktif hale gelebilir. Düzenli takip ve bağışıklık güçlendirme önemlidir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "bitkisel-tedaviler": {
    slug: "bitkisel-tedaviler",
    title: "HPV Tedavisinde Bitkisel Tedaviler",
    metaTitle: "HPV Bitkisel Tedavi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "HPV tedavisinde bitkisel ve doğal yöntemler. Bilimsel kanıtlar ve uzman görüşleri.",
    heroDescription:
      "HPV tedavisinde bitkisel ve doğal yöntemler, tıbbi tedaviye destek olarak değerlendirilebilir. Ancak bilimsel kanıtları sınırlıdır ve tek başına tedavi olarak önerilmez.",
    sections: [
      {
        title: "HPV Tedavisinde Bitkisel Yaklaşımlar",
        content:
          "İnternet ve sosyal medyada HPV'nin bitkisel tedavisine yönelik birçok iddia bulunmaktadır. Bilimsel literatürde araştırılan bazı doğal maddeler:\n\n- **Yeşil çay ekstresi (EGCG)**: Antioksidan ve antiviral etkileri araştırılmaktadır\n- **Curcumin (Zerdeçal)**: Anti-inflamatuar ve antiproliferatif etkileri çalışılmaktadır\n- **AHCC (Aktif Hexose Korele Bileşik)**: Bağışıklık destekleyici etkisi araştırılmaktadır\n- **İndol-3-karbinol (Brokoli ekstresi)**: Servikal displazi üzerine çalışmalar mevcuttur\n\nAncak bu maddelerin HPV tedavisindeki etkinliği kesin olarak kanıtlanmamıştır.",
      },
      {
        title: "Bilimsel Gerçekler ve Uyarılar",
        content:
          "Bitkisel tedaviler konusunda bilinmesi gerekenler:\n\n- Bitkisel tedaviler HPV'yi kesin olarak tedavi etmez\n- Hiçbir bitkisel ürün tıbbi tedavinin yerini alamaz\n- Güçlü bağışıklık sistemi HPV ile mücadelede önemlidir\n- Sağlıklı beslenme, düzenli egzersiz ve yeterli uyku bağışıklığı destekler\n- Sigara kullanımı HPV kalıcılığını artırır ve bırakılmalıdır\n\n**Önemli**: HPV pozitif iseniz bitkisel yöntemlere güvenerek tıbbi takibi ihmal etmeyiniz. Düzenli smear testi ve kolposkopi takibinizi aksatmayınız. Doç. Dr. Erkan Elçi, kanıta dayalı tıp ilkeleri çerçevesinde hastalarını yönlendirmektedir.",
      },
    ],
    faqs: [
      {
        question: "Bitkisel tedaviler HPV'yi iyileştirir mi?",
        answer:
          "Bitkisel tedavilerin HPV'yi kesin olarak iyileştirdiğine dair yeterli bilimsel kanıt bulunmamaktadır. Tıbbi tedavi ve düzenli takip öncelikli olmalıdır.",
      },
      {
        question: "Bağışıklık sistemini güçlendirmek HPV ile mücadeleye yardımcı olur mu?",
        answer:
          "Evet, güçlü bir bağışıklık sistemi HPV enfeksiyonunun temizlenmesinde önemli rol oynar. Sağlıklı yaşam tarzı, dengeli beslenme ve sigaradan kaçınma önerilir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "gebelerde-genital-sigil": {
    slug: "gebelerde-genital-sigil",
    title: "Gebelerde Genital Siğil Tedavisi",
    metaTitle: "Gebelikte Genital Siğil Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Gebelik döneminde genital siğil (kondilom) tedavisi. Hamilelikte güvenli tedavi yöntemleri.",
    heroDescription:
      "Gebelikte genital siğiller hormonal değişiklikler nedeniyle büyüyebilir ve çoğalabilir. Tedavi yöntemi seçiminde anne ve bebek güvenliği ön plandadır.",
    sections: [
      {
        title: "Gebelikte Genital Siğil",
        content:
          "Gebelik döneminde artan östrojen seviyeleri ve bağışıklık sistemindeki değişiklikler nedeniyle genital siğiller daha hızlı büyüyebilir ve sayıları artabilir. Daha önce fark edilmemiş HPV enfeksiyonu gebelikte aktif hale gelebilir.\n\nGebelikte genital siğillerin yönetimi özel dikkat gerektirir. Bazı tedavi yöntemleri gebelikte kontrendikedir (örneğin podofillotoksin). Tedavi kararı siğillerin boyutu, konumu ve gebelik haftasına göre verilir.",
      },
      {
        title: "Gebelikte Güvenli Tedavi Yöntemleri",
        content:
          "Gebelikte uygulanabilecek tedavi yöntemleri:\n\n- **TCA (Triklorasetik asit)**: Gebelikte güvenle kullanılabilir\n- **Kriyoterapi**: Küçük lezyonlarda uygulanabilir\n- **Lazer tedavisi**: Yaygın lezyonlarda tercih edilebilir\n- **Cerrahi eksizyon**: Gerekli durumlarda uygulanabilir\n\n**Gebelikte kullanılmaması gereken tedaviler:**\n- Podofillotoksin (teratojen etki riski)\n- İmiquimod (yeterli güvenlik verisi yok)\n- 5-FU (teratojen)\n\nDoğum şekli konusunda: Büyük siğiller doğum kanalını tıkamadığı sürece vajinal doğum genellikle güvenlidir.",
      },
    ],
    faqs: [
      {
        question: "Genital siğil bebeğe bulaşır mı?",
        answer:
          "Doğum sırasında bebeğe bulaşma riski çok düşüktür. Nadir durumlarda larengeal papillomatozis (boğazda siğil) görülebilir ancak bu risk sadece sezaryen endikasyonu oluşturmaz.",
      },
      {
        question: "Gebelikte genital siğil tedavisi zorunlu mudur?",
        answer:
          "Küçük ve az sayıda siğillerde tedavi doğum sonrasına ertelenebilir. Büyük, yaygın veya doğum kanalını etkileyen siğillerde gebelikte tedavi gerekebilir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "cin-lazer-tedavisi": {
    slug: "cin-lazer-tedavisi",
    title: "CIN Tedavisinde Lazer",
    metaTitle: "CIN Lazer Tedavisi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "CIN (servikal intraepitelyal neoplazi) tedavisinde lazer ablasyon yöntemi. Rahim ağzı prekanseröz lezyonların lazer ile tedavisi.",
    heroDescription:
      "CIN tedavisinde lazer ablasyon, rahim ağzındaki prekanseröz lezyonların CO2 lazer ile buharlaştırılarak yok edilmesi yöntemidir.",
    sections: [
      {
        title: "CIN Tedavisinde Lazer Ablasyon",
        content:
          "Lazer ablasyon, rahim ağzındaki CIN (Servikal İntraepitelyal Neoplazi) lezyonlarının CO2 lazer kullanılarak buharlaştırılması işlemidir. Bu yöntemde anormal doku lazer enerjisi ile yok edilir ve sağlıklı yeni dokunun oluşması sağlanır.\n\nLazer ablasyon özellikle CIN 1 ve seçilmiş CIN 2 vakalarında tercih edilebilir. İşlem kolposkopi eşliğinde yapılır ve anormal alanın tamamı tedavi edilir.",
      },
      {
        title: "Lazer Tedavisinin Avantajları ve Sınırlılıkları",
        content:
          "**Avantajları:**\n- Ağrısız veya minimal ağrılı bir işlemdir\n- Rahim ağzı dokusunu korur\n- İyileşme hızlıdır\n- Fertiliteyi olumsuz etkilemez\n- Poliklinikte uygulanabilir\n\n**Sınırlılıkları:**\n- Doku örneği alınamaz (patolojik inceleme yapılamaz)\n- CIN 3 ve şüpheli invazyon durumunda tercih edilmez\n- Endoservikal kanal lezyonlarında uygun değildir\n\nBu nedenle LEEP veya konizasyon, lazer ablasyona göre doku örneklemesi avantajı sunar ve daha sık tercih edilir.",
      },
    ],
    faqs: [
      {
        question: "CIN lazer tedavisi sonrası hamile kalabilir miyim?",
        answer:
          "Evet, lazer ablasyon rahim ağzı dokusunu koruyucu bir yöntemdir ve fertiliteyi olumsuz etkilemez. İyileşme sonrası gebelik planlanabilir.",
      },
      {
        question: "Lazer tedavisi mi yoksa LEEP mi daha iyi?",
        answer:
          "LEEP doku örneği alınmasını sağladığından genellikle tercih edilir. Lazer ablasyon seçilmiş vakalarda uygun bir alternatiftir. Doktorunuz en uygun yöntemi belirleyecektir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "leep-ameliyati": {
    slug: "leep-ameliyati",
    title: "LEEP Ameliyatı Nedir?",
    metaTitle: "LEEP Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "LEEP (Loop Elektrocerrahi Eksizyon Prosedürü) ameliyatı nedir? Rahim ağzı prekanseröz lezyonların LEEP ile tedavisi.",
    heroDescription:
      "LEEP (Loop Elektrocerrahi Eksizyon Prosedürü), rahim ağzındaki prekanseröz lezyonların ince bir tel halka ile elektrik enerjisi kullanılarak çıkarılması işlemidir.",
    sections: [
      {
        title: "LEEP Ameliyatı Nedir?",
        content:
          "LEEP (Loop Electrosurgical Excision Procedure), rahim ağzındaki anormal dokuların ince bir tel halka (loop) ve elektrik enerjisi kullanılarak çıkarılması işlemidir. CIN (servikal intraepitelyal neoplazi) tedavisinde en sık kullanılan yöntemdir.\n\nİşlem sırasında rahim ağzındaki anormal doku hem tedavi edilir hem de patolojik inceleme için doku örneği elde edilir. Bu özelliği LEEP'i hem tanısal hem de tedavi edici bir prosedür haline getirir.",
      },
      {
        title: "LEEP Nasıl Yapılır?",
        content:
          "LEEP genellikle poliklinikte lokal anestezi altında gerçekleştirilir:\n\n1. Kolposkopi ile anormal alan belirlenir\n2. Rahim ağzına lokal anestezi uygulanır\n3. İnce tel halka ile anormal doku çıkarılır\n4. Kanama kontrolü yapılır (elektrokoter)\n5. Çıkarılan doku patolojiye gönderilir\n\nİşlem 15-20 dakika sürer. Hasta aynı gün eve dönebilir.\n\n**İşlem sonrası dikkat edilmesi gerekenler:**\n- 4-6 hafta cinsel ilişkiden kaçınma\n- Tampon kullanmama\n- Ağır kaldırmama\n- Kahverengi akıntı normal olup 2-3 hafta sürebilir",
      },
    ],
    faqs: [
      {
        question: "LEEP ameliyatı ağrılı mıdır?",
        answer:
          "Lokal anestezi altında yapıldığından belirgin ağrı hissedilmez. İşlem sırasında hafif kramp hissi olabilir.",
      },
      {
        question: "LEEP sonrası hamile kalabilir miyim?",
        answer:
          "Evet, LEEP sonrası gebelik mümkündür. Nadiren rahim ağzı yetmezliği riski olabilir, bu durum gebelik takibinde göz önünde bulundurulur.",
      },
      {
        question: "LEEP sonrası CIN tekrar edebilir mi?",
        answer:
          "Evet, %5-10 oranında tekrarlama görülebilir. Bu nedenle LEEP sonrası düzenli smear ve HPV testi takibi çok önemlidir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "konizasyon": {
    slug: "konizasyon",
    title: "Konizasyon Nedir?",
    metaTitle: "Konizasyon Ameliyatı | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Konizasyon (koni biyopsi) nedir? Rahim ağzı prekanseröz lezyonların konizasyon ile tedavisi.",
    heroDescription:
      "Konizasyon, rahim ağzından koni şeklinde doku çıkarılması işlemidir. Hem tanısal hem de tedavi amaçlı uygulanan önemli bir jinekolojik prosedürdür.",
    sections: [
      {
        title: "Konizasyon Nedir?",
        content:
          "Konizasyon (koni biyopsi), rahim ağzından koni şeklinde doku çıkarılması işlemidir. Bu doku hem patolojik inceleme için değerlendirilir hem de tedavi amaçlı kullanılır. Konizasyon, LEEP'e göre daha geniş ve derin doku çıkarılmasını sağlar.\n\nKonizasyon endikasyonları:\n- CIN 2-3 tedavisi\n- ASC-H veya HSIL'de kolposkopinin yetersiz olduğu durumlar\n- Endoservikal kanal lezyonları\n- Smear ve kolposkopi arasında uyumsuzluk\n- Mikroinvaziv kanser şüphesi\n- Adenokarsinoma in situ (AIS)",
      },
      {
        title: "Konizasyon Yöntemleri",
        content:
          "Konizasyon farklı yöntemlerle yapılabilir:\n\n- **Cold-knife konizasyon**: Bistüri ile soğuk kesi, en geniş doku çıkarma imkanı\n- **LEEP konizasyon**: Elektrocerrahi tel ile konizasyon\n- **Lazer konizasyon**: CO2 lazer ile konizasyon\n\nİşlem genel veya lokal anestezi altında yapılabilir. Ameliyat sonrası hasta genellikle aynı gün taburcu olur.\n\n**İyileşme süreci:**\n- 4-6 hafta cinsel ilişki ve tampon kullanımı yasağı\n- Hafif kanama ve akıntı normal\n- Ağır fiziksel aktiviteden kaçınma\n- Kontrol muayenesi için 4-6 hafta sonra randevu",
      },
    ],
    faqs: [
      {
        question: "Konizasyon sonrası hamile kalabilir miyim?",
        answer:
          "Evet, konizasyon sonrası gebelik mümkündür. Ancak konizasyon rahim ağzı yetmezliği (servikal yetmezlik) riskini artırabilir. Gebelik takibinde bu durum göz önünde bulundurulur.",
      },
      {
        question: "Konizasyon ile LEEP arasındaki fark nedir?",
        answer:
          "Konizasyon genellikle daha derin ve geniş doku çıkarılmasını sağlar. LEEP daha yüzeysel lezyonlarda tercih edilirken, konizasyon endoservikal kanal lezyonları ve daha ciddi vakalarda uygulanır.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  "kolposkopi-nedir": {
    slug: "kolposkopi-nedir",
    title: "Kolposkopi Nedir?",
    metaTitle: "Kolposkopi Nedir? | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Kolposkopi nedir, nasıl yapılır? Rahim ağzı incelemesi ve kolposkopik biyopsi hakkında bilgi.",
    heroDescription:
      "Kolposkopi, özel bir büyüteç (kolposkop) kullanılarak rahim ağzının, vajinanın ve vulvanın detaylı olarak incelenmesini sağlayan tanısal bir yöntemdir.",
    sections: [
      {
        title: "Kolposkopi Nedir ve Neden Yapılır?",
        content:
          "Kolposkopi, kolposkop adı verilen özel bir büyüteç (6-40x büyütme) kullanılarak rahim ağzı, vajina ve vulva yüzeyinin aydınlatılmış ortamda detaylı olarak incelenmesi işlemidir.\n\nKolposkopi yapılma endikasyonları:\n- Anormal smear testi sonucu (ASCUS, ASC-H, LSIL, HSIL)\n- HPV pozitifliği (özellikle yüksek riskli tipler)\n- Klinik olarak şüpheli servikal lezyonlar\n- Cinsel ilişki sonrası kanama\n- Vulva veya vajinada şüpheli lezyonlar\n- Servikal kanser tedavisi sonrası takip",
      },
      {
        title: "Kolposkopi Nasıl Yapılır?",
        content:
          "Kolposkopi işlemi jinekolojik muayene pozisyonunda gerçekleştirilir:\n\n1. Spekulum yerleştirilir\n2. Rahim ağzı %3-5 asetik asit (sirke) ile boyanır\n3. Kolposkop ile rahim ağzı büyütülerek incelenir\n4. Anormal alanlar (asetobeyaz alanlar, mozaik, punktasyon vb.) değerlendirilir\n5. Şüpheli alanlardan biyopsi alınır\n6. Gerekirse endoservikal küretaj yapılır\n\nİşlem 10-15 dakika sürer ve genellikle ağrısızdır. Biyopsi sırasında hafif bir çimdikleme hissi olabilir.",
      },
      {
        title: "Kolposkopi Sonrası",
        content:
          "Kolposkopi sonrası:\n- Hafif lekelenme şeklinde kanama olabilir (1-2 gün)\n- Biyopsi alındıysa kahverengi akıntı birkaç gün sürebilir\n- 48 saat cinsel ilişki ve tampon kullanımından kaçınılması önerilir\n- Biyopsi sonuçları genellikle 1-2 haftada çıkar\n\nSonuçlara göre takip veya tedavi planlanır.",
      },
    ],
    faqs: [
      {
        question: "Kolposkopi ağrılı mıdır?",
        answer:
          "Kolposkopi genellikle ağrısız bir işlemdir. Biyopsi alınması sırasında kısa süreli hafif bir rahatsızlık hissedilebilir.",
      },
      {
        question: "Kolposkopi ne kadar sürer?",
        answer:
          "İşlem genellikle 10-15 dakika sürer. Biyopsi alınması durumunda biraz daha uzayabilir.",
      },
    ],
    parentSlug: "hpv-kolposkopi",
    parentTitle: "HPV / Kolposkopi",
  },

  // ===== YENİ BAĞIMSIZ SAYFALAR =====
  "histeroskopik-cerrahi": {
    slug: "histeroskopik-cerrahi",
    title: "Histeroskopik Cerrahi",
    metaTitle: "Histeroskopik Cerrahi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Histeroskopik cerrahi nedir? Rahim içi patolojilerin tanı ve tedavisinde histeroskopi uygulamaları.",
    heroDescription:
      "Histeroskopik cerrahi, rahim ağzından girilerek rahim boşluğunun kamera ile görüntülenmesi ve rahim içi patolojilerin tedavi edilmesi yöntemidir.",
    sections: [
      {
        title: "Histeroskopik Cerrahi Nedir?",
        content:
          "Histeroskopi, rahim ağzından ince bir kamera (histeroskop) yerleştirilerek rahim boşluğunun doğrudan görüntülenmesini sağlayan bir yöntemdir. Histeroskopik cerrahi ise bu yöntem kullanılarak rahim içi patolojilerin tedavi edilmesidir.\n\nHisteroskopi hem tanısal hem de tedavi amaçlı kullanılır. Karında hiçbir kesi yapılmaz, tüm işlem rahim ağzından gerçekleştirilir. Doç. Dr. Erkan Elçi, histeroskopik cerrahide geniş deneyime sahiptir.",
      },
      {
        title: "Histeroskopik Cerrahinin Uygulama Alanları",
        content:
          "Histeroskopik cerrahi ile tedavi edilebilen durumlar:\n\n- **Submüköz miyomlar**: Rahim içine doğru büyüyen miyomların çıkarılması\n- **Endometrial polipler**: Rahim içi poliplerin alınması\n- **Uterin septum**: Rahim içi bölmenin kesilmesi\n- **İntrauterin yapışıklıklar (Asherman sendromu)**: Yapışıklıkların açılması\n- **Anormal uterin kanama**: Tanı ve tedavi\n- **İnfertilite araştırması**: Rahim içi değerlendirme\n- **Yabancı cisim çıkarılması**: RİA vb.\n- **Endometrial ablasyon**: Rahim iç tabakasının yok edilmesi",
      },
      {
        title: "Histeroskopi Avantajları",
        content:
          "- Karında kesi yapılmaz\n- Kısa işlem süresi (15-60 dakika)\n- Aynı gün taburculuk\n- Hızlı iyileşme\n- Düşük komplikasyon oranı\n- Rahim korunur\n- Doğrudan görüntüleme ile hassas tedavi\n- Hem tanı hem tedavi aynı seansta",
      },
    ],
    faqs: [
      {
        question: "Histeroskopi ağrılı mıdır?",
        answer:
          "Ofis histeroskopi (tanısal) genellikle anestezisiz yapılabilir ve hafif kramp tarzı ağrı olabilir. Cerrahi histeroskopi ise genel veya lokal anestezi altında ağrısız gerçekleştirilir.",
      },
      {
        question: "Histeroskopi sonrası ne kadar sürede iyileşirim?",
        answer:
          "Genellikle 1-2 gün içinde günlük aktivitelere dönülebilir. Cerrahi histeroskopi sonrası 1 hafta dinlenme yeterlidir.",
      },
    ],
  },

  "gebelik-dogum": {
    slug: "gebelik-dogum",
    title: "Gebelik ve Doğum",
    metaTitle: "Gebelik ve Doğum Takibi | Doç. Dr. Erkan Elçi",
    metaDescription:
      "Gebelik takibi ve doğum hakkında bilgi. Normal gebelik süreci, doğum yöntemleri ve gebelik komplikasyonları.",
    heroDescription:
      "Gebelik ve doğum, kadın hayatının en özel dönemlerinden biridir. Doğru takip ve uzman eşliğinde sağlıklı bir gebelik süreci ve güvenli bir doğum mümkündür.",
    sections: [
      {
        title: "Gebelik Takibi",
        content:
          "Sağlıklı bir gebelik süreci için düzenli doktor kontrolleri büyük önem taşır. Standart gebelik takip programı:\n\n- **İlk trimester (0-12 hafta)**: Gebelik teyidi, detaylı ultrason, ikili test, NIPT\n- **İkinci trimester (13-28 hafta)**: Detaylı anomali taraması (20. hafta), dörtlü test, şeker yükleme testi\n- **Üçüncü trimester (29-40 hafta)**: Büyüme takibi, NST, doğum planlaması\n\nDoç. Dr. Erkan Elçi, 23 yıllık deneyimi ile gebelik takibi ve doğum yönetiminde uzmanlaşmıştır.",
      },
      {
        title: "Doğum Yöntemleri",
        content:
          "Doğum şekli annenin ve bebeğin sağlık durumuna göre belirlenir:\n\n- **Normal (vajinal) doğum**: Fizyolojik doğum yöntemi, uygun koşullarda tercih edilir\n- **Sezaryen doğum**: Tıbbi endikasyon durumunda planlı veya acil olarak uygulanır\n- **Suda doğum**: Uygun koşullarda tercih edilebilen alternatif yöntem\n\nDoğum şekli kararı, annenin genel sağlık durumu, bebeğin pozisyonu, gebelik komplikasyonları ve obstetrik öykü göz önünde bulundurularak verilir.",
      },
      {
        title: "Gebelikte Sık Karşılaşılan Durumlar",
        content:
          "Gebelik sürecinde dikkat edilmesi gereken durumlar:\n\n- **Bulantı ve kusma**: Özellikle ilk trimesterde yaygın\n- **Gestasyonel diyabet**: Gebelikte gelişen şeker hastalığı\n- **Preeklampsi**: Gebeliğe bağlı yüksek tansiyon\n- **Plasenta previa**: Plasentanın rahim ağzını kapatması\n- **Erken doğum tehdidi**: 37 haftadan önce doğum riski\n- **İntrauterin gelişme geriliği**: Bebeğin beklenen boyutlarda büyümemesi\n\nBu durumların erken tespiti ve yönetimi için düzenli gebelik takibi şarttır.",
      },
    ],
    faqs: [
      {
        question: "Gebelik takibine ne zaman başlamalıyım?",
        answer:
          "Adet gecikmeniz olduğunda ve gebelik testi pozitif çıktığında mümkün olan en kısa sürede ilk muayenenizi yaptırmanız önerilir. İlk ultrason genellikle 6-8. haftalarda yapılır.",
      },
      {
        question: "Normal doğum mu sezaryen mi daha iyi?",
        answer:
          "Her iki yöntemin de avantajları ve riskleri vardır. Tıbbi bir endikasyon yoksa normal doğum fizyolojik olarak tercih edilir. Karar doktorunuzla birlikte değerlendirilmelidir.",
      },
    ],
  },

  "jinekoloji": {
    slug: "jinekoloji",
    title: "Jinekoloji",
    metaTitle: "Jinekoloji | Doç. Dr. Erkan Elçi - İstanbul",
    metaDescription:
      "Jinekoloji (kadın hastalıkları) hakkında bilgi. Jinekolojik muayene, tanı ve tedavi yöntemleri.",
    heroDescription:
      "Jinekoloji, kadın üreme sistemi hastalıklarının tanı, tedavi ve takibi ile ilgilenen tıp dalıdır. Düzenli jinekolojik kontrol kadın sağlığının temel taşıdır.",
    sections: [
      {
        title: "Jinekoloji Nedir?",
        content:
          "Jinekoloji (kadın hastalıkları ve doğum), kadın üreme organlarının (rahim, yumurtalıklar, tüpler, vajina, vulva) sağlığı ile ilgilenen tıp dalıdır. Jinekolojik hastalıkların tanısı, tedavisi ve önlenmesi jinekolojinin kapsamına girer.\n\nDoç. Dr. Erkan Elçi, 23 yıllık deneyimi ile jinekolojinin tüm alanlarında uzman hizmet sunmaktadır. Minimal invaziv cerrahi, jinekolojik onkoloji, genital estetik ve ürojinekoloji başlıca uzmanlık alanlarıdır.",
      },
      {
        title: "Jinekolojik Muayene ve Kontrol",
        content:
          "Düzenli jinekolojik kontrol kadın sağlığında büyük önem taşır. Yıllık kontrollerde:\n\n- Jinekolojik muayene\n- Ultrasonografi (transvajinal/abdominal)\n- PAP smear testi\n- HPV taraması\n- Meme muayenesi\n- Gerekli kan testleri\n\nDüzenli tarama ile birçok hastalık erken evrede tespit edilebilir ve tedavi başarısı artar.",
      },
      {
        title: "Sık Görülen Jinekolojik Hastalıklar",
        content:
          "Kadınlarda sık görülen jinekolojik sorunlar:\n\n- **Miyomlar**: Rahim kas dokusundan gelişen iyi huylu tümörler\n- **Endometriozis**: Rahim iç tabakasının rahim dışında büyümesi\n- **Yumurtalık kistleri**: Yumurtalıklarda oluşan kistler\n- **Adet düzensizlikleri**: Düzensiz, ağrılı veya aşırı adet kanamaları\n- **Genital enfeksiyonlar**: HPV, vajinal enfeksiyonlar\n- **Pelvik organ prolapsusu**: Rahim ve mesane sarkması\n- **Kısırlık**: Gebelik elde edilememesi\n- **Jinekolojik kanserler**: Rahim, yumurtalık, rahim ağzı kanserleri",
      },
    ],
    faqs: [
      {
        question: "Jinekolojik kontrole ne sıklıkla gitmeliyim?",
        answer:
          "Cinsel aktif kadınlar yılda en az bir kez jinekolojik kontrol yaptırmalıdır. Herhangi bir şikayet durumunda derhal başvurulmalıdır.",
      },
      {
        question: "İlk jinekolojik muayene ne zaman yapılmalıdır?",
        answer:
          "Adet düzensizlikleri, ağrı gibi şikayetler durumunda herhangi bir yaşta yapılabilir. Cinsel aktivite başlangıcında veya 21 yaşında tarama amaçlı başlanması önerilir.",
      },
    ],
  },

  "urojinekoloji": {
    slug: "urojinekoloji",
    title: "Ürojinekoloji",
    metaTitle: "Ürojinekoloji | Doç. Dr. Erkan Elçi - İstanbul",
    metaDescription:
      "Ürojinekoloji hakkında bilgi. İdrar kaçırma, pelvik organ prolapsusu ve pelvik taban bozuklukları tedavisi.",
    heroDescription:
      "Ürojinekoloji, kadınlarda pelvik taban bozuklukları, idrar kaçırma ve pelvik organ prolapsusu gibi sorunların tanı ve tedavisi ile ilgilenen jinekolojinin alt dalıdır.",
    sections: [
      {
        title: "Ürojinekoloji Nedir?",
        content:
          "Ürojinekoloji, kadınlarda pelvik taban fonksiyon bozukluklarının tanı ve tedavisi ile ilgilenen bir uzmanlık alanıdır. Pelvik taban kasları ve bağ dokusu; rahim, mesane ve rektumu destekler. Doğum, yaşlanma, menopoz ve genetik faktörler pelvik taban zayıflığına neden olabilir.\n\nDoç. Dr. Erkan Elçi, ürojinekoloji alanında minimal invaziv cerrahi yöntemler ile tedavi uygulamaktadır.",
      },
      {
        title: "Ürojinekolojik Hastalıklar",
        content:
          "Sık görülen ürojinekolojik sorunlar:\n\n- **Stres inkontinans**: Öksürme, hapşırma, gülme sırasında idrar kaçırma\n- **Urge inkontinans**: Ani ve güçlü idrar yapma hissi ile kaçırma\n- **Mikst inkontinans**: Her iki tipin birlikte görülmesi\n- **Pelvik organ prolapsusu**: Rahim sarkması (uterus prolapsusu), mesane sarkması (sistosel), rektum sarkması (rektosel)\n- **Aşırı aktif mesane**: Sık idrara çıkma, gece idrara kalkma\n- **Tekrarlayan idrar yolu enfeksiyonları**",
      },
      {
        title: "Tedavi Yöntemleri",
        content:
          "Ürojinekolojik tedavi seçenekleri:\n\n- **Pelvik taban egzersizleri (Kegel)**: İlk basamak tedavi\n- **Davranışsal tedaviler**: Mesane eğitimi, sıvı yönetimi\n- **İlaç tedavisi**: Antikolinerjik ilaçlar, beta-3 agonistleri\n- **Pesser uygulaması**: Vajinal destek aracı\n- **TOT/TVT ameliyatı**: İdrar kaçırma cerrahisi\n- **Sakrokolpopeksi**: Robotik/laparoskopik prolapsus onarımı\n- **Kolporafi anterior/posterior**: Vajinal prolapsus onarımı\n- **Lazer tedavisi**: Hafif inkontinans ve vajinal atrofi için",
      },
    ],
    faqs: [
      {
        question: "İdrar kaçırma tedavi edilebilir mi?",
        answer:
          "Evet, idrar kaçırma modern tıpta etkili şekilde tedavi edilebilen bir sorundur. Tedavi tipine ve şiddetine göre egzersiz, ilaç veya cerrahi yöntemler uygulanır.",
      },
      {
        question: "Rahim sarkması için ameliyat şart mıdır?",
        answer:
          "Hafif vakalarda pelvik taban egzersizleri ve pesser gibi konservatif yöntemler yeterli olabilir. İleri evre prolapsuslarda cerrahi tedavi gerekebilir.",
      },
    ],
  },

  "vnotes": {
    slug: "vnotes",
    title: "Vnotes (Vaginal Natural Orifice Transluminal Endoscopic Surgery)",
    metaTitle: "vNOTES Cerrahisi | Doç. Dr. Erkan Elçi - İstanbul",
    metaDescription:
      "vNOTES (Vaginal Natural Orifice Transluminal Endoscopic Surgery) nedir? Karında iz bırakmayan yenilikçi cerrahi teknik.",
    heroDescription:
      "vNOTES, vajinal yoldan endoskopik cerrahi gerçekleştirilen, karında hiçbir kesi izi bırakmayan yenilikçi minimal invaziv cerrahi tekniktir.",
    sections: [
      {
        title: "vNOTES Nedir?",
        content:
          "vNOTES (Vaginal Natural Orifice Transluminal Endoscopic Surgery), doğal bir vücut açıklığı olan vajinadan girilerek endoskopik cerrahi gerçekleştirilen ileri bir cerrahi tekniktir. Bu yöntemde karın duvarında hiçbir kesi yapılmaz, tüm cerrahi işlem vajinal yoldan gerçekleştirilir.\n\nvNOTES, 2012 yılında Belçikalı jinekolog Prof. Dr. Jan Baekelandt tarafından geliştirilmiştir. Laparoskopik cerrahinin tüm avantajlarını sunarken karında iz bırakmama avantajını da ekleyen bu teknik, dünyada giderek yaygınlaşmaktadır.\n\nDoç. Dr. Erkan Elçi, Türkiye'de vNOTES tekniğini uygulayan deneyimli cerrahlardan biridir.",
      },
      {
        title: "vNOTES Uygulama Alanları",
        content:
          "vNOTES ile gerçekleştirilebilen jinekolojik ameliyatlar:\n\n- **Miyomektomi**: Miyomların rahim korunarak çıkarılması\n- **Histerektomi**: Rahmin alınması\n- **Kistektomi**: Yumurtalık kistlerinin çıkarılması\n- **Salpenjektomi/Salpingektomi**: Tüp alınması\n- **Ooferektomi**: Yumurtalık alınması\n- **Adneksektomi**: Yumurtalık ve tüpün birlikte alınması\n- **Endometriozis cerrahisi**: Endometriozis odaklarının temizlenmesi\n- **Diagnostik amaçlı**: Pelvik değerlendirme",
      },
      {
        title: "vNOTES Avantajları",
        content:
          "vNOTES tekniğinin avantajları:\n\n- **Karında iz yok**: Hiçbir kesi izi bırakmaz\n- **Daha az ağrı**: Karın duvarı kesilmediğinden ağrı minimumdur\n- **Hızlı iyileşme**: Günlük yaşama çabuk dönüş\n- **Kısa hastane yatışı**: Genellikle aynı gün veya ertesi gün taburculuk\n- **Düşük komplikasyon**: Karın duvarı komplikasyonları (herni, enfeksiyon) riski yoktur\n- **Obez hastalarda avantaj**: Karın duvarı kalınlığından etkilenmez\n- **Yapışıklık riski az**: Karın duvarında yapışıklık oluşmaz\n- **Kozmetik üstünlük**: Görünür iz bırakmaz",
      },
    ],
    faqs: [
      {
        question: "vNOTES her hasta için uygun mudur?",
        answer:
          "Her hastanın uygunluğu bireysel olarak değerlendirilir. Genel olarak birçok jinekolojik ameliyat vNOTES ile yapılabilir ancak bazı durumlar (çok büyük kitleler, ileri evre kanser vb.) için uygun olmayabilir.",
      },
      {
        question: "vNOTES ile laparoskopik cerrahi arasındaki fark nedir?",
        answer:
          "Her iki yöntem de endoskopik cerrahidir. Laparoskopide karından küçük kesilerle girilirken, vNOTES'te vajinal yoldan girilir. vNOTES'in en büyük avantajı karında hiçbir iz bırakmamasıdır.",
      },
      {
        question: "vNOTES ameliyatı ne kadar sürer?",
        answer:
          "Ameliyatın kapsamına bağlı olarak 30 dakikadan 2-3 saate kadar sürebilir. Basit bir kist çıkarma kısa sürerken, karmaşık vakalarda süre uzayabilir.",
      },
    ],
  },
};

// Helper: Get all diseases for sidebar
export const getSidebarDiseases = () => {
  return [
    { title: "Miyom Nedir", href: "/miyom/miyom-nedir" },
    { title: "İzsiz Miyom Ameliyatı", href: "/miyom/izsiz-miyom-ameliyati" },
    { title: "Vajinal Miyom Ameliyatı", href: "/miyom/vajinal-miyom-ameliyati" },
    { title: "Rahim Ağzı Kanseri", href: "/jinekolojik-onkoloji/rahim-agzi-kanseri" },
    { title: "Rahim Kanseri", href: "/jinekolojik-onkoloji/rahim-kanseri" },
    { title: "Yumurtalık Kanseri", href: "/jinekolojik-onkoloji/yumurtalik-kanseri" },
    { title: "Vulva Kanseri", href: "/jinekolojik-onkoloji/vulva-kanseri" },
    { title: "Labioplasti", href: "/genital-estetik/labioplasti" },
    { title: "Vajinal Daraltma", href: "/genital-estetik/vajinal-daraltma" },
    { title: "HPV / Kolposkopi", href: "/hpv-kolposkopi" },
    { title: "Genital Siğil", href: "/hpv-kolposkopi/genital-sigil" },
    { title: "Endometriozis ve Çikolata Kisti", href: "/endometriozis/cikolata-kisti" },
    { title: "Endometriozis Belirtileri", href: "/endometriozis/belirtileri-tedavi" },
    { title: "Robotik Cerrahi", href: "/robotik-cerrahi" },
    { title: "Kısırlık Tedavisi", href: "/kisirlik-tedavisi" },
    { title: "Yüksek Riskli Gebelikler", href: "/yuksek-riskli-gebelikler" },
  ];
};
