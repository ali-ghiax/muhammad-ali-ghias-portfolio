import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Experience — Muhammad Ali Ghias",
  description:
    "Professional experience of Muhammad Ali Ghias (Ali Ghias / Ghias): full-stack development, graphic design, MLSA leadership, and freelance work.",
  keywords: [
    "Muhammad Ali Ghias experience",
    "Ali Ghias experience",
    "Ghias career",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Muhammad Ali Ghias",
    description: "Professional journey of Ali Ghias across engineering and design.",
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
