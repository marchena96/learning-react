import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types";

type UsePaginatedProductsProps = {
  query: string;
  currentPage: number;
  pageSize: number;
};

export function usePaginatedProducts({ query, currentPage, pageSize }: UsePaginatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const offset = currentPage * pageSize;

    getProducts({
      offset,
      limit: pageSize,
      title: query || undefined,
    })
      .then((data) => {
        setProducts(data);
        // La API devuelve exactamente los resultados, asumimos que si devolvió menos de pageSize
        // es que llegamos al final
        if (data.length < pageSize) {
          setTotalCount(offset + data.length);
        } else {
          // Estimamos que hay más resultados
          setTotalCount(offset + pageSize + 1);
        }
      })
      .finally(() => setIsLoading(false));
  }, [currentPage, pageSize, query]);

  return { products, isLoading, totalCount };
}
