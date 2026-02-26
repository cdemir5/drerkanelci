"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { testimonials } from "@/data/services";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Hasta Yorumları
          </span>
          <h2 className="section-title">Hastalarımız Ne Diyor?</h2>
          <p className="section-subtitle">
            Tedavi süreçlerini tamamlamış hastalarımızın değerli görüşleri
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-secondary" />
                )
              )}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div>
              <p className="font-bold text-dark">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-500">Hasta</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
