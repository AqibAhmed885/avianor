import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Cog,
  FlaskConical,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ServiceCard } from "@/components/ui/service-card";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { ContactCta } from "@/components/sections/contact-cta";
import { products, getProductBySlug } from "@/content/products";
import { getServiceBySlug } from "@/content/services";

/* ─── Static params ─────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: product.title,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
  });
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  /* Resolve related services, filtering any that don't exist */
  const relatedServices = product.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <>
      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <div className="border-b border-brand-mist bg-white">
        <Container className="py-3">
          <Breadcrumb
            items={[
              { label: "Products & Solutions", href: "/products" },
              { label: product.shortTitle },
            ]}
          />
        </Container>
      </div>

      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-16 sm:py-24"
        aria-labelledby="product-page-heading"
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
          {/* Icon */}
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-vector">
            <IconRenderer
              name={product.iconName}
              className="h-7 w-7"
              strokeWidth={1.5}
            />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-vector">
            Products &amp; Solutions
          </p>
          <h1
            id="product-page-heading"
            className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {product.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-blue-100/70 sm:text-lg">
            {product.tagline}
          </p>
        </Container>
      </section>

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="product-overview-heading"
      >
        <Container narrow>
          <SectionHeading
            id="product-overview-heading"
            label="Overview"
            heading="About This Solution"
            className="mb-6"
          />
          <p className="text-base leading-relaxed text-body/80 sm:text-lg">
            {product.overview}
          </p>
        </Container>
      </section>

      {/* ── Typical applications ──────────────────────────────────────────── */}
      <section
        className="bg-brand-mist py-16 sm:py-20"
        aria-labelledby="product-applications-heading"
      >
        <Container>
          <SectionHeading
            id="product-applications-heading"
            label="Applications"
            heading="Typical Applications"
            body="Representative project types and program contexts where this solution is applied."
            className="mb-10"
          />

          <ul
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
           
            aria-label="Typical applications"
          >
            {product.applications.map((app) => (
              <li
                key={app.title}
                className="flex items-start gap-3 rounded-xl border border-brand-mist bg-white p-4 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-indigo"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-brand-midnight">
                  {app.title}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Core capabilities ─────────────────────────────────────────────── */}
      <section
        className="bg-brand-ice py-16 sm:py-20"
        aria-labelledby="product-capabilities-heading"
      >
        <Container>
          <SectionHeading
            id="product-capabilities-heading"
            label="Capabilities"
            heading="Core Capabilities"
            body="Engineering and delivery capabilities included within this solution."
            className="mb-10"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {product.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-brand-mist bg-white p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
                  <Cog className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-sm font-bold text-brand-midnight">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-body/70">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Configuration options ─────────────────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="product-config-heading"
      >
        <Container>
          <SectionHeading
            id="product-config-heading"
            label="Configuration"
            heading="Configuration Options"
            body="Key parameters that are defined on a project-specific basis to configure this solution for your aircraft and program."
            className="mb-10"
          />

          <dl className="divide-y divide-brand-mist rounded-2xl border border-brand-mist">
            {product.configOptions.map((opt, i) => (
              <div
                key={opt.label}
                className={`flex flex-col gap-1.5 px-6 py-5 sm:flex-row sm:gap-8 ${
                  i === 0 ? "rounded-t-2xl" : ""
                } ${i === product.configOptions.length - 1 ? "rounded-b-2xl" : ""}`}
              >
                <dt className="flex w-full shrink-0 items-center gap-2 text-sm font-bold text-brand-midnight sm:w-56">
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-violet-vector"
                    aria-hidden="true"
                  />
                  {opt.label}
                </dt>
                <dd className="text-sm leading-relaxed text-body/75">
                  {opt.description}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Engineering process ───────────────────────────────────────────── */}
      <section
        className="bg-brand-mist py-16 sm:py-20"
        aria-labelledby="product-process-heading"
      >
        <Container narrow>
          <SectionHeading
            id="product-process-heading"
            label="Process"
            heading="Engineering and Delivery Process"
            className="mb-6"
          />
          <p className="text-base leading-relaxed text-body/80">
            {product.engineeringProcess}
          </p>
        </Container>
      </section>

      {/* ── Testing and documentation ─────────────────────────────────────── */}
      <section
        className="bg-brand-ice py-16 sm:py-20"
        aria-labelledby="product-testing-heading"
      >
        <Container narrow>
          <SectionHeading
            id="product-testing-heading"
            label="Testing &amp; Documentation"
            heading="Testing and Documentation"
            className="mb-6"
          />
          <div className="flex items-start gap-4 rounded-2xl border border-brand-mist bg-white p-6 shadow-sm">
            <FlaskConical
              className="mt-0.5 h-6 w-6 shrink-0 text-brand-indigo"
              aria-hidden="true"
              strokeWidth={1.75}
            />
            <p className="text-base leading-relaxed text-body/80">
              {product.testingAndDocumentation}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Related services ──────────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section
          className="bg-white py-16 sm:py-20"
          aria-labelledby="product-related-services-heading"
        >
          <Container>
            <SectionHeading
              id="product-related-services-heading"
              label="Related Services"
              heading="Related Engineering Services"
              body="Engineering services that commonly accompany or support this solution within a project."
              className="mb-10"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  tagline={service.tagline}
                  iconName={service.iconName}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Disclaimer ────────────────────────────────────────────────────── */}
      <section aria-label="Product disclaimer">
        <Container className="py-8 sm:py-10">
          <div
            className="flex gap-4 rounded-2xl border border-amber-300/60 bg-amber-50 p-5 sm:p-6"
            role="note"
          >
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-amber-900/80">
              <span className="font-semibold text-amber-900">Disclaimer: </span>
              {product.disclaimer}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <ContactCta
        heading="Ready to configure this solution for your program?"
        body="Contact the Avianor Engineering team to discuss your project requirements, aircraft type, and applicable approval pathway."
      />
    </>
  );
}
