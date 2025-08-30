"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/api";
import { Product, ProductQueryParams } from "@/shared/types";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Header } from "@/components/Header";
import { Paginations } from "@/components/Paginations";
import { useSearchParams } from "next/navigation";
import { Filters } from "@/components/Filters";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const queryParams: ProductQueryParams = {
        page: searchParams.get("page") ?? undefined,
        limit: searchParams.get("limit") ?? undefined,
        search: searchParams.get("search") ?? undefined,
        sort: (searchParams.get("sort") as "name" | "price") ?? undefined,
        order: (searchParams.get("order") as "asc" | "desc") ?? undefined,
        available: searchParams.get("available") ?? undefined,
      };

      try {
        const result = await getProducts(queryParams);
        setProducts(result.data);
        setPages(result.meta.pages);
        setLimit(result.meta.limit);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <>
      <section className="w-full flex flex-col grow-1 gap-8">
        <div className="w-full flex flex-col gap-4 pt-4">
          <Header title="All Products" />
          <Filters />
        </div>
        <div className="w-full py-2 grid grid-responsive cursor-pointer gap-[16px]">
          {loading ? (
            new Array(8)
              .fill(0)
              .map((_, index) => <ProductCardSkeleton key={index} />)
          ) : products.length ? (
            products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))
          ) : (
            <div className="grow-1 flex justify-center items-center w-full">
              <p>No hay productos</p>
            </div>
          )}
        </div>
        <Paginations limit={limit} pages={pages} />
      </section>
    </>
  );
}
