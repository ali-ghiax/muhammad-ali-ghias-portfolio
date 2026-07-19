import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Muhammad Ali Ghias (MAG)",
  description:
    "Articles and notes by Muhammad Ali Ghias (Ali Ghias / MAG / Ghias) on engineering, design, and campus tech community.",
  keywords: [
    "Muhammad Ali Ghias blog",
    "Ali Ghias blog",
    "MAG blog",
    "Ghias writing",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Muhammad Ali Ghias (MAG)",
    description: "Writing from Ali Ghias (MAG).",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
