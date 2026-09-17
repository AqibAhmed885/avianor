import type { Service } from "@/types/service";

export const services: Service[] = [
  // ─── 1. NVG Modifications ────────────────────────────────────────────────
  {
    slug: "nvg-modifications",
    title: "Night Vision Goggle Modifications",
    shortTitle: "NVG Modifications",
    tagline: "Cockpit lighting engineered for NVG-compatible operations",
    overview:
      "Avianor Engineering provides technical support for aircraft cockpit and cabin lighting modifications intended to support night vision goggle operations. Projects are assessed on an aircraft-specific basis covering existing lighting systems, instrument panels, and operational requirements.",
    iconName: "MoonStar",
    capabilities: [
      {
        title: "NVG-Compatible Cockpit Assessment",
        description:
          "Review of existing cockpit lighting, instruments, and panel displays to identify compatibility considerations for NVG operations.",
      },
      {
        title: "Lighting Compatibility Review",
        description:
          "Evaluation of existing lighting types and configurations relative to NVG operational requirements.",
      },
      {
        title: "Instrument and Panel-Lighting Modification",
        description:
          "Engineering support for modifying or replacing cockpit panel and instrument lighting to reduce interference with night vision equipment.",
      },
      {
        title: "Cabin-Lighting Considerations",
        description:
          "Assessment and modification planning for cabin lighting systems that may affect crew NVG operations.",
      },
      {
        title: "Equipment Integration",
        description:
          "Integration of NVG-compatible lighting equipment and dimmer systems into existing aircraft electrical systems.",
      },
      {
        title: "Ground and Functional Testing",
        description:
          "Functional testing of modified lighting systems and verification against project-specific acceptance criteria.",
      },
      {
        title: "Documentation Support",
        description:
          "Preparation of installation and modification documentation appropriate to the project scope.",
      },
    ],
    applications: [
      { title: "Helicopter operations requiring NVG capability" },
      { title: "Special-mission fixed-wing aircraft" },
      { title: "Air ambulance and medevac operators" },
      { title: "Government and defense-adjacent aviation programs" },
      { title: "Training and utility operators evaluating NVG operations" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Project Consultation",
        description:
          "Discussion of operational requirements, aircraft type, and NVG equipment planned for use.",
      },
      {
        step: 2,
        title: "Aircraft Assessment",
        description:
          "Review of existing cockpit and cabin lighting systems, wiring, and panel configurations.",
      },
      {
        step: 3,
        title: "Engineering Definition",
        description:
          "Definition of scope, affected systems, component requirements, and documentation approach.",
      },
      {
        step: 4,
        title: "Design and Planning",
        description:
          "Preparation of engineering plans, wiring documents, and component selection.",
      },
      {
        step: 5,
        title: "Modification and Installation",
        description:
          "Lighting system modification or replacement per engineering documentation.",
      },
      {
        step: 6,
        title: "Ground Testing",
        description:
          "Functional verification of modified systems against defined acceptance criteria.",
      },
      {
        step: 7,
        title: "Documentation Delivery",
        description:
          "Handover of project documentation appropriate to the scope and approval pathway.",
      },
    ],
    installationNotes:
      "NVG modification projects are assessed individually based on the aircraft type, existing electrical system, and operator requirements. Installation is planned to avoid interference with other aircraft systems. All work is referenced to applicable aircraft documentation and project-specific engineering data.",
    testingAndDocumentation:
      "Ground testing confirms lighting system function, dimmer performance, and system integration. Documentation is prepared to support configuration control and ongoing maintenance.",
    disclaimer:
      "Applicable approval pathways, regulatory requirements, and authorized release documentation vary by aircraft, operator, and jurisdiction. Final eligibility and approval requirements are determined on a project-specific basis.",
    relatedServiceSlugs: [
      "avionics-repair-wiring",
      "analog-to-digital-modernization",
      "cockpit-modernization",
    ],
    metaDescription:
      "Avianor Engineering provides NVG cockpit and cabin lighting modification support — from system assessment through installation, testing, and documentation.",
  },

  // ─── 2. Flight Recorder & AVCR ───────────────────────────────────────────
  {
    slug: "flight-recorder-avcr",
    title: "Flight Recorder and Airborne Video Camera Recorder Systems",
    shortTitle: "Flight Recorder and AVCR",
    tagline:
      "Flight-data and airborne video camera recorder (AVCR) installation and integration support",
    overview:
      "Avianor Engineering provides engineering support for flight recorder system installation, replacement, and integration — including airborne video camera recorder (AVCR) systems that capture cockpit audio, video, and operational data. Projects are scoped per aircraft type, existing data-acquisition architecture, and operator requirements.",
    iconName: "Database",
    capabilities: [
      {
        title: "Flight-Data Recording Solutions",
        description:
          "Engineering support for flight-data recorder (FDR) and quick-access recorder (QAR) system installations and upgrades.",
      },
      {
        title: "Cockpit Audio and Video Recording",
        description:
          "Integration of AVCR systems that capture cockpit audio, video, and parameter data.",
      },
      {
        title: "Recorder Replacement and Upgrades",
        description:
          "Planning and installation support for replacing legacy or end-of-life recorder systems.",
      },
      {
        title: "Sensor and Signal Integration",
        description:
          "Interface engineering between recorder systems and aircraft data buses, sensors, and avionics.",
      },
      {
        title: "Data-Acquisition Interfaces",
        description:
          "Design and installation of data concentrators, interface units, and parameter-acquisition hardware.",
      },
      {
        title: "Wiring and Equipment Installation",
        description:
          "Fabrication and installation of wiring harnesses and mounting hardware for recorder systems.",
      },
      {
        title: "System Testing",
        description:
          "Functional testing of installed systems including parameter verification and interface checks.",
      },
      {
        title: "Data-Retrieval Support",
        description:
          "Support for initial data-retrieval setup and configuration based on operator equipment.",
      },
    ],
    applications: [
      { title: "Commercial air transport operators" },
      { title: "Air ambulance and medevac aircraft" },
      { title: "Special-mission and surveillance platforms" },
      { title: "Business aviation and corporate fleet modernization" },
      { title: "Operators upgrading legacy recorder systems" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirements Review",
        description:
          "Review of operator requirements, aircraft type, existing recording architecture, and applicable equipment.",
      },
      {
        step: 2,
        title: "System Assessment",
        description:
          "Evaluation of existing data buses, avionics interfaces, wiring, and installation constraints.",
      },
      {
        step: 3,
        title: "Engineering Definition",
        description:
          "Definition of recorder selection, interface architecture, and installation approach.",
      },
      {
        step: 4,
        title: "Wiring and Interface Design",
        description:
          "Engineering drawings, harness design, and interface documentation.",
      },
      {
        step: 5,
        title: "Installation",
        description:
          "Equipment mounting, harness installation, and system integration.",
      },
      {
        step: 6,
        title: "Functional Testing",
        description:
          "Verification of recorder operation, parameter acquisition, and data-retrieval function.",
      },
      {
        step: 7,
        title: "Documentation Delivery",
        description:
          "Completion of project documentation supporting configuration control and maintenance.",
      },
    ],
    installationNotes:
      "Recorder system installation is planned to account for equipment mounting locations, crash-worthiness considerations, wiring routing, and power requirements. Projects are assessed per aircraft type and applicable documentation.",
    testingAndDocumentation:
      "System testing includes functional verification of parameter acquisition, data recording, and retrieval interfaces. Documentation is prepared to support ongoing maintenance and configuration control.",
    disclaimer:
      "Applicable regulatory requirements, recording mandates, approval pathways, and authorized release documentation vary by aircraft type, operator, and jurisdiction. Compliance with jurisdiction-specific requirements is determined on a project-specific basis.",
    relatedServiceSlugs: ["avionics-repair-wiring", "avionics-installation"],
    metaDescription:
      "Avianor Engineering provides flight recorder and AVCR system installation, integration, and upgrade support for commercial, air ambulance, and special-mission operators.",
  },

  // ─── 3. Air Ambulance Solutions ───────────────────────────────────────────
  {
    slug: "air-ambulance-solutions",
    title: "Air Ambulance Solutions",
    shortTitle: "Air Ambulance Solutions",
    tagline: "Medical-interior engineering for air ambulance and medevac aircraft",
    overview:
      "Avianor Engineering provides engineering support for air ambulance interior configuration, medical-equipment integration, and cabin modification projects. Each project is assessed individually based on the aircraft type, operator requirements, medical equipment selected, and applicable approval pathway.",
    iconName: "HeartPulse",
    capabilities: [
      {
        title: "Medical-Interior Configuration Support",
        description:
          "Engineering planning for medical interior layouts suited to patient transport and in-flight care requirements.",
      },
      {
        title: "Stretcher Integration",
        description:
          "Structural interface and mounting engineering for stretcher systems appropriate to the aircraft and operator specification.",
      },
      {
        title: "Medical-Equipment Mounting",
        description:
          "Design and installation of mounting hardware for medical monitoring, ventilation, and infusion equipment.",
      },
      {
        title: "Oxygen-System Interface Considerations",
        description:
          "Review and planning of oxygen system interfaces relevant to the aircraft and medical equipment configuration.",
      },
      {
        title: "Electrical Power for Medical Equipment",
        description:
          "Electrical load analysis support and power distribution engineering for medical equipment loads.",
      },
      {
        title: "Cabin-Layout Planning",
        description:
          "Cabin arrangement planning balancing clinical access, equipment placement, and aircraft weight and balance.",
      },
      {
        title: "Installation Support",
        description:
          "Engineering support during installation including documentation and installation instruction preparation.",
      },
      {
        title: "Ground Testing",
        description:
          "Functional verification of electrical interfaces, equipment operation, and installed systems.",
      },
      {
        title: "Operational Documentation",
        description:
          "Preparation of project documentation appropriate to the modification scope.",
      },
    ],
    applications: [
      { title: "Dedicated air ambulance and medevac operators" },
      { title: "Helicopter operators adding medical capability" },
      { title: "Fixed-wing charter operators providing medevac services" },
      { title: "Government health transport programs" },
      { title: "Remote-area medical operations" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Operator Consultation",
        description:
          "Review of operator requirements, medical equipment list, aircraft type, and applicable approval pathway.",
      },
      {
        step: 2,
        title: "Aircraft and Configuration Assessment",
        description:
          "Evaluation of aircraft interior, structure, electrical system, and available volume.",
      },
      {
        step: 3,
        title: "Layout and Engineering Definition",
        description:
          "Cabin layout development, load analysis, and interface engineering definition.",
      },
      {
        step: 4,
        title: "Design and Documentation",
        description:
          "Preparation of installation instructions, drawings, and supporting engineering documents.",
      },
      {
        step: 5,
        title: "Manufacturing and Fabrication",
        description:
          "Fabrication of mounting hardware, brackets, and wiring harnesses as required.",
      },
      {
        step: 6,
        title: "Installation",
        description:
          "Equipment installation per engineering documentation.",
      },
      {
        step: 7,
        title: "Ground Testing",
        description:
          "Functional verification of installed systems and acceptance testing.",
      },
      {
        step: 8,
        title: "Documentation Delivery",
        description:
          "Handover of project documentation for configuration control and ongoing maintenance.",
      },
    ],
    installationNotes:
      "Air ambulance configurations are designed around the specific aircraft, medical equipment list, and operator operating environment. Structural interface, weight and balance, and electrical load considerations are addressed during the engineering phase. Final configurations depend on the aircraft, equipment, operator requirements, and applicable approval pathway.",
    testingAndDocumentation:
      "Ground testing verifies electrical interfaces, equipment mounting security, and system function. Project documentation is prepared to support maintenance and configuration control.",
    disclaimer:
      "Final configurations, eligibility, installation data, and approval requirements are determined for each aircraft and project. Applicable regulatory requirements and approval pathways vary by aircraft, operator, equipment, and jurisdiction.",
    relatedServiceSlugs: [
      "spectrum-aeromed-integration",
      "avionics-repair-wiring",
      "aircraft-parts-manufacturing",
    ],
    metaDescription:
      "Avianor Engineering provides air ambulance interior configuration, medical-equipment integration, and cabin modification support for helicopter and fixed-wing operators.",
  },

  // ─── 4. Spectrum Aeromed Integration ─────────────────────────────────────
  {
    slug: "spectrum-aeromed-integration",
    title: "Medical-Equipment Integration Support",
    shortTitle: "Medical Equipment Integration",
    tagline:
      "Engineering integration support for air ambulance and medical-interior equipment",
    overview:
      "Avianor Engineering provides integration support for compatible medical-interior and air ambulance equipment, including Spectrum Aeromed systems where specified by the customer and permitted by applicable project approvals. Spectrum Aeromed is a third-party brand. Avianor Engineering does not represent, distribute, or act as an authorized agent for Spectrum Aeromed.",
    iconName: "HeartPulse",
    capabilities: [
      {
        title: "Equipment Integration Planning",
        description:
          "Engineering review of medical equipment dimensions, weights, interfaces, and installation requirements.",
      },
      {
        title: "Structural and Electrical Interface Coordination",
        description:
          "Coordination of structural attachment points and electrical power interfaces for medical equipment.",
      },
      {
        title: "Cabin-Layout Support",
        description:
          "Planning assistance for cabin layout optimized for medical access, equipment function, and aircraft constraints.",
      },
      {
        title: "Installation Assistance",
        description:
          "Engineering support during physical installation of medical equipment and mounting systems.",
      },
      {
        title: "Testing and Documentation",
        description:
          "Functional testing of installed equipment and preparation of supporting documentation.",
      },
    ],
    applications: [
      { title: "Helicopter air ambulance conversions" },
      { title: "Fixed-wing medevac aircraft" },
      { title: "Neonatal and critical-care transport platforms" },
      { title: "Remote-area and northern medical operations" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirements Review",
        description:
          "Review of operator requirements, medical equipment specification, and aircraft type.",
      },
      {
        step: 2,
        title: "Integration Assessment",
        description:
          "Evaluation of equipment interfaces, structural requirements, and electrical loads.",
      },
      {
        step: 3,
        title: "Engineering Planning",
        description:
          "Preparation of installation plans, drawings, and interface documentation.",
      },
      {
        step: 4,
        title: "Installation Support",
        description:
          "Technical support during equipment installation and system integration.",
      },
      {
        step: 5,
        title: "Testing and Handover",
        description:
          "Functional verification and delivery of project documentation.",
      },
    ],
    installationNotes:
      "Equipment integration is assessed on a project-specific basis. Structural interfaces, electrical loads, and installation approaches are defined based on the aircraft and equipment involved. All work references applicable aircraft documentation and project engineering data.",
    testingAndDocumentation:
      "Testing verifies equipment mounting integrity and electrical interface function. Documentation supports ongoing maintenance and configuration control.",
    disclaimer:
      "Spectrum Aeromed is a registered trademark of its respective owner. Avianor Engineering does not imply endorsement, partnership, distributorship, or authorization by Spectrum Aeromed or any third party. Integration work is subject to applicable approval requirements determined on a project-specific basis.",
    relatedServiceSlugs: ["air-ambulance-solutions", "aircraft-parts-manufacturing"],
    metaDescription:
      "Avianor Engineering provides engineering integration support for air ambulance and medical-interior equipment, including Spectrum Aeromed systems where applicable.",
  },

  // ─── 5. Avionics Repair & Wiring Harnesses ───────────────────────────────
  {
    slug: "avionics-repair-wiring",
    title: "Avionics Repair and Wiring Harness Services",
    shortTitle: "Avionics Repair and Wiring",
    tagline:
      "Troubleshooting, bench inspection, harness fabrication, and installation support",
    overview:
      "Avianor Engineering provides avionics troubleshooting, bench inspection, connector repair, and complete wiring harness design and fabrication services. Projects cover fault isolation, harness replacement, new installation support, and configuration-controlled documentation.",
    iconName: "CircuitBoard",
    capabilities: [
      {
        title: "Avionics Troubleshooting",
        description:
          "Systematic fault isolation for avionics systems, wiring, and interconnects.",
      },
      {
        title: "Bench Inspection",
        description:
          "Visual and functional bench inspection of avionics units and assemblies.",
      },
      {
        title: "Connector Repair and Replacement",
        description:
          "Repair and replacement of damaged or corroded connectors, pins, and back-shells.",
      },
      {
        title: "Wiring Continuity Checks",
        description:
          "Continuity, insulation resistance, and functional wiring checks to aircraft documentation standards.",
      },
      {
        title: "Harness Design",
        description:
          "Custom wiring harness design to drawing-controlled standards for aircraft applications.",
      },
      {
        title: "Harness Fabrication",
        description:
          "In-house fabrication of wiring harnesses including lacing, sleeving, and termination.",
      },
      {
        title: "Looming, Labeling, and Termination",
        description:
          "Professional harness finishing with appropriate looming, conductor labeling, and termination.",
      },
      {
        title: "Installation Support",
        description:
          "Technical support during harness and equipment installation.",
      },
      {
        title: "Functional Testing",
        description:
          "Verification of installed wiring and systems against acceptance criteria.",
      },
      {
        title: "Documentation and Configuration Control",
        description:
          "Harness and wiring documentation maintained under configuration control.",
      },
    ],
    applications: [
      { title: "Aircraft avionics system installations" },
      { title: "Harness replacement and upgrading programs" },
      { title: "Fault isolation and repair programs" },
      { title: "Aircraft modernization and retrofit programs" },
      { title: "Maintenance organizations requiring harness services" },
      { title: "Test bench wiring and prototype harnesses" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Fault Review or Project Consultation",
        description:
          "Discussion of fault history, aircraft type, and project scope.",
      },
      {
        step: 2,
        title: "System or Harness Assessment",
        description:
          "Inspection of affected wiring, connectors, and systems.",
      },
      {
        step: 3,
        title: "Engineering Definition",
        description:
          "Fault isolation approach or harness design definition.",
      },
      {
        step: 4,
        title: "Repair or Fabrication",
        description:
          "Connector repair, harness fabrication, or wiring rework per documentation.",
      },
      {
        step: 5,
        title: "Installation",
        description:
          "Harness installation and system reconnection.",
      },
      {
        step: 6,
        title: "Testing",
        description:
          "Continuity, insulation, and functional verification.",
      },
      {
        step: 7,
        title: "Documentation",
        description:
          "Configuration-controlled documentation delivered with the project.",
      },
    ],
    installationNotes:
      "Wiring work is performed with reference to applicable aircraft wiring manuals, component maintenance manuals, and project engineering data. Harnesses are fabricated to drawing-controlled standards with material traceability.",
    testingAndDocumentation:
      "Testing includes continuity verification, insulation resistance checks, and functional system tests. All harnesses are delivered with documentation supporting configuration control and maintenance.",
    relatedServiceSlugs: [
      "nvg-modifications",
      "avionics-installation",
      "avionics-test-bench",
    ],
    metaDescription:
      "Avianor Engineering offers avionics troubleshooting, bench inspection, connector repair, and custom wiring harness design and fabrication services.",
  },

  // ─── 6. Weather Radar Installation ───────────────────────────────────────
  {
    slug: "weather-radar-installation",
    title: "Weather Radar Installation and Integration",
    shortTitle: "Weather Radar",
    tagline: "Weather radar installation, antenna integration, and ground-test support",
    overview:
      "Avianor Engineering provides engineering and installation support for aircraft weather radar systems. Projects cover equipment selection support, antenna and display integration, radome considerations, wiring, and ground testing.",
    iconName: "Radar",
    capabilities: [
      {
        title: "Equipment-Selection Support",
        description:
          "Technical review of weather radar options relative to aircraft type, cockpit layout, and operator requirements.",
      },
      {
        title: "Antenna and Display Integration",
        description:
          "Integration engineering for radar antenna, display unit, and associated avionics interfaces.",
      },
      {
        title: "Radome and Installation Considerations",
        description:
          "Review of radome compatibility, antenna mounting, and installation constraints.",
      },
      {
        title: "Electrical Interfaces",
        description:
          "Design of power, signal, and data interfaces between radar system and aircraft electrical architecture.",
      },
      {
        title: "Aircraft Wiring",
        description:
          "Fabrication and installation of wiring harnesses for radar system interconnection.",
      },
      {
        title: "Calibration Support",
        description:
          "Support for initial system calibration and alignment procedures.",
      },
      {
        title: "Ground Testing",
        description:
          "Functional verification of radar system installation and interface operation.",
      },
      {
        title: "Documentation",
        description:
          "Preparation of installation documentation and wiring records.",
      },
    ],
    applications: [
      { title: "Fixed-wing aircraft weather-radar upgrades" },
      { title: "Helicopter weather-radar installations" },
      { title: "Business aviation radar system replacements" },
      { title: "Special-mission aircraft sensor integration" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirements Review",
        description:
          "Discussion of aircraft type, cockpit space, and operator radar requirements.",
      },
      {
        step: 2,
        title: "System Assessment",
        description:
          "Review of existing avionics, electrical system, and installation constraints.",
      },
      {
        step: 3,
        title: "Engineering Definition",
        description:
          "Equipment selection support, interface architecture, and installation approach.",
      },
      {
        step: 4,
        title: "Wiring and Interface Design",
        description:
          "Harness design, electrical load analysis support, and interface documentation.",
      },
      {
        step: 5,
        title: "Installation",
        description:
          "Equipment mounting, wiring installation, and system integration.",
      },
      {
        step: 6,
        title: "Testing",
        description:
          "Ground test verification of radar system function and interfaces.",
      },
      {
        step: 7,
        title: "Documentation Delivery",
        description:
          "Handover of installation documentation and configuration records.",
      },
    ],
    installationNotes:
      "Weather radar installation is planned to account for antenna location, radome compatibility, wiring routing, and electrical loads. Projects reference applicable aircraft documentation and manufacturer installation data.",
    testingAndDocumentation:
      "Ground testing verifies radar power-up, display function, and system interfaces. Installation documentation and wiring records are delivered at project completion.",
    relatedServiceSlugs: [
      "gps-installation",
      "avionics-repair-wiring",
      "avionics-installation",
    ],
    metaDescription:
      "Avianor Engineering provides weather radar installation, antenna integration, wiring, and ground testing support for aircraft operators.",
  },

  // ─── 7. GPS Installation ─────────────────────────────────────────────────
  {
    slug: "gps-installation",
    title: "GPS Installation and Integration",
    shortTitle: "GPS Installation",
    tagline: "GPS receiver, antenna, and navigation-system integration",
    overview:
      "Avianor Engineering provides GPS equipment installation, antenna integration, and navigation-system interface engineering support. Projects cover equipment mounting, wiring, display integration, and functional testing.",
    iconName: "Navigation",
    capabilities: [
      {
        title: "GPS Equipment Installation",
        description:
          "Installation of GPS receivers, navigators, and associated avionics equipment.",
      },
      {
        title: "Antenna Installation",
        description:
          "GPS antenna placement, bonding, and cabling per aircraft documentation and equipment requirements.",
      },
      {
        title: "Navigation-System Integration",
        description:
          "Interface engineering between GPS equipment and existing navigation, autopilot, and display systems.",
      },
      {
        title: "Display and Annunciation Interfaces",
        description:
          "Integration of GPS data with cockpit displays, MFDs, and annunciation systems.",
      },
      {
        title: "Wiring and Configuration",
        description:
          "Harness fabrication, installation, and equipment configuration.",
      },
      {
        title: "Ground Testing",
        description:
          "Functional verification of GPS receiver operation and system interfaces.",
      },
      {
        title: "Documentation Support",
        description:
          "Preparation of installation documents, wiring records, and configuration notes.",
      },
    ],
    applications: [
      { title: "VFR and IFR navigation system upgrades" },
      { title: "GPS navigator replacements on aging aircraft" },
      { title: "Multi-function display integrations" },
      { title: "Helicopter navigation system installations" },
      { title: "Business aviation avionics updates" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirements Review",
        description:
          "Review of aircraft type, existing avionics, and operator navigation requirements.",
      },
      {
        step: 2,
        title: "System Assessment",
        description:
          "Evaluation of cockpit layout, existing navigation systems, and interface options.",
      },
      {
        step: 3,
        title: "Engineering Definition",
        description:
          "Equipment selection support, antenna location, and interface architecture definition.",
      },
      {
        step: 4,
        title: "Wiring Design",
        description:
          "Harness design and interface documentation.",
      },
      {
        step: 5,
        title: "Installation",
        description:
          "Equipment mounting, antenna installation, and harness routing.",
      },
      {
        step: 6,
        title: "Testing",
        description:
          "Functional verification of GPS operation and navigation interface.",
      },
      {
        step: 7,
        title: "Documentation",
        description:
          "Delivery of installation records and configuration documentation.",
      },
    ],
    installationNotes:
      "GPS installation is planned to optimize antenna placement, minimize signal interference, and correctly interface with existing avionics. Projects reference applicable aircraft and equipment manufacturer documentation.",
    testingAndDocumentation:
      "Ground testing verifies satellite acquisition, display integration, and navigation system interfaces. Documentation supports ongoing configuration management and maintenance.",
    disclaimer:
      "IFR operational eligibility is not implied. Applicable airworthiness, operational approval, and equipment authorization requirements are determined on a project-specific basis.",
    relatedServiceSlugs: [
      "weather-radar-installation",
      "avionics-installation",
      "analog-to-digital-modernization",
    ],
    metaDescription:
      "Avianor Engineering provides GPS receiver installation, antenna integration, and navigation-system interface support for aircraft operators.",
  },

  // ─── 8. Analog-to-Digital Modernization ──────────────────────────────────
  {
    slug: "analog-to-digital-modernization",
    title: "Analog-to-Digital Cockpit Modernization",
    shortTitle: "Analog-to-Digital Modernization",
    tagline: "Upgrading legacy analog instruments to modern digital displays",
    overview:
      "Avianor Engineering provides engineering support for replacing or augmenting legacy analog cockpit instruments with digital display systems. Projects address legacy instrument assessment, display integration, sensor compatibility, and wiring modifications.",
    iconName: "Gauge",
    capabilities: [
      {
        title: "Legacy Instrument Assessment",
        description:
          "Review of existing analog instruments, sensors, and cockpit layout to define modernization scope.",
      },
      {
        title: "Digital-Display Integration",
        description:
          "Engineering support for integrating digital primary flight displays, engine displays, and multi-function displays.",
      },
      {
        title: "Sensor and Signal Compatibility",
        description:
          "Review and adaptation of sensor signals for compatibility with digital display systems.",
      },
      {
        title: "Interface-Converter Integration",
        description:
          "Integration of signal converters and interface boxes where required to bridge legacy and digital systems.",
      },
      {
        title: "Electrical-System Updates",
        description:
          "Electrical system modifications to support new display power requirements and loads.",
      },
      {
        title: "Cockpit-Layout Planning",
        description:
          "Panel layout planning for new display units, including cutout and structural considerations.",
      },
      {
        title: "Wiring Modifications",
        description:
          "Design and fabrication of wiring modifications to support new display installations.",
      },
      {
        title: "Testing and Documentation",
        description:
          "Functional testing and configuration documentation for modernized cockpit systems.",
      },
    ],
    applications: [
      { title: "Legacy turboprop and piston aircraft modernization" },
      { title: "Helicopter glass-cockpit upgrades" },
      { title: "General aviation cockpit improvements" },
      { title: "Special-mission aircraft sensor-display integration" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Modernization Consultation",
        description:
          "Discussion of aircraft type, current instrumentation, and modernization objectives.",
      },
      {
        step: 2,
        title: "Cockpit and System Assessment",
        description:
          "Review of existing instruments, sensors, wiring, and panel dimensions.",
      },
      {
        step: 3,
        title: "Display and Interface Selection",
        description:
          "Engineering support for display selection, interface architecture, and sensor compatibility.",
      },
      {
        step: 4,
        title: "Design and Layout",
        description:
          "Panel layout design, wiring plan, and modification documentation.",
      },
      {
        step: 5,
        title: "Manufacturing and Fabrication",
        description:
          "Panel modifications, mounting hardware, and wiring harness fabrication.",
      },
      {
        step: 6,
        title: "Installation",
        description:
          "Equipment installation per engineering documentation.",
      },
      {
        step: 7,
        title: "Testing",
        description:
          "Functional verification of displays, sensors, and interfaces.",
      },
      {
        step: 8,
        title: "Documentation",
        description:
          "Configuration-controlled documentation delivered at project completion.",
      },
    ],
    installationNotes:
      "Modernization projects are planned to ensure compatibility between new digital systems and existing aircraft sensors, wiring, and structure. Panel modifications account for structural integrity and aircraft documentation requirements.",
    testingAndDocumentation:
      "Testing verifies display function, sensor signal integrity, and system integration. Documentation supports configuration management and future maintenance.",
    relatedServiceSlugs: [
      "gps-installation",
      "nvg-modifications",
      "avionics-repair-wiring",
    ],
    metaDescription:
      "Avianor Engineering provides analog-to-digital cockpit modernization, including legacy instrument assessment, digital display integration, and wiring modification support.",
  },

  // ─── 9. Aircraft Parts Manufacturing ─────────────────────────────────────
  {
    slug: "aircraft-parts-manufacturing",
    title: "Aircraft Parts and Components Manufacturing",
    shortTitle: "Parts Manufacturing",
    tagline:
      "Drawing-controlled fabrication of aircraft components, brackets, and hardware",
    overview:
      "Avianor Engineering designs and fabricates aircraft parts and components in support of modification, repair, and integration projects. Manufacturing scope includes prototype components, sheet-metal parts, machined hardware, electrical panels, and wiring harnesses. Material certification, production status, and airworthiness eligibility depend on the approved project and manufacturing process.",
    iconName: "Factory",
    capabilities: [
      {
        title: "Prototype Components",
        description:
          "Design and fabrication of prototype parts in support of modification development programs.",
      },
      {
        title: "Brackets and Mounting Hardware",
        description:
          "Custom brackets, mounting plates, and structural hardware designed to drawing-controlled standards.",
      },
      {
        title: "Sheet-Metal Parts",
        description:
          "Sheet-metal fabrication including panel blanks, formed brackets, and enclosures.",
      },
      {
        title: "Machined Components",
        description:
          "Machined metal components for equipment mounting, structural attachment, and system interfaces.",
      },
      {
        title: "Electrical Panels",
        description:
          "Aircraft electrical panels, circuit-breaker panels, and control panels fabricated to engineering drawings.",
      },
      {
        title: "Equipment Racks",
        description:
          "Avionics equipment racks, mounting trays, and support structures.",
      },
      {
        title: "Wiring Harnesses",
        description:
          "Custom wiring harnesses fabricated to drawing-controlled standards.",
      },
      {
        title: "Drawing-Controlled Production",
        description:
          "All components fabricated against engineering drawings with revision control.",
      },
      {
        title: "Inspection and Traceability Options",
        description:
          "Inspection and material traceability support appropriate to the project and applicable requirements.",
      },
    ],
    applications: [
      { title: "Aircraft modification program component support" },
      { title: "Avionics integration hardware fabrication" },
      { title: "Air ambulance interior hardware" },
      { title: "Prototype development programs" },
      { title: "Replacement brackets and mounting hardware" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Design Review",
        description:
          "Review of component requirements, drawing package, and material specification.",
      },
      {
        step: 2,
        title: "Engineering and Drawing",
        description:
          "Preparation or review of engineering drawings and material call-outs.",
      },
      {
        step: 3,
        title: "Material Procurement",
        description:
          "Material sourcing appropriate to the project and applicable requirements.",
      },
      {
        step: 4,
        title: "Fabrication",
        description:
          "Component manufacturing per engineering drawings.",
      },
      {
        step: 5,
        title: "Inspection",
        description:
          "Dimensional and visual inspection against drawing requirements.",
      },
      {
        step: 6,
        title: "Delivery and Documentation",
        description:
          "Component delivery with applicable traceability and documentation.",
      },
    ],
    installationNotes:
      "Components are fabricated to support specific projects and are reviewed for installation compatibility during the engineering phase. Material and process selection is aligned with the project scope and applicable documentation.",
    testingAndDocumentation:
      "Dimensional inspection is performed against engineering drawings. Documentation and traceability are provided appropriate to the project and applicable requirements.",
    disclaimer:
      "Material certification, production approval status, and airworthiness eligibility depend on the approved project, manufacturing process, and applicable regulatory pathway. Component eligibility for installation on type-certificated aircraft is determined on a project-specific basis.",
    relatedServiceSlugs: [
      "avionics-repair-wiring",
      "avionics-test-bench",
      "air-ambulance-solutions",
    ],
    metaDescription:
      "Avianor Engineering provides aircraft part and component manufacturing including brackets, sheet-metal parts, electrical panels, and wiring harnesses under drawing control.",
  },

  // ─── 10. Avionics Test Bench Engineering ─────────────────────────────────
  {
    slug: "avionics-test-bench",
    title: "Avionics Test Bench Engineering",
    shortTitle: "Avionics Test Benches",
    tagline:
      "Custom test-bench design, harness-testing fixtures, and diagnostic tooling",
    overview:
      "Avianor Engineering designs and builds custom avionics test benches and test fixtures for avionics equipment evaluation, harness testing, and system simulation. Test benches are developed to project-specific requirements covering power, signal, interface simulation, and measurement.",
    iconName: "MonitorCog",
    capabilities: [
      {
        title: "Custom Test-Bench Design",
        description:
          "Design of test benches tailored to specific avionics equipment, interfaces, and test requirements.",
      },
      {
        title: "Equipment-Interface Simulation",
        description:
          "Design of simulation circuits and interfaces to replicate aircraft electrical environments for bench testing.",
      },
      {
        title: "Breakout-Box Development",
        description:
          "Design and fabrication of breakout boxes for connector access and signal monitoring.",
      },
      {
        title: "Harness-Testing Fixtures",
        description:
          "Dedicated fixtures for continuity, insulation, and functional testing of wiring harnesses.",
      },
      {
        title: "Power and Signal Distribution",
        description:
          "Bench power distribution design appropriate to equipment under test requirements.",
      },
      {
        title: "Measurement Interfaces",
        description:
          "Integration of measurement and monitoring interfaces for test data acquisition.",
      },
      {
        title: "Diagnostic Procedures",
        description:
          "Development of test procedures and fault-isolation guides for use with the test bench.",
      },
      {
        title: "Operator Instructions",
        description:
          "Preparation of operator guides and test instructions for bench users.",
      },
      {
        title: "Calibration and Maintenance Planning",
        description:
          "Initial calibration support and maintenance planning for test equipment.",
      },
    ],
    applications: [
      { title: "Avionics unit functional testing" },
      { title: "Wiring harness acceptance testing" },
      { title: "System integration testing support" },
      { title: "Maintenance organization bench-test capability" },
      { title: "Production and incoming inspection tooling" },
    ],
    processSteps: [
      {
        step: 1,
        title: "Test Requirements Review",
        description:
          "Discussion of equipment under test, required interfaces, and test objectives.",
      },
      {
        step: 2,
        title: "Bench Architecture Design",
        description:
          "Design of test bench layout, interface circuits, power distribution, and measurement setup.",
      },
      {
        step: 3,
        title: "Fabrication",
        description:
          "Construction of bench chassis, wiring, connectors, and interface assemblies.",
      },
      {
        step: 4,
        title: "Verification",
        description:
          "Bench verification against design requirements and test procedure review.",
      },
      {
        step: 5,
        title: "Procedure Development",
        description:
          "Preparation of test procedures, fault-isolation guides, and operator instructions.",
      },
      {
        step: 6,
        title: "Delivery and Support",
        description:
          "Bench delivery, commissioning support, and initial operator training.",
      },
    ],
    installationNotes:
      "Test benches are designed to replicate specific aircraft electrical environments and equipment interfaces. Bench architecture is defined during the engineering phase based on equipment-under-test requirements and available aircraft documentation.",
    testingAndDocumentation:
      "Benches are verified against design requirements before delivery. Operator instructions, test procedures, and calibration records are provided.",
    relatedServiceSlugs: [
      "avionics-repair-wiring",
      "aircraft-parts-manufacturing",
    ],
    metaDescription:
      "Avianor Engineering designs and builds custom avionics test benches, harness-testing fixtures, breakout boxes, and diagnostic tooling for aviation maintenance and integration programs.",
  },
];

