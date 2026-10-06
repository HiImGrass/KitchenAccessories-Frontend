'use client';

import React from 'react';
import { CartSummary, PromoCode, GiftWrapOption } from '@/types/cart';
import { Button, Input, Tooltip } from '@nextui-org/react';
import { Tag, Info, ArrowRight, Lock, CheckCircle2, X } from 'lucide-react';

interface CartOrderSummaryProps {
  summary: CartSummary;
  appliedPromo: PromoCode | null;
  promoInput: string;
  promoError: string | null;
  giftWrap: GiftWrapOption;
  onPromoInputChange: (code: string) => void;
  onApplyPromo: () => void;
  onRemovePromo: () => void;
  onCheckout: () => void;
}

export const CartOrderSummary: React.FC<CartOrderSummaryProps> = ({
  summary,
  appliedPromo,
  promoInput,
  promoError,
  giftWrap,
  onPromoInputChange,
  onApplyPromo,
  onRemovePromo,
  onCheckout,
}) => {
  const isApplied = Boolean(appliedPromo);

  return (
    <div className="bg-surface-white rounded-2xl p-6 border border-outline-variant/30 shadow-xs">
      <h2 className="font-epilogue text-xl font-bold text-on-surface mb-5">
        Order Summary
      </h2>

      {/* Price breakdown */}
      <div className="space-y-3.5 text-sm">
        {/* Subtotal */}
        <div className="flex items-center justify-between text-olive-gray">
          <span>
            Items Subtotal ({summary.itemCount} {summary.itemCount === 1 ? 'item' : 'items'})
          </span>
          <span className="font-semibold text-on-surface">
            ${summary.subtotal.toFixed(2)}
          </span>
        </div>

        {/* Discount (if promo applied) */}
        {appliedPromo && (
          <div className="flex items-center justify-between text-[#894b3a]">
            <div className="flex items-center gap-1.5 font-medium">
              <Tag className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                Seasonal Artisan Discount ({appliedPromo.discountPercentage}%)
              </span>
            </div>
            <span className="font-semibold">
              -${summary.discountAmount.toFixed(2)}
            </span>
          </div>
        )}

        {/* Gift Wrapping cost (if chosen) */}
        {giftWrap.enabled && (
          <div className="flex items-center justify-between text-olive-gray">
            <span>Artisan Gift Wrapping</span>
            <span className="font-semibold text-on-surface">
              +${giftWrap.price.toFixed(2)}
            </span>
          </div>
        )}

        {/* Shipping */}
        <div className="flex items-center justify-between text-olive-gray">
          <div className="flex items-center gap-1.5">
            <span>Estimated Express Shipping</span>
            <Tooltip
              content="Free express direct shipping on orders over $100"
              placement="top"
              closeDelay={100}
            >
              <button
                type="button"
                className="text-sage hover:text-olive-gray cursor-help"
                aria-label="Shipping details info"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
          </div>
          <span className="font-bold text-xs uppercase tracking-wider text-on-surface">
            {summary.isFreeShipping ? 'FREE' : `$${summary.shippingFee.toFixed(2)}`}
          </span>
        </div>

        {/* Estimated Tax */}
        <div className="flex items-center justify-between text-olive-gray">
          <span>Estimated Tax</span>
          <span className="font-semibold text-on-surface">
            ${summary.taxAmount.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 border-outline-variant/30" />

      {/* Order Total */}
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <span className="font-bold text-lg text-on-surface block">
            Order Total
          </span>
          <span className="text-xs text-olive-gray block mt-0.5">
            Taxes and artisan handling included
          </span>
        </div>
        <span className="font-bold text-2xl sm:text-3xl text-primary shrink-0 tracking-tight">
          ${summary.total.toFixed(2)}
        </span>
      </div>

      {/* Artisan Voucher / Promo Code Box */}
      <div className="mt-6 pt-5 border-t border-outline-variant/20">
        <label
          htmlFor="promo-code-input"
          className="block text-[11px] font-semibold text-olive-gray uppercase tracking-wider mb-2"
        >
          Artisan Voucher / Promo Code
        </label>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!isApplied) {
              onApplyPromo();
            }
          }}
          className="flex items-center gap-2"
        >
          <div className="relative flex-1">
            <Input
              id="promo-code-input"
              value={promoInput}
              onValueChange={onPromoInputChange}
              placeholder="Enter voucher code"
              size="md"
              variant="bordered"
              color="primary"
              aria-label="Artisan Voucher or Promo Code"
              isInvalid={Boolean(promoError)}
              errorMessage={promoError}
              classNames={{
                base: 'w-full',
                inputWrapper:
                  'bg-[#fbf9f4] border border-outline-variant/40 rounded-xl h-10 transition-all duration-200 hover:border-terracotta/60 focus-within:!border-primary focus-within:!ring-1 focus-within:!ring-primary/20 group-data-[focus=true]:!border-primary group-data-[focus=true]:!ring-0 !outline-none shadow-2xs',
                input:
                  '!outline-none focus:!outline-none !ring-0 focus:!ring-0 uppercase font-medium text-sm text-on-surface tracking-wider placeholder:normal-case placeholder:font-normal placeholder:tracking-normal placeholder:text-sage',
              }}
              endContent={
                isApplied ? (
                  <button
                    type="button"
                    onClick={onRemovePromo}
                    aria-label="Remove applied promo code"
                    className="text-sage hover:text-error transition-colors p-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : null
              }
            />
          </div>

          <Button
            type="submit"
            size="md"
            className={`font-semibold tracking-wide text-xs px-4 h-10 rounded-xl transition-all ${
              isApplied
                ? 'bg-[#e2edd8] text-[#2c6125] cursor-default'
                : 'bg-primary text-white hover:bg-primary-container'
            }`}
            onClick={(e) => {
              if (isApplied) {
                e.preventDefault();
              }
            }}
          >
            {isApplied ? 'APPLIED' : 'APPLY'}
          </Button>
        </form>

        {/* Promo feedback state */}
        {appliedPromo && (
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-olive-gray">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
            <span>{appliedPromo.description}</span>
          </div>
        )}
      </div>

      {/* Checkout CTA Button */}
      <div className="mt-6">
        <Button
          size="lg"
          fullWidth
          className="bg-primary hover:bg-primary-container text-white font-semibold text-base py-3.5 px-6 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 h-12"
          onClick={onCheckout}
          endContent={<ArrowRight className="w-5 h-5 ml-1" />}
        >
          Proceed to Checkout
        </Button>

        {/* Security badge */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-olive-gray">
          <Lock className="w-3.5 h-3.5 text-olive-gray shrink-0" aria-hidden="true" />
          <span>Bank-grade 256–bit encrypted checkout</span>
        </div>
      </div>

      {/* Accepted payment methods */}
      <div className="mt-6 pt-5 border-t border-outline-variant/20 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-olive-gray font-medium mr-1">Accepted:</span>
        {['Apple Pay', 'Visa', 'Mastercard', 'Shop Pay'].map((brand) => (
          <span
            key={brand}
            className="bg-[#f0ece1] text-[11px] font-medium text-on-surface-variant px-2.5 py-1 rounded-md border border-outline-variant/30"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};
