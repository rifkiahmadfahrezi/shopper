import { Category } from "@/types/category";
import { myShop } from "./api";


export const getAllCategories = async () : Promise<Category[] | undefined> => {
   try {
      const res = await myShop.get('/products/categories')
      return res.data
   } catch (error) {
      console.error(error)
   }
}