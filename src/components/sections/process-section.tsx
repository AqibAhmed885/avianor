import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessStep } from "@/components/ui/process-step";

const steps = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your aircraft, operational requirements, and project objectives.",
  },
  {
    step: 2,
    title: "Aircraft and System Assessment",
    description: "We review existing aircraft systems, wiring, and constraints relevant to the project.",
  },
  {
    step: 3,
    title: "Engineering Definition",
    description: "We define the technical approach, architecture, and project scope.",
  },
  {
    step: 4,
    title: "Design and Planning",
    description: "We develop drawings, installation instructions, and project documentation.",
  },
  {
    step: 5,
    title: "Manufacturing or Integration",
    description: "We fabricate components and integrate equipment as required.",
  },
  {
    step: 6,
    title: "Installation and Testing",
    description: "We install and verify systems against project acceptance criteria.",
  },
  {
    step: 7,
    title: "Documentation and Delivery",
    description: "We deliver completed configuration records, drawings, and test data.",
  },
  {
    step: 8,
    title: "Ongoing Technical Support",
    description: "We remain available for questions and continued support after delivery.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="process-section-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="process-section-heading"
            label="How We Work"
            heading="Our Engineering Process"
            body="Every project follows a structured process — from initial consultation through final documentation and ongoing support. This gives our clients a clear view of progress and deliverables at every stage."
          />

          <ol className="space-y-0" aria-label="Engineering process steps">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

