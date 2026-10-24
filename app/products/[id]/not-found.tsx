import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-[calc(100vh-20rem)] w-full items-center justify-center bg-canvas-cream px-4 pt-20 pb-20">
      <section className="max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terracotta">
          404
        </p>
        <h1 className="text-2xl font-bold text-tertiary">Product not found</h1>
        <p className="mt-3 text-olive-gray">
          This product may have been removed or is no longer available.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-terracotta px-5 py-3 font-semibold text-white transition-colors hover:bg-tertiary"
        >
          Browse the catalog
        </Link>
      </section>
    </main>
  );
}
