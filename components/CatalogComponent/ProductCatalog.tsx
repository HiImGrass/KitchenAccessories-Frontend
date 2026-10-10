"use client";

import React, { useState, useCallback, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Product } from "@/types/product";
import { SearchCard } from "./SearchCard";
import { SvgIcon } from "@/lib/SvgIcons";

interface ProductCatalogProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  currentQuery: string;
  currentCategory: string;
  currentSort: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  total,
  skip,
  limit,
  currentQuery,
  currentCategory,
  currentSort,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [cols, setCols] = useState<3 | 4>(4);
  const [searchInput, setSearchInput] = useState(currentQuery);

  const updateFilters = useCallback(
    (newParams: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(newParams).forEach(([key, val]) => {
        if (val === null || val === "") {
          params.delete(key);
        } else {
          params.set(key, String(val));
        }
      });

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    },
    [router, pathname, searchParams],
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ q: searchInput, skip: 0 });
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-space-md lg:px-margin pt-space-md pb-space-2xl">
      <header className="mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <span className="inline-block text-label-sm font-label-sm uppercase tracking-widest text-terracotta bg-primary-fixed/40 px-3 py-1 rounded-full mb-2">
            Curated Catalog
          </span>
          <h1 className="font-display-lg text-display-lg text-tertiary tracking-tight">
            Product Catalog
          </h1>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full md:w-80 relative flex items-center">
          <span className="absolute left-3.5 text-sage select-none">
            <SvgIcon name="search" className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-surface-white pl-10 pr-9 py-2.5 rounded-full font-body-md text-body-md text-on-surface placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta shadow-sm"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => {
                setSearchInput("");
                updateFilters({ q: "", skip: 0 });
              }}
              className="absolute right-3 text-sage hover:text-terracotta">
              <SvgIcon name="cancel" className="w-4 h-4" />
            </button>
          )}
        </form>
      </header>

      <SearchCard
        products={products}
        total={total}
        skip={skip}
        limit={limit}
        currentCategory={currentCategory}
        currentSort={currentSort}
        isPending={isPending}
        cols={cols}
        setCols={setCols}
        onFilterChange={updateFilters}
      />
    </div>
  );
};
