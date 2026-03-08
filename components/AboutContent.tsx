"use client";

import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import { FiCheckCircle, FiBookOpen, FiAward } from "react-icons/fi";
import { FaGraduationCap, FaHospital, FaMedal } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";

const educationIcons: IconType[] = [
  FaGraduationCap,
  FaMedal,
  FaHospital,
  FaMedal,
  FaHospital,
];

export default function AboutContent() {
  const t = useTranslations("about");

  const education = [
    { year: t("edu1Year"), title: t("edu1Title"), institution: t("edu1Institution"), icon: educationIcons[0] },
    { year: t("edu2Year"), title: t("edu2Title"), institution: t("edu2Institution"), icon: educationIcons[1] },
    { year: t("edu3Year"), title: t("edu3Title"), institution: t("edu3Institution"), icon: educationIcons[2] },
    { year: t("edu4Year"), title: t("edu4Title"), institution: t("edu4Institution"), icon: educationIcons[3] },
    { year: t("edu5Year"), title: t("edu5Title"), institution: t("edu5Institution"), icon: educationIcons[4] },
  ];

  const specialtyKeys = [
    "specialty1", "specialty2", "specialty3", "specialty4", "specialty5",
    "specialty6", "specialty7", "specialty8", "specialty9", "specialty10",
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: t("title") }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Doç. Dr. Erkan Elçi
          </h1>
          <p className="text-lg text-primary font-medium">
            {t("doctorTitle")}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Doctor Photo */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-10 shadow-lg">
              <Image
                src="/images/dr-erkan-elci.jpg"
                alt="Doç. Dr. Erkan Elçi"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="leading-relaxed">{t("bio1")}</p>
              <p className="leading-relaxed">{t("bio2")}</p>
              <p className="leading-relaxed">{t("bio3")}</p>
              <p className="leading-relaxed">{t("bio4")}</p>
              <p className="leading-relaxed">{t("bio5")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
              {t("educationBadge")}
            </span>
            <h2 className="section-title">{t("educationTitle")}</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, i) => {
                const Icon = edu.icon;
                return (
                  <div
                    key={i}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-secondary font-semibold">
                        {edu.year}
                      </span>
                      <h3 className="text-lg font-bold text-dark mt-1">
                        {edu.title}
                      </h3>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
              {t("specialtiesBadge")}
            </span>
            <h2 className="section-title">{t("specialtiesTitle")}</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialtyKeys.map((key, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                  <FiBookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {t("publicationsTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("publicationsDesc")}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5">
                  <FiAward className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {t("awardsTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("awardsDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
