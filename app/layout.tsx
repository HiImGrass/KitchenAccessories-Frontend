import type { Metadata } from 'next';
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${epilogue.variable} ${plusJakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-canvas-cream font-body-md text-olive-gray antialiased">
        <NextTopLoader color="#894b3a" shadow="0 0 10px #894b3a,0 0 5px #894b3a" />
        <Navbar />
        <main className="min-h-[calc(100vh-20rem)] pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}