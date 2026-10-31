'use client';

import React, { FormEvent, useState } from 'react';
import { ProfileBreadcrumb } from '@/components/profile/ProfileBreadcrumb';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileInfoCard } from '@/components/profile/ProfileInfoCard';
import { ProfileActionsCard } from '@/components/profile/ProfileActionsCard';
import { ProfileOrdersList } from '@/components/profile/ProfileOrdersList';
import {
  INITIAL_PROFILE_USER,
  INITIAL_PROFILE_ORDERS,
} from '@/lib/profileData';
import { updateMockUser } from '@/lib/dummyjson';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';

export const ProfileView: React.FC = () => {
  const [user, setUser] = useState(INITIAL_PROFILE_USER);
  const [orders] = useState(INITIAL_PROFILE_ORDERS);
  const [activeDialog, setActiveDialog] = useState<'profile' | 'password' | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleEditProfile = () => setActiveDialog('profile');
  const handleChangePassword = () => setActiveDialog('password');

  const handleProfileSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const [firstName, ...lastNameParts] = name.split(/\s+/);
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const shippingAddress = String(form.get('shippingAddress') || '').trim();

    if (!firstName || !email || !phone || !shippingAddress) {
      toast.error('Please complete every profile field.');
      return;
    }

    setIsSaving(true);
    try {
      await updateMockUser(user.id, {
        firstName,
        lastName: lastNameParts.join(' '),
        email,
        phone,
        address: { address: shippingAddress },
      });
      setUser((current) => ({ ...current, name, email, phone, shippingAddress }));
      setActiveDialog(null);
      toast.success('Profile updated for this session.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unable to update your profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get('password') || '');
    const confirmPassword = String(form.get('confirmPassword') || '');

    if (password.length < 8) {
      toast.error('Use a password with at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('The password confirmation does not match.');
      return;
    }

    setIsSaving(true);
    try {
      await updateMockUser(user.id, { password });
      setActiveDialog(null);
      toast.success('Password updated for this session.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unable to update your password.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    console.log('Sign out clicked, Removed Tokens');
    router.push('/login');
  };

  const handleViewOrderDetails = (orderId: string) => {
    console.log('View order details:', orderId);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <ProfileBreadcrumb />

      {/* Page Header */}
      <ProfileHeader memberSince={user.memberSince} />

      {/* Main Content Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Info & Actions (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <ProfileInfoCard user={user} />
          <ProfileActionsCard
            onEditProfile={handleEditProfile}
            onChangePassword={handleChangePassword}
            onSignOut={handleSignOut}
          />
        </div>

        {/* Right Column: Order History (8 cols) */}
        <div className="lg:col-span-8">
          <ProfileOrdersList
            orders={orders}
            onViewOrderDetails={handleViewOrderDetails}
          />
        </div>
      </div>

      {activeDialog === 'profile' && (
        <ProfileDialog title="Edit Profile" onClose={() => setActiveDialog(null)}>
          <form className="space-y-4" onSubmit={handleProfileSave}>
            <ProfileField label="Full name" name="name" defaultValue={user.name} />
            <ProfileField label="Email address" name="email" type="email" defaultValue={user.email} />
            <ProfileField label="Phone number" name="phone" type="tel" defaultValue={user.phone} />
            <ProfileField label="Shipping address" name="shippingAddress" defaultValue={user.shippingAddress} />
            <DialogActions isSaving={isSaving} label="Save profile" />
          </form>
        </ProfileDialog>
      )}

      {activeDialog === 'password' && (
        <ProfileDialog title="Change Password" onClose={() => setActiveDialog(null)}>
          <form className="space-y-4" onSubmit={handlePasswordSave}>
            <p className="text-sm text-olive-gray">
              This demonstration sends a simulated update to DummyJSON and resets when this page is reloaded.
            </p>
            <ProfileField label="New password" name="password" type="password" autoComplete="new-password" />
            <ProfileField label="Confirm new password" name="confirmPassword" type="password" autoComplete="new-password" />
            <DialogActions isSaving={isSaving} label="Update password" />
          </form>
        </ProfileDialog>
      )}
    </div>
  );
};

function ProfileDialog({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-on-surface/35 p-4" role="dialog" aria-modal="true" aria-labelledby="profile-dialog-title">
      <div className="w-full max-w-lg rounded-2xl bg-surface-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="profile-dialog-title" className="text-xl font-semibold text-on-surface">{title}</h2>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-olive-gray hover:bg-canvas-cream" aria-label="Close dialog">×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ProfileField({
  label,
  name,
  type = 'text',
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  autoComplete?: string;
}) {
  const id = `profile-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-on-surface">{label}</label>
      <input id={id} name={name} type={type} defaultValue={defaultValue} autoComplete={autoComplete} required className="w-full rounded-xl border border-outline-variant/50 bg-canvas-cream px-3 py-2.5 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function DialogActions({ isSaving, label }: { isSaving: boolean; label: string }) {
  return (
    <button type="submit" disabled={isSaving} className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-container disabled:cursor-wait disabled:opacity-70">
      {isSaving ? 'Saving…' : label}
    </button>
  );
}
