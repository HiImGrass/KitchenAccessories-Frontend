import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ladle & Co.",
  description: "Thoughtful tools for everyday cooking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-canvas-cream font-body-md text-olive-gray antialiased">
        <Header />

        <main className="w-full pt-20 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}