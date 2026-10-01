"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/lib/SvgIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-white border-t border-surface-variant pt-space-2xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl mb-space-2xl">
          {/* Cột 1: Thông tin */}
          <div className="col-span-1 md:col-span-1 flex flex-col space-y-space-md">
            <Link href="#" className="flex items-center gap-space-sm w-max">
              <span className="font-headline-sm text-headline-sm text-tertiary tracking-tight">
                Ladle & Co.
              </span>
            </Link>
            <p className="font-body-md text-body-md text-olive-gray">
              Thoughtful tools for everyday cooking. Crafted culinary essentials
              and timeless kitchenware.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs text-sage">
              <Link
                href="https://www.instagram.com/"
                className="hover:text-terracotta transition-colors"
                aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="hover:text-terracotta transition-colors"
                aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/"
                className="hover:text-terracotta transition-colors"
                aria-label="Twitter">
                <TwitterIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Cột 2: Cửa hàng */}
          <div className="col-span-1">
            <h4 className="font-title-md text-title-md text-tertiary mb-space-md">
              Shop
            </h4>
            <ul className="flex flex-col space-y-space-sm font-body-md text-body-md text-olive-gray">
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Shop Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Baking & Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Curated Sets
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Về chúng tôi */}
          <div className="col-span-1">
            <h4 className="font-title-md text-title-md text-tertiary mb-space-md">
              About
            </h4>
            <ul className="flex flex-col space-y-space-sm font-body-md text-body-md text-olive-gray">
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Our Ethos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Craft Journal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-terracotta transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div className="col-span-1">
            <h4 className="font-title-md text-title-md text-tertiary mb-space-md">
              Stay Inspired
            </h4>
            <p className="font-body-md text-body-md text-olive-gray mb-space-sm">
              Join our newsletter for seasonal recipes and new artisan
              collections.
            </p>
            <div className="relative w-full mt-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-sage w-5 h-5" />
              <input
                type="email"
                placeholder="Email address..."
                className="w-full bg-canvas-cream pl-10 pr-4 py-2.5 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all"
              />
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t border-surface-variant pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-sage font-label-sm text-label-sm">
          <p>
            &copy; {new Date().getFullYear()} Ladle & Co. All rights reserved.
          </p>
          <div className="flex gap-space-md">
            <Link href="#" className="hover:text-terracotta transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-terracotta transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
