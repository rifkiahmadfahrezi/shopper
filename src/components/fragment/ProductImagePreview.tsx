"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface ProductImages {
   thumbnail: string
   images : string[]
}
export default function ProductImagePreview({ thumbnail, images }: ProductImages) {
  const [activeImg, setActiveImg] = useState<string>(thumbnail);

  console.log(images, thumbnail)

  return (
    <><div className="grid gap-4">
        <div 
          className={`lg:w-[550px] bg-no-repeat h-[550px] rounded-lg overflow-hidden bg-[${activeImg}] group`} 
          >
          <Image
            alt={`image of product`}
            className="aspect-square object-contain border border-gray-200 w-full h-full   overflow-hidden dark:border-gray-800 transition duration-200"
            height={600}
            src={activeImg}
            width={800}
            priority
          />
        </div>
        <Carousel className="w-full max-w-[550px] group">
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem
                key={i}
                className={"basis-1/5 cursor-pointer"}>
                <button
                  onClick={() => {
                    setActiveImg(img);
                  }}
                  className={cn(
                    "focus:outline-dashed focus:outline-primary/55 overflow-hidden max-w-fit rounded-md",
                    activeImg === img && "border-2 border-primary"
                  )}
                >
                  <Image
                    alt={`preview image`}
                    className={
                      `aspect-square object-contain bg-primary/10 border border-gray-200 rounded-md overflow-hidden dark:border-gray-800`
                    }
                    height={100}
                    src={img}
                    width={100}
                    />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length >= 5 && 
            <>
              <CarouselPrevious className="left-5 transition duration-150 opacity-0 pointer-events-none -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto" />
              <CarouselNext className="right-5 transition duration-150 opacity-0 pointer-events-none translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto" />
            </>
          }
        </Carousel>
      </div>
    </>
  );
}
