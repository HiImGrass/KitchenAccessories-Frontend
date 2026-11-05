'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface ProfileHeaderProps {
  memberSince: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ memberSince }) => {
  const t = useTranslations('profile');
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-olive-gray">{t('title')}</h1>
      {memberSince && (
        <p className="text-sm text-olive-gray/80 mt-1">
          {t('memberSince', { date: memberSince })}
        </p>
      )}
    </div>
  );
};