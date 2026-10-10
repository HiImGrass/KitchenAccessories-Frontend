'use client';

import React from 'react';

interface CartHeaderProps {
  itemCount: number;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ itemCount }) => {
  return (
    <header className="mb-6 sm:mb-8">
      <h1 className="font-epilogue text-3xl sm:text-4xl md:text-[42px] font-bold text-on-surface tracking-tight leading-tight">
        Your Culinary Basket ({itemCount} {itemCount === 1 ? 'item' : 'items'})
      </h1>
      <p className="mt-2 text-sm sm:text-base text-olive-gray max-w-3xl leading-relaxed">
        Hand-inspected, sustainably packaged with organic linen, and dispatched directly from artisan workshops.
      </p>
    </header>
  );
};
