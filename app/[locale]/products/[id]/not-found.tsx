import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ProductNotFound() {
  const t = await getTranslations("product");
  return (
    <main className="flex min-h-[calc(100vh-20rem)] w-full items-center justify-center bg-canvas-cream px-4 pt-20 pb-20">
      <section className="max-w-md rounded-2xl bg-surface-container-lowest p-8 text-center shadow-sm">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terracotta">
          404
        </p>
        <h1 className="text-2xl font-bold text-tertiary">        {t("notFoundTitle")}</h1>
        <p className="mt-3 text-olive-gray">
          {t("notFoundDescription")}
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-terracotta px-5 py-3 font-semibold text-on-primary transition-colors hover:bg-tertiary"
        >
          {t("browseCatalog")}
        </Link>
      </section>
    </main>
  );
}
