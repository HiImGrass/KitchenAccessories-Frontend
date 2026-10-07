export interface CustomerContact {
  email: string;
  phone: string;
  subscribeNewsletter: boolean;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  postalCode: string;
  instructions: string;
}

export type ShippingMethodId = 'standard' | 'express';

export interface ShippingMethodOption {
  id: ShippingMethodId;
  title: string;
  badge: string;
  description: string;
  price: number;
}

export type PaymentType = 'card' | 'apple_pay' | 'paypal';

export interface CardPaymentInfo {
  cardHolder: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  sameAsBilling: boolean;
}

export interface CheckoutFormState {
  contact: CustomerContact;
  shipping: ShippingAddress;
  shippingMethod: ShippingMethodId;
  paymentType: PaymentType;
  card: CardPaymentInfo;
}

export interface CheckoutErrors {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  cardHolder?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}

export interface PlacedOrderDetails {
  orderId: string;
  placedAt: string;
  total: number;
  customerEmail: string;
  shippingMethodName: string;
  estimatedDelivery: string;
}