/** Additional services listed on the services overview page */
export const additionalServices: Array<{ title: string; description: string; iconName: string }> = [
  {
    title: "Avionics System Installation",
    description:
      "Engineering and installation support for avionics equipment across a wide range of aircraft types.",
    iconName: "CircuitBoard",
  },
  {
    title: "Communication-System Integration",
    description:
      "VHF, UHF, HF, and satellite communication system installation and integration.",
    iconName: "Radio",
  },
  {
    title: "Navigation-System Integration",
    description:
      "VOR, ILS, ADF, and GPS navigation system installation and interface engineering.",
    iconName: "Navigation",
  },
  {
    title: "Surveillance-System Integration",
    description:
      "Transponder, ADS-B, TCAS, and surveillance system installation and integration.",
    iconName: "ScanEye",
  },
  {
    title: "Electrical-Load-Analysis Support",
    description:
      "Electrical load analysis support for modification and installation projects.",
    iconName: "Zap",
  },
  {
    title: "Aircraft Wiring Inspection",
    description:
      "Inspection of aircraft wiring, connectors, and bonding for condition and compliance with applicable documentation.",
    iconName: "Cable",
  },
  {
    title: "Troubleshooting and Fault Isolation",
    description:
      "Systematic troubleshooting and fault isolation for aircraft electrical and avionics systems.",
    iconName: "SearchX",
  },
  {
    title: "Cockpit Modernization",
    description:
      "Panel layout, display upgrades, and cockpit modification engineering support.",
    iconName: "Gauge",
  },
  {
    title: "Mission-Equipment Integration",
    description:
      "Integration of specialized mission equipment into aircraft electrical and avionics systems.",
    iconName: "Settings",
  },
  {
    title: "Equipment-Rack Design",
    description:
      "Custom avionics rack and equipment tray design for aircraft and ground-test applications.",
    iconName: "Server",
  },
  {
    title: "Engineering Drawings",
    description:
      "Preparation of installation drawings, wiring diagrams, and modification documentation.",
    iconName: "DraftingCompass",
  },
  {
    title: "Installation Instructions",
    description:
      "Preparation of detailed installation instructions appropriate to project scope.",
    iconName: "FileCheck2",
  },
  {
    title: "Technical Publications",
    description:
      "Technical manual preparation and revision support for aircraft modification programs.",
    iconName: "BookOpen",
  },
  {
    title: "Configuration Management",
    description:
      "Configuration control and documentation management for aircraft modification projects.",
    iconName: "GitMerge",
  },
  {
    title: "Prototype Development",
    description:
      "Engineering support for prototype development phases of aircraft modification programs.",
    iconName: "FlaskConical",
  },
  {
    title: "Ground and Functional Testing",
    description:
      "Ground testing and functional verification services supporting installation and modification programs.",
    iconName: "CheckCircle",
  },
  {
    title: "Continued Technical Support",
    description:
      "Ongoing technical support following project delivery to assist operators and maintenance organizations.",
    iconName: "LifeBuoy",
  },
];

/** Lookup a service by slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Get related services for a given service */
export function getRelatedServices(service: Service): Service[] {
  return service.relatedServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);
}

