import Link from "next/link";

export interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items, siteUrl }: { items: Crumb[]; siteUrl: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href ? `${siteUrl}${item.href}` : undefined
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-soft mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-line">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">{item.name}</Link>
            ) : (
              <span className="text-ink">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
