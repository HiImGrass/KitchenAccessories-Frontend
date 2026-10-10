"use client";
import { useState } from "react";

interface GalleryProps {
  thumbnail: string;
  images: string[];
}

export default function ProductGallery({ thumbnail, images }: GalleryProps) {
  const allImages = Array.from(new Set([thumbnail, ...(images || [])]));
  const [mainImg, setMainImg] = useState(allImages[0]);

  return (
    <div className="space-y-4">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm aspect-[4/3] flex items-center justify-center border border-gray-100">
        <img
          src={mainImg}
          alt="Product Cover"
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
              className={`rounded-lg overflow-hidden bg-white aspect-square shadow-sm transition-all border-2 
                ${mainImg === imgUrl ? "border-orange-500 opacity-100 scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}