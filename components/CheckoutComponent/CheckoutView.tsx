'use client';

import React from 'react';
import { useCheckout } from '@/hooks/useCheckout';
import { CheckoutHeader } from './CheckoutHeader';
import { CheckoutStageIndicator } from './CheckoutStageIndicator';
import { CheckoutCustomerContact } from './CheckoutCustomerContact';
import { CheckoutShippingAddress } from './CheckoutShippingAddress';
import { CheckoutPaymentMethod } from './CheckoutPaymentMethod';
import { CheckoutOrderSummary } from './CheckoutOrderSummary';
import { CheckoutArtisanPledge } from './CheckoutArtisanPledge';
import { CheckoutFooter } from './CheckoutFooter';
import { CheckoutSuccessModal } from './CheckoutSuccessModal';

export const CheckoutView: React.FC = () => {
  const {
    contact,
    shipping,
    shippingMethod,
    paymentType,
    card,
    errors,
    setContactField,
    setShippingField,
    setShippingMethod,
    setPaymentType,
    setCardField,
    orderItems,
    subtotal,
    discountAmount,
    taxAmount,
    finalTotal,
    selectedShippingOption,
    isSubmitting,
    isSuccessModalOpen,
    placedOrder,
    handlePlaceOrder,
    closeSuccessModal,
  } = useCheckout();

  return (
    <div className="bg-canvas-cream text-on-surface min-h-screen antialiased flex flex-col justify-between">
      <div>
        {/* Minimal Focused Checkout Header */}
        <CheckoutHeader />

        {/* Checkout Stage Indicator */}
        <CheckoutStageIndicator />

        {/* Main Checkout Layout */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: Customer Forms (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Header Titles */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-terracotta tracking-wider uppercase mb-1">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  Guaranteed Secure Checkout
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                  Express Fulfillment Details
                </h2>
                <p className="text-sm text-olive-gray mt-1">
                  Please provide your destination and delivery preferences for handcrafted distribution.
                </p>
              </div>

              {/* Section 1: Customer Contact */}
              <CheckoutCustomerContact
                contact={contact}
                errors={errors}
                onFieldChange={setContactField}
              />

              {/* Section 2: Shipping Address & Delivery */}
              <CheckoutShippingAddress
                shipping={shipping}
                shippingMethod={shippingMethod}
                errors={errors}
                onShippingFieldChange={setShippingField}
                onShippingMethodChange={setShippingMethod}
              />

              {/* Section 3: Payment Method */}
              <CheckoutPaymentMethod
                card={card}
                paymentType={paymentType}
                errors={errors}
                onCardFieldChange={setCardField}
                onPaymentTypeChange={setPaymentType}
              />
            </div>

            {/* RIGHT COLUMN: Sticky Order Summary & Artisan Pledge (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
              <CheckoutOrderSummary
                items={orderItems}
                subtotal={subtotal}
                discountAmount={discountAmount}
                shippingOption={selectedShippingOption}
                taxAmount={taxAmount}
                finalTotal={finalTotal}
                isSubmitting={isSubmitting}
                onPlaceOrder={handlePlaceOrder}
              />

              <CheckoutArtisanPledge />
            </div>
          </div>
        </main>
      </div>

      {/* Focused Minimal Checkout Footer */}
      <CheckoutFooter />

      {/* Order Success Modal */}
      <CheckoutSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        orderDetails={placedOrder}
      />
    </div>
  );
};
