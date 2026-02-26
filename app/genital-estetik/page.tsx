import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Genital Estetik",
  description:
    "Genital estetik ameliyatları: Labioplasti, vajinal daraltma, klitoris estetiği ve daha fazlası. Doç. Dr. Erkan Elçi.",
};

const subPages = [
  { title: "Labioplasti Nedir?", description: "İç dudak estetiği ameliyatı hakkında detaylı bilgi, yöntemler ve iyileşme süreci.", href: "/genital-estetik/labioplasti" },
  { title: "Genital Estetik ve Labioplasti", description: "Genital estetik cerrahi ve labioplasti hakkında kapsamlı bilgi.", href: "/genital-estetik/genital-estetik-labioplasti" },
  { title: "Doğal Kadın Genital Estetiği", description: "Doğal görünümlü genital estetik cerrahi yaklaşımları.", href: "/genital-estetik/dogal-genital-estetik" },
  { title: "Revizyon Kadın Genital Estetiği", description: "Daha önce yapılmış genital estetik ameliyatlarının revizyonu.", href: "/genital-estetik/revizyon-genital-estetik" },
  { title: "Vajinal Daraltma (Vajinoplasti)", description: "Vajinal gevşeklik tedavisi, cerrahi yöntemler ve sonuçlar.", href: "/genital-estetik/vajinal-daraltma" },
  { title: "Klitoris Estetiği", description: "Klitoral hood estetiği ve cerrahi yaklaşımlar.", href: "/genital-estetik/klitoris-estetigi" },
  { title: "Monsplasti (Venüs Tepesi Estetiği)", description: "Mons pubis bölgesinin estetik düzeltilmesi.", href: "/genital-estetik/monsplasti" },
  { title: "Perinoplasti Nedir?", description: "Perine bölgesinin onarımı ve estetiği.", href: "/genital-estetik/perinoplasti" },
  { title: "Kök Hücre ve Eksosom Tedavisi", description: "Genital bölgede kök hücre ve eksosom ile rejuvenasyon.", href: "/genital-estetik/kok-hucre-eksosom" },
  { title: "PRP ve Mezoterapi", description: "Genital bölgede PRP ve mezoterapi uygulamaları.", href: "/genital-estetik/prp-mezoterapi" },
  { title: "Orgazm Aşısı Nedir?", description: "O-Shot (Orgazm aşısı) uygulaması hakkında bilgi.", href: "/genital-estetik/orgazm-asisi" },
  { title: "Barbieplasti Nedir?", description: "Dış genital bölgenin kapsamlı estetik düzenlemesi.", href: "/genital-estetik/barbieplasti" },
  { title: "Barbie Genital Estetik", description: "Barbie tipi genital estetik cerrahi hakkında bilgi.", href: "/genital-estetik/barbie-genital-estetik" },
  { title: "Barbie Vajina Estetiği", description: "Barbie vajina estetiği ameliyatı ve sonuçları.", href: "/genital-estetik/barbie-vajina-estetigi" },
  { title: "Yağ İnjeksiyonu", description: "Genital bölgeye yağ transferi ile dolgunlaştırma.", href: "/genital-estetik/yag-injeksiyonu" },
];

export default function GenitalEstetikPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Genital Estetik" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Genital Estetik
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Kadın genital estetik uygulamalarında güvenli, profesyonel ve gizliliğe önem veren yaklaşım.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {subPages.map((page) => (
                <Link key={page.href} href={page.href} className="card group p-6 flex items-start justify-between gap-4 hover:-translate-y-0.5">
                  <div>
                    <h2 className="text-lg font-bold text-dark mb-1 group-hover:text-primary transition-colors">{page.title}</h2>
                    <p className="text-gray-600 text-sm">{page.description}</p>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
            <div className="lg:col-span-1">
              <Sidebar currentSlug="genital-estetik" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
