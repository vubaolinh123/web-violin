"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import GoldDivider from "@/components/ui/GoldDivider";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-parchment font-light">Contact Us</h1>
          <GoldDivider width="md" className="mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto">
                  <Send size={24} className="text-gold" />
                </div>
                <h2 className="font-display text-3xl text-parchment">Message Sent</h2>
                <p className="font-body text-parchment/60">
                  Thank you for reaching out. We&apos;ll reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { id: "subject", label: "Subject (optional)", type: "text", placeholder: "Instrument inquiry…" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block font-body text-sm text-parchment/60 mb-1.5">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => update(id, e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 focus:border-gold/60 focus:outline-none text-parchment text-sm rounded placeholder:text-parchment/25 transition-colors"
                    />
                    {errors[id] && <p className="mt-1 text-xs text-red-400">{errors[id]}</p>}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block font-body text-sm text-parchment/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your inquiry…"
                    className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 focus:border-gold/60 focus:outline-none text-parchment text-sm rounded placeholder:text-parchment/25 transition-colors resize-none"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold hover:bg-gold-light text-charcoal font-medium rounded transition-colors"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Store info */}
          <div className="space-y-8">
            <div className="bg-charcoal-800 border border-charcoal-700 rounded p-6 space-y-6">
              {[
                { icon: MapPin, label: "Address", value: CONTACT_INFO.address },
                { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
                { icon: Mail, label: "Email", value: CONTACT_INFO.email },
                { icon: Clock, label: "Hours", value: CONTACT_INFO.hours },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gold/60 tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="font-body text-sm text-parchment/70">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Map placeholder */}
            <div className="aspect-video bg-charcoal-700 rounded border border-charcoal-600 flex items-center justify-center">
              <p className="font-body text-sm text-parchment/30">Map embed placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
