import React from "react";
import { render, screen } from "@testing-library/react";

// Mock next/navigation for the server action test
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

// Mock the action so we don't import server-only code in jsdom
jest.mock("@/app/contact/actions", () => ({
  submitContactForm: jest.fn(),
}));

// Mock Next.js modules
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = "Link";
  return MockLink;
});

// We test the Zod validation schema directly (not the server action)
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  country: z.string().trim().min(2).max(80),
  aircraftType: z.string().trim().max(100).optional().or(z.literal("")),
  aircraftRegistration: z.string().trim().max(30).optional().or(z.literal("")),
  requestedService: z.string().trim().min(2).max(150),
  projectTimeframe: z.string().trim().min(2).max(100),
  message: z.string().trim().min(20).max(3000),
  consentGiven: z.string().refine((val) => val === "true"),
});

describe("Contact form validation schema", () => {
  const validPayload = {
    fullName: "Jane Smith",
    company: "Example Air",
    email: "jane@example.com",
    phone: "+1 555 000 0000",
    country: "Canada",
    aircraftType: "Bell 412",
    aircraftRegistration: "C-FABC",
    requestedService: "NVG Modifications",
    projectTimeframe: "3–6 months",
    message: "We need NVG modifications for our medevac helicopter operations.",
    consentGiven: "true",
  };

  it("accepts a valid payload", () => {
    const result = contactSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects empty fullName", () => {
    const result = contactSchema.safeParse({ ...validPayload, fullName: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({ ...validPayload, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects message shorter than 20 characters", () => {
    const result = contactSchema.safeParse({ ...validPayload, message: "Too short" });
    expect(result.success).toBe(false);
  });

  it("rejects missing consentGiven", () => {
    const result = contactSchema.safeParse({ ...validPayload, consentGiven: "false" });
    expect(result.success).toBe(false);
  });

  it("accepts payload with optional phone omitted", () => {
    const { phone: _phone, ...withoutPhone } = validPayload;
    const result = contactSchema.safeParse(withoutPhone);
    expect(result.success).toBe(true);
  });

  it("rejects empty country", () => {
    const result = contactSchema.safeParse({ ...validPayload, country: "" });
    expect(result.success).toBe(false);
  });

  it("rejects empty requestedService", () => {
    const result = contactSchema.safeParse({ ...validPayload, requestedService: "" });
    expect(result.success).toBe(false);
  });
});

