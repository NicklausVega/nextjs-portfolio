"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EMAIL } from "@/lib/site-content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const NEEDS = ["IT or security", "Internal tools or automation", "Website or brand", "Something else"];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const need = String(data.get("need") ?? NEEDS[0]);
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Add an email address I can reply to.";
    if (!message) next.message = "Tell me a little about the project.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    const subject = encodeURIComponent(`Project inquiry: ${need}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setSending(true);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setSending(false), 1200);
  };

  const field = (key: keyof Errors) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `err-${key}` : undefined,
  });

  return (
    <form className="card card--pad form" noValidate onSubmit={onSubmit} aria-label="Draft an email to Nicklaus">
      <div className="form__pair">
        <div className="field" data-invalid={Boolean(errors.name)}>
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" autoComplete="name" placeholder="Full name" required {...field("name")} />
          {errors.name ? (
            <p className="field__error" id="err-name">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="field" data-invalid={Boolean(errors.email)}>
          <label htmlFor="cf-email">Your email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            {...field("email")}
          />
          {errors.email ? (
            <p className="field__error" id="err-email">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-need">What do you need?</label>
        <div className="field__select">
          <select id="cf-need" name="need" defaultValue={NEEDS[0]}>
            {NEEDS.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
          <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
      <div className="field" data-invalid={Boolean(errors.message)}>
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="What you're building, and when you need it."
          required
          {...field("message")}
        />
        {errors.message ? (
          <p className="field__error" id="err-message">
            {errors.message}
          </p>
        ) : null}
      </div>
      <p className="t-small t-muted form__note">This opens a draft in your email app. Nothing is stored on this site.</p>
      <button type="submit" className="btn btn--primary btn--block">
        {sending ? "Opening your email app" : "Open email draft"}
        <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  );
}
