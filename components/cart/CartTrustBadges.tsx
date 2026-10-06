'use client';

import React from 'react';
import { ShieldCheck, Leaf, Scale } from 'lucide-react';

interface TrustBadgeItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BADGES: TrustBadgeItem[] = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
    title: '30-Day Guarantee',
    description: 'Kitchen tested return policy',
  },
  {
    icon: <Leaf className="w-5 h-5 text-secondary" />,
    title: '100% Plastic-Free',
    description: 'Linen & recycled kraft pack',
  },
  {
    icon: <Scale className="w-5 h-5 text-secondary" />,
    title: 'Carbon-Neutral',
    description: 'Offset direct from artisan',
  },
];

export const CartTrustBadges: React.FC = () => {
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
              {badge.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-olive-gray truncate">
              {badge.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
