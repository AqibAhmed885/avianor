import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ContactCta } from "@/components/sections/contact-cta";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/site-config";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact the Avianor Engineering team to discuss aircraft modification, avionics integration, and engineering project requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-midnight py-16">
        <Container>
          <Breadcrumb items={[{ label: "Contact" }]} />
          <SectionHeading
            headingAs="h1"
            label="Get in Touch"
            heading="Start a Project Conversation"
            body="Reach out to the Avianor Engineering team to discuss your aircraft, modification requirements, and project scope. We respond to all inquiries."
            inverted
            className="mt-6"
          />
        </Container>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact info sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-body/50">
                    Contact Information
                  </h2>
                  <ul className="space-y-4">
                    <ContactInfoItem icon="mail" label="Email">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-brand-indigo hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </ContactInfoItem>
                    <ContactInfoItem icon="phone" label="Phone">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-brand-indigo hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </ContactInfoItem>
                    <ContactInfoItem icon="map" label="Address">
                      <address className="not-italic text-sm text-body/70">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city},{" "}
                        {siteConfig.address.province}{" "}
                        {siteConfig.address.postalCode}
                        <br />
                        {siteConfig.address.country}
                      </address>
                    </ContactInfoItem>
                    <ContactInfoItem icon="clock" label="Working Hours">
                      <span className="text-sm text-body/70">
                        {siteConfig.workingHours}
                      </span>
                    </ContactInfoItem>
                  </ul>
                </div>

                {/* Note about inquiries */}
                <div className="rounded-xl border border-brand-mist bg-brand-ice p-5">
                  <h3 className="mb-2 text-sm font-bold text-brand-midnight">
                    What to Include
                  </h3>
                  <ul className="space-y-1 text-sm text-body/70">
                    {[
                      "Aircraft type and registration",
                      "Description of the modification or service needed",
                      "Operational context and requirements",
                      "Approximate project timeframe",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-indigo" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer */}
                <p className="text-xs leading-relaxed text-body/50">
                  Submitting this form constitutes an inquiry only. No commitment,
                  project scope, pricing, or regulatory approval is implied by
                  this contact.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold text-brand-midnight">
                Project Inquiry Form
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Looking for a quick conversation first?"
        body="Send us an email or call us directly to discuss your project before submitting a formal inquiry."
        primaryLabel="Email Us Directly"
        primaryHref={`mailto:${siteConfig.email}`}
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}

function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: "mail" | "phone" | "map" | "clock";
  label: string;
  children: React.ReactNode;
}) {
  const iconMap = {
    mail: Mail,
    phone: Phone,
    map: MapPin,
    clock: Clock,
  };
  const Icon = iconMap[icon];

  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-ice text-brand-indigo">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-body/40">
          {label}
        </p>
        {children}
      </div>
    </li>
  );
}

