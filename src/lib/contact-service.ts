/**
 * Contact Service — dependency-inversion layer for form submissions.
 * Swap the provider via the CONTACT_EMAIL_PROVIDER environment variable.
 *
 * Supported providers:
 *   mock    — logs to console, returns success (development only)
 *   resend  — send via Resend API (add RESEND_API_KEY to .env.local)
 *   sendgrid — send via SendGrid (add SENDGRID_API_KEY to .env.local)
 */

export interface ContactPayload {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  aircraftType?: string;
  aircraftRegistration?: string;
  requestedService: string;
  projectTimeframe: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

/** Format a payload into a plain-text email body */
function formatEmailBody(payload: ContactPayload): string {
  return `
New project inquiry from the Avianor Engineering website.

Full Name: ${payload.fullName}
Company / Organization: ${payload.company}
Email: ${payload.email}
Phone: ${payload.phone ?? "Not provided"}
Country: ${payload.country}
Aircraft Type: ${payload.aircraftType ?? "Not provided"}
Aircraft Registration: ${payload.aircraftRegistration ?? "Not provided"}
Requested Service: ${payload.requestedService}
Project Timeframe: ${payload.projectTimeframe}

Message:
${payload.message}

—
Sent via the Avianor Engineering contact form.
`.trim();
}

/** Mock provider — development use only */
async function sendViaMock(payload: ContactPayload): Promise<ContactResult> {
  // Log a sanitized summary (no sensitive data) to console
  console.warn(
    "[ContactService] MOCK mode — email not sent. Configure CONTACT_EMAIL_PROVIDER=resend|sendgrid to send real emails.",
    {
      from: "mock@avianorengineering.com",
      service: payload.requestedService,
      timeframe: payload.projectTimeframe,
    },
  );
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));
  return {
    success: true,
    message:
      "Your inquiry has been received. We will be in touch shortly. (Running in mock mode — no email was actually sent.)",
  };
}

/** Resend provider */
async function sendViaResend(payload: ContactPayload): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "noreply@avianorengineering.com";

  if (!apiKey || !toEmail) {
    throw new Error(
      "Resend provider: RESEND_API_KEY and CONTACT_TO_EMAIL must be set.",
    );
  }

  const body = {
    from: fromEmail,
    to: [toEmail],
    replyTo: payload.email,
    subject: `Project Inquiry — ${payload.requestedService} — ${payload.fullName}`,
    text: formatEmailBody(payload),
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }

  return {
    success: true,
    message:
      "Your inquiry has been received. A member of our engineering team will be in touch.",
  };
}

/** SendGrid provider */
async function sendViaSendGrid(
  payload: ContactPayload,
): Promise<ContactResult> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "noreply@avianorengineering.com";

  if (!apiKey || !toEmail) {
    throw new Error(
      "SendGrid provider: SENDGRID_API_KEY and CONTACT_TO_EMAIL must be set.",
    );
  }

  const body = {
    personalizations: [{ to: [{ email: toEmail }] }],
    from: { email: fromEmail },
    reply_to: { email: payload.email },
    subject: `Project Inquiry — ${payload.requestedService} — ${payload.fullName}`,
    content: [{ type: "text/plain", value: formatEmailBody(payload) }],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid API error: ${error}`);
  }

  return {
    success: true,
    message:
      "Your inquiry has been received. A member of our engineering team will be in touch.",
  };
}

/** Main dispatch function */
export async function sendContactInquiry(
  payload: ContactPayload,
): Promise<ContactResult> {
  const provider = process.env.CONTACT_EMAIL_PROVIDER ?? "mock";

  switch (provider) {
    case "resend":
      return sendViaResend(payload);
    case "sendgrid":
      return sendViaSendGrid(payload);
    case "mock":
    default:
      return sendViaMock(payload);
  }
}

