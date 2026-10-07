import type { Metadata } from 'next';
import { CheckoutView } from '@/components/checkout/CheckoutView';

export const metadata: Metadata = {
  title: 'Checkout | Ladle & Co. Artisanal Kitchenware',
  description:
    'Complete your artisanal kitchenware order with encrypted bank-grade security and climate-neutral fulfillment.',
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
