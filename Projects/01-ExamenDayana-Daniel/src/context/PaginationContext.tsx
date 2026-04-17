import { createContext, useState, useCallback, useMemo, type ReactNode } from "react";

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

  const nextPage = useCallback(() => setCurrentPage((prev) => prev + 1), []);
  const prevPage = useCallback(() => setCurrentPage((prev) => Math.max(prev - 1, 0)), []);
  const resetPage = useCallback(() => setCurrentPage(0), []);

  const value = useMemo(
    () => ({ currentPage, pageSize, setCurrentPage, nextPage, prevPage, resetPage }),
    [currentPage, pageSize, nextPage, prevPage, resetPage]
  );

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
