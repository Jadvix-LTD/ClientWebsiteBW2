/** Editorial content for the landing page. */

export const hero = {
  titleLines: ["BIM / CAD / DETAILING", "ENGINEERING SERVICES"],
  text: "Beaver and Weaver delivers precise BIM, CAD and engineering detailing services for architects, engineers, contractors and fabricators across the UK, Europe and North America.",
};

export const intro = [
  "Beaver and Weaver Engineering Services (BWENSE) provides a full range of BIM, CAD and engineering detailing services for the AEC (Architecture, Engineering and Construction) industry. Our services for the architectural, structural, MEP and facade trades cover every stage of a project, from design development to as-built handover. Building Information Modelling combines intelligent 3D models with information about building components, materials, dimensions and construction systems, so architects, engineers and contractors can collaborate, coordinate their work and identify potential problems before they reach site. We also offer standalone modelling and detailing services for each discipline, including fabrication drawings for structural steel, precast concrete, reinforcement and building envelope systems.",
  "Our team works with your design engineers, general contractors and trade contractors to combine discipline models, review interfaces and resolve clashes with the responsible design teams. Engineering design determines the technical solution, while BIM modelling represents and organises it, and detailing converts it into drawings, schedules and fabrication information. We are clear about which of these we deliver on each project, and we work to your standards, templates and deadlines to help you plan better, coordinate effectively and deliver projects more efficiently.",
];

export type Consulting = { title: string; text: string; image: string; imageAlt: string };

export const consulting: Consulting[] = [
  {
    title: "BIM Execution Support",
    text: "We help prepare and apply BIM execution plans, information requirements and naming conventions, so every model is produced to an agreed and consistent standard.",
    image: "/images/service-bim-support.svg",
    imageAlt: "BIM execution and model audit drawing",
  },
  {
    title: "Model QA/QC",
    text: "Model audits, health checks, standards compliance and drawing checks before issue, so the information you send to the project team is accurate and reliable.",
    image: "/images/hero-bim-dark.svg",
    imageAlt: "Coordinated BIM model under review",
  },
  {
    title: "Revit Family Creation",
    text: "Parametric, lightweight Revit families for manufacturers and design teams, built and tested to your standards and ready to use in live projects.",
    image: "/images/service-facade.svg",
    imageAlt: "Curtain wall family elevation and mullion profile",
  },
  {
    title: "Dedicated BIM Support Teams",
    text: "Named modellers and detailers working as an extension of your team, on your hours, in your software and to your workflows, for as long as you need them.",
    image: "/images/hero-bim.svg",
    imageAlt: "Isometric BIM model of a four-storey building",
  },
  {
    title: "Engineering Design & Technical Support",
    text: "Technical support to your engineers, including calculation input, mark-up incorporation and documentation, with design approval kept with the responsible engineer.",
    image: "/images/service-structural.svg",
    imageAlt: "Steel connection detail drawing",
  },
  {
    title: "BIM Coordination & Clash Detection",
    text: "Federated model reviews, clash tests and issue tracking, so conflicts such as ducts passing through beams are resolved with the design teams before construction.",
    image: "/images/service-mep.svg",
    imageAlt: "MEP services coordinated around a steel beam",
  },
  {
    title: "Scan to BIM & As-Built Modelling",
    text: "Registered point clouds converted into measured Revit models, and project models updated to reflect the constructed building for operation and maintenance.",
    image: "/images/service-digital.svg",
    imageAlt: "Point cloud converted into a BIM model",
  },
  {
    title: "CAD Drafting & Drawing Production",
    text: "Plans, sections, elevations and details drafted from mark-ups, scans or sketches, with planning, tender and construction drawing sets kept in step with the model.",
    image: "/images/service-architectural.svg",
    imageAlt: "Architectural general arrangement plan",
  },
];

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Our Services",
    links: [
      { label: "Architectural BIM", href: "/#architectural-bim-cad" },
      { label: "Structural BIM", href: "/#structural-bim-detailing" },
      { label: "MEP BIM", href: "/#mep-bim-coordination" },
      { label: "Facade BIM", href: "/#facade-bim-detailing" },
      { label: "Digital Construction", href: "/#digital-construction-scan-to-bim" },
      { label: "BIM Support", href: "/#bim-support-consultancy" },
    ],
  },
  {
    title: "Detailing Services",
    links: [
      { label: "Steel Detailing", href: "/#structural-bim-detailing" },
      { label: "Connection Modelling", href: "/#structural-bim-detailing" },
      { label: "Precast Detailing", href: "/#structural-bim-detailing" },
      { label: "Rebar Detailing", href: "/#structural-bim-detailing" },
      { label: "Curtain Wall Modelling", href: "/#facade-bim-detailing" },
      { label: "Cladding Detailing", href: "/#facade-bim-detailing" },
    ],
  },
  {
    title: "BIM Consultancy",
    links: [
      { label: "BIM Execution Support", href: "/#consultancy" },
      { label: "Model QA/QC", href: "/#consultancy" },
      { label: "Revit Family Creation", href: "/#consultancy" },
      { label: "Dedicated BIM Support Teams", href: "/#consultancy" },
      { label: "Clash Detection", href: "/#consultancy" },
      { label: "Scan to BIM", href: "/#consultancy" },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Core Services", href: "/#core-services" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Residential", href: "/#about" },
      { label: "Commercial", href: "/#about" },
      { label: "Industrial", href: "/#about" },
      { label: "Infrastructure", href: "/#about" },
      { label: "Public & Institutional", href: "/#about" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Request a Quote", href: "/#quote" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];
