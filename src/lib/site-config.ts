/** Site-wide configuration — replace placeholder values before deployment */

export const siteConfig = {
  name: "Avianor Engineering",
  shortName: "Avianor",
  tagline: "Engineering confidence into every flight",
  description:
    "Avianor Engineering provides aircraft modifications, avionics integration, medical aviation solutions, manufacturing, repair, and test-bench engineering.",
  /** @placeholder Replace with verified production URL */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.avianorengineering.com",
  /** @placeholder Replace with verified business email */
  email: "hello@avianorengineering.com",
  /** @placeholder Replace with verified phone number */
  phone: "[PHONE NUMBER — PLACEHOLDER]",
  /** @placeholder Replace with verified office address */
  address: {
    street: "[STREET ADDRESS — PLACEHOLDER]",
    city: "[CITY — PLACEHOLDER]",
    province: "[PROVINCE/STATE — PLACEHOLDER]",
    postalCode: "[POSTAL CODE — PLACEHOLDER]",
    country: "[COUNTRY — PLACEHOLDER]",
  },
  /** @placeholder Replace with verified working hours */
  workingHours: "[WORKING HOURS — PLACEHOLDER]",
  /** @placeholder Add verified social links */
  social: {
    linkedin: "",
    twitter: "",
  },
  ogImage: "/brand/logo-full.png",
  thirdPartyDisclaimer:
    "Third-party product and company names are trademarks of their respective owners. Their appearance does not imply endorsement, partnership, or authorization.",
} as const;

export type SiteConfig = typeof siteConfig;

