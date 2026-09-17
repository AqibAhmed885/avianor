import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRenderer } from "@/components/ui/icon-renderer";

const capabilityItems = [
  {
    title: "System Design and Integration",
    description: "Interface architecture and system integration across avionics and aircraft systems.",
    iconName: "Share2",
  },
  {
    title: "Aircraft Modification Support",
    description: "Engineering definition, drawings, and technical support for aircraft modification programs.",
    iconName: "DraftingCompass",
  },
  {
    title: "Avionics Troubleshooting",
    description: "Systematic fault isolation for avionics and electrical systems.",
    iconName: "SearchCode",
  },
  {
    title: "Electrical Harness Design",
    description: "Drawing-controlled wiring harness design, fabrication, and testing.",
    iconName: "Cable",
  },
  {
    title: "Equipment Installation",
    description: "Installation planning, instructions, and technical support.",
    iconName: "Wrench",
  },
  {
    title: "Analog-to-Digital Modernization",
    description: "Legacy instrument replacement with modern digital display integration.",
    iconName: "Gauge",
  },
  {
    title: "Aircraft Parts Manufacturing",
    description: "Drawing-controlled fabrication of brackets, panels, and components.",
    iconName: "Factory",
  },
  {
    title: "Test-Bench Development",
    description: "Custom test bench design and fabrication for avionics and harness testing.",
    iconName: "MonitorCog",
  },
  {
    title: "Functional Testing",
    description: "Ground and functional testing against project-specific acceptance criteria.",
    iconName: "CheckSquare",
  },
  {
    title: "Documentation and Technical Support",
    description: "Technical publications, configuration records, and ongoing project support.",
    iconName: "FileCheck2",
  },
];

export function CapabilitiesSection() {
  return (
    <section
      className="bg-brand-mist py-20 sm:py-24"
      aria-labelledby="capabilities-section-heading"
    >
      <Container>
        <SectionHeading
          id="capabilities-section-heading"
          label="Engineering Capabilities"
          heading="What Our Engineering Team Covers"
          body="Avianor Engineering applies engineering discipline across the full modification lifecycle — from requirements definition through documentation and continued support."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {capabilityItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-mist bg-white p-5 shadow-card"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
                <IconRenderer name={item.iconName} className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mb-1.5 text-sm font-bold text-brand-midnight">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-body/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

