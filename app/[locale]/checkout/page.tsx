import type { Metadata } from 'next';
import { CheckoutView } from '@/components/CheckoutComponent/CheckoutView';
import { PageIntlProvider } from '@/components/providers/PageIntlProvider';
import { getScopedMessages } from '@/lib/intlMessages';

export const metadata: Metadata = {
  title: 'Checkout | Ladle & Co. Artisanal Kitchenware',
  description:
    'Complete your artisanal kitchenware order with encrypted bank-grade security and climate-neutral fulfillment.',
};

export default async function CheckoutPage() {
  const messages = await getScopedMessages('checkout');
  return (
    <PageIntlProvider messages={messages}>
      <CheckoutView />
    </PageIntlProvider>
  );
}
