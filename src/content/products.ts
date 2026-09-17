import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "avionics-wiring-harnesses",
    title: "Avionics Wiring Harnesses",
    shortTitle: "Wiring Harnesses",
    tagline: "Custom wiring harnesses designed and fabricated to drawing-controlled standards",
    overview:
      "Avianor Engineering designs and fabricates custom avionics wiring harnesses for aircraft modification, integration, and repair projects. Harnesses are produced against engineering drawings with controlled revision, appropriate materials, and professional finishing including looming, labeling, and termination.",
    iconName: "Cable",
    applications: [
      { title: "Avionics system installations" },
      { title: "Flight recorder and AVCR system wiring" },
      { title: "Air ambulance equipment wiring" },
      { title: "Test bench and prototype wiring" },
      { title: "Aircraft modification programs" },
    ],
    capabilities: [
      {
        title: "Drawing-Controlled Design",
        description: "All harnesses designed to engineering drawings with controlled revision history.",
      },
      {
        title: "Material Selection",
        description: "Appropriate wire types, insulation, and connector materials selected for aircraft application.",
      },
      {
        title: "Professional Termination",
        description: "Connectors, pins, and terminations assembled to manufacturer and applicable technical standard specifications.",
      },
      {
        title: "Looming and Labeling",
        description: "Harnesses finished with appropriate sleeving, lacing, and conductor labeling.",
      },
      {
        title: "Testing",
        description: "Continuity, insulation, and functional testing performed before delivery.",
      },
    ],
    configOptions: [
      {
        label: "Wire Gauge and Type",
        description: "Specified per circuit load, aircraft type, and applicable documentation.",
      },
      {
        label: "Connector Types",
        description: "MIL-spec, aviation-grade, and commercial connectors available depending on application.",
      },
      {
        label: "Length and Routing",
        description: "Harness length, branching, and breakout positions defined per installation drawings.",
      },
      {
        label: "Shielding",
        description: "Shielded or unshielded construction specified per signal type and EMI requirements.",
      },
    ],
    engineeringProcess:
      "Projects begin with a review of the installation drawing package and interface requirements. Harness design is developed or reviewed, materials are sourced, and fabrication proceeds per engineering drawings. Finished harnesses are tested before delivery.",
    testingAndDocumentation:
      "Continuity checks, insulation resistance tests, and functional verifications are performed. Harnesses are delivered with test records and applicable documentation.",
    disclaimer:
      "Final configuration, material specification, and applicable technical standards are determined for each project. Airworthiness eligibility depends on the approved project and applicable regulatory pathway.",
    relatedServiceSlugs: ["avionics-repair-wiring", "avionics-installation"],
    metaDescription:
      "Avianor Engineering provides custom avionics wiring harnesses designed and fabricated to drawing-controlled standards for aircraft modification and integration projects.",
  },
  {
    slug: "aircraft-electrical-panels",
    title: "Aircraft Electrical Panels",
    shortTitle: "Electrical Panels",
    tagline: "Custom electrical and circuit-breaker panels fabricated to engineering specifications",
    overview:
      "Avianor Engineering designs and fabricates custom aircraft electrical panels, circuit-breaker panels, and control panels for modification and integration projects. Panels are manufactured to engineering drawings with dimensional inspection and appropriate finish.",
    iconName: "LayoutPanel",
    applications: [
      { title: "Aircraft modification programs" },
      { title: "Air ambulance and medical equipment electrical interfaces" },
      { title: "Cockpit modernization programs" },
      { title: "Mission equipment integration" },
    ],
    capabilities: [
      {
        title: "Custom Panel Design",
        description: "Panel design to drawing-controlled standards appropriate to the aircraft and modification scope.",
      },
      {
        title: "Fabrication",
        description: "Sheet-metal and machined panel fabrication with appropriate finish.",
      },
      {
        title: "Circuit-Breaker Integration",
        description: "Circuit breaker and switch installation per engineering documentation.",
      },
      {
        title: "Wiring",
        description: "Panel wiring to engineering drawings with labeled conductors.",
      },
      {
        title: "Inspection",
        description: "Dimensional inspection and visual verification against drawings.",
      },
    ],
    configOptions: [
      {
        label: "Panel Material",
        description: "Aluminum alloy or other materials per drawing specification.",
      },
      {
        label: "Finish",
        description: "Anodize, powder coat, or other finish as specified.",
      },
      {
        label: "Circuit Breaker Layout",
        description: "Circuit breaker positions and ratings per engineering documentation.",
      },
      {
        label: "Labeling",
        description: "Panel engraving, decal, or label marking as specified.",
      },
    ],
    engineeringProcess:
      "Panel requirements are defined during the engineering phase. Drawings are prepared or reviewed, materials sourced, and panels fabricated with inspection against drawing dimensions and requirements.",
    testingAndDocumentation:
      "Dimensional inspection and visual verification are performed. Panels are delivered with applicable inspection records and documentation.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["aircraft-parts-manufacturing", "avionics-repair-wiring"],
    metaDescription:
      "Avianor Engineering designs and fabricates custom aircraft electrical and circuit-breaker panels for modification and integration programs.",
  },
  {
    slug: "equipment-mounting-solutions",
    title: "Equipment Mounting Solutions",
    shortTitle: "Equipment Mounting",
    tagline: "Custom brackets, racks, and mounting hardware for aircraft equipment integration",
    overview:
      "Avianor Engineering designs and fabricates custom equipment mounting hardware for aircraft avionics, medical equipment, and mission systems. Solutions are engineered to drawing-controlled standards with structural interface considerations appropriate to the aircraft and installation.",
    iconName: "Wrench",
    applications: [
      { title: "Avionics equipment mounting" },
      { title: "Medical equipment and stretcher integration" },
      { title: "Mission equipment installation" },
      { title: "Equipment tray and rack fabrication" },
    ],
    capabilities: [
      {
        title: "Custom Bracket Design",
        description: "Engineering of mounting brackets tailored to specific equipment and aircraft structural interfaces.",
      },
      {
        title: "Equipment Rack Fabrication",
        description: "Avionics rack and equipment tray design and fabrication.",
      },
      {
        title: "Structural Interface Consideration",
        description: "Review of aircraft structural attachment points and load requirements during design.",
      },
      {
        title: "Material Selection",
        description: "Material selection appropriate to load requirements and aircraft environment.",
      },
      {
        title: "Inspection",
        description: "Dimensional inspection against engineering drawings.",
      },
    ],
    configOptions: [
      {
        label: "Material",
        description: "Aluminum, steel, or composite materials per design requirements.",
      },
      {
        label: "Finish",
        description: "Corrosion protection and finish appropriate to aircraft environment.",
      },
      {
        label: "Interface Type",
        description: "Bolted, riveted, or bonded attachment as determined by structural requirements.",
      },
    ],
    engineeringProcess:
      "Mounting requirements are defined during engineering review. Brackets and hardware are designed to drawings, fabricated, and inspected before delivery.",
    testingAndDocumentation:
      "Components are dimensionally inspected against drawings. Documentation and traceability are provided appropriate to the project.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["aircraft-parts-manufacturing", "air-ambulance-solutions"],
    metaDescription:
      "Avianor Engineering designs and fabricates custom equipment mounting solutions — brackets, racks, and hardware for aircraft avionics and mission equipment integration.",
  },
  {
    slug: "avionics-test-benches",
    title: "Avionics Test Bench Solutions",
    shortTitle: "Test Bench Solutions",
    tagline: "Custom test benches and diagnostic tooling for avionics evaluation and harness testing",
    overview:
      "Avianor Engineering designs and builds custom avionics test benches tailored to specific equipment, interface, and test requirements. Solutions range from simple harness-continuity fixtures to multi-interface system test platforms.",
    iconName: "MonitorCog",
    applications: [
      { title: "Avionics unit functional testing" },
      { title: "Wiring harness acceptance testing" },
      { title: "Maintenance organization bench capability" },
      { title: "Production and incoming inspection tooling" },
    ],
    capabilities: [
      {
        title: "Custom Bench Design",
        description: "Test bench architecture designed to specific equipment-under-test and interface requirements.",
      },
      {
        title: "Interface Simulation",
        description: "Aircraft electrical environment simulation for bench testing.",
      },
      {
        title: "Breakout Boxes",
        description: "Connector access and signal monitoring breakout boxes.",
      },
      {
        title: "Test Procedures",
        description: "Test procedure and operator instruction preparation.",
      },
      {
        title: "Calibration Support",
        description: "Initial calibration and maintenance planning support.",
      },
    ],
    configOptions: [
      {
        label: "Interface Configuration",
        description: "Defined by the equipment-under-test connector types and signal requirements.",
      },
      {
        label: "Power Distribution",
        description: "Power feeds and circuit protection matched to equipment requirements.",
      },
      {
        label: "Measurement Interfaces",
        description: "Instrumentation interfaces as required for the test program.",
      },
    ],
    engineeringProcess:
      "Test requirements are reviewed, bench architecture is defined, and the bench is fabricated and verified against design requirements before delivery with operator documentation.",
    testingAndDocumentation:
      "Bench is verified against design requirements. Test procedures, calibration records, and operator instructions are delivered.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["avionics-test-bench", "avionics-repair-wiring"],
    metaDescription:
      "Avianor Engineering designs and builds custom avionics test benches, harness fixtures, and breakout boxes for aviation maintenance and integration programs.",
  },
  {
    slug: "breakout-interface-boxes",
    title: "Breakout and Interface Boxes",
    shortTitle: "Breakout and Interface Boxes",
    tagline: "Custom connector access and signal interface boxes for test and integration",
    overview:
      "Avianor Engineering designs and fabricates custom breakout boxes and interface boxes for aircraft and avionics test programs. Solutions provide connector access, signal distribution, and monitoring points for troubleshooting and acceptance testing.",
    iconName: "Network",
    applications: [
      { title: "Avionics system troubleshooting" },
      { title: "Harness acceptance testing" },
      { title: "System integration testing" },
      { title: "Maintenance and diagnostic tooling" },
    ],
    capabilities: [
      {
        title: "Connector Access",
        description: "Breakout boxes providing access to individual connector pins for monitoring and testing.",
      },
      {
        title: "Signal Distribution",
        description: "Signal routing and distribution panels for interface testing.",
      },
      {
        title: "Custom Interface",
        description: "Interface boxes designed to replicate or extend specific aircraft connector configurations.",
      },
    ],
    configOptions: [
      {
        label: "Connector Type",
        description: "Matched to the target avionics equipment and aircraft connector specification.",
      },
      {
        label: "Enclosure",
        description: "Bench-mounted or hand-held enclosures depending on application.",
      },
    ],
    engineeringProcess:
      "Interface requirements are defined, box design prepared, and fabrication and verification completed before delivery.",
    testingAndDocumentation:
      "Boxes are verified against design requirements and delivered with applicable documentation.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["avionics-test-bench", "avionics-repair-wiring"],
    metaDescription:
      "Avianor Engineering designs and fabricates custom breakout boxes and interface boxes for avionics test, troubleshooting, and integration programs.",
  },
  {
    slug: "medical-equipment-mounting",
    title: "Medical Equipment Mounting Hardware",
    shortTitle: "Medical Equipment Mounting",
    tagline: "Engineered mounting hardware for aircraft medical equipment integration",
    overview:
      "Avianor Engineering designs and fabricates mounting hardware for medical equipment integration in air ambulance and medevac aircraft. Hardware is engineered to the specific aircraft structure and medical equipment requirements on a project-specific basis.",
    iconName: "HeartPulse",
    applications: [
      { title: "Air ambulance helicopter conversions" },
      { title: "Fixed-wing medevac aircraft" },
      { title: "Stretcher mounting systems" },
      { title: "Medical monitor and infusion pump mounting" },
    ],
    capabilities: [
      {
        title: "Stretcher Interface Hardware",
        description: "Structural mounting hardware for stretcher systems compatible with the aircraft floor structure.",
      },
      {
        title: "Equipment Mounting Brackets",
        description: "Custom brackets for medical monitors, ventilators, and infusion equipment.",
      },
      {
        title: "Structural Review",
        description: "Coordination with aircraft structural data during design.",
      },
    ],
    configOptions: [
      {
        label: "Aircraft Type",
        description: "Hardware dimensioned to specific aircraft floor structure and interior envelope.",
      },
      {
        label: "Equipment",
        description: "Mounting designed to specific medical equipment dimensions and interface requirements.",
      },
    ],
    engineeringProcess:
      "Aircraft and equipment requirements are reviewed, mounting hardware designed and fabricated, and dimensional inspection performed before delivery.",
    testingAndDocumentation:
      "Hardware is inspected against drawings and delivered with applicable documentation.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["air-ambulance-solutions", "spectrum-aeromed-integration"],
    metaDescription:
      "Avianor Engineering designs and fabricates aircraft medical equipment mounting hardware for air ambulance and medevac aircraft conversions.",
  },
  {
    slug: "aircraft-modification-kits",
    title: "Aircraft Modification Kits",
    shortTitle: "Modification Kits",
    tagline: "Engineered component kits supporting aircraft modification programs",
    overview:
      "Avianor Engineering designs and assembles engineering modification kits supporting aircraft modification programs. Kits are assembled against defined component lists with appropriate documentation for the installation scope.",
    iconName: "PackageOpen",
    applications: [
      { title: "NVG modification component packages" },
      { title: "Avionics installation hardware kits" },
      { title: "Medical conversion component packages" },
      { title: "Prototype modification development" },
    ],
    capabilities: [
      {
        title: "Component Engineering",
        description: "Component selection and design appropriate to the modification scope.",
      },
      {
        title: "Kit Assembly",
        description: "Components assembled and documented per the modification kit definition.",
      },
      {
        title: "Documentation",
        description: "Kit lists, drawing references, and applicable documentation included with delivery.",
      },
    ],
    configOptions: [
      {
        label: "Modification Scope",
        description: "Kit content defined by the specific modification program and aircraft type.",
      },
    ],
    engineeringProcess:
      "Modification requirements are reviewed, components defined, and kits assembled and documented before delivery.",
    testingAndDocumentation:
      "Kits are assembled against component lists and verified before delivery with applicable documentation.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["aircraft-parts-manufacturing", "nvg-modifications"],
    metaDescription:
      "Avianor Engineering assembles engineered aircraft modification kits for NVG, avionics, and medical conversion programs.",
  },
  {
    slug: "analog-to-digital-interface-solutions",
    title: "Analog-to-Digital Interface Solutions",
    shortTitle: "A/D Interface Solutions",
    tagline: "Interface converter and signal adaptation solutions for cockpit modernization",
    overview:
      "Avianor Engineering engineers analog-to-digital interface solutions supporting cockpit modernization programs. Solutions address signal conversion, data bus bridging, and interface adaptation between legacy analog sensors and modern digital avionics systems.",
    iconName: "ArrowLeftRight",
    applications: [
      { title: "Legacy aircraft digital display integration" },
      { title: "Analog sensor signal conversion" },
      { title: "Data bus protocol bridging" },
      { title: "Cockpit modernization programs" },
    ],
    capabilities: [
      {
        title: "Signal Conversion Engineering",
        description: "Engineering of signal conversion between analog sensors and digital display inputs.",
      },
      {
        title: "Interface Converter Integration",
        description: "Selection and integration of commercial interface converters where appropriate.",
      },
      {
        title: "Custom Interface Design",
        description: "Custom interface design where commercial converters do not meet project requirements.",
      },
    ],
    configOptions: [
      {
        label: "Signal Types",
        description: "Defined by the legacy sensors and digital system inputs involved.",
      },
      {
        label: "Data Bus Protocols",
        description: "ARINC 429, RS-232, discrete, and analog interfaces addressed per project requirements.",
      },
    ],
    engineeringProcess:
      "Signal and interface requirements are reviewed, conversion architecture defined, and interface solutions designed, integrated, and tested.",
    testingAndDocumentation:
      "Interface functionality is verified during system testing. Documentation covers configuration and applicable interface parameters.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["analog-to-digital-modernization", "avionics-repair-wiring"],
    metaDescription:
      "Avianor Engineering provides analog-to-digital signal interface solutions for aircraft cockpit modernization and legacy sensor integration programs.",
  },
  {
    slug: "custom-brackets-fabricated-components",
    title: "Custom Brackets and Fabricated Components",
    shortTitle: "Custom Fabricated Parts",
    tagline: "Precision-fabricated brackets, plates, and components for aircraft applications",
    overview:
      "Avianor Engineering designs and fabricates custom brackets, plates, enclosures, and structural components for aircraft modification and integration projects. All components are produced to drawing-controlled standards with dimensional inspection.",
    iconName: "Shapes",
    applications: [
      { title: "Avionics equipment support brackets" },
      { title: "Medical equipment mounting plates" },
      { title: "Custom enclosures and covers" },
      { title: "Structural attachment hardware" },
    ],
    capabilities: [
      {
        title: "Drawing-Controlled Fabrication",
        description: "All components fabricated to engineering drawings with revision control.",
      },
      {
        title: "Sheet-Metal Fabrication",
        description: "Sheared, formed, and finished sheet-metal components.",
      },
      {
        title: "Machining",
        description: "Machined components to drawing tolerance.",
      },
      {
        title: "Inspection",
        description: "Dimensional inspection against engineering drawings.",
      },
    ],
    configOptions: [
      {
        label: "Material",
        description: "Aluminum alloy, steel, or other materials per drawing specification.",
      },
      {
        label: "Finish",
        description: "Anodize, paint, or other finish as specified.",
      },
    ],
    engineeringProcess:
      "Fabrication begins with drawing review and material sourcing. Components are manufactured and dimensionally inspected before delivery.",
    testingAndDocumentation:
      "Dimensional inspection records are provided. Documentation appropriate to the project and applicable requirements.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["aircraft-parts-manufacturing", "equipment-mounting-solutions"],
    metaDescription:
      "Avianor Engineering designs and fabricates custom brackets, mounting plates, and structural components for aircraft modification and integration projects.",
  },
  {
    slug: "diagnostic-maintenance-tooling",
    title: "Diagnostic and Maintenance Tooling",
    shortTitle: "Diagnostic Tooling",
    tagline: "Custom diagnostic tools and maintenance aids for aircraft and avionics programs",
    overview:
      "Avianor Engineering designs and fabricates custom diagnostic and maintenance tooling for aircraft and avionics systems. Tooling supports fault isolation, system monitoring, and acceptance testing for maintenance organizations and integration programs.",
    iconName: "Wrench",
    applications: [
      { title: "Avionics system fault isolation" },
      { title: "Harness inspection and acceptance testing" },
      { title: "System monitoring and checkout" },
      { title: "Maintenance organization support tooling" },
    ],
    capabilities: [
      {
        title: "Custom Diagnostic Tool Design",
        description: "Tooling designed to the specific system, connector, and diagnostic requirement.",
      },
      {
        title: "Fabrication",
        description: "Tool fabrication with appropriate materials and finish.",
      },
      {
        title: "Procedures",
        description: "Diagnostic and operating procedures prepared for each tool.",
      },
    ],
    configOptions: [
      {
        label: "Target System",
        description: "Tool design driven by the aircraft system or equipment addressed.",
      },
    ],
    engineeringProcess:
      "Diagnostic requirements are reviewed, tool design developed, fabrication completed, and tools verified before delivery with operating procedures.",
    testingAndDocumentation:
      "Tools are verified against requirements before delivery. Operating procedures and applicable documentation included.",
    disclaimer:
      "Final configuration, eligibility, installation data, and approval requirements are determined for each aircraft and project.",
    relatedServiceSlugs: ["avionics-test-bench", "avionics-repair-wiring"],
    metaDescription:
      "Avianor Engineering designs and fabricates custom diagnostic and maintenance tooling for aircraft avionics systems and maintenance organizations.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

