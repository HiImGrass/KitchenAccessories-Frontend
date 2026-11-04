import { useTranslations } from "next-intl";

const steps = [
  {
    number: "1",
    titleKey: "ethicalHarvest",
    descriptionKey: "ethicalHarvestDescription",
    timingKey: "pruningCycle",
  },
  {
    number: "2",
    titleKey: "tuscanSeasoning",
    descriptionKey: "tuscanSeasoningDescription",
    timingKey: "airDry",
  },
  {
    number: "3",
    titleKey: "latheChisel",
    descriptionKey: "latheChiselDescription",
    timingKey: "handCarving",
  },
  {
    number: "4",
    titleKey: "organicWaxDip",
    descriptionKey: "organicWaxDipDescription",
    timingKey: "readyForKitchen",
  },
];

export default function SourcingTimelineSection() {
  const t = useTranslations("about");
  return (
    <section className="w-full bg-secondary-container/40 py-space-2xl">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider block mb-space-xs">
            {t("sourcingJourney")}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            {t("sourcingTitle")}
          </h2>
          <p className="font-body-md text-body-md text-olive-gray mt-space-xs">
            {t("sourcingDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {steps.map((step) => (
            <article key={step.number} className="bg-surface-white p-space-lg rounded-xl shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-canvas-cream text-terracotta font-headline-sm text-headline-sm flex items-center justify-center mb-space-md">
                {step.number}
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs">{t(step.titleKey)}</h3>
              <p className="font-body-md text-body-md text-olive-gray">{t(step.descriptionKey)}</p>
              <div className="mt-space-md pt-space-xs text-sage font-label-sm text-label-sm">
                {t(step.timingKey)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
