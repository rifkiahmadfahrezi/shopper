"use server"

import { myShop } from "./api";
import type { SignIn } from "@/types/auth";
import { cookies } from "next/headers";

export const signIn = async ( formData : SignIn) => {

   const cookie = cookies()
   console.log("ok")

   try{
      const request = await myShop.post('/auth/login', formData, {
         headers: {
            "Content-Type" : "application/json"
         }
      })
      if(request.status !== 200){
         throw new Error('Failed to login : ' +  request.data?.message)

      }
      cookie.set("auth-token", request.data.token)
      
      return request.data
   }catch(e){
      console.error(e)
      return undefined
   }
}