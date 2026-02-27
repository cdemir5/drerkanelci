"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { videos } from "@/data/videos";

const defaultVideos = videos.slice(0, 3);

export default function VideoPreview() {
  const [randomVideos, setRandomVideos] = useState(defaultVideos);

  useEffect(() => {
    const shuffled = [...videos].sort(() => Math.random() - 0.5);
    setRandomVideos(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full mb-4">
            Video İçerikler
          </span>
          <h2 className="section-title">Bilgilendirici Videolarımız</h2>
          <p className="section-subtitle">
            Sağlığınız hakkında bilgilendirici YouTube videolarımız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {randomVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FiPlay className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 text-white text-xs rounded-full">
                  {video.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-dark text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                  <FaYoutube className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/videolar"
            className="inline-flex items-center gap-2 btn-outline"
          >
            Tüm Videoları Gör
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
