"use client";
import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  productTitle: string;
  thumbnail: string;
  images: string[];
}

export default function ProductGallery({
  productTitle,
  thumbnail,
  images,
}: GalleryProps) {
  const allImages = Array.from(new Set([thumbnail, ...(images || [])]));
  const [mainImg, setMainImg] = useState(allImages[0]);

  return (
    <div className="space-y-4">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm aspect-[4/3] flex items-center justify-center border border-gray-100">
        <Image
          src={mainImg}
          alt={`${productTitle} product image`}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="w-full h-full object-contain p-4 transition-all duration-300"
        />
      </div>

      {allImages.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
          {allImages.slice(0, 5).map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setMainImg(imgUrl)}
              className={`relative rounded-lg overflow-hidden bg-white aspect-square shadow-sm transition-all border-2
                ${mainImg === imgUrl ? "border-orange-500 opacity-100 scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <Image
                src={imgUrl}
                alt={`${productTitle} thumbnail ${idx + 1}`}
                fill
                sizes="(min-width: 640px) 20vw, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
