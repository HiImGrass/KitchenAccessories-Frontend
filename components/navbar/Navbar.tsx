"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { useCart } from "@/hooks/useCart";

export default function CustomNavbar() {
  const { summary } = useCart();
  const pathname = usePathname();
  const isCatalogRoute =
    pathname === "/products" || pathname.startsWith("/products/");
  const isLogined = localStorage.getItem("user") || false;
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
        // Bê nguyên xi class từ thẻ <header> trong HTML của bạn
        base: "fixed top-0 left-0 right-0 z-50 bg-canvas-cream/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        // Bê nguyên class của thẻ <div> bọc bên trong
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
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isCatalogRoute}>
            <Link
              href="/products"
              aria-current={isCatalogRoute ? "page" : undefined}
              className={navigationClassName(isCatalogRoute)}>
              Shop Catalog
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/about"}>
            <Link
              href="/about"
              aria-current={pathname === "/about" ? "page" : undefined}
              className={navigationClassName(pathname === "/about")}>
              About Us
            </Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      {/* CỤM BÊN PHẢI: Search + Icons (Thay icon bằng Lucide) */}
      <NavbarContent
        justify="end"
        className="flex items-center gap-space-md flex-1 max-w-md">
        <div className="relative w-full max-w-xs hidden sm:block">
          <Search className="absolute left-space-md top-1/2 -translate-y-1/2 text-sage w-5 h-5" />
          <input
            className="w-full bg-surface-white pl-10 pr-space-md py-2 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            placeholder="Search cookware, utensils..."
            type="text"
          />
        </div>
        {isLogined ? (
          <>
            <div className="flex items-center gap-space-sm">
              <Link
                href="/cart"
                aria-label={`Cart with ${summary.itemCount} items`}
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {summary.itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-terracotta text-on-primary font-label-sm text-label-sm min-w-4 h-4 px-1 rounded-full flex items-center justify-center text-[10px] font-bold leading-none shadow-xs transition-transform transform active:scale-95">
                    {summary.itemCount}
                  </span>
                )}
              </Link>
              <Link
                href="/profile"
                className="flex items-center pl-space-xs hover:opacity-90 transition-opacity">
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9cXJx025d9QCc8S8TwKZcaKg8BxvsIWacfd1zf2-sGAgaElkZzA7IdeAM2bzdVWlXJhrjyuJ9P_EehEAe-QB_oi0chpUqgE385fdtNGvH6UAldzEjiMRF4B9ZU2GW7Bvu8uSQsyncCS3iA3qr8vTnD7PT15cAzlOodpuu1hmrs7WDxK0KnirImAA0rHjGu8_xiArqE6ggM0jicQ_bPdpzOWNp4OJIYPgHHkrpO9FJ7nfYYMKUgYaP"
                />
              </Link>
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-space-xs hover:opacity-90 transition-opacity">
            <Button className="bg-primary text-on-primary font-semibold px-space-md py-space-sm rounded-full hover:bg-primary-container transition-colors">
              Sign in
            </Button>
          </Link>
        )}
      </NavbarContent>
    </Navbar>
  );
}
