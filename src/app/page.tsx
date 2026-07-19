"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Mail,
  MapPin,
  Rocket,
  Monitor,
  Database,
  Server,
  Boxes,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, projects, skills, services } from "@/data/portfolio";
import { AnimatedSection } from "@/components/layout/animations";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <div className="relative">
      {/* Hero — brand-first, responsive composition */}
      <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Portrait — stacks above text on mobile, right column on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/10 blur-2xl" />
                <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 bg-muted shadow-[0_20px_50px_rgba(15,118,110,0.18)] ring-4 ring-primary/10 sm:h-60 sm:w-60 lg:h-[260px] lg:w-[260px] xl:h-[300px] xl:w-[300px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero-photo.jpg"
                    alt="Muhammad Ali Ghias"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover object-[50%_40%]"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-2 md:mb-3"
              >
                <span className="text-gradient">Muhammad</span>
                <br />
                <span className="text-foreground">Ali Ghias</span>
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="h-1 w-20 sm:w-24 md:w-32 bg-primary mb-3 md:mb-4 origin-center lg:origin-left mx-auto lg:mx-0"
              />

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold text-foreground/90 mb-4 max-w-2xl mx-auto lg:mx-0"
              >
                {personalInfo.role}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {personalInfo.tagline}. Web development, Microsoft technologies, and creative
                design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10 justify-center lg:justify-start"
              >
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="group glow-primary w-full sm:w-auto">
                    View projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Get in touch
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 lg:gap-x-6 text-xs sm:text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-2 shrink-0">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="whitespace-nowrap">{personalInfo.location}</span>
                </span>
                <span className="flex items-center gap-2 shrink-0 min-w-0">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-primary shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow shrink-0" />
                  <span className="whitespace-nowrap">{personalInfo.availability}</span>
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip — below first viewport */}
      <section className="py-10 sm:py-12 border-y border-border/60 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: personalInfo.stats.yearsExperience, label: "Years building" },
            { value: personalInfo.stats.projectsCompleted, label: "Real world projects" },
            { value: personalInfo.stats.systemsShipped, label: "Microsoft badges" },
            { value: personalInfo.stats.technologies, label: "Skills" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                {stat.value}+
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder / company highlight */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-border/70 bg-muted/40 p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">
                    {personalInfo.venture.label}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
                    {personalInfo.venture.title}{" "}
                    <span className="text-blue-600">{personalInfo.venture.brand}</span>
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                    {personalInfo.venture.description}
                  </p>
                  <a
                    href={personalInfo.venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-background shadow-sm hover:bg-background group"
                    >
                      {personalInfo.venture.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                <div className="lg:col-span-5">
                  <a
                    href={personalInfo.venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-border bg-background p-6 sm:p-7 shadow-sm transition-colors hover:border-primary/40"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">
                      {personalInfo.venture.platformLabel}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
                      {personalInfo.venture.platformTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5">
                      {personalInfo.venture.platformTagline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      {personalInfo.venture.platformLinkLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Selected work</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Work that blends <span className="text-gradient">code & craft</span>
              </h2>
              <p className="text-muted-foreground">
                Public work from{" "}
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  github.com/ali-ghiax
                </a>
                .
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <div
                    className="h-full group cursor-pointer border border-border hover:border-primary/40 transition-colors p-6 bg-card/50"
                    style={{ borderTopWidth: 3, borderTopColor: project.color }}
                  >
                    <Badge variant="outline" className="mb-4 text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                All projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Stack</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Built for <span className="text-gradient">impact & clarity</span>
              </h2>
              <p className="text-muted-foreground">
                Web, design, Microsoft technologies, and the soft skills behind collaborative delivery.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Code2, title: "Web", skills: skills.frontend.slice(0, 3).map((s) => s.name) },
              { icon: Server, title: "Development", skills: skills.backend.slice(0, 3).map((s) => s.name) },
              { icon: Database, title: "Design", skills: skills.database.slice(0, 3).map((s) => s.name) },
              { icon: Monitor, title: "Soft skills", skills: skills.desktop.slice(0, 3).map((s) => s.name) },
              { icon: Boxes, title: "Microsoft", skills: skills.devops.slice(0, 3).map((s) => s.name) },
            ].map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.08}>
                <div className="p-5 border border-border bg-card/40 h-full hover:border-primary/35 transition-colors">
                  <category.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-2">{category.title}</h3>
                  <ul className="space-y-1">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-xs text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/skills">
              <Button variant="outline" size="lg" className="group">
                Full skill map
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Services</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                How I can <span className="text-gradient">help</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card className="p-6 h-full hover:border-primary/30 transition-colors">
                  <Rocket className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-primary pt-4 border-t border-border">
                    {service.price}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-mesh opacity-60" />
        <div className="max-w-3xl mx-auto px-6 relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Let&apos;s build the next <span className="text-gradient">idea</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Web apps, brand design, or campus tech workshops — I bring engineering and creative craft together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-primary">
                Start a conversation
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
