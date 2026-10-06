'use client';

import React from 'react';
import { useCart } from '@/hooks/useCart';
import { CartBreadcrumb } from './CartBreadcrumb';
import { CartHeader } from './CartHeader';
import { CartShippingBanner } from './CartShippingBanner';
import { CartItemList } from './CartItemList';
import { CartGiftWrapAddon } from './CartGiftWrapAddon';
import { CartTrustBadges } from './CartTrustBadges';
import { CartOrderSummary } from './CartOrderSummary';
import { CartLogisticsCard } from './CartLogisticsCard';
import { CartEmptyState } from './CartEmptyState';
import { CartSkeleton } from './CartSkeleton';
import { Button } from '@nextui-org/react';
import { RefreshCw } from 'lucide-react';

export const CartView: React.FC = () => {
  const {
    items,
    isLoading,
    error,
    refetch,
    giftWrap,
    appliedPromo,
    promoInput,
    promoError,
    summary,
    setPromoInput,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    toggleGiftWrap,
    applyPromo,
    removePromo,
    handleCheckout,
  } = useCart();

  const isEmpty = items.length === 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb Navigation */}
      <CartBreadcrumb />

      {/* Header & Ethos Description */}
      <CartHeader itemCount={summary.itemCount} />

      {/* Loading State */}
      {isLoading ? (
        <CartSkeleton />
      ) : error ? (
        /* Error State */
        <div className="p-8 text-center bg-surface-white rounded-2xl border border-error/30 max-w-md mx-auto space-y-4">
          <p className="text-error font-medium text-sm">{error}</p>
          <Button
            size="sm"
            className="bg-primary text-white"
            onClick={refetch}
            startContent={<RefreshCw className="w-3.5 h-3.5" />}
          >
            Retry Fetching DummyJSON
          </Button>
        </div>
      ) : isEmpty ? (
        /* Empty State */
        <CartEmptyState onRefetch={refetch} />
      ) : (
        /* Main Basket Content */
        <>
          {/* Free Express Shipping Progress Banner */}
          <CartShippingBanner
            progress={summary.shippingProgress}
            isFreeShipping={summary.isFreeShipping}
            freeShippingThreshold={summary.freeShippingThreshold}
            subtotal={summary.subtotal}
          />

          {/* Responsive 2-Column Cart Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Basket Items, Gift Wrapping Addon, Trust Badges */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4">
              <CartItemList
                items={items}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />

              <CartGiftWrapAddon
                option={giftWrap}
                onToggle={toggleGiftWrap}
              />

              <CartTrustBadges />
            </div>

            {/* Right Column: Order Summary & Workshop Logistics */}
            <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28 space-y-4">
              <CartOrderSummary
                summary={summary}
                appliedPromo={appliedPromo}
                promoInput={promoInput}
                promoError={promoError}
                giftWrap={giftWrap}
                onPromoInputChange={setPromoInput}
                onApplyPromo={() => applyPromo()}
                onRemovePromo={removePromo}
                onCheckout={handleCheckout}
              />

              <CartLogisticsCard />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
