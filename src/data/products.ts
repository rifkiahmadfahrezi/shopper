import { myShop } from "./api"

export interface ProductRating {
   rate: number | string;
   count: number;
}

export interface Product {
   id: number | string;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   blurImage ?: string;
   rating : ProductRating;
}

export const getProduct = async () => {
   try {
      const req = await myShop.get("/products")
      if (req.status !== 200){
         throw new Error("Failed to get product => " + req.status)
      }
      return req.data

   } catch (error) {
      console.error(error)
   }
}