"use client"

import GridLayout from "@/components/layouts/GridLayout"
import ProductCard from "@/components/ui/product-card" 
import { useSearchParams } from "next/navigation"
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton"
import MainContainer from "@/components/layouts/MainContainer"
import type { Product } from "@/types/product"
import { searchProduct } from "@/data/products"
import { useQuery } from '@tanstack/react-query';

export default function ProductResults() {

   const searchParams = useSearchParams()
   const keyword = searchParams.get("q") ?? ""

   if(!keyword){
      return (
         <div className="mt-8 container mx-auto text-xl text-center">
            <h1>Please provide keywords for searching product!</h1>
         </div>
      )
   }

   const { data: products, isLoading, error } = useQuery({
      queryKey: ["products-result", keyword],
      queryFn: () => searchProduct(keyword),
      staleTime: 1000
   });

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
         
         {products.length > 0 
         ? <h1 className="my-8 text-lg">Results for "{keyword}" ({products?.length} items)</h1>
         : <h1 className="my-8 text-lg">Product with keyword "{keyword}" is not exist!</h1>
         }

         <GridLayout>
            {products && products.map((product : Product) => (
               <ProductCard key={product.id} product={product}/>
            ))}
         </GridLayout>
      </MainContainer>
   </>
}