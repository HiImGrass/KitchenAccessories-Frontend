"use client";

import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { SvgIcon } from "@/lib/SvgIcons";
import { sortbyOptions } from "./options";

interface SearchCardProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  currentSort: string;
  isPending: boolean;
  cols: 3 | 4;
  setCols: (cols: 3 | 4) => void;
  onFilterChange: (params: Record<string, string | number | null>) => void;
}

export const SearchCard: React.FC<SearchCardProps> = ({
  products,
  total,
  skip,
  limit,
  currentSort,
  isPending,
  cols,
  setCols,
  onFilterChange,
}) => {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-space-md">
      {/* Kitchen accessories is the only catalog category, so an unrelated category filter is intentionally omitted. */}
      <section className="space-y-space-md">
        {/* Toolbar */}
        <div className="bg-surface-white rounded-xl p-3 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm text-olive-gray">
            Hiển thị{" "}
            <span className="font-semibold text-tertiary">
              {products.length}
            </span>{" "}
            / {total} sản phẩm
            {isPending && (
              <span className="text-xs text-terracotta animate-pulse ml-2">
                Đang tải...
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Sắp xếp */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-sage font-medium whitespace-nowrap">
                Sắp xếp:
              </span>
              <select
                value={currentSort}
                onChange={(e) =>
                  onFilterChange({ sort: e.target.value, skip: 0 })
                }
                className="bg-canvas-cream px-3 py-1.5 rounded-full text-xs font-semibold text-tertiary focus:outline-none cursor-pointer border-none">
                {sortbyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-canvas-cream p-1 rounded-full">
              <button
                onClick={() => setCols(4)}
                className={`p-1.5 rounded-full cursor-pointer ${cols === 4 ? "bg-surface-white text-tertiary shadow-sm" : "text-sage"}`}>
                <SvgIcon name="grid_4" className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCols(3)}
                className={`p-1.5 rounded-full cursor-pointer ${cols === 3 ? "bg-surface-white text-tertiary shadow-sm" : "text-sage"}`}>
                <SvgIcon name="grid_3" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="bg-surface-white rounded-xl p-12 text-center text-sage">
            <p>Không tìm thấy sản phẩm nào.</p>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 3 ? "xl:grid-cols-3" : "xl:grid-cols-3 2xl:grid-cols-4"} gap-space-md`}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="catalog"
                onAddToCart={(p) => console.log("Add to cart:", p)}
                onWishlist={(p) => console.log("Wishlist:", p)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pt-space-md flex justify-center">
            <div className="flex items-center gap-space-xs font-title-md text-title-md">
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  onFilterChange({ skip: Math.max(0, skip - limit) })
                }
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-white text-olive-gray disabled:opacity-40 shadow-xs hover:bg-canvas-cream transition-colors cursor-pointer disabled:cursor-not-allowed">
                <SvgIcon name="arrow_back" className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 bg-terracotta text-on-primary rounded-full text-sm font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => onFilterChange({ skip: skip + limit })}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-white text-olive-gray disabled:opacity-40 shadow-xs hover:bg-canvas-cream transition-colors cursor-pointer disabled:cursor-not-allowed">
                <SvgIcon name="arrow_forward" className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
