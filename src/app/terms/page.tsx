import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Terms of Use",
    description:
      "Terms of Use for Avianor Engineering. Read the conditions governing use of our website and services.",
    path: "/terms",
    noIndex: true, // noindex until legal counsel finalizes the text
  });
}

// ─── Section component (DRY helper, file-local only) ─────────────────────────
function PolicySection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-10 first:mt-0">
      <h2
        id={id}
        className="mb-3 text-xl font-bold tracking-tight text-brand-midnight sm:text-2xl"
      >
        {heading}
      </h2>
      <div className="space-y-3 text-base leading-relaxed text-body/80">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="border-b border-brand-mist bg-brand-ice py-10 sm:py-14">
        <Container narrow>
          <Breadcrumb items={[{ label: "Terms of Use" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-midnight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-body/50">
            Last reviewed:{" "}
            <time dateTime="2026-09-17">September 17, 2026</time>
          </p>
        </Container>
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <Container narrow className="py-14 sm:py-20">
        {/* Legal review notice */}
        <div
          role="note"
          aria-label="Important notice"
          className="mb-10 rounded-xl border border-amber-300 bg-amber-50 px-6 py-5"
        >
          <p className="text-sm font-semibold text-amber-800">
            ⚠ This page is a placeholder.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-amber-700">
            The Terms of Use text must be reviewed and finalized by qualified
            legal counsel before publication. All sections below are marked as
            placeholders and must not be treated as legally binding or
            accurate until verified.
          </p>
        </div>

        <PolicySection id="terms-overview" heading="Overview">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="terms-acceptance" heading="Acceptance of Terms">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="terms-use" heading="Permitted Use">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection
          id="terms-intellectual-property"
          heading="Intellectual Property"
        >
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="terms-disclaimer" heading="Disclaimer of Warranties">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection
          id="terms-liability"
          heading="Limitation of Liability"
        >
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="terms-changes" heading="Changes to These Terms">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="terms-contact" heading="Contact">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>
      </Container>
    </div>
  );
}
