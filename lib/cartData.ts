import { PromoCode, GiftWrapOption } from '@/types/cart';

export const AVAILABLE_PROMO_CODES: Record<string, PromoCode> = {
  AUTUMN10: {
    code: 'AUTUMN10',
    discountPercentage: 10,
    description: 'Code AUTUMN10 applied: 10% seasonal discount.',
    descriptionKey: 'promoAutumn10',
  },
  ARTISAN20: {
    code: 'ARTISAN20',
    discountPercentage: 20,
    description: 'Code ARTISAN20 applied: 20% craft guild discount.',
    descriptionKey: 'promoArtisan20',
  },
};

export const INITIAL_GIFT_WRAP: GiftWrapOption = {
  enabled: false,
  price: 5.00,
  title: 'Artisan Gift Wrapping & Handwritten Calligraphy Note',
  titleKey: 'giftWrapTitle',
  description:
    'Individually wrapped with natural washed Belgian linen, dried olive sprig, and your custom message hand-penned on recycled cotton cardstock.',
  descriptionKey: 'giftWrapDescription',
};

export const FREE_SHIPPING_THRESHOLD = 100.00;
export const STANDARD_SHIPPING_FEE = 15.00;
export const TAX_RATE = 0.08; // 8% estimated sales tax
