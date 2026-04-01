import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brand = localFont({
  src: "./fonts/RaflesiaRegular.ttf",
  variable: "--font-brand",
});

const sans = localFont({
  src: [
    {
      path: "./fonts/CocoGothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CocoGothic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
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
