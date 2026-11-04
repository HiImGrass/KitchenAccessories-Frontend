import Image from "next/image";
import { useTranslations } from "next-intl";

const guilds = [
  {
    location: "Umbria, Italy",
    nameKey: "rossiGuild",
    descriptionKey: "rossiGuildDescription",
    craftKey: "turnedHandRasped",
    altKey: "rossiGuildImageAlt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3gb7BBKvGsShtSsTMxTgx9vkJ8mtWld6Qu4onpx1QE2nQx0Omgne9xtfFubosqfqvh974CUb-Ns1mxHAicJl_byiSxnvYR31SUJThqp0dUWmWWiNEzKLWUqs_D6IS_wqZIS5taWb7YV1pZSuLXoXIygUWdTCy_dT84B6yBUvu28qc89iL2sg2kEICEQUqVRMkYCA0jtCuKUm7NcOk2nZfF2eGV7RMsomuGqqO36b8ATuTKi_yUCu4",
  },
  {
    location: "Mino, Japan",
    nameKey: "katoGuild",
    descriptionKey: "katoGuildDescription",
    craftKey: "highFiredClay",
    altKey: "katoGuildImageAlt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSTSnayNQ0q0tXkkAXgiYa-3W6__4FrkcVYesguWV5G1IMXd-hBfeYmf2aLYjRGOjh0v3TjmPkHWlvC89G5hCu4_gAC7gsHNTKgylkEflNDTHbJeHeN6QLXKQ_tTj0xxFxDPAvJ9lbmTkYCp5jfApzZy_DKjkmwGLB9J5nNUGEa_U1VLWBFNooj1L6zI62hz2hxbphyLfZPyHAUVK3h4pIru6dMGd8plTh1ecY4zW49s29LF82c6OV",
  },
  {
    location: "Porto, Portugal",
    nameKey: "ferreiroGuild",
    descriptionKey: "ferreiroGuildDescription",
    craftKey: "coldHammeredBrass",
    altKey: "ferreiroGuildImageAlt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2coLIFzmikqwrt9dsknvRgftwlUtrsMU4h6t9KXoHwRdci7SbkNCCz_FU5-mGEUkS1dYqYLhJw-tF1KuwTvl-i0-AqYLb02hKRLc7T3bII8Wia6dpGSoN68ho3vObeMt2Jz7qsdXRChkeG0GTavNmjPjlGZaQbEtB9Nu6MtcVobO7t_DX1zAM0sdJwJ8xUXc9mctgNTVlBk9vPnd0J7S4_IBZE4r6JtQrOQNARjvXXmzB1sYtmNk7",
  },
];

export default function FounderGuildSection() {
  const t = useTranslations("about");
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin py-space-2xl w-full">
      <div className="bg-surface-white rounded-2xl p-space-lg lg:p-space-2xl shadow-md mb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-surface-container">
              <Image
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                alt={t("founderImageAlt")}
                className="object-cover"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary-container px-4 py-2 rounded-lg shadow-sm hidden sm:block">
              <span className="font-label-md text-label-md text-on-secondary-fixed">
                {t("founderBadge")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-space-md">
            <span className="font-label-md text-label-md text-terracotta uppercase tracking-wider font-semibold">
              {t("founderNote")}
            </span>
            <blockquote className="font-headline-md text-headline-md text-tertiary leading-snug">
              {t("founderQuote")}
            </blockquote>
            <p className="font-body-md text-body-md text-olive-gray leading-relaxed">
              {t("founderDescription")}
            </p>

            <div className="pt-space-xs flex items-center gap-space-lg">
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface block">
                  {t("studioLocations")}
                </span>
                <span className="font-label-sm text-label-sm text-sage">
                  {t("designStudios")}
                </span>
              </div>
              <div className="w-px h-8 bg-warm-sand" />
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface block">
                  {t("established")}
                </span>
                <span className="font-label-sm text-label-sm text-sage">
                  {t("independentBrand")}
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
              {t("ourGuild")}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              {t("guildTitle")}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-olive-gray max-w-md">
            {t("guildDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {guilds.map((guild) => (
            <article
              key={guild.nameKey}
              className="bg-surface-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 bg-surface-variant overflow-hidden">
                <Image
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  alt={t(guild.altKey)}
                  src={guild.image}
                />
              </div>

              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-terracotta uppercase tracking-wide font-semibold block mb-1">
                    {guild.location}
                  </span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    {t(guild.nameKey)}
                  </h3>
                  <p className="font-body-md text-body-md text-olive-gray mt-2">
                    {t(guild.descriptionKey)}
                  </p>
                </div>
                <div className="pt-2 text-sage font-label-md text-label-md">
                  {t(guild.craftKey)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
