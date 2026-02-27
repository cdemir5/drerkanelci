"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { FaStar, FaGoogle } from "react-icons/fa";
import {
  testimonials as fallbackTestimonials,
  googleRating as fallbackRating,
} from "@/data/services";
import { contactInfo } from "@/data/contact";
import type { GooglePlaceData } from "@/lib/google-reviews";

interface Props {
  googleData?: GooglePlaceData | null;
}

export default function Testimonials({ googleData }: Props) {
  const [current, setCurrent] = useState(0);

  const reviews = googleData?.reviews ?? fallbackTestimonials;
  const rating = googleData?.rating ?? fallbackRating.score;
  const totalReviews = googleData?.totalReviews ?? fallbackRating.totalReviews;

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Google Hasta Yorumları
          </span>
          <h2 className="section-title">Hastalarımız Ne Diyor?</h2>
          <p className="section-subtitle">
            Google Maps üzerinden hastalarımızın değerli görüşleri
          </p>
          {/* Google Rating Badge */}
          <a
            href={contactInfo.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <FaGoogle className="w-5 h-5 text-[#4285F4]" />
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-dark">{rating}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {totalReviews} Google Yorumu
            </span>
            <FiExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <FaGoogle className="w-4 h-4 text-[#4285F4]" />
              <span className="text-xs text-gray-400 font-medium">
                Google Yorumu
              </span>
            </div>
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div>
              <p className="font-bold text-dark">{reviews[current].name}</p>
              <p className="text-sm text-gray-500">
                {reviews[current].timeAgo}
              </p>
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
              {reviews.map((_, i) => (
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

          {/* Google Maps CTA */}
          <div className="text-center mt-8">
            <a
              href={contactInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Tüm Google Yorumlarını Gör
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
