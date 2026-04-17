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

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const resetPage = () => setCurrentPage(0);

  return (
    <PaginationContext.Provider
      value={{ currentPage, pageSize, setCurrentPage, nextPage, prevPage, resetPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
