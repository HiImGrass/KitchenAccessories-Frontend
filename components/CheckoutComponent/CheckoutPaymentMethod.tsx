'use client';

import React from 'react';
import { CardPaymentInfo, PaymentType, CheckoutErrors } from '@/types/checkout';
import { Tooltip } from '@nextui-org/react';
import { toast } from 'sonner';

interface CheckoutPaymentMethodProps {
  card: CardPaymentInfo;
  paymentType: PaymentType;
  errors: CheckoutErrors;
  onCardFieldChange: <K extends keyof CardPaymentInfo>(field: K, value: CardPaymentInfo[K]) => void;
  onPaymentTypeChange: (type: PaymentType) => void;
}

export const CheckoutPaymentMethod: React.FC<CheckoutPaymentMethodProps> = ({
  card,
  paymentType,
  errors,
  onCardFieldChange,
  onPaymentTypeChange,
}) => {
  return (
    <section className="bg-surface-white border border-warm-sand/60 rounded-xl p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-warm-sand/40 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center size-7 rounded-full bg-canvas-cream text-primary border border-warm-sand text-xs font-bold">
            3
          </span>
          <div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">
              Payment Method
            </h3>
            <p className="text-xs text-olive-gray">
              All transactions are encrypted with bank-grade security protocols.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-olive-gray">
          <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
          <span>Encrypted</span>
        </div>
      </div>

      {/* Quick Payment Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          type="button"
          onClick={() => {
            onPaymentTypeChange('apple_pay');
            toast.info('Apple Pay session initialized for instant checkout.');
          }}
          className={`h-11 flex items-center justify-center gap-2 px-4 rounded-lg border font-semibold text-xs transition-colors cursor-pointer ${
            paymentType === 'apple_pay'
              ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20'
              : 'border-warm-sand bg-canvas-cream hover:bg-warm-sand/20 text-on-surface'
          }`}
        >
          <span className="text-sm font-bold tracking-tight"> Pay</span>
          <span className="text-[10px] text-olive-gray">Instant</span>
        </button>

        <button
          type="button"
          onClick={() => {
            onPaymentTypeChange('paypal');
            toast.info('PayPal Express checkout gateway ready.');
          }}
          className={`h-11 flex items-center justify-center gap-2 px-4 rounded-lg border font-semibold text-xs transition-colors cursor-pointer ${
            paymentType === 'paypal'
              ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20'
              : 'border-warm-sand bg-canvas-cream hover:bg-warm-sand/20 text-on-surface'
          }`}
        >
          <span className="text-sm font-bold text-[#003087] italic">PayPal</span>
          <span className="text-[10px] text-olive-gray">Direct</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative flex py-2 items-center mb-6">
        <div className="flex-grow border-t border-warm-sand/40" />
        <span className="flex-shrink mx-4 text-xs uppercase tracking-widest text-olive-gray font-semibold">
          Or Pay with Card
        </span>
        <div className="flex-grow border-t border-warm-sand/40" />
      </div>

      {/* Card Form */}
      <div className="space-y-4">
        {/* Name on Card */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-card-holder"
              className="text-xs font-semibold text-on-surface"
            >
              Name on Card <span className="text-terracotta">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              id="checkout-card-holder"
              type="text"
              value={card.cardHolder}
              onChange={(e) => {
                onPaymentTypeChange('card');
                onCardFieldChange('cardHolder', e.target.value);
              }}
              className={`w-full h-11 bg-canvas-cream/50 border ${
                errors.cardHolder
                  ? 'border-error focus:border-error'
                  : 'border-warm-sand/80 focus:border-primary'
              } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
            />
          </div>
          {errors.cardHolder && (
            <p className="text-[11px] text-error mt-1.5 font-medium">{errors.cardHolder}</p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-card-number"
              className="text-xs font-semibold text-on-surface"
            >
              Card Number <span className="text-terracotta">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              id="checkout-card-number"
              type="text"
              value={card.cardNumber}
              onChange={(e) => {
                onPaymentTypeChange('card');
                onCardFieldChange('cardNumber', e.target.value);
              }}
              placeholder="4000 1234 5678 9010"
              className={`w-full h-11 bg-canvas-cream/50 border ${
                errors.cardNumber
                  ? 'border-error focus:border-error'
                  : 'border-warm-sand/80 focus:border-primary'
              } rounded-lg px-3.5 pr-20 text-sm text-on-surface tracking-wider focus:outline-none focus:ring-0 transition-colors`}
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center gap-1.5 pointer-events-none">
              <span className="px-1.5 py-0.5 rounded bg-surface-white border border-warm-sand text-[10px] font-bold text-olive-gray">
                VISA
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface-white border border-warm-sand text-[10px] font-bold text-olive-gray">
                MC
              </span>
            </div>
          </div>
          {errors.cardNumber && (
            <p className="text-[11px] text-error mt-1.5 font-medium">{errors.cardNumber}</p>
          )}
        </div>

        {/* Expiry & CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="h-5 flex items-center justify-between mb-1.5">
              <label
                htmlFor="checkout-card-expiry"
                className="text-xs font-semibold text-on-surface"
              >
                Expiration Date <span className="text-terracotta">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                id="checkout-card-expiry"
                type="text"
                value={card.cardExpiry}
                onChange={(e) => {
                  onPaymentTypeChange('card');
                  onCardFieldChange('cardExpiry', e.target.value);
                }}
                placeholder="MM / YY"
                className={`w-full h-11 bg-canvas-cream/50 border ${
                  errors.cardExpiry
                    ? 'border-error focus:border-error'
                    : 'border-warm-sand/80 focus:border-primary'
                } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
              />
            </div>
            {errors.cardExpiry && (
              <p className="text-[11px] text-error mt-1.5 font-medium">{errors.cardExpiry}</p>
            )}
          </div>

          <div>
            <div className="h-5 flex items-center justify-between mb-1.5">
              <label
                htmlFor="checkout-card-cvc"
                className="text-xs font-semibold text-on-surface"
              >
                Security Code (CVC) <span className="text-terracotta">*</span>
              </label>
              <Tooltip
                content={
                  <div className="w-[280px] p-1 text-left select-none">
                    {/* Header */}
                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-warm-sand/40">
                      <div className="size-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[15px]">security</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-on-surface leading-tight">
                          Card Verification Code
                        </h4>
                        <p className="text-[10px] text-olive-gray">Locating your 3 or 4-digit code</p>
                      </div>
                    </div>

                    {/* Visual Diagram: Card Back (Visa / Mastercard) */}
                    <div className="bg-canvas-cream/80 rounded-lg p-2.5 border border-warm-sand/50 mb-2">
                      <div className="flex items-center justify-between mb-1.5 text-[10px]">
                        <span className="font-semibold text-on-surface flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-primary inline-block" />
                          Visa &bull; Mastercard
                        </span>
                        <span className="text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full border border-primary/20">
                          3 digits
                        </span>
                      </div>

                      {/* Mini Card Back Graphic */}
                      <div className="bg-surface-white border border-warm-sand/60 rounded-md p-1.5 shadow-2xs">
                        <div className="h-2 bg-[#2D332A] rounded-xs w-full mb-1.5" />
                        <div className="flex items-center gap-1.5">
                          <div className="h-4 bg-[#F2EDE1] rounded border border-warm-sand/40 flex-1 px-1.5 flex items-center">
                            <span className="text-[8px] italic text-olive-gray/50 font-serif">
                              signature
                            </span>
                          </div>
                          <div className="h-4 px-1.5 bg-primary/15 border border-primary/40 rounded flex items-center justify-center text-primary font-mono font-bold text-[10px] tracking-wider shadow-2xs">
                            123
                          </div>
                        </div>
                      </div>
                      <p className="text-[9.5px] text-olive-gray mt-1.5 leading-tight">
                        Located on the white signature strip on the <strong>back</strong> of your card.
                      </p>
                    </div>

                    {/* Card Front (American Express) */}
                    <div className="bg-canvas-cream/40 rounded-lg p-2 border border-warm-sand/30">
                      <div className="flex items-center justify-between mb-1 text-[10px]">
                        <span className="font-semibold text-on-surface flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-secondary inline-block" />
                          American Express
                        </span>
                        <span className="text-[9px] font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-full border border-secondary/20">
                          4 digits
                        </span>
                      </div>
                      <p className="text-[9.5px] text-olive-gray leading-tight">
                        Printed on the <strong>front</strong> of the card, directly above the card number.
                      </p>
                    </div>
                  </div>
                }
                placement="top-end"
                offset={10}
                delay={150}
                closeDelay={250}
                shouldFlip={false}
                classNames={{
                  base: 'before:hidden drop-shadow-xl',
                  content:
                    'bg-surface-white/95 backdrop-blur-md border border-warm-sand/70 rounded-2xl p-2 text-on-surface shadow-xl shadow-surface-tint/10',
                }}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-olive-gray hover:text-primary transition-colors cursor-pointer group"
                >
                  <span className="group-hover:underline underline-offset-2">What is this?</span>
                  <span className="material-symbols-outlined text-[13px] text-sage group-hover:text-primary transition-colors">
                    help
                  </span>
                </button>
              </Tooltip>
            </div>
            <div className="relative w-full">
              <input
                id="checkout-card-cvc"
                type="password"
                maxLength={4}
                value={card.cardCvc}
                onChange={(e) => {
                  onPaymentTypeChange('card');
                  onCardFieldChange('cardCvc', e.target.value);
                }}
                placeholder="3 or 4 digits"
                className={`w-full h-11 bg-canvas-cream/50 border ${
                  errors.cardCvc
                    ? 'border-error focus:border-error'
                    : 'border-warm-sand/80 focus:border-primary'
                } rounded-lg px-3.5 pr-10 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
              />
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-olive-gray">
                <span className="material-symbols-outlined text-[18px]">credit_card</span>
              </div>
            </div>
            {errors.cardCvc && (
              <p className="text-[11px] text-error mt-1.5 font-medium">{errors.cardCvc}</p>
            )}
          </div>
        </div>

        {/* Billing Address Match Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={card.sameAsBilling}
              onChange={(e) => onCardFieldChange('sameAsBilling', e.target.checked)}
              className="sr-only"
            />
            <div
              aria-hidden="true"
              className={`size-[18px] rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                card.sameAsBilling
                  ? 'bg-primary border-primary text-white shadow-2xs'
                  : 'border-warm-sand bg-canvas-cream/50 group-hover:border-primary/60'
              }`}
            >
              {card.sameAsBilling && (
                <svg
                  className="w-3 h-3 stroke-current"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7.5L5.5 10.5L11.5 3.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span className="text-xs text-olive-gray leading-relaxed">
              Billing address is the same as shipping destination
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};
