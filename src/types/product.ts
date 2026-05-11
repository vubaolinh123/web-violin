export type Category = "violin" | "bow" | "accessory" | "case";

export interface ProductSpecs {
  wood?: string;
  varnish?: string;
  strings?: string;
  size?: string;
  origin?: string;
  year?: number;
  material?: string;
  weight?: string;
  length?: string;
  finish?: string;
  [key: string]: string | number | undefined;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  longDescription: string;
  specs: ProductSpecs;
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  collections: string[];
}
