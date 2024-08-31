"use client"

import GridLayout from "@/components/layouts/GridLayout"
import ProductCard from "@/components/ui/product-card" 
import { useSearchParams } from "next/navigation"
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton"
import MainContainer from "@/components/layouts/MainContainer"
import { searchProduct } from "@/data/products"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, Suspense } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

import { useSelector } from "react-redux"


export default function ProductResultsPage() {
   return <>
      <Suspense fallback={ <span className="text-lg my-5">Loading...</span> }>
         <ProductResults />
      </Suspense>
   </>
}

export function ProductResults() {

   const searchParams = useSearchParams()
   const keyword = searchParams.get("q") ?? ""

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
         queryFn: async ({ pageParam = 0 }) => {
            if (!keyword) {
               return { products: [], skip: 0, limit: 0 , total: 0}
             }
             const response =  await searchProduct(keyword, pageParam, 30);
            return response
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
   }, [inView, hasNextPage, fetchNextPage])

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

         <h1 className="text-lg my-7">Results for &quot;{keyword}&quot; ({data.pages[0]?.total} items)</h1>

         <GridLayout>
            {data.pages.map((page) => (
               page?.products.map((product, index, arr) => (
                  <div key={product.id} ref={arr.length - 1 === index ? ref : null}>
                     <ProductCard  product={product}/>
                  </div>
               )
            )))}
         </GridLayout>
         <GridLayout>
            {(isFetchingNextPage && data.pages[0]?.total !==  data.pages[data.pages.length - 1]?.skip) &&
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