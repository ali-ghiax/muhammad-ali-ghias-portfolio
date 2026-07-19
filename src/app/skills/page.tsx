"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Server, Database, Wrench, Monitor, Boxes } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", label: "Web", icon: Code2 },
  { id: "backend", label: "Development", icon: Server },
  { id: "database", label: "Design", icon: Database },
  { id: "desktop", label: "Soft skills", icon: Monitor },
  { id: "devops", label: "Microsoft", icon: Boxes },
  { id: "tools", label: "Tools", icon: Wrench },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: skills.frontend,
    backend: skills.backend,
    database: skills.database,
    desktop: skills.desktop,
    devops: skills.devops,
    tools: skills.tools,
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Expertise</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
                Skills & <span className="text-gradient">technologies</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A focused mix of modern web engineering, creative design, and collaborative skills
                I use to ship reliable digital products.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all cursor-pointer border",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground border-primary glow-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div key={activeCategory} className="space-y-3">
              {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Card className="p-4 hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, delay: index * 0.05 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-display font-bold mb-6">
                  How I use these <span className="text-gradient">skills</span>
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Web & full-stack delivery",
                      description:
                        "React, Next.js, Tailwind CSS, Node.js, Express, and REST APIs with JWT and modern UI.",
                    },
                    {
                      title: "Creative brand systems",
                      description:
                        "Photoshop, Illustrator, logos, print, and social creatives for clients and campus.",
                    },
                    {
                      title: "Microsoft campus leadership",
                      description:
                        "MLSA workshops, mentoring, GitHub, Microsoft 365, and continuous Microsoft Learn growth.",
                    },
                    {
                      title: "Desktop & ML tooling",
                      description:
                        "Electron, PyQt6, .NET MAUI, and TensorFlow/Keras for practical project work.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category, index) => {
              const categorySkills = skillCategories[category.id as keyof typeof skillCategories];
              const avgLevel = Math.round(
                categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
              );
              return (
                <AnimatedSection key={category.id} delay={index * 0.05}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full p-4 text-center border transition-all cursor-pointer",
                      activeCategory === category.id
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/30"
                    )}
                  >
                    <category.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <h3 className="text-sm font-semibold mb-1">{category.label}</h3>
                    <div className="text-lg font-display font-bold text-gradient">{avgLevel}%</div>
                    <p className="text-xs text-muted-foreground">{categorySkills.length} skills</p>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Let&apos;s <span className="text-gradient">collaborate</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              {personalInfo.stats.yearsExperience}+ years building web experiences, brand systems, and campus tech community.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
