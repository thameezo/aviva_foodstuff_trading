import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "Contact Us | AVIVA Foodstuff Trading, Ajman UAE",
  description:
    "Contact AVIVA Foodstuff Trading S.P.S-LLC in Ajman, UAE by phone, WhatsApp or email for product enquiries and quotations.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="container-page py-14">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} siteUrl={siteUrl} />

      <h1 className="font-serif text-4xl font-semibold text-ink mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="border border-line bg-white p-6 space-y-5 text-sm mb-8">
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">Company</div>
              <div className="text-ink font-medium">{company.legalName}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">Address</div>
              <div className="text-ink">{company.addressLine}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">Phone</div>
              <a href={company.phoneHref} className="text-ink hover:text-wheat">{company.phone}</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">WhatsApp</div>
              <a href={company.whatsappHref} className="text-ink hover:text-wheat">{company.whatsapp}</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">Email</div>
              <a href={company.emailHref} className="text-ink hover:text-wheat">{company.email}</a>
            </div>
          </div>

          <div className="border border-line bg-sky p-4 text-xs text-ink-soft">
            <p>
              Google Maps embed placeholder &mdash; add a Google Maps API key in
              <code className="mx-1 px-1 bg-white border border-line">.env.local</code>
              and replace this block with an embedded map for {company.addressShort}.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink mb-4">Send an Enquiry</h2>
          <Suspense fallback={<div className="h-96" />}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
