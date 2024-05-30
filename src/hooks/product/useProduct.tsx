"use client"

import { useQuery } from "@tanstack/react-query"
import { getProduct } from "@/data/products"

export default function useProduct(){
   return useQuery({
      queryKey: ["products"],
      queryFn: () => getProduct()
   })
}