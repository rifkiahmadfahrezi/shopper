"use client"

import { useQuery } from "@tanstack/react-query"
import { getProductDetails } from "@/data/products"

export default function useProduct(id: number | string){
   return useQuery({
      queryKey: ["product-single"],
      queryFn: () => getProductDetails(id),
      staleTime: 60 * 1000
   })
}
