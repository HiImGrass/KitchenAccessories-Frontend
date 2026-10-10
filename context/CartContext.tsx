'use client';

import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, ReactNode } from 'react';
import { CartItem, PromoCode, GiftWrapOption, CartSummary } from '@/types/cart';
import {
  AVAILABLE_PROMO_CODES,
  INITIAL_GIFT_WRAP,
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_FEE,
  TAX_RATE,
} from '@/lib/cartData';
import {
  fetchCartItemsFromDummyJSON,
  CartDataSource,
} from '@/lib/dummyjson';
import { toast } from 'sonner';

export interface UseCartReturn {
  // State
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
  dataSource: CartDataSource;
  giftWrap: GiftWrapOption;
  appliedPromo: PromoCode | null;
  promoInput: string;
  promoError: string | null;
  summary: CartSummary;

  // Actions
  setDataSource: (source: CartDataSource) => void;
  refetch: () => Promise<void>;
  setPromoInput: (code: string) => void;
  addItem: (
    product: { id: number | string; title: string; price: number; thumbnail?: string; image?: string },
    quantity?: number
  ) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  toggleGiftWrap: () => void;
  applyPromo: (codeToApply?: string) => void;
  removePromo: () => void;
  handleCheckout: () => void;
}

const CartContext = createContext<UseCartReturn | null>(null);

export interface CartProviderProps {
  children: ReactNode;
  initialItems?: CartItem[];
}

export function CartProvider({ children, initialItems = [] }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [isLoading, setIsLoading] = useState<boolean>(initialItems.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<CartDataSource>('kitchen_category');

  const [giftWrap, setGiftWrap] = useState<GiftWrapOption>(INITIAL_GIFT_WRAP);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(
    AVAILABLE_PROMO_CODES['AUTUMN10'] || null
  );
  const [promoInput, setPromoInput] = useState<string>('AUTUMN10');
  const [promoError, setPromoError] = useState<string | null>(null);

  const loadCartFromApi = useCallback(async (source: CartDataSource) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedItems = await fetchCartItemsFromDummyJSON({
        source,
        cartId: 1,
        limit: 3,
      });

      setItems(fetchedItems);
      if (fetchedItems.length === 0) {
        toast.info('No products returned from DummyJSON API.');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch cart from DummyJSON';
      setError(msg);
      toast.error(`DummyJSON API Error: ${msg}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialItems.length === 0) {
      loadCartFromApi(dataSource);
    }
  }, [dataSource, initialItems.length, loadCartFromApi]);

  const refetch = useCallback(async () => {
    await loadCartFromApi(dataSource);
  }, [dataSource, loadCartFromApi]);

  // ===== BỔ SUNG HÀM ADD ITEM VÀO GIỎ HÀNG =====
  const addItem = useCallback(
    (
      product: { id: number | string; title: string; price: number; thumbnail?: string; image?: string },
      quantity = 1
    ) => {
      const stringId = String(product.id);

      setItems((prev) => {
        const existingIndex = prev.findIndex((item) => item.id === stringId);

        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex].quantity += quantity;
          return updated;
        }

        return [
          ...prev,
          {
            id: stringId,
            name: product.title,
            price: product.price,
            quantity: quantity,
            image: product.thumbnail || product.image || '/placeholder.jpg',
            details: 'Kitchen Accessory',
            stockStatus: 'in_stock',
            stockLabel: 'In Stock',
            stockNote: 'Ready for dispatch',
            maxQuantity: 20,
          },
        ];
      });

      toast.success(`Đã thêm ${quantity} x "${product.title}" vào giỏ hàng!`);
    },
    []
  );

  const summary = useMemo<CartSummary>(() => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const discountPercentage = appliedPromo ? appliedPromo.discountPercentage : 0;
    const discountAmount = Math.round(subtotal * (discountPercentage / 100) * 100) / 100;

    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
    const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
    const shippingProgress =
      FREE_SHIPPING_THRESHOLD > 0
        ? Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))
        : 100;

    const giftWrapCost = giftWrap.enabled ? giftWrap.price : 0;

    const taxAmount =
      items.length === 0
        ? 0
        : Math.round(subtotal * TAX_RATE * 100) / 100;

    const total = Math.max(
      0,
      Math.round((subtotal - discountAmount + shippingFee + taxAmount + giftWrapCost) * 100) / 100
    );

    return {
      itemCount,
      subtotal,
      discountAmount,
      discountPercentage,
      shippingFee,
      isFreeShipping,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
      shippingProgress,
      taxAmount,
      giftWrapCost,
      total,
    };
  }, [items, appliedPromo, giftWrap]);

  const increaseQuantity = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const max = item.maxQuantity ?? 99;
          if (item.quantity >= max) {
            toast.warning(`Maximum stock (${max}) reached for this item.`);
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  }, []);

  const decreaseQuantity = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity <= 1) {
            return item;
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const max = item.maxQuantity ?? 99;
          const finalQty = Math.min(Math.max(1, qty), max);
          return { ...item, quantity: finalQty };
        }
        return item;
      })
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target) {
        toast.info(`Removed "${target.name}" from your basket.`);
      }
      return prev.filter((item) => item.id !== id);
    });
  }, []);

  const toggleGiftWrap = useCallback(() => {
    setGiftWrap((prev) => {
      const nextState = !prev.enabled;
      if (nextState) {
        toast.success('Artisan gift wrapping added (+ $5.00)');
      } else {
        toast.info('Artisan gift wrapping removed');
      }
      return { ...prev, enabled: nextState };
    });
  }, []);

  const applyPromo = useCallback((codeToApply?: string) => {
    const rawCode = (codeToApply ?? promoInput).trim().toUpperCase();
    if (!rawCode) {
      setPromoError('Please enter a valid voucher code.');
      return;
    }

    const foundPromo = AVAILABLE_PROMO_CODES[rawCode];
    if (foundPromo) {
      setAppliedPromo(foundPromo);
      setPromoError(null);
      setPromoInput(foundPromo.code);
      toast.success(`Coupon "${foundPromo.code}" applied successfully!`);
    } else {
      setPromoError(`Code "${rawCode}" is invalid or expired.`);
      toast.error(`Code "${rawCode}" is invalid or expired.`);
    }
  }, [promoInput]);

  const removePromo = useCallback(() => {
    setAppliedPromo(null);
    setPromoError(null);
    setPromoInput('');
    toast.info('Voucher code removed.');
  }, []);

  const handleCheckout = useCallback(() => {
    toast.success('Proceeding to encrypted secure checkout...', {
      description: `Order Total: $${summary.total.toFixed(2)} (${summary.itemCount} items)`,
    });
  }, [summary.total, summary.itemCount]);

  const value: UseCartReturn = {
    items,
    isLoading,
    error,
    dataSource,
    giftWrap,
    appliedPromo,
    promoInput,
    promoError,
    summary,
    setDataSource,
    refetch,
    setPromoInput,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    removeItem,
    toggleGiftWrap,
    applyPromo,
    removePromo,
    handleCheckout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): UseCartReturn {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}