import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Cart, CartItem } from "@/types/cart";

const initialState : Cart = {
   products: [],
   totalPrice: 0
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
      },     
      removeCartItem: (state, action: PayloadAction<CartItem>) => {
         const item = state.products.find(item => item.id === action.payload.id)
         if(!item){
            state.products.filter(item => item.id !== action.payload.id)
         }else{
            state.products = [...state.products, { ...item, amount: item.amount -= 1 }]
         }
         state.totalPrice -= action.payload.price;
      },

   }
})


export const { addCartItem, removeCartItem } = CartSlice.actions
export default CartSlice.reducer