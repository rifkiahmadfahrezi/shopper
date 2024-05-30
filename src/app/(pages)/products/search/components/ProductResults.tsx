"use client"

import GridLayout from "@/components/layouts/GridLayout"
import ProductCard from "@/components/ui/product-card" 
import { useSearchParams } from "next/navigation"
import useSearchProduct from "@/hooks/product/useSearchProduct"
import type { Product } from "@/types/product"
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton"
import NProgress from "next-nprogress-bar"
import MainContainer from "@/components/layouts/MainContainer"


export default function ProductResults() {

   const searchParams = useSearchParams()
   const keyword = searchParams.get("q") || ""

   if(!keyword){
      return (
         <div className="mt-8 container mx-auto text-xl text-center">
            <h1>Please provide keywords for searching product!</h1>
         </div>
      )
   }

   const { data : products, isLoading, error } = useSearchProduct(keyword) ?? {}

   if(products && !isLoading){
      NProgress.stopProgress();
   }

   if(isLoading){
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
      <MainContainer>
         <div className="bg-destructive">
            <h1>Failed to fetch data : {error.message}</h1>
            <p>{error.stack}</p>
         </div>
      </MainContainer>
      </>
      )
   }

   return <>
      <MainContainer>
         <GridLayout>
            {products && products.map((product : Product) => (
               <ProductCard key={product.id} product={product}/>
            ))}
         </GridLayout>
      </MainContainer>
   </>
}