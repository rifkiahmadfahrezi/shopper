
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { Button } from "@/components/ui/button"
import BackButton from "@/components/ui/back-button"
import { Separator } from "@/components/ui/separator"
import { RiStarFill, RiCheckFill, RiArrowLeftLine } from "@remixicon/react"
import { 
    getAllProducts, 
    getProductDetails,
    type Product} 
    from "@/data/products"
import { notFound } from "next/navigation"
import getBase64 from "@/components/get-base64"
import ProductImagePreview from "./component/ProductImagePreview"

type Params = { params : { productId: string}}
type CarouselImage = {
  src : string,
  blurImage : string
}



export async function generateStaticParams() {
  const products = await getAllProducts()

  return products.map((product : Product) => ({
      productId : product.id.toString()
  }))
}

export async function generateMetadata({ params } : Params ){
  const product : Product = await getProductDetails(params.productId)
  if(!product.id){
    return {
      title: 'Product not found',
    }
  }

  return {
    title : product.title,
    description : product.description,
  }
}


export default async function ProductDetailPage({ params } : Params) {
  
  const  product : Product = await getProductDetails(params.productId)

  if(!product?.id) return notFound()

  const images = async () =>{
    const promises = product.images.map(async (img) => {
        const blur = await getBase64(img);
        return {
          src : img,
          blurImage: blur || "",
        };
      });
  
      return Promise.all(promises);
  }

  const carouselImage : CarouselImage[] = await images()


  return (
    
    <div className="container mx-auto px-5">
      
      <div className="flex items-center flex-col lg:flex-row gap-6 py-6">
        <div className="w-full max-w-[550px]">
          <ProductImagePreview 
            thumbnail={product.thumbnail}
            images={carouselImage}
          />
        </div>


        <div className="ml-0 lg:ml-10 w-full grid gap-4 md:gap-10 max-w-[550px]">
        
          <div>
            <h1 className="font-bold text-3xl lg:text-4xl">{product.title}</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <RiStarFill className="size-5 fill-yellow-500" />
              {product.rating}
            </div>
            {product.stock > 0 && 
              <div className="flex items-center gap-0.5">
                <RiCheckFill className="size-5 fill-green-500" />
                <span className="capitalize">stock ({product.stock})</span>
              </div>
            }
            <div className="text-4xl font-bold">$ {product.price}</div>
          </div>
        <Separator />
        <article className="min-h-[200px]">
          {product.description}
        </article>
        <div className="flex items-center gap-3 w-full">
            <Button className="capitalize w-full min-w-fit">
              buy now
            </Button>
            <Button className="capitalize w-full min-w-fit" variant={"outline"}>
              add to cart
            </Button>
        </div>
        </div>
      </div>
      <div className="py-5">
          <BackButton />
      </div>
    </div>
  )
}

