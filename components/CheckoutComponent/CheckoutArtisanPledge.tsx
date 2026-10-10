'use client';

import React from 'react';

export const CheckoutArtisanPledge: React.FC = () => {
  return (
    <div className="bg-surface-container/60 border border-warm-sand/40 rounded-xl p-4 flex items-center gap-3">
      <div className="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
        <span className="material-symbols-outlined text-[22px]">eco</span>
      </div>
      <div>
        <p className="text-xs font-bold text-on-surface">Sustainable Artisan Packaging</p>
        <p className="text-[11px] text-olive-gray mt-0.5">
          100% plastic-free, recyclable cellulose packing peanuts and unbleached Kraft paper tape.
        </p>
      </div>
    </div>
  );
};
