"use client"

import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { searchProduct } from "@/data/products"
import type { Product } from "@/types/product"

export default function useProduct(keyword : string) : UseQueryResult<Product[], Error> | undefined  {

   if(!keyword) return

   return useQuery({
      queryKey: ["search-products"],
      queryFn: () => searchProduct(keyword)
   })
}