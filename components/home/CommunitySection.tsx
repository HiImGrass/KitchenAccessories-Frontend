import Link from "next/link";
import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="w-full py-space-2xl">
      <div className="max-w-7xl mx-auto px-space-md lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl space-y-space-xs">
          <span className="font-label-md text-label-md uppercase tracking-wider text-terracotta font-semibold">
            Real Kitchens
          </span>
          <h2 className="font-headline-lg text-headline-lg text-tertiary">
            Tested by Home Chefs &amp; Bakers
          </h2>
          <p className="font-body-md text-body-md text-olive-gray">
            Honest reflections from everyday rituals across thousands of dinner
            tables.
          </p>
        </div>
        {/* FROM KITCHEN TO TABLE COMMUNITY PHOTO STREAM */}
        <div className="mt-space-2xl pt-space-xl">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <h3 className="font-title-lg text-title-lg text-tertiary">
                #LadleAndHome
              </h3>
              <p className="font-label-md text-label-md text-olive-gray">
                Tag us on Instagram to be featured in our seasonal lookbook
              </p>
            </div>
            <Link
              className="font-title-md text-title-md text-terracotta hover:underline inline-flex items-center gap-1"
              href="/about">
              <span>Follow @ladleandco</span>
              <span className="material-symbols-outlined text-base">
                photo_camera
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            <div className="relative group rounded-xl overflow-hidden aspect-square shadow-sm bg-surface-white">
              <Image
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Warm aesthetic shot of homemade pasta tossed with fresh tomato sauce in a low ceramic bowl using a hand-carved olive wood pasta fork."
                alt="Homemade pasta in a ceramic bowl with an olive wood pasta fork"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFJSQRgpxuxC0ZQYhJbIfg8ewVrgGmz2Qn5Cl3O64LaCLfqinvjFv6c2l-5lFV7EjyPEoehQpdG9M6hGVRxbpCdaEFyA0RWm2WZ_bS3Qs_wd2RfT9mfuKozmGVJwaEynaZNP8IYT_XL5EmH0OveVgULkikI23eRvCiHgJhN7f1zTWXv8h-LFSW0aDgnVyCGlvcqUykqwVMai75zOUNATUcAbpjwWJOzZhMcswvjHXoNtwiAvqHFv45"
              />
              <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface-white">
                <span className="font-label-md text-label-md">
                  @camilla_cooks
                </span>
              </div>
            </div>
            <div className="relative group rounded-xl overflow-hidden aspect-square shadow-sm bg-surface-white">
              <Image
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Morning breakfast preparation on natural pine table with Ladle &amp; Co ceramic coffee pour-over dripper and folded linen tea towel."
                alt="Breakfast preparation with a ceramic coffee pour-over dripper"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSftDwftL13eZEjcktqR0iRwScVO8viAKXeS6VBrpkckSab6qLfrwlQ5iIruVv_6f6CNK7eLPW2Rqo2xbtu__OkSOwna-yatAvyQ78u1crvgA4ZxYjW93G3S4EU9FtiszmfxV7yh_EcIzAb3I900SK8-D8aXCUabhm1C7e2snB9_3boNo3QtLrqhQlB5oKVPndYZdlvHHqmgM2t4l9mXxKR6DbmqJ6uSnpistFwe_OrsStJ7l19H7d"
              />
              <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface-white">
                <span className="font-label-md text-label-md">@dailyloaf_</span>
              </div>
            </div>
            <div className="relative group rounded-xl overflow-hidden aspect-square shadow-sm bg-surface-white">
              <Image
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Baker dusting artisanal sourdough loaf with organic rye flour from a fine stainless steel mesh sifter onto baking stone."
                alt="Baker dusting flour over an artisanal sourdough loaf"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMLfFreLQiKGZMZsRijkC8WUKFlp7b-pJzmH4J5sUByNwYeNuPrXZfWw-2wV8fcV3pAZtgUM0Ih02QgWiDolYq6zmnUsaXesy9vBRKhBi-kBehqM2H1itoLbu9adI2fx0b8PkNhx-sbL2sowgHc1Uzo5UpvA6kmLzrxg19SyqkUFK4jA6Z2hWzah1Gsl7-LIMoqV2aftX4F3gvsWsTrqKm-I2UHNAe9hZKK8yjAAY1ztPhFy1EX7Vg"
              />
              <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface-white">
                <span className="font-label-md text-label-md">
                  @theflourbench
                </span>
              </div>
            </div>
            <div className="relative group rounded-xl overflow-hidden aspect-square shadow-sm bg-surface-white">
              <Image
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Gathered friends around a rustic candlelit dinner table with brass serving utensils, linen runners, and ceramic serving dishes."
                alt="Friends gathered around a candlelit dinner table"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtKfefKq7-zEKL-1t2BBpQ1ZLZMMTg0PDJfdayPfK1djZAVJsdPs30OPOKU73TbKkgGXfhilsyb3P2m35ZrrEuNoewIB6tAwA6O-Unp0IgTW0j3rIBPQKrF0MNvDOoaFJv7ZrVvwCa3XTLeOG98jnhln1GGgCFHjEemka4KYEl2vTWIUs8qr_PKrvLR9lQEaYb4gHR2gm6Cm1ADW7Phcci4pGqVwM3eNKZAbNWKM-7v8uG1rC00-hm"
              />
              <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-surface-white">
                <span className="font-label-md text-label-md">
                  @gatherandtaste
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
