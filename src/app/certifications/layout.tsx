import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Certifications — Muhammad Ali Ghias",
  description:
    "Certifications of Muhammad Ali Ghias — Udemy certificates plus 189 Microsoft Learn badges and 39 trophies from Microsoft Learn.",
  keywords: [
    "Muhammad Ali Ghias certifications",
    "Ali Ghias certificates",
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
      "Udemy certificates and 189 Microsoft Learn badges earned by Muhammad Ali Ghias.",
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
