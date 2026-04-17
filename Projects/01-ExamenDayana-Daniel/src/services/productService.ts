import type { Product } from "../types";

const API_URL = "https://api.escuelajs.co/api/v1/products";

type GetProductsParams = {
  offset: number;
  limit: number;
  title?: string;
};

export async function getProducts({ offset, limit, title }: GetProductsParams): Promise<Product[]> {
  // INSTRUCCION:
  // 1) Construir query params con offset y limit.
  // 2) Agregar title cuando exista.
  // 3) Hacer fetch a la API.
  // 4) Retornar el arreglo tipado de productos.
  const params = new URLSearchParams({
    offset: String(offset),
    limit: String(limit),
  });

  if (title) {
    params.append("title", title);
  }

  const response = await fetch(`${API_URL}?${params}`);
  const products: Product[] = await response.json();
  return products;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);
  const product: Product = await response.json();
  return product;
}

