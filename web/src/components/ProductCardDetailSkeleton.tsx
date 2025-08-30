import React from 'react'

export const ProductCardDetailSkeleton = () => {
  return (
      <div className="flex flex-col shadow-md rounded-md w-full max-w-[450px] animate-pulse bg-zinc-600">
      <div className="p-4 flex justify-center items-center">
        <div className="bg-gray-200 dark:bg-zinc-500 aspect-square w-[300px] h-[300px] rounded-md"></div>
      </div>
      <div className="p-8">

        <div className="bg-gray-200 dark:bg-zinc-500 h-6 rounded-md mb-2 w-3/4"></div>

        <div className="bg-gray-200 dark:bg-zinc-500 h-4 rounded-md mb-2 w-1/2"></div>
   
        <div className="bg-gray-200 dark:bg-zinc-500 h-5 rounded-md my-2 w-1/4"></div>
   
        <div className="bg-zinc-500 h-10 mt-8 w-full rounded-md"></div>
      </div>
    </div>

  )
}
