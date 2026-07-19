import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects — Muhammad Ali Ghias",
  description:
    "Projects by Muhammad Ali Ghias (Ali Ghias / Ghias) on GitHub — web apps, desktop tools, ML, and academic work.",
  keywords: [
    "Muhammad Ali Ghias projects",
    "Ali Ghias projects",
    "Ghias GitHub",
    "ali-ghiax",
    "muhammad-ali-ghias",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Muhammad Ali Ghias",
    description: "Explore work by Ali Ghias from github.com/ali-ghiax.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
