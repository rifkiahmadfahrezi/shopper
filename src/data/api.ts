import axios from "axios";

export const myShop = axios.create({
   baseURL: process.env.API_BASE,
})

export const authApi = async (token : string) => {
   return myShop.get("/auth/me", {
      headers: {
         "Authorization": `Bearer ${token}`
      }
   })
}