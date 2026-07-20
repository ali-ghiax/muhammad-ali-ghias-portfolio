import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Certifications — Muhammad Ali Ghias",
  description:
    "Certifications of Muhammad Ali Ghias from Udemy, Microsoft Learn, and Microsoft Learn Student Ambassadors — including HTML, CSS, JavaScript, C++, AI, and MLSA credentials.",
  keywords: [
    "Muhammad Ali Ghias certifications",
    "Ali Ghias certificates",
    "Microsoft Learn badges",
    "Udemy certificates",
    "Microsoft Learn Student Ambassador",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications — Muhammad Ali Ghias",
    description: "Udemy, Microsoft Learn, and MLSA certifications earned by Ali Ghias.",
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
