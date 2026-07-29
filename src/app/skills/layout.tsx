import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Web, development, design, Microsoft, and soft skills. Part of the Muhammad Ali Ghias portfolio.",
  keywords: [
    "React Node.js TypeScript",
    "Next.js Tailwind CSS",
    "Adobe Photoshop Illustrator",
    "Microsoft technologies",
  ],
  alternates: { canonical: "/skills" },
  openGraph: {
    title: `Skills - ${siteConfig.name}`,
    description: "Technical and creative skills overview.",
    url: `${siteConfig.url}/skills`,
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
