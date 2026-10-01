import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin pt-space-xl pb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-space-lg">
            <div className="inline-flex items-center gap-space-xs bg-secondary-container/80 text-on-secondary-fixed font-label-md text-label-md px-space-md py-space-xs rounded-full shadow-sm">
              <span className="material-symbols-outlined text-sm text-terracotta">
                eco
              </span>
              <span>Sustainable Kitchenware · Edition 2025</span>
            </div>
            <div className="space-y-space-sm max-w-2xl">
              <h1 className="font-display-lg text-display-lg text-tertiary tracking-tight leading-none">
                Thoughtful tools for{" "}
                <span className="italic text-terracotta font-normal">
                  everyday cooking.
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-olive-gray max-w-xl">
                Crafted culinary essentials, artisan utensils, and timeless
                kitchenware designed to elevate your daily rituals and nourish
                gatherings.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
              <Link
                className="inline-flex items-center justify-center gap-space-sm bg-terracotta hover:bg-primary-container text-on-primary font-title-md text-title-md px-space-xl py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group"
                data-path="shop-catalog"
                href="/products">
                <span>Shop Kitchen Essentials</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-space-sm bg-surface-white hover:bg-secondary-container/50 text-olive-gray font-title-md text-title-md px-space-lg py-3.5 rounded-full shadow-sm transition-all duration-200"
                data-path="curated-sets"
                href="/products">
                <span className="material-symbols-outlined text-lg text-sage">
                  auto_awesome
                </span>
                <span>Explore Curated Sets</span>
              </Link>
            </div>
            {/* Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-lg w-full">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    local_shipping
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-tertiary">
                    Carbon Neutral
                  </span>
                  <span className="font-label-sm text-label-sm text-sage">
                    Complimentary over $50
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    handyman
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-tertiary">
                    Artisan Crafted
                  </span>
                  <span className="font-label-sm text-label-sm text-sage">
                    Hand-finished woods
                  </span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    history
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-tertiary">
                    Lifetime Care
                  </span>
                  <span className="font-label-sm text-label-sm text-sage">
                    Safe non-toxic materials
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Visual Grid */}
          <div className="lg:col-span-5 relative mt-space-md lg:mt-0">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Main Hero Focus Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-white aspect-[4/5] group">
                <Image
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Warm modern kitchen still life with handcrafted terracotta ceramics, natural olive wood ladles, artisanal copper measuring cups, and crisp flax linen napkins resting on a sunlit limestone countertop. Soft ambient morning light, subtle rustic elegance with high-end editorial culinary photography."
                  alt="Warm modern kitchen still life with terracotta ceramics and olive wood ladles"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6s7dy4pPWYI5_a81Nlg0xNhSE4zKa3GdZmpo7CrEL5pTJsTY0oDEKoIlxFYzQFcYvckXHYYRPDFVKweJC0rsEP4Jw3g6qh7toJKOTHI0VN1c93ptgMSVqPJFbndrT3N5mAbvkelsP2lYjvnheU7FiHcbt3bTXj0eb1qLzjGrM5Mkj0SEgqbxLTVvCAAT-lidgpaZfBiYUgy__ROIml6Uq8exkjIknZJcqSL1dmZv7AIaScHS2Z0to"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/70 via-transparent to-transparent flex flex-col justify-end p-space-lg text-surface-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-warm-sand">
                    Featured Collection
                  </span>
                  <h2 className="font-headline-md text-headline-md text-surface-white font-medium">
                    The Solstice Cookware Set
                  </h2>
                  <div className="flex items-center justify-between mt-space-xs">
                    <span className="font-price-md text-price-md text-surface-white">
                      $145.00 · 5-piece set
                    </span>
                    <Link
                      className="inline-flex items-center text-warm-sand hover:text-surface-white font-label-md text-label-md gap-1"
                      href="/products">
                      <span>View item</span>
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Floating Micro Accent Card */}
              <div className="absolute -bottom-6 -left-6 bg-surface-white/95 backdrop-blur-md p-space-md rounded-xl shadow-lg flex items-center gap-space-md max-w-xs transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
                  <Image
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    data-alt="Macro close-up of a carved olive wood spoon bowl showing organic rich grain pattern and satin hand-rubbed beeswax finish in natural daylight."
                    alt="Close-up of a carved olive wood spoon"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx8WoqOkd2mmK0ftz6cb2pLv_Nl7AhOqOJur0aHDkHLEFx_xWZU0t2ew1eUpcJL5xos8eQkTSispjmLUMUIx7lWtoQvFtJAISOGVOC6AVytffASYAXp5QLCiemVHm6wKuizEP-nvESyjva9Zsl3n5ohlaFkTSYJOiwmO424hx1O2YczERHkAzvrFXvEaDpCgBbJRx-35EvEPAsKo-QVyOJ95EBh4_OmpsRTNYyzxCftArpq1VuNeNL"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-terracotta">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="font-title-md text-title-md text-tertiary">
                      4.9 / 5.0
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-olive-gray truncate">
                    "The balance in hand is extraordinary."
                  </p>
                  <span className="font-label-sm text-label-sm text-sage">
                    Eleanor K., Culinary Writer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
