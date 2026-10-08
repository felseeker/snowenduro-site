import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Snowfall } from "@/components/Snowfall";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic-ext"], variable: "--font-manrope", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin", "cyrillic-ext"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "SnowEnduro — снегоходы под заказ и Snowbike-комплекты",
    template: "%s — SnowEnduro",
  },
  description: site.description,
  applicationName: site.name,
  verification: { yandex: "4be95efe440228cf" },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `https://${site.domain}`,
    siteName: site.name,
    title: "SnowEnduro — зимняя техника под ваш маршрут",
    description: site.description,
    images: [{ url: "/media/snowbike-ai-hero.jpg", width: 1672, height: 936, alt: "Snowbike на зимнем маршруте" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowEnduro — зимняя техника под ваш маршрут",
    description: site.description,
    images: ["/media/snowbike-ai-hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#06101B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${hanken.variable}`} data-scroll-behavior="smooth">
      <body>
        <Snowfall />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
