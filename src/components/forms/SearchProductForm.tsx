"use client"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RiSearchLine } from "@remixicon/react"
import { useSearchParams, useRouter } from "next/navigation"

import { useRef } from "react"

export default function SearchProductForm() {

   const router = useRouter()
   const searchParams = useSearchParams()
   const keywordRef = useRef<HTMLInputElement | null>(null)

   const handleSearch = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   
      let url = '/products/search'
      if (keywordRef.current) {
         url += `?q=${keywordRef.current.value}`
      }
      router.push(url)
   }

   return (
      <form className="flex w-full items-center space-x-2" onSubmit={handleSearch}>
         <Input 
            ref={keywordRef}
            defaultValue={searchParams.get("q")?.toString()}
            type="search"
            placeholder="Shoes..." />
         <Button type="submit">
            <RiSearchLine size={16}/>
         </Button>
      </form>
   )
}