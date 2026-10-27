"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import {
  FORMS,
  THANKS_TITLE,
  isFormComplete,
  type FormField,
  type FormKind,
  type FormValues,
} from "@/lib/forms";
import { cn } from "@/lib/utils/cn";

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";

const fieldClass =
  "w-full border border-line bg-white/60 px-4 py-3 text-base text-ink placeholder:text-ink-mute transition-colors focus:border-varnish focus:outline-none";
const labelClass = "mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft";

function Label({ field, htmlFor }: { field: FormField; htmlFor?: string }) {
  const Tag = htmlFor ? "label" : "legend";
  return (
    <Tag htmlFor={htmlFor} className={labelClass}>
      {field.label}
      {field.required ? (
        <span className="ml-0.5 text-varnish" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-1.5 normal-case tracking-normal text-ink-mute">(optional)</span>
      )}
    </Tag>
  );
}

export default function RequestForm({ kind }: { kind: FormKind }) {
  const form = FORMS[kind];
  const [values, setValues] = useState<FormValues>({});
  const [status, setStatus] = useState<Status>("idle");
  const complete = isFormComplete(form, values);

  const set = (name: string, value: string | string[]) => setValues((v) => ({ ...v, [name]: value }));

  const toggle = (name: string, option: string) => {
    const current = Array.isArray(values[name]) ? (values[name] as string[]) : [];
    set(name, current.includes(option) ? current.filter((o) => o !== option) : [...current, option]);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!complete) return;
    const honeypot = new FormData(e.currentTarget).get("address2");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, values, address2: honeypot }),
      });
      if (res.ok) {
        setStatus("sent");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-line bg-white/60 p-8 md:p-12">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-varnish text-paper">
          <Check size={20} strokeWidth={1.75} />
        </span>
        <h2 className="mt-6 font-display text-3xl leading-tight text-ink md:text-4xl">{THANKS_TITLE}</h2>
        {form.thanks.map((t) => (
          <p key={t} className="mt-4 max-w-lg leading-relaxed text-ink-soft">
            {t}
          </p>
        ))}
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-mute">
          A confirmation has been sent to {values.email as string}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      {form.fields.map((field) => {
        const id = `${kind}-${field.name}`;
        const value = values[field.name];
        const wrap = cn(field.wide && "sm:col-span-2");

        if (field.type === "checkboxes") {
          const selected = Array.isArray(value) ? value : [];
          return (
            <fieldset key={field.name} className={wrap}>
              <Label field={field} />
              <div className="grid gap-2 sm:grid-cols-2">
                {field.options?.map((option) => {
                  const checked = selected.includes(option);
                  return (
                    <label
                      key={option}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 border px-4 py-3 text-sm leading-snug transition-colors",
                        checked ? "border-varnish bg-varnish/5 text-ink" : "border-line bg-white/60 text-ink-soft hover:border-ink-mute"
                      )}
                    >
                      <input
                        type="checkbox"
                        name={field.name}
                        value={option}
                        checked={checked}
                        onChange={() => toggle(field.name, option)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-varnish"
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          );
        }

        const common = {
          id,
          name: field.name,
          required: field.required,
          maxLength: field.maxLength,
          autoComplete: field.autoComplete,
          placeholder: field.placeholder,
          value: typeof value === "string" ? value : "",
          onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
          ) => set(field.name, e.target.value),
        };

        return (
          <div key={field.name} className={wrap}>
            <Label field={field} htmlFor={id} />
            {field.type === "select" ? (
              <select {...common} className={cn(fieldClass, "appearance-none", !common.value && "text-ink-mute")}>
                <option value="" disabled>
                  Select
                </option>
                {field.options?.map((o) => (
                  <option key={o} value={o} className="text-ink">
                    {o}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea {...common} rows={6} className={cn(fieldClass, "resize-y")} />
            ) : (
              <input {...common} type={field.type} className={fieldClass} />
            )}
          </div>
        );
      })}

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${kind}-address2`}>Address line 2</label>
        <input id={`${kind}-address2`} name="address2" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex min-h-[3.25rem] flex-wrap items-center gap-5 sm:col-span-2">
        {complete ? (
          <button
            type="submit"
            disabled={status === "sending"}
            className="animate-[fade-up_0.35s_ease-out] bg-varnish px-8 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-varnish-dark disabled:cursor-wait disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Request"}
          </button>
        ) : (
          <p className="text-sm text-ink-mute" aria-live="polite">
            Please complete all fields marked <span className="text-varnish">*</span> to send your request.
          </p>
        )}

        {(status === "unavailable" || status === "error") && (
          <p role="alert" className="text-sm leading-relaxed text-varnish">
            {status === "unavailable"
              ? "Online sending is not available right now. "
              : "Your request could not be sent. "}
            Please write to{" "}
            <a className="underline underline-offset-2" href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
