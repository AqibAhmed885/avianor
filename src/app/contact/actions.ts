"use server";

import { z } from "zod";
import { sendContactInquiry } from "@/lib/contact-service";
import type { ContactResult } from "@/lib/contact-service";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name must be under 100 characters."),
  company: z
    .string()
    .trim()
    .min(2, "Company or organization is required.")
    .max(150, "Company name must be under 150 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid work email address.")
    .max(200, "Email must be under 200 characters."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number must be under 30 characters.")
    .optional()
    .or(z.literal("")),
  country: z
    .string()
    .trim()
    .min(2, "Country is required.")
    .max(80, "Country must be under 80 characters."),
  aircraftType: z
    .string()
    .trim()
    .max(100, "Aircraft type must be under 100 characters.")
    .optional()
    .or(z.literal("")),
  aircraftRegistration: z
    .string()
    .trim()
    .max(30, "Registration must be under 30 characters.")
    .optional()
    .or(z.literal("")),
  requestedService: z
    .string()
    .trim()
    .min(2, "Please select or describe the service you're inquiring about.")
    .max(150, "Service description must be under 150 characters."),
  projectTimeframe: z
    .string()
    .trim()
    .min(2, "Please indicate a project timeframe.")
    .max(100, "Timeframe must be under 100 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Please provide a brief project description (at least 20 characters).")
    .max(3000, "Message must be under 3000 characters."),
  consentGiven: z
    .string()
    .refine((val) => val === "true", {
      message: "You must acknowledge the consent statement to submit this form.",
    }),
});

export type ContactFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string }
  | { status: "validation-error"; fieldErrors: Record<string, string[]> };

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Extract and validate
  const raw = {
    fullName: formData.get("fullName"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    country: formData.get("country"),
    aircraftType: formData.get("aircraftType"),
    aircraftRegistration: formData.get("aircraftRegistration"),
    requestedService: formData.get("requestedService"),
    projectTimeframe: formData.get("projectTimeframe"),
    message: formData.get("message"),
    consentGiven: formData.get("consentGiven"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [key, errors] of Object.entries(result.error.flatten().fieldErrors)) {
      if (errors) fieldErrors[key] = errors;
    }
    return { status: "validation-error", fieldErrors };
  }

  const data = result.data;

  try {
    const response: ContactResult = await sendContactInquiry({
      fullName: data.fullName,
      company: data.company,
      email: data.email,
      phone: data.phone ?? undefined,
      country: data.country,
      aircraftType: data.aircraftType ?? undefined,
      aircraftRegistration: data.aircraftRegistration ?? undefined,
      requestedService: data.requestedService,
      projectTimeframe: data.projectTimeframe,
      message: data.message,
    });

    if (response.success) {
      return { status: "success", message: response.message };
    }
    return {
      status: "error",
      message: "Unable to send your inquiry at this time. Please try again or contact us directly.",
    };
  } catch (err) {
    console.error("[contactAction] Failed to send inquiry:", err instanceof Error ? err.message : "Unknown error");
    return {
      status: "error",
      message: "A technical error occurred. Please try again later or contact us directly.",
    };
  }
}

