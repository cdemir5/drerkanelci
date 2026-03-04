"use client";

import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { contactInfo } from "@/data/contact";
import { getSidebarByLocale } from "@/data/getDiseaseData";
import Logo from "@/components/Logo";

export default function Footer() {
  const t = useTranslations("common");
  const tAbout = useTranslations("about");
  const tNav = useTranslations("navigation");
  const locale = useLocale();
  const diseases = getSidebarByLocale(locale).slice(0, 8);

  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Logo size="small" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {tAbout("footerDescription")}
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
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { labelKey: "home", href: "/" as const },
                { labelKey: "about", href: "/hakkimda" as const },
                { labelKey: "roboticSurgery", href: "/robotik-cerrahi" as const },
                { labelKey: "infertility", href: "/kisirlik-tedavisi" as const },
                { labelKey: "highRiskPregnancies", href: "/yuksek-riskli-gebelikler" as const },
                { labelKey: "contact", href: "/iletisim" as const },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {tNav(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Diseases */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("diseases")}
            </h4>
            <ul className="space-y-2.5">
              {diseases.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href as any}
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
              {t("contact")}
            </h4>
            {/* Map */}
            <a
              href={contactInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden mb-4 h-[180px] relative group"
            >
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="100%"
                className="border-0 pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("locationMap")}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-primary px-3 py-1.5 rounded-lg transition-opacity">
                  {t("openInGoogleMaps")}
                </span>
              </div>
            </a>
            <ul className="space-y-4">
              <li>
                <a
                  href={contactInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 hover:text-secondary transition-colors"
                >
                  <FiMapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {contactInfo.address}
                  </span>
                </a>
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Doç. Dr. Erkan Elçi. {t("allRightsReserved")} | <a href="mailto:cdemir5@hotmail.com" className="hover:text-secondary transition-colors">{t("designedBy")}</a>
          </p>
          <p className="text-xs text-gray-500">
            {t("medicalDisclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
