import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Background & education | Portfolio",
  },
  description:
    "Extra background, strengths, and education details. The main Muhammad Ali Ghias portfolio is on the homepage.",
  keywords: [
    "portfolio background",
    "education CUSIT",
    "software engineer strengths",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Background & education | Portfolio",
    description:
      "Secondary about page. Visit the homepage for the official Muhammad Ali Ghias portfolio.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
