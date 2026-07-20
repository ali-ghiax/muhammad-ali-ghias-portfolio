import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Certifications — Muhammad Ali Ghias",
  description:
    "Certifications of Muhammad Ali Ghias — Graphic Design Specialization, Adobe Photoshop & Illustrator, and 160+ Microsoft Learn badges.",
  keywords: [
    "Muhammad Ali Ghias certifications",
    "Ali Ghias certificates",
    "Microsoft Learn badges",
    "Graphic Design Coursera",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications — Muhammad Ali Ghias",
    description: "Design certifications and Microsoft Learn badges earned by Ali Ghias.",
    url: `${siteConfig.url}/certifications`,
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
