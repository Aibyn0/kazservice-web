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
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-700">
          <span className="mb-1 block font-medium">{labels.formName}</span>
          <input name="name" required className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm text-slate-700">
          <span className="mb-1 block font-medium">{labels.formContact}</span>
          <input name="contact" required className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <label className="block text-sm text-slate-700">
        <span className="mb-1 block font-medium">{labels.formCompany}</span>
        <input name="company" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
      </label>
      <label className="block text-sm text-slate-700">
        <span className="mb-1 block font-medium">{labels.formNeed}</span>
        <textarea name="need" required rows={5} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
      >
        {submitting ? labels.formSubmitting : labels.formSubmit}
      </button>
      {submitted && <p className="text-sm text-green-700">{labels.formSuccess}</p>}
      {error && <p className="text-sm text-red-700">{error}</p>}
    </form>
  );
}
