import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khushi Trading Co. | Premium Tiles & Interior Solutions",
  description:
    "Khushi Trading Co. offers premium designer tiles, imported tiles, LED mirrors, wash basins and complete interior solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white">
        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}