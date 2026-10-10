'use client';

import React from 'react';
import { PackageCheck } from 'lucide-react';

export const CartLogisticsCard: React.FC = () => {
  return (
    <aside
      aria-label="Direct-from-Workshop Logistics Information"
      className="mt-4 bg-[#eef5e7]/90 rounded-2xl p-4 sm:p-5 border border-[#d6e3cd] flex items-start gap-3.5 shadow-2xs"
    >
      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
        <PackageCheck className="w-5 h-5" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-sm text-on-surface leading-snug">
          Direct-from-Workshop Logistics
        </h3>
        <p className="mt-1 text-xs text-olive-gray leading-relaxed">
          Your ceramics and carved woods are seasoned and packed directly inside the artisan&apos;s regional studio to prevent warehouse handling shock.
        </p>
      </div>
    </aside>
  );
};
