const pillars = [
  {
    number: "01",
    title: "Honest Materials",
    description:
      "We exclusively harvest single-block ancient olivewood pruned responsibly from regenerative Italian groves. Paired with lead-free unglazed clay stoneware and untreated solid brass that naturally patinas with touch and memory.",
    icon: "nature",
    note: "100% Regenerative Timber",
  },
  {
    number: "02",
    title: "Slow Craftsmanship",
    description:
      "Air-cured timber resting for six patient months through seasonal humidity cycles. No synthetic microwave kilns, no polyurethane glazes. Our pieces are hand-rubbed with botanical waxes to let the wood breathe freely.",
    icon: "hourglass_empty",
    note: "180-Day Air Cure Cycle",
  },
  {
    number: "03",
    title: "Lifetime Utility",
    description:
      "Designed as durable companions, not disposable conveniences. Balanced ergonomic handles that fit the palm naturally, ready to accompany decades of simmered ragù, hearty sourdough kneading, and festive holiday tables.",
    icon: "all_inclusive",
    note: "Heirloom Guaranteed",
  },
];

export default function ManifestoSection() {
  return (
    <section className="w-full bg-surface-white py-space-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="max-w-2xl mb-space-xl">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider block mb-space-xs">
            The Ladle &amp; Co. Manifesto
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Three commitments to honest living and patient culinary rituals.
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
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{pillar.title}</h3>
                <p className="font-body-md text-body-md text-olive-gray leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-space-lg mt-space-md flex items-center gap-2 text-sage">
                <span className="material-symbols-outlined text-base">{pillar.icon}</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wide">{pillar.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
