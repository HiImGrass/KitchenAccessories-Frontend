export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  details: string; // e.g. "Finish: Natural Raw Wax • Artisan: Studio Neri, Umbria"
  stockStatus: StockStatus;
  stockLabel: string; // e.g. "In Stock", "Low Stock: Only 3 left in workshop"
  stockNote: string; // e.g. "Ready for dispatch", "Reserved for 15 mins"
  maxQuantity?: number;
}

export interface PromoCode {
  code: string;
  discountPercentage: number;
  description: string;
}

export interface GiftWrapOption {
  enabled: boolean;
  price: number;
  title: string;
  description: string;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  discountAmount: number;
  discountPercentage: number;
  shippingFee: number;
  isFreeShipping: boolean;
  freeShippingThreshold: number;
  shippingProgress: number;
  taxAmount: number;
  giftWrapCost: number;
  total: number;
}
