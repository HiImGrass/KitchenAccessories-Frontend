"use client";

import Image from "next/image";

import AddToCartButton from "./AddToCartButton";

export interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  categoryLabel: string;
  inStock: boolean;

  onAddToCart?: () => void;
  onWishlist?: () => void;
  onQuickView?: () => void;
}

export default function ProductCard({
  title,
  description,
  image,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  categoryLabel,
  inStock,
  onAddToCart,
  onWishlist,
  onQuickView,
}: ProductCardProps) {
  return (
    <article className="group bg-surface-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative aspect-square overflow-hidden bg-surface-container">
        <Image
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {discount && discount > 0 && (
          <span className="absolute top-3 left-3 bg-terracotta text-on-primary px-2.5 py-1 rounded-full font-label-sm text-label-sm">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          aria-label={`Add ${title} to wishlist`}
          onClick={onWishlist}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-white/90 flex items-center justify-center text-olive-gray hover:text-terracotta transition-colors">
          <span className="material-symbols-outlined text-lg">favorite</span>
        </button>
      </div>

      <div className="p-space-md">
        <span className="font-label-sm text-label-sm text-sage">
          {categoryLabel}
        </span>

        <h3 className="font-title-lg text-title-lg text-tertiary mt-1">
          {title}
        </h3>

        <p className="font-body-md text-body-md text-olive-gray mt-1">
          {description}
        </p>

        <div className="flex items-center gap-1 mt-space-sm">
          <span className="material-symbols-outlined text-base text-terracotta">
            star
          </span>

          <span className="font-label-md text-label-md text-tertiary">
            {rating}
          </span>

          <span className="font-label-sm text-label-sm text-sage">
            ({reviewCount})
          </span>
        </div>

        <div className="flex items-center gap-space-sm mt-space-md">
          <span className="font-price-lg text-price-lg text-tertiary">
            ${price.toFixed(2)}
          </span>

          {originalPrice && (
            <span className="text-sm text-sage line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex gap-space-sm mt-space-md">
          <AddToCartButton
            disabled={!inStock}
            onAddToCart={() => onAddToCart?.()}
          />

          <button
            type="button"
            onClick={onQuickView}
            aria-label={`Quick view ${title}`}
            className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-lg">
              visibility
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
