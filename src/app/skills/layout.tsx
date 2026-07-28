import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Web, development, design, Microsoft, and soft skills from my portfolio.",
  alternates: { canonical: "/skills" },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Skills - ${siteConfig.name}`,
    description: "Technical and creative skills overview.",
    url: `${siteConfig.url}/skills`,
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
