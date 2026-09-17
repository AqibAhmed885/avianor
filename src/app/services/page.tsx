import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { ContactCta } from "@/components/sections/contact-cta";
import { services, additionalServices } from "@/content/services";

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: "Aviation Engineering Services",
  description:
    "Avianor Engineering provides a full range of aircraft modification, avionics integration, and engineering support services — assessed individually per aircraft type and project requirements.",
  path: "/services",
});

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-20 sm:py-28"
        aria-labelledby="services-hero-heading"
      >
        {/* Decorative grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid opacity-20"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <SectionHeading
            label="What We Do"
            heading="Aviation Engineering Services"
            headingAs="h1"
            body="Avianor Engineering provides a full range of aircraft modification, avionics integration, and engineering support services. Each project is assessed individually based on aircraft type, requirements, and applicable documentation."
            inverted
          />
        </Container>
      </section>

      {/* ── Primary Services Grid ─────────────────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-24"
        aria-labelledby="primary-services-heading"
      >
        <Container>
          <SectionHeading
            label="Core Services"
            heading="Our Engineering Capabilities"
            headingAs="h2"
            body="Each service is scoped to the specific aircraft, operator requirements, and applicable regulatory pathway."
            className="mb-12"
          />

          <div
            id="primary-services-heading"
            className="sr-only"
            aria-hidden="true"
          />

          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
           
            aria-label="Primary engineering services"
          >
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard
                  slug={service.slug}
                  title={service.title}
                  shortTitle={service.shortTitle}
                  tagline={service.tagline}
                  iconName={service.iconName}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Additional Services ───────────────────────────────────────────── */}
      <section
        className="bg-brand-mist py-16 sm:py-24"
        aria-labelledby="additional-services-heading"
      >
        <Container>
          <SectionHeading
            id="additional-services-heading"
            label="Also Available"
            heading="Additional Engineering Services"
            headingAs="h2"
            body="Beyond our core offerings, Avianor Engineering supports a broad range of technical services across modification programs and avionics projects."
            className="mb-12"
          />

          <ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
           
            aria-label="Additional engineering services"
          >
            {additionalServices.map((svc) => (
              <li
                key={svc.title}
                className="flex gap-4 rounded-2xl border border-brand-mist bg-white p-5 shadow-sm"
              >
                {/* Icon */}
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo"
                  aria-hidden="true"
                >
                  <IconRenderer
                    name={svc.iconName}
                    className="h-5 w-5"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-1 text-sm font-bold leading-snug text-brand-midnight">
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body/70">
                    {svc.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <ContactCta />
    </>
  );
}
