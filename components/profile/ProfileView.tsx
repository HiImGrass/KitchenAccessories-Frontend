'use client';

import React, { useState } from 'react';
import { ProfileBreadcrumb } from '@/components/profile/ProfileBreadcrumb';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileInfoCard } from '@/components/profile/ProfileInfoCard';
import { ProfileActionsCard } from '@/components/profile/ProfileActionsCard';
import { ProfileOrdersList } from '@/components/profile/ProfileOrdersList';
import {
  INITIAL_PROFILE_USER,
  INITIAL_PROFILE_ORDERS,
} from '@/lib/profileData';

export const ProfileView: React.FC = () => {
  const [user] = useState(INITIAL_PROFILE_USER);
  const [orders] = useState(INITIAL_PROFILE_ORDERS);

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  const handleChangePassword = () => {
    console.log('Change password clicked');
  };

  const handleSignOut = () => {
    console.log('Sign out clicked');
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
    </div>
  );
};