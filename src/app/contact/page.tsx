"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, GitBranch, Globe, Cloud, Loader2, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input, Textarea } from "@/components/ui/input";
import { personalInfo } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const socialLinks = [
  ...(personalInfo.social.website
    ? [{ icon: Globe, href: personalInfo.social.website, label: "Website" }]
    : []),
  ...(personalInfo.social.github
    ? [{ icon: GitBranch, href: personalInfo.social.github, label: "GitHub" }]
    : []),
  { icon: Globe, href: personalInfo.social.linkedin, label: "LinkedIn" },
  ...(personalInfo.social.whatsapp
    ? [{ icon: MessageCircle, href: personalInfo.social.whatsapp, label: "WhatsApp" }]
    : []),
  ...(personalInfo.social.twitter
    ? [{ icon: Cloud, href: personalInfo.social.twitter, label: "Twitter" }]
    : []),
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const services = [
  {
    title: "Full-stack web apps",
    description: "Responsive apps, hosting, and maintenance",
  },
  {
    title: "Graphic design",
    description: "Logos, posters, brochures, and brand creatives",
  },
  {
    title: "Brand & community",
    description: "Social systems, events, and MLSA workshops",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 sm:pb-20">
      <section className="py-10 sm:py-16 md:py-20 relative overflow-x-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative w-full">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <Badge variant="glow" className="mb-4">
                Contact
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6 px-1">
                Let&apos;s <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Form */}
            <StaggerContainer className="lg:col-span-7 w-full min-w-0">
              <StaggerItem className="w-full min-w-0">
                <Card className="p-4 sm:p-6 md:p-8 w-full overflow-hidden">
                  <h2 className="text-xl sm:text-2xl font-display font-bold mb-5 sm:mb-6">
                    Send a <span className="text-gradient">Message</span>
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="min-w-0">
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                          placeholder="Your name"
                          error={errors.name?.message}
                        />
                      </div>
                      <div className="min-w-0">
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email",
                            },
                          })}
                          placeholder="your@email.com"
                          error={errors.email?.message}
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input
                        {...register("subject", {
                          required: "Subject is required",
                          minLength: {
                            value: 5,
                            message: "Subject must be at least 5 characters",
                          },
                        })}
                        placeholder="What's this about?"
                        error={errors.subject?.message}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                        placeholder="Tell me about your project..."
                        className="min-h-[120px] sm:min-h-[150px]"
                        error={errors.message?.message}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                          Sending...
                        </>
                      ) : submitStatus === "success" ? (
                        <>
                          <Send className="w-4 h-4 shrink-0" />
                          Message Sent!
                        </>
                      ) : submitStatus === "error" ? (
                        "Failed to send. Try again."
                      ) : (
                        <>
                          <Send className="w-4 h-4 shrink-0" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-500 text-center text-sm"
                      >
                        Thanks for reaching out! I&apos;ll get back to you soon.
                      </motion.p>
                    )}
                  </form>
                </Card>
              </StaggerItem>
            </StaggerContainer>

            {/* Sidebar: contact info + services */}
            <div className="lg:col-span-5 w-full min-w-0 space-y-6 sm:space-y-8">
              <AnimatedSection delay={0.1}>
                <Card className="p-4 sm:p-6 md:p-8 w-full overflow-hidden">
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-5 sm:mb-6">
                    Contact <span className="text-gradient">Info</span>
                  </h3>

                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium break-words">{personalInfo.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="font-medium hover:text-primary transition-colors break-all"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-mono text-xs font-bold">TEL</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a
                          href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                          className="font-medium hover:text-primary transition-colors break-words"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    {personalInfo.social.whatsapp && (
                      <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">WhatsApp</p>
                          <a
                            href={personalInfo.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary transition-colors break-words"
                          >
                            +92 326 5763041
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className="font-medium text-green-500 break-words text-sm sm:text-base leading-snug">
                          {personalInfo.availability}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="p-4 sm:p-6 md:p-8 w-full overflow-hidden lg:sticky lg:top-24">
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-5 sm:mb-6">
                    Let&apos;s Work <span className="text-gradient">Together</span>
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="p-3 sm:p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-all"
                      >
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground text-center">
                      Typically responds within{" "}
                      <span className="text-primary font-medium">24 hours</span>
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
