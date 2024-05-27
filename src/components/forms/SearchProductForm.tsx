"use client"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RiSearchLine } from "@remixicon/react"
import { searchProduct } from "@/data/products"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchProductForm() {

   const [keyword, setKeyword] = useState<string>("")
   const router = useRouter()

   const handleSearch = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push('/products/search/' + encodeURIComponent(keyword))
      // redirect('/products/search/' + decodeURI(keyword))
      // searchProduct(keyword)
   }

   return (
      <form className="flex w-full items-center space-x-2" onSubmit={handleSearch}>
         <Input type="search" onChange={(e) => {
            setKeyword(e.target.value)
         }} placeholder="Shoes..." />
         <Button type="submit">
            <RiSearchLine size={16}/>
         </Button>
      </form>
   )
}