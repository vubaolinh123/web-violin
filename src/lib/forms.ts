/**
 * The two request forms of the site. The same definitions drive the form UI and the
 * server-side validation in /api/contact, so a field only has to be described once.
 */

export type FieldType = "text" | "email" | "select" | "checkboxes" | "textarea";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
  /** Takes the full row in the two-column layout. */
  wide?: boolean;
}

export type FormKind = "evaluation" | "experience";

export interface FormDefinition {
  kind: FormKind;
  /** Subject line of the notification sent to Strad Plus. */
  subject: string;
  fields: FormField[];
  thanks: string[];
}

export const THANKS_TITLE = "Thank you for your interest in Strad Plus.";

export const FORMS: Record<FormKind, FormDefinition> = {
  evaluation: {
    kind: "evaluation",
    subject: "Evaluation sample request",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", maxLength: 120 },
      {
        name: "company",
        label: "Company / Organisation",
        type: "text",
        required: true,
        autoComplete: "organization",
        maxLength: 160,
      },
      { name: "country", label: "Country", type: "text", required: true, autoComplete: "country-name", maxLength: 80 },
      {
        name: "website",
        label: "Website / Social Media",
        type: "text",
        required: true,
        autoComplete: "url",
        maxLength: 300,
      },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", maxLength: 200 },
      {
        name: "businessType",
        label: "Type of Business",
        type: "select",
        required: true,
        options: ["Distributor", "Instrument Shop", "Workshop", "Manufacturer", "Other"],
      },
      {
        name: "interests",
        label: "Areas of Interest",
        type: "checkboxes",
        required: true,
        wide: true,
        options: [
          "Complete Strad Plus Process",
          "Strad Plus Violin Bridge & Soundpost Set",
          "Musical Instruments",
          "Architectural Acoustics",
          "Sports Equipment",
        ],
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: false,
        wide: true,
        maxLength: 5000,
        placeholder: "Tell us about your business and your interest in Strad Plus.",
      },
    ],
    thanks: [
      "We review every request personally and will contact you to discuss evaluation options and potential partnership opportunities.",
    ],
  },
  experience: {
    kind: "experience",
    subject: "Experience Strad Plus request",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", maxLength: 200 },
      { name: "country", label: "Country", type: "text", required: true, autoComplete: "country-name", maxLength: 80 },
      {
        name: "instrument",
        label: "Instrument",
        type: "select",
        required: true,
        options: ["Violin", "Viola", "Cello", "Double Bass", "Guitar", "Piano", "Other"],
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: false,
        wide: true,
        maxLength: 5000,
        placeholder: "Tell us about your instrument and your interest in Strad Plus.",
      },
    ],
    thanks: ["We review every request personally and will contact you as soon as possible."],
  },
};

export type FormValues = Record<string, string | string[]>;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** True when the field holds an acceptable value (an empty optional field is acceptable). */
export function isFieldValid(field: FormField, value: string | string[] | undefined): boolean {
  if (field.type === "checkboxes") {
    const list = Array.isArray(value) ? value : [];
    if (!list.every((v) => field.options?.includes(v))) return false;
    return !field.required || list.length > 0;
  }
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return !field.required;
  if (field.maxLength && text.length > field.maxLength) return false;
  if (field.type === "email") return EMAIL_RE.test(text);
  if (field.type === "select") return !!field.options?.includes(text);
  return true;
}

export function isFormComplete(form: FormDefinition, values: FormValues) {
  return form.fields.every((f) => isFieldValid(f, values[f.name]));
}

/** Plain-text summary of a submission, used in both emails. */
export function summarise(form: FormDefinition, values: FormValues) {
  return form.fields
    .filter((f) => f.type !== "textarea")
    .map((f) => {
      const v = values[f.name];
      return `${f.label}: ${Array.isArray(v) ? v.join(", ") : v ?? ""}`;
    });
}
