import type { Metadata } from "next"

export const metadata : Metadata = {
   title: "Cart - shopper"
}

import CartItemList from "./components/CartItemList"

const CartPage = () => {
  return (
   <main className="container mx-auto px-4 my-10">
      <CartItemList />
   </main>
  )
}

export default CartPage