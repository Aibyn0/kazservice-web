"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  labels: {
    formName: string;
    formContact: string;
    formCompany: string;
    formNeed: string;
    formSubmit: string;
    formSuccess: string;
    formSubmitting: string;
    formError: string;
  };
};

export function ContactForm({ labels }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setSubmitted(false);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      company: String(formData.get("company") ?? ""),
      need: String(formData.get("need") ?? ""),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("submit failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(labels.formError);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="contact-form content-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span>{labels.formName}</span>
          <input name="name" required />
        </label>
        <label>
          <span>{labels.formContact}</span>
          <input name="contact" required />
        </label>
      </div>
      <label>
        <span>{labels.formCompany}</span>
        <input name="company" />
      </label>
      <label>
        <span>{labels.formNeed}</span>
        <textarea name="need" required rows={5} />
      </label>
      <button type="submit" disabled={submitting} className="btn btn-primary w-fit">
        {submitting ? labels.formSubmitting : labels.formSubmit}
      </button>
      {submitted && <p className="contact-form__success">{labels.formSuccess}</p>}
      {error && <p className="contact-form__error">{error}</p>}
    </form>
  );
}
