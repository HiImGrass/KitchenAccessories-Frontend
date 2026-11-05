'use client';

import React from 'react';
import Link from 'next/link';

export const CheckoutStageIndicator: React.FC = () => {
  return (
    <section className="border-b border-warm-sand/30 bg-surface-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-4 items-center gap-2 sm:gap-4">
            {/* Step 1: Cart Completed */}
            <Link
              href="/cart"
              className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex items-center justify-center size-6 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold group-hover:bg-warm-sand/40 transition-colors">
                  <span
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </span>
                <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase text-olive-gray">
                  01
                </span>
              </div>
              <span className="text-xs font-medium text-olive-gray group-hover:text-primary transition-colors">
                Cart
              </span>
            </Link>

            {/* Step 2: Information & Delivery (Active) */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex items-center justify-center size-6 rounded-full bg-primary text-on-primary text-xs font-bold ring-4 ring-primary-fixed/50">
                  2
                </span>
                <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase text-primary">
                  02
                </span>
              </div>
              <span className="text-xs font-semibold text-primary">
                Information &amp; Delivery
              </span>
            </div>

            {/* Step 3: Payment */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left opacity-60">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex items-center justify-center size-6 rounded-full bg-canvas-cream border border-warm-sand text-olive-gray text-xs font-bold">
                  3
                </span>
                <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase text-olive-gray">
                  03
                </span>
              </div>
              <span className="text-xs font-medium text-olive-gray">Payment</span>
            </div>

            {/* Step 4: Confirmation */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left opacity-60">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex items-center justify-center size-6 rounded-full bg-canvas-cream border border-warm-sand text-olive-gray text-xs font-bold">
                  4
                </span>
                <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase text-olive-gray">
                  04
                </span>
              </div>
              <span className="text-xs font-medium text-olive-gray">Confirmation</span>
            </div>
          </div>

          {/* Progress Bar Indicator */}
          <div className="w-full bg-warm-sand/30 h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-terracotta h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: '50%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
