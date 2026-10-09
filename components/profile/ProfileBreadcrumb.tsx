'use client';

import React from 'react';
import Link from 'next/link';

export const ProfileBreadcrumb: React.FC = () => {
  return (
    <nav className="text-sm mb-6 text-olive-gray">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline opacity-75">
            Home
          </Link>
        </li>
        <li>/</li>
        <li className="font-semibold text-olive-gray">My Profile</li>
      </ol>
    </nav>
  );
};