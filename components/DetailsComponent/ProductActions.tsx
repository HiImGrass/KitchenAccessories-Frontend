"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

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
  const [isFavorited, setIsFavorited] = useState(false);

  const handleQtyChange = (val: number) => {
    const newQty = qty + val;
    if (newQty >= 1 && newQty <= (product.stock || 20)) {
      setQty(newQty);
    }
  };

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      toast.success(`Đã thêm "${product.title}" vào danh sách yêu thích!`);
    } else {
      toast.info(`Đã xóa "${product.title}" khỏi danh sách yêu thích.`);
    }
  };

  return (
    <div className="space-y-4 pt-2">
      <div className="flex items-center gap-4">
        {/* Nút Yêu thích */}
        <button
          type="button"
          onClick={handleToggleFavorite}
          className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-sm transition-all ${
            isFavorited ? "bg-red-50 border-red-200 text-red-500" : "bg-white text-gray-400 hover:bg-gray-50"
          }`}
          title="Thêm vào yêu thích"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>

        {/* Bộ đếm số lượng */}
        <div className="flex items-center bg-white rounded-full shadow-sm p-1 border">
          <button
            type="button"
            onClick={() => handleQtyChange(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            -
          </button>
          <span className="font-semibold text-gray-800 px-4 min-w-[3rem] text-center">{qty}</span>
          <button
            type="button"
            onClick={() => handleQtyChange(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Nút Add to Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-semibold py-3.5 px-6 rounded-full shadow-md transition-all flex justify-center items-center gap-2 cursor-pointer"
        >
          <span>🛒</span>
          <span>Add to Cart — ${(product.price * qty).toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}