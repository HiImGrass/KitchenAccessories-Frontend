'use client';

import React from 'react';

interface ProfileActionsCardProps {
  onEditProfile: () => void;
  onChangePassword: () => void;
  onSignOut: () => void;
}

export const ProfileActionsCard: React.FC<ProfileActionsCardProps> = ({
  onEditProfile,
  onChangePassword,
  onSignOut,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 space-y-3">
      <h3 className="font-semibold text-olive-gray mb-2">Account Settings</h3>
      <button
        onClick={onEditProfile}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-canvas-cream/50 hover:bg-canvas-cream transition-colors text-sm font-medium text-olive-gray"
      >
        Edit Profile
      </button>
      <button
        onClick={onChangePassword}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-canvas-cream/50 hover:bg-canvas-cream transition-colors text-sm font-medium text-olive-gray"
      >
        Change Password
      </button>
      <button
        onClick={onSignOut}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 transition-colors text-sm font-medium text-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};