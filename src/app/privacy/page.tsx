import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}'s portfolio website at ${siteConfig.url}.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `How ${siteConfig.name} handles personal information on muhammadalighias.me.`,
    url: `${siteConfig.url}/privacy`,
  },
  robots: { index: true, follow: true },
};

const lastUpdated = "July 19, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 sm:py-16 md:py-20 relative overflow-x-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">1. Introduction</h2>
              <p>
                This Privacy Policy explains how {siteConfig.name} (&quot;I&quot;, &quot;me&quot;, or
                &quot;MAG&quot;) collects, uses, and protects information when you visit{" "}
                <a href={siteConfig.url} className="text-primary hover:underline">
                  {siteConfig.url.replace("https://", "")}
                </a>{" "}
                (the &quot;Site&quot;). By using the Site, you agree to this policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                2. Information I Collect
              </h2>
              <p>I may collect the following information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="text-foreground font-medium">Contact details</span> you
                  voluntarily submit through the contact form, email, WhatsApp, or other channels
                  (such as name, email address, subject, and message content).
                </li>
                <li>
                  <span className="text-foreground font-medium">Technical data</span> automatically
                  collected by hosting providers or browsers, such as IP address, device type,
                  browser type, pages visited, and approximate location.
                </li>
                <li>
                  <span className="text-foreground font-medium">Communication records</span>{" "}
                  related to enquiries about projects, freelance work, or collaboration.
                </li>
              </ul>
              <p>
                The Site does not require account registration and is not intended to collect
                sensitive personal data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                3. How I Use Information
              </h2>
              <p>Information is used only to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to enquiries and project requests</li>
                <li>Improve the Site&apos;s performance, content, and user experience</li>
                <li>Maintain security and prevent abuse</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p>I do not sell your personal information.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                4. Cookies and Analytics
              </h2>
              <p>
                The Site may use essential cookies or similar technologies required for basic
                functionality. If analytics or advertising tools are added in the future, this
                policy will be updated and, where required, consent will be requested.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                5. Third-Party Services
              </h2>
              <p>
                The Site links to third-party platforms such as GitHub, LinkedIn, and WhatsApp.
                Those services have their own privacy policies. I am not responsible for how those
                platforms process your data once you leave this Site.
              </p>
              <p>
                Hosting, domain, and email providers may process technical or delivery data under
                their own terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">6. Data Retention</h2>
              <p>
                Contact messages and related correspondence are retained only as long as needed to
                respond to your request, manage professional relationships, or meet legal
                requirements, after which they may be deleted or archived securely.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">7. Data Security</h2>
              <p>
                Reasonable technical and organizational measures are used to protect information.
                No method of transmission or storage is completely secure, and absolute security
                cannot be guaranteed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                8. Your Rights
              </h2>
              <p>
                Depending on applicable law, you may request access to, correction of, or deletion
                of personal information I hold about you. To make a request, contact me using the
                details below.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                9. Children&apos;s Privacy
              </h2>
              <p>
                The Site is intended for a general professional audience and is not directed at
                children under 13. I do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">
                10. Changes to This Policy
              </h2>
              <p>
                This Privacy Policy may be updated from time to time. The &quot;Last updated&quot;
                date at the top of this page will reflect the latest revision. Continued use of the
                Site after changes means you accept the updated policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-display font-semibold text-foreground">11. Contact</h2>
              <p>For privacy-related questions or requests:</p>
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
