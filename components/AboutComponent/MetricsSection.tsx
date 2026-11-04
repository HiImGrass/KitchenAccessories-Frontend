import { useTranslations } from "next-intl";

const metrics = [
  {
    id: "stat-pack",
    value: "100%",
    labelKey: "plasticFreePackaging",
    descriptionKey: "plasticFreePackagingDescription",
  },
  {
    id: "stat-warranty",
    value: "10-Year",
    labelKey: "heirloomWarranty",
    descriptionKey: "heirloomWarrantyDescription",
  },
  {
    id: "stat-guilds",
    value: "4",
    labelKey: "artisanCollectives",
    descriptionKey: "artisanCollectivesDescription",
  },
  {
    id: "stat-kitchens",
    value: "12,480+",
    labelKey: "kitchensEnriched",
    descriptionKey: "kitchensEnrichedDescription",
  },
];

export default function MetricsSection() {
  const t = useTranslations("about");
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin py-space-2xl w-full">
      <div className="bg-surface-white rounded-2xl p-space-xl lg:p-space-2xl shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg text-center">
          {metrics.map((metric) => (
            <div className="space-y-space-xs" key={metric.id}>
              <span
                className="font-display-lg text-display-lg text-primary block"
                id={metric.id}>
                {metric.value}
              </span>
              <span className="font-title-md text-title-md text-on-surface">
                {t(metric.labelKey)}
              </span>
              <p className="font-body-md text-body-md text-olive-gray">
                {t(metric.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
