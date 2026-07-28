import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web, desktop, and academic projects from my GitHub portfolio.",
  alternates: { canonical: "/projects" },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Projects - ${siteConfig.name}`,
    description: "Explore selected work from github.com/ali-ghiax.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
