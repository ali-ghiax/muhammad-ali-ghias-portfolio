import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Ali Ghias (Ali Ghias / Ghias) is a Software Engineer, Graphic Designer, and Lead Microsoft Learn Student Ambassador at CUSIT in Peshawar. Founder of Cyber Tools; MLSA Beta and ANS 24 logo design winner.",
  keywords: [
    "About Muhammad Ali Ghias",
    "Ali Ghias",
    "Ghias",
    "MLSA CUSIT",
    "Cyber Tools founder",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About - ${siteConfig.name}`,
    description:
      "Muhammad Ali Ghias — Software Engineer, Graphic Designer, MLSA Campus Lead at CUSIT, and founder of Cyber Tools.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
