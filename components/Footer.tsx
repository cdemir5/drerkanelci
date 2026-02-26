import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { contactInfo } from "@/data/contact";
import { getSidebarDiseases } from "@/data/diseases";
import Logo from "@/components/Logo";

export default function Footer() {
  const diseases = getSidebarDiseases().slice(0, 8);

  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="small" />
              <h3 className="text-xl font-bold text-white">
                Doç. Dr. Erkan Elçi
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Kadın Hastalıkları ve Doğum Uzmanı. 23 yıllık deneyim ile
              robotik cerrahi, jinekolojik onkoloji ve yüksek riskli
              gebelikler alanlarında hizmet vermektedir.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: contactInfo.social.instagram },
                { icon: FaFacebookF, href: contactInfo.social.facebook },
                { icon: FaLinkedinIn, href: contactInfo.social.linkedin },
                { icon: FaYoutube, href: contactInfo.social.youtube },
                { icon: FaWhatsapp, href: contactInfo.whatsapp },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hızlı Linkler
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Anasayfa", href: "/" },
                { label: "Hakkımda", href: "/hakkimda" },
                { label: "Robotik Cerrahi", href: "/robotik-cerrahi" },
                { label: "Kısırlık Tedavisi", href: "/kisirlik-tedavisi" },
                { label: "Yüksek Riskli Gebelikler", href: "/yuksek-riskli-gebelikler" },
                { label: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Diseases */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hastalıklar
            </h4>
            <ul className="space-y-2.5">
              {diseases.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FiMapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  {contactInfo.address}
                  <br />
                  {contactInfo.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneClean}`}
                  className="flex items-center gap-3 hover:text-secondary transition-colors"
                >
                  <FiPhone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 hover:text-secondary transition-colors"
                >
                  <FiMail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-400">
                {contactInfo.hospital}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Doç. Dr. Erkan Elçi. Tüm hakları
            saklıdır.
          </p>
          <p className="text-xs text-gray-500">
            Bu sitedeki bilgiler genel bilgilendirme amaçlıdır. Tıbbi teşhis
            ve tedavi için mutlaka doktorunuza başvurunuz.
          </p>
        </div>
      </div>
    </footer>
  );
}
