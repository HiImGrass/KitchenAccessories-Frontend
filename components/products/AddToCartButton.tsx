"use client";
import { useTranslations } from "next-intl";

interface AddToCartButtonProps {
  onAddToCart: () => void;
  disabled?: boolean;
}

export default function AddToCartButton({
  onAddToCart,
  disabled = false,
}: AddToCartButtonProps) {
  const t = useTranslations("product");
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onAddToCart}
      className="
        add-to-cart-btn
        flex-1
        bg-terracotta
        hover:bg-primary-container
        disabled:opacity-50
        disabled:cursor-not-allowed
        text-on-primary
        rounded-full
        px-4
        py-2
        transition-colors
      "
    >
      {disabled ? t("outOfStock") : t("addToCart")}
    </button>
  );
}