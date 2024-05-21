import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
 } from "@/components/ui/dialog"
 
 import { Input } from "../ui/input"
 import { Button } from "../ui/button"
 import { RiSearchLine } from "@remixicon/react"

 
 export default function SearchProduct() {
   return (
      <Dialog>
         <DialogTrigger className="btn btn-ghost">
            <RiSearchLine size={24}/>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle className="mb-7">Search some product...</DialogTitle>
                 <form className="flex w-full items-center space-x-2">
                  <Input type="search" placeholder="Shoes..." />
                  <Button type="submit">
                    <RiSearchLine size={16}/>
                  </Button>
                </form>
            </DialogHeader>
         </DialogContent>
      </Dialog>

   )
 }

