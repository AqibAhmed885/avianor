import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureList } from "@/components/ui/feature-list";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { ContactCta } from "@/components/sections/contact-cta";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const generateMetadata = (): Metadata =>
  buildMetadata({
    title: "About",
    description:
      "Learn about Avianor Engineering — an aviation engineering company focused on aircraft systems modification, integration, repair, manufacturing, testing, and technical support.",
    path: "/about",
  });

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const brandValues = [
  {
    iconName: "ShieldCheck",
    title: "Safety",
    description:
      "Every engineering decision is evaluated against its impact on aircraft safety, airworthiness, and operational risk.",
  },
  {
    iconName: "DraftingCompass",
    title: "Precision",
    description:
      "We apply rigorous engineering discipline to design, documentation, and implementation — minimising ambiguity at every stage.",
  },
  {
    iconName: "BadgeCheck",
    title: "Accountability",
    description:
      "We stand behind our work with clear documentation, defined acceptance criteria, and continued support after project delivery.",
  },
  {
    iconName: "FlaskConical",
    title: "Innovation",
    description:
      "We apply creative engineering thinking to solve complex integration challenges across diverse aircraft platforms.",
  },
  {
    iconName: "Share2",
    title: "Collaboration",
    description:
      "We work closely with operators, maintainers, and project stakeholders to ensure engineering outputs serve real operational needs.",
  },
  {
    iconName: "Gauge",
    title: "Continuous Improvement",
    description:
      "We refine our processes, tools, and methods with each project — building a stronger engineering foundation over time.",
  },
] as const;

const philosophyPrinciples = [
  {
    title: "Documentation-driven engineering",
    description:
      "Every design decision is captured in controlled drawings, specifications, and records — not held informally in someone's head.",
  },
  {
    title: "Defined acceptance criteria before installation",
    description:
      "We establish what 'done' looks like before work begins, so testing is structured and objective.",
  },
  {
    title: "Safety-conscious scope management",
    description:
      "We do not expand scope in ways that compromise safety or airworthiness, even under schedule pressure.",
  },
  {
    title: "Configuration control throughout",
    description:
      "Changes are tracked, reviewed, and reflected in updated documentation — aircraft leave projects in a known, documented state.",
  },
];

const marketsServed = [
  { label: "Commercial Aviation", iconName: "Navigation" },
  { label: "Business Aviation", iconName: "DraftingCompass" },
  { label: "Helicopter Operations", iconName: "Radar" },
  { label: "Air Ambulance / Medevac", iconName: "HeartPulse" },
  { label: "Special Mission Aircraft", iconName: "ScanEye" },
  { label: "Government and Military", iconName: "ShieldCheck" },
  { label: "MRO Organisations", iconName: "Wrench" },
  { label: "Modernisation Programs", iconName: "Gauge" },
] as const;

