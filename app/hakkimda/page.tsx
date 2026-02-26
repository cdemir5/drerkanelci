import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import { FiCheckCircle, FiBookOpen, FiAward } from "react-icons/fi";
import { FaGraduationCap, FaHospital, FaMedal } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Doç. Dr. Erkan Elçi - Kadın Hastalıkları ve Doğum Uzmanı. 23 yıllık deneyim, 50+ bilimsel yayın. Özgeçmiş ve uzmanlık alanları.",
};

const education = [
  {
    year: "2002 - 2007",
    title: "Tıp Fakültesi",
    institution: "Ege Üniversitesi Tıp Fakültesi",
    icon: FaGraduationCap,
  },
  {
    year: "2007 - 2013",
    title: "Kadın Hastalıkları ve Doğum Uzmanlığı",
    institution: "Yüzüncü Yıl Tıp Fakültesi",
    icon: FaMedal,
  },
  {
    year: "2013 - Günümüz",
    title: "Kadın Hastalıkları ve Doğum Uzmanı - Doçent",
    institution: "İstinye Üniversitesi Medical Park Gaziosmanpaşa Hastanesi",
    icon: FaHospital,
  },
];

const specialties = [
  "Robotik Cerrahi",
  "Kısırlık (İnfertilite)",
  "Yüksek Riskli Gebelikler",
  "İleri Laparoskopik Cerrahi",
  "Histeroskopi",
  "Jinekoloji - Onkoloji",
  "Üçüz Gebelik",
  "Gebeliğe Bağlı Hipertansiyon",
  "Gestasyonel Diyabet",
  "Ağrılı Adet (Dismenore)",
  "Sistektomi",
  "Miyom Tedavisi",
  "Endometriozis",
  "HPV / Kolposkopi",
  "Genital Estetik",
];

export default function HakkimdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Hakkımda" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            Doç. Dr. Erkan Elçi
          </h1>
          <p className="text-lg text-primary font-medium">
            Kadın Hastalıkları ve Doğum Uzmanı
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
              <p className="text-lg leading-relaxed">
                Dr. Erkan Elçi, İstanbul, Türkiye&apos;de yaşayan saygın bir Jinekolog
                ve Kadın Doğum uzmanıdır. 23 yıllık etkileyici tecrübesiyle
                İstinye Üniversitesi Medical Park Gaziosmanpaşa Hastanesi&apos;nin
                güvenilir danışmanıdır.
              </p>
              <p className="leading-relaxed">
                Dr. Elçi, Robotik Cerrahi, Kısırlık, Yüksek Riskli Gebelikler,
                İleri Laparoskopik Cerrahi, Histeroskopi, Jinekoloji – Onkoloji,
                Üçüz Gebelik, Gebeliğe Bağlı Hipertansiyon, Gestasyonel Diyabet,
                Ağrılı Adet ve Sistektomi gibi çok çeşitli alanlarda
                uzmanlaşmıştır.
              </p>
              <p className="leading-relaxed">
                Tıp eğitimini 2007 yılında Ege Üniversitesi Tıp Fakültesi&apos;nde
                tamamladı ve 2013 yılında Yüzüncü Yıl Tıp Fakültesi&apos;nde Kadın
                Hastalıkları ve Doğum alanında uzmanlaştı.
              </p>
              <p className="leading-relaxed">
                Dr. Elçi, 50&apos;nin üzerinde araştırma makalesi ile Kadın
                Hastalıkları ve Doğum alanına önemli katkılarda bulunmuştur.
                Saygın dergilerde yayınlanan çalışmaları ile akademik alanda da
                tanınan Dr. Elçi, uzmanlığı ve özverisi ile çok sayıda ödül ve
                tanınma kazanmıştır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
              Eğitim
            </span>
            <h2 className="section-title">Eğitim ve Kariyer</h2>
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
              Uzmanlık
            </span>
            <h2 className="section-title">Uzmanlık Alanları</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((spec, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">
                  {spec}
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
                  Bilimsel Yayınlar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  50&apos;nin üzerinde araştırma makalesi saygın uluslararası ve
                  ulusal tıp dergilerinde yayınlanmıştır. Jinekoloji ve
                  obstetrik alanında güncel araştırmalara katkı sağlamaya devam
                  etmektedir.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5">
                  <FiAward className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  Ödüller ve Tanınırlık
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Uzmanlığı ve özverili çalışmaları ile çok sayıda ulusal ve
                  uluslararası ödül ve tanınma kazanmıştır. Akademik ve klinik
                  başarıları ile alanında saygın bir konuma sahiptir.
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
