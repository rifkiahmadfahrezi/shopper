"use client"

import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "@/data/category"
import { Skeleton } from "../ui/skeleton"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "@/components/ui/carousel"

const Categories = () => {
   const { data : categories, isLoading, error } = useQuery({
      queryKey: ['categories'],
      queryFn: getAllCategories
   })

  if(isLoading){
   return <div className="flex w-full overflow-hidden gap-3" >
      {Array(8).fill(0).map((_, i) => (
         <Skeleton className="w-32 h-10" key={i} />
      ))}
   </div>
  }
  return (
   <>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full md:w-3/4 mx-auto"
    >
      <CarouselContent>
        {categories?.map((item) => (
          <CarouselItem key={item.slug} className=" basis-1/3 md:basis-[20%]">
            <Link href={`/categories/${item.slug}`} className="p-1">
              <Card className="p-3 h-20" >
               <h1 className="text-lg text-foreground font-semibold">{item.name}</h1>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   </>
  )
}

export default Categories