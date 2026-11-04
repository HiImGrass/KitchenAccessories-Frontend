import { useTranslations } from "next-intl";

const pillars = [
  {
    number: "01",
    titleKey: "honestMaterials",
    descriptionKey: "honestMaterialsDescription",
    icon: "nature",
    noteKey: "regenerativeTimber",
  },
  {
    number: "02",
    titleKey: "slowCraftsmanship",
    descriptionKey: "slowCraftsmanshipDescription",
    icon: "hourglass_empty",
    noteKey: "airCureCycle",
  },
  {
    number: "03",
    titleKey: "lifetimeUtility",
    descriptionKey: "lifetimeUtilityDescription",
    icon: "all_inclusive",
    noteKey: "heirloomGuaranteed",
  },
];

export default function ManifestoSection() {
  const t = useTranslations("about");
  return (
    <section className="w-full bg-surface-white py-space-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="max-w-2xl mb-space-xl">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider block mb-space-xs">
            {t("manifesto")}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            {t("manifestoTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="bg-canvas-cream p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-space-md">
                <span className="font-headline-lg text-headline-lg text-warm-sand block">
                  {pillar.number}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{t(pillar.titleKey)}</h3>
                <p className="font-body-md text-body-md text-olive-gray leading-relaxed">
                  {t(pillar.descriptionKey)}
                </p>
              </div>

              <div className="pt-space-lg mt-space-md flex items-center gap-2 text-sage">
                <span className="material-symbols-outlined text-base">{pillar.icon}</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wide">{t(pillar.noteKey)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
