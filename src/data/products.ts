import { myShop } from "./api"

export interface ProductRating {
   rate: number | string;
   count: number;
}

export interface Product {
   id: number | string;
   title: string;
   description: string;
   price: number;
   discountPercentage ?: number;
   stock : number;
   brand?: string;
   category: string;
   thumbnail: string;
   rating : number | string;
   images : string[];
   blurImage ?: string;
}

export const getProduct = async () => {
   try {
      const req = await myShop.get("/products")
      if (req.status !== 200){
         throw new Error("Failed to get product => " + req.status)
      }
      return req.data.products

   } catch (error) {
      console.error(error)
      return undefined
   }
}

export const getProductDetails = async (id : string | number) => {
   try {
      const req = await myShop.get(`/products/${id}`)
      if (req.status !== 200){
         throw new Error("Failed to get product => " + req.status)
      }
      return req.data

   } catch (error) {
      console.error(error)
      return undefined
   }
}

export const getAllProductId = async () => {
   try {
      const req = await myShop.get(`/products`)
      if (req.status !== 200){
         throw new Error("Failed to get product => " + req.status)
      }
      return req.data.products.id.push([])

   } catch (error) {
      console.error(error)
      return undefined
   }
}

export const getAllProducts = async() => {
   try {
      const req = await myShop.get(`/products?limit=100`)
      if (req.status !== 200){
         throw new Error("Failed to get product => " + req.status)
      }
      return req.data.products

   } catch (error) {
      console.error(error)
      return undefined
   }
}