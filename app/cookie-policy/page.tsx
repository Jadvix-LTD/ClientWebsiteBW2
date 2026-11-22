import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Which cookies the ${site.brand} website uses and how to control them.`,
  alternates: { canonical: "/cookie-policy" },
  openGraph: { url: "/cookie-policy", title: "Cookie Policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner title="Cookie Policy" />
      <section className="page-content">
        <div className="row">
          <p>Last updated November 2026.</p>
          <p>
            Cookies are small files stored on your device when you visit a website. This page explains how the{" "}
            {site.brand} website uses them, in line with the Privacy and Electronic Communications Regulations (PECR) and
            UK GDPR.
          </p>

          <h2>Cookies we use</h2>
          <p>
            This website does not set analytics, advertising or tracking cookies. Only strictly necessary technical data
            needed to deliver the pages and process the enquiry form is used, and it is not used to identify you.
          </p>

          <h2>If this changes</h2>
          <p>
            If we add analytics in future (for example Google Analytics), those cookies will only be set after you give
            your consent, and this page will list each cookie, its purpose and how long it lasts.
          </p>

          <h2>Managing cookies in your browser</h2>
          <p>
            Most browsers let you block or delete cookies in their settings. For more about how we handle personal data,
            see our <Link href="/privacy-policy">privacy policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
