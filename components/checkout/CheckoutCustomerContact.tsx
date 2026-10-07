'use client';

import React from 'react';
import { CustomerContact, CheckoutErrors } from '@/types/checkout';
import { toast } from 'sonner';

interface CheckoutCustomerContactProps {
  contact: CustomerContact;
  errors: CheckoutErrors;
  onFieldChange: <K extends keyof CustomerContact>(field: K, value: CustomerContact[K]) => void;
}

export const CheckoutCustomerContact: React.FC<CheckoutCustomerContactProps> = ({
  contact,
  errors,
  onFieldChange,
}) => {
  const isEmailValid =
    contact.email.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);

  return (
    <section className="bg-surface-white border border-warm-sand/60 rounded-xl p-6 sm:p-8 shadow-xs">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-warm-sand/40 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center size-7 rounded-full bg-canvas-cream text-primary border border-warm-sand text-xs font-bold">
            1
          </span>
          <h3 className="font-headline-sm text-lg font-bold text-on-surface">
            Customer Contact
          </h3>
        </div>
        <div className="text-xs text-olive-gray">
          Have an account?{' '}
          <button
            type="button"
            onClick={() => toast.info('Artisan Member Portal login is coming soon!')}
            className="font-semibold text-primary hover:underline ml-1 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {/* Email Field */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-email"
              className="text-xs font-semibold text-on-surface"
            >
              Email Address <span className="text-terracotta">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              id="checkout-email"
              type="email"
              value={contact.email}
              onChange={(e) => onFieldChange('email', e.target.value)}
              placeholder="your.name@example.com"
              className={`w-full h-11 bg-canvas-cream/50 border ${
                errors.email
                  ? 'border-error focus:border-error'
                  : 'border-warm-sand/80 focus:border-primary'
              } rounded-lg px-3.5 pr-10 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
            />
            {isEmailValid && (
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-secondary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
            )}
          </div>
          {errors.email ? (
            <p className="text-[11px] text-error mt-1.5 font-medium">{errors.email}</p>
          ) : (
            <p className="text-[11px] text-olive-gray mt-1.5">
              Order confirmation, tracking telemetry, and digital craftsmanship receipts will be
              sent here.
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <div className="h-5 flex items-center mb-1.5">
            <label
              htmlFor="checkout-phone"
              className="text-xs font-semibold text-on-surface"
            >
              Phone Number (for Courier updates) <span className="text-terracotta">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              id="checkout-phone"
              type="tel"
              value={contact.phone}
              onChange={(e) => onFieldChange('phone', e.target.value)}
              placeholder="+1 (555) 000-0000"
              className={`w-full h-11 bg-canvas-cream/50 border ${
                errors.phone
                  ? 'border-error focus:border-error'
                  : 'border-warm-sand/80 focus:border-primary'
              } rounded-lg px-3.5 text-sm text-on-surface focus:outline-none focus:ring-0 transition-colors`}
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-error mt-1.5 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Newsletter Opt-in Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={contact.subscribeNewsletter}
              onChange={(e) => onFieldChange('subscribeNewsletter', e.target.checked)}
              className="sr-only"
            />
            <div
              aria-hidden="true"
              className={`size-[18px] rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                contact.subscribeNewsletter
                  ? 'bg-primary border-primary text-white shadow-2xs'
                  : 'border-warm-sand bg-canvas-cream/50 group-hover:border-primary/60'
              }`}
            >
              {contact.subscribeNewsletter && (
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
              Keep me updated on exclusive seasonal kiln releases, masterclasses, and care
              instructions from our Tuscany &amp; Kyoto workshop partners.
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};
