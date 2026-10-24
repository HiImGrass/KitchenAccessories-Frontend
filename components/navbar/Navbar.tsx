"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useCart } from "@/hooks/useCart";

export default function CustomNavbar() {
  const { summary } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCatalogRoute = pathname === "/products" || pathname.startsWith("/products/");
  const navigationClassName = (isActive: boolean) =>
    [
      "font-title-md text-title-md transition-colors px-space-md py-space-xs rounded-full",
      isActive
        ? "bg-secondary-container text-on-secondary-fixed"
        : "text-on-surface-variant hover:text-on-surface",
    ].join(" ");

  const closeMenu = () => setIsMenuOpen(false);
  const mobileLinks = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/products", label: "Shop Catalog", active: isCatalogRoute },
    { href: "/about", label: "About Us", active: pathname === "/about" },
  ];

  return (
    <>
      <Navbar
      classNames={{
        // Bê nguyên xi class từ thẻ <header> trong HTML của bạn
        base: "fixed inset-x-0 top-0 z-50 w-full max-w-none bg-canvas-cream/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        // Bê nguyên class của thẻ <div> bọc bên trong
        wrapper:
          "h-20 w-full max-w-none px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-margin",
      }}
      maxWidth="full"
      position="sticky">
      <NavbarContent justify="start" className="flex min-w-0 flex-1 items-center gap-space-lg">
        <NavbarBrand
          as={Link}
          href="/"
          className="flex shrink-0 items-center gap-space-sm max-w-fit">
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

      <NavbarContent
        justify="end"
        className="ml-auto flex flex-none items-center gap-space-sm sm:gap-space-md">
        <div className="relative w-full max-w-xs hidden sm:block">
          <Search className="absolute left-space-md top-1/2 -translate-y-1/2 text-sage w-5 h-5" />
          <input
            className="w-full bg-surface-white pl-10 pr-space-md py-2 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            placeholder="Search cookware, utensils..."
            type="text"
          />
        </div>
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
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="xl:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-secondary-container hover:text-on-secondary-fixed"
          >
            <Menu className="h-5 w-5" />
          </button>
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
      </NavbarContent>
      </Navbar>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 bg-on-surface/25 backdrop-blur-[1px]"
          />
          <aside className="absolute right-0 top-0 flex h-full w-[min(20rem,calc(100vw-2rem))] flex-col bg-surface-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-5">
              <span className="font-title-lg text-title-lg text-tertiary">Menu</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-canvas-cream"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile navigation">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  onClick={closeMenu}
                  className={[
                    "rounded-xl px-4 py-3 font-title-md text-title-md transition-colors",
                    link.active
                      ? "bg-secondary-container text-on-secondary-fixed"
                      : "text-on-surface-variant hover:bg-canvas-cream hover:text-on-surface",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
