import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
 import { RiShoppingBagLine } from "@remixicon/react"
 import { type Product } from "@/data/products"
 import Image from "next/image"
 import Link from "next/link"
 

export default function DropdownCart() {
   return (
      <>
      <DropdownMenu>
         <DropdownMenuTrigger className="btn btn-ghost">
            <RiShoppingBagLine />
         </DropdownMenuTrigger>
         
         <DropdownMenuContent>
            <DropdownMenuLabel className="py-2 flex items-center justify-between">
               <span>My cart (0)</span>

               
               <Link href={'/cart'} className="btn btn-outline capitalize ">
                  Check out!
               </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="h-full w-[400px] max-h-72 overflow-y-auto">
               {Array(7).fill(0).map((_,i) => (
                  <DropdownMenuItem key={i}>
                     <CartItem />
                  </DropdownMenuItem>
               ))}
            </div>
            <DropdownMenuSeparator />
         </DropdownMenuContent>
      </DropdownMenu>

      </>
   )
}

function CartItem({ product } : { product ?: Product}){
   return (
      <figure className="flex items-start gap-2">
         <Image 
            alt="Product thumbnail"
            src={`https://placehold.jp/75x75.png`}
            width={75}
            height={75}
            // placeholder="blur"
         />

         <figcaption>
            <h1 className="text-lg line-clamp-1">Lorem ipsum dolor sit.</h1>
            <span> &times; 3</span>
         </figcaption>

      </figure>
   )
}