"use client"

// import useProduct from "@/hooks/product/useProduct"
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton"
import ProductCard from "../ui/product-card"
import GridLayout from "../layouts/GridLayout"
import { useInView } from "react-intersection-observer"
import { getProductsWithPaging } from "@/data/products"
import { useEffect, useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"

export default function Products() {

   const { 
      data, 
      error, 
      status, 
      fetchNextPage , 
      hasNextPage, 
      isFetchingNextPage
   } = useInfiniteQuery({
         queryKey: ["products"],
         initialPageParam : 0,
         queryFn: ({ pageParam = 0 }) => {
            return getProductsWithPaging(pageParam, 30);
         },
         getNextPageParam: (lastPage) => {
            return lastPage && lastPage.skip + lastPage.limit;
         },
      })

   const { ref, inView } = useInView()


   useEffect(() => {
      if (inView && hasNextPage) {
         fetchNextPage()
      }
   }, [inView, hasNextPage])


   if(status === "pending"){
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
         <div className="bg-destructive text-center p-5">
            <h1>Failed to fetch data : {error.message}</h1>
         </div>
      </>
      )
   }



   return (
      <>
         <GridLayout>
            {data.pages.map((page) => (
               page?.products.map((product, index, arr) => (
                  <div ref={arr.length - 1 === index ? ref : null}>
                     <ProductCard key={product.id} product={product}/>
                  </div>
               )
            )))}
         </GridLayout>
         <GridLayout>
            {(isFetchingNextPage) &&
               Array(4).fill(0).map((_, i) => (
                  <ProductCardSkeleton key={i}/>
               ))
            }
         </GridLayout>

         {(data.pages[0]?.total ===  data.pages[data.pages.length - 1]?.skip) && 
               <span className="text-center flex justify-center my-7">All data loaded</span>
            }
      </>
   )
}