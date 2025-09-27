"use client";

import { useState } from "react";

interface Image {
  id: string;
  from: string;
  to: string;
}

interface Props {
  images: Image[];
}

export default function ProductGallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
        <div className="aspect-[1/1] sm:aspect-[5/4] flex items-center justify-center">
          <svg
            id="mainShoe"
            viewBox="0 0 160 90"
            className="w-[86%] h-auto drop-shadow"
          >
            <defs>
              <linearGradient id="gradMain" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={activeImage.from} />
                <stop offset="100%" stopColor={activeImage.to} />
              </linearGradient>
            </defs>
            <path
              d="M14 62c26-3 40-22 72-22l10 24c-24 2-38 16-68 16L14 62z"
              fill="url(#gradMain)"
            />
            <rect x="25" y="56" width="22" height="6" rx="3" fill="#9ca3af" />
            <circle cx="110" cy="76" r="6" fill="#111" />
            <circle cx="68" cy="78" r="6" fill="#111" />
          </svg>
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-neutral-200 bg-white overflow-hidden hover:shadow transition ${
                activeImage.id === img.id ? "is-active" : ""
              }`}
              title={`عکس ${idx + 1}`}
              onClick={() => setActiveImage(img)}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 160 90" className="w-[85%] h-auto">
                  <path
                    d="M14 62c26-3 40-22 72-22l10 24c-24 2-38 16-68 16L14 62z"
                    fill={img.to}
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}