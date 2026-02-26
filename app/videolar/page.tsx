import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import VideoGallery from "@/components/VideoGallery";

export const metadata: Metadata = {
  title: "Videolar",
  description:
    "Doç. Dr. Erkan Elçi'nin eğitici videoları. HPV, gebelik, miyom, laparoskopik cerrahi ve daha fazlası.",
};

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
