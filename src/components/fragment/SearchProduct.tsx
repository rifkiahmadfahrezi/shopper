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
 import SearchProductForm from "../forms/SearchProductForm"

 
 export default function SearchProduct() {
   return (
      <Dialog>
         <DialogTrigger className="btn btn-ghost">
            <RiSearchLine size={24}/>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle className="mb-7">Search some product...</DialogTitle>
               <SearchProductForm />
            </DialogHeader>
         </DialogContent>
      </Dialog>

   )
 }

