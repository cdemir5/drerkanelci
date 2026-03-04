import { Link } from "@/i18n/routing";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import { getCategoryByLocale } from "@/data/categories";
import { FiArrowRight } from "react-icons/fi";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const category = getCategoryByLocale(locale, "endometriozis")!;
  return { title: category.metaTitle, description: category.metaDescription };
}

export default async function EndometriozisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const category = getCategoryByLocale(locale, "endometriozis")!;

  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: category.breadcrumb }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            {category.heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {category.description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {category.subPages.map((page) => (
                <Link key={page.href} href={page.href as any} className="card group p-6 flex items-start justify-between gap-4 hover:-translate-y-0.5">
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
