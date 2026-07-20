"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import {
  certificateSections,
  getCertificatesByCategory,
  type Certificate,
} from "@/data/certificates";
import {
  microsoftAchievementStats,
  microsoftBadges,
  microsoftTrophies,
} from "@/data/microsoft-achievements";
import { AnimatedSection } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

type Tab = "badges" | "trophies";

function CertificateCard({
  course,
  index,
  featured = false,
}: {
  course: Certificate;
  index: number;
  featured?: boolean;
}) {
  return (
    <AnimatedSection key={course.id} delay={index * 0.04}>
      <article
        className={cn(
          "group h-full overflow-hidden border border-border bg-card/50 hover:border-primary/35 transition-colors flex flex-col",
          featured && "md:flex-row md:col-span-2"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-muted border-b border-border",
            featured ? "md:w-2/5 md:border-b-0 md:border-r aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={course.image}
            alt={`${course.title} certificate`}
            className="h-full w-full object-contain object-center bg-white p-3 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className={cn("font-display font-semibold", featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl")}>
              {course.title}
            </h3>
            {course.kind === "professional" && (
              <Badge className="text-xs">Professional Certificate</Badge>
            )}
            <Badge variant="outline" className="text-xs">
              {course.period}
            </Badge>
          </div>
          <p className="text-sm text-primary mb-2">{course.institution}</p>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            View certificate
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    </AnimatedSection>
  );
}

export default function CertificationsPage() {
  const [tab, setTab] = useState<Tab>("badges");

  const ibmDevOpsCount = getCertificatesByCategory("ibm-devops").length;
  const graphicDesignCount = getCertificatesByCategory("graphic-design").length;
  const courseraCount = getCertificatesByCategory("coursera").length;

  const items = useMemo(
    () => (tab === "badges" ? microsoftBadges : microsoftTrophies),
    [tab]
  );

  const goToSection = (sectionId: string, nextTab?: Tab) => {
    if (nextTab) setTab(nextTab);
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-14 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Credentials</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
                Certifications & <span className="text-gradient">learning</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Browse verified certificates and learning achievements by category. Each credential
                includes a shareable verification link.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <button
                  type="button"
                  onClick={() => goToSection("ibm-devops")}
                  className="inline-flex items-center gap-2 border border-border bg-card/50 px-3 py-1.5 cursor-pointer transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="font-display font-bold text-foreground">{ibmDevOpsCount}</span>
                  IBM DevOps
                </button>
                <button
                  type="button"
                  onClick={() => goToSection("graphic-design")}
                  className="inline-flex items-center gap-2 border border-border bg-card/50 px-3 py-1.5 cursor-pointer transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="font-display font-bold text-foreground">{graphicDesignCount}</span>
                  Graphic Design
                </button>
                <button
                  type="button"
                  onClick={() => goToSection("coursera")}
                  className="inline-flex items-center gap-2 border border-border bg-card/50 px-3 py-1.5 cursor-pointer transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="font-display font-bold text-foreground">{courseraCount}</span>
                  Coursera
                </button>
                <button
                  type="button"
                  onClick={() => goToSection("microsoft-achievements", "badges")}
                  className="inline-flex items-center gap-2 border border-border bg-card/50 px-3 py-1.5 cursor-pointer transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="font-display font-bold text-foreground">
                    {microsoftAchievementStats.badges}
                  </span>
                  Microsoft Badges
                </button>
                <button
                  type="button"
                  onClick={() => goToSection("microsoft-achievements", "trophies")}
                  className="inline-flex items-center gap-2 border border-border bg-card/50 px-3 py-1.5 cursor-pointer transition-colors hover:border-primary/40 hover:bg-card"
                >
                  <span className="font-display font-bold text-foreground">
                    {microsoftAchievementStats.trophies}
                  </span>
                  Microsoft Trophies
                </button>
              </div>
            </div>
          </AnimatedSection>

          <div id="featured-certificates" className="scroll-mt-28 space-y-20">
            {certificateSections.map((section) => {
              const sectionCerts = getCertificatesByCategory(section.id);
              if (sectionCerts.length === 0) return null;

              const professionalCert = sectionCerts.find((cert) => cert.kind === "professional");
              const otherCerts = sectionCerts.filter((cert) => cert.kind !== "professional");

              return (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <AnimatedSection>
                    <div className="mb-8">
                      <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">{section.subtitle}</p>
                    </div>
                  </AnimatedSection>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {professionalCert && (
                      <CertificateCard course={professionalCert} index={0} featured />
                    )}
                    {otherCerts.map((course, index) => (
                      <CertificateCard key={course.id} course={course} index={index + 1} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div id="microsoft-achievements" className="scroll-mt-28 mt-20">
            <AnimatedSection>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    Microsoft Learn <span className="text-gradient">achievements</span>
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    All badges and trophies from your Microsoft Learn profile.
                  </p>
                </div>
                <div className="flex gap-2">
                  {(
                    [
                      {
                        id: "badges",
                        label: `Microsoft Badges (${microsoftAchievementStats.badges})`,
                      },
                      {
                        id: "trophies",
                        label: `Microsoft Trophies (${microsoftAchievementStats.trophies})`,
                      },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTab(option.id)}
                      className={cn(
                        "px-4 py-2 text-sm font-medium border transition-colors cursor-pointer",
                        tab === option.id
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {items.map((item, index) => (
                <AnimatedSection key={item.id} delay={Math.min(index * 0.015, 0.4)}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full border border-border bg-card/50 p-3 sm:p-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="aspect-square mb-3 flex items-center justify-center bg-white/80 dark:bg-white/95 rounded-sm overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-[72%] w-[72%] object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1.5">{item.grantedOn}</p>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href={microsoftAchievementStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                Open Microsoft Learn profile
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Want to <span className="text-gradient">collaborate</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Web development, graphic design, or campus tech workshops — let&apos;s talk.
              Based in {personalInfo.location}.
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-primary group">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
