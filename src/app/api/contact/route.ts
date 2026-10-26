import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_INFO } from "@/lib/constants";

export const runtime = "nodejs";

const SALUTATIONS = ["Mr", "Ms", "Mrs", "Dr", "Prof", "Other"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Payload {
  salutation?: unknown;
  name?: unknown;
  email?: unknown;
  organisation?: unknown;
  message?: unknown;
  items?: unknown;
  website?: unknown; // honeypot
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they move on.
  if (text(body.website, 100)) return NextResponse.json({ ok: true });

  const salutation = text(body.salutation, 20);
  const name = text(body.name, 120);
  const email = text(body.email, 200);
  const organisation = text(body.organisation, 160);
  const message = text(body.message, 5000);
  const items = Array.isArray(body.items)
    ? body.items.slice(0, 20).map((i) => text(i, 200)).filter(Boolean)
    : [];

  if (!SALUTATIONS.includes(salutation) || !name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
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
  });

  const lines = [
    `From: ${salutation} ${name} <${email}>`,
    ...(organisation ? [`Organisation: ${organisation}`] : []),
    ...(items.length > 0
      ? [`Products of interest:`, ...items.map((i) => `  - ${i}`)]
      : []),
    "",
    message,
  ];

  try {
    await transport.sendMail({
      from: CONTACT_FROM ?? SMTP_USER ?? CONTACT_INFO.email,
      to: CONTACT_TO ?? CONTACT_INFO.email,
      replyTo: `${name.replace(/[<>"\r\n]/g, "")} <${email}>`,
      subject: `Strad Plus website inquiry — ${name}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("Contact form: sending failed", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
