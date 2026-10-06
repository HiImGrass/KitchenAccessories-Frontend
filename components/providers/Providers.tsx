'use client';

import { NextUIProvider } from '@nextui-org/react';
import { CartProvider } from '@/context/CartContext';
import { CartItem } from '@/types/cart';

interface ProvidersProps {
  children: React.ReactNode;
  initialCartItems?: CartItem[];
}

export function Providers({ children, initialCartItems = [] }: ProvidersProps) {
  return (
    <NextUIProvider>
      <CartProvider initialItems={initialCartItems}>
        {children}
      </CartProvider>
    </NextUIProvider>
  );
}
