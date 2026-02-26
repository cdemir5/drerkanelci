import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import { Disease } from "@/data/diseases";
import { contactInfo } from "@/data/contact";
import { FiPhone, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function DiseasePageLayout({
  disease,
}: {
  disease: Disease;
}) {
  const breadcrumbItems = [];
  if (disease.parentSlug && disease.parentTitle) {
    breadcrumbItems.push({
      label: disease.parentTitle,
      href: `/${disease.parentSlug}`,
    });
  }
  breadcrumbItems.push({ label: disease.title });

  return (
    <>
      {/* Hero Banner */}
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            {disease.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {disease.heroDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Sections */}
              {disease.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-dark mb-4">
                    {section.title}
                  </h2>
                  <div
                    className="prose prose-gray max-w-none text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: section.content
                        .replace(/\n\n/g, "</p><p>")
                        .replace(/\n- /g, "</p><li>")
                        .replace(/<li>/g, '<li class="ml-4 mb-1">')
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-dark">$1</strong>'
                        )
                        .replace(/^/, "<p>")
                        .replace(/$/, "</p>"),
                    }}
                  />
                </div>
              ))}

              {/* Symptoms */}
              {disease.symptoms && disease.symptoms.length > 0 && (
                <div className="bg-primary-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Belirtiler
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {disease.symptoms.map((symptom, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ */}
              {disease.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Sık Sorulan Sorular
                  </h2>
                  <div className="space-y-4">
                    {disease.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark hover:text-primary transition-colors">
                          {faq.question}
                          <span className="ml-4 text-xl text-primary group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="gradient-primary rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Randevu Almak İster Misiniz?
                </h3>
                <p className="text-white/80 mb-6">
                  {disease.title} hakkında detaylı bilgi ve muayene için
                  bizimle iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`tel:${contactInfo.phoneClean}`}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <FiPhone className="w-4 h-4" />
                    Hemen Ara
                  </a>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar currentSlug={disease.slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
