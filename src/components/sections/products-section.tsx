import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/content/products";

const featuredProducts = products.slice(0, 6);

export function ProductsSection() {
  return (
    <section
      className="bg-brand-ice py-20 sm:py-24"
      aria-labelledby="products-section-heading"
    >
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="products-section-heading"
            label="Products & Solutions"
            heading="Configurable Engineering Solutions"
            body="Hardware, wiring, and tooling solutions developed for aircraft modification and integration programs. Each solution is configured for the specific project and aircraft."
          />
          <Link
            href="/products"
            className="inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-indigo hover:text-violet-vector transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:rounded"
          >
            View all solutions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
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
  );
}

