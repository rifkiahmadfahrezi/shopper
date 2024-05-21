
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import getBase64 from "@/components/get-base64"
import { AspectRatio } from "../ui/aspect-ratio"
import { RiStarFill, RiShoppingBagLine } from "@remixicon/react"
import { Badge } from "../ui/badge"
import MyTooltip from "./MyTooltip"

import { getProduct, type Product } from "@/data/products"

// const products : Array<ProductProps> = [{
//    "id": 1,
//    "name": "Pork - Smoked Kassler",
//    "image": "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//    "price": 6
//  }, {
//    "id": 2,
//    "name": "Soup - Knorr, Ministrone",
//    "image": "http://dummyimage.com/232x100.png/dddddd/000000",
//    "price": 2
//  }, {
//    "id": 3,
//    "name": "Buffalo - Tenderloin",
//    "image": "http://dummyimage.com/173x100.png/ff4444/ffffff",
//    "price": 5
//  }, {
//    "id": 4,
//    "name": "Celery",
//    "image": "http://dummyimage.com/217x100.png/dddddd/000000",
//    "price": 3
//  }, {
//    "id": 5,
//    "name": "Vinegar - Tarragon",
//    "image": "http://dummyimage.com/191x100.png/cc0000/ffffff",
//    "price": 8
//  }, {
//    "id": 6,
//    "name": "Bread Country Roll",
//    "image": "http://dummyimage.com/162x100.png/cc0000/ffffff",
//    "price": 2
//  }, {
//    "id": 7,
//    "name": "Cod - Salted, Boneless",
//    "image": "http://dummyimage.com/246x100.png/cc0000/ffffff",
//    "price": 4
//  }, {
//    "id": 8,
//    "name": "Wine - Maipo Valle Cabernet",
//    "image": "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
//    "price": 6
//  }, {
//    "id": 9,
//    "name": "Seabream Whole Farmed",
//    "image": "http://dummyimage.com/181x100.png/ff4444/ffffff",
//    "price": 6
//  }, {
//    "id": 10,
//    "name": "Truffle - Peelings",
//    "image": "http://dummyimage.com/112x100.png/dddddd/000000",
//    "price": 3
//  }, {
//    "id": 11,
//    "name": "Veal - Leg, Provimi - 50 Lb Max",
//    "image": "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
//    "price": 1
//  }, {
//    "id": 12,
//    "name": "Marjoram - Dried, Rubbed",
//    "image": "http://dummyimage.com/132x100.png/ff4444/ffffff",
//    "price": 4
//  }, {
//    "id": 13,
//    "name": "Wine - Sawmill Creek Autumn",
//    "image": "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
//    "price": 9
//  }, {
//    "id": 14,
//    "name": "Cake - Box Window 10x10x2.5",
//    "image": "http://dummyimage.com/176x100.png/cc0000/ffffff",
//    "price": 5
//  }, {
//    "id": 15,
//    "name": "Wine - Ej Gallo Sonoma",
//    "image": "http://dummyimage.com/166x100.png/dddddd/000000",
//    "price": 7
//  }, {
//    "id": 16,
//    "name": "Dried Cherries",
//    "image": "http://dummyimage.com/202x100.png/dddddd/000000",
//    "price": 2
//  }, {
//    "id": 17,
//    "name": "Rum - Dark, Bacardi, Black",
//    "image": "http://dummyimage.com/189x100.png/cc0000/ffffff",
//    "price": 5
//  }, {
//    "id": 18,
//    "name": "Ice Cream - Fudge Bars",
//    "image": "http://dummyimage.com/155x100.png/dddddd/000000",
//    "price": 2
//  }, {
//    "id": 19,
//    "name": "Spinach - Baby",
//    "image": "http://dummyimage.com/136x100.png/cc0000/ffffff",
//    "price": 1
//  }, {
//    "id": 20,
//    "name": "Bandage - Flexible Neon",
//    "image": "http://dummyimage.com/139x100.png/cc0000/ffffff",
//    "price": 7
//  }]

 
 const ProductsList : React.FC = async () => {

  const products = await getProduct()
   
    
   const newProducts = async () =>{
      const promises = products.map(async (product : Product) => {
         const blur = await getBase64(product.image);
         return {
           ...product,
           blurImage: blur,
         };
       });
   
       return Promise.all(promises);
   }

   
   return (
     <>
       <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {newProducts()
         .then(data => 
            data.map((product : Product) => (
               <Card key={product.id} className="overflow-hidden">
                  <AspectRatio ratio={1 / 1}>
                     <Image 
                       className="w-full h-full max-h-[300px] object-cover"
                       width={400}
                       loading="lazy"
                       height={300}
                       blurDataURL={product.blurImage}
                       placeholder="blur"
                       src={product.image} 
                       alt={product.title} />
                  </AspectRatio>
                 <CardContent className="mt-3">
                     <h1 className="text-base line-clamp-2" title={product.title}>{product.title}</h1>
                     <p className="font-semibold text-xl">$ {product.price}</p>
                     <Badge className="my-3 capitalize" variant={"outline"}>
                      {process.env.NEXT_PUBLIC_SHOP_NAME}
                      </Badge>
                     <div className="my-4">
                        <Badge variant={"outline"}>
                          <RiStarFill size={16} className="fill-yellow-500" />
                          <span className="mx-2 ">{product.rating.rate}</span>
                        </Badge>
                     </div>
                 </CardContent>
                 <CardFooter className="flex gap-2 items-center">
                   <Button className="flex-1 flex-shrink">
                     <span className="mx-2 capitalize">buy now</span> 
                   </Button>
                    <MyTooltip text="add to cart">
                      <Badge variant={"outline"} className="py-2 hover:bg-primary/30">
                        <RiShoppingBagLine size={20} />
                      </Badge>
                    </MyTooltip>
                 </CardFooter>
               </Card>
             ))
         )}
       </div>
     </>
   )
 }

 export default ProductsList