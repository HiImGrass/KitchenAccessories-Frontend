'use client';

import React from 'react';

interface ProfileHeaderProps {
  memberSince: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ memberSince }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-olive-gray">Account Overview</h1>
      <p className="text-sm text-olive-gray/80 mt-1">
        Member since {memberSince}
      </p>
    </div>
  );
};