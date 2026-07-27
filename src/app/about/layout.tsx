import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Background, strengths, and education — more about my journey as a software engineer and graphic designer beyond the main portfolio homepage.",
  keywords: [
    "about me",
    "software engineer background",
    "graphic designer journey",
    "CUSIT",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Me - ${siteConfig.name}`,
    description:
      "Learn more about my background, strengths, and education. Visit the homepage for the main portfolio of Muhammad Ali Ghias.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
