'use client';

import React from 'react';
import { ShieldCheck, Leaf, Scale } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface TrustBadgeItem {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const BADGES: TrustBadgeItem[] = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
    titleKey: 'guarantee',
    descriptionKey: 'guaranteeDescription',
  },
  {
    icon: <Leaf className="w-5 h-5 text-secondary" />,
    titleKey: 'plasticFree',
    descriptionKey: 'plasticFreeDescription',
  },
  {
    icon: <Scale className="w-5 h-5 text-secondary" />,
    titleKey: 'carbonNeutral',
    descriptionKey: 'carbonNeutralDescription',
  },
];

export const CartTrustBadges: React.FC = () => {
  const t = useTranslations('cart');

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {BADGES.map((badge, index) => (
        <div
          key={index}
          className="bg-surface-white rounded-xl p-3.5 border border-outline-variant/30 flex items-center gap-3 shadow-2xs transition-colors hover:border-outline-variant"
        >
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
            {badge.icon}
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-xs sm:text-sm text-on-surface truncate">
              {t(badge.titleKey)}
            </h4>
            <p className="text-[11px] sm:text-xs text-olive-gray truncate">
              {t(badge.descriptionKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
