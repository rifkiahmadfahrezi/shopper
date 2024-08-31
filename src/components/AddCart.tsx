'use client'

import { RiShoppingBagLine } from "@remixicon/react"
import MyTooltip from "./fragment/MyTooltip"
import { Button } from "./ui/button"

import { useDispatch  } from "react-redux"
import { addCartItem } from "@/store/slices/cartSlice"
import { Product } from "@/types/product"
import { toast } from 'sonner'

const AddCart = ({ product } : { product: Product}) => {

   const dispatch = useDispatch()

   function handleClick() {
      dispatch(addCartItem({...product, amount: 0}))
      toast.success("Product added to cart")
   }

  return (
   <MyTooltip text="add to cart">
      <Button onClick={handleClick}  variant={"outline"} className="py-2 hover:bg-primary/30">
         <RiShoppingBagLine size={20} />
      </Button>
   </MyTooltip>
  )
}

export default AddCart