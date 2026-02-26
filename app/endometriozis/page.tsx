import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Endometriozis Tedavisi",
  description:
    "Endometriozis ve çikolata kisti tedavisi. Laparoskopik ve robotik cerrahi yöntemleri. Doç. Dr. Erkan Elçi.",
};

const subPages = [
  { title: "Endometriozis ve Çikolata Kisti", description: "Endometriozis hastalığı ve çikolata kistlerinin teşhis ve tedavisi.", href: "/endometriozis/cikolata-kisti" },
  { title: "Endometriozis Belirtileri ve Tedavi", description: "Endometriozis belirtileri, tanı yöntemleri ve modern tedavi yaklaşımları.", href: "/endometriozis/belirtileri-tedavi" },
  { title: "Endometriozis ile Baş Etme", description: "Endometriozis ile yaşam kalitesini artırma yolları ve destek yöntemleri.", href: "/endometriozis/bas-etme-yollari" },
];

export default function EndometriozisPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Endometriozis" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Endometriozis
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Endometriozis ve çikolata kisti tedavisinde ileri laparoskopik cerrahi deneyimi ile etkili çözümler.
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
              <Sidebar currentSlug="endometriozis" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
