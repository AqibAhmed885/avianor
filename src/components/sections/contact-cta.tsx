import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface ContactCtaProps {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ContactCta({
  heading = "Planning an aircraft modification or avionics upgrade?",
  body = "Contact the Avianor Engineering team to discuss your project requirements, timeline, and technical scope.",
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Contact Engineering",
  secondaryHref = "/contact",
}: ContactCtaProps) {
  return (
    <section
      className="relative overflow-hidden bg-brand-gradient py-20 sm:py-24"
      aria-labelledby="contact-cta-heading"
    >
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-hero-grid bg-hero-grid opacity-30"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <h2
          id="contact-cta-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-blue-100/75">
          {body}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href={primaryHref}
            variant="ghost"
            size="lg"
            className="bg-white text-brand-midnight hover:bg-brand-ice border-0"
          >
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            variant="ghost"
            size="lg"
            className="border border-white/30 text-white hover:bg-white/10"
          >
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}

