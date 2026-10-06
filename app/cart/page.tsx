import { Metadata } from 'next';
import { CartView } from '@/components/cart/CartView';

export const metadata: Metadata = {
  title: 'Your Culinary Basket | Ladle & Co.',
  description:
    'Hand-inspected, sustainably packaged with organic linen, and dispatched directly from artisan workshops.',
};

export default function CartPage() {
  return (
    <main className="w-full min-h-[calc(100vh-20rem)] bg-canvas-cream">
      <CartView />
    </main>
  );
}
