"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/product";

interface ProductListSectionProps {
  products: Product[];
}

type SortOption = "featured" | "price-asc" | "price-desc";

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Nổi bật", value: "featured" },
  { label: "Giá thấp → cao", value: "price-asc" },
  { label: "Giá cao → thấp", value: "price-desc" },
];

export default function ProductListSection({ products }: ProductListSectionProps) {
  const { addItem } = useCart();
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const displayedProducts = useMemo(() => {
    const sortedProducts = [...products];

    if (sortOption === "featured") {
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    return sortedProducts.sort((a, b) =>
      sortOption === "price-asc" ? a.price - b.price : b.price - a.price,
    );
  }, [products, sortOption]);

  return (
    <section className="w-full py-space-2xl">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-sage font-semibold">
              Seasonal Selection
            </span>
            <h2 className="font-headline-lg text-headline-lg text-tertiary">
              Kitchen Essentials of the Season
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs bg-surface-white p-1.5 rounded-full shadow-sm">
            {SORT_OPTIONS.map((option) => {
              const isActive = sortOption === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSortOption(option.value)}
                  className={[
                    "px-space-md py-1.5 rounded-full",
                    "font-label-md text-label-md transition-all cursor-pointer",
                    isActive
                      ? "bg-terracotta text-on-primary shadow-sm"
                      : "text-olive-gray hover:text-on-surface hover:bg-secondary-container/50",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="home"
                onAddToCart={addItem}
                onWishlist={(item) => console.log("Wishlist:", item.title)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-surface-white p-10 text-center text-sage">
            Kitchen products are unavailable right now. Please try again shortly.
          </div>
        )}

        <div className="mt-space-xl flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-space-sm bg-surface-white hover:bg-secondary-container/40 text-tertiary font-title-md text-title-md px-space-xl py-3 rounded-full shadow-sm transition-all duration-200"
          >
            <span>View all curated kitchen items</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
