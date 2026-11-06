'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const CartBreadcrumb: React.FC = () => {
  const t = useTranslations('cart');
  return (
    <nav aria-label={t('breadcrumb')} className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-olive-gray">
        <li>
          <Link
            href="/"
            className="hover:text-primary transition-colors font-medium text-olive-gray"
          >
            {t('home')}
          </Link>
        </li>
        <li aria-hidden="true" className="text-sage select-none">
          /
        </li>
        <li className="font-semibold text-on-surface" aria-current="page">
          {t('yourCart')}
        </li>
      </ol>
    </nav>
  );
};
