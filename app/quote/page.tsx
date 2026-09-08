import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { EnquiryButtons } from "@/components/EnquiryButtons";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "Request a Quote | AVIVA Foodstuff Trading",
  description:
    "Request a quotation from AVIVA Foodstuff Trading for beverages, chips & snacks, or chocolates & confectionery. Ajman, UAE.",
  alternates: { canonical: "/quote" }
};

export default function QuotePage() {
  return (
    <div className="container-page py-14">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Request a Quote" }]} siteUrl={siteUrl} />

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="font-serif text-4xl font-semibold text-ink mb-3">Request a Quote</h1>
          <p className="text-ink-soft max-w-xl mb-8">
            Tell us what you&apos;re looking for and AVIVA&apos;s sales team will follow up with
            product information and a quotation.
          </p>
          <Suspense fallback={<div className="h-96" />}>
            <QuoteForm />
          </Suspense>
        </div>

        <aside className="h-fit rounded-card bg-sky p-6 text-sm space-y-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">Prefer to talk directly?</div>
            <p className="text-ink-soft mb-4">
              Reach AVIVA&apos;s sales team by phone or WhatsApp for a faster response.
            </p>
            <EnquiryButtons compact />
          </div>
          <div className="border-t border-line pt-4">
            <div className="text-xs uppercase tracking-wide text-ink-soft/70">Email</div>
            <a href={company.emailHref} className="text-ink hover:text-wheat">{company.email}</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
