import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${siteConfig.name}'s portfolio website at ${siteConfig.url}.`,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms of Use - ${siteConfig.name}`,
    description: `Terms governing use of ${siteConfig.name}'s portfolio at muhammadalighias.me.`,
    url: `${siteConfig.url}/terms`,
  },
  robots: { index: true, follow: true },
};

const lastUpdated = "July 19, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 sm:py-16 md:py-20 relative overflow-x-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3">
            Terms of <span className="text-gradient">Use</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">1. Agreement</h2>
              <p>
                These Terms of Use (&quot;Terms&quot;) govern access to and use of{" "}
                <a href={siteConfig.url} className="text-primary hover:underline">
                  {siteConfig.url.replace("https://", "")}
                </a>{" "}
                (the &quot;Site&quot;), owned and operated by {siteConfig.name}. By accessing or
                using the Site, you agree to these Terms. If you do not agree, do not use the Site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                2. Purpose of the Site
              </h2>
              <p>
                The Site is a personal portfolio presenting professional experience, projects,
                skills, writing, and contact information. Content is provided for informational and
                professional networking purposes unless otherwise stated in a separate written
                agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                3. Intellectual Property
              </h2>
              <p>
                Unless otherwise noted, all Site content—including text, design, graphics, logos,
                layout, code presentation, and branding—is owned by {siteConfig.name} or used with
                permission. You may view and share links to the Site for personal or professional
                reference, but you may not copy, reproduce, modify, distribute, or commercially
                exploit Site content without prior written consent.
              </p>
              <p>
                Project repositories linked from third-party platforms (such as GitHub) remain
                subject to their respective licenses.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                4. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the Site for unlawful, harmful, or fraudulent purposes</li>
                <li>Attempt to disrupt, scrape excessively, or compromise Site security</li>
                <li>Submit spam, malware, or abusive content through contact channels</li>
                <li>Misrepresent your identity when communicating about projects or opportunities</li>
                <li>Imply endorsement, employment, or partnership without written approval</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                5. Contact and Communications
              </h2>
              <p>
                Messages sent through the contact form, email, WhatsApp, or social channels are
                treated as professional enquiries. Submitting a message does not create a client,
                employment, or contractual relationship unless confirmed in writing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                6. Services and Engagements
              </h2>
              <p>
                Descriptions of services, skills, or availability on the Site are general and may
                change. Any freelance, design, or development work is governed by a separate
                agreement covering scope, fees, timelines, and deliverables.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                7. External Links
              </h2>
              <p>
                The Site may link to external websites and services. Those destinations are not
                controlled by me, and I am not responsible for their content, policies, or
                practices. Accessing third-party links is at your own risk.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                8. Disclaimer of Warranties
              </h2>
              <p>
                The Site and its content are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, express or implied, including
                accuracy, completeness, reliability, or fitness for a particular purpose. Portfolio
                examples and case studies may summarize past work and are not guarantees of future
                results.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising from
                your use of, or inability to use, the Site or reliance on its content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless {siteConfig.name} from claims, damages, or
                expenses arising out of your misuse of the Site or violation of these Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                11. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of Pakistan, without regard to conflict-of-law
                principles. Courts located in Peshawar / relevant competent jurisdiction shall have
                exclusive authority over disputes arising from these Terms, subject to applicable
                law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                12. Changes to These Terms
              </h2>
              <p>
                I may update these Terms at any time. The &quot;Last updated&quot; date will be
                revised accordingly. Continued use of the Site after changes constitutes acceptance
                of the updated Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">13. Contact</h2>
              <p>Questions about these Terms:</p>
              <ul className="list-none space-y-1">
                <li>
                  <span className="text-foreground font-medium">Name:</span> {siteConfig.name}
                </li>
                <li>
                  <span className="text-foreground font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline break-all"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="text-foreground font-medium">Website:</span>{" "}
                  <a href={siteConfig.url} className="text-primary hover:underline">
                    {siteConfig.url.replace("https://", "")}
                  </a>
                </li>
              </ul>
            </section>
          </div>

        </div>
      </section>
    </div>
  );
}
