import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const highlights = [
  "23 yıllık klinik deneyim",
  "50+ uluslararası bilimsel yayın",
  "Robotik cerrahi uzmanı",
  "İleri laparoskopik cerrahi",
  "Jinekolojik onkoloji deneyimi",
  "Yüksek riskli gebelik yönetimi",
];

export default function AboutPreview() {
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
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold">23+</p>
              <p className="text-sm">Yıl Deneyim</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full">
              Hakkımda
            </span>
            <h2 className="section-title !mb-2">Doç. Dr. Erkan Elçi</h2>
            <p className="text-primary font-medium">
              Kadın Hastalıkları ve Doğum Uzmanı
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dr. Erkan Elçi, İstanbul&apos;da yaşayan saygın bir Jinekolog ve Kadın
              Doğum uzmanıdır. İstinye Üniversitesi Medical Park Gaziosmanpaşa
              Hastanesi&apos;nin güvenilir danışmanı olarak görev yapmaktadır. Tıp
              eğitimini 2007 yılında Ege Üniversitesi Tıp Fakültesi&apos;nde tamamlamış,
              2013 yılında Yüzüncü Yıl Tıp Fakültesi&apos;nde uzmanlığını almıştır.
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
              Devamını Oku
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
