
// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";
export const revalidate = 60;
export const dynamicParams = true

import {  
    getProductDetails,} 
    from "@/data/products"
import { type Product } from "@/types/product";
import { Metadata } from "next";
import ProductDetailsPage from "../../../../components/fragment/ProductDeitalsPage";


type Params = { params : { productId: string}}


export async function generateMetadata({ params } : Params ) : Promise<Metadata> {
  const product : Product = await getProductDetails(params.productId)

  if(!product.id){
    return {
      title: 'Product not found',
    }
  }

  return {
    title : product.title,
    description : product.description,
    keywords: product.tags.join(",")
  }
}


export default async function Page({ params } : Params) {
  
  // const  product : Product = await getProductDetails(params.productId)

  // if(!product?.id) return notFound()


  return (
    <ProductDetailsPage productId={params.productId} />
  )
}