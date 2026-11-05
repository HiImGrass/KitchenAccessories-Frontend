import { ShippingMethodOption, CheckoutFormState } from '@/types/checkout';
import { CartItem } from '@/types/cart';

export const SHIPPING_METHODS: ShippingMethodOption[] = [
  {
    id: 'standard',
    title: 'Standard Artisan Delivery',
    badge: 'Included',
    description: '3-5 business days • Climate-neutral regional ground',
    price: 0,
  },
  {
    id: 'express',
    title: 'Express Tuscan Courier',
    badge: 'Priority',
    description: '1-2 business days • Direct temperature-monitored air dispatch',
    price: 12.0,
  },
];

export const US_STATES = [
  { code: 'OR', name: 'Oregon (OR)' },
  { code: 'WA', name: 'Washington (WA)' },
  { code: 'CA', name: 'California (CA)' },
  { code: 'NY', name: 'New York (NY)' },
  { code: 'TX', name: 'Texas (TX)' },
  { code: 'IL', name: 'Illinois (IL)' },
  { code: 'MA', name: 'Massachusetts (MA)' },
  { code: 'CO', name: 'Colorado (CO)' },
];

/**
 * Fallback items from the Stitch Checkout design
 * Used if the cart items have not loaded or cart is empty
 */
export const DEFAULT_CHECKOUT_ITEMS: CartItem[] = [
  {
    id: 'item-1',
    name: 'Hand-Carved Olive Wood Ladle',
    price: 28.0,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCw54JRsI20Cq5KCM7wAWVys5Et9Ljsc3MoTrFLahglGn3moYB8FXQbkxqyvfc7sB2gSdm-T3MjehNtFhMiiWQ-6jsp-JAow6Lv_X_jC0RIC-3YNW9GTw5KPoWb682QtpzIIxfe8UhPcJVpvkXTVppYubeGoTa2lAopTKb2SGyYmwy9SvMCKBWbSUOZR29KewSjv5ms01jNv0t2w6nwHItl9wFymojILmZb-IChpMAgThoYV6rtPZm_',
    details: 'Umbria, Italy • Wild Olivewood',
    stockStatus: 'in_stock',
    stockLabel: 'Artisan Batch #14',
    stockNote: 'Ready for dispatch',
  },
  {
    id: 'item-2',
    name: 'Ceramic Pour Spout Mixing Bowl Set',
    price: 64.0,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChK8d9X5025d9QCc8S8TwKZcaKg8BxvsIWacfd1zf2-sGAgaElkZzA7IdeAM2bzdVWlXJhrjyuJ9P_EehEAe-QB_oi0chpUqgE385fdtNGvH6UAldzEjiMRF4B9ZU2GW7Bvu8uSQsyncCS3iA3qr8vTnD7PT15cAzlOodpuu1hmrs7WDxK0KnirImAA0rHjGu8_xiArqE6ggM0jicQ_bPdpzOWNp4OJIYPgHHkrpO9FJ7nfYYMKUgYaP',
    details: 'Set of 2 • Stoneware Sand Glaze',
    stockStatus: 'in_stock',
    stockLabel: 'Kiln-Fired',
    stockNote: 'Cured & Inspected',
  },
  {
    id: 'item-3',
    name: 'Heavy Brass Measuring Spoons',
    price: 36.0,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIF2d9slWQkUxoP76wRqkH9ozNyRyuB_46lunCCI8QcsnVvPXoUdFTCAZ12rLz43JQnvg23R-MDm5-1NPcgZ6cCStNoLul1DNNaN_O5_J1tDxD469tMkZqVnIbZ53cmYN1uun-nlzqFuM3hOM6USPQo6Ex8mpM-tgRzUoVhEoTPtz29gEZF__x9nzpPQPPaW1EVLx625dodWZznmfYa_f5wglGPwRgv-yYXtn_l-NhzXycY91fzwpJ',
    details: 'Forged Brass • Raw Leather Cord',
    stockStatus: 'in_stock',
    stockLabel: 'Heirloom Quality',
    stockNote: 'Hand-Polished',
  },
];

export const INITIAL_CHECKOUT_FORM: CheckoutFormState = {
  contact: {
    email: 'elena.vance@culinarystudio.com',
    phone: '+1 (555) 438-9201',
    subscribeNewsletter: true,
  },
  shipping: {
    firstName: 'Elena',
    lastName: 'Vance',
    address: '428 Artisan Way, Studio 4B',
    apartment: 'Studio 4B',
    city: 'Portland',
    state: 'OR',
    postalCode: '97201',
    instructions: 'Gate code #7290. Please place inside the covered front porch.',
  },
  shippingMethod: 'standard',
  paymentType: 'card',
  card: {
    cardHolder: 'Elena M Vance',
    cardNumber: '•••• •••• •••• 4912',
    cardExpiry: '08 / 28',
    cardCvc: '923',
    sameAsBilling: true,
  },
};
