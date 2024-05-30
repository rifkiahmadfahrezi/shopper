"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   children : React.ReactNode;
   className?: string;
}

type Ref = HTMLDivElement

const MainContainer = forwardRef<Ref, Props>((props, ref) => {
   return (
      <div className={cn("mx-auto container px-4", props.className)} ref={ref} {...props}>
         {props.children}
      </div>
   )
})

MainContainer.displayName = "MainContainer"

export default MainContainer