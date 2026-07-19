import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Skills — Muhammad Ali Ghias (MAG)",
  description:
    "Skills of Muhammad Ali Ghias (Ali Ghias / MAG / Ghias): React, Node.js, Tailwind CSS, TypeScript, Next.js, Adobe design tools, and Microsoft technologies.",
  keywords: [
    "Muhammad Ali Ghias skills",
    "Ali Ghias skills",
    "MAG skills",
    "Ghias React Node.js",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills — Muhammad Ali Ghias (MAG)",
    description: "Technical and creative skills of Ali Ghias (MAG).",
    url: `${siteConfig.url}/skills`,
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
