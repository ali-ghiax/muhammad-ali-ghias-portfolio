import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Ali Ghias — Ali Ghias / Ghias. Software Engineer, Graphic Designer, and MLSA Lead at CUSIT in Peshawar, Pakistan.",
  keywords: [
    "About Muhammad Ali Ghias",
    "Ali Ghias",
    "Ghias",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About - ${siteConfig.name}`,
    description:
      "Learn about Ali Ghias — engineer, designer, and Microsoft Learn Student Ambassador.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
