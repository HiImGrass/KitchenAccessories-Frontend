'use client';

import React from 'react';
import Link from 'next/link';

export const CheckoutHeader: React.FC = () => {
  return (
    <header className="border-b border-warm-sand/40 bg-surface-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive-gray hover:text-primary transition-colors py-2 pr-3 border-r border-warm-sand/40"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Return to Cart</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-6 text-primary group-hover:scale-105 transition-transform">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.1288 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                  fill="currentColor"
                />
                <path
                  clipRule="evenodd"
                  d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-headline-sm text-lg font-bold text-on-surface tracking-tight leading-none">
                Ladle &amp; Co.
              </h1>
              <p className="text-[11px] font-medium text-olive-gray tracking-wide">
                Artisan Guild Standard
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-xs text-olive-gray font-medium bg-canvas-cream border border-warm-sand/50 px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-terracotta text-[18px]">lock</span>
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-olive-gray">Need help?</span>
            <Link
              href="/about"
              className="text-xs font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
