"use server"

import { getPlaiceholder } from "plaiceholder"

export default async function getBase64(imgUrl : string) {
   try{
      const res = await fetch(imgUrl)
      if(!res.ok){
         throw new Error("Failed to fetch image")
      }
      const buffer = await res.arrayBuffer()
      const { base64 } = await getPlaiceholder(Buffer.from(buffer))

      return base64

   }catch(err){
      console.error(err)
   }
}