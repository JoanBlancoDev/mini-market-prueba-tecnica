import React from 'react'

export const ProductCardSkeleton = () => {
  return (
    <div className='animate-pulse rounded-md overflow-hidden p-4 min-h-[400px] bg-zinc-600 flex flex-col items-center justify-center'>
      <div className='bg-zinc-500 w-[200px] h-[200px] rounded-md'></div>
      <div className='p-8 w-full'>
        <div className='bg-zinc-500 h-4 rounded w-3/4 mb-2'></div>
        <div className='bg-zinc-500 h-4 rounded w-1/2 mb-2'></div>
        <div className='bg-zinc-500 h-4 rounded w-2/6 mb-2'></div>
        <div className='bg-zinc-500 h-4 rounded w-1/4'></div>
      </div>

    </div>

  )
}
