export type ProductCategory = "gloves" | "headgear" | "bag";

export interface Product {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  category: ProductCategory;
  image: string;
}

export interface ProductQueryParams {
  search?: string;
  sort?: "name" | "price";
  order?: "asc" | "desc";
  page?: string;
  limit?: string;
  available?: string;
}

export interface ProductsResponse {
  ok: boolean;
  data: Product[];
  meta: Pagination;
}
export interface ProductResponse {
  ok: boolean;
  product: Product;
}
export interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
}
