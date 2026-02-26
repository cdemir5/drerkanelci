"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Kadın Hastalıkları ve Doğum Uzmanı
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Doç. Dr.
              <br />
              <span className="text-primary">Erkan Elçi</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              23 yıllık deneyim ile robotik cerrahi, jinekolojik onkoloji,
              yüksek riskli gebelikler ve ileri laparoskopik cerrahi
              alanlarında uzman hizmet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="btn-primary gap-2">
                Randevu Al
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/hakkimda" className="btn-outline gap-2">
                <FiPlay className="w-4 h-4" />
                Hakkımda
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="flex gap-8 pt-6 border-t border-gray-200">
              {[
                { value: "23+", label: "Yıl Deneyim" },
                { value: "50+", label: "Bilimsel Yayın" },
                { value: "10K+", label: "Ameliyat" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Doctor Photo */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-float" />
              <div className="absolute bottom-20 left-0 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />

              {/* Doctor Image */}
              <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dr-erkan-elci.jpg"
                  alt="Doç. Dr. Erkan Elçi"
                  fill
                  className="object-cover object-[70%_top]"
                  priority
                  sizes="400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/30 to-transparent h-32" />
              </div>

              {/* Floating Card */}
              <div className="absolute -left-8 bottom-24 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-secondary text-lg font-bold">
                    ★
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">İstinye Üniversitesi</p>
                  <p className="text-xs text-gray-500">Medical Park Hastanesi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
