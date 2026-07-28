import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about full-time, freelance, or collaboration opportunities.",
  alternates: { canonical: "/contact" },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Contact - ${siteConfig.name}`,
    description: "Contact form and social links.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
