
import HomeBanner from "@/components/fragment/HomeBanner"
import ProductList from "@/components/fragment/ProductsList"
import { getProduct } from "@/data/products"


const HomePage : React.FC = ()  => {


  return (
    <>
      <div className="container mx-auto px-4">
        <HomeBanner />

        <h1 className="text-center text-xl md:text-2xl font-semibold my-8 capitalize">Our products</h1>
          <ProductList />
      </div>
    </>
  )
}


export default HomePage