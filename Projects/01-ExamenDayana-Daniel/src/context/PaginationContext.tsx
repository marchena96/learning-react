import { createContext, useState, type ReactNode } from "react";

type PaginationContextType = {
  currentPage: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;
};

export const PaginationContext = createContext<PaginationContextType | null>(null);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  // INSTRUCCION: completar el uso del value correctamente


  return (
    <PaginationContext.Provider
      value={{ currentPage, pageSize, setCurrentPage, resetPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
