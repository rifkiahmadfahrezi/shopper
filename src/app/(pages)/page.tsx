
import HomeBanner from "@/components/fragment/HomeBanner"
import Products from "@/components/fragment/Products"
import Categories from "@/components/fragment/Categories"

const HomePage : React.FC = ()  => {


  return (
    <>
      <div className="container mx-auto px-4">
        <HomeBanner />

        <h1 className="text-center text-xl md:text-2xl font-semibold my-8 capitalize">Categories</h1>
        <Categories />
        <h1 className="text-center text-xl md:text-2xl font-semibold my-8 capitalize">Our products</h1>
        <Products />
      </div>
    </>
  )
}


export default HomePage