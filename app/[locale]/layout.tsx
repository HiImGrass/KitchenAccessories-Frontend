import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { AppLayoutWrapper } from "@/components/layout/AppLayoutWrapper";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getScopedMessages } from "@/lib/intlMessages";

import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

import "@/app/globals.css";

// Khai báo font theo Design System dự án Ladle & Co.
const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// Metadata gọn nhẹ vừa đủ để demo môn học
export const metadata: Metadata = {
  title: "Ladle & Co. | Modern Kitchen Accessories",
  description: "Thoughtful tools for everyday cooking and culinary spaces.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getScopedMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${epilogue.variable} ${plusJakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-canvas-cream font-body-md text-olive-gray antialiased">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`(function () {
            try {
              var savedTheme = localStorage.getItem('ladle-theme');
              var theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
            } catch (_) {
              document.documentElement.dataset.theme = 'light';
            }
          })();`}
        </Script>
        <NextTopLoader
          color="var(--color-primary)"
          shadow="0 0 10px var(--color-primary), 0 0 5px var(--color-primary)"
        />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <AppLayoutWrapper>{children}</AppLayoutWrapper>
            <Toaster />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
