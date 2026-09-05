import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductBrowser } from "@/components/ProductBrowser";
import { categorySlugToName, company } from "@/data/company";
import { getProductsByCategorySlug, getSubcategories } from "@/lib/products";
import type { ProductCategory } from "@/data/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

const categoryContent: Record<
  string,
  { title: string; description: string; intro: string }
> = {
  "beverages": {
    title: "Beverages Wholesale Supplier UAE | Soft Drinks, Juices & More",
    description:
      "Wholesale beverages for UAE businesses: soft drinks, juices, energy drinks, milk & dairy drinks, iced tea and sparkling water, supplied by AVIVA Foodstuff Trading, Ajman.",
    intro:
      "AVIVA's beverages range covers soft drinks, juices, energy drinks, milk & dairy drinks, iced tea and sparkling water, available through the company's trading and supply catalogue."
  },
  "chips-snacks": {
    title: "Chips & Snacks Wholesale Supplier UAE | Potato Chips, Corn Snacks",
    description:
      "Wholesale chips & snacks for UAE businesses: potato chips, corn snacks, cheese snacks, popcorn and family packs, supplied by AVIVA Foodstuff Trading, Ajman.",
    intro:
      "AVIVA's chips & snacks range covers potato chips, corn snacks, cheese snacks, popcorn and family pack formats, available through the company's trading and supply catalogue."
  },
  "chocolates-confectionery": {
    title: "Chocolates & Confectionery Wholesale Supplier UAE",
    description:
      "Wholesale chocolates & confectionery for UAE businesses: chocolate, candy, gummies, lollipops, chewing gum, marshmallows and wafers, supplied by AVIVA Foodstuff Trading, Ajman.",
    intro:
      "AVIVA's chocolates & confectionery range covers chocolate, candy, gummies, lollipops, chewing gum, marshmallows and wafers, available through the company's trading and supply catalogue."
  }
};

export function generateStaticParams() {
  return Object.keys(categorySlugToName).map((category) => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const content = categoryContent[params.category];
  if (!content) return {};
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: `/products/${params.category}` }
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = categorySlugToName[params.category];
  if (!categoryName) notFound();

  const content = categoryContent[params.category];
  const products = getProductsByCategorySlug(params.category);
  const subcategories = getSubcategories(categoryName as ProductCategory);

  return (
    <div className="container-page py-14">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: categoryName }
        ]}
        siteUrl={siteUrl}
      />

      <h1 className="font-serif text-4xl font-semibold text-ink mb-3">{categoryName}</h1>
      <p className="text-ink-soft max-w-2xl mb-10">{content.intro}</p>

      <ProductBrowser products={products} subcategories={subcategories} />
    </div>
  );
}
