"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GitBranch, LinkIcon, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass border-b border-border/50" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">A</span>
            </div>
            <span className="text-lg font-display font-bold tracking-tight">
              Muhammad <span className="text-primary">Ali Ghias</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {personalInfo.social.website && (
              <a
                href={personalInfo.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitBranch className="w-5 h-5" />
              </a>
            )}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
            <Link href="/contact">
              <Button size="sm" variant="glow">
                Hire me
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-foreground"
              >
                <X className="w-8 h-8" />
              </button>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-display font-bold transition-colors",
                      pathname === link.href
                        ? "text-gradient"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
                {personalInfo.social.website && (
                  <a href={personalInfo.social.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-6 h-6 text-muted-foreground hover:text-foreground" />
                  </a>
                )}
                {personalInfo.social.github && (
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                    <GitBranch className="w-6 h-6 text-muted-foreground hover:text-foreground" />
                  </a>
                )}
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}