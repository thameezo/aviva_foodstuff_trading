import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "Product Disclaimer",
  description: "Clarification on AVIVA Foodstuff Trading's relationship to third-party brands shown in its catalogue.",
  alternates: { canonical: "/product-disclaimer" }
};

export default function ProductDisclaimerPage() {
  return (
    <div className="container-page py-14 max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Product Disclaimer" }]} siteUrl={siteUrl} />
      <h1 className="font-serif text-3xl font-semibold text-ink mb-6">Product Disclaimer</h1>
      <div className="text-ink-soft space-y-4 text-sm leading-relaxed">
        <p>
          {company.legalName} is a foodstuff and FMCG trading and distribution company. Products
          listed on this website are supplied through AVIVA&apos;s trading and supply catalogue.
        </p>
        <p>
          All product names, brand names, logos and trademarks referenced on this website (including
          but not limited to third-party beverage, snack and confectionery brands) are the property
          of their respective owners. Their inclusion in AVIVA&apos;s catalogue indicates that AVIVA
          trades in and supplies these products &mdash; it does not indicate that AVIVA owns,
          manufactures, or is officially authorized or endorsed by every brand shown.
        </p>
        <p>
          Packaging descriptions, pack sizes and product names are drawn directly from AVIVA&apos;s
          supplied brochures. Availability, packaging and pricing are subject to change and should
          be confirmed with AVIVA&apos;s sales team at the time of enquiry.
        </p>
      </div>
    </div>
  );
}
