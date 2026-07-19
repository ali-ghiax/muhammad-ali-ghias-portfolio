"use client";

import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { personalInfo } from "@/data/portfolio";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from "@/components/icons/social";

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
  {
    icon: InstagramIcon,
    href: personalInfo.social.instagram,
    label: "Instagram",
  },
  {
    icon: GitHubIcon,
    href: personalInfo.social.github,
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: personalInfo.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: TikTokIcon,
    href: personalInfo.social.tiktok,
    label: "TikTok",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <NextLink
              href="/"
              className="inline-flex items-center mb-4"
              aria-label="MAG — Muhammad Ali Ghias home"
            >
              <Image
                src="/logo-mag.png"
                alt="MAG — Muhammad Ali Ghias, Software Engineer"
                width={478}
                height={198}
                className="h-14 w-auto"
              />
            </NextLink>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Where code meets craft — building thoughtful digital experiences and visual identities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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
              <li className="break-all">{personalInfo.email}</li>
              <li>
                <span className="text-green-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                  {personalInfo.availability}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name} (MAG). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <NextLink href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </NextLink>
            <NextLink href="/terms" className="hover:text-primary transition-colors">
              Terms
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
