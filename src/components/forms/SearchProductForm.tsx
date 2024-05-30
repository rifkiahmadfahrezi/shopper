"use client"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RiSearchLine } from "@remixicon/react"
import { useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

export default function SearchProductForm() {

   const [keyword, setKeyword] = useState<string>("")

   const { replace } = useRouter()
   const pathname = usePathname();
   const searchParams = useSearchParams()

   const handleSearch = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const params = new URLSearchParams(searchParams)
      if(keyword){
         params.set("q", keyword)
      }else{
         params.delete("q")
      }
      replace(`/products/search?q=${keyword}`);
   }

   return (
      <form className="flex w-full items-center space-x-2" onSubmit={handleSearch}>
         <Input 
            defaultValue={searchParams.get("q")?.toString()}
            type="search" 
            onChange={(e) => {
            setKeyword(e.target.value)
         }} placeholder="Shoes..." />
         <Button type="submit">
            <RiSearchLine size={16}/>
         </Button>
      </form>
   )
}