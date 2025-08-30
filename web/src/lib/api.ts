import { ProductQueryParams, ProductResponse, ProductsResponse } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getProducts(queries?: ProductQueryParams): Promise<ProductsResponse> {

  const params = new URLSearchParams();

  if (queries?.search) {
    params.append('search', queries.search);
  }
  if (queries?.sort) {
    params.append('sort', queries.sort);
  }
  if (queries?.order) {
    params.append('order', queries.order);
  }
  if (queries?.page) {
    params.append('page', String(queries.page));
  }
  if (queries?.limit) {
    params.append('limit', String(queries.limit));
  }
  if (queries?.available !== undefined) {
    params.append('available', String(queries.available));
  }

  const queryString = params.toString();
  const url = `${API_URL}/products?${queryString}`;

  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error('Error en el fetch');
  }

  const result = await res.json();
  return result;
}
export async function getProductById(id: string) : Promise<ProductResponse> {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error('Error en el fetch');
  }
  return res.json();
}

export async function getCheapestProducts(top: number = 3): Promise<ProductsResponse> {
  const url = `${API_URL}/cheapest?top=${top}`;
  
  const res = await fetch(url);
  
  if (!res.ok) {
    console.log(res)
    throw new Error('Error al obtener los productos más baratos');
  }

  const result = await res.json();
  return result;
}