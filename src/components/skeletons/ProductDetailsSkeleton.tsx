"use client"

import { Separator } from "@radix-ui/react-separator"
import BackButton from "../ui/back-button"
import { Skeleton } from "../ui/skeleton"

export default function ProductDetailsSkeleton() {
   return <>
   <div className="container mx-auto px-5">
      
      <div className="flex items-center flex-col lg:flex-row gap-6 py-6">
        <div className="w-full max-w-[550px]">
        <div className="grid gap-4">
        <div 
          className={`lg:w-[550px] bg-no-repeat aspect-square rounded-lg overflow-hidden group`} 
          >
            <Skeleton  className="w-full h-full aspect-square"/>
        </div>
        <div className="w-full max-w-[550px] flex group">
          <div className="flex w-full gap-2">
            {Array(4).fill(0).map((_, i) => (
              <Skeleton key={i} className="w-full h-full aspect-square"/> 
            ))}
          </div>
        </div>
      </div>
        </div>
        <div className="ml-0 lg:ml-10 w-full grid gap-4 md:gap-10 max-w-[550px]">
        
          <div className="flex flex-col gap-3">
            <Skeleton className="w-full h-10"/>
            <Skeleton className="w-3/4 h-10"/>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="flex w-full  items-center gap-0.5">
              <Skeleton className="w-full h-7" />
            </div>
            <div className="flex w-full  items-center gap-0.5">
              <Skeleton className="w-full h-7" />
            </div>
            <div className="flex w-full  text-4xl font-bold">
              <Skeleton className="w-full h-7" />
            </div>
          </div>
        <Separator />
        <article className="min-h-[200px] flex flex-col gap-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-2/4 h-4" />
        </article>
        <div className="flex items-center gap-3 w-full">
          <Skeleton className="w-full h-14 min-w-fit"/>
          <Skeleton className="w-full h-14 min-w-fit" />
        </div>
        </div>

      </div>
      <div className="py-5">
          <BackButton />
      </div>
    </div>
   </>
}