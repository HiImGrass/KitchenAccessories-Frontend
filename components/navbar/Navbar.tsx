"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Search, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar
      classNames={{
        // Bê nguyên xi class từ thẻ <header> trong HTML của bạn
        base: "fixed top-0 left-0 right-0 z-50 bg-canvas-cream/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        // Bê nguyên class của thẻ <div> bọc bên trong
        wrapper: "h-20 max-w-7xl mx-auto px-space-md lg:px-margin flex items-center justify-between gap-space-md w-full",
      }}
      maxWidth="full"
      position="sticky"
    >
      {/* CỤM BÊN TRÁI: Logo + Navigation */}
      <NavbarContent justify="start" className="flex items-center gap-space-lg">
        <NavbarBrand as={Link} href="#" className="flex items-center gap-space-sm max-w-fit">
          <img 
            alt="Ladle & Co. Logo" 
            className="h-8 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1XbCDdOCTW7-1LLUOzW-79gsuIJVIv5u_8gEWVNUH2cjPr9idE0mxO7oO7JJckdxdGjQIe3joTog9hFznwskR4sAXpz9T6-nHUzkwiFFGQhZ0JG91gOiBjQNWz3KKbakDRN9JoVnx0Jzb21WFwb5OI-dfASpfQu382XbYTCQeFvqS44P3a88rgng4FaIOdXn1e6Gy44Lnj9RCacYDJj2S9sJquKm1bq359b_Xb6A_N1ixnRUuYFWTJ3WEM" 
          />
          <span className="font-headline-sm text-headline-sm text-tertiary tracking-tight">Ladle & Co.</span>
        </NavbarBrand>

        <ul className="hidden xl:flex items-center gap-space-sm">
          <NavbarItem isActive>
            <Link aria-current="page" href="#" className="transition-colors bg-secondary-container text-on-secondary-fixed font-title-md text-title-md rounded-full px-space-md py-space-xs">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors px-space-md py-space-xs rounded-full">
              Shop Catalog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors px-space-md py-space-xs rounded-full">
              Baking & Tools
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors px-space-md py-space-xs rounded-full">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors px-space-md py-space-xs rounded-full">
              Contact
            </Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      {/* CỤM BÊN PHẢI: Search + Icons (Thay icon bằng Lucide) */}
      <NavbarContent justify="end" className="flex items-center gap-space-md flex-1 max-w-md">
        <div className="relative w-full max-w-xs hidden sm:block">
          <Search className="absolute left-space-md top-1/2 -translate-y-1/2 text-sage w-5 h-5" />
          <input 
            className="w-full bg-surface-white pl-10 pr-space-md py-2 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all shadow-[0_1px_4px_rgba(0,0,0,0.03)]" 
            placeholder="Search cookware, utensils..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-space-sm">
          <button aria-label="Favorites" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors" type="button">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors" type="button">
            <ShoppingBag className="w-5 h-5" />
<<<<<<< Updated upstream
            <span className="absolute top-1 right-1 bg-terracotta text-on-primary font-label-sm text-label-sm w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
          <Link href="#" className="flex items-center pl-space-xs hover:opacity-90 transition-opacity">
            <img 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9cXJx025d9QCc8S8TwKZcaKg8BxvsIWacfd1zf2-sGAgaElkZzA7IdeAM2bzdVWlXJhrjyuJ9P_EehEAe-QB_oi0chpUqgE385fdtNGvH6UAldzEjiMRF4B9ZU2GW7Bvu8uSQsyncCS3iA3qr8vTnD7PT15cAzlOodpuu1hmrs7WDxK0KnirImAA0rHjGu8_xiArqE6ggM0jicQ_bPdpzOWNp4OJIYPgHHkrpO9FJ7nfYYMKUgYaP" 
=======
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
>>>>>>> Stashed changes
            />
          </Link>
        </div>
      </NavbarContent>
    </Navbar>
  );
}