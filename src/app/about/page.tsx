"use client";

import Link from "next/link";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, education } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";

const strengths = [
  {
    title: "Full-stack web",
    description:
      "Responsive apps with modern frontend/backend practices and deployment support",
  },
  {
    title: "Graphic design",
    description:
      "Logos, posters, brochures, and social creatives with a 5-star freelance track record",
  },
  {
    title: "Brand systems",
    description:
      "Consistent visual identity across campus, client, and social platforms",
  },
  {
    title: "Microsoft tech",
    description:
      "MLSA leadership with workshops on Microsoft technologies, GitHub, and Microsoft 365",
  },
  {
    title: "Campus community",
    description:
      "Mentoring students and growing engagement in tech activities at CUSIT",
  },
  {
    title: "Client collaboration",
    description:
      "Translating briefs into polished digital and creative deliverables on deadline",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero — profile card + about copy (matches mustafaportfolio about layout) */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            <StaggerItem className="lg:col-span-5">
              <div className="border border-border bg-card/50 p-5 sm:p-6 md:p-8 text-left max-w-md mx-auto lg:max-w-none">
                <div className="relative mx-auto mb-6 h-52 w-52 sm:h-60 sm:w-60 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 bg-muted shadow-lg ring-4 ring-primary/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/about-photo.jpg"
                    alt="Muhammad Ali Ghias — Software Engineer, Graphic Designer, and MLSA Campus Lead at CUSIT"
                    width={240}
                    height={240}
                    className="h-full w-full object-cover object-[50%_40%]"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>

                <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">
                  About me
                </h1>
                <p className="text-lg font-display font-semibold text-foreground mb-1">
                  {personalInfo.name}
                </p>
                <p className="text-muted-foreground mb-2">{personalInfo.role}</p>
                <p className="text-sm text-primary font-medium mb-4">
                  Lead MLSA CUSIT
                </p>

                <div className="flex items-center justify-start gap-2 text-sm text-muted-foreground mb-8">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {personalInfo.location}
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-border pt-6 text-left">
                  <div>
                    <div className="text-2xl font-display font-bold text-primary">
                      {personalInfo.stats.yearsExperience}+
                    </div>
                    <div className="text-xs text-muted-foreground">Years experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-secondary">
                      {personalInfo.stats.projectsCompleted}+
                    </div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground text-left">
                  Languages: {personalInfo.languages.join(" · ")}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">About</p>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Building digital work that{" "}
                  <span className="text-gradient">people notice</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="rounded-xl border border-border/80 bg-muted/20 p-4 sm:p-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                  Quick facts
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    Lead Microsoft Learn Student Ambassador (MLSA) and Campus Lead at CUSIT,
                    Peshawar
                  </li>
                  <li>
                    Microsoft Learn Student Ambassador – Beta (Microsoft, Feb 2025)
                  </li>
                  <li>
                    1st position in Logo Designing at ANS 24 across KPK (Abasyn University, Dec
                    2024)
                  </li>
                  <li>
                    President Recognition Award for MLSA CUSIT leadership (SLC, CUSIT, Jun 2026)
                  </li>
                  <li>Founder of Cyber Tools — free online utilities for students and professionals</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Currently leading MLSA efforts at CUSIT while shipping full-stack web work and
                freelance graphic design. Experienced across client brands, campus societies, and
                5-star rated creative projects on Fiverr and Upwork.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/Muhammad_Ali_Ghias_Resume.pdf" download>
                  <Button className="glow-primary">Download CV</Button>
                </a>
                <Link href="/experience">
                  <Button variant="outline" className="border-foreground/20">
                    View experience
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-foreground/20">
                    Get in touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="border-foreground/20">
                    See projects
                  </Button>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-display font-bold mb-3">
                Core <span className="text-gradient">strengths</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strengths.map((strength, index) => (
              <AnimatedSection key={strength.title} delay={index * 0.08}>
                <div className="p-5 border border-border bg-card/40 h-full hover:border-primary/30 transition-colors">
                  <Award className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-10">
              <span className="text-gradient">Education</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.id} delay={index * 0.08}>
                <Card className="flex items-start gap-4 p-5 rounded-xl">
                  <div className="w-11 h-11 bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span>{edu.year}</span>
                      <Badge variant="outline">{edu.focus}</Badge>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to <span className="text-gradient">collaborate</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how I can help with web development, design, or campus tech
              collaboration.
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-primary">
                Get in touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
