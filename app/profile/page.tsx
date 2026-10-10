import { Metadata } from 'next';
import { ProfileView } from '@/components/profile/ProfileView';

export const metadata: Metadata = {
  title: 'My Account & Profile | Ladle & Co.',
  description:
    'Manage your artisan culinary account details, addresses, payment methods, and order history.',
};

export default function ProfilePage() {
  return (
    <main className="w-full min-h-[calc(100vh-20rem)] bg-canvas-cream">
      <ProfileView />
    </main>
  );
}