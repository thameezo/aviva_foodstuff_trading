import { beverages } from "@/data/products/beverages";
import { chips } from "@/data/products/chips";
import { chocolates } from "@/data/products/chocolates";
import type { Product, ProductCategory } from "@/data/types";
import { categoryNameToSlug } from "@/data/company";

export const allProducts: Product[] = [...beverages, ...chips, ...chocolates];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductsByCategorySlug(slug: string): Product[] {
  const name = Object.entries(categoryNameToSlug).find(([, s]) => s === slug)?.[0];
  if (!name) return [];
  return allProducts.filter((p) => p.category === (name as ProductCategory));
}

export function getSubcategories(category: ProductCategory): string[] {
  const set = new Set<string>();
  allProducts
    .filter((p) => p.category === category)
    .forEach((p) => set.add(p.subcategory));
  return Array.from(set).sort();
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function searchProducts(query: string, category?: ProductCategory): Product[] {
  const q = query.trim().toLowerCase();
  let pool = category ? getProductsByCategory(category) : allProducts;
  if (!q) return pool;
  return pool.filter((p) => p.product_name.toLowerCase().includes(q));
}

export function getFeatured(category: ProductCategory, count: number): Product[] {
  return getProductsByCategory(category).slice(0, count);
}
