import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { currentYear } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-mist bg-brand-midnight text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo variant="full" inverted asImage={false} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/70">
              Aircraft modification, avionics integration, medical aviation,
              manufacturing, repair, and test-bench engineering solutions.
            </p>

            {/* Contact info */}
            <address className="mt-6 space-y-2 not-italic">
              <ContactLine icon="mail" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </ContactLine>
              <ContactLine icon="phone" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </ContactLine>
              <ContactLine icon="map">
                {siteConfig.address.city}, {siteConfig.address.province}
              </ContactLine>
            </address>
          </div>

          {/* Company */}
          <FooterColumn title="Company" links={footerNavigation.company} />

          {/* Services */}
          <FooterColumn title="Services" links={footerNavigation.services} />

          {/* Products */}
          <FooterColumn title="Products" links={footerNavigation.products} />
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col gap-4 text-xs text-blue-100/50 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <p>
              &copy; {currentYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="max-w-xl leading-relaxed">
              {siteConfig.thirdPartyDisclaimer}
            </p>
          </div>

          <nav aria-label="Legal navigation" className="flex flex-shrink-0 gap-4">
            {footerNavigation.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-100/50">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-blue-100/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLine({
  icon,
  href,
  children,
}: {
  icon: "mail" | "phone" | "map";
  href?: string;
  children: React.ReactNode;
}) {
  const iconEl =
    icon === "mail" ? (
      <Mail className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-blue-100/40" aria-hidden="true" />
    ) : icon === "phone" ? (
      <Phone className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-blue-100/40" aria-hidden="true" />
    ) : (
      <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-blue-100/40" aria-hidden="true" />
    );

  const textClasses = "text-sm text-blue-100/70 hover:text-white transition-colors";

  return (
    <div className="flex items-start gap-2">
      {iconEl}
      {href ? (
        <a href={href} className={textClasses}>
          {children}
        </a>
      ) : (
        <span className="text-sm text-blue-100/70">{children}</span>
      )}
    </div>
  );
}

