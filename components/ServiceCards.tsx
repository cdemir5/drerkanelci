"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FiArrowRight } from "react-icons/fi";

const serviceKeys = [
  { id: "roboticSurgery", image: "/images/robotik-cerrahi.jpg", href: "/robotik-cerrahi" as const },
  { id: "gynecologicalOncology", image: "/images/jinekolojik-onkoloji.jpg", href: "/jinekolojik-onkoloji" as const },
  { id: "fibroidTreatment", image: "/images/miyom-tedavisi.jpg", href: "/miyom" as const },
  { id: "endometriosis", image: "/images/endometriozis.jpg", href: "/endometriozis" as const },
  { id: "highRiskPregnancy", image: "/images/yuksek-riskli-gebelik.jpg", href: "/yuksek-riskli-gebelikler" as const },
  { id: "hpvColposcopy", image: "/images/hpv-kolposkopi.jpg", href: "/hpv-kolposkopi" as const },
];

export default function ServiceCards() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            {t("services.badge")}
          </span>
          <h2 className="section-title">{t("services.title")}</h2>
          <p className="section-subtitle">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((service) => {
            const titleKey = `services.${service.id}` as any;
            const descKey = `services.${service.id}Desc` as any;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="card group overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                    {t(titleKey)}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t(descKey)}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    {tc("detailedInfo")}
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
