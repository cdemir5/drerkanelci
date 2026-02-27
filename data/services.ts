export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    id: "robotik-cerrahi",
    title: "Robotik Cerrahi",
    description:
      "En son teknoloji robotik cerrahi sistemleri ile minimal invaziv ameliyatlar. Daha az ağrı, daha hızlı iyileşme.",
    image: "/images/robotik-cerrahi.jpg",
    href: "/robotik-cerrahi",
  },
  {
    id: "jinekolojik-onkoloji",
    title: "Jinekolojik Onkoloji",
    description:
      "Kadın üreme sistemi kanserlerinin teşhis ve tedavisinde uzman cerrahi yaklaşım.",
    image: "/images/jinekolojik-onkoloji.jpg",
    href: "/jinekolojik-onkoloji",
  },
  {
    id: "miyom-tedavisi",
    title: "Miyom Tedavisi",
    description:
      "İzsiz miyom ameliyatı dahil modern tedavi yöntemleri ile miyom problemlerine çözüm.",
    image: "/images/miyom-tedavisi.jpg",
    href: "/miyom",
  },
  {
    id: "endometriozis",
    title: "Endometriozis",
    description:
      "Endometriozis ve çikolata kisti tedavisinde ileri laparoskopik cerrahi deneyimi.",
    image: "/images/endometriozis.jpg",
    href: "/endometriozis",
  },
  {
    id: "yuksek-riskli-gebelik",
    title: "Yüksek Riskli Gebelik",
    description:
      "Riskli gebeliklerin takibi ve yönetiminde 23 yıllık deneyim ile güvenli sonuçlar.",
    image: "/images/yuksek-riskli-gebelik.jpg",
    href: "/yuksek-riskli-gebelikler",
  },
  {
    id: "hpv-kolposkopi",
    title: "HPV / Kolposkopi",
    description:
      "HPV teşhis ve tedavisi, kolposkopi ile erken tanı ve koruyucu yaklaşımlar.",
    image: "/images/hpv-kolposkopi.jpg",
    href: "/hpv-kolposkopi",
  },
];

export const stats = [
  { value: 23, suffix: "+", label: "Yıl Deneyim" },
  { value: 50, suffix: "+", label: "Bilimsel Yayın" },
  { value: 10000, suffix: "+", label: "Başarılı Ameliyat" },
  { value: 15000, suffix: "+", label: "Mutlu Hasta" },
];

export const whyChooseUs = [
  {
    title: "23 Yıllık Deneyim",
    description: "Kadın hastalıkları ve doğum alanında geniş klinik tecrübe",
  },
  {
    title: "İleri Teknoloji",
    description: "Robotik cerrahi ve ileri laparoskopik cerrahi imkanları",
  },
  {
    title: "Akademik Uzmanlık",
    description: "50'nin üzerinde uluslararası bilimsel yayın ve araştırma",
  },
  {
    title: "Hasta Odaklı Yaklaşım",
    description: "Her hastaya özel, kişiselleştirilmiş tedavi planları",
  },
];

export const googleRating = {
  score: 5.0,
  totalReviews: 34,
};

