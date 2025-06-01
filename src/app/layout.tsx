import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import TradingViewBanner from "@/components/TradingViewBanner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RF Trust",
  description: "RF Trust - Together We Deliver Success",
  icons: {
    icon: '/img/rf-logo-white.png',
    shortcut: '/img/rf-logo-white.png',
    apple: '/img/rf-logo-white.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <TradingViewBanner />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
