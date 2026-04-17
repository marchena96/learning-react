import { useEffect, useRef, useState, useContext } from "react";
import ProductGrid from "../components/ProductGrid";
import PaginationControls from "../components/PaginationControls";
import { PaginationContext } from "../context/PaginationContext";
import { usePaginatedProducts } from "../hooks/usePaginatedProducts";

const ProductsPage = () => {
  // INSTRUCCION: conserva los bugs y completa la plantilla.
  const [query, setQuery] = useState("");
  const queryInputRef = useRef<HTMLInputElement>(null);

  // INSTRUCCION: agregar useContext(PaginationContext) y obtener:
  // currentPage, pageSize, resetPage.
  const context = useContext(PaginationContext);

  if (!context) {
    return <p>Error: PaginationContext no disponible</p>;
  }

  const { currentPage, pageSize, resetPage } = context;

  // INSTRUCCION: esta lógica de carga debe extraerse a un hook aparte
  // (por ejemplo: usePaginatedProducts) y este componente
  // solo debe consumir el resultado del hook.
  const { products, isLoading, totalCount } = usePaginatedProducts({
    query,
    currentPage,
    pageSize,
  });

  // INSTRUCCION: los resultados y la paginación deben salir del llamado a API.
  const totalPages = Math.ceil(totalCount / pageSize);

  // Al filtrar por title, volver siempre a la página 1.
  useEffect(() => {
    resetPage();
  }, [query, resetPage]);

  const handleQueryChange = () => {
    // (INSTRUCCION: implementar)
    setQuery(queryInputRef.current?.value || "");
  };

  // INSTRUCCION: calcular totalPages y resultados visibles.

  if (isLoading && products.length === 0) {
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
      <PaginationControls totalPages={totalPages} />
    </main>
  );
};

export default ProductsPage;
