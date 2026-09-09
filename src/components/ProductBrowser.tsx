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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    products.forEach((p) => map.set(p.subcategory, (map.get(p.subcategory) || 0) + 1));
    return map;
  }, [products]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery = q ? p.product_name.toLowerCase().includes(q) : true;
      const matchesSub = activeSub === "All" ? true : p.subcategory === activeSub;
      return matchesQuery && matchesSub;
    });
  }, [products, query, activeSub]);

  const shown = filtered.slice(0, visible);

  const filterPanel = (
    <div>
      <div>
        <label className="text-xs uppercase tracking-wide text-ink-soft/70 block mb-2">Search</label>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          placeholder="Search products..."
          className="w-full rounded-lg border border-line/70 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-accent"
          aria-label="Search products"
        />
      </div>

      <div className="mt-7">
        <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-2">Category</div>
        <ul className="space-y-0.5">
          {["All", ...subcategories].map((sub) => {
            const isActive = activeSub === sub;
            const count = sub === "All" ? products.length : counts.get(sub) || 0;
            return (
              <li key={sub}>
                <button
                  onClick={() => {
                    setActiveSub(sub);
                    setVisible(PAGE_SIZE);
                    setMobileFiltersOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    isActive ? "bg-accent-dim text-accent font-medium" : "text-ink-soft hover:bg-sky hover:text-ink"
                  }`}
                >
                  <span>{sub}</span>
                  <span className="text-xs text-ink-soft/60">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="md:grid md:grid-cols-[240px_1fr] md:gap-10 lg:grid-cols-[260px_1fr]">
      {/* Mobile filter toggle */}
      <div className="md:hidden mb-5 flex items-center justify-between gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          placeholder="Search products..."
          className="flex-1 rounded-lg border border-line/70 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-accent"
          aria-label="Search products"
        />
        <button
          onClick={() => setMobileFiltersOpen((v) => !v)}
          className="shrink-0 px-4 py-2.5 rounded-lg border border-line/70 text-sm text-ink bg-white"
        >
          Filter{activeSub !== "All" ? ` · ${activeSub}` : ""}
        </button>
      </div>
      {mobileFiltersOpen && (
        <div className="md:hidden mb-6 rounded-card bg-white shadow-card p-5">
          <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-2">Category</div>
          <ul className="space-y-0.5">
            {["All", ...subcategories].map((sub) => {
              const isActive = activeSub === sub;
              const count = sub === "All" ? products.length : counts.get(sub) || 0;
              return (
                <li key={sub}>
                  <button
                    onClick={() => {
                      setActiveSub(sub);
                      setVisible(PAGE_SIZE);
                      setMobileFiltersOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2 text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      isActive ? "bg-accent-dim text-accent font-medium" : "text-ink-soft hover:bg-sky hover:text-ink"
                    }`}
                  >
                    <span>{sub}</span>
                    <span className="text-xs text-ink-soft/60">{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Sidebar (desktop) */}
      <aside className="hidden md:block sticky top-20 self-start">{filterPanel}</aside>

      {/* Results */}
      <div>
        <p className="text-sm text-ink-soft mb-4">
          Showing {shown.length} of {filtered.length} products
        </p>

        {shown.length === 0 ? (
          <p className="text-ink-soft py-16 text-center">No products match your search.</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {shown.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="px-6 py-2.5 rounded-pill border border-ink text-ink text-sm shadow-card hover:shadow-card-hover hover:bg-ink hover:text-paper transition-all"
            >
              Load more products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
