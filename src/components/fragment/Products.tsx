"use client"

import useProduct from "@/hooks/product/useProduct"
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton"
import ProductCard from "../ui/product-card"
import GridLayout from "../layouts/GridLayout"
import { type Product } from "@/types/product"
// import { useInfiniteQuery } from "@tanstack/react-query"
// import { getProductsWithPaging } from "@/data/products"

export default function Products() {

   const { data, isLoading, error } = useProduct()

   // const { data}  = useInfiniteQuery({
   //    queryKey: ["products-with-pages"],
   //    queryFn: () => getProductsWithPaging
   // })

   if(isLoading){
      return (
      <>
         <GridLayout>
            {Array(4).fill(0).map((_, i) => (
               <ProductCardSkeleton key={i}/>
            ))}
         </GridLayout>
      </>
      )
   }

   if(error){
      return (
      <>
         <div className="bg-destructive">
            <h1>Failed to fetch data : {error.message}</h1>
            <p>{error.stack}</p>
         </div>
      </>
      )
   }


   return (
      <>
         <GridLayout>
            {data && data.map((product : Product) => (
               <ProductCard key={product.id} product={product}/>
            ))}
         </GridLayout>
      </>
   )
}