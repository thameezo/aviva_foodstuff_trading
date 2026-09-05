export type ProductCategory =
  | "Beverages"
  | "Chips & Snacks"
  | "Chocolates & Confectionery";

export interface Product {
  slug: string;
  product_name: string;
  category: ProductCategory;
  subcategory: string;
  packaging: string | null;
  brand: string | null;
  description: string | null;
  image: string | null;
  catalogue_source: ProductCategory;
}
