import { getTranslations } from "next-intl/server";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import VideoGallery from "@/components/VideoGallery";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return pageMetadata({
    locale,
    path: "/videolar",
    title: t("videolarTitle"),
    description: t("videolarDescription"),
  });
}

export default function VideolarPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Videolar" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Videolar
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Kadın hastalıkları, gebelik takibi, cerrahi yöntemler ve daha fazlası
            hakkında bilgilendirici videolarımız.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <VideoGallery />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
