"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const productCategoryOptions = [
  "Beverages",
  "Chips & Snacks",
  "Chocolates & Confectionery",
  "Multiple Categories",
  "Other"
];

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <h2 className="font-serif text-xl font-semibold text-ink mb-2">Enquiry sent</h2>
        <p className="text-ink-soft text-sm">
          Thank you &mdash; AVIVA&apos;s sales team will get back to you shortly. You can also
          reach us directly by phone or WhatsApp for a faster response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" name="fullName" required />
        <Field label="Company Name" name="companyName" required />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Business Type" name="businessType" placeholder="e.g. Supermarket, Cafe, Distributor" />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Country / Emirate" name="emirate" placeholder="e.g. Dubai, Sharjah, Ajman" />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-ink-soft/70 mb-1">
          Products of Interest
        </label>
        <select
          name="productsOfInterest"
          className="w-full border border-line px-3 py-2 text-sm bg-white"
          defaultValue={prefilledProduct ? "Other" : ""}
        >
          <option value="" disabled>Select a category</option>
          {productCategoryOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <Field
        label="Estimated Quantity (optional)"
        name="estimatedQuantity"
        placeholder="e.g. 50 cartons per month"
      />

      <div>
        <label className="block text-xs uppercase tracking-wide text-ink-soft/70 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          defaultValue={prefilledProduct ? `I'd like a quote for: ${prefilledProduct}` : ""}
          className="w-full border border-line px-3 py-2 text-sm bg-white"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-rust">
          Something went wrong sending your enquiry. Please try again, or contact us directly by
          phone or WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 bg-wheat text-ink text-sm font-medium hover:bg-wheat-light transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Quote"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wide text-ink-soft/70 mb-1">
        {label}
        {required && <span className="text-wheat"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-line px-3 py-2 text-sm bg-white"
      />
    </div>
  );
}
