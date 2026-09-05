import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the AVIVA Foodstuff Trading website.",
  alternates: { canonical: "/terms-of-use" }
};

export default function TermsPage() {
  return (
    <div className="container-page py-14 max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Use" }]} siteUrl={siteUrl} />
      <h1 className="font-serif text-3xl font-semibold text-ink mb-6">Terms of Use</h1>
      <div className="text-ink-soft space-y-4 text-sm leading-relaxed">
        <p>
          This website is operated by {company.legalName}. It is provided for the purpose of
          presenting AVIVA&apos;s product catalogue to business customers and receiving enquiries
          and quotation requests. This is a template and should be reviewed by a qualified advisor
          before publishing.
        </p>
        <h2 className="font-serif text-xl font-semibold text-ink pt-4">Not an Online Store</h2>
        <p>
          This website does not process payments or sales. Prices are not published online; all
          orders and pricing are handled directly by AVIVA&apos;s sales team following an enquiry.
        </p>
        <h2 className="font-serif text-xl font-semibold text-ink pt-4">Product Information</h2>
        <p>
          Product names, packaging descriptions and images are provided for identification purposes
          and are drawn from AVIVA&apos;s supplied catalogues. See the{" "}
          <a href="/product-disclaimer" className="text-ink hover:text-wheat">Product Disclaimer</a>{" "}
          for further detail.
        </p>
        <h2 className="font-serif text-xl font-semibold text-ink pt-4">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={company.emailHref} className="text-ink hover:text-wheat">{company.email}</a>.
        </p>
      </div>
    </div>
  );
}
