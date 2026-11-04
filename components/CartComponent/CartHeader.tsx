'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface CartHeaderProps {
  itemCount: number;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ itemCount }) => {
  const t = useTranslations('cart');
  return (
    <header className="mb-6 sm:mb-8">
      <h1 className="font-epilogue text-3xl sm:text-4xl md:text-[42px] font-bold text-on-surface tracking-tight leading-tight">
        {t('titleWithCount', {
          count: itemCount,
          itemLabel: itemCount === 1 ? t('item') : t('items'),
        })}
      </h1>
      <p className="mt-2 text-sm sm:text-base text-olive-gray max-w-3xl leading-relaxed">
        {t('headerDescription')}
      </p>
    </header>
  );
};
