import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ServiceCard } from "@/components/ui/service-card";
import { ProcessStep } from "@/components/ui/process-step";
import { ContactCta } from "@/components/sections/contact-cta";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
} from "@/content/services";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ─── Static Params ──────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.shortTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  /* JSON-LD structured data */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
    serviceType: service.shortTitle,
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Breadcrumbs ────────────────────────────────────────────────── */}
      <div className="border-b border-brand-mist bg-white py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
        </Container>
      </div>

      {/* ── Page Header ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-16 sm:py-24"
        aria-labelledby="service-page-heading"
      >
        {/* Decorative grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid opacity-20"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1
              id="service-page-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {service.title}
            </h1>
            <p className="text-lg leading-relaxed text-blue-100/80">
              {service.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Overview ───────────────────────────────────────────────────── */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="overview-heading"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
            {/* Overview prose */}
            <div className="lg:col-span-2">
              <h2 id="overview-heading" className="sr-only">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-body/80 sm:text-lg">
                {service.overview}
              </p>
            </div>

            {/* Project Snapshot sidebar */}
            <aside
              className="rounded-2xl border border-brand-mist bg-brand-ice p-6"
              aria-label="Project Snapshot"
            >
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-indigo">
                Project Snapshot
              </h3>
              <p className="mb-3 text-sm font-semibold text-brand-midnight">
                Typical Applications
              </p>
              <ul className="space-y-2">
                {service.applications.map((app) => (
                  <li
                    key={app.title}
                    className="flex items-start gap-2 text-sm leading-relaxed text-body/75"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-indigo"
                      aria-hidden="true"
                    />
                    {app.title}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Core Capabilities ──────────────────────────────────────────── */}
      <section
        className="bg-brand-mist py-14 sm:py-20"
        aria-labelledby="capabilities-heading"
      >
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Core Capabilities"
            headingAs="h2"
            className="mb-10"
          />

          <ul
            className="grid gap-5 sm:grid-cols-2"
           
            aria-label="Core engineering capabilities"
          >
            {service.capabilities.map((cap) => (
              <li
                key={cap.title}
                className="rounded-2xl border border-brand-mist bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-sm font-bold leading-snug text-brand-midnight">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-body/70">
                  {cap.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Engineering Process ────────────────────────────────────────── */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="process-heading"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                label="How We Work"
                heading="Project Engineering Process"
                headingAs="h2"
                className="mb-10"
              />

              <div aria-label="Engineering process steps">
                {service.processSteps.map((step, index) => (
                  <ProcessStep
                    key={step.step}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    isLast={index === service.processSteps.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Installation Considerations lives alongside the process on lg+ */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </Container>
      </section>

      {/* ── Installation Considerations ────────────────────────────────── */}
      <section
        className="bg-brand-ice py-14 sm:py-20"
        aria-labelledby="installation-heading"
      >
        <Container narrow>
          <SectionHeading
            label="Planning"
            heading="Installation Considerations"
            headingAs="h2"
            className="mb-6"
          />
          <p className="text-base leading-relaxed text-body/80">
            {service.installationNotes}
          </p>
        </Container>
      </section>

      {/* ── Testing and Documentation ──────────────────────────────────── */}
      <section
        className="bg-brand-mist py-14 sm:py-20"
        aria-labelledby="testing-heading"
      >
        <Container narrow>
          <SectionHeading
            label="Quality"
            heading="Testing and Documentation"
            headingAs="h2"
            className="mb-6"
          />
          <p className="text-base leading-relaxed text-body/80">
            {service.testingAndDocumentation}
          </p>
        </Container>
      </section>

      {/* ── Related Services ───────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section
          className="bg-white py-14 sm:py-20"
          aria-labelledby="related-services-heading"
        >
          <Container>
            <SectionHeading
              label="Explore"
              heading="Related Services"
              headingAs="h2"
              body="Other engineering services that may be relevant to your project."
              className="mb-10"
            />

            <ul
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
             
              aria-label="Related engineering services"
            >
              {relatedServices.slice(0, 3).map((rel) => (
                <li key={rel.slug}>
                  <ServiceCard
                    slug={rel.slug}
                    title={rel.title}
                    shortTitle={rel.shortTitle}
                    tagline={rel.tagline}
                    iconName={rel.iconName}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── Disclaimer ─────────────────────────────────────────────────── */}
      {service.disclaimer && (
        <section className="bg-white pb-8 sm:pb-12" aria-label="Disclaimer">
          <Container narrow>
            <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <Info
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
                aria-hidden="true"
              />
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  Note
                </p>
                <p className="text-sm leading-relaxed text-amber-900/80">
                  {service.disclaimer}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Contact CTA ────────────────────────────────────────────────── */}
      <ContactCta />
    </>
  );
}
