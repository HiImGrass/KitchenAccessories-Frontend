import Link from "next/link";
import Image from "next/image";

export default function BrandEthosSection() {
  return (
    <section className="w-full py-space-2xl bg-surface-variant/30">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="bg-surface-white rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Text and Values Side */}
            <div className="lg:col-span-7 p-space-lg sm:p-space-xl lg:p-space-2xl flex flex-col justify-between">
              <div className="space-y-space-md">
                <div className="inline-flex items-center gap-space-xs text-terracotta font-label-md text-label-md uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-base">
                    spa
                  </span>
                  <span>The Ladle &amp; Co. Ethos</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-tertiary">
                  Made for kitchens that gather, nourish, and linger.
                </h2>
                <p className="font-body-lg text-body-lg text-olive-gray">
                  We reject the disposable kitchen. Every object in our store is
                  shaped from honest materials—sustainably harvested olive wood,
                  raw ceramic clay, forged brass, and natural flax. Designed
                  with ergonomic counter-balance to feel like a natural
                  extension of your hands.
                </p>
              </div>
              {/* 3 Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md my-space-xl">
                <div className="flex flex-col space-y-space-xs bg-canvas-cream/60 p-space-md rounded-2xl">
                  <span className="material-symbols-outlined text-2xl text-terracotta">
                    forest
                  </span>
                  <h4 className="font-title-md text-title-md text-tertiary">
                    Sustainably Harvested
                  </h4>
                  <p className="font-label-sm text-label-sm text-olive-gray">
                    Pruned orchard olive trees, avoiding deforestation.
                  </p>
                </div>
                <div className="flex flex-col space-y-space-xs bg-canvas-cream/60 p-space-md rounded-2xl">
                  <span className="material-symbols-outlined text-2xl text-terracotta">
                    recycling
                  </span>
                  <h4 className="font-title-md text-title-md text-tertiary">
                    Zero Plastic
                  </h4>
                  <p className="font-label-sm text-label-sm text-olive-gray">
                    100% plastic-free packaging and biodegradable tape.
                  </p>
                </div>
                <div className="flex flex-col space-y-space-xs bg-canvas-cream/60 p-space-md rounded-2xl">
                  <span className="material-symbols-outlined text-2xl text-terracotta">
                    verified
                  </span>
                  <h4 className="font-title-md text-title-md text-tertiary">
                    30-Day Kitchen Trial
                  </h4>
                  <p className="font-label-sm text-label-sm text-olive-gray">
                    Cook with our tools. If they don't inspire, return freely.
                  </p>
                </div>
              </div>
              {/* Action */}
              <div className="flex items-center gap-space-md">
                <Link
                  className="inline-flex items-center gap-space-sm bg-tertiary hover:bg-tertiary-container text-on-tertiary font-title-md text-title-md px-space-lg py-3 rounded-full transition-all"
                  data-path="about-us"
                  href="/about">
                  <span>Read our craft journal</span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-label-md text-label-md text-sage hidden sm:inline">
                  Certified B-Corp pending
                </span>
              </div>
            </div>
            {/* Visual Showcase Side */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
              <Image
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="absolute inset-0 w-full h-full object-cover"
                data-alt="An artisan woodworker hand-finishing an organic wooden cooking spoon at a sun-drenched workshop bench with fine wood curls, natural chisels, and cold-pressed linseed oils."
                alt="An artisan woodworker hand-finishing an organic wooden cooking spoon at a sun-drenched workshop bench"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6fFpKxpONgC0swd-RFIwqTcFJTUOXF_fSVWm799ku19esTXit16yunb00le8QxuaHQQuzwjC9sRPXb-Loyb8gEDK_kQoTL4Tku15D498mG4uuu2DkTnodh16J7jly-l8x8SIpk6YXBPDipo703uL4fuiwvxuRfk8IK-KQO860iFVbhtbVadDgdmTyQW5EOdXNTqIDjzsmT84aFxp-lJO2bk8DtD62i159NwRtUSYYLKBQwDK8IM3P"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/60 via-transparent to-transparent flex items-end p-space-lg text-surface-white">
                <div className="bg-surface-white/90 backdrop-blur-md text-tertiary p-space-md rounded-xl max-w-sm shadow-md">
                  <p className="font-label-md text-label-md italic">
                    "Utensils should feel alive in the hand, carrying the warmth
                    of their tree and maker."
                  </p>
                  <span className="font-label-sm text-label-sm text-terracotta font-semibold mt-1 block">
                    — Mateo Rossi, Master Woodturner
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
