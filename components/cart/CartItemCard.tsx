'use client';

import React from 'react';
import { CartItem } from '@/types/cart';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Minus, Plus, Trash2, AlertTriangle } from 'lucide-react';

interface CartItemCardProps {
  item: CartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const subtotal = (item.price * item.quantity).toFixed(2);
  const isLowStock = item.stockStatus === 'low_stock';

  return (
    <article
      aria-label={item.name}
      className="bg-surface-white rounded-2xl p-4 sm:p-5 border border-outline-variant/30 shadow-xs transition-shadow hover:shadow-sm"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        {/* Product Thumbnail */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-canvas-cream border border-outline-variant/20">
          <Image
            src={item.image}
            alt={item.name}
            width={112}
            height={112}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details & Controls */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            {/* Title & Unit Price */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-base sm:text-lg text-on-surface leading-snug truncate sm:whitespace-normal">
                {item.name}
              </h3>
              <span className="font-bold text-base sm:text-lg text-on-surface shrink-0">
                ${item.price.toFixed(2)}
              </span>
            </div>

            {/* Artisan & Material Meta */}
            <p className="mt-1 text-xs sm:text-sm text-olive-gray">
              {item.details}
            </p>

            {/* Stock Status Badge & Note */}
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
              {isLowStock ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-medium bg-[#fdedec] text-[#b83227] border border-[#f5c6cb]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#b83227]" aria-hidden="true" />
                  {item.stockLabel}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-medium bg-[#eef7e9] text-[#2e6b2e] border border-[#d2e8cb]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2e6b2e]" />
                  {item.stockLabel}
                </span>
              )}
              {item.stockNote && (
                <span className="text-olive-gray">
                  · {item.stockNote}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Controls Row: Stepper + Subtotal + Trash */}
          <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between gap-4">
            {/* Quantity Stepper */}
            <div className="inline-flex items-center rounded-lg border border-outline-variant/40 bg-surface-white overflow-hidden shadow-2xs">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                aria-label={`Decrease quantity of ${item.name}`}
                className="w-8 h-8 min-w-8 text-on-surface hover:bg-canvas-cream disabled:opacity-30 rounded-none"
                disabled={item.quantity <= 1}
                onClick={() => onDecrease(item.id)}
              >
                <Minus className="w-3.5 h-3.5" />
              </Button>

              <span
                aria-live="polite"
                className="w-8 text-center font-medium text-sm text-on-surface select-none"
              >
                {item.quantity}
              </span>

              <Button
                isIconOnly
                size="sm"
                variant="light"
                aria-label={`Increase quantity of ${item.name}`}
                className="w-8 h-8 min-w-8 text-on-surface hover:bg-canvas-cream disabled:opacity-30 rounded-none"
                disabled={item.maxQuantity ? item.quantity >= item.maxQuantity : false}
                onClick={() => onIncrease(item.id)}
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Subtotal & Delete Action */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="block text-[11px] font-medium text-olive-gray uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="block font-bold text-base text-on-surface">
                  ${subtotal}
                </span>
              </div>

              <button
                type="button"
                aria-label={`Remove ${item.name} from basket`}
                onClick={() => onRemove(item.id)}
                className="group/trash relative w-8 h-8 rounded-lg flex items-center justify-center text-olive-gray/70 hover:text-[#ba1a1a] hover:bg-[#ffdad6]/30 active:scale-90 transition-all duration-200"
              >
                <Trash2 className="w-4 h-4 transition-transform duration-200 group-hover/trash:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
