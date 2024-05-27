import { myShop } from "./api"

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

export const getAllProducts = async() => {
   try {
      const req = await myShop.get(`/products?limit=100`)
      if (req.status !== 200){
         return undefined
         throw new Error("Failed to get product => " + req.status)
      }
      if(req.data.message) return undefined
      return req.data.products

   } catch (error) {
      console.error(error)
      return undefined
   }
}

export const searchProduct = async(keyword : string) => {
   try {
      const req = await myShop.get(`/products/search?q=${keyword}`)
      if (req.status !== 200){
         // return undefined
         throw new Error("Failed to get product from search => " + req.status)
      }
      console.log(req.data.products)
      return req.data.products

   } catch (error) {
      console.error(error)
      return undefined
   }
} 