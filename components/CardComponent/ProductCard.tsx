import React from "react";
import { Product } from "@/types/product";
import { SvgIcon } from "@/lib/SvgIcons";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <article className="group relative bg-surface-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      <div className="relative w-full aspect-square bg-canvas-cream overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.discountPercentage > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-terracotta text-on-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full shadow-xs">
            -{Math.round(product.discountPercentage)}% OFF
          </span>
        )}
        <button
          aria-label="Add to Wishlist"
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-white/90 backdrop-blur-sm flex items-center justify-center text-sage hover:text-terracotta hover:bg-surface-white transition-all shadow-xs"
          type="button">
          <SvgIcon name="favorite" className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-sage mb-1">
            <span className="font-label-sm uppercase tracking-wide truncate max-w-[100px]">
              {product.category}
            </span>
            <div className="flex items-center text-terracotta gap-0.5">
              <SvgIcon name="star" className="w-3.5 h-3.5" />
              <span className="font-medium text-tertiary">
                {product.rating}
              </span>
            </div>
          </div>
          <h3 className="font-title-md text-title-md text-tertiary leading-snug group-hover:text-terracotta transition-colors line-clamp-2">
            {product.title}
          </h3>
        </div>

        <div className="pt-3 mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-price-md text-price-md text-terracotta">
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="font-body-md text-body-md text-sage line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <button
            className="bg-terracotta hover:bg-primary text-on-primary px-3 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1 shadow-sm transition-all"
            type="button">
            <SvgIcon name="shopping_bag" className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};
