import Link from "next/link";

export default function AboutCtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin pb-space-2xl w-full">
      <div className="bg-tertiary text-on-tertiary rounded-2xl p-space-xl lg:p-space-2xl shadow-md relative overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto space-y-space-md">
          <span className="font-label-md text-label-md text-tertiary-fixed uppercase tracking-widest block">
            Begin Your Kitchen Heirloom
          </span>
          <h2 className="font-display-lg text-display-lg text-on-tertiary leading-tight">
            Bring the artisan table to your kitchen.
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-lg mx-auto">
            Explore our seasonal drop of carved olivewood, hand-thrown ceramics,
            and hand-finished culinary companions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md pt-space-sm">
            <Link
              className="bg-terracotta hover:bg-primary-container text-on-primary font-title-md text-title-md px-8 py-3.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto"
              href="/products">
              Explore the Collection
            </Link>
            <Link
              className="bg-transparent hover:bg-surface-white/10 text-on-tertiary font-title-md text-title-md px-7 py-3.5 rounded-full transition-all text-center w-full sm:w-auto flex items-center justify-center gap-2"
              href="/about">
              <span>Read Seasonal Journal</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
