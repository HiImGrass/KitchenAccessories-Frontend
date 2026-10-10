'use client';

import React from 'react';
import { CartItem } from '@/types/cart';
import { CartItemCard } from './CartItemCard';

interface CartItemListProps {
  items: CartItem[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export const CartItemList: React.FC<CartItemListProps> = ({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <section aria-labelledby="basket-items-heading" className="space-y-4">
      <h2
        id="basket-items-heading"
        className="font-epilogue text-xl sm:text-2xl font-bold text-on-surface mb-3"
      >
        Items in Your Basket
      </h2>

      <div className="space-y-3.5">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
};
