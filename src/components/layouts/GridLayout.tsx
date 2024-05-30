import React, { forwardRef } from 'react'
import { cn } from "@/lib/utils"

interface Props {
   children : React.ReactNode;
   className?: string;
}

type Ref = HTMLDivElement

const GridLayout = forwardRef<Ref, Props>((props, ref) => {
   return (
      <div className={cn("grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4", props.className)} ref={ref}>
         {props.children}
      </div>
   )
})

GridLayout.displayName = "GridLayout"

export default GridLayout