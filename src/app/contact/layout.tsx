import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Muhammad Ali Ghias",
  description:
    "Contact Muhammad Ali Ghias — Ali Ghias / Ghias. Software Engineer & Graphic Designer in Peshawar. Open to full-time and freelance work.",
  keywords: [
    "Contact Muhammad Ali Ghias",
    "Contact Ali Ghias",
    "Ghias contact",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Muhammad Ali Ghias",
    description: "Get in touch with Ali Ghias.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
