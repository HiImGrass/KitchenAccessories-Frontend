'use client';

import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';
import { SvgIcon } from '@/lib/SvgIcons';
import { categoryOptions, sortbyOptions } from './options';

interface SearchCardProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  currentCategory: string;
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
  currentCategory,
  currentSort,
  isPending,
  cols,
  setCols,
  onFilterChange,
}) => {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-lg items-start">
      {/* ===== SIDEBAR DANH MỤC ===== */}
      <aside className="lg:col-span-1 bg-surface-white p-space-md rounded-xl shadow-sm space-y-space-md sticky top-24">
        <div className="flex items-center justify-between border-b pb-3 border-canvas-cream">
          <div className="flex items-center gap-2">
            <SvgIcon name="tune" className="w-5 h-5 text-terracotta" />
            <h2 className="font-title-md text-title-md text-tertiary">Danh Mục</h2>
          </div>
          {currentCategory && (
            <button
              onClick={() => onFilterChange({ category: '', skip: 0 })}
              className="text-xs text-sage hover:text-terracotta transition-colors"
            >
              Xóa lọc
            </button>
          )}
        </div>

        <ul className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin">
          {categoryOptions.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => onFilterChange({ category: cat.value, skip: 0 })}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between ${
                  currentCategory === cat.value
                    ? 'bg-terracotta/10 text-terracotta font-semibold'
                    : 'text-olive-gray hover:bg-canvas-cream'
                }`}
              >
                <span className="truncate">{cat.name}</span>
                {currentCategory === cat.value && (
                  <SvgIcon name="chevron_right" className="w-4 h-4 shrink-0" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ===== DANH SÁCH SẢN PHẨM & TOOLBAR ===== */}
      <section className="lg:col-span-3 space-y-space-md">
        {/* Toolbar */}
        <div className="bg-surface-white rounded-xl p-3 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm text-olive-gray">
            Hiển thị <span className="font-semibold text-tertiary">{products.length}</span> / {total} sản phẩm
            {isPending && <span className="text-xs text-terracotta animate-pulse ml-2">Đang tải...</span>}
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Sắp xếp */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-sage font-medium whitespace-nowrap">Sắp xếp:</span>
              <select
                value={currentSort}
                onChange={(e) => onFilterChange({ sort: e.target.value, skip: 0 })}
                className="bg-canvas-cream px-3 py-1.5 rounded-full text-xs font-semibold text-tertiary focus:outline-none cursor-pointer border-none"
              >
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
                className={`p-1.5 rounded-full ${cols === 4 ? 'bg-surface-white text-tertiary shadow-sm' : 'text-sage'}`}
              >
                <SvgIcon name="grid_4" className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCols(3)}
                className={`p-1.5 rounded-full ${cols === 3 ? 'bg-surface-white text-tertiary shadow-sm' : 'text-sage'}`}
              >
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
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-3 2xl:grid-cols-4'} gap-space-md`}>
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
                onClick={() => onFilterChange({ skip: Math.max(0, skip - limit) })}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-white text-olive-gray disabled:opacity-40 shadow-xs hover:bg-canvas-cream transition-colors"
              >
                <SvgIcon name="arrow_back" className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 bg-terracotta text-on-primary rounded-full text-sm font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => onFilterChange({ skip: skip + limit })}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-white text-olive-gray disabled:opacity-40 shadow-xs hover:bg-canvas-cream transition-colors"
              >
                <SvgIcon name="arrow_forward" className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};