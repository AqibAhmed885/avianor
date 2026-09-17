# Avianor Engineering Website

Corporate website for Avianor Engineering, built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Components:** React (Server Components by default)
- **Icons:** Lucide React
- **Forms:** Zod + Server Actions + React `useActionState`
- **Validation:** ESLint, Prettier, TypeScript `tsc`
- **Testing:** Jest + React Testing Library

## Project Structure

- `/src/app/` — Next.js App Router pages and layouts
- `/src/components/ui/` — Reusable, accessible UI components (Button, Cards, Forms, Accordions)
- `/src/components/sections/` — Large page sections (Hero, Capabilities, Contact CTA)
- `/src/components/layout/` — Site-wide layout components (Header, Footer, Navigation)
- `/src/content/` — Centralized content data (Services, Products, Capabilities)
- `/src/lib/` — Utilities, metadata factories, contact service, site config
- `/src/types/` — TypeScript interfaces
- `/src/__tests__/` — Jest test suites
- `/public/brand/` — Placeholder SVGs for Avianor brand assets

## Getting Started

### Prerequisites

- Node.js (v18.17 or newer)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` to configure environment variables.

- `NEXT_PUBLIC_SITE_URL`: The production URL (used for metadata and sitemap)
- `CONTACT_EMAIL_PROVIDER`: "mock" (default), "resend", or "sendgrid"
- `CONTACT_TO_EMAIL`: Where contact form submissions should be sent
- `CONTACT_FROM_EMAIL`: The verified sender address
- `RESEND_API_KEY`: API key if using Resend
- `SENDGRID_API_KEY`: API key if using SendGrid

## Pre-Launch Checklist

Before deploying this site to production, you must:

1. **Replace Logo Assets:** Replace the placeholder SVGs in `/public/brand/` with real Avianor Engineering logos.
2. **Update Site Config:** Open `src/lib/site-config.ts` and replace all `[PLACEHOLDER]` values (phone, email, address, etc.) with real contact information.
3. **Verify Legal Pages:** Replace the placeholder text in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` with verified legal text, then remove `noIndex: true` from their metadata.
4. **Configure Email Provider:** Set up Resend or SendGrid to process contact form submissions.
5. **Update OG Image:** Replace `/public/images/og-image.jpg` with a real social sharing image.

## Quality and Safety Disclaimer

All text and services presented on this website are structured to describe engineering capabilities without making unauthorized regulatory or certification claims. The content emphasizes structured processes, testing, documentation, and safety accountability. Final regulatory compliance and authorization are always project- and aircraft-specific.

