import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page not found" />
      <section className="page-content">
        <div className="row">
          <p>The page you are looking for may have moved or no longer exists.</p>
          <p>
            <Link href="/">Back to the home page</Link>
          </p>
        </div>
      </section>
    </>
  );
}
