import type { Metadata } from "next";
import { Info } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { ContactCta } from "@/components/sections/contact-cta";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: "Quality and Safety Engineering",
  description:
    "Avianor Engineering applies structured quality and safety engineering principles across every aircraft modification, avionics integration, and manufacturing project — from requirements traceability through inspection, testing, and continued support.",
  path: "/quality",
});

/* ─── Quality principles data ───────────────────────────────────────────── */

const qualityPrinciples = [
  {
    title: "Safety-Focused Engineering",
    description:
      "Engineering decisions are made with operational safety as the primary consideration at every stage of a project, from initial scope definition through final delivery.",
    iconName: "ShieldCheck",
  },
  {
    title: "Requirements Traceability",
    description:
      "Technical requirements are captured at the outset and traced through design, fabrication, and testing to ensure the delivered solution addresses the defined project scope.",
    iconName: "GitMerge",
  },
  {
    title: "Controlled Documentation",
    description:
      "Engineering documentation is maintained under revision control throughout the project lifecycle to ensure currency, accuracy, and auditability.",
    iconName: "FileCheck2",
  },
  {
    title: "Design Reviews",
    description:
      "Engineering approaches are reviewed before execution to identify technical risks, confirm scope alignment, and verify that proposed solutions meet project requirements.",
    iconName: "CheckSquare",
  },
  {
    title: "Material and Component Records",
    description:
      "Material traceability and component records are maintained where required by the project, applicable technical standards, and the approval pathway.",
    iconName: "ClipboardList",
  },
  {
    title: "Inspection",
    description:
      "Fabricated parts, assemblies, and installations are inspected against engineering drawings and defined acceptance criteria before delivery or progression to the next stage.",
    iconName: "ScanEye",
  },
  {
    title: "Functional Testing",
    description:
      "Installed systems and delivered equipment are verified through functional testing against project-specific acceptance criteria before project sign-off.",
    iconName: "FlaskConical",
  },
  {
    title: "Configuration Management",
    description:
      "Configuration records — including drawing revisions, component selections, and approval documentation — are maintained to support ongoing maintenance and future modifications.",
    iconName: "Settings",
  },
  {
    title: "Non-Conformance Handling",
    description:
      "Identified non-conformances are documented, assessed, and resolved through a defined process before affected items proceed to delivery.",
    iconName: "AlertCircle",
  },
  {
    title: "Customer Acceptance",
    description:
      "Projects include a defined acceptance process, giving the customer the opportunity to verify that deliverables meet the agreed scope and technical requirements.",
    iconName: "ClipboardCheck",
  },
  {
    title: "Continued Support",
    description:
      "Avianor Engineering provides ongoing technical support following project delivery to assist operators and maintenance organizations with questions relating to the delivered work.",
    iconName: "LifeBuoy",
  },
] as const;

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function QualityPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-20 sm:py-28"
        aria-labelledby="quality-hero-heading"
      >
        {/* Technical grid background */}
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid opacity-50"
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-midnight via-brand-midnight/95 to-brand-indigo/25"
          aria-hidden="true"
        />
        {/* Top accent line */}
        <div
          className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-vector/40 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-vector">
            Quality &amp; Safety
          </p>
          <h1
            id="quality-hero-heading"
            className="mb-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Quality and Safety Engineering
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">
            Avianor Engineering applies structured quality and safety
            engineering principles across every project — from requirements
            traceability and controlled documentation through inspection,
            functional testing, and continued support after delivery.
          </p>
        </Container>
      </section>

      {/* ── Quality principles ────────────────────────────────────────────── */}
      <section
        className="bg-white py-20 sm:py-28"
        aria-labelledby="quality-principles-heading"
      >
        <Container>
          <SectionHeading
            id="quality-principles-heading"
            label="Engineering Principles"
            heading="Our Quality Principles"
            body="Eleven core principles guide how Avianor Engineering approaches quality and safety across every project, regardless of scope or aircraft type."
            className="mb-14"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualityPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-brand-mist bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
                  <IconRenderer
                    name={principle.iconName}
                    className="h-5 w-5"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-brand-midnight">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-body/70">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Regulatory statement callout ──────────────────────────────────── */}
      <section aria-label="Regulatory statement">
        <Container className="pb-10">
          <div
            className="flex gap-4 rounded-2xl border border-brand-indigo/25 bg-brand-ice p-6 sm:p-8"
            role="note"
          >
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-indigo"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-body/80 sm:text-base">
              <span className="font-semibold text-brand-midnight">
                Regulatory context:{" "}
              </span>
              Applicable regulatory requirements, approval pathways, and
              authorized release documentation vary by aircraft, modification,
              operator, and jurisdiction. Avianor Engineering works with project
              stakeholders to identify and address the applicable requirements for
              each program on a project-specific basis.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Engineering standards ─────────────────────────────────────────── */}
      <section
        className="bg-white py-20 sm:py-28"
        aria-labelledby="engineering-standards-heading"
      >
        <Container narrow>
          <SectionHeading
            id="engineering-standards-heading"
            label="Engineering Standards"
            heading="How We Work"
            body="The practices that define Avianor Engineering's approach to technical work."
            className="mb-10"
          />

          <div className="space-y-6 text-base leading-relaxed text-body/80">
            <p>
              All engineering work references applicable aircraft documentation,
              including aircraft maintenance manuals, wiring diagram manuals,
              structural repair manuals, and manufacturer-issued service
              information relevant to the modification scope. Where approved
              data exists and is applicable, engineering leverages that data
              rather than duplicating it. Where new engineering data is required,
              it is developed to the standard appropriate to the aircraft type
              and approval pathway.
            </p>

            <p>
              Design activities are carried out under approved procedures,
              including drawing control, design review, and configuration
              management practices appropriate to the project. Engineering
              drawings, wiring diagrams, parts lists, and installation
              instructions are prepared, reviewed, and revised under controlled
              processes. Changes to approved configurations are assessed and
              documented before implementation to maintain the integrity of the
              engineering record throughout the aircraft&apos;s service life.
            </p>

            <p>
              Testing requirements and project acceptance criteria are defined
              during the engineering phase and documented in project-specific
              test plans or acceptance checklists. Ground testing, functional
              verification, and inspection results are recorded and retained as
              part of the project documentation package. Where post-delivery
              technical questions arise, Avianor Engineering remains accessible
              to support operators and maintenance organizations with the
              information and documentation needed to address those questions.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <ContactCta
        heading="Questions about our engineering quality approach?"
        body="Contact the Avianor Engineering team to discuss your project requirements and how our quality processes apply to your program."
      />
    </>
  );
}
