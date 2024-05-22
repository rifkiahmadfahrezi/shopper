"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Images {
   src: string
   blurImage: string
}

export interface ProductImages {
   thumbnail: string
   images : Images[]
}

export default function ProductImagePreview({ thumbnail, images } : ProductImages) {

   const [activeImg, setActiveImg ] = useState<string>(thumbnail)

   return <>
   <div className="grid gap-4">
        <Image
          alt={`image of product`}
          className="aspect-[4/3] object-contain border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          src={activeImg}
          width={800}
          loading="lazy"
        />
        <Carousel className="w-full">
          <CarouselContent>
            {images.map(img => (
                <CarouselItem 
                  key={+new Date()}
                  className={"basis-1/4 cursor-pointer"} 
                  onClick={() => {
                     setActiveImg(img.src);
                  }}>
                  <div className={cn("p-1 border-[0] border-primary rounded-md", activeImg === img.src && "border border-primary")}>
                    <Image
                      alt={`preview image`}
                      className={cn("aspect-square object-contain bg-primary/10 border border-gray-200 rounded-md overflow-hidden dark:border-gray-800 ")}
                      height={100}
                      src={img.src}
                      placeholder="blur"
                      blurDataURL={img.blurImage}
                      width={100}
                    />  
                  </div>
                  </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
   </>
}