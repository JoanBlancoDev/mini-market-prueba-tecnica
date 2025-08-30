"use client";

import { useFilters } from "@/hooks/useFilters";
import { useSearchParams } from "next/navigation";

export const Filters = () => {

  const searchParams = useSearchParams();
  const { handleSelectChange, handleReset, handleSearchChange } = useFilters();

  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10">
      <input
        type="text"
        placeholder="Buscar por nombre"
        defaultValue={searchParams.get("search") || ""}
        onChange={handleSearchChange}
        className="outline rounded-md px-4 py-2 w-full lg:w-[180px] max-w-[180px] cursor-pointer"
      />
      <select
        name="sort"
        id="sort"
        defaultValue={searchParams.get("sort") || ""}
        onChange={handleSelectChange}
        className="outline rounded-md px-4 py-2 w-full max-w-[180px] cursor-pointer"
      >
        <option value="">Ordernar por: ⬇️</option>
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
      </select>
      <select
        name="order"
        id="order"
        defaultValue={searchParams.get("order") || ""}
        onChange={handleSelectChange}
        className="outline rounded-md px-4 py-2 w-full max-w-[180px] cursor-pointer"
      >
        <option value="">Orden: ⬇️</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select
        name="available"
        id="available"
        defaultValue={searchParams.get("available") || ""}
        onChange={handleSelectChange}
        className="outline rounded-md px-4 py-2 w-full max-w-[180px] cursor-pointer"
      >
        <option value="">Stock:</option>
        <option value="true">Disponible</option>
        <option value="false">Agotado</option>
      </select>

      <button
        onClick={handleReset}
        className="flex justify-center items-center px-4 py-2 bg-indigo-600 lg:hover:cursor-pointer lg:hover:opacity-80 transition-all rounded-md text-zinc-100 w-full max-w-[180px]"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};
