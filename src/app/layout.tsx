import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deco Touch | تحف وهدايا راقية",
  description: "كتالوج رقمي ومعرض لأجمل التحف والهدايا المصنوعة بعناية",
  icons: {
    icon: "/decotouch-logo.png",
    shortcut: "/decotouch-logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 antialiased selection:bg-amber-200 selection:text-stone-900" suppressHydrationWarning>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}