export default function CareSection() {
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin pb-space-2xl w-full">
      <div className="bg-canvas-cream rounded-2xl p-space-lg lg:p-space-xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-8 space-y-space-xs">
            <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-base">spa</span>
              <span className="uppercase tracking-wider">The Care Philosophy</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-tertiary">
              Wood loves olive oil as much as your pasta does.
            </h3>
            <p className="font-body-md text-body-md text-olive-gray max-w-2xl">
              Never place raw timber in a mechanical dishwasher. Simply rinse with tepid water and mild
              plant soap, dry immediately with linen, and massage with a drop of olive oil every full moon.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="inline-flex items-center gap-3 bg-surface-white px-5 py-3 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-terracotta text-2xl">sanitizer</span>
              <div>
                <span className="font-title-md text-title-md text-on-surface block">
                  Free Care Balm Included
                </span>
                <span className="font-label-sm text-label-sm text-sage">
                  With every utensil order over $45
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
