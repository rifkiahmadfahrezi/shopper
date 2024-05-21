import { getPlaiceholder } from "plaiceholder"

export default async function getBase64(url :string) {
   try {

      const res = await fetch(url)
      if(!res.ok) {
         throw new Error("failed to fetch image")
      }
      const buffer = await res.blob()
      const bufferArray = await buffer.arrayBuffer()
      const arrayBufferView = new Uint8Array(bufferArray)
      const bufferObject = Buffer.from(arrayBufferView)
      const { base64 } = await getPlaiceholder(bufferObject)
      return base64

   }catch(e){
      if( e instanceof  Error ){
         console.error("ERROR => " + e.message)
         console.error("STACK ERROR => " + e.stack)
      }
   }
}