import Link from "next/link";
import type { Product } from "@/data/types";
import { categoryNameToSlug } from "@/data/company";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const categorySlug = categoryNameToSlug[product.category];
  return (
    <div className="group border border-line bg-white flex flex-col">
      <div className="aspect-square bg-sky flex items-center justify-center text-ink-soft/40 text-xs border-b border-line relative">
        {typeof index === "number" && (
          <span className="absolute top-2 left-2 text-[11px] manifest-number font-medium">
            {String(index + 1).padStart(3, "0")}
          </span>
        )}
        <span className="px-4 text-center">{product.product_name}</span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-[11px] uppercase tracking-wide text-wheat font-medium">
          {product.subcategory}
        </span>
        <h3 className="font-serif text-base font-semibold text-ink leading-snug">
          {product.product_name}
        </h3>
        {product.packaging && (
          <p className="text-xs text-ink-soft">Packaging: {product.packaging}</p>
        )}
        <div className="mt-auto pt-3 flex items-center justify-between text-sm">
          <Link
            href={`/products/${categorySlug}/${product.slug}`}
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            View Product
          </Link>
          <Link
            href={`/quote?product=${encodeURIComponent(product.product_name)}`}
            className="text-wheat font-medium hover:text-ink"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
