"use client";

import { useState } from "react";

interface AppleCardProps {
  name: string;
  description: string;
  images: string[];
  color?: string;
}

export default function AppleCard({
  name,
  description,
  images,
  color = "from-brand-green/10 to-brand-lime/10",
}: AppleCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10 border border-gray-100">
      {/* Image Carousel */}
      <div className={`relative aspect-[3/2] bg-gradient-to-br ${color} overflow-hidden`}>
        <img
          src={images[currentIndex]}
          alt={`${name} apple`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Navigation Arrows — visible on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "bg-white w-5 h-2"
                    : "bg-white/40 w-2 h-2 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-brand-green transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand-green-dark hover:text-brand-green transition-all duration-300 group/link"
        >
          Inquire Now
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
