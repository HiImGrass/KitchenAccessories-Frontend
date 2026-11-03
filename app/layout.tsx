import type { Metadata } from 'next';
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from '@/components/providers/Providers';

import { AppLayoutWrapper } from '@/components/layout/AppLayoutWrapper';

// Khai báo font theo Design System dự án Ladle & Co.
const epilogue = Epilogue({ 
  subsets: ['latin'],
  variable: '--font-epilogue' 
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta' 
});

// Metadata gọn nhẹ vừa đủ để demo môn học
export const metadata: Metadata = {
  title: 'Ladle & Co. | Modern Kitchen Accessories',
  description: 'Thoughtful tools for everyday cooking and culinary spaces.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning className={`${epilogue.variable} ${plusJakarta.variable}`}>
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
        <NextTopLoader color="var(--color-primary)" shadow="0 0 10px var(--color-primary), 0 0 5px var(--color-primary)" />
        <Providers>
          <AppLayoutWrapper>{children}</AppLayoutWrapper>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
