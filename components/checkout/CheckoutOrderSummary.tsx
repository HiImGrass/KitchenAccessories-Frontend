'use client';

import React from 'react';
import { CartItem } from '@/types/cart';
import { ShippingMethodOption } from '@/types/checkout';
import { Button } from '@nextui-org/react';
import { Loader2 } from 'lucide-react';

interface CheckoutOrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  discountAmount: number;
  shippingOption: ShippingMethodOption;
  taxAmount: number;
  finalTotal: number;
  isSubmitting: boolean;
  onPlaceOrder: () => void;
}

export const CheckoutOrderSummary: React.FC<CheckoutOrderSummaryProps> = ({
  items,
  subtotal,
  discountAmount,
  shippingOption,
  taxAmount,
  finalTotal,
  isSubmitting,
  onPlaceOrder,
}) => {
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-surface-white border border-warm-sand/60 rounded-xl p-6 sm:p-8 shadow-xs">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-warm-sand/40 pb-4 mb-4">
        <h3 className="font-headline-sm text-lg font-bold text-on-surface">
          Order Summary
        </h3>
        <span className="text-[11px] font-bold text-olive-gray bg-canvas-cream border border-warm-sand/50 px-2.5 py-0.5 rounded-full">
          {totalItemCount} {totalItemCount === 1 ? 'Item' : 'Items'}
        </span>
      </div>

      {/* Items Summary */}
      <div className="divide-y divide-warm-sand/30 mb-4 max-h-[360px] overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={item.id} className="py-4 flex gap-4 items-center first:pt-1">
            <div className="relative flex-shrink-0 size-16 rounded-xl overflow-hidden bg-canvas-cream border border-warm-sand/50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 right-1 size-5 bg-terracotta text-surface-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {item.quantity}
              </span>
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="text-xs font-bold text-on-surface truncate" title={item.name}>
                {item.name}
              </h4>
              <p className="text-[11px] text-olive-gray mt-0.5 truncate">
                {item.details || 'Artisanal Culinary Essential'}
              </p>
              <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-surface-container-high text-on-secondary-container font-semibold">
                {item.stockLabel || 'Artisan Batch'}
              </span>
            </div>
            <div className="text-right flex-shrink-0 font-price-md text-sm font-bold text-on-surface">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Discount Code Input Box */}
      <div className="pt-2 pb-4 border-t border-warm-sand/30">
        <label
          htmlFor="checkout-promo-code"
          className="block text-xs font-semibold text-olive-gray mb-1.5"
        >
          Artisan Guild Promo / Gift Voucher
        </label>
        <div className="flex gap-2 items-center">
          <div className="relative flex-grow">
            <input
              id="checkout-promo-code"
              type="text"
              readOnly
              value="ARTISAN10"
              className="w-full h-11 uppercase bg-canvas-cream border border-warm-sand rounded-lg px-3.5 pr-9 text-xs font-bold tracking-wider text-on-surface focus:outline-none focus:ring-0 focus:border-primary transition-colors"
            />
            <span className="absolute right-3 inset-y-0 flex items-center text-secondary pointer-events-none">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </span>
          </div>
          <button
            type="button"
            className="h-11 px-4 bg-secondary-container/60 border border-warm-sand rounded-lg text-xs font-bold text-on-secondary-fixed cursor-default shrink-0"
          >
            Applied
          </button>
        </div>
        <div className="flex items-center gap-1.5 mt-2 text-[11px] text-secondary font-medium">
          <span className="material-symbols-outlined text-[14px]">local_offer</span>
          <span>&apos;ARTISAN10&apos; applied: 10% discount across crafted kitchenware</span>
        </div>
      </div>

      {/* Cost Calculation Table */}
      <div className="space-y-2.5 pt-4 border-t border-warm-sand/40 text-xs">
        <div className="flex justify-between text-olive-gray">
          <span>Subtotal</span>
          <span className="font-semibold text-on-surface">${subtotal.toFixed(2)}</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex justify-between text-secondary">
            <span className="flex items-center gap-1">
              Discount (ARTISAN10)
              <span className="material-symbols-outlined text-[14px]">check</span>
            </span>
            <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-olive-gray">
          <span>{shippingOption.title}</span>
          <span className="font-semibold text-secondary">
            {shippingOption.price === 0 ? 'Free Standard' : `$${shippingOption.price.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between text-olive-gray">
          <span>Estimated Sales Tax</span>
          <span className="font-semibold text-on-surface">${taxAmount.toFixed(2)}</span>
        </div>

        {/* Final Total */}
        <div className="pt-4 border-t border-warm-sand/60 flex items-baseline justify-between">
          <div>
            <span className="font-headline-sm text-base font-bold text-on-surface">
              Final Total
            </span>
            <span className="block text-[11px] text-olive-gray">
              Including all regional duties and taxes
            </span>
          </div>
          <div className="text-right">
            <span className="font-headline-lg font-price-lg text-2xl font-bold text-terracotta tracking-tight">
              ${finalTotal.toFixed(2)}
            </span>
            <span className="block text-[10px] text-olive-gray font-mono uppercase">
              USD Currency
            </span>
          </div>
        </div>
      </div>

      {/* Place Order CTA Button */}
      <div className="mt-6">
        <Button
          type="button"
          onClick={onPlaceOrder}
          disabled={isSubmitting}
          className="w-full group bg-terracotta hover:bg-primary text-on-primary font-title-md py-4 px-6 rounded-xl shadow-md transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-3 h-14 cursor-pointer text-base"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2.5">
              <Loader2 className="w-5 h-5 animate-spin text-white shrink-0" />
              <span>Securing Transaction...</span>
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-0.5">
                shopping_bag
              </span>
              <span className="tracking-wide">
                Place Order • ${finalTotal.toFixed(2)}
              </span>
            </>
          )}
        </Button>
        <p className="text-center text-[11px] text-olive-gray mt-2.5">
          By clicking &quot;Place Order&quot;, you agree to Ladle &amp; Co.&apos;s{' '}
          <a href="#" className="underline hover:text-primary">
            Terms of Guild Service
          </a>
          .
        </p>
      </div>

      {/* Trust & Security Badges */}
      <div className="mt-6 pt-6 border-t border-warm-sand/30 grid grid-cols-2 gap-4">
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded bg-canvas-cream border border-warm-sand/50 text-terracotta shrink-0">
            <span className="material-symbols-outlined text-[18px]">verified</span>
          </div>
          <div>
            <h5 className="text-[11px] font-bold text-on-surface">30-Day Guarantee</h5>
            <p className="text-[10px] text-olive-gray leading-tight mt-0.5">
              Complimentary return labels for untouched ceramics.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded bg-canvas-cream border border-warm-sand/50 text-terracotta shrink-0">
            <span className="material-symbols-outlined text-[18px]">lock</span>
          </div>
          <div>
            <h5 className="text-[11px] font-bold text-on-surface">256-Bit SSL</h5>
            <p className="text-[10px] text-olive-gray leading-tight mt-0.5">
              End-to-end payment gateway encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
