"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProductCardDetail } from "@/components/ProductCardDetail";
import { Product } from "@/shared/types";
import { getProductById } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { ProductCardDetailSkeleton } from "@/components/ProductCardDetailSkeleton";

export default function ProductByIdPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await getProductById(id);
        setProduct(result.product);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        router.replace("/products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id, router]);


  return (
    <>
      <Header backBtn className="py-8" />
      <section className="w-full grow-1 flex justify-center items-center">
        {loading ||  product === null ? (
          <ProductCardDetailSkeleton />
        ) : (
          <ProductCardDetail product={product} />
        )}
      </section>
    </>
  );
}
