'use client';

export { useCart, CartProvider } from '@/context/CartContext';
export type { UseCartReturn } from '@/context/CartContext';

import { useState, useMemo, useCallback } from 'react';
import {
  CustomerContact,
  ShippingAddress,
  ShippingMethodId,
  PaymentType,
  CardPaymentInfo,
  CheckoutErrors,
  PlacedOrderDetails,
} from '@/types/checkout';
import {
  INITIAL_CHECKOUT_FORM,
  SHIPPING_METHODS,
  DEFAULT_CHECKOUT_ITEMS,
} from '@/lib/checkoutData';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

export interface UseCheckoutReturn {
  // Form State
  contact: CustomerContact;
  shipping: ShippingAddress;
  shippingMethod: ShippingMethodId;
  paymentType: PaymentType;
  card: CardPaymentInfo;
  errors: CheckoutErrors;

  // Setters
  setContactField: <K extends keyof CustomerContact>(field: K, value: CustomerContact[K]) => void;
  setShippingField: <K extends keyof ShippingAddress>(field: K, value: ShippingAddress[K]) => void;
  setShippingMethod: (method: ShippingMethodId) => void;
  setPaymentType: (type: PaymentType) => void;
  setCardField: <K extends keyof CardPaymentInfo>(field: K, value: CardPaymentInfo[K]) => void;

  // Order Items & Pricing
  orderItems: ReturnType<typeof useCart>['items'];
  subtotal: number;
  discountAmount: number;
  shippingCost: number;
  taxAmount: number;
  finalTotal: number;
  selectedShippingOption: (typeof SHIPPING_METHODS)[0];

  // Submission & Confirmation
  isSubmitting: boolean;
  isSuccessModalOpen: boolean;
  placedOrder: PlacedOrderDetails | null;
  handlePlaceOrder: () => Promise<void>;
  closeSuccessModal: () => void;
}

