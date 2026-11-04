'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const ProfileBreadcrumb: React.FC = () => {
  const t = useTranslations('profile');
  return (
    <nav className="text-sm mb-6 text-olive-gray">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline opacity-75">
            {t('home')}
          </Link>
        </li>
        <li>/</li>
        <li className="font-semibold text-olive-gray">{t('myProfile')}</li>
      </ol>
    </nav>
  );
};