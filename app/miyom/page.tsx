import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Miyom Tedavisi",
  description:
    "Miyom (fibroid) tedavisi hakkında bilgi. İzsiz miyom ameliyatı, laparoskopik ve robotik cerrahi yöntemleri. Doç. Dr. Erkan Elçi.",
};

const subPages = [
  { title: "Miyom Nedir?", description: "Rahim miyomlarının nedenleri, belirtileri ve tedavi yöntemleri hakkında kapsamlı bilgi.", href: "/miyom/miyom-nedir" },
  { title: "İzsiz Miyom Ameliyatı", description: "Laparoskopik ve robotik cerrahi ile karında iz bırakmadan miyom tedavisi.", href: "/miyom/izsiz-miyom-ameliyati" },
  { title: "Vajinal Miyom Ameliyatı", description: "Submüköz miyomların vajinal yoldan histeroskopik olarak çıkarılması.", href: "/miyom/vajinal-miyom-ameliyati" },
  { title: "Kesik ve Dikiş İzi Olmadan Miyom Ameliyatı", description: "Karında hiç iz bırakmadan modern cerrahi yöntemlerle miyom tedavisi.", href: "/miyom/dikissiz-miyom-ameliyati" },
  { title: "Vnotes ile Miyom Ameliyatı", description: "Vajinal doğal orifis yoluyla endoskopik miyom cerrahisi.", href: "/miyom/vnotes-miyom-ameliyati" },
  { title: "Rahim Koruyucu Miyom Ameliyatı", description: "Rahimi koruyarak miyomların güvenle çıkarılması.", href: "/miyom/rahim-koruyucu-miyom-ameliyati" },
  { title: "Rahim Alınmadan Miyom Ameliyatı", description: "Histerektomi yapılmadan miyomların cerrahi tedavisi.", href: "/miyom/rahim-alinmadan-miyom-ameliyati" },
  { title: "Kapalı Miyom Ameliyatı", description: "Laparoskopik kapalı cerrahi ile miyom çıkarma.", href: "/miyom/kapali-miyom-ameliyati" },
  { title: "Rahim Çıkartmadan Miyom Ameliyatı", description: "Rahim muhafaza edilerek yapılan miyomektomi işlemi.", href: "/miyom/rahim-cikartmadan-miyom-ameliyati" },
  { title: "Miyom Sıkça Sorulan Sorular", description: "Miyom hakkında en çok merak edilen sorular ve cevapları.", href: "/miyom/sikca-sorulan-sorular" },
];

export default function MiyomPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Miyom" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Miyom Tedavisi
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Rahim miyomları (fibroidler) kadınlarda en sık görülen iyi huylu
            tümörlerdir. Modern cerrahi yöntemlerle etkili ve güvenli tedavi
            sunuyoruz.
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
              <Sidebar currentSlug="miyom" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
