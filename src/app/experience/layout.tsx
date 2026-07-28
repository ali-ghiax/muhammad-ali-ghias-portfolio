import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience across full-stack development, graphic design, MLSA leadership, and freelance work.",
  alternates: { canonical: "/experience" },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Experience - ${siteConfig.name}`,
    description: "Professional journey across engineering and design.",
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
