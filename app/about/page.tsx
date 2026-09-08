import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryButtons } from "@/components/EnquiryButtons";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "About AVIVA Foodstuff Trading | FMCG Trading Company, Ajman UAE",
  description:
    "AVIVA Foodstuff Trading S.P.S-LLC operates in the foodstuff and FMCG trading sector, supplying beverages, chips & snacks, and chocolates & confectionery across the UAE from its base in Ajman.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="container-page py-14">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} siteUrl={siteUrl} />

      <h1 className="font-sans tracking-tight text-4xl font-semibold text-ink mb-8">About AVIVA</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-3">Who We Are</h2>
            <p className="text-ink-soft leading-relaxed">
              {company.legalName} operates in the foodstuff and FMCG trading sector, with a product
              range spanning beverages, chips &amp; snacks, and chocolates &amp; confectionery. The
              company is based in {company.addressShort}.
            </p>
          </section>

          <section>
            <h2 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-3">Our Product Categories</h2>
            <p className="text-ink-soft leading-relaxed">
              AVIVA&apos;s catalogue is organized into three core categories &mdash; Beverages, Chips
              &amp; Snacks, and Chocolates &amp; Confectionery &mdash; covering a wide range of brands
              and pack formats available through the company&apos;s trading and supply catalogue.
            </p>
          </section>

          <section>
            <h2 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-3">Our Approach</h2>
            <p className="text-ink-soft leading-relaxed">
              AVIVA positions its catalogue for business buyers: products are presented by category
              and packaging format rather than as individual consumer purchases, and enquiries are
              handled directly by the sales team via phone, WhatsApp or email.
            </p>
          </section>

          <section>
            <h2 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-3">Who We Work With</h2>
            <p className="text-ink-soft leading-relaxed">
              AVIVA supplies supermarkets, grocery stores, hypermarkets, wholesale buyers, retailers,
              cafes, restaurants, hotels, catering companies, FMCG distributors and corporate buyers
              across the UAE.
            </p>
          </section>

          <section>
            <h2 className="font-sans tracking-tight text-2xl font-semibold text-ink mb-3">Business Enquiries</h2>
            <p className="text-ink-soft leading-relaxed mb-4">
              For product information, quotations or general enquiries, reach AVIVA&apos;s sales team
              directly using the options below.
            </p>
            <EnquiryButtons />
          </section>
        </div>

        <aside className="rounded-card bg-white shadow-card p-6 h-fit text-sm space-y-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-ink-soft/70">Company</div>
            <div className="text-ink font-medium">{company.legalName}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-ink-soft/70">Location</div>
            <div className="text-ink">{company.addressLine}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-ink-soft/70">Categories</div>
            <ul className="text-ink space-y-1 mt-1">
              <li>Beverages</li>
              <li>Chips &amp; Snacks</li>
              <li>Chocolates &amp; Confectionery</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
