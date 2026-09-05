"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/types";
import { ProductCard } from "@/components/ProductCard";

const PAGE_SIZE = 24;

export function ProductBrowser({
  products,
  subcategories
}: {
  products: Product[];
  subcategories: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeSub, setActiveSub] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery = q ? p.product_name.toLowerCase().includes(q) : true;
      const matchesSub = activeSub === "All" ? true : p.subcategory === activeSub;
      return matchesQuery && matchesSub;
    });
  }, [products, query, activeSub]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          placeholder="Search products by name..."
          className="w-full md:w-80 border border-line px-4 py-2 text-sm bg-white focus:outline-none"
          aria-label="Search products"
        />
        <div className="flex flex-wrap gap-2">
          {["All", ...subcategories].map((sub) => (
            <button
              key={sub}
              onClick={() => {
                setActiveSub(sub);
                setVisible(PAGE_SIZE);
              }}
              className={`text-xs px-3 py-1.5 border transition-colors ${
                activeSub === sub
                  ? "bg-ink text-paper border-ink"
                  : "border-line text-ink-soft hover:border-ink"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-ink-soft mb-4">
        Showing {shown.length} of {filtered.length} products
      </p>

      {shown.length === 0 ? (
        <p className="text-ink-soft py-16 text-center">No products match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {shown.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="px-6 py-2 border border-ink text-ink text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Load more products
          </button>
        </div>
      )}
    </div>
  );
}
