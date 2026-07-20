import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Certifications — Muhammad Ali Ghias",
  description:
    "Certifications of Muhammad Ali Ghias from Coursera, Udemy, Credly, and Microsoft Learn — including design projects, programming courses, and 189 Microsoft Learn badges.",
  keywords: [
    "Muhammad Ali Ghias certifications",
    "Ali Ghias certificates",
    "Coursera certificates",
    "Microsoft Learn badges",
    "Microsoft Learn trophies",
    "Udemy certificates",
    "Microsoft Learn Student Ambassador",
    "muhammadalighias",
  ],
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications — Muhammad Ali Ghias",
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
