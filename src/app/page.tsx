import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ProcessSection } from "@/components/sections/process-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { QualitySection } from "@/components/sections/quality-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui/container";
import { AboutSection } from "@/components/sections/about-section";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── About ──────────────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── Capabilities ─────────────────────────────────────────────────── */}
      <CapabilitiesSection />

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <IndustriesSection />

      {/* ── Quality ──────────────────────────────────────────────────────── */}
      <QualitySection />

      {/* ── Contact CTA ──────────────────────────────────────────────────── */}
      <ContactCta
        heading="Planning an aircraft modification or avionics upgrade?"
        secondaryLabel="Contact Engineering"
      />
    </>
  );
}
