import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { services } from "@/data/services";

export default function ServiceCards() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Uzmanlık Alanları
          </span>
          <h2 className="section-title">Tedavi ve Hizmetlerimiz</h2>
          <p className="section-subtitle">
            En son teknoloji ve 23 yıllık deneyim ile kapsamlı jinekolojik
            hizmetler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="card group overflow-hidden hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Detaylı Bilgi
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
