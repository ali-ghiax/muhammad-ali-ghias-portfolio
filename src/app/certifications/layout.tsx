import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { microsoftAchievementStats } from "@/data/microsoft-achievements";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    `Certifications of Muhammad Ali Ghias — IBM DevOps Professional Certificate, Coursera courses, Udemy, Credly, and ${microsoftAchievementStats.badges} Microsoft Learn badges.`,
  keywords: [
    "Muhammad Ali Ghias certifications",
    "Ali Ghias certificates",
    "IBM DevOps Professional Certificate",
    "Microsoft Learn badges",
    "Microsoft Learn trophies",
    "Udemy certificates",
    "Microsoft Learn Student Ambassador",
    "muhammadalighias",
  ],
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: `Certifications - ${siteConfig.name}`,
    description:
      "Coursera, Udemy, and Microsoft Learn certifications earned by Muhammad Ali Ghias.",
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
