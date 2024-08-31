import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"
import { getAllCategories } from "@/data/category"


export const metadata: Metadata = {
   title: "Categories - Shopper"
}

const CategoriesPage = async () => {
   const categories = await getAllCategories()
  return (
    <>
    <div className="container mx-auto">
      <h1 className="text-xl md:text-2xl font-bold my-7" >Categories</h1>
      <div className="flex flex-wrap gap-3">
         {categories?.map(item => (
            <Link key={item.slug} href={`/categories/${item.slug}`} className="p-1">
               <Card className="p-3 " >
               <h1 className="text-lg text-foreground font-semibold">{item.name}</h1>
               </Card>
            </Link>
         ))}
      </div>
    </div>
    </>
  )
}


export default CategoriesPage