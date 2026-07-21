import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Honors & Awards",
  description:
    "Honors and awards of Muhammad Ali Ghias (Ali Ghias / Ghias): President Recognition Award, Northern University guest speaker, Microsoft Learn Student Ambassador Beta, and ANS 24 Logo Designing winner.",
  keywords: [
    "Muhammad Ali Ghias honors",
    "Ali Ghias awards",
    "MLSA Beta recognition",
    "ANS 24 logo design winner",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/honors" },
  openGraph: {
    title: `Honors & Awards - ${siteConfig.name}`,
    description: "Recognition for leadership, design excellence, and Microsoft Learn achievements.",
    url: `${siteConfig.url}/honors`,
  },
};

export default function HonorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
