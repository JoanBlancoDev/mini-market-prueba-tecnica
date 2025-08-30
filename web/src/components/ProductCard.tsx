import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/shared/types";
import clsx from "clsx";
interface Props {
  products: Product;
}
export const ProductCard = ({ products }: Props) => {
  const { id, category, image, isAvailable, name, price } = products;
  return (
    <>
      <Link
        href={`/products/${id}`}
        className="flex flex-col shadow-md rounded-md lg:hover:scale-105 duration-500 ease-in-out transition-all lg:hover:opacity-80"
      >
        <div className="p-4 flex justify-center items-center">
          <Image
            priority
            width={200}
            height={200}
            src={image}
            className="block aspect-square"
            alt={`${name}-card-image`}
          />
        </div>
        <div className="p-8">
          <p className="text-regular font-semibold ">{name}</p>
          <p className="text-sm text-zinc-500 ">{category}</p>
          <p className="text-sm font-semibold my-2">{price}$</p>
          <span
            className={clsx(
              "inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  inset-ring inset-ring-green-500/20",
              {
                "bg-green-400/10 text-green-400": isAvailable,
                "bg-gray-400/10 text-gray-400": !isAvailable,
              }
            )}
          >
            {isAvailable ? "En stock" : "Sin stock"}
          </span>
        </div>
      </Link>
    </>
  );
};
