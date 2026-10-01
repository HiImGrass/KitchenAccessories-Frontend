import Image from "next/image";

const guilds = [
  {
    location: "Umbria, Italy",
    name: "The Rossi Olivewood Guild",
    description:
      "Specializing in single-piece ladles, stirring paddles, and grain-matched tasting spoons using non-bearing regional olive timber.",
    craft: "Turned & Hand-Rasped",
    alt: "Italian wood turner working in a Tuscan workshop",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3gb7BBKvGsShtSsTMxTgx9vkJ8mtWld6Qu4onpx1QE2nQx0Omgne9xtfFubosqfqvh974CUb-Ns1mxHAicJl_byiSxnvYR31SUJThqp0dUWmWWiNEzKLWUqs_D6IS_wqZIS5taWb7YV1pZSuLXoXIygUWdTCy_dT84B6yBUvu28qc89iL2sg2kEICEQUqVRMkYCA0jtCuKUm7NcOk2nZfF2eGV7RMsomuGqqO36b8ATuTKi_yUCu4",
  },
  {
    location: "Mino, Japan",
    name: "Kato Kiln Collective",
    description:
      "Fourteenth-generation stoneware ceramics, unglazed mortar & pestle sets, and heat-retaining utensil storage crocks.",
    craft: "High-Fired Iron Rich Clay",
    alt: "Japanese ceramic artisan shaping stoneware clay",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSTSnayNQ0q0tXkkAXgiYa-3W6__4FrkcVYesguWV5G1IMXd-hBfeYmf2aLYjRGOjh0v3TjmPkHWlvC89G5hCu4_gAC7gsHNTKgylkEflNDTHbJeHeN6QLXKQ_tTj0xxFxDPAvJ9lbmTkYCp5jfApzZy_DKjkmwGLB9J5nNUGEa_U1VLWBFNooj1L6zI62hz2hxbphyLfZPyHAUVK3h4pIru6dMGd8plTh1ecY4zW49s29LF82c6OV",
  },
  {
    location: "Porto, Portugal",
    name: "Atelier Ferreiro",
    description:
      "Hand-riveted solid brass fittings, measuring cups, and dough scrapers hand-hammered for tactile kitchen responsiveness.",
    craft: "Solid Cold-Hammered Brass",
    alt: "Portuguese metalsmith shaping brass cookware tools",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2coLIFzmikqwrt9dsknvRgftwlUtrsMU4h6t9KXoHwRdci7SbkNCCz_FU5-mGEUkS1dYqYLhJw-tF1KuwTvl-i0-AqYLb02hKRLc7T3bII8Wia6dpGSoN68ho3vObeMt2Jz7qsdXRChkeG0GTavNmjPjlGZaQbEtB9Nu6MtcVobO7t_DX1zAM0sdJwJ8xUXc9mctgNTVlBk9vPnd0J7S4_IBZE4r6JtQrOQNARjvXXmzB1sYtmNk7",
  },
];

export default function FounderGuildSection() {
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin py-space-2xl w-full">
      <div className="bg-surface-white rounded-2xl p-space-lg lg:p-space-2xl shadow-md mb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-surface-container">
              <Image
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                alt="Eleanor Vance, Founder of Ladle & Co."
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WLx2odZ9Ufe35kOXSW8ll_lFs0jKs5ciFyIYlPC9GrPMyzpeK21LGuAspGHoUNoYLsQhIE3lUGzlvXwH70jDBP6HHE6Zd7ANon8lEZoM5ZjqiiHWrFyHA05fsVc-GOsKFxYX03YEO0DbuVxNdatQfKq4KQu5p9K12JkNNGCZ1wQnDNDYUGLlBQ4fZPwF9vM8Yd6m7ETxt5wr0DOk5me_DQeAZUz0yOB4zqZVEufwSZwJEnAZwFr5rkEg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary-container px-4 py-2 rounded-lg shadow-sm hidden sm:block">
              <span className="font-label-md text-label-md text-on-secondary-fixed">
                Eleanor Vance, Founder
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-space-md">
            <span className="font-label-md text-label-md text-terracotta uppercase tracking-wider font-semibold">
              Founder Note
            </span>
            <blockquote className="font-headline-md text-headline-md text-tertiary leading-snug">
              “The kitchen is not a laboratory of cold efficiency. It is the
              sensory heart of human shelter—a sanctuary of steam, fragrance,
              and conversation where memory is seasoned with everyday wood and
              fire.”
            </blockquote>
            <p className="font-body-md text-body-md text-olive-gray leading-relaxed">
              After ten years as an architectural designer, Eleanor sought
              kitchen tools that shared the permanence and grace of mid-century
              furniture. When modern retailers offered only fragile plastics and
              chemical veneers, she moved to Umbria to apprentice with an elder
              woodturner, establishing what would quickly become the foundation
              of Ladle &amp; Co.
            </p>

            <div className="pt-space-xs flex items-center gap-space-lg">
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface block">
                  Cortona &amp; London
                </span>
                <span className="font-label-sm text-label-sm text-sage">
                  Design Studios
                </span>
              </div>
              <div className="w-px h-8 bg-warm-sand" />
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface block">
                  Est. 2021
                </span>
                <span className="font-label-sm text-label-sm text-sage">
                  Independent Brand
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider block mb-space-xs">
              Our Guild
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Master craftspeople across three continents.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-olive-gray max-w-md">
            We do not own remote industrial factories. We collaborate directly
            with sovereign artisan cooperatives, paying 35% above fair-wage
            benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {guilds.map((guild) => (
            <article
              key={guild.name}
              className="bg-surface-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 bg-surface-variant overflow-hidden">
                <Image
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  alt={guild.alt}
                  src={guild.image}
                />
              </div>

              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-terracotta uppercase tracking-wide font-semibold block mb-1">
                    {guild.location}
                  </span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    {guild.name}
                  </h3>
                  <p className="font-body-md text-body-md text-olive-gray mt-2">
                    {guild.description}
                  </p>
                </div>
                <div className="pt-2 text-sage font-label-md text-label-md">
                  {guild.craft}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
