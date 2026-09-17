import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-10rem)] items-center overflow-hidden bg-brand-midnight"
      aria-labelledby="not-found-heading"
    >
      {/* Technical grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-hero-grid opacity-40"
        aria-hidden="true"
      />

      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-midnight via-brand-midnight/95 to-brand-indigo/20"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 text-center">
        {/* Large 404 display */}
        <p
          className="mb-4 select-none bg-brand-gradient-subtle bg-clip-text text-[8rem] font-bold leading-none tracking-tight text-transparent sm:text-[12rem] lg:text-[14rem]"
          aria-hidden="true"
        >
          404
        </p>

        {/* Heading */}
        <h1
          id="not-found-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Page Not Found
        </h1>

        {/* Body */}
        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-blue-100/70 sm:text-lg">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="/"
            variant="ghost"
            size="lg"
            className="bg-white text-brand-midnight hover:bg-brand-ice border-0"
          >
            Return Home
          </Button>
          <Button
            href="/services"
            variant="ghost"
            size="lg"
            className="border border-white/30 text-white hover:bg-white/10"
          >
            View Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
