import { useContext } from "react";
import { contextApp } from "./contextApp";

interface Props{
    currentPage:number,
    totalPages:number,
    onPageChange:number
}

export function Pagination({ currentPage, totalPages}:Props) {
    const {currentPages, previewPages} = useContext(contextApp)
    return (
      <div className="flex justify-center items-center space-x-2 mt-6">
        <button
          onClick={previewPages}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-white">{currentPage} de {totalPages}</span>
        <button
          onClick={currentPages}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    );
  }