import type { ProductCategory } from "@/data/types";

// Simple original line-art icons used as a placeholder until a real product
// photo is added (see the `image` field in src/data/products/*.ts).

function BottleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" strokeWidth="1.6">
      <path
        d="M20 6h8v6.5l3 4V40a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3V16.5l3-4V6Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M19 6h10" stroke="currentColor" strokeLinecap="round" />
      <path d="M17 24h14" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function SnackBagIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" strokeWidth="1.6">
      <path
        d="M15 12h18l3 26a3 3 0 0 1-3 3.4H15A3 3 0 0 1 12 38l3-26Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M18 12c0-4 2.5-6.5 6-6.5s6 2.5 6 6.5" stroke="currentColor" />
      <path d="M17 24h14" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function ChocolateBarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" strokeWidth="1.6">
      <rect x="8" y="14" width="32" height="20" rx="2.5" stroke="currentColor" />
      <path d="M16 14v20M24 14v20M32 14v20" stroke="currentColor" opacity="0.5" />
      <path d="M8 24h32" stroke="currentColor" opacity="0.5" />
    </svg>
  );
}

const iconByCategory: Record<ProductCategory, () => JSX.Element> = {
  "Beverages": BottleIcon,
  "Chips & Snacks": SnackBagIcon,
  "Chocolates & Confectionery": ChocolateBarIcon
};

export function CategoryIcon({ category }: { category: ProductCategory }) {
  const Icon = iconByCategory[category];
  return <Icon />;
}
