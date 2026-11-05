import { useTranslations } from "next-intl";

export default function CareSection() {
  const t = useTranslations("about");
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin pb-space-2xl w-full">
      <div className="bg-canvas-cream rounded-2xl p-space-lg lg:p-space-xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-8 space-y-space-xs">
            <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-base">spa</span>
              <span className="uppercase tracking-wider">{t("carePhilosophy")}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-tertiary">
              {t("careTitle")}
            </h3>
            <p className="font-body-md text-body-md text-olive-gray max-w-2xl">
              {t("careDescription")}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="inline-flex items-center gap-3 bg-surface-white px-5 py-3 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-terracotta text-2xl">sanitizer</span>
              <div>
                <span className="font-title-md text-title-md text-on-surface block">
                  {t("careBalm")}
                </span>
                <span className="font-label-sm text-label-sm text-sage">
                  {t("careBalmDescription")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
