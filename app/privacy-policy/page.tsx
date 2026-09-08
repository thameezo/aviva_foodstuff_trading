import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AVIVA Foodstuff Trading handles information submitted through this website.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-14 max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} siteUrl={siteUrl} />
      <h1 className="font-sans tracking-tight text-3xl font-semibold text-ink mb-6">Privacy Policy</h1>
      <div className="prose-sm text-ink-soft space-y-4 text-sm leading-relaxed">
        <p>
          This page explains, in general terms, how {company.legalName} (&quot;AVIVA&quot;, &quot;we&quot;,
          &quot;us&quot;) handles information submitted through this website&apos;s enquiry and quote
          request forms. This is a template and should be reviewed by a qualified advisor before
          publishing, and adjusted to reflect AVIVA&apos;s actual data handling practices.
        </p>
        <h2 className="font-sans tracking-tight text-xl font-semibold text-ink pt-4">Information We Collect</h2>
        <p>
          When you submit an enquiry or quote request, we collect the details you provide, such as
          your name, company name, business type, email address, phone number, emirate/country and
          any message or product information you include.
        </p>
        <h2 className="font-sans tracking-tight text-xl font-semibold text-ink pt-4">How We Use It</h2>
        <p>
          We use this information to respond to your enquiry, prepare quotations, and follow up on
          business requests. We do not sell this information to third parties.
        </p>
        <h2 className="font-sans tracking-tight text-xl font-semibold text-ink pt-4">Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={company.emailHref} className="text-ink hover:text-accent">{company.email}</a>.
        </p>
      </div>
    </div>
  );
}
