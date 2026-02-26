import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

export default function ContactCTA() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="gradient-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sağlığınız İçin Bir Adım Atın
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Randevu almak veya sorularınız için bizimle iletişime geçin.
              Size en uygun tedavi planını birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${contactInfo.phoneClean}`}
                className="btn-secondary gap-2 text-lg"
              >
                <FiPhone className="w-5 h-5" />
                {contactInfo.phone}
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all text-lg shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp İle Yazın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
