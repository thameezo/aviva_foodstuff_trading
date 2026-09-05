import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/products";
import { categoryNameToSlug, company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/products/beverages",
    "/products/chips-snacks",
    "/products/chocolates-confectionery",
    "/quote",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/product-disclaimer"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const productPages = allProducts.map((p) => ({
    url: `${siteUrl}/products/${categoryNameToSlug[p.category]}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));

  return [...staticPages, ...productPages];
}
