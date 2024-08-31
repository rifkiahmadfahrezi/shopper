import type { Product } from "./product"

export interface CartItem {
  id: number
  title: string
  price: number
  amount: number
  thumbnail: string
  stock: number
}

export interface Cart{
  products: CartItem[]
  totalPrice: number
}