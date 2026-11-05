'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const CheckoutFooter: React.FC = () => {
  const t = useTranslations('checkout');
  return (
    <footer className="border-t border-warm-sand/40 bg-surface-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-olive-gray">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-xs font-bold text-on-surface">Ladle &amp; Co.</span>
          <span>© {new Date().getFullYear()} {t('allRightsReserved')}</span>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link href="#" className="hover:text-primary transition-colors">
            {t('privacyPolicy')}
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            {t('artisanSourcingStandard')}
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            {t('shippingCustoms')}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t('contactWorkshop')}
          </Link>
        </div>
      </div>
    </footer>
  );
};
