
import ProductResults from "./components/ProductResults"
import { shopper } from "@/lib/shopper.config"

interface Props {
   searchParams : { q : string }
}

export default function SearchProductPage({ searchParams } : Props) {

   return <>
      <ProductResults />
   </>
}

export function generateMetadata({ searchParams } : Props){

   return {
      title: `Result for "${searchParams.q}" - ${shopper.title}`
   }
}