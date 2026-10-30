import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found | Ladle & Co.",
  description: "The requested page is unavailable.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas-cream font-sans text-on-surface">
        <main className="grid min-h-screen place-items-center px-6 py-16 text-center">
          <section className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-terracotta">
              Error 404
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-base leading-7 text-olive-gray">
              The page you requested does not exist or may have moved.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-container"
            >
              Return home
            </Link>
          </section>
        </main>
      </body>
    </html>
  );
}
