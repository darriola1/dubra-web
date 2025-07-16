import React from "react";

export default function Pagination({ offset, limit, total, onPrev, onNext }) {
  const desde = total === 0 ? 0 : offset + 1;
  const hasta = Math.min(offset + limit, total);

  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm">
        Mostrando {desde} a {hasta} de {total} resultados
      </span>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={offset === 0}
          className="border px-2 py-1 rounded disabled:opacity-50 cursor-pointer"
        >
          Anterior
        </button>
        <button
          onClick={onNext}
          disabled={offset + limit >= total}
          className="border px-2 py-1 rounded disabled:opacity-50 cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
