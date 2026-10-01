import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-white mt-space-2xl shadow-[0_-1px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-4 space-y-space-md">
            <span className="font-headline-md text-headline-md text-tertiary tracking-tight">
              Ladle &amp; Co.
            </span>

            <p className="font-body-md text-body-md text-olive-gray max-w-sm">
              Thoughtful tools for everyday cooking. Handcrafted aesthetics
              meeting modern culinary precision in every home kitchen.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-title-md text-title-md text-tertiary mb-2">
              Explore
            </h3>

            <div className="flex flex-col gap-1">
              <Link href="/products">Shop Catalog</Link>

              <Link href="/products?category=baking">Baking &amp; Tools</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-title-md text-title-md text-tertiary mb-2">
              Company
            </h3>

            <div className="flex flex-col gap-1">
              <Link href="/about">About Us</Link>

              <Link href="/about">FAQs</Link>

              <Link href="/about">Shipping &amp; Returns</Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-title-md text-title-md text-tertiary">
              Stay in the Kitchen
            </h3>

            <p className="font-body-md text-body-md text-olive-gray mt-2">
              Receive seasonal kitchen journals, artisan recipe pairings, and
              private catalog releases.
            </p>

            <form className="flex items-center gap-space-xs mt-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 bg-canvas-cream px-space-md py-space-sm rounded-full"
              />

              <button
                type="submit"
                className="bg-terracotta text-on-primary px-space-lg py-space-sm rounded-full">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-space-2xl pt-space-lg border-t border-black/5">
          <p className="font-label-md text-label-md text-sage">
            © {new Date().getFullYear()} Ladle &amp; Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
