import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Privacy Policy",
    description:
      "Privacy Policy for Avianor Engineering. Learn how we handle information collected through our website and services.",
    path: "/privacy",
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

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="border-b border-brand-mist bg-brand-ice py-10 sm:py-14">
        <Container narrow>
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-midnight sm:text-5xl">
            Privacy Policy
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
            The Privacy Policy text must be reviewed and finalized by qualified
            legal counsel before publication. All sections below are marked as
            placeholders and must not be treated as legally binding or
            accurate until verified.
          </p>
        </div>

        <PolicySection id="privacy-overview" heading="Overview">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection
          id="privacy-information-collected"
          heading="Information We May Collect"
        >
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="privacy-use" heading="How We Use Information">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="privacy-third-party" heading="Third-Party Services">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>

        <PolicySection id="privacy-contact" heading="Contact">
          <p className="rounded-lg border border-dashed border-body/20 bg-brand-ice px-5 py-4 font-mono text-sm text-body/50">
            [PLACEHOLDER — Replace with verified legal text before launch]
          </p>
        </PolicySection>
      </Container>
    </div>
  );
}
