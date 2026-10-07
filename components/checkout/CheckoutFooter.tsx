'use client';

import React from 'react';
import Link from 'next/link';

export const CheckoutFooter: React.FC = () => {
  return (
    <footer className="border-t border-warm-sand/40 bg-surface-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-olive-gray">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-xs font-bold text-on-surface">Ladle &amp; Co.</span>
          <span>© {new Date().getFullYear()} All rights reserved. Handcrafted with reverence.</span>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Artisan Sourcing Standard
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Shipping &amp; Customs
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            Contact Workshop
          </Link>
        </div>
      </div>
    </footer>
  );
};
