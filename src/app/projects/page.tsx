"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, personalInfo } from "@/data/portfolio";
import { AnimatedSection } from "@/components/layout/animations";

const categories = ["All", "Full-stack", "Web", "Desktop", "ML", "Academic"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">
                Featured <span className="text-gradient">projects</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                All public repositories from{" "}
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

          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-all border ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <article
                    className="group relative h-full border border-border bg-card/40 hover:border-primary/40 transition-colors overflow-hidden"
                    style={{ borderLeftWidth: 4, borderLeftColor: project.color }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="absolute inset-0 z-0"
                      aria-label={`View case study: ${project.title}`}
                    />
                    <div className="relative p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span
                          className="text-xs font-medium px-2 py-1 border"
                          style={{
                            color: project.color,
                            borderColor: `${project.color}55`,
                            backgroundColor: `${project.color}12`,
                          }}
                        >
                          {project.category}
                        </span>
                        <div className="relative z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-border hover:border-primary/40 text-muted-foreground hover:text-primary"
                            >
                              <GitBranch className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-border hover:border-primary/40 text-muted-foreground hover:text-primary"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h2 className="text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-primary inline-flex items-center gap-2">
                        Case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-4">
              Have a project in <span className="text-gradient">mind</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Web apps, brand design, or campus tech collaboration — let&apos;s talk scope and delivery.
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
