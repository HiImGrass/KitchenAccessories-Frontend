"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { VietnamFlag, UnitedStatesFlag } from "@/assets/svg/CountryFlags";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === "vi" ? "en" : "vi";

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label="Switch language"
      className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-secondary-container">
      <span>{locale === "vi" ? <VietnamFlag /> : <UnitedStatesFlag />}</span>
      <span>{locale === "vi" ? "VI" : "EN"}</span>
    </button>
  );
}
