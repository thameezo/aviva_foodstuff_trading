import Link from "next/link";
import { company } from "@/data/company";

export function EnquiryButtons({
  productName,
  compact = false
}: {
  productName?: string;
  compact?: boolean;
}) {
  const waMessage = productName
    ? `Hi AVIVA, I'd like to enquire about ${productName}.`
    : `Hi AVIVA, I'd like to enquire about your product catalogue.`;
  const waHref = `${company.whatsappHref}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className={compact ? "flex gap-2" : "flex flex-wrap gap-3"}>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2 text-sm border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
      >
        WhatsApp Sales
      </a>
      <Link
        href={productName ? `/quote?product=${encodeURIComponent(productName)}` : "/quote"}
        className="inline-flex items-center justify-center px-4 py-2 text-sm bg-wheat text-ink font-medium hover:bg-wheat-light transition-colors"
      >
        Request a Quote
      </Link>
      {!compact && (
        <a
          href={company.phoneHref}
          className="inline-flex items-center justify-center px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors"
        >
          Call {company.phone}
        </a>
      )}
    </div>
  );
}
