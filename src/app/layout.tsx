import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RF Trust",
  description: "RF Trust - Together We Deliver Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/rf-logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
