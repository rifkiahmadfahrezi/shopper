'use client'

import { Card, CardContent, CardFooter } from "./card"
import Image from "next/image"
import { Badge } from "./badge"
import { RiStarFill } from "@remixicon/react"
import { AspectRatio } from "./aspect-ratio"
import Link from "next/link"
import { Button } from "./button"
import { type Product } from "@/types/product"
import { formatCurency } from "@/lib/string-helper"
import AddCart from "../AddCart"

import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { useMemo } from "react"

export default function ProductCard ({ product } : { product : Product}){

   const cart = useSelector((state : RootState) => state.cart)

   const numOfProductOnCart = useMemo(() => {
      const item = cart.products.find((p) => p.id === product.id)
      if(!item){
         return 0
      }
      return item.amount
   }, [cart.products, product.id])

   return (
      <Card key={product.id} className="overflow-hidden group">
      <Link href={`/products/${encodeURI(`${product.id}`)}`}>
         <AspectRatio ratio={1 / 1} className="overflow-hidden">
            <Image 
               className="w-full h-full max-h-[300px] object-cover group-hover:scale-[1.2] transitio duration-200"
               width={400}
               loading="lazy"
               height={300}
               blurDataURL={product.blurImage && product.blurImage}
               placeholder={product.blurImage ? "blur" : "empty"}
               src={product.thumbnail} 
               alt={product.title} />
         </AspectRatio>
         <CardContent className="mt-3">
            <h1 className="text-base line-clamp-2 group-hover:underline" title={product.title}>{product.title}</h1>
            <p className="font-semibold text-xl">{formatCurency(product.price)}</p>
            <Badge className="my-3 capitalize" variant={"outline"}>
               {product.brand}
            </Badge>
            <div className="">
               <Badge variant={"outline"}>
                  <RiStarFill size={16} className="fill-yellow-500" />
                  <span className="mx-2 ">{product.rating}</span>
               </Badge>
            </div>
         </CardContent>
      </Link>
         <CardFooter className="flex gap-2 items-center">
            <Button className="flex-1 flex-shrink">
            <span className="mx-2 capitalize">buy now</span> 
            </Button>
            <div className="relative">
               {numOfProductOnCart !== 0 &&
                  <Badge className="absolute -top-2 -right-2 py-1 px-2" >{numOfProductOnCart}</Badge>
               }
               <AddCart product={product} />
            </div>
         </CardFooter>
      </Card>
   )
}