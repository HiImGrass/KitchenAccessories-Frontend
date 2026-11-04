"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/lib/SvgIcons";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full bg-surface-white border-t border-surface-variant pt-space-2xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl mb-space-2xl">
          {/* Cột 1: Thông tin */}
          <div className="col-span-1 md:col-span-1 flex flex-col space-y-space-md">
            <Link href="#" className="flex items-center gap-space-sm w-max">
              <span className="font-headline-sm text-headline-sm text-tertiary tracking-tight">Ladle & Co.</span>
            </Link>
            <p className="font-body-md text-body-md text-olive-gray">
              {t("description")}
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs text-sage">
              <a href="#" className="hover:text-terracotta transition-colors" aria-label={t("instagram")}>
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-terracotta transition-colors" aria-label={t("facebook")}>
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-terracotta transition-colors" aria-label={t("twitter")}>
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Cột 2: Cửa hàng */}
          <div className="col-span-1">
            <h4 className="font-title-md text-title-md text-tertiary mb-space-md">{t("shop")}</h4>
            <ul className="flex flex-col space-y-space-sm font-body-md text-body-md text-olive-gray">
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("shopCatalog")}</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("curatedSets")}</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("newArrivals")}</Link></li>
            </ul>
          </div>

          {/* Cột 3: Về chúng tôi */}
          <div className="col-span-1">
            <h4 className="font-title-md text-title-md text-tertiary mb-space-md">{t("about")}</h4>
            <ul className="flex flex-col space-y-space-sm font-body-md text-body-md text-olive-gray">
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("ourEthos")}</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("craftJournal")}</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("sustainability")}</Link></li>
              <li><Link href="#" className="hover:text-terracotta transition-colors">{t("contactUs")}</Link></li>
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div className="col-span-1">
            <h4 className="font-title-md text-title-md text-tertiary mb-space-md">{t("stayInspired")}</h4>
            <p className="font-body-md text-body-md text-olive-gray mb-space-sm">{t("newsletter")}</p>
            <div className="relative w-full mt-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-sage w-5 h-5" />
              <input 
                type="email" 
                placeholder={t("emailPlaceholder")}
                className="w-full bg-canvas-cream pl-10 pr-4 py-2.5 rounded-full font-body-md text-body-md text-olive-gray placeholder-sage focus:outline-none focus:ring-1 focus:ring-terracotta transition-all"
              />
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t border-surface-variant pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-sage font-label-sm text-label-sm">
          <p>&copy; {new Date().getFullYear()} Ladle & Co. {t("copyright")}</p>
          <div className="flex gap-space-md">
            <Link href="#" className="hover:text-terracotta transition-colors">{t("privacy")}</Link>
            <Link href="#" className="hover:text-terracotta transition-colors">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
