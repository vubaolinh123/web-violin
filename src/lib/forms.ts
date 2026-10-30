/**
 * The two request forms of the site. The same definitions drive the form UI and the
 * server-side validation in /api/contact, so a field only has to be described once.
 * Labels here are the English ones used in the notification to Strad Plus; the form UI and the
 * visitor's confirmation take theirs from the dictionary.
 */

export type FieldType = "text" | "email" | "select" | "checkboxes" | "textarea";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[];
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
}

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
      },
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
      },
    ],
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

/**
 * Plain-text summary of a submission, used in both emails. Pass `labels` and `options` from the
 * dictionary to write it in the visitor's language; otherwise the English labels are used.
 */
export function summarise(
  form: FormDefinition,
  values: FormValues,
  labels: Record<string, string> = {},
  options: Record<string, string> = {}
) {
  const show = (v: string) => options[v] ?? v;
  return form.fields
    .filter((f) => f.type !== "textarea")
    .map((f) => {
      const v = values[f.name];
      return `${labels[f.name] ?? f.label}: ${Array.isArray(v) ? v.map(show).join(", ") : show(v ?? "")}`;
    });
}
