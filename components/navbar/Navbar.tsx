"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Search, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { useSyncExternalStore } from "react";
import logo from "@/assets/logo.png";
import { useCart } from "@/hooks/useCart";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTranslations } from "next-intl";
function subscribeToAuthChanges(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

// Kiểm tra đồng nhất tất cả các khóa đăng nhập có thể có
function getLoginSnapshot() {
  if (typeof window === "undefined") return false;
  return Boolean(
    localStorage.getItem("user") ||
    localStorage.getItem("accessToken") || 
    localStorage.getItem("userProfile")
  );
}

function getServerLoginSnapshot() {
  return false;
}

export default function CustomNavbar() {
  const { summary } = useCart();
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const [userAvatar, setUserAvatar] = useState<string>("");

  const isCatalogRoute =
    pathname === "/products" || pathname.startsWith("/products/");
  
  const isLogined = useSyncExternalStore(
    subscribeToAuthChanges,
    getLoginSnapshot,
    getServerLoginSnapshot,
  );

  // Đọc ảnh avatar động từ "userProfile" hoặc "user" khi đăng nhập
  useEffect(() => {
    if (isLogined) {
      const storedUser = localStorage.getItem("userProfile") || localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          if (parsed.image) {
            setUserAvatar(parsed.image);
          }
        } catch (e) {
          console.error("Failed to parse user data", e);
        }
      }
    } else {
      setUserAvatar(""); // Xóa avatar khi đăng xuất
    }
  }, [isLogined]);

  const navigationClassName = (isActive: boolean) =>
    [
      "font-title-md text-title-md transition-colors px-space-md py-space-xs rounded-full",
      isActive
        ? "bg-secondary-container text-on-secondary-fixed"
        : "text-on-surface-variant hover:text-on-surface",
    ].join(" ");

  return (
    <Navbar
      classNames={{
        base: "fixed top-0 left-0 right-0 z-50 bg-canvas-cream/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        wrapper:
          "h-20 max-w-7xl mx-auto px-space-md lg:px-margin flex items-center justify-between gap-space-md w-full",
      }}
      maxWidth="full"
      position="sticky">
      {/* CỤM BÊN TRÁI: Logo + Navigation */}
      <NavbarContent justify="start" className="flex items-center gap-space-lg">
        <NavbarBrand
          as={Link}
          href="/"
          className="flex items-center gap-space-sm max-w-fit">
          <img
            alt="Ladle & Co. Logo"
            className="h-8 w-auto object-contain"
            src={logo.src}
          />
        </NavbarBrand>

        <ul className="hidden xl:flex items-center gap-space-sm">
          <NavbarItem isActive={pathname === "/"}>
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={navigationClassName(pathname === "/")}>
              {t("home")}
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isCatalogRoute}>
            <Link
              href="/products"
              aria-current={isCatalogRoute ? "page" : undefined}
              className={navigationClassName(isCatalogRoute)}>
              {t("shopCatalog")}
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/about"}>
            <Link
              href="/about"
              aria-current={pathname === "/about" ? "page" : undefined}
              className={navigationClassName(pathname === "/about")}>
              {t("aboutUs")}
            </Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      {/* CỤM BÊN PHẢI: Search + Icons */}
      <NavbarContent
        justify="end"
        className="flex items-center gap-space-md flex-1 max-w-md">
        <div className="relative w-full max-w-xs hidden sm:block">
          <Search className="absolute left-space-md top-1/2 -translate-y-1/2 text-sage w-5 h-5" />
          <input
            className="w-full bg-surface-white pl-10 pr-space-md py-2 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            placeholder={t("searchPlaceholder")}
            type="text"
          />
        </div>
        <LanguageSwitcher />
        <ThemeToggle />
        {isLogined ? (
          <>
            <div className="flex items-center gap-space-sm">
              <Link
                href="/cart"
                aria-label={t("cart", { count: summary.itemCount })}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant transition-colors hover:bg-secondary-container hover:text-on-secondary-fixed">
                <ShoppingBag className="w-5 h-5" />
                {summary.itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-terracotta text-on-primary font-label-sm text-label-sm min-w-4 h-4 px-1 rounded-full flex items-center justify-center text-[10px] font-bold leading-none shadow-xs transition-transform transform active:scale-95">
                    {summary.itemCount}
                  </span>
                )}
              </Link>
              <Link
                href="/profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low transition-colors hover:bg-secondary-container hover:opacity-90">
                <img
                  alt={t("profile")}
                  className="w-8 h-8 rounded-full object-cover border border-outline-variant/50"
                  src={userAvatar || "https://dummyjson.com/icon/default/128"}
                />
              </Link>
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-space-xs hover:opacity-90 transition-opacity">
            <Button className="bg-primary text-on-primary font-semibold px-space-md py-space-sm rounded-full hover:bg-primary-container transition-colors">
              {t("signIn")}
            </Button>
          </Link>
        )}
      </NavbarContent>
    </Navbar>
  );
}