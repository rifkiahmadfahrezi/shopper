"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomeBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[85vw] h-[400px] mx-auto group"
      opts={{
         loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-[400px]" >
            <div className="p-1 h-full">
              <Card className="h-full">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 transition size-10 duration-200 opacity-0 pointer-events-none -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto" />
          <CarouselNext className="right-5 transition size-10 duration-200 opacity-0 pointer-events-none translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto" />
    </Carousel>
  )
}
