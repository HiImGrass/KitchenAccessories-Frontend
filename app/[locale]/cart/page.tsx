import { Metadata } from 'next';
import { CartView } from '@/components/CartComponent/CartView';
import { PageIntlProvider } from '@/components/providers/PageIntlProvider';
import { getScopedMessages } from '@/lib/intlMessages';

export const metadata: Metadata = {
  title: 'Your Culinary Basket | Ladle & Co.',
  description:
    'Hand-inspected, sustainably packaged with organic linen, and dispatched directly from artisan workshops.',
};

export default async function CartPage() {
  const messages = await getScopedMessages('cart');
  return (
    <PageIntlProvider messages={messages}>
      <main className="w-full min-h-[calc(100vh-20rem)] bg-canvas-cream">
        <CartView />
      </main>
    </PageIntlProvider>
  );
}
