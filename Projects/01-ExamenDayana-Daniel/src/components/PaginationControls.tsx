import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext";

type Props = {
  totalPages: number;
};

const PaginationControls = ({ totalPages }: Props) => {
  // INSTRUCCION: consumir PaginationContext con useContext directamente.
  const context = useContext(PaginationContext);

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={prevPage}>Anterior</button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
  // INSTRUCCION: mejorar comportamiento en límites de paginación
  //No debe permitir ir a una página negativa o mayor a la total
};

export default PaginationControls;

