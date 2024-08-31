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

export default function DropdownCart() {

   const cart = useSelector((state : RootState) => state.cart)

   return (
      <>
      <DropdownMenu>
         <DropdownMenuTrigger className="btn btn-ghost">
            <RiShoppingBagLine />
         </DropdownMenuTrigger>
         
         <DropdownMenuContent>
            <DropdownMenuLabel className="py-2 flex items-center justify-between">
               <span>My cart ({cart.products.length})</span>

               
               { cart.products.length !== 0 &&
                  <Link href={'/cart'} className="btn btn-outline capitalize ">
                     Check out!
                  </Link>
               }
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
            <DropdownMenuSeparator />
            <p className="py-1 px-2 text-right" >Total: {formatCurency(cart.totalPrice)}</p>
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