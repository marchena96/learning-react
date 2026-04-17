import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types";

const totalCountByQuery = new Map<string, number>();

type UsePaginatedProductsProps = {
  query: string;
  currentPage: number;
  pageSize: number;
};

export function usePaginatedProducts({ query, currentPage, pageSize }: UsePaginatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(() => totalCountByQuery.get(query) || 0);

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

        // Si recibimos menos items de los solicitados, hemos llegado al final
        if (data.length < pageSize) {
          const exactTotal = offset + data.length;
          totalCountByQuery.set(query, exactTotal);
          setTotalCount(exactTotal);
        } else {
          // Recibimos pageSize items, sabemos que hay al menos esto
          // Guardamos la mejor estimación que tenemos hasta ahora
          const currentKnown = totalCountByQuery.get(query) || 0;
          const newEstimate = Math.max(currentKnown, offset + pageSize + 1);
          totalCountByQuery.set(query, newEstimate);
          setTotalCount(newEstimate);
        }
      })
      .finally(() => setIsLoading(false));
  }, [currentPage, pageSize, query]);

  return { products, isLoading, totalCount };
}




