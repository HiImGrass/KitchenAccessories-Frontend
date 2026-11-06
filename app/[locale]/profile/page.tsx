import { Metadata } from 'next';
import { ProfileView } from '@/components/profile/ProfileView';
import { PageIntlProvider } from '@/components/providers/PageIntlProvider';
import { getScopedMessages } from '@/lib/intlMessages';

export const metadata: Metadata = {
  title: 'My Account & Profile | Ladle & Co.',
  description:
    'Manage your artisan culinary account details, addresses, payment methods, and order history.',
};

export default async function ProfilePage() {
  const messages = await getScopedMessages('profile');
  return (
    <PageIntlProvider messages={messages}>
      <main className="w-full min-h-[calc(100vh-20rem)] bg-canvas-cream">
        <ProfileView />
      </main>
    </PageIntlProvider>
  );
}