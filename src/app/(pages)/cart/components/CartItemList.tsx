'use client'

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatCurency } from "@/lib/string-helper"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import Link from "next/link"
import { RiDeleteBin2Line } from "@remixicon/react"
import { changeAmountByNumber, addCartItem, removeCartItem } from "@/store/slices/cartSlice"

const CartItemList = () => {
   const dispatch = useDispatch()
   const cart = useSelector((state : RootState) => state.cart)
   const [counter ,setCounter] = useState<number>(0)
  return (
   <>
      <h1 className="text-2xl md:text-4xl font-bold">My Shopping Cart ({cart.products.length} products)</h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] mt-10 gap-3">
         <ScrollArea className="max-h-[800px] pb-8">
            <div className="flex flex-col gap-3">
               {cart.products.map(item => (
                  <Card className="p-2 flex items-start gap-5" key={item.id} >
                     <figure>
                        <Image 
                           src={item.thumbnail}
                           alt={`Thumbnail ${item.title}`}
                           width={150}
                           height={150}
                           className="object-contain"
                           />
                     </figure>
                     <figcaption className="my-3">
                        <h1 className="text-xl md:text-2xl font-bold" >{item.title}</h1>
                        <p className="text-base md:text-lg">{formatCurency(item.price)} &times; {item.amount} = {formatCurency(item.amount * item.price)}</p>

                        <div className="flex items-center gap-1 mt-10
                        ">
                           <Button 
                              onClick={() => {
                                 dispatch(removeCartItem(item))
                              }}
                              size={'icon'}  className="text-2xl" >
                              {item.amount <= 1 
                                 ? <RiDeleteBin2Line/>
                                 : "-"
                              }
                           </Button>
                           <form 
                              onSubmit={(e) => {
                                 dispatch(changeAmountByNumber({
                                    id: item.id,
                                    amount: counter
                                 }))
                              }}
                            >
                              <Input
                                 onChange={(e) => {
                                    setCounter(Number(e.target.value))
                                 }}
                                 min={1}
                                 defaultValue={item.amount}
                                 value={item.amount} 
                                 type="number" 
                                 className="max-w-[100px]" />
                           </form>
                           <Button 
                              onClick={() => {
                                 dispatch(addCartItem(item))
                              }}
                              size={'icon'} className="text-2xl" >
                              +
                           </Button>
                        </div>

                     </figcaption>
                  </Card>
               ))}
            </div>
         </ScrollArea>
         <div >
            <Card className="p-3 md:sticky md:top-[200px]" >
               <h1>Total : {formatCurency(cart.totalPrice)}</h1>
               <Button asChild className="mt-5" >
                  <Link href={'/checkout'} >
                     Checkout
                  </Link>
               </Button>
            </Card>
         </div>
      </div>

   </>
  )
}

export default CartItemList