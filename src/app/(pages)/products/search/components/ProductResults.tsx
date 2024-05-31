"use client"

import GridLayout from "@/components/layouts/GridLayout"
import ProductCard from "@/components/ui/product-card" 
import { useSearchParams } from "next/navigation"
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton"
import MainContainer from "@/components/layouts/MainContainer"
import { searchProduct } from "@/data/products"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"


export default function ProductResults() {

   const searchParams = useSearchParams()
   const keyword = searchParams.get("q") ?? ""

   if(!keyword){
      return (
         <div className="mt-8 container mx-auto text-xl text-center">
            <h1 className="text-lg mb-5">Please provide keywords for searching product!</h1>
            <Link href={'/products'} className="btn btn-default text-sm">
               View our products
            </Link>
         </div>
      )
   }

   const { 
      data, 
      error, 
      status, 
      fetchNextPage , 
      hasNextPage, 
      isFetchingNextPage
   } = useInfiniteQuery({
         queryKey: ["products-search-result", keyword],
         initialPageParam : 0,
         queryFn: ({ pageParam = 0 }) => {
            return searchProduct(keyword, pageParam, 30);
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
   }, [hasNextPage, inView])


   if(status === "pending"){
      return (
      <>
         <MainContainer>
            <GridLayout>
               {Array(4).fill(0).map((_, i) => (
                  <ProductCardSkeleton key={i}/>
               ))}
            </GridLayout>
         </MainContainer>
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
      <MainContainer>

         <h1 className="text-lg my-7">Results for "{keyword}" ({data.pages[0]?.total} items)</h1>

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

      </MainContainer>
      </>
   )
}