import Image from "next/image";

export default function AboutHeroGallery() {
  return (
    <section className="max-w-7xl mx-auto px-space-md lg:px-margin pb-space-2xl w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
        <div className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-md bg-surface-variant min-h-[420px] lg:min-h-[520px]">
          <Image
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            alt="Sunlit Tuscan woodworker workshop with olivewood tools"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmp00_3XkighrgTvSSeHi3YY5-bi1chF2Nj0LepQDX3Yw67gyF9mJmMCyqdoFoXShOl4DoRQZfWPUmQHwkvusakdW_DGEret6gZxD3DzFBKcLs3QF-SwKN87dNmywanBvP_qMVhdHiXL8Hcc3O6XPUzNmM6lEY45hRahUxd2KR69rlc1Xj8kvrSYszawohOv6iW80BVa9RFxZvs-nFYI5vcIr7wWBJZZcvSK5WUHh4VL722RKxjY2X"
          />

          <div className="absolute bottom-6 left-6 right-6 p-space-md bg-surface-white/85 backdrop-blur-md rounded-lg max-w-md shadow-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-1">
              The Workshop Table
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every carved groove begins with salvaged Umbrian rootwood, shaped by hand to honor natural
              grain contours rather than mechanical symmetry.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between gap-space-lg">
          <div className="relative rounded-xl overflow-hidden shadow-md bg-surface-variant h-72 lg:h-[260px]">
            <Image
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
              alt="Olive oil poured from an artisan ceramic cruet"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLiU5nQ5gcN7kUnBJZGuMq7C0NFMKphqrkpIju5TpQRhw-V0neZ6InMK07lLje33tAT5gOy7cajjn-tL1tnIj9UNSxqYOo_5IMHEDfy4do-SzeJDTVYBEAa36HRhtjhkWR96BkUElh4-HqVOnZ6RWYntJ-Hr81CEWYt9OeUrXkwmcO4KxTVNHNRuRQlGTN4OB5JloFw00-pBstYTBxofX-l9AK6moRzLKqLqVeKzAB9-BkpS2N8cQj"
            />
          </div>

          <div className="bg-surface-white p-space-lg rounded-xl shadow-sm space-y-space-sm flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-space-xs text-terracotta">
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider">
                Zero Lacquers, Zero Resins
              </span>
            </div>

            <p className="font-headline-sm text-headline-sm text-tertiary">
              Finished purely with wild Apennine beeswax and organic cold-pressed citrus extracts.
            </p>
            <p className="font-body-md text-body-md text-olive-gray">
              Your food only touches clean, unvarnished natural fibers that age deeper and warmer every
              single day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
