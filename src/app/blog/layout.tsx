import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Original notes by Muhammad Ali Ghias plus a daily curated feed of top-ranked DEV.to articles on React, Next.js, TypeScript, webdev, design, and Microsoft tech.",
  keywords: [
    "Muhammad Ali Ghias blog",
    "Ali Ghias blog",
    "full stack software engineer",
    "React Next.js TypeScript",
    "graphic design",
    "MLSA CUSIT",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog - ${siteConfig.name}`,
    description:
      "Original writing plus daily auto-updated ranked industry reads from DEV.to.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
