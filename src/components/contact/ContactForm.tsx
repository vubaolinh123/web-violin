"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

const SALUTATIONS = ["Mr", "Ms", "Mrs", "Dr", "Prof", "Other"];

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";

interface ContactFormProps {
  /** Products selected on the inquiry page, sent along with the message. */
  items?: string[];
  defaultMessage?: string;
  onSent?: () => void;
}

const field =
  "w-full border border-line bg-white/60 px-4 py-3 text-base text-ink placeholder:text-ink-mute transition-colors focus:border-varnish focus:outline-none";
const label = "mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft";

export default function ContactForm({ items = [], defaultMessage = "", onSent }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          salutation: data.get("salutation"),
          name: data.get("name"),
          email: data.get("email"),
          organisation: data.get("organisation"),
          message: data.get("message"),
          website: data.get("website"),
          items,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        onSent?.();
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-line bg-white/60 p-8 md:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-varnish text-paper">
          <Check size={20} strokeWidth={1.75} />
        </span>
        <h3 className="mt-6 font-display text-3xl text-ink">Thank you.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          Your message has reached us. We will reply to the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-[9rem_1fr]">
        <div>
          <label htmlFor="salutation" className={label}>
            Title
          </label>
          <select id="salutation" name="salutation" required defaultValue="" className={cn(field, "appearance-none")}>
            <option value="" disabled>
              Select
            </option>
            {SALUTATIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name" className={label}>
            Full name
          </label>
          <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className={field} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="organisation" className={label}>
            Company or organisation <span className="normal-case tracking-normal text-ink-mute">(optional)</span>
          </label>
          <input id="organisation" name="organisation" type="text" maxLength={160} autoComplete="organization" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Your request
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          defaultValue={defaultMessage}
          className={cn(field, "resize-y")}
        />
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-varnish px-8 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-varnish-dark disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {(status === "unavailable" || status === "error") && (
          <p role="alert" className="text-sm leading-relaxed text-varnish">
            {status === "unavailable"
              ? "Online sending is not available right now. "
              : "Your message could not be sent. "}
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
