import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Coursera, Udemy, Credly, and Microsoft Learn certifications and badges.",
  alternates: { canonical: "/certifications" },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Certifications - ${siteConfig.name}`,
    description: "Certifications and Microsoft Learn achievements.",
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
