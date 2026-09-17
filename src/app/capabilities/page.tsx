import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { capabilityGroups, workflowSteps } from "@/content/capabilities";
import type { CapabilityGroup } from "@/content/capabilities";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { ContactCta } from "@/components/sections/contact-cta";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const generateMetadata = (): Metadata =>
  buildMetadata({
    title: "Capabilities",
    description:
      "Explore Avianor Engineering's full range of aviation engineering capabilities — systems engineering, integration, electrical and wiring, manufacturing, testing and verification, and documentation support.",
    path: "/capabilities",
  });

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Individual capability card used inside each group section */
function CapabilityCard({
  title,
  description,
  iconName,
}: {
  title: string;
  description: string;
  iconName: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-brand-mist bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
        <IconRenderer name={iconName} className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="mb-1.5 text-sm font-bold leading-snug text-brand-midnight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-body/70">{description}</p>
      </div>
    </div>
  );
}

/** A single capability group section with alternating background */
function CapabilityGroupSection({
  group,
  index,
}: {
  group: CapabilityGroup;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        isEven ? "bg-white" : "bg-brand-ice",
      )}
      aria-labelledby={`capability-group-${index}-heading`}
    >
      <Container>
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-brand-mist" aria-hidden="true" />
          <h2
            id={`capability-group-${index}-heading`}
            className="flex-shrink-0 rounded-full border border-brand-indigo/20 bg-brand-ice px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-indigo"
          >
            {group.label}
          </h2>
          <div className="h-px flex-1 bg-brand-mist" aria-hidden="true" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {group.capabilities.map((cap) => (
            <CapabilityCard
              key={cap.title}
              title={cap.title}
              description={cap.description}
              iconName={cap.iconName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function CapabilitiesPage() {
  // Flatten all individual capability titles for the quick-reference section
  const allCapabilityTitles = capabilityGroups.flatMap((group) =>
    group.capabilities.map((cap) => cap.title),
  );

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-24 sm:py-32"
        aria-labelledby="capabilities-hero-heading"
      >
        {/* Technical grid background */}
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid bg-hero-grid opacity-60"
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-midnight via-brand-midnight/95 to-brand-indigo/30"
          aria-hidden="true"
        />
        {/* Decorative top line */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-vector/40 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-violet-vector">
              Engineering Capabilities
            </p>
            <h1
              id="capabilities-hero-heading"
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              A Structured Approach to{" "}
              <span className="bg-brand-gradient-subtle bg-clip-text text-transparent">
                Every Aircraft Project
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">
              Avianor Engineering applies disciplined engineering methods across
              the complete modification lifecycle — from requirements definition
              and system architecture through integration, manufacturing, testing,
              documentation, and continued technical support. Our capabilities
              span six core engineering domains, structured to address the full
              scope of aircraft systems work.
            </p>

            {/* Capability group pill strip */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100/40">
                Capability Domains
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {capabilityGroups.map((group) => (
                  <li
                    key={group.label}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-100/70"
                  >
                    {group.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Capabilities Grid — one section per group, alternating bg          */}
      {/* ------------------------------------------------------------------ */}
      {capabilityGroups.map((group, index) => (
        <CapabilityGroupSection key={group.label} group={group} index={index} />
      ))}

      {/* ------------------------------------------------------------------ */}
      {/* Engineering Workflow                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-brand-mist py-20 sm:py-24"
        aria-labelledby="workflow-heading"
      >
        <Container>
          <SectionHeading
            label="Our Process"
            heading="Engineering Workflow"
            headingAs="h2"
            body="Every Avianor Engineering project follows a structured workflow designed to ensure technical rigour, clear communication, and accountable delivery at each stage."
            align="center"
            className="mx-auto mb-14"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex gap-4 rounded-2xl border border-brand-mist bg-white p-6 shadow-card"
              >
                {/* Step number badge */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-indigo text-xs font-bold text-white shadow-sm">
                  {String(step.step).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="mb-1.5 text-sm font-bold text-brand-midnight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Quick Reference List                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-white py-20 sm:py-24"
        aria-labelledby="quick-ref-heading"
      >
        <Container>
          <SectionHeading
            label="Quick Reference"
            heading="Full Capabilities Index"
            headingAs="h2"
            body="A complete list of individual capabilities across all Avianor Engineering domains."
            align="center"
            className="mx-auto mb-12"
          />

          <ul
            className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
           
            aria-label="All engineering capabilities"
          >
            {allCapabilityTitles.map((title) => (
              <li
                key={title}
                className="flex items-center gap-3 text-sm text-body/80"
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-indigo"
                  aria-hidden="true"
                />
                <span className="font-medium text-brand-midnight">{title}</span>
              </li>
            ))}
          </ul>

          {/* Count badge */}
          <p className="mt-10 text-center text-sm text-body/50">
            <span className="font-semibold text-brand-indigo">
              {allCapabilityTitles.length}
            </span>{" "}
            individual capabilities across{" "}
            <span className="font-semibold text-brand-indigo">
              {capabilityGroups.length}
            </span>{" "}
            engineering domains
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contact CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <ContactCta
        heading="Need engineering support for your aircraft project?"
        body="Talk to the Avianor Engineering team about how our capabilities apply to your specific aircraft, modification scope, and operational requirements."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
