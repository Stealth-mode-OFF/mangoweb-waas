import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "manGoweb — Weby, co prodávají",
  description: "Pomáháme úspěšným firmám růst díky webům na míru. React, TypeScript, vlastní CMS Contember. 15+ let zkušeností, Lighthouse 95+.",
  openGraph: {
    title: "manGoweb — Weby, co prodávají",
    description: "Pomáháme úspěšným firmám růst díky webům na míru.",
    url: "https://waas.mangoweb.cz",
    siteName: "manGoweb",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#FAFAF9] text-[#1A1A1A]">{children}</body>
    </html>
  );
}
