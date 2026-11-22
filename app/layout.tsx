import type { Metadata, Viewport } from "next";
import { Lato, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteButton } from "@/components/QuoteButton";
import { QuoteModal } from "@/components/QuoteModal";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-open-sans", display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["700"], variable: "--font-lato", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto", display: "swap" });

const title = "BIM / CAD Engineering Services | Beaver and Weaver Engineering Services";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Beaver and Weaver Engineering Services" },
  description: site.description,
  applicationName: "Beaver and Weaver Engineering Services",
  authors: [{ name: site.name }],
  publisher: site.name,
  keywords: [
    "BIM services UK",
    "BIM modelling",
    "CAD drafting services",
    "Revit modelling",
    "structural steel detailing",
    "precast detailing",
    "rebar detailing",
    "MEP BIM coordination",
    "clash detection",
    "facade detailing",
    "curtain wall modelling",
    "scan to BIM",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Beaver and Weaver Engineering Services",
    title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = { themeColor: "#027bca", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${openSans.variable} ${lato.variable} ${roboto.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuoteButton className="floating-quote">Get a Quote</QuoteButton>
        <div className="bottom-strip" aria-hidden="true" />
        <QuoteModal />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
