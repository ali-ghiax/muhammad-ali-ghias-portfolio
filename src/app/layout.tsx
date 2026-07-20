import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/seo";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  category: "portfolio",
  classification: "Personal Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 1200,
        alt: "Muhammad Ali Ghias portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Muhammad Ali Ghias · Ali Ghias · Ghias — Software Engineer & Graphic Designer.",
    images: [siteConfig.ogImage],
    creator: "@ali_ghiax",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "PK-KP",
    "geo.placename": "Peshawar",
    "profile:username": "muhammad-ali-ghias",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="author" href={siteConfig.url} />
        <link rel="me" href={siteConfig.github} />
        <link rel="me" href={siteConfig.linkedin} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="text/plain" href="/sitemap.txt" title="Sitemap" />
        <link rel="alternate" type="text/plain" href="/index.txt" title="URL Index" />
      </head>
      <body
        className="min-h-screen bg-background antialiased font-sans"
        suppressHydrationWarning
      >
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
