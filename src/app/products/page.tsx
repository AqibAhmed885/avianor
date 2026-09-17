import type { Metadata } from "next";
import { Info } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { products } from "@/content/products";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  title: "Engineering Solutions and Products",
  description:
    "Hardware, wiring, tooling, and configurable engineering solutions developed in support of aircraft modification and integration programs. Each solution is configured to the specific project, aircraft type, and approval pathway.",
  path: "/products",
});

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-brand-midnight py-20 sm:py-28"
        aria-labelledby="products-hero-heading"
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
            Products &amp; Solutions
          </p>
          <h1
            id="products-hero-heading"
            className="mb-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Engineering Solutions and Products
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-blue-100/75 sm:text-lg">
            Hardware, wiring, tooling, and configurable engineering solutions
            developed in support of aircraft modification and integration
            programs. Each solution is configured to the specific project,
            aircraft type, and approval pathway.
          </p>
        </Container>
      </section>

      {/* ── Important note ────────────────────────────────────────────────── */}
      <section aria-label="Important note about products">
        <Container className="py-8 sm:py-10">
          <div
            className="flex gap-4 rounded-2xl border border-brand-indigo/20 bg-brand-indigo/5 p-5 sm:p-6"
            role="note"
          >
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-indigo"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-body/80">
              <span className="font-semibold text-brand-midnight">
                Please note:{" "}
              </span>
              Products and solutions presented here are configurable engineering
              deliverables, not certified off-the-shelf products. Final
              configuration, eligibility, and applicable approval requirements
              are determined for each aircraft and project.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Products grid ─────────────────────────────────────────────────── */}
      <section
        className="bg-white pb-20 sm:pb-28"
        aria-labelledby="products-grid-heading"
      >
        <Container>
          <SectionHeading
            id="products-grid-heading"
            label="All Products &amp; Solutions"
            heading="Configurable Engineering Deliverables"
            body="Browse the full range of hardware, tooling, and integration solutions available for aircraft modification and avionics programs."
            className="mb-12"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                title={product.title}
                tagline={product.tagline}
                iconName={product.iconName}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <ContactCta
        heading="Need an engineered solution for your program?"
        body="Contact the Avianor Engineering team to discuss your product requirements, aircraft type, and project scope."
      />
    </>
  );
}
