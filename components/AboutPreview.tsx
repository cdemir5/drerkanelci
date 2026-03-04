"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function AboutPreview() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
    t("about.highlight5"),
    t("about.highlight6"),
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/dr-erkan-elci.jpg"
                alt="Doç. Dr. Erkan Elçi"
                fill
                className="object-cover object-[70%_top]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold">23+</p>
              <p className="text-sm">{t("about.yearsExperience")}</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full">
              {t("about.badge")}
            </span>
            <h2 className="section-title !mb-2">Doç. Dr. Erkan Elçi</h2>
            <p className="text-primary font-medium">
              {t("hero.badge")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/hakkimda" className="btn-primary gap-2">
              {tc("readMore")}
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
