'use client';

import React from 'react';
import { Progress } from '@nextui-org/react';
import { Truck } from 'lucide-react';

interface CartShippingBannerProps {
  progress: number;
  isFreeShipping: boolean;
  freeShippingThreshold: number;
  subtotal: number;
}

export const CartShippingBanner: React.FC<CartShippingBannerProps> = ({
  progress,
  isFreeShipping,
  freeShippingThreshold,
  subtotal,
}) => {
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <section
      aria-label="Shipping Promotion Progress"
      className="mb-8 p-4 sm:p-5 rounded-2xl bg-surface-white/70 border border-outline-variant/30 backdrop-blur-xs shadow-xs"
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <Truck className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
          <span className="font-semibold text-sm sm:text-base text-on-surface">
            {isFreeShipping
              ? 'Free Express Shipping Unlocked!'
              : `Add $${remaining.toFixed(2)} for Free Express Shipping`}
          </span>
        </div>
        <span className="font-semibold text-sm text-on-surface">
          {progress}%
        </span>
      </div>

      <Progress
        value={progress}
        aria-label="Free shipping progress"
        classNames={{
          base: 'w-full',
          track: 'bg-[#eadccf] h-2 rounded-full overflow-hidden',
          indicator: 'bg-[#a76251] transition-all duration-500 rounded-full',
        }}
      />

      <p className="mt-2 text-xs sm:text-sm text-olive-gray">
        {isFreeShipping
          ? 'You qualified for complimentary plastic-free express delivery.'
          : `You are $${remaining.toFixed(2)} away from qualifying for plastic-free express delivery.`}
      </p>
    </section>
  );
};
