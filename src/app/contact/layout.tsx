import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about full-time, freelance, or collaboration opportunities. Part of the Muhammad Ali Ghias portfolio.",
  keywords: [
    "hire software engineer",
    "freelance graphic designer",
    "Peshawar developer contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact - ${siteConfig.name}`,
    description: "Contact form and social links.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
