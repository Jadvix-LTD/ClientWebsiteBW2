/** Company details used across the page, footer, structured data and legal pages. */
export const site = {
  name: "Beaver and Weaver Engineering Services Ltd.",
  brand: "Beaver and Weaver",
  shortName: "BWENSE",
  tagline: "Built on Intelligence. Driven by Innovation.",
  description:
    "Beaver and Weaver Engineering Services (BWENSE) provides BIM modelling, CAD drafting, steel, precast and rebar detailing, MEP coordination, facade detailing, Scan to BIM and BIM support for construction teams in the UK, Europe and North America.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bwense.com").replace(/\/$/, ""),
  email: "enquiries@bwense.com",
  phone: "" as string,
  companyNumber: "" as string,
  markets: [
    { code: "UK", name: "United Kingdom" },
    { code: "EU", name: "Europe" },
    { code: "NA", name: "North America" },
  ],
} as const;

/** Top bar links (white, small) */
export const topNav = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#core-services", label: "Services" },
  { href: `mailto:${site.email}?subject=${encodeURIComponent("Career enquiry - Beaver and Weaver")}`, label: "Careers" },
  { href: "/#consultancy", label: "BIM Support" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
