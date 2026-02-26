"use client";

import { useState } from "react";
import { FaYoutube, FaPlay } from "react-icons/fa";
import { videos, videoCategories } from "@/data/videos";

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered =
    activeCategory === "Tümü"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {videoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaPlay className="w-5 h-5 text-white ml-1" />
                </div>
              </div>
              {/* Category badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 text-white text-xs font-medium rounded-lg backdrop-blur-sm">
                {video.category}
              </span>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-dark text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-2.5 text-xs text-gray-400">
                <FaYoutube className="w-4 h-4 text-red-500" />
                <span>YouTube&apos;da İzle</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* YouTube Channel CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://www.youtube.com/@ErkanElci"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
        >
          <FaYoutube className="w-6 h-6" />
          YouTube Kanalımıza Abone Olun
        </a>
      </div>
    </>
  );
}
