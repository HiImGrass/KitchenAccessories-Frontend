"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/app/SVG.png";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop Catalog",
    href: "/products",
  },
  {
    label: "Baking & Tools",
    href: "/products?category=baking",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-cream/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-space-md lg:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <Link href="/" className="flex items-center gap-space-sm">
            <Image
              src={logo}
              alt="Ladle & Co. Logo"
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-space-sm">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("?")[0]);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "bg-secondary-container text-on-secondary-fixed font-title-md text-title-md rounded-full px-space-md py-space-xs"
                      : "font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors px-space-md py-space-xs rounded-full"
                  }>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-space-md flex-1 justify-end max-w-md">
          <div className="relative w-full max-w-xs hidden sm:block">
            <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-sage text-base">
              search
            </span>

            <input
              type="text"
              placeholder="Search cookware, utensils..."
              className="w-full bg-surface-white pl-10 pr-space-md py-2 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            />
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              aria-label="Cart"
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors"
              type="button">
              <span className="material-symbols-outlined text-xl">
                shopping_bag
              </span>
              <span className="absolute top-1 right-1 bg-terracotta text-on-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <Link
              className="flex items-center pl-space-xs hover:opacity-90 transition-opacity"
              data-path="account"
              href="/about">
              <Image
                width={32}
                height={32}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9cXJx025d9QCc8S8TwKZcaKg8BxvsIWacfd1zf2-sGAgaElkZzA7IdeAM2bzdVWlXJhrjyuJ9P_EehEAe-QB_oi0chpUqgE385fdtNGvH6UAldzEjiMRF4B9ZU2GW7Bvu8uSQsyncCS3iA3qr8vTnD7PT15cAzlOodpuu1hmrs7WDxK0KnirImAA0rHjGu8_xiArqE6ggM0jicQ_bPdpzOWNp4OJIYPgHHkrpO9FJ7nfYYMKUgYaP"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