const whyAvianor = [
  {
    title: "Technical depth across aircraft systems",
    description:
      "Our team brings hands-on experience across avionics, electrical, mechanical, and software domains — enabling a unified engineering approach rather than fragmented specialists.",
  },
  {
    title: "Structured documentation for every project",
    description:
      "Clients receive complete, controlled engineering packages — drawings, installation instructions, test records, and configuration data — not just a completed aircraft.",
  },
  {
    title: "Project-specific engineering approach",
    description:
      "We scope each engagement around your aircraft type, operational requirements, and constraints — avoiding template-driven solutions that miss project-specific details.",
  },
  {
    title: "Continuity from design through delivery",
    description:
      "The same engineering team that defines the solution carries it through integration, testing, and documentation — reducing handoff errors and rework.",
  },
  {
    title: "Ongoing technical support post-delivery",
    description:
      "We remain accessible for technical questions, troubleshooting, and support after project closure — providing operators with a known engineering contact for their aircraft.",
  },
  {
    title: "Transparent, accountable project execution",
    description:
      "We communicate scope boundaries clearly, flag issues early, and deliver what we commit to — with traceability back to agreed requirements.",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-24 sm:py-32"
        aria-labelledby="about-hero-heading"
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
              Our Story
            </p>
            <h1
              id="about-hero-heading"
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Aviation Engineering Built Around{" "}
              <span className="bg-brand-gradient-subtle bg-clip-text text-transparent">
                Operational Reliability
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">
              Avianor Engineering was founded to close the gap between complex
              aircraft modification requirements and the engineering rigour
              needed to deliver them safely and reliably. We exist to support
              operators who need a capable, accountable engineering partner —
              from initial requirements through post-delivery support.
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Company Overview                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-white py-20 sm:py-24"
        aria-labelledby="company-overview-heading"
      >
        <Container narrow>
          {/* Placeholder disclaimer */}
          <div
            className="mb-10 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4"
            role="note"
            aria-label="Content placeholder notice"
          >
            <AlertTriangle
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-amber-800">
              <strong className="font-semibold">Editorial placeholder:</strong>{" "}
              [FOUNDING YEAR, LOCATION, STAFF CREDENTIALS — Replace with
              verified information before launch]
            </p>
          </div>

          <SectionHeading
            label="Who We Are"
            heading="An Engineering Company for Aircraft Systems"
            headingAs="h2"
            align="left"
            className="mb-10"
          />

          <div className="space-y-6 text-base leading-relaxed text-body/80">
            <p>
              Avianor Engineering is an aviation engineering company
              specialising in aircraft systems modification, avionics
              integration, component repair, parts manufacturing, functional
              testing, and technical support. Founded in{" "}
              <strong className="font-semibold text-brand-midnight">
                [FOUNDING YEAR — PLACEHOLDER]
              </strong>
              , the company was built around a straightforward premise: aircraft
              operators and maintenance organisations deserve an engineering
              partner with the technical depth, documentation discipline, and
              operational awareness to deliver modifications that work reliably
              in service.
            </p>
            <p>
              Based in{" "}
              <strong className="font-semibold text-brand-midnight">
                [LOCATION — PLACEHOLDER]
              </strong>
              , our team brings experience across fixed-wing and rotary-wing
              platforms, covering commercial, business, helicopter, medevac, and
              special mission aircraft. We work across the full engineering
              lifecycle — from requirements definition and system architecture
              through integration, manufacturing, testing, documentation, and
              continued field support. This end-to-end involvement means we
              understand the downstream implications of early engineering
              decisions, and we plan accordingly.
            </p>
            <p>
              We do not position ourselves as a mass-market solution provider.
              Our work is project-specific, technically grounded, and backed by
              controlled documentation that reflects what was actually designed,
              built, and verified — not what was originally planned. Clients
              engage us when they need engineering accountability alongside
              engineering capability.
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Mission and Vision                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-brand-mist py-20 sm:py-24"
        aria-labelledby="mission-vision-heading"
      >
        <Container>
          <SectionHeading
            label="Purpose"
            heading="Mission and Vision"
            headingAs="h2"
            align="center"
            className="mx-auto mb-14"
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-brand-mist bg-white p-8 shadow-card">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
                <IconRenderer
                  name="CheckCircle"
                  className="h-5 w-5"
                  strokeWidth={1.75}
                />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-indigo">
                Our Mission
              </p>
              <p className="text-lg font-semibold leading-snug text-brand-midnight">
                To deliver practical aviation-engineering solutions that improve
                aircraft capability, reliability, and operational readiness.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-brand-mist bg-white p-8 shadow-card">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
                <IconRenderer
                  name="Navigation"
                  className="h-5 w-5"
                  strokeWidth={1.75}
                />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-indigo">
                Our Vision
              </p>
              <p className="text-lg font-semibold leading-snug text-brand-midnight">
                To be a trusted engineering partner for aviation operators
                requiring technical precision, accountability, and continued
                support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Brand Values                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-brand-ice py-20 sm:py-24"
        aria-labelledby="brand-values-heading"
      >
        <Container>
          <SectionHeading
            label="What Guides Us"
            heading="Our Engineering Values"
            headingAs="h2"
            body="These principles shape how we approach every project — from initial scoping through post-delivery support."
            align="center"
            className="mx-auto mb-14"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-brand-mist bg-white p-7 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo ring-1 ring-brand-indigo/10">
                  <IconRenderer
                    name={value.iconName}
                    className="h-5 w-5"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-brand-midnight">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-body/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Engineering Philosophy                                              */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-white py-20 sm:py-24"
        aria-labelledby="philosophy-heading"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            {/* Left column — prose */}
            <div>
              <SectionHeading
                label="How We Work"
                heading="Engineering Philosophy"
                headingAs="h2"
                className="mb-8"
              />
              <div className="space-y-5 text-base leading-relaxed text-body/80">
                <p>
                  At Avianor Engineering, engineering decisions are not made
                  informally. Every modification, integration, or repair project
                  begins with a clear understanding of the aircraft&apos;s
                  existing systems, the applicable documentation baseline, and
                  the technical requirements that define success. We treat
                  engineering definition as foundational — not as something to
                  catch up on after installation.
                </p>
                <p>
                  Safety is embedded into how we scope and plan work. Before we
                  commit to a design approach, we consider its effects on
                  adjacent aircraft systems, its maintainability in the field,
                  and whether it introduces risk that outweighs its operational
                  benefit. This isn&apos;t a quality gate at the end of a
                  project — it&apos;s how we think throughout the process.
                </p>
                <p>
                  Documentation discipline is non-negotiable. An aircraft that
                  leaves a project without an accurate, controlled engineering
                  record creates risk for everyone who works on it next. We
                  build documentation as we go — not as a hurried final step —
                  so the delivered record reflects what was actually designed,
                  installed, and tested.
                </p>
              </div>
            </div>

            {/* Right column — principle list */}
            <div className="rounded-2xl border border-brand-mist bg-brand-ice p-8 lg:sticky lg:top-24">
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-indigo">
                Core Principles
              </p>
              <ul className="space-y-6">
                {philosophyPrinciples.map((principle, index) => (
                  <li key={principle.title} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-indigo text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="mb-1 text-sm font-bold text-brand-midnight">
                        {principle.title}
                      </p>
                      <p className="text-sm leading-relaxed text-body/70">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Markets Served                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-brand-mist py-20 sm:py-24"
        aria-labelledby="markets-heading"
      >
        <Container>
          <SectionHeading
            label="Who We Serve"
            heading="Aviation Markets"
            headingAs="h2"
            body="Avianor Engineering works with operators, MROs, and programme managers across a range of civil and government aviation segments."
            align="center"
            className="mx-auto mb-14"
          />

          <ul
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
           
            aria-label="Aviation markets served"
          >
            {marketsServed.map((market) => (
              <li
                key={market.label}
                className="flex items-center gap-3 rounded-xl border border-brand-mist bg-white px-5 py-4 shadow-card"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-ice text-brand-indigo">
                  <IconRenderer
                    name={market.iconName}
                    className="h-4 w-4"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="text-sm font-semibold text-brand-midnight">
                  {market.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Safety Approach                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-white py-20 sm:py-24"
        aria-labelledby="safety-heading"
      >
        <Container narrow>
          <SectionHeading
            label="Safety Approach"
            heading="How We Approach Safety in Engineering"
            headingAs="h2"
            className="mb-10"
          />

          <div className="space-y-5 text-base leading-relaxed text-body/80">
            <p>
              All engineering work at Avianor Engineering is conducted with
              reference to applicable aircraft documentation — including aircraft
              maintenance manuals, wiring diagrams, structural repair manuals,
              component maintenance manuals, and type-specific engineering data.
              We do not fabricate or install to informal standards; every
              deliverable traces to a documented engineering basis.
            </p>
            <p>
              We apply approved procedures for fabrication, wiring, bonding, and
              installation activities, and we maintain configuration control
              throughout the project lifecycle. Changes to scope or design are
              evaluated for technical and safety impact before implementation,
              and revised documentation is issued accordingly.
            </p>
            <p>
              Testing requirements are defined before installation begins.
              Project acceptance criteria are documented, and all testing is
              conducted and recorded systematically — providing a clear record
              of what was tested, what was observed, and what the pass criteria
              were. Aircraft are not delivered until they have met the agreed
              acceptance standard.
            </p>
            <p>
              Safety and airworthiness responsibility for any completed
              modification remains with the applicable regulatory authority and
              the aircraft owner-operator. Avianor Engineering provides
              engineering services in support of modification programmes and does
              not make regulatory conformity or certification claims on behalf of
              clients.
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why Avianor                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-brand-midnight py-20 sm:py-24"
        aria-labelledby="why-avianor-heading"
      >
        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid bg-hero-grid opacity-30"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <SectionHeading
            label="Why Avianor"
            heading="Why Operators Choose Avianor Engineering"
            headingAs="h2"
            inverted
            align="center"
            className="mx-auto mb-14"
          />

          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
           
          >
            {whyAvianor.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-vector"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="mb-2 text-sm font-bold text-white">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-blue-100/65">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contact CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <ContactCta
        heading="Ready to discuss your next aircraft project?"
        body="Contact the Avianor Engineering team to talk through your requirements, timeline, and technical scope. We'll tell you honestly what we can do."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
