'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { ShoppingBag, RefreshCw, ArrowRight } from 'lucide-react';

export const CartEmptyState: React.FC = () => {
  return (
    <div className="py-16 px-4 text-center bg-surface-white rounded-3xl border border-outline-variant/30 max-w-xl mx-auto shadow-xs">
      <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-5 text-primary">
        <ShoppingBag className="w-10 h-10" />
      </div>

      <h2 className="font-epilogue text-2xl font-bold text-on-surface mb-2">
        Your culinary basket is empty
      </h2>
      <p className="text-sm text-olive-gray max-w-sm mx-auto mb-8 leading-relaxed">
        Discover handcrafted kitchen essentials and bring sustainable artisan warmth to your kitchen.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          as={Link}
          href="/products"
          className="bg-primary hover:bg-primary-container text-white font-semibold px-6 py-2.5 rounded-xl shadow-xs"
          endContent={<ArrowRight className="w-4 h-4" />}
        >
          Explore Catalog
        </Button>
      </div>
    </div>
  );
};
