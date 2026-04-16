import { useEffect, useRef, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import PaginationControls from "../components/PaginationControls";
import { getProducts } from "../services/productService";
import type { Product } from "../types";

const ProductsPage = () => {
  // INSTRUCCION: conserva los bugs y completa la plantilla.
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const queryInputRef = useRef<HTMLInputElement>(null);
  
  // INSTRUCCION: agregar useContext(PaginationContext) y obtener:
  // currentPage, pageSize, resetPage.
  const currentPage = 0; // Placeholder
  const pageSize = 10; // Placeholder
  const resetPage = () => {}; // Placeholder

  // INSTRUCCION: esta lógica de carga debe extraerse a un hook aparte
  // (por ejemplo: usePaginatedProducts) y este componente
  // solo debe consumir el resultado del hook.
  useEffect(() => {
    
  }, [currentPage, pageSize, query]);

  // INSTRUCCION: los resultados y la paginación deben salir del llamado a API.

  useEffect(() => {
    // Al filtrar por title, volver siempre a la página 1.
    resetPage();
  }, [query]);

  const handleQueryChange = () => {
    // (INSTRUCCION: implementar)
    setQuery();
  };

  // INSTRUCCION: calcular totalPages y resultados visibles.

  if (products.length > 0) {
    return <p>Cargando...</p>;
  }

  return (
    <main>
      <h1>Catálogo</h1>
      <input
        ref={queryInputRef}
        value={query}
        onChange={handleQueryChange}
        placeholder="Filtrar por título"
      />

      <ProductGrid products={products} />
      <PaginationControls/>
    </main>
  );
};

export default ProductsPage;
