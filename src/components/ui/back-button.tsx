"use client"

import { Button } from "./button"
import { RiArrowLeftLine } from "@remixicon/react"
import { useRouter } from "next/navigation"

type Variant = "default" | "outline" | "ghost" | "destructive" | "link" 

export default function BackButton(props : { text ?: string, variant ?: Variant}) {
   const route = useRouter()
   return <Button 
      onClick={() => {
         route.back()
      }}
      variant={props.variant || "default"} >
         <RiArrowLeftLine />
         <span className="ml-1">{ props.text || "Back" }</span>
   </Button>
}