const metrics = [
  {
    id: "stat-pack",
    value: "100%",
    label: "Plastic-Free Packaging",
    description: "Recycled unbleached kraft paper & soy inks",
  },
  {
    id: "stat-warranty",
    value: "10-Year",
    label: "Heirloom Warranty",
    description: "Free replacement or repair against splitting",
  },
  {
    id: "stat-guilds",
    value: "4",
    label: "Artisan Collectives",
    description: "Direct sovereign master-craft workshops",
  },
  {
    id: "stat-kitchens",
    value: "12,480+",
    label: "Kitchens Enriched",
    description: "Across 38 countries worldwide",
  },
];

export default function MetricsSection() {
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
                {metric.label}
              </span>
              <p className="font-body-md text-body-md text-olive-gray">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
