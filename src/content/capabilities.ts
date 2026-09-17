export interface Capability {
  title: string;
  description: string;
  iconName: string;
}

export interface CapabilityGroup {
  label: string;
  capabilities: Capability[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    label: "Systems Engineering",
    capabilities: [
      {
        title: "Requirements Definition",
        description:
          "Capturing and documenting technical and operational requirements to drive engineering scope and design decisions.",
        iconName: "ClipboardList",
      },
      {
        title: "System Architecture",
        description:
          "Defining system architecture, interface allocations, and functional block structures for avionics and aircraft systems.",
        iconName: "Share2",
      },
      {
        title: "Configuration Management",
        description:
          "Maintaining configuration control of engineering documents, drawings, and modification records throughout the project lifecycle.",
        iconName: "GitMerge",
      },
    ],
  },
  {
    label: "Integration and Installation",
    capabilities: [
      {
        title: "Mechanical Integration",
        description:
          "Planning and engineering the physical installation of avionics, equipment racks, mounting hardware, and structural attachments.",
        iconName: "Wrench",
      },
      {
        title: "Electrical Integration",
        description:
          "Designing and verifying electrical power, signal, and bonding interfaces for aircraft systems.",
        iconName: "Zap",
      },
      {
        title: "Avionics Interfaces",
        description:
          "Engineering data bus, analog, and discrete interfaces between avionics systems and aircraft sensors.",
        iconName: "CircuitBoard",
      },
      {
        title: "Equipment Installation Planning",
        description:
          "Developing installation plans, procedures, and instructions to guide maintainers and technicians.",
        iconName: "ClipboardCheck",
      },
    ],
  },
  {
    label: "Electrical and Wiring",
    capabilities: [
      {
        title: "Wiring and Harness Engineering",
        description:
          "Designing wiring harnesses, routing plans, connector selections, and termination specifications.",
        iconName: "Cable",
      },
      {
        title: "Electrical Load Analysis Support",
        description:
          "Analyzing aircraft electrical bus loads to support modification and addition of new equipment.",
        iconName: "BarChart3",
      },
      {
        title: "Bonding and Shielding",
        description:
          "Engineering electrical bonding and shielding plans appropriate to avionics and aircraft electromagnetic requirements.",
        iconName: "Antenna",
      },
    ],
  },
  {
    label: "Manufacturing",
    capabilities: [
      {
        title: "Manufacturing Support",
        description:
          "Supporting prototype and low-volume manufacturing of aircraft parts, panels, and wiring harnesses under drawing control.",
        iconName: "Factory",
      },
      {
        title: "Sheet-Metal and Machined Parts",
        description:
          "Fabricating brackets, panels, mounting hardware, and structural parts to engineering drawings.",
        iconName: "Scissors",
      },
      {
        title: "Prototype Development",
        description:
          "Engineering and building prototype components to support modification program development.",
        iconName: "FlaskConical",
      },
    ],
  },
  {
    label: "Testing and Verification",
    capabilities: [
      {
        title: "Ground Testing",
        description:
          "Planning and executing ground functional tests to verify aircraft system installations against acceptance criteria.",
        iconName: "CheckSquare",
      },
      {
        title: "Functional Verification",
        description:
          "Systematic verification of installed systems covering power, interface, and operational function.",
        iconName: "ShieldCheck",
      },
      {
        title: "Test Bench Development",
        description:
          "Designing and building custom test benches to support avionics and harness testing outside the aircraft.",
        iconName: "MonitorCog",
      },
      {
        title: "Diagnostic Procedures",
        description:
          "Developing systematic fault-isolation and diagnostic procedures for aircraft and bench use.",
        iconName: "SearchCode",
      },
    ],
  },
  {
    label: "Documentation and Support",
    capabilities: [
      {
        title: "Technical Documentation",
        description:
          "Preparing installation drawings, wiring diagrams, installation instructions, and modification records.",
        iconName: "FileCheck2",
      },
      {
        title: "Continued Technical Support",
        description:
          "Providing ongoing technical support following project delivery to assist operators and maintenance organizations.",
        iconName: "LifeBuoy",
      },
      {
        title: "Analog-to-Digital Modernization",
        description:
          "Engineering legacy cockpit instrumentation replacement with modern digital display systems.",
        iconName: "Gauge",
      },
    ],
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We discuss your aircraft, operational requirements, and project objectives to understand scope and constraints.",
  },
  {
    step: 2,
    title: "Aircraft and System Assessment",
    description:
      "We review existing aircraft systems, documentation, wiring, and physical constraints relevant to the project.",
  },
  {
    step: 3,
    title: "Engineering Definition",
    description:
      "We define the technical approach, system architecture, interface requirements, and project scope.",
  },
  {
    step: 4,
    title: "Design and Planning",
    description:
      "We develop engineering drawings, harness designs, installation instructions, and project documentation.",
  },
  {
    step: 5,
    title: "Manufacturing or Integration",
    description:
      "We fabricate components, harnesses, and hardware, or integrate customer-supplied equipment as required.",
  },
  {
    step: 6,
    title: "Installation",
    description:
      "We install systems and components per engineering documentation with appropriate workmanship standards.",
  },
  {
    step: 7,
    title: "Testing and Verification",
    description:
      "We conduct ground and functional testing to verify installation against project acceptance criteria.",
  },
  {
    step: 8,
    title: "Documentation and Delivery",
    description:
      "We deliver completed project documentation — drawings, test records, installation data, and configuration records.",
  },
  {
    step: 9,
    title: "Ongoing Technical Support",
    description:
      "We remain available for technical questions, troubleshooting, and continued support following delivery.",
  },
];

