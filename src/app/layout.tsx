import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const brand = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LISS | Live de relançamento em 16 de abril de 2026",
  description:
    "A nova fase da antiga Madagi Pratas Atacado será revelada ao vivo. Participe da estreia da LISS, concorra a 10 Starter Kits e desbloqueie um cupom de 20% OFF durante a live.",
  icons: {
    icon: "/icon.png",
    apple: "/brand/apple-touch-icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${brand.variable} ${sans.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
