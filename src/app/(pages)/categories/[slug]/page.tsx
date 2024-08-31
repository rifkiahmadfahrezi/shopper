
import CategoryProduct from "./components/CategoryProduct"
import type { Metadata } from "next"


interface Params {
   params: { slug : string}
}

const CategoryProductPage = ({ params } : Params) => {
  return (
    <CategoryProduct slug={params.slug} />
  )
}


export function generateMetadata({ params } : Params) : Metadata{
   return {
      title: params.slug.split('-').join(' ')
   }
}

export default CategoryProductPage