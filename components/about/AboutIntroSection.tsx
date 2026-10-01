import Link from "next/link";

export default function AboutIntroSection() {
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin pt-space-xl pb-space-lg w-full">
      <div className="flex items-center gap-2 text-olive-gray font-body-md text-body-md mb-space-md">
        <Link className="hover:text-primary transition-colors" href="/">
          Home
        </Link>
        <span className="text-sage">/</span>
        <span className="text-terracotta font-title-md text-title-md">
          About Us
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
        <div className="lg:col-span-8 space-y-space-md">
          <div className="inline-flex items-center gap-space-xs bg-secondary-container px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-label-md text-label-md text-on-secondary-fixed uppercase tracking-wider">
              Our Story &amp; Heritage
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
            Thoughtful tools for everyday cooking, born from quiet kitchens and
            generational timber.
          </h1>
        </div>

        <div className="lg:col-span-4 pb-2">
          <p className="font-body-lg text-body-lg text-olive-gray leading-relaxed">
            Founded in 2021 by culinary designer Eleanor Vance, Ladle &amp; Co.
            is an enduring protest against synthetic gadgets. We cultivate
            slow-crafted, heirloom-grade kitchenware meant to live gracefully on
            open shelves and gather memories over generations.
          </p>
        </div>
      </div>
    </section>
  );
}
