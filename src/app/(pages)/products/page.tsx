import ProductsList from "@/components/fragment/ProductsList";
export default function ProductPage() {
   return (
      <div className="container mx-auto px-4">
         <h1 className="text-center text-xl md:text-2xl font-semibold my-8 capitalize">Our Products</h1>
         <ProductsList />
      </div>
   )
}

