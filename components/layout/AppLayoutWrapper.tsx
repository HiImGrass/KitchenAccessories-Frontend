'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

interface AppLayoutWrapperProps {
  children: React.ReactNode;
}

export const AppLayoutWrapper: React.FC<AppLayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isCheckout = pathname === '/checkout';

  if (isCheckout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-20rem)] pt-20">{children}</main>
      <Footer />
    </>
  );
};
