'use client';

import React from 'react';
import { UserProfile } from '@/types/profile';

interface ProfileInfoCardProps {
  user: UserProfile;
}

export const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold text-olive-gray">{user.name}</h2>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-secondary-container text-on-secondary-fixed mt-1">
            {user.role}
          </span>
        </div>
      </div>

      <div className="border-t border-black/5 pt-4 space-y-2 text-sm text-olive-gray">
        <div>
          <span className="font-medium text-olive-gray/70">Email:</span> {user.email}
        </div>
        <div>
          <span className="font-medium text-olive-gray/70">Phone:</span> {user.phone}
        </div>
        <div>
          <span className="font-medium text-olive-gray/70">Shipping Address:</span>
          <p className="mt-0.5">{user.shippingAddress}</p>
        </div>
      </div>
    </div>
  );
};