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
  throw new Error("INSTRUCCION: implementar getProducts");
}

export async function getProductById(id: number): Promise<Product> {
  // INSTRUCCION:
  // 1) Consumir /products/{id}.
  // 2) Retornar el producto tipado.
  throw new Error("INSTRUCCION: implementar getProductById");
}

