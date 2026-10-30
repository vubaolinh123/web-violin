import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_INFO, SITE_NAME, SITE_URL } from "@/lib/constants";
import { fill, getDictionary } from "@/lib/dictionary";
import { FORMS, isFieldValid, summarise, type FormKind, type FormValues } from "@/lib/forms";
import { DEFAULT_LOCALE, hasLocale, localePath } from "@/lib/i18n";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
// Two emails over SMTP to a server in Vietnam; leave room above Vercel's short default.
export const maxDuration = 30;

interface Payload {
  kind?: unknown;
  lang?: unknown;
  values?: unknown;
  address2?: unknown; // honeypot
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** One accepted request per sender every 15 seconds, tracked per IP and per email address. */
const RATE_LIMIT_MS = 15_000;

function clientIp(request: Request) {
  // Vercel sets these from the connecting client and overwrites any value the client sent.
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

/** Strips characters that could break out of an address header. */
function headerSafe(value: string) {
  return value.replace(/[<>"\r\n]/g, "");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they move on.
  if (clean(body.address2, 100)) return NextResponse.json({ ok: true });

  const form = typeof body.kind === "string" ? FORMS[body.kind as FormKind] : undefined;
  const raw = body.values && typeof body.values === "object" ? (body.values as Record<string, unknown>) : null;
  if (!form || !raw) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const values: FormValues = {};
  for (const field of form.fields) {
    const v = raw[field.name];
    values[field.name] =
      field.type === "checkboxes"
        ? (Array.isArray(v) ? v : []).slice(0, 20).map((i) => clean(i, 200)).filter(Boolean)
        : clean(v, field.maxLength ?? 200);
  }
  if (!form.fields.every((f) => isFieldValid(f, values[f.name]))) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const retryAfter = await rateLimit(
    [`ip:${clientIp(request)}`, `email:${String(values.email).toLowerCase()}`],
    RATE_LIMIT_MS
  );
  if (retryAfter) {
    return NextResponse.json(
      { error: "rate_limited", retryAfter },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const port = Number(SMTP_PORT ?? 587);
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    // Fail fast instead of running until the function is cut off.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const name = headerSafe(values.name as string);
  const email = values.email as string;
  const message = values.message as string;
  const from = CONTACT_FROM ?? SMTP_USER ?? CONTACT_INFO.email;
  const inbox = CONTACT_TO ?? CONTACT_INFO.email;
  const lang = typeof body.lang === "string" && hasLocale(body.lang) ? body.lang : DEFAULT_LOCALE;
  const t = getDictionary(lang).form;
  const summary = summarise(form, values);

  try {
    await transport.sendMail({
      from,
      to: inbox,
      replyTo: `${name} <${email}>`,
      subject: `${form.subject} — ${name}`,
      text: [...summary, `Language: ${lang.toUpperCase()}`, "", message || "(no message)"].join("\n"),
    });
  } catch (error) {
    console.error("Contact form: sending failed", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  // The request has reached us; a failed confirmation should not turn that into an error.
  try {
    await transport.sendMail({
      from,
      to: `${name} <${email}>`,
      replyTo: inbox,
      subject: t.thanksTitle,
      text: [
        fill(t.email.dear, { name }),
        "",
        t.thanksTitle,
        t.thanks[form.kind],
        "",
        t.email.sent,
        "",
        ...summarise(form, values, t.labels, t.options),
        ...(message ? ["", message] : []),
        "",
        t.email.regards,
        SITE_NAME,
        CONTACT_INFO.email,
        `${SITE_URL}${localePath(lang, "/")}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact form: confirmation email failed", error);
  }

  return NextResponse.json({ ok: true });
}
