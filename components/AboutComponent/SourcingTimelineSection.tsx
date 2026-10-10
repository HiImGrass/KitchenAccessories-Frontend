const steps = [
  {
    number: "1",
    title: "Ethical Harvest",
    description:
      "Only pruned branches from non-bearing century groves are gathered during late autumn dormancy, leaving living trees intact.",
    timing: "Month 1 • Pruning Cycle",
  },
  {
    number: "2",
    title: "Tuscan Sun Seasoning",
    description:
      "Rough timber logs rest in covered, breezy outdoor sheds across changing humidity cycles to gently stabilize natural cell walls.",
    timing: "Months 2-6 • 180 Days Air Dry",
  },
  {
    number: "3",
    title: "Lathe & Chisel",
    description:
      "Turned by third-generation woodturners, then finished using Japanese hand-rasps for soft contours tailored to the palm.",
    timing: "Month 7 • Hand Carving",
  },
  {
    number: "4",
    title: "Organic Wax Dip",
    description:
      "Submerged in warm local organic beeswax and cold-pressed orange peel oil to nourish, seal, and highlight the golden marble grain.",
    timing: "Ready For Kitchen Service",
  },
];

export default function SourcingTimelineSection() {
  return (
    <section className="w-full bg-secondary-container/40 py-space-2xl">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider block mb-space-xs">
            Mindful Sourcing Journey
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            From Tuscan hill to culinary table
          </h2>
          <p className="font-body-md text-body-md text-olive-gray mt-space-xs">
            Each utensil takes seven months to complete, letting natural moisture balance naturally to
            prevent cracks or warping over a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {steps.map((step) => (
            <article key={step.number} className="bg-surface-white p-space-lg rounded-xl shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-canvas-cream text-terracotta font-headline-sm text-headline-sm flex items-center justify-center mb-space-md">
                {step.number}
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs">{step.title}</h3>
              <p className="font-body-md text-body-md text-olive-gray">{step.description}</p>
              <div className="mt-space-md pt-space-xs text-sage font-label-sm text-label-sm">
                {step.timing}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
