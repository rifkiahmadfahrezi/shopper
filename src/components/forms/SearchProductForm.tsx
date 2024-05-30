"use client"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RiSearchLine } from "@remixicon/react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import NProgress from "next-nprogress-bar"

export default function SearchProductForm() {

   const [keyword, setKeyword] = useState<string>("")
   const router = useRouter()
   const pathname = usePathname()

   const handleSearch = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      NProgress.startProgress()
      if(pathname != "/products/search"){
         router.push(`/products/search?q=${keyword}`);
      }else{
         router.replace(`/products/search?q=${keyword}`);
         // router.refresh();
      }
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