'use client'
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Cart, CartItem } from "@/types/cart";

const initialState : Cart = {
   products: [],
   totalPrice: 0,
   totalItem: 0
}

const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addCartItem: (state, action: PayloadAction<CartItem>) => {
         const item = state.products.find(product => product.id === action.payload.id);
     
         if (!item) {
             state.products.push({ ...action.payload, amount: 1 });
         } else {
             item.amount += 1;
         }
     
         state.totalPrice += action.payload.price;
         state.totalItem += 1
      },     
      changeAmountByNumber: (state, action : PayloadAction<{ id : number | string, amount : number }>) => {
         const item = state.products.find(product => product.id === action.payload.id)

         if(!item){
            alert('Product not found')
         }else{
            item.amount = action.payload.amount
         }

      },
      removeCartItem: (state, action: PayloadAction<CartItem>) => {
         const item = state.products.find(item => item.id === action.payload.id)
         if(!item){
            state.products = state.products.filter(item => item.id !== action.payload.id)
         }else{
            if(item.amount <= 1){
               state.products = state.products.filter(item => item.id !== action.payload.id)
            }else{
               item.amount -= 1
            }
            state.totalPrice -= action.payload.price;
            state.totalItem -= 1
         }
      },
   }
})


export const { addCartItem, removeCartItem, changeAmountByNumber } = CartSlice.actions
export default CartSlice.reducer