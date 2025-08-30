'use client'
import { Product } from "@/shared/types";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
interface Props {
  product: Product;
}

export const ProductCardDetail = ({ product }: Props) => {
  const { category, image, isAvailable, name, price } = product;

  const addToCart = () => {
    alert('Agregado a favorito correctamente!')
  }
  return (
    <div className="flex flex-col shadow-md rounded-md w-full max-w-[450px]">
      <div className="p-4 flex justify-center items-center">
        <Image
          priority
          width={300}
          height={300}
          src={image ?? undefined}
          className="block aspect-square object-contain"
          alt={`${name}-card-image`}
        />
      </div>
      <div className="p-8">
        <p className="text-xl font-semibold ">{name}</p>
        <p className="text-lg text-zinc-500 ">{category}</p>
        <p className="text-lg font-semibold my-2">{price}$</p>
        {/* <span
          className={clsx(
            "inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  inset-ring inset-ring-green-500/20",
            {
              "bg-green-400/10 text-green-400": isAvailable,
              "bg-gray-400/10 text-gray-400": !isAvailable,
            }
          )}
        >
          {isAvailable ? "En stock" : "Sin stock"}
        </span> */}
        <button onClick={ addToCart } className="mt-8 w-full  block m-auto px-4 py-2 shadow-md rounded-md text-zinc-100 bg-indigo-600 lg:hover:bg-indigo-700 transition-all ease-in-out duration-500 cursor-pointer">Agregar a favoritos</button>
      </div>
    </div>
  );
};