export const testimonials = [
  {
    name: "Turkan Turk",
    text: "Kadın doğum doktoru Doç. Dr. Erkan Elçi hocamızı şiddetle TAVSİYE ediyorum. Bugün çocuğumu kucağıma aldıysam hocamızın sayesinde oldu. Daha önce iki kez kürtaj oldum, tekrar hamile kaldığımda birçok hastane dış gebelik dedi. Erkan hocamız beklememiz gerektiğini söyledi. Allah razı olsun ki hocamız bize gebelik tanısı koydu. İyi ki Erkan hocamıza karşılaştık, ailemizden biri artık.",
    rating: 5,
    timeAgo: "9 ay önce",
  },
  {
    name: "Mehmet Şehitoğlu",
    text: "Kesinlikle TAVSİYE EDİYORUM. Erkan hocam gerçekten çok bilgili, bu alanda kendini sürekli geliştiren birisi. Her sorumuzun cevabını gerek dünyada yazılmış farklı makalelerden, gerek yaşadığı tecrübelerden örnek vererek cevapladı. Eşim Plasenta Previa olmasına rağmen gayet sağlıklı bir şekilde doğum yaptırdı. Kızımızı kucağımıza aldık. Ne kadar teşekkür etsek az.",
    rating: 5,
    timeAgo: "2 yıl önce",
  },
  {
    name: "Nilay Bilal",
    text: "Erkan hocam ile 38+2'de Spinal anesteziyle doğumu gerçekleştirdik. Çok şükür hocamın güler yüzü, tecrübesi, ilgi ve alasıyla güzel bir süreç geçirdik. Hamilelik yolculuğunuzda kendisi çok iyi bir yol arkadaşı, tavsiye ederim.",
    rating: 5,
    timeAgo: "bir yıl önce",
  },
  {
    name: "Muhammed Ali Kaya",
    text: "2. Çocuğumuzun takibi için Erkan hocamız ile tanıştığımız günden beri sürekli her gidişimizde eşim ile birlikte bir çok soru biriktirip gidiyoruz ama her ne hikmetse hocam bizim soracağımız soruları tahmin edermiş gibi hepsini kendiliğinden cevaplıyor, sormamıza gerek bile kalmıyor. İyi ki varsınız.",
    rating: 5,
    timeAgo: "8 ay önce",
  },
  {
    name: "Ozlem Peksoy",
    text: "Rahim ameliyatımı yıllardır korkudan erteliyordum. Tesadüfen karşıma çıkan Erkan Hocam bana tüm detayları güzel enerjisi ile uzun uzun anlattı. O kadar kalbi güzel ve muhteşem bir doktor ki o gün 1 saat içinde ameliyata karar verdim. Ameliyatım sorunsuz tamamlandı, 1 hafta içinde herişimi rahatlıkla yapabilecek durumadaydım. Hiç düşünmeden gözünüz kapalı kendinizi emanet edebilirsiniz.",
    rating: 5,
    timeAgo: "2 yıl önce",
  },
];

export const faqs = [
  {
    question: "Randevu nasıl alabilirim?",
    answer:
      "Randevu almak için +90 530 403 69 77 numaralı telefonumuzu arayabilir veya WhatsApp üzerinden bize ulaşabilirsiniz. Ayrıca web sitemizdeki iletişim formunu da kullanabilirsiniz.",
  },
  {
    question: "Muayene ücreti ne kadardır?",
    answer:
      "Muayene ücretleri hakkında güncel bilgi almak için lütfen bizimle iletişime geçiniz. SGK anlaşmamız bulunmaktadır.",
  },
  {
    question: "Robotik cerrahi nedir ve avantajları nelerdir?",
    answer:
      "Robotik cerrahi, cerrahın robot kolları aracılığıyla gerçekleştirdiği minimal invaziv bir cerrahi yöntemdir. Daha az ağrı, daha az kanama, daha küçük kesi, daha hızlı iyileşme ve daha az iz bırakma gibi avantajları vardır.",
  },
  {
    question: "Ameliyat sonrası ne kadar sürede iyileşirim?",
    answer:
      "İyileşme süresi ameliyatın türüne göre değişmekle birlikte, laparoskopik ve robotik cerrahi yöntemlerinde genellikle 1-2 hafta içinde günlük aktivitelere dönülebilir.",
  },
  {
    question: "Online görüşme yapıyor musunuz?",
    answer:
      "Evet, yurt dışından veya şehir dışından gelen hastalarımız için online video görüşme imkanı sunmaktayız. Randevu için bize ulaşabilirsiniz.",
  },
  {
    question: "Hangi hastanede çalışıyorsunuz?",
    answer:
      "İstinye Üniversitesi Medical Park Gaziosmanpaşa Hastanesi'nde hizmet vermekteyim. Adres: Küçükbakkalköy, Allianz Tower, Kayışdağı Cd. No:1 Kat: 21, 22, İstanbul.",
  },
];
