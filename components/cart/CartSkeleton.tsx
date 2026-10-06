'use client';

import React from 'react';
import { Skeleton } from '@nextui-org/react';

export const CartSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Shipping banner skeleton */}
      <div className="p-5 rounded-2xl bg-surface-white border border-outline-variant/30 space-y-3">
        <div className="flex justify-between items-center">
          <Skeleton className="h-5 w-48 rounded-lg" />
          <Skeleton className="h-5 w-12 rounded-lg" />
        </div>
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-4 w-72 rounded-lg" />
      </div>

      {/* Main 2-column layout skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column skeleton */}
        <div className="lg:col-span-7 space-y-4">
          <Skeleton className="h-7 w-56 rounded-lg mb-4" />

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-surface-white rounded-2xl p-5 border border-outline-variant/30 flex gap-4"
            >
              <Skeleton className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-2/3 rounded-lg" />
                  <Skeleton className="h-5 w-16 rounded-lg" />
                </div>
                <Skeleton className="h-4 w-1/2 rounded-lg" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <div className="pt-2 flex justify-between items-center">
                  <Skeleton className="h-8 w-24 rounded-lg" />
                  <Skeleton className="h-8 w-20 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column skeleton */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-surface-white rounded-2xl p-6 border border-outline-variant/30 space-y-4">
            <Skeleton className="h-6 w-36 rounded-lg" />
            <div className="space-y-3 pt-2">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
            <Skeleton className="h-10 w-full rounded-xl mt-4" />
            <Skeleton className="h-12 w-full rounded-xl mt-4" />
          </div>
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
