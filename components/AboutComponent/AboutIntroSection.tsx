import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutIntroSection() {
  const t = useTranslations("about");
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin pt-space-xl pb-space-lg w-full">
      <div className="flex items-center gap-2 text-olive-gray font-body-md text-body-md mb-space-md">
        <Link className="hover:text-primary transition-colors" href="/">
          {t("home")}
        </Link>
        <span className="text-sage">/</span>
        <span className="text-terracotta font-title-md text-title-md">
          {t("aboutUs")}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
        <div className="lg:col-span-8 space-y-space-md">
          <div className="inline-flex items-center gap-space-xs bg-secondary-container px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-label-md text-label-md text-on-secondary-fixed uppercase tracking-wider">
              {t("storyHeritage")}
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
            {t("introTitle")}
          </h1>
        </div>

        <div className="lg:col-span-4 pb-2">
          <p className="font-body-lg text-body-lg text-olive-gray leading-relaxed">
            {t("introDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}
