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

export const testimonials = [
  {
    name: "Ayşe Y.",
    text: "Doç. Dr. Erkan Elçi sayesinde miyom ameliyatımı başarılı bir şekilde atlattım. Kendisi çok ilgili ve bilgili bir doktor. Ameliyat sonrası süreç de çok rahat geçti.",
    rating: 5,
  },
  {
    name: "Fatma K.",
    text: "Yüksek riskli gebeliğim boyunca beni takip etti ve sağlıklı bir doğum gerçekleştirdik. Her kontrolde detaylı bilgi veriyor ve güven veriyor.",
    rating: 5,
  },
  {
    name: "Zeynep M.",
    text: "Endometriozis tedavim için başvurdum. Laparoskopik cerrahi ile başarılı bir operasyon geçirdim. Çok profesyonel ve güler yüzlü bir ekip.",
    rating: 5,
  },
  {
    name: "Elif S.",
    text: "Robotik cerrahi ile ameliyat oldum. İyileşme sürecim çok hızlı geçti. Doç. Dr. Elçi'ye ve ekibine çok teşekkür ederim.",
    rating: 5,
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
