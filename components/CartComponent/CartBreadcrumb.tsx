'use client';

import React from 'react';
import Link from 'next/link';

export const CartBreadcrumb: React.FC = () => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-olive-gray">
        <li>
          <Link
            href="/"
            className="hover:text-primary transition-colors font-medium text-olive-gray"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-sage select-none">
          /
        </li>
        <li className="font-semibold text-on-surface" aria-current="page">
          Your Cart
        </li>
      </ol>
    </nav>
  );
};
