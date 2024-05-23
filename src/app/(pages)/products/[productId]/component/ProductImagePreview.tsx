"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
// import { useZoom } from "@/app/hooks/useZoom"

interface Images {
   src: string
   blurImage: string
}

export interface ProductImages {
   thumbnail: string
   images : Images[]
}
export default function ProductImagePreview({ thumbnail, images }: ProductImages) {
  const [activeImg, setActiveImg] = useState<string>(thumbnail);
  // const imageRef = useRef<null | HTMLDivElement>(null)
  // const { x, y } = useZoom(imageRef)

  return (
    <>
      <div className="grid gap-4">
        <div 
          className={`lg:w-[550px] bg-no-repeat h-[550px] rounded-lg overflow-hidden bg-[${activeImg}] group`} 
          // ref={imageRef} 

          // style={{ 
          //   backgroundPosition: `${x}% ${y}%`,
          //   backgroundImage: `url(${activeImg} )`
          // }}
          >
          <Image
            alt={`image of product`}
            className="aspect-square object-contain border border-gray-200 w-full h-full   overflow-hidden dark:border-gray-800 transition duration-200"
            height={600}
            src={activeImg}
            width={800}
            loading="lazy"
          />
        </div>
        <Carousel className="w-full max-w-[550px] group">
          <CarouselContent>
            {images.map((img) => (
              <CarouselItem
                key={+new Date()}
                className={"basis-1/4 cursor-pointer"}
                onClick={() => {
                  setActiveImg(img.src);
                }}
              >
                <div
                  className={cn(
                    "p-1 overflow-hidden max-w-fit rounded-md"
                  )}
                >
                  <Image
                    alt={`preview image`}
                    className={
                      `aspect-square object-contain bg-primary/10 border border-gray-200 rounded-md overflow-hidden dark:border-gray-800`
                    }
                    height={100}
                    src={img.src}
                    placeholder="blur"
                    blurDataURL={img.blurImage}
                    width={100}
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5 transition duration-150 opacity-0 pointer-events-none -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto" />
          <CarouselNext className="right-5 transition duration-150 opacity-0 pointer-events-none translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto" />
        </Carousel>
      </div>
    </>
  );
}
