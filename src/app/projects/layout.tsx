import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web, desktop, and academic projects from GitHub. Part of the Muhammad Ali Ghias portfolio.",
  keywords: [
    "web development projects",
    "GitHub portfolio",
    "React Next.js projects",
    "ali-ghiax",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects - ${siteConfig.name}`,
    description: "Explore selected work from github.com/ali-ghiax.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
