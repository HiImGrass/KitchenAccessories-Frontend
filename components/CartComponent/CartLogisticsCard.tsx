'use client';

import React from 'react';
import { PackageCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const CartLogisticsCard: React.FC = () => {
  const t = useTranslations('cart');

  return (
    <aside
      aria-label={t('logistics')}
      className="mt-4 bg-secondary-container/90 rounded-2xl p-4 sm:p-5 border border-outline-variant/50 flex items-start gap-3.5 shadow-2xs"
    >
      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
        <PackageCheck className="w-5 h-5" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-sm text-on-surface leading-snug">
          {t('logisticsTitle')}
        </h3>
        <p className="mt-1 text-xs text-olive-gray leading-relaxed">
          {t('logisticsDescription')}
        </p>
      </div>
    </aside>
  );
};
