'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { useTranslations } from 'next-intl';

export const ProfileCartCard: React.FC = () => {
  const { items, summary } = useCart();
  const t = useTranslations('profile');

  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-olive-gray">
          {t('myCart', { count: summary.itemCount })}
        </h2>
        <Link href="/cart" className="text-sm font-medium text-terracotta hover:underline">
          {t('viewCart')}
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-olive-gray/70">{t('emptyCart')}</p>
      ) : (
        <ul className="divide-y divide-outline-variant/30">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4 py-3">
              <Image
                src={item.image}
                alt={item.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-olive-gray">{item.name}</p>
                <p className="text-xs text-olive-gray/70">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
              <span className="font-bold text-olive-gray">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="flex items-center justify-between border-t border-outline-variant/30 pt-3 text-sm">
          <span className="text-olive-gray/70">{t('subtotal')}</span>
          <span className="font-bold text-olive-gray">${summary.subtotal.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};
