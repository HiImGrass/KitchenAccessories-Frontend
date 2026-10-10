'use client';

import React from 'react';
import { GiftWrapOption } from '@/types/cart';
import { Checkbox } from '@nextui-org/react';
import { Gift } from 'lucide-react';

interface CartGiftWrapAddonProps {
  option: GiftWrapOption;
  onToggle: () => void;
}

export const CartGiftWrapAddon: React.FC<CartGiftWrapAddonProps> = ({
  option,
  onToggle,
}) => {
  return (
    <section
      aria-label="Gift Wrapping Option"
      className="mt-4 bg-surface-white rounded-2xl p-4 sm:p-5 border border-outline-variant/30 shadow-xs transition-colors hover:border-outline-variant"
    >
      <div className="flex items-start gap-3">
        <Checkbox
          isSelected={option.enabled}
          onValueChange={onToggle}
          color="primary"
          aria-label={option.title}
          classNames={{
            base: 'p-0 m-0 mt-0.5',
            wrapper: 'rounded-md border-outline-variant/60 after:bg-primary',
          }}
        />

        <div className="flex-1 cursor-pointer select-none" onClick={onToggle}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <h3 className="font-semibold text-sm sm:text-base text-on-surface">
                {option.title}
              </h3>
            </div>
            <span className="font-bold text-sm sm:text-base text-on-surface shrink-0">
              +${option.price.toFixed(2)}
            </span>
          </div>

          <p className="mt-1 text-xs sm:text-sm text-olive-gray leading-relaxed">
            {option.description}
          </p>
        </div>
      </div>
    </section>
  );
};
