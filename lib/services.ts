/**
 * Core service cards (blue title, image, grey description band, list of services).
 * The enquiry form dropdown and the API validation use the same slugs.
 */
export type CoreService = {
  slug: string;
  title: string; // card title
  nav: string; // main navigation label
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
};

export const services: CoreService[] = [
  {
    slug: "architectural-bim-cad",
    title: "Architectural BIM",
    nav: "Architectural BIM",
    description: "Architectural BIM, Revit modelling and 2D CAD drafting that turn design intent into clear drawing packages.",
    image: "/images/service-architectural.svg",
    imageAlt: "Architectural floor plan drawing",
    items: [
      "Architectural BIM",
      "Revit 3D Modelling",
      "2D CAD Drafting",
      "Drawing Production",
      "Planning & Tender Packages",
      "Construction Documentation",
      "Door, Window & Room Schedules",
      "CAD to BIM Conversion",
      "Design Development Support",
    ],
  },
  {
    slug: "structural-bim-detailing",
    title: "Structural BIM",
    nav: "Structural BIM",
    description: "Structural BIM with steel, connection, precast and rebar detailing that fabricators and site teams can build from.",
    image: "/images/service-structural.svg",
    imageAlt: "Steel beam to column connection detail",
    items: [
      "Structural BIM",
      "Steel Detailing",
      "Connection Modelling",
      "Precast Detailing",
      "Rebar Detailing",
      "Bar Bending Schedules",
      "GA & Erection Drawings",
      "Assembly & Part Drawings",
      "NC / DSTV Files",
    ],
  },
  {
    slug: "mep-bim-coordination",
    title: "MEP BIM",
    nav: "MEP BIM",
    description: "Mechanical, electrical and plumbing BIM with clash coordination, so building services fit before work starts on site.",
    image: "/images/service-mep.svg",
    imageAlt: "Coordinated ceiling void section with duct, pipework and cable tray",
    items: [
      "Mechanical BIM",
      "Electrical BIM",
      "Plumbing BIM",
      "Clash Coordination",
      "Services Layouts & Sections",
      "Builders' Work Drawings",
      "Clash Reports & Issue Tracking",
      "Plant Room Details",
    ],
  },
  {
    slug: "facade-bim-detailing",
    title: "Facade BIM",
    nav: "Facade BIM",
    description: "Facade BIM, curtain wall modelling and cladding detailing for envelope designers, fabricators and installers.",
    image: "/images/service-facade.svg",
    imageAlt: "Curtain wall elevation and mullion detail",
    items: [
      "Facade BIM",
      "Curtain Wall Modelling",
      "Cladding Detailing",
      "Elevations & Setting-out",
      "Typical & Interface Details",
      "Panel & Glass Schedules",
      "Cutting Lists & BOMs",
    ],
  },
  {
    slug: "digital-construction-scan-to-bim",
    title: "Digital Construction",
    nav: "Scan to BIM",
    description: "Scan to BIM, point cloud modelling, as-built BIM and BIM coordination for existing buildings and live projects.",
    image: "/images/service-digital.svg",
    imageAlt: "Point cloud converted into a BIM model",
    items: [
      "Scan to BIM",
      "Point Cloud Modelling",
      "As-Built BIM",
      "BIM Coordination",
      "Existing Condition Drawings",
      "As-Built Drawings",
      "Coordination Reports",
    ],
  },
  {
    slug: "bim-support-consultancy",
    title: "BIM Support",
    nav: "BIM Support",
    description: "BIM execution support, Revit families, model QA/QC and dedicated BIM support teams working to your standards.",
    image: "/images/service-bim-support.svg",
    imageAlt: "Parametric Revit window family and model audit checklist",
    items: [
      "BIM Execution Support",
      "Revit Families",
      "Model QA/QC",
      "Dedicated BIM Support Teams",
      "Engineering Technical Support",
      "Standards & Template Setup",
      "Model Audit Reports",
    ],
  },
];
