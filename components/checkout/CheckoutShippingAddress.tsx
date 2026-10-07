'use client';

import React from 'react';
import { ShippingAddress, ShippingMethodId, CheckoutErrors } from '@/types/checkout';
import { US_STATES, SHIPPING_METHODS } from '@/lib/checkoutData';
import { ChevronDown } from 'lucide-react';

interface CheckoutShippingAddressProps {
  shipping: ShippingAddress;
  shippingMethod: ShippingMethodId;
  errors: CheckoutErrors;
  onShippingFieldChange: <K extends keyof ShippingAddress>(field: K, value: ShippingAddress[K]) => void;
  onShippingMethodChange: (method: ShippingMethodId) => void;
}

export const CheckoutShippingAddress: React.FC<CheckoutShippingAddressProps> = ({
  shipping,
  shippingMethod,
  errors,
  onShippingFieldChange,
  onShippingMethodChange,
}) => {
  return (
    <section className="bg-surface-white border border-warm-sand/60 rounded-xl p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-warm-sand/40 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center size-7 rounded-full bg-canvas-cream text-primary border border-warm-sand text-xs font-bold">
            2
          </span>
          <h3 className="font-headline-sm text-lg font-bold text-on-surface">
            Shipping Address &amp; Delivery
          </h3>
        </div>
      </div>

      <div className="space-y-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="h-5 flex items-center mb-1.5">
              <label
                htmlFor="checkout-first-name"
                className="text-xs font-semibold text-on-surface"
              >
                First Name <span className="text-terracotta">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                id="checkout-first-name"
                type="text"
                value={shipping.firstName}
                onChange={(e) => onShippingFieldChange('firstName', e.target.value)}
                className={`w-full h-11 bg-canvas-cream/50 border ${
                  errors.firstName
                    ? 'border-error focus:border-error'
                    : 'border-warm-sand/80 focus:border-primary'
                } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
              />
            </div>
            {errors.firstName && (
              <p className="text-[11px] text-error mt-1.5 font-medium">{errors.firstName}</p>
            )}
          </div>

          <div>
            <div className="h-5 flex items-center mb-1.5">
              <label
                htmlFor="checkout-last-name"
                className="text-xs font-semibold text-on-surface"
              >
                Last Name <span className="text-terracotta">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                id="checkout-last-name"
                type="text"
                value={shipping.lastName}
                onChange={(e) => onShippingFieldChange('lastName', e.target.value)}
                className={`w-full h-11 bg-canvas-cream/50 border ${
                  errors.lastName
                    ? 'border-error focus:border-error'
                    : 'border-warm-sand/80 focus:border-primary'
                } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
              />
            </div>
            {errors.lastName && (
              <p className="text-[11px] text-error mt-1.5 font-medium">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Street Address */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-address"
              className="text-xs font-semibold text-on-surface"
            >
              Street Address <span className="text-terracotta">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              id="checkout-address"
              type="text"
              value={shipping.address}
              onChange={(e) => onShippingFieldChange('address', e.target.value)}
              placeholder="Street address, P.O. box, company name, c/o"
              className={`w-full h-11 bg-canvas-cream/50 border ${
                errors.address
                  ? 'border-error focus:border-error'
                  : 'border-warm-sand/80 focus:border-primary'
              } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
            />
          </div>
          {errors.address && (
            <p className="text-[11px] text-error mt-1.5 font-medium">{errors.address}</p>
          )}
        </div>

        {/* Apartment / Suite */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-apt"
              className="text-xs font-semibold text-on-surface"
            >
              Apartment, Suite, Unit, Studio{' '}
              <span className="text-olive-gray font-normal">(Optional)</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              id="checkout-apt"
              type="text"
              value={shipping.apartment}
              onChange={(e) => onShippingFieldChange('apartment', e.target.value)}
              placeholder="Apt, Suite, Building floor, etc."
              className="w-full h-11 bg-canvas-cream/50 border border-warm-sand/80 focus:border-primary rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="h-5 flex items-center mb-1.5">
              <label
                htmlFor="checkout-city"
                className="text-xs font-semibold text-on-surface"
              >
                City <span className="text-terracotta">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                id="checkout-city"
                type="text"
                value={shipping.city}
                onChange={(e) => onShippingFieldChange('city', e.target.value)}
                className={`w-full h-11 bg-canvas-cream/50 border ${
                  errors.city
                    ? 'border-error focus:border-error'
                    : 'border-warm-sand/80 focus:border-primary'
                } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
              />
            </div>
            {errors.city && (
              <p className="text-[11px] text-error mt-1.5 font-medium">{errors.city}</p>
            )}
          </div>

          <div>
            <div className="h-5 flex items-center mb-1.5">
              <label
                htmlFor="checkout-state"
                className="text-xs font-semibold text-on-surface"
              >
                State / Province <span className="text-terracotta">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <select
                id="checkout-state"
                value={shipping.state}
                onChange={(e) => onShippingFieldChange('state', e.target.value)}
                className="w-full h-11 bg-canvas-cream/50 border border-warm-sand/80 focus:border-primary rounded-lg px-3.5 pr-10 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors cursor-pointer appearance-none"
              >
                {US_STATES.map((st) => (
                  <option key={st.code} value={st.code}>
                    {st.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-gray pointer-events-none" />
            </div>
          </div>

          <div>
            <div className="h-5 flex items-center mb-1.5">
              <label
                htmlFor="checkout-postal-code"
                className="text-xs font-semibold text-on-surface"
              >
                Postal Code <span className="text-terracotta">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                id="checkout-postal-code"
                type="text"
                value={shipping.postalCode}
                onChange={(e) => onShippingFieldChange('postalCode', e.target.value)}
                className={`w-full h-11 bg-canvas-cream/50 border ${
                  errors.postalCode
                    ? 'border-error focus:border-error'
                    : 'border-warm-sand/80 focus:border-primary'
                } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
              />
            </div>
            {errors.postalCode && (
              <p className="text-[11px] text-error mt-1.5 font-medium">{errors.postalCode}</p>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-instructions"
              className="text-xs font-semibold text-on-surface"
            >
              Delivery Instructions / Gate Code{' '}
              <span className="text-olive-gray font-normal">(Optional)</span>
            </label>
          </div>
          <div className="relative w-full">
            <textarea
              id="checkout-instructions"
              rows={2}
              value={shipping.instructions}
              onChange={(e) => onShippingFieldChange('instructions', e.target.value)}
              placeholder="Gate code #7290. Please place inside the covered front porch."
              className="w-full min-h-[80px] bg-canvas-cream/50 border border-warm-sand/80 focus:border-primary rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>

        {/* Shipping Method Selection */}
        <div className="pt-4 border-t border-warm-sand/40">
          <span className="block text-xs font-bold uppercase tracking-wider text-olive-gray mb-3">
            Select Shipping Method
          </span>
          <div className="space-y-3">
            {SHIPPING_METHODS.map((method) => {
              const isSelected = shippingMethod === method.id;
              return (
                <label
                  key={method.id}
                  onClick={() => onShippingMethodChange(method.id)}
                  className={`relative flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'border-2 border-primary bg-surface-bright shadow-xs'
                      : 'border border-warm-sand/80 bg-surface-white hover:bg-canvas-cream/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping-method"
                      value={method.id}
                      checked={isSelected}
                      onChange={() => onShippingMethodChange(method.id)}
                      className="sr-only"
                    />
                    <div
                      aria-hidden="true"
                      className={`size-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'border-primary bg-primary'
                          : 'border-warm-sand bg-surface-white'
                      }`}
                    >
                      {isSelected && <div className="size-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-on-surface">{method.title}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${
                            method.id === 'standard'
                              ? 'bg-secondary-container text-on-secondary-fixed'
                              : 'bg-warm-sand/40 text-tertiary'
                          }`}
                        >
                          {method.badge}
                        </span>
                      </div>
                      <p className="text-xs text-olive-gray mt-0.5">{method.description}</p>
                    </div>
                  </div>
                  <span className="font-price-md text-sm font-bold text-on-surface">
                    {method.price === 0 ? 'FREE' : `$${method.price.toFixed(2)}`}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
