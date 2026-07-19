import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Muhammad Ali Ghias (MAG)",
  description:
    "About Muhammad Ali Ghias — Ali Ghias / MAG / Ghias. Junior Software Engineer, Graphic Designer, and MLSA Lead at CUSIT in Peshawar, Pakistan.",
  keywords: [
    "About Muhammad Ali Ghias",
    "Ali Ghias",
    "MAG",
    "Ghias",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Muhammad Ali Ghias (MAG)",
    description:
      "Learn about Ali Ghias (MAG) — engineer, designer, and Microsoft Learn Student Ambassador.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
