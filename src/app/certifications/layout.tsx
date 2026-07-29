import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { microsoftAchievementStats } from "@/data/microsoft-achievements";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    `Coursera, Udemy, Credly, IBM DevOps, and ${microsoftAchievementStats.badges} Microsoft Learn badges. Part of the Muhammad Ali Ghias portfolio.`,
  keywords: [
    "IBM DevOps Professional Certificate",
    "Microsoft Learn badges",
    "Coursera certificates",
    "Udemy certificates",
  ],
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: `Certifications - ${siteConfig.name}`,
    description: "Coursera, Udemy, and Microsoft Learn certifications.",
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
