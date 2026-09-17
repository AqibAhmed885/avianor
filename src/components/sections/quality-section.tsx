import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRenderer } from "@/components/ui/icon-renderer";

const qualityPoints = [
  {
    title: "Safety-Focused Engineering",
    description:
      "Engineering decisions are made with operational safety as the primary consideration at every project stage.",
    iconName: "ShieldCheck",
  },
  {
    title: "Documentation Control",
    description:
      "All modification and installation work is supported by controlled engineering documentation appropriate to the project scope.",
    iconName: "FileCheck2",
  },
  {
    title: "Design Reviews",
    description:
      "Engineering approaches are reviewed before execution to identify risks and confirm scope alignment.",
    iconName: "CheckSquare",
  },
  {
    title: "Material and Component Records",
    description:
      "Material traceability and component records are maintained where required by the project and applicable processes.",
    iconName: "ClipboardList",
  },
  {
    title: "Functional Testing",
    description:
      "Installed systems are verified against defined acceptance criteria before project delivery.",
    iconName: "BadgeCheck",
  },
  {
    title: "Configuration Management",
    description:
      "Configuration records are maintained to support ongoing maintenance and future modifications.",
    iconName: "GitMerge",
  },
];

export function QualitySection() {
  return (
    <section
      className="bg-brand-midnight py-20 sm:py-24"
      aria-labelledby="quality-section-heading"
    >
      <Container>
        <SectionHeading
          id="quality-section-heading"
          label="Quality and Safety"
          heading="Engineering Accountability at Every Stage"
          body="Our engineering approach addresses safety requirements, documentation, testing, and configuration control throughout the project lifecycle."
          inverted
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualityPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-vector/15 text-violet-vector">
                <IconRenderer
                  name={point.iconName}
                  className="h-5 w-5"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mb-2 text-sm font-bold text-white">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-blue-100/60">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

