import Link from "next/link";
import Image from "next/image";

export default function CollectionsSection() {
  return (
    <section className="w-full py-space-2xl bg-surface-white/70">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-md text-label-md uppercase tracking-wider text-terracotta font-semibold">
              Collections
            </span>
            <h2 className="font-headline-lg text-headline-lg text-tertiary">
              Curated for Culinary Flow
            </h2>
            <p className="font-body-md text-body-md text-olive-gray max-w-lg">
              Every utensil is calibrated for weight, heat tolerance, and
              tactile comfort across four focal kitchen domains.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-title-md text-title-md text-terracotta hover:text-primary transition-colors group"
            data-path="shop-catalog"
            href="/products">
            <span>Explore complete index</span>
            <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Collection 1 */}
          <Link
            className="group relative rounded-xl overflow-hidden bg-surface-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            data-path="shop-catalog"
            href="/products">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
              <Image
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Stylized composition of stainless steel tongs, high-heat slotted spatulas, and curved cooking spoons neatly resting on neutral linen background."
                alt="Stainless steel tongs, slotted spatulas, and cooking spoons on linen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNEbZkucXARUe-E3GnjjMHdjEzyrKuqmVds0PNCEZqao3arp-Tkq0_EBto0-teiNSZQPHgj0GjPY93uQNT1WbtMCnJ6B3dk7EJtva_3W4rRTacJ7s2Q2XYs6Svy9sDECHTjBFBLh8NCxjLXFb2cEE1iYSuUsUn73OBHlL7NjJXITp1K5bCn4GFOw2ThWfMzrPBV16f57QAkr1AtQ0zywyWILKsZ50d76UTeozqXe4qUPdRZu01mvl0"
              />
              <span className="absolute top-space-sm right-space-sm bg-surface-white/90 backdrop-blur-sm text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full shadow-sm">
                18 items
              </span>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-sm">
              <div>
                <h3 className="font-title-lg text-title-lg text-tertiary group-hover:text-terracotta transition-colors">
                  Cooking Tools
                </h3>
                <p className="font-body-md text-body-md text-olive-gray mt-1">
                  Deep ladles, heat-proof flexible turners, and balanced locking
                  tongs.
                </p>
              </div>
              <div className="inline-flex items-center text-terracotta font-label-md text-label-md gap-1 pt-space-xs">
                <span>View collection</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </div>
            </div>
          </Link>
          {/* Collection 2 */}
          <Link
            className="group relative rounded-xl overflow-hidden bg-surface-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            data-path="shop-catalog"
            href="/products">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
              <Image
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Close up of artisan wooden spatulas, hand-turned French beechwood rolling pin, and brass measuring spoons on clean cream kitchen island."
                alt="Artisan wooden spatulas, a beechwood rolling pin, and brass measuring spoons"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFeeieZDqEgY39xtx1zH6TksuC6wtoM9yV8tn6CJZjKwHqvy1R0zn8IWK5_Q2C--NL8ALjbZg0Z5x6vTe9mAVixjsarwmKRxQaL3VCnJVF24Y7-2Khwm3YXm3EfQQ1L3EneDLVoAqT64tWVsyZ1DX4pXT4vqDq6i_IRDoW_Ov9Y0KJsPij8V5wTcUXs5LDPfngLwIGO3qk9kIJWO_CcCnTMgne8kO8WlNAHXCsw8XHcVMpT9xxiInj"
              />
              <span className="absolute top-space-sm right-space-sm bg-surface-white/90 backdrop-blur-sm text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full shadow-sm">
                14 items
              </span>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-sm">
              <div>
                <h3 className="font-title-lg text-title-lg text-tertiary group-hover:text-terracotta transition-colors">
                  Artisan Utensils
                </h3>
                <p className="font-body-md text-body-md text-olive-gray mt-1">
                  Single-block Mediterranean olive wood, polished brass, and
                  organic horn.
                </p>
              </div>
              <div className="inline-flex items-center text-terracotta font-label-md text-label-md gap-1 pt-space-xs">
                <span>View collection</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </div>
            </div>
          </Link>
          {/* Collection 3 */}
          <Link
            className="group relative rounded-xl overflow-hidden bg-surface-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            data-path="baking-and-tools"
            href="/products?category=baking">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
              <Image
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Artisanal stoneware ceramic nesting bowls with pouring spouts, a brass balloon whisk, and dusted flour on a warm wooden pastry board."
                alt="Stoneware nesting bowls, a brass whisk, and flour on a pastry board"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxcelcOGgqVUn0km6DZb2aGMSYO9R6hfIZhIwzLQx_xc3PpPwGPvVvSlcwH7VEyrafKk3ySb1SHNqYn5Atq2cVG0bVQSlL94IQymtddmjxXYIu27Hgau6j-Vdg7tIYbHN5gDdfK0LvZYKj9I-ifc0S6to3G_I45GxY11CZEyYdOBQW8ocF-dYmchdE7KKAr5G2uzZgj4RjfaibCPbb-ALQHAi6myBpFYw8StNFu0NAnZNorF_Jg4Ym"
              />
              <span className="absolute top-space-sm right-space-sm bg-surface-white/90 backdrop-blur-sm text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full shadow-sm">
                22 items
              </span>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-sm">
              <div>
                <h3 className="font-title-lg text-title-lg text-tertiary group-hover:text-terracotta transition-colors">
                  Baking &amp; Pastry
                </h3>
                <p className="font-body-md text-body-md text-olive-gray mt-1">
                  Precision scale balances, glazed ceramic mixing bowls, and
                  dough scrapers.
                </p>
              </div>
              <div className="inline-flex items-center text-terracotta font-label-md text-label-md gap-1 pt-space-xs">
                <span>View collection</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </div>
            </div>
          </Link>
          {/* Collection 4 */}
          <Link
            className="group relative rounded-xl overflow-hidden bg-surface-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            data-path="shop-catalog"
            href="/products">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
              <Image
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Tabletop setting with French ceramic olive oil cruet, pure washed natural linen napkins, cork and brass trivet, and warm bread basket."
                alt="Ceramic olive oil cruet, linen napkins, and brass trivet on a table"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz8_Q66c1twOVzZd4pObKFdlQjtKLIgkbYR0ZdWrRFIM8cBblpWRDMfbJIAcjufGBOQbP5H3vszTqjjZj3GR5zha4lVxAe7ZreQrcoW0uojth5rR6tmxJLPJertQd5nuowN3wVI5edNm4zo9y7v32rCY05AdVBM3ngmK6Ihm7koapEVTEPQve2Rv7HnSATSk2fkiiDULi78ZAf0Zc2VUbpFmiQnJaQ_h4GSMHakWCNg-MinKiyWVYW"
              />
              <span className="absolute top-space-sm right-space-sm bg-surface-white/90 backdrop-blur-sm text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full shadow-sm">
                16 items
              </span>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between space-y-space-sm">
              <div>
                <h3 className="font-title-lg text-title-lg text-tertiary group-hover:text-terracotta transition-colors">
                  Table &amp; Serving
                </h3>
                <p className="font-body-md text-body-md text-olive-gray mt-1">
                  Stoneware cruets, heavy European flax cloths, and geometric
                  wood trivets.
                </p>
              </div>
              <div className="inline-flex items-center text-terracotta font-label-md text-label-md gap-1 pt-space-xs">
                <span>View collection</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
