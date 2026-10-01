import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Navbar from '@/components/navbar/Navbar';

import "./globals.css";
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
  title: "Ladle & Co.",
  description: "Thoughtful tools for everyday cooking.",
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas-cream font-body-md text-olive-gray antialiased">
        <Header />
        
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