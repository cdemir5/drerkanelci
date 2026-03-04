"use client";

import { useTranslations } from "next-intl";
import { FiAward, FiCpu, FiBookOpen, FiHeart } from "react-icons/fi";

const icons = [FiAward, FiCpu, FiBookOpen, FiHeart];

export default function WhyChooseUs() {
  const t = useTranslations("home");

  const reasons = [
    { title: t("whyChooseUs.reason1Title"), desc: t("whyChooseUs.reason1Desc") },
    { title: t("whyChooseUs.reason2Title"), desc: t("whyChooseUs.reason2Desc") },
    { title: t("whyChooseUs.reason3Title"), desc: t("whyChooseUs.reason3Desc") },
    { title: t("whyChooseUs.reason4Title"), desc: t("whyChooseUs.reason4Desc") },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            {t("whyChooseUs.badge")}
          </span>
          <h2 className="section-title">{t("whyChooseUs.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
