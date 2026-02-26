import Link from "next/link";
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { getSidebarDiseases } from "@/data/diseases";
import { contactInfo, workingHours } from "@/data/contact";

export default function Sidebar({ currentSlug }: { currentSlug: string }) {
  const diseases = getSidebarDiseases();

  return (
    <div className="space-y-6 lg:sticky lg:top-28">
      {/* Disease List */}
      <div className="bg-white rounded-2xl shadow-lg border p-6">
        <h3 className="text-lg font-bold text-dark mb-4">
          Tedavi Alanları
        </h3>
        <ul className="space-y-1">
          {diseases.map((d) => {
            const isActive = d.href.includes(currentSlug);
            return (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-primary text-white font-medium"
                      : "text-gray-600 hover:bg-primary-50 hover:text-primary"
                  }`}
                >
                  <span>{d.title}</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Contact Card */}
      <div className="gradient-primary rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4">Randevu Alın</h3>
        <div className="space-y-3 mb-6">
          <a
            href={`tel:${contactInfo.phoneClean}`}
            className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
          >
            <FiPhone className="w-4 h-4" />
            {contactInfo.phone}
          </a>
          <div className="flex items-start gap-3 text-sm">
            <FiClock className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              {workingHours.map((wh, i) => (
                <p key={i}>
                  {wh.day}: {wh.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link
          href="/iletisim"
          className="block w-full text-center py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          İletişime Geçin
        </Link>
      </div>
    </div>
  );
}
