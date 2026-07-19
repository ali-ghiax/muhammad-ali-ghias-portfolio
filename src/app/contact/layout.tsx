import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Muhammad Ali Ghias (MAG)",
  description:
    "Contact Muhammad Ali Ghias — Ali Ghias / MAG / Ghias. Junior Software Engineer & Graphic Designer in Peshawar. Open to full-time and freelance work.",
  keywords: [
    "Contact Muhammad Ali Ghias",
    "Contact Ali Ghias",
    "Contact MAG",
    "Ghias contact",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Muhammad Ali Ghias (MAG)",
    description: "Get in touch with Ali Ghias (MAG).",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
