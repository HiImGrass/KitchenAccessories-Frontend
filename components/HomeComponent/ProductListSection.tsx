import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { Product } from "@/types/product";
import { useState, useRef, useEffect } from "react";

type Filter = "all" | "popular" | "new" | "picks";

type ProductWithFilter = Product & {
  filters: Exclude<Filter, "all">[];
};

const FILTERS: {
  label: string;
  value: Filter;
}[] = [
  { label: "All Items", value: "all" },
  { label: "Most Popular", value: "popular" },
  { label: "New in Stock", value: "new" },
  { label: "Staff Picks", value: "picks" },
];

const PRODUCTS: ProductWithFilter[] = [
  {
    id: 1,
    title: "Ceramic Coffee Mug",
    description: "Beautiful handmade ceramic coffee mug.",
    price: 19.99,
    discountPercentage: 20,
    rating: 4.8,
    stock: 15,
    brand: "Artisan",
    category: "Kitchen",
    thumbnail: "/images/products/mug.jpg",
    images: ["/images/products/mug.jpg"],
    filters: ["popular", "picks"],
  },
  {
    id: 2,
    title: "Olive Wood Spoon",
    description: "Hand-carved olive wood cooking spoon.",
    price: 24.99,
    discountPercentage: 0,
    rating: 4.9,
    stock: 8,
    brand: "Artisan",
    category: "Utensils",
    thumbnail: "/images/products/mug.jpg",
    images: ["/images/products/mug.jpg"],
    filters: ["new", "picks"],
  },
  {
    id: 3,
    title: "Artisan Mixing Bowl",
    description: "Stoneware bowl designed for everyday prep.",
    price: 39.99,
    discountPercentage: 10,
    rating: 4.7,
    stock: 20,
    brand: "Artisan",
    category: "Baking",
    thumbnail: "/images/products/mug.jpg",
    images: ["/images/products/mug.jpg"],
    filters: ["new"],
  },
  {
    id: 4,
    title: "Brass Measuring Set",
    description: "Precision measuring tools with warm brass finish.",
    price: 29.99,
    discountPercentage: 0,
    rating: 4.9,
    stock: 5,
    brand: "Artisan",
    category: "Baking",
    thumbnail: "/images/products/mug.jpg",
    images: ["/images/products/mug.jpg"],
    filters: ["popular", "picks"],
  },
];
export default function ProductListSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const filteredProducts =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.filters.includes(activeFilter));

  function handleAddToCart(product: Product) {
    console.log("Add to cart:", product);
    setToastVisible(true);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  return (
    <>
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
              {FILTERS.map((filter) => {
                const active = filter.value === activeFilter;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={[
                      "px-space-md py-1.5 rounded-full",
                      "font-label-md text-label-md transition-all cursor-pointer",
                      active
                        ? "bg-terracotta text-on-primary shadow-sm"
                        : "text-olive-gray hover:text-on-surface hover:bg-secondary-container/50",
                    ].join(" ")}>
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="home"
                onAddToCart={(p) => handleAddToCart(p)}
                onWishlist={(p) => console.log("Wishlist:", p.title)}
                onQuickView={(p) => console.log("Quick view:", p.title)}
              />
            ))}
          </div>

          <div className="mt-space-xl flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-space-sm bg-surface-white hover:bg-secondary-container/40 text-tertiary font-title-md text-title-md px-space-xl py-3 rounded-full shadow-sm transition-all duration-200">
              <span>View all curated kitchen items</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CartToast visible={toastVisible} />
    </>
  );
}

function CartToast({ visible }: { visible: boolean }) {
  return (
    <div
      className={[
        "fixed bottom-6 right-6 z-50 transform transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0",
      ].join(" ")}>
      <div className="bg-surface-white border border-warm-sand/50 shadow-xl rounded-2xl p-space-md flex items-center gap-space-md">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-terracotta">
          <span className="material-symbols-outlined text-xl">
            check_circle
          </span>
        </div>
        <div>
          <p className="font-title-md text-title-md text-tertiary">
            Added to your basket
          </p>
          <p className="font-label-sm text-label-sm text-olive-gray">
            Explore more items or proceed to checkout.
          </p>
        </div>
        <Link
          href="/cart"
          className="bg-terracotta text-on-primary font-label-md text-label-md px-3 py-1.5 rounded-full hover:bg-primary-container">
          View Cart
        </Link>
      </div>
    </div>
  );
}