export function useCheckout(): UseCheckoutReturn {
  const { items: cartItems, summary, appliedPromo, clearCart } = useCart();

  // Form states
  const [contact, setContact] = useState<CustomerContact>(INITIAL_CHECKOUT_FORM.contact);
  const [shipping, setShipping] = useState<ShippingAddress>(INITIAL_CHECKOUT_FORM.shipping);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethodId>(INITIAL_CHECKOUT_FORM.shippingMethod);
  const [paymentType, setPaymentType] = useState<PaymentType>(INITIAL_CHECKOUT_FORM.paymentType);
  const [card, setCard] = useState<CardPaymentInfo>(INITIAL_CHECKOUT_FORM.card);
  const [errors, setErrors] = useState<CheckoutErrors>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [placedOrder, setPlacedOrder] = useState<PlacedOrderDetails | null>(null);

  // Field updaters
  const setContactField = useCallback(
    <K extends keyof CustomerContact>(field: K, value: CustomerContact[K]) => {
      setContact((prev) => ({ ...prev, [field]: value }));
      if (errors[field as keyof CheckoutErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const setShippingField = useCallback(
    <K extends keyof ShippingAddress>(field: K, value: ShippingAddress[K]) => {
      setShipping((prev) => ({ ...prev, [field]: value }));
      if (errors[field as keyof CheckoutErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const setCardField = useCallback(
    <K extends keyof CardPaymentInfo>(field: K, value: CardPaymentInfo[K]) => {
      setCard((prev) => ({ ...prev, [field]: value }));
      if (errors[field as keyof CheckoutErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  // Determine items to display: Cart items if present, otherwise default mockup items
  const orderItems = useMemo(() => {
    return cartItems.length > 0 ? cartItems : DEFAULT_CHECKOUT_ITEMS;
  }, [cartItems]);

  // Selected shipping method configuration
  const selectedShippingOption = useMemo(() => {
    return SHIPPING_METHODS.find((opt) => opt.id === shippingMethod) || SHIPPING_METHODS[0];
  }, [shippingMethod]);

  // Price calculations
  const subtotal = useMemo(() => {
    if (cartItems.length > 0) {
      return summary.subtotal;
    }
    return DEFAULT_CHECKOUT_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems.length, summary.subtotal]);

  const discountAmount = useMemo(() => {
    if (cartItems.length > 0) {
      return summary.discountAmount;
    }
    return Math.round(subtotal * 0.1 * 100) / 100;
  }, [cartItems.length, summary.discountAmount, subtotal]);

  const shippingCost = selectedShippingOption.price;

  const taxAmount = useMemo(() => {
    const rate = 0.0664;
    return Math.round(subtotal * rate * 100) / 100;
  }, [subtotal]);

  const finalTotal = useMemo(() => {
    const total = subtotal - discountAmount + shippingCost + taxAmount;
    return Math.max(0, Math.round(total * 100) / 100);
  }, [subtotal, discountAmount, shippingCost, taxAmount]);

  // Form validation
  const validateForm = useCallback((): boolean => {
    const newErrors: CheckoutErrors = {};

    if (!contact.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!contact.phone.trim()) {
      newErrors.phone = 'Phone number is required for delivery notifications';
    }

    if (!shipping.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!shipping.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!shipping.address.trim()) {
      newErrors.address = 'Street address is required';
    }

    if (!shipping.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!shipping.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    if (paymentType === 'card') {
      if (!card.cardHolder.trim()) {
        newErrors.cardHolder = 'Cardholder name is required';
      }
      if (!card.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      }
      if (!card.cardExpiry.trim()) {
        newErrors.cardExpiry = 'Expiry date required';
      }
      if (!card.cardCvc.trim()) {
        newErrors.cardCvc = 'Security code required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [contact, shipping, paymentType, card]);

  // Place order action
  const handlePlaceOrder = useCallback(async () => {
    if (!validateForm()) {
      toast.error('Please complete all required fields correctly before placing order.');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));

      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const generatedOrderId = `LC-${randomNum}-GLD`;

      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + (shippingMethod === 'express' ? 2 : 4));
      const formattedDelivery = deliveryDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

      const orderDetails: PlacedOrderDetails = {
        orderId: generatedOrderId,
        placedAt: new Date().toISOString(),
        total: finalTotal,
        customerEmail: contact.email,
        shippingMethodName: selectedShippingOption.title,
        estimatedDelivery: formattedDelivery,
      };

      // Lưu đơn hàng vào localStorage kèm đầy đủ thông tin ảnh sản phẩm
      const existingOrdersRaw = localStorage.getItem('ladle-user-orders');
      const existingOrders = existingOrdersRaw ? JSON.parse(existingOrdersRaw) : [];

      const newOrderForHistory = {
        id: generatedOrderId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'Processing' as const,
        total: finalTotal,
        itemsCount: orderItems.reduce((sum, i) => sum + i.quantity, 0),
        items: orderItems.map((item: any) => ({
          id: String(item.id),
          name: item.title || item.name || 'Sản phẩm',
          quantity: item.quantity,
          price: item.price,
          image: item.image || item.thumbnail || item.img || '', // Lấy chính xác đường dẫn ảnh sản phẩm
        })),
      };

      localStorage.setItem('ladle-user-orders', JSON.stringify([newOrderForHistory, ...existingOrders]));

      clearCart();
      setPlacedOrder(orderDetails);
      setIsSuccessModalOpen(true);
      toast.success('Order placed successfully! A receipt has been sent to your email.');
    } catch {
      toast.error('Failed to process payment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, finalTotal, contact.email, shippingMethod, selectedShippingOption.title, clearCart, orderItems]);

  const closeSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false);
  }, []);

  return {
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
    shippingCost,
    taxAmount,
    finalTotal,
    selectedShippingOption,
    isSubmitting,
    isSuccessModalOpen,
    placedOrder,
    handlePlaceOrder,
    closeSuccessModal,
  };
}