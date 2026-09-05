import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductBrowser } from "@/components/ProductBrowser";
import { allProducts } from "@/lib/products";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  title: "Product Catalogue | Beverages, Snacks & Confectionery Wholesale UAE",
  description:
    "Browse AVIVA's full FMCG product catalogue: beverages, chips & snacks, and chocolates & confectionery available for wholesale supply across the UAE.",
  alternates: { canonical: "/products" }
};

export default function ProductsPage() {
  const subcategories = Array.from(new Set(allProducts.map((p) => p.subcategory))).sort();

  return (
    <div className="container-page py-14">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Products" }]} siteUrl={siteUrl} />

      <h1 className="font-serif text-4xl font-semibold text-ink mb-3">Product Catalogue</h1>
      <p className="text-ink-soft max-w-2xl mb-4">
        {allProducts.length} products across Beverages, Chips &amp; Snacks, and Chocolates &amp;
        Confectionery. Browse by category below, or use search and filters to find a specific item.
      </p>
      <div className="flex flex-wrap gap-3 mb-10 text-sm">
        <a href="/products/beverages" className="underline decoration-line hover:decoration-ink">Beverages</a>
        <span className="text-line">&middot;</span>
        <a href="/products/chips-snacks" className="underline decoration-line hover:decoration-ink">Chips &amp; Snacks</a>
        <span className="text-line">&middot;</span>
        <a href="/products/chocolates-confectionery" className="underline decoration-line hover:decoration-ink">Chocolates &amp; Confectionery</a>
      </div>

      <ProductBrowser products={allProducts} subcategories={subcategories} />
    </div>
  );
}
