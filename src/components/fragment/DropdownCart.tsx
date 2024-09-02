'use client'

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
 import { RiShoppingBagLine } from "@remixicon/react"
 import Image from "next/image"
 import Link from "next/link"
 
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { formatCurency } from "@/lib/string-helper"
import type { CartItem as CartItemType  } from "@/types/cart"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export default function DropdownCart() {

   const cart = useSelector((state : RootState) => state.cart)

   return (
      <>
      <DropdownMenu>
         <DropdownMenuTrigger className="btn btn-ghost relative">
            {cart.totalItem !== 0 &&
               <Badge variant={'secondary'} className="absolute -bottom-1 -left-1 py-1 px-2" >{cart.totalItem}</Badge>
            }
            <RiShoppingBagLine />
         </DropdownMenuTrigger>
         
         <DropdownMenuContent>
            <DropdownMenuLabel className="py-2 flex items-center justify-between">
               <span>My cart ({cart.products.length})</span>

            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="h-full w-[400px] max-h-72 overflow-y-auto">
               {cart.products.length === 0 
               ? <p className="my-7 mx-2">Cart is empty</p>
               : cart.products.map(item => (
                     <DropdownMenuItem key={item.id}>
                        <CartItem product={item} />
                     </DropdownMenuItem>
                  ))
               }
            </div>
            {cart.totalItem !== 0 &&
            <>
               <DropdownMenuSeparator />
               <div className="flex justify-between items-center py-1 px-2">
                  <Button asChild size={'sm'}  >
                     <Link href={'/cart'} className="capitalize">
                        Check out!
                     </Link>
                  </Button>
                  <p>Total: {formatCurency(cart.totalPrice)}</p>
               </div>
            </>
            }
         </DropdownMenuContent>
      </DropdownMenu>

      </>
   )
}

function CartItem({ product } : { product : CartItemType}){
   return (
      <figure className="flex items-start gap-2">
         <Image 
            alt="Product thumbnail"
            src={product.thumbnail}
            width={75}
            height={75}
            // placeholder="blur"
         />

         <figcaption>
            <h1 className="text-lg line-clamp-1">{product.title}</h1>
            <span>{formatCurency(product.price)} &times; {product.amount}</span>
         </figcaption>

      </figure>
   )
}