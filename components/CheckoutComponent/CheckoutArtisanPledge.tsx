'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const CheckoutArtisanPledge: React.FC = () => {
  const t = useTranslations('checkout');
  return (
    <div className="bg-surface-container/60 border border-warm-sand/40 rounded-xl p-4 flex items-center gap-3">
      <div className="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
        <span className="material-symbols-outlined text-[22px]">eco</span>
      </div>
      <div>
        <p className="text-xs font-bold text-on-surface">{t('sustainablePackaging')}</p>
        <p className="text-[11px] text-olive-gray mt-0.5">
          {t('sustainablePackagingDescription')}
        </p>
      </div>
    </div>
  );
};
