"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { SvgIcon } from "@/lib/SvgIcons";

export interface ProductCardProps {
  product: Product;
  variant?: "home" | "catalog";
  onAddToCart?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = "catalog",
  onAddToCart,
  onWishlist,
  onQuickView,
}) => {
  // Bỏ bọc kiểm tra an toàn tránh lỗi crash if product.discountPercentage bị undefined
  const rawDiscount = product?.discountPercentage ?? 0;
  const discountPercent = rawDiscount > 0 ? Math.round(rawDiscount) : 0;

  // Bỏ bọc kiểm tra an toàn tránh lỗi product.price.toFixed is not a function
  const rawPrice = product?.price ?? 0;
  const calculatedOriginalPrice =
    discountPercent > 0
      ? (rawPrice / (1 - discountPercent / 100)).toFixed(2)
      : null;

  return (
    <article className="group relative bg-surface-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* ===== THUMBNAIL & BADGES ===== */}
      <div className="relative w-full aspect-square bg-canvas-cream overflow-hidden">
        {/* Link chuyển trang bọc quanh ảnh */}
        <Link
          href={`/products/${product.id}`}
          className="absolute inset-0 z-0 block">
          <Image
            fill
            src={product.thumbnail || product.images?.[0] || "/placeholder.jpg"}
            alt={product.title || "Product image"}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badge giảm giá */}
        {discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-terracotta text-on-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full shadow-xs z-10 pointer-events-none">
            -{discountPercent}% {variant === "catalog" && "OFF"}
          </span>
        )}

        {/* Nút Yêu thích (Tránh xa thẻ Link) */}
        <button
          type="button"
          aria-label={`Add ${product.title || "product"} to wishlist`}
          onClick={(e) => {
            e.preventDefault(); // Ngăn sự kiện lây lan
            onWishlist?.(product);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-white/90 backdrop-blur-sm flex items-center justify-center text-sage hover:text-terracotta hover:bg-surface-white transition-all shadow-xs z-10 cursor-pointer">
          <SvgIcon name="favorite" className="w-4 h-4" />
        </button>
      </div>

      {/* ===== CONTENT AREA ===== */}
      <div className="p-3.5 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between text-xs text-sage mb-1">
            <span className="font-label-sm uppercase tracking-wide truncate max-w-[120px]">
              {product.category}
            </span>
            <div className="flex items-center text-terracotta gap-0.5">
              <SvgIcon name="star" className="w-3.5 h-3.5" />
              <span className="font-medium text-tertiary">
                {product.rating ?? 0}
              </span>
            </div>
          </div>

          {/* Tiêu đề có Link chuyển trang */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-title-md text-title-md text-tertiary leading-snug group-hover:text-terracotta transition-colors line-clamp-2 cursor-pointer">
              {product.title}
            </h3>
          </Link>

          {variant === "home" && product.description && (
            <p className="font-body-md text-body-md text-olive-gray mt-1 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="pt-3 mt-2 border-t border-canvas-cream/50 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-price-md text-price-md text-terracotta font-semibold">
              ${rawPrice.toFixed(2)}
            </span>
            {calculatedOriginalPrice && (
              <span className="font-body-md text-body-md text-sage line-through text-xs">
                ${calculatedOriginalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={product.stock === 0}
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.(product);
              }}
              className="bg-terracotta hover:bg-primary disabled:bg-gray-300 text-on-primary px-3 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1 shadow-sm transition-all cursor-pointer">
              <SvgIcon name="shopping_bag" className="w-3.5 h-3.5" />
              <span>{product.stock === 0 ? "Out of Stock" : "Add"}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
