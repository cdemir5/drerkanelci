import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import { diseases } from "@/data/diseases";
import { FiArrowRight } from "react-icons/fi";

const disease = diseases["hpv-kolposkopi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

const subPages = [
  { title: "HPV Nedir?", description: "Human Papilloma Virüsü (HPV) hakkında temel bilgiler.", href: "/hpv-kolposkopi/hpv-nedir" },
  { title: "HPV İlişkili Hastalıklar", description: "HPV virüsünün neden olduğu hastalıklar ve kanser riskleri.", href: "/hpv-kolposkopi/hpv-iliskili-hastaliklar" },
  { title: "CIN1, CIN2, CIN3 Nedir?", description: "Servikal intraepitelyal neoplazi (CIN) evreleri ve takibi.", href: "/hpv-kolposkopi/cin-siniflandirmasi" },
  { title: "HSIL Nedir ve Nasıl Tedavi Edilir?", description: "Yüksek dereceli skuamöz intraepitelyal lezyon teşhis ve tedavisi.", href: "/hpv-kolposkopi/hsil" },
  { title: "LSIL Nedir?", description: "Düşük dereceli skuamöz intraepitelyal lezyon takip ve tedavisi.", href: "/hpv-kolposkopi/lsil" },
  { title: "ASC-H Nedir ve Nasıl Tedavi Edilir?", description: "ASC-H smear sonucu ve tedavi yaklaşımları.", href: "/hpv-kolposkopi/asc-h" },
  { title: "ASCUS Nedir ve Nasıl Tedavi Edilir?", description: "ASCUS smear sonucu, takip ve tedavi yöntemleri.", href: "/hpv-kolposkopi/ascus" },
  { title: "PAP Smear ve HPV", description: "PAP smear testi ve HPV tarama yöntemleri.", href: "/hpv-kolposkopi/pap-smear" },
  { title: "HPV Aşılaması", description: "HPV aşısı ile kanser önleme hakkında bilgi.", href: "/hpv-kolposkopi/hpv-asilamasi" },
  { title: "HPV ve Genital Siğil", description: "HPV kaynaklı genital siğillerin belirtileri ve tedavisi.", href: "/hpv-kolposkopi/genital-sigil" },
  { title: "Genital Siğil Tedavisi", description: "Genital siğillerin cerrahi ve medikal tedavi yöntemleri.", href: "/hpv-kolposkopi/genital-sigil-tedavisi" },
  { title: "HPV Tedavisinde Bitkisel Tedaviler", description: "HPV tedavisinde kullanılan bitkisel ve doğal yöntemler.", href: "/hpv-kolposkopi/bitkisel-tedaviler" },
  { title: "Gebelerde Genital Siğil Tedavisi", description: "Hamilelik döneminde genital siğil tedavi yaklaşımları.", href: "/hpv-kolposkopi/gebelerde-genital-sigil" },
  { title: "CIN Tedavisinde Lazer", description: "Servikal displazinin lazer ile tedavisi.", href: "/hpv-kolposkopi/cin-lazer-tedavisi" },
  { title: "LEEP Ameliyatı Nedir?", description: "LEEP (Loop Elektrocerrahi Eksizyon Prosedürü) hakkında bilgi.", href: "/hpv-kolposkopi/leep-ameliyati" },
  { title: "Konizasyon Nedir?", description: "Servikal konizasyon ameliyatı ve endikasyonları.", href: "/hpv-kolposkopi/konizasyon" },
  { title: "Kolposkopi Nedir?", description: "Kolposkopi muayenesi, nasıl yapılır ve ne zaman gerekir.", href: "/hpv-kolposkopi/kolposkopi-nedir" },
];

export default function HpvKolposkopiPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "HPV / Kolposkopi" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            HPV ve Kolposkopi
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {disease.heroDescription}
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

              {/* Disease content below links */}
              <div className="mt-8 prose prose-lg max-w-none">
                {disease.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-dark mb-4">{section.title}</h2>
                    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <Sidebar currentSlug="hpv-kolposkopi" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
