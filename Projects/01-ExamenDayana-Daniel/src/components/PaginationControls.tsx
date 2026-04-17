import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

type Props = {
  totalPages: number;
};

const PaginationControls = ({ totalPages }: Props) => {
  // INSTRUCCION: consumir PaginationContext con useContext directamente.
  const context = useContext(PaginationContext);

  if (!context) {
    return null;
  }

  const { currentPage, nextPage, prevPage } = context;

  // Mostrar página 1-indexed para el usuario
  const displayPage = currentPage + 1;

  // Mejorar comportamiento en límites de paginación
  // No debe permitir ir a una página negativa o mayor a la total
  const canGoPrev = currentPage > 0;
  const canGoNext = displayPage < totalPages;

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={prevPage} disabled={!canGoPrev}>
        Anterior
      </button>
      <span>
        Página {displayPage} de {totalPages}
      </span>
      <button onClick={nextPage} disabled={!canGoNext}>
        Siguiente
      </button>
    </div>
  );
};

export default PaginationControls;

