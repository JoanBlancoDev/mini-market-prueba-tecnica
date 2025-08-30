import Link from "next/link";
import React from "react";
interface Props {
  title?: string;
  className?: string;
  backBtn?: boolean;
}
export const Header = ({ title, className, backBtn }: Props) => {
  return (
    <header className={`${className} flex flex-col sm:flex-row justify-between items-center flex-wrap`}>
      <Link className="font-bold text-2xl" href={"/"}>
        <span className="text-indigo-600">M</span>
        ini
        <span className="text-indigo-600">M</span>
        arket
      </Link>
      <div>
        {backBtn && (
          <Link href={"/products"} className="flex items-center justify-center gap-2 mt-4 sm:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            Regresar
          </Link>
        )}
        {title && <h1 className="font-semibold text-2xl mt-4 sm:mt-0">{title}</h1>}
      </div>
    </header>
  );
};
