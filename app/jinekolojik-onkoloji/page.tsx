import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Kadın Kanserleri",
  description:
    "Kadın kanserleri teşhis ve tedavisi. Rahim ağzı, rahim, yumurtalık, vulva kanseri. Doç. Dr. Erkan Elçi.",
};

const subPages = [
  { title: "Rahim Ağzı (Serviks) Kanseri", description: "HPV ilişkili rahim ağzı kanserinin erken teşhisi ve tedavisi.", href: "/jinekolojik-onkoloji/rahim-agzi-kanseri" },
  { title: "Rahim Kanseri Tanı ve Tedavisi", description: "Endometrium kanserinin teşhis ve robotik cerrahi ile tedavisi.", href: "/jinekolojik-onkoloji/rahim-kanseri" },
  { title: "HPV Aşılaması", description: "HPV aşısı ile kanser önleme hakkında bilgi.", href: "/jinekolojik-onkoloji/hpv-asilamasi" },
  { title: "HIPEC (Sıcak Kemoterapi)", description: "Karın içi kanserlerde sıcak kemoterapi uygulaması.", href: "/jinekolojik-onkoloji/hipec" },
  { title: "Metastatik Jinekolojik Kanser", description: "Yayılmış jinekolojik kanserlerin tedavi yaklaşımları.", href: "/jinekolojik-onkoloji/metastatik-kanser" },
  { title: "Trofoblastik Tümörler", description: "Mol gebelik ve koryokarsinom teşhis ve tedavisi.", href: "/jinekolojik-onkoloji/trofoblastik-tumorler" },
  { title: "Periton Kanseri Tedavisi", description: "Karın zarı kanserinin sitoredüktif cerrahi ve HIPEC ile tedavisi.", href: "/jinekolojik-onkoloji/periton-kanseri" },
  { title: "Tüp Kanseri Tedavisi", description: "Fallop tüpü kanserinin teşhis ve cerrahi tedavisi.", href: "/jinekolojik-onkoloji/tup-kanseri" },
  { title: "Vajina Kanseri Tedavisi", description: "Vajina kanserinin teşhis ve tedavi yöntemleri.", href: "/jinekolojik-onkoloji/vajina-kanseri" },
  { title: "Nüks Kanserlerin Tedavisi", description: "Tekrarlayan jinekolojik kanserlerin modern tedavi yöntemleri.", href: "/jinekolojik-onkoloji/nuks-kanser" },
  { title: "Rahim Sarkomu Tedavisi", description: "Rahim sarkomu türleri ve cerrahi tedavi yaklaşımları.", href: "/jinekolojik-onkoloji/rahim-sarkomu" },
  { title: "Yumurtalık Kanseri Tedavisi", description: "Yumurtalık kanserinin cerrahi tedavisi ve kemoterapi yaklaşımı.", href: "/jinekolojik-onkoloji/yumurtalik-kanseri" },
  { title: "Meme Kanseri Taraması", description: "Meme kanseri erken teşhis ve tarama programları.", href: "/jinekolojik-onkoloji/meme-kanseri-taramasi" },
  { title: "Vulva Kanseri Tedavisi", description: "Vulva kanserinin belirtileri, teşhisi ve cerrahi tedavisi.", href: "/jinekolojik-onkoloji/vulva-kanseri" },
];

export default function JinekolojikOnkolojiPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Kadın Kanserleri" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Kadın Kanserleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Kadın üreme sistemi kanserlerinin teşhis ve tedavisinde uzman cerrahi deneyim. Robotik cerrahi, laparoskopik cerrahi ve multidisipliner yaklaşım.
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
              <Sidebar currentSlug="jinekolojik-onkoloji" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
