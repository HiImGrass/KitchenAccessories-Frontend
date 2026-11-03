"use client";

import React from "react";

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
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 space-y-3">
      <h3 className="font-semibold text-olive-gray mb-2">Account Settings</h3>
      <button
        onClick={onEditProfile}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-sm font-medium text-olive-gray">
        Edit Profile
      </button>
      <button
        onClick={onChangePassword}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-sm font-medium text-olive-gray">
        Change Password
      </button>
      <button
        onClick={onSignOut}
        className="w-full text-left px-4 py-2.5 rounded-xl bg-error-container/40 hover:bg-error-container/70 transition-colors text-sm font-medium text-error">
        Sign Out
      </button>
    </div>
  );
};
