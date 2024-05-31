import { myShop } from "./api"
import type { Product } from "@/types/product"

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

      if(req.data.message) return undefined

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

export const searchProduct = async(keyword : string, skip: number = 0, limit : number = 30) 
: Promise<
   { 
      products: Product[];
      total: number;
      skip: number;
      limit: number
    } | undefined
> => {
   try {
      const req = await myShop.get(`/products/search?q=${keyword}&${skip && 'skip=' + skip}&${limit && 'limit=' + limit}`)

      if (req.status !== 200){
         // return undefined
         throw new Error("Failed to get product from search => " + req.status)
      }
      return req.data

   } catch (error) {
      console.error(error)
      return undefined
   }
} 

export const getProductsWithPaging = async ( skip : number = 0, limit : number = 10,) : Promise<
   { 
      products: Product[];
      total: number;
      skip: number;
      limit: number
    } | undefined
>  => {
   try {
      const req = await myShop.get(`/products?limit=${limit}&skip=${skip}`)
      if (req.status !== 200){
         throw new Error("Failed to get product => " + req.status)
      }
      return req.data

   } catch (error) {
      console.error(error)
      return undefined
   }
}