
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RiSearchLine } from "@remixicon/react"

export default function SearchProductForm() {
   return (
      <form className="flex w-full items-center space-x-2">
         <Input type="search" placeholder="Shoes..." />
         <Button type="submit">
            <RiSearchLine size={16}/>
         </Button>
      </form>
   )
}