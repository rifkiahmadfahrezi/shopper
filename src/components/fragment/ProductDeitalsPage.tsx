"use client"

import { useQuery } from "@tanstack/react-query"
import { getProductDetails } from "@/data/products"
import type { Review } from "@/types/product"
import MainContainer from "@/components/layouts/MainContainer"
import BackButton from "@/components/ui/back-button"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { RiStarFill, RiCheckFill } from "@remixicon/react"
import ProductImagePreview from "./ProductImagePreview"
import ProductDetailsSkeleton from "@/components/skeletons/ProductDetailsSkeleton"
import GridLayout from "@/components/layouts/GridLayout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProductDetailsPage({ productId } : { productId: number | string }) {

   const { data : product, isLoading, error } = useQuery({
      queryKey: ["product-details", productId],
      queryFn: () => getProductDetails(productId)
   })

   if(isLoading){
      return (
      <>
         <ProductDetailsSkeleton/>
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
      <MainContainer className="container mx-auto px-5">
        <div className="flex items-center flex-col lg:flex-row gap-6 py-6">
          <div className="w-full max-w-[550px]">
            <ProductImagePreview 
              thumbnail={product.images[0]}
              images={product.images}
            />
          </div>

          <div className="ml-0 lg:ml-10 w-full grid gap-4 md:gap-10 max-w-[550px] ">
          
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl">{product.title}</h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                <RiStarFill className="size-5 fill-yellow-500" />
                {product.rating}
              </div>
              {product.stock > 0 && 
                <div className="flex items-center gap-0.5">
                  <RiCheckFill className="size-5 fill-green-500" />
                  <span className="capitalize">stock ({product.stock})</span>
                </div>
              }
              <div className="text-4xl font-bold">$ {product.price}</div>
            </div>
          <Separator />
          <article className="min-h-[200px]">
            {product.description}
          </article>
          <div className="flex items-center gap-3 w-full">
              <Button className="capitalize w-full min-w-fit">
                buy now
              </Button>
              <Button className="capitalize w-full min-w-fit" variant={"outline"}>
                add to cart
              </Button>
          </div>

          

          </div>
        </div>
          
        <div className="py-5">
            <BackButton />
        </div>

        <div className="mt-10">
            <h1 className="text-lg md:text-xl font-semibold">Ratings ({product.reviews.length} items)</h1>

            <GridLayout className="my-6">

              {product.reviews.map((review : Review, i : number) => (
                <Card key={i}>
                  <CardHeader className="flex justify-between flex-row items-center">
                    <span className="font-semibold line-clamp-1">{review.reviewerName}</span>
                    <span className="flex items-center gap-2">
                      <RiStarFill className="size-5 fill-yellow-500" />
                      <span>{review.rating}</span>
                    </span>
                  </CardHeader>
                  <CardContent className="line-clamp-3">
                    {review.comment}
                  </CardContent>
                </Card>
              ))}

            </GridLayout>

          </div>
        
      </MainContainer>
   )
}