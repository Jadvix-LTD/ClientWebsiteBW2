import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy", title: "Privacy Policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className="page-content">
        <div className="row">
          <p>Last updated November 2026.</p>
          <p>
            This policy explains how {site.name} (“{site.shortName}”, “we”, “us”) uses personal information collected
            through this website. We are the data controller for that information under the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>Who we are</h2>
          <p>
            {site.name}
            {site.companyNumber ? `, a company registered in England and Wales (No. ${site.companyNumber})` : ""}. You can
            contact us about privacy at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>Enquiry details: your name, company, business email, phone number (optional), the service you need, project description, deadline and any files you upload.</li>
            <li>Correspondence: emails and messages you send us.</li>
          </ul>

          <h2>How and why we use it</h2>
          <ul>
            <li>To respond to your enquiry and prepare a proposal. Legal basis: legitimate interests and steps taken at your request before entering a contract.</li>
            <li>To deliver and manage projects we agree with you. Legal basis: performance of a contract.</li>
            <li>To meet legal, accounting and regulatory obligations. Legal basis: legal obligation.</li>
          </ul>
          <p>We do not sell your personal information or use it for automated decision-making.</p>

          <h2>Who we share it with</h2>
          <p>
            We share information only with service providers who help us run our business, such as our email and website
            hosting providers, under contracts that require them to protect it. Where data is transferred outside the UK, we
            rely on appropriate safeguards such as the UK International Data Transfer Agreement or adequacy regulations.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries that do not lead to a project are kept for up to 24 months and then deleted. Project records are kept
            for as long as needed for the project and our legal obligations, typically six years after completion.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access, correct or erase your personal information, to restrict or object to its
            processing, and to data portability. To exercise these rights, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. You can also complain to the Information Commissioner’s
            Office (ICO) at <a href="https://ico.org.uk" rel="noopener noreferrer">ico.org.uk</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            See our <Link href="/cookie-policy">cookie policy</Link>.
          </p>

          <h2>Changes</h2>
          <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
        </div>
      </section>
    </>
  );
}
