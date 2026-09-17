"use client";

import { useActionState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputField,
  TextareaField,
  SelectField,
  CheckboxField,
} from "@/components/ui/form-field";
import {
  submitContactForm,
  type ContactFormState,
} from "./actions";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "NVG Modifications", label: "NVG Modifications" },
  { value: "Flight Recorder / AVCR Systems", label: "Flight Recorder / AVCR Systems" },
  { value: "Air Ambulance Solutions", label: "Air Ambulance Solutions" },
  { value: "Medical Equipment Integration", label: "Medical Equipment Integration" },
  { value: "Avionics Repair and Wiring Harnesses", label: "Avionics Repair and Wiring Harnesses" },
  { value: "Weather Radar Installation", label: "Weather Radar Installation" },
  { value: "GPS Installation", label: "GPS Installation" },
  { value: "Analog-to-Digital Modernization", label: "Analog-to-Digital Modernization" },
  { value: "Aircraft Parts Manufacturing", label: "Aircraft Parts Manufacturing" },
  { value: "Avionics Test Bench Engineering", label: "Avionics Test Bench Engineering" },
  { value: "Wiring Harness Fabrication", label: "Wiring Harness Fabrication" },
  { value: "Engineering Documentation", label: "Engineering Documentation" },
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Other", label: "Other (describe in message)" },
];

const timeframeOptions = [
  { value: "", label: "Select a timeframe" },
  { value: "Within 1 month", label: "Within 1 month" },
  { value: "1–3 months", label: "1–3 months" },
  { value: "3–6 months", label: "3–6 months" },
  { value: "6–12 months", label: "6–12 months" },
  { value: "Planning phase — not yet defined", label: "Planning phase — not yet defined" },
  { value: "Ongoing / recurring need", label: "Ongoing / recurring need" },
];

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const fieldErrors =
    state.status === "validation-error" ? state.fieldErrors : {};

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-green-900">
          Inquiry Received
        </h2>
        <p className="text-sm leading-relaxed text-green-800">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-label="Project inquiry form"
      className="space-y-6"
    >
      {/* General error banner */}
      {state.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500"
            aria-hidden="true"
          />
          <p>{state.message}</p>
        </div>
      )}

      {/* Row 1: Name + Company */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="fullName"
          name="fullName"
          label="Full Name"
          type="text"
          autoComplete="name"
          required
          placeholder="Jane Smith"
          error={fieldErrors.fullName?.[0]}
        />
        <InputField
          id="company"
          name="company"
          label="Company or Organization"
          type="text"
          autoComplete="organization"
          required
          placeholder="Your airline or operator"
          error={fieldErrors.company?.[0]}
        />
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="email"
          name="email"
          label="Work Email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          error={fieldErrors.email?.[0]}
        />
        <InputField
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          error={fieldErrors.phone?.[0]}
        />
      </div>

      {/* Row 3: Country */}
      <InputField
        id="country"
        name="country"
        label="Country"
        type="text"
        autoComplete="country-name"
        required
        placeholder="Canada"
        error={fieldErrors.country?.[0]}
      />

      {/* Row 4: Aircraft type + Registration */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="aircraftType"
          name="aircraftType"
          label="Aircraft Type"
          type="text"
          placeholder="e.g. Bell 412, Cessna 208"
          error={fieldErrors.aircraftType?.[0]}
        />
        <InputField
          id="aircraftRegistration"
          name="aircraftRegistration"
          label="Aircraft Registration"
          type="text"
          placeholder="e.g. C-FABC (optional)"
          hint="Optional"
          error={fieldErrors.aircraftRegistration?.[0]}
        />
      </div>

      {/* Row 5: Service + Timeframe */}
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          id="requestedService"
          name="requestedService"
          label="Requested Service"
          required
          options={serviceOptions}
          placeholder="Select a service"
          defaultValue=""
          error={fieldErrors.requestedService?.[0]}
        />
        <SelectField
          id="projectTimeframe"
          name="projectTimeframe"
          label="Project Timeframe"
          required
          options={timeframeOptions}
          placeholder="Select a timeframe"
          defaultValue=""
          error={fieldErrors.projectTimeframe?.[0]}
        />
      </div>

      {/* Message */}
      <TextareaField
        id="message"
        name="message"
        label="Project Description"
        required
        placeholder="Describe your aircraft, the modification or service you're interested in, and any relevant operational context."
        rows={6}
        error={fieldErrors.message?.[0]}
      />

      {/* Consent */}
      <CheckboxField
        id="consentGiven"
        name="consentGiven"
        value="true"
        required
        label={
          <>
            I acknowledge that submitting this form constitutes an inquiry only.
            No commitment, approval, or project scope is implied. Avianor
            Engineering will use this information to respond to my inquiry.
          </>
        }
        error={fieldErrors.consentGiven?.[0]}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isPending}
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending ? "Sending…" : "Submit Inquiry"}
      </Button>

      <p className="text-xs text-body/50">
        Required fields are marked with an asterisk (*).
      </p>
    </form>
  );
}

