import { absoluteUrl, site } from "./site";
import { services } from "./services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    alternateName: [site.shortName, site.brand],
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: absoluteUrl("/brand/logo-mark.png"),
    image: absoluteUrl("/images/hero-bim.svg"),
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: site.markets.map((m) => ({ "@type": m.code === "UK" ? "Country" : "Place", name: m.name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BIM, CAD and engineering detailing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description, url: absoluteUrl(`/#${s.slug}`) },
      })),
    },
  };
}
