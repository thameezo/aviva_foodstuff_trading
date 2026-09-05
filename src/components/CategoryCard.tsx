import Link from "next/link";

export function CategoryCard({
  index,
  name,
  tagline,
  href,
  count
}: {
  index: number;
  name: string;
  tagline: string;
  href: string;
  count: number;
}) {
  return (
    <Link
      href={href}
      className="group relative block border border-line bg-white p-8 hover:border-ink transition-colors"
    >
      <span className="text-xs manifest-number font-medium">{String(index).padStart(2, "0")}</span>
      <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">{name}</h3>
      <p className="mt-2 text-sm text-ink-soft">{tagline}</p>
      <p className="mt-6 text-xs uppercase tracking-wide text-ink-soft/70">{count}+ items in catalogue</p>
      <span className="mt-4 inline-block text-sm text-wheat group-hover:text-ink transition-colors">
        Explore category &rarr;
      </span>
    </Link>
  );
}
