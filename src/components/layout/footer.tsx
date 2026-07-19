"use client";

import * as React from "react";
import NextLink from "next/link";
import { GitBranch, Globe, Cloud, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  ...(personalInfo.social.website
    ? [{ icon: Globe, href: personalInfo.social.website, label: "Website" }]
    : []),
  ...(personalInfo.social.github
    ? [{ icon: GitBranch, href: personalInfo.social.github, label: "GitHub" }]
    : []),
  { icon: Globe, href: personalInfo.social.linkedin, label: "LinkedIn" },
  ...(personalInfo.social.twitter
    ? [{ icon: Cloud, href: personalInfo.social.twitter, label: "Twitter" }]
    : []),
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <NextLink href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">A</span>
              </div>
              <span className="text-lg font-display font-bold tracking-tight">
                Muhammad <span className="text-primary">Ali Ghias</span>
              </span>
            </NextLink>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {personalInfo.role}. Web development, Microsoft technologies, and creative design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
</NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>{personalInfo.location}</li>
              <li>{personalInfo.email}</li>
              <li>
                <span className="text-green-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {personalInfo.availability}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {personalInfo.name} (MAG). All rights reserved.
            </p>
            <p className="mt-1 text-xs">
              Also known as Ali Ghias · Ghias · muhammad-ali-ghias ·{" "}
              <a
                href="https://muhammadalighias.me"
                className="hover:text-primary transition-colors"
              >
                muhammadalighias.me
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}