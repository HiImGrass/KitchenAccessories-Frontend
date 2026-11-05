"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductActionsProps {
  product: {
    id: number;
    title: string;
    price: number;
    stock: number;
    thumbnail?: string;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const handleQtyChange = (val: number) => {
    const newQty = qty + val;
    if (newQty >= 1 && newQty <= (product.stock || 20)) {
      setQty(newQty);
    }
  };

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  return (
    <div className="space-y-4 pt-2">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-fit items-center bg-surface-container-lowest rounded-full shadow-sm p-1 border border-outline-variant/40">
          <button
            type="button"
            onClick={() => handleQtyChange(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
          >
            -
          </button>
          <span className="font-semibold text-on-surface px-4 min-w-[3rem] text-center">{qty}</span>
          <button
            type="button"
            onClick={() => handleQtyChange(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full flex-1 bg-primary hover:bg-primary-container active:scale-95 text-on-primary font-semibold py-3.5 px-6 rounded-full shadow-md transition-all flex justify-center items-center gap-2 cursor-pointer sm:w-auto"
        >
          <span>🛒</span>
          <span>Add to Cart — ${(product.price * qty).toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}
