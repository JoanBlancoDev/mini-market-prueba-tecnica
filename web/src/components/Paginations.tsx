"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFilters } from "../hooks/useFilters";

interface Props {
  pages: number;
  limit: number;
}

export const Paginations: React.FC<Props> = ({ pages, limit = 10 }) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { handleSelectChange } = useFilters();
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  
  return (
    <div className="flex justify-center w-full py-4">
      <div className=" mr-8  flex items-center gap-2 grow-1">
        <span>Limite actual: {limit}</span>
        <select
          name="limit"
          id="limit"
          value={String(searchParams.get("limit")) || ""}
          onChange={handleSelectChange}
          className="outline rounded-md px-4 py-2 w-full max-w-[120px] cursor-pointer"
        >
          <option value="">Elegir</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <nav
        aria-label="Pagination"
        className="isolate inline-flex -space-x-px rounded-md"
      >
        <Link
          href={`?page=${currentPage - 1}&limit=${limit}`}
          className={clsx("flex justify-center items-center", {
            "pointer-events-none opacity-50": currentPage === 1,
            "": currentPage !== 1,
          })}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="size-5"
          >
            <path
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
        </Link>

        {pageNumbers.map((p) => (
          <Link
            key={p}
            href={`?page=${p}&limit=${limit}`}
            className={clsx(
              " relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-offset-2 hover:bg-gray-100 hover:text-zinc-800 transition-colors",
              {
                "z-10 bg-indigo-500  focus-visible:outline-indigo-500 text-zinc-100":
                  p === currentPage,
                "text-zinc-700 ": p !== currentPage,
              }
            )}
          >
            {p}
          </Link>
        ))}

        <Link
          href={`?page=${currentPage + 1}&limit=${limit}`}
          className={clsx("flex justify-center items-center", {
            "pointer-events-none opacity-50 ": currentPage === pages,
            "": currentPage !== pages,
          })}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="size-5"
          >
            <path
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
};
