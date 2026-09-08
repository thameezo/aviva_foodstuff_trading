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
      className="group relative block bg-white rounded-card p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
    >
      <span className="text-xs manifest-number font-medium">{String(index).padStart(2, "0")}</span>
      <h3 className="mt-4 font-sans tracking-tight text-2xl font-semibold text-ink">{name}</h3>
      <p className="mt-2 text-sm text-ink-soft">{tagline}</p>
      <p className="mt-6 text-xs uppercase tracking-wide text-ink-soft/70">{count}+ items in catalogue</p>
      <span className="mt-4 inline-block text-sm text-accent group-hover:text-ink transition-colors">
        Explore category &rarr;
      </span>
    </Link>
  );
}
