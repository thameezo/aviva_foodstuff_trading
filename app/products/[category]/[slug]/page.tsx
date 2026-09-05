import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryButtons } from "@/components/EnquiryButtons";
import { ProductCard } from "@/components/ProductCard";
import { categorySlugToName, company } from "@/data/company";
import { allProducts, getProductBySlug, getProductsByCategorySlug } from "@/lib/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export function generateStaticParams() {
  return allProducts.map((p) => ({
    category: Object.entries(categorySlugToName).find(([, name]) => name === p.category)![0],
    slug: p.slug
  }));
}

export function generateMetadata({
  params
}: {
  params: { category: string; slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  const title = `${product.product_name} | ${product.category} Wholesale | AVIVA Foodstuff Trading`;
  const description = `${product.product_name} (${product.subcategory}) available through AVIVA Foodstuff Trading's wholesale supply catalogue in the UAE.${
    product.packaging ? ` Packaging: ${product.packaging}.` : ""
  }`;
  return {
    title,
    description,
    alternates: { canonical: `/products/${params.category}/${params.slug}` }
  };
}

export default function ProductDetailPage({
  params
}: {
  params: { category: string; slug: string };
}) {
  const categoryName = categorySlugToName[params.category];
  const product = getProductBySlug(params.slug);
  if (!categoryName || !product || product.category !== categoryName) notFound();

  const related = getProductsByCategorySlug(params.category)
    .filter((p) => p.subcategory === product.subcategory && p.slug !== product.slug)
    .slice(0, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.product_name,
    category: `${product.category} > ${product.subcategory}`,
    description: `${product.product_name} available through AVIVA Foodstuff Trading's wholesale supply catalogue.`,
    brand: {
      "@type": "Brand",
      name: "AVIVA Foodstuff Trading"
    }
  };

  return (
    <div className="container-page py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: categoryName, href: `/products/${params.category}` },
          { name: product.product_name }
        ]}
        siteUrl={siteUrl}
      />

      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-sky border border-line flex items-center justify-center text-ink-soft/40 p-8 text-center">
          {product.product_name}
        </div>

        <div>
          <span className="text-xs uppercase tracking-wide text-wheat font-medium">
            {product.category} &middot; {product.subcategory}
          </span>
          <h1 className="font-serif text-3xl font-semibold text-ink mt-2 mb-4">
            {product.product_name}
          </h1>

          <dl className="text-sm space-y-2 mb-8 border-t border-line pt-4">
            <div className="flex justify-between border-b border-line pb-2">
              <dt className="text-ink-soft">Category</dt>
              <dd className="text-ink">{product.category}</dd>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <dt className="text-ink-soft">Subcategory</dt>
              <dd className="text-ink">{product.subcategory}</dd>
            </div>
            {product.packaging && (
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-soft">Packaging</dt>
                <dd className="text-ink">{product.packaging}</dd>
              </div>
            )}
          </dl>

          <p className="text-ink-soft text-sm mb-8">
            This item is available through AVIVA Foodstuff Trading&apos;s wholesale supply catalogue.
            Contact the sales team for current availability and quotation.
          </p>

          <EnquiryButtons productName={product.product_name} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
            More in {product.subcategory}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-10">
        <Link href={`/products/${params.category}`} className="text-sm underline decoration-line hover:decoration-ink">
          &larr; Back to {categoryName}
        </Link>
      </div>
    </div>
  );
}
