import type { Metadata } from "next";
import { Geist, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { Footer } from "@/components/layout/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "L'Artisan | Master the Art of Baking",
  description: "Intensive baking courses from master artisans. Sourdough, pastry, viennoiserie, and more. Join 15,000+ students worldwide.",
  keywords: ["baking courses", "sourdough", "pastry", "artisan bread", "cooking classes"],
  openGraph: {
    title: "L'Artisan Baking Atelier",
    description: "Master the art of baking through traditional techniques and modern precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${geist.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
