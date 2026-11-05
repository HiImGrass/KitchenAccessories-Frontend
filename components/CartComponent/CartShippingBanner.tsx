'use client';

import React from 'react';
import { Progress } from '@nextui-org/react';
import { Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('cart');
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <section
      aria-label={t('shippingPromotionProgress')}
      className="mb-8 p-4 sm:p-5 rounded-2xl bg-surface-white/70 border border-outline-variant/30 backdrop-blur-xs shadow-xs"
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <Truck className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
          <span className="font-semibold text-sm sm:text-base text-on-surface">
            {isFreeShipping
              ? t('freeShippingUnlocked')
              : t('addForFreeShipping', { amount: remaining.toFixed(2) })}
          </span>
        </div>
        <span className="font-semibold text-sm text-on-surface" aria-label={t('shippingProgress')}>
          {progress}%
        </span>
      </div>

      <Progress
        value={progress}
        aria-label={t('freeShippingProgress')}
        classNames={{
          base: 'w-full',
          track: 'bg-surface-container-highest h-2 rounded-full overflow-hidden',
          indicator: 'bg-primary-container transition-all duration-500 rounded-full',
        }}
      />

      <p className="mt-2 text-xs sm:text-sm text-olive-gray">
        {isFreeShipping
          ? t('freeShippingQualified')
          : t('awayFromFreeShipping', { amount: remaining.toFixed(2) })}
      </p>
    </section>
  );
};
