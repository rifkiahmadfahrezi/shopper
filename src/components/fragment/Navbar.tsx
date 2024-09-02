"use client"
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { RiShoppingBagLine, RiMenuLine } from '@remixicon/react'
import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"
 import { Separator } from '../ui/separator'
 import { Button } from '@/components/ui/button'
 import SearchProduct from './SearchProduct'
 import { usePathname } from 'next/navigation'
 import { cn } from '@/lib/utils'
 import DropdownCart from './DropdownCart'
 import { shopper } from '@/lib/shopper.config'
import SearchProductForm from '../forms/SearchProductForm'
import { useSelector } from 'react-redux'
import { Badge } from '../ui/badge'
import { RootState } from '@/store/store'


const Navbar = () => { 

  const pathname = usePathname()
  const cart = useSelector((state: RootState) => state.cart)
  const activeLink = (current : string) : boolean => pathname == current

   const navLinks = [
     {
       link: "/products",
       content : "Products"
     },
     {
       link: "/categories",
       content : "Categories"
     },
   ]
 
   const navAction = [
     {
       link: "/sign-in",
       content: <Button asChild variant={'outline'} >
            <Link 
             href="/sign-in" 
             className='capitalize font-medium'>
              sign in
            </Link>
       </Button>
     },
     {
       link: "/sign-up",
       content: <Button asChild>
                    <Link 
                      href="/sign-up" 
                      className='capitalize font-medium'>
                      sign up
                    </Link>
                </Button>
     },
   ]
 
   return (
     <nav className='bg-background w-full sticky top-0 z-50'>
       <div className="container mx-auto px-5">
         <div className="flex justify-between items-center py-5">
           <Link href={'/'} className='font-bold text-xl capitalize btn btn-ghost'>
             {shopper.title}
           </Link>

           <div className="hidden lg:flex items-center gap-3 w-2/4 max-w-xl">
              <SearchProductForm />
           </div>

           <ul className='hidden xl:flex items-center gap-2'>
             {navLinks.map(item => (
               <li key={item.link}>
                 <Link href={item.link} className={cn('capitalize text-base font-medium btn btn-ghost', activeLink(item.link) && "bg-secondary/90" )}>
                   {item.content}
                 </Link>
               </li>
             ))}
             <li>
                <DropdownCart />
             </li>
             <li>
                <ThemeToggler />
             </li>
             {navAction.map(item => (
               <li key={item.link}>
                 {item.content}
               </li>
             ))}
           </ul>
           <div className="flex items-center xl:hidden">
            <ul className='flex item-center gap-3 bg-blue'>
              <li className=''>
                <Link href="/cart" className='relative'>
                   {cart.totalItem !== 0 &&
                    <Badge variant={'secondary'} className="absolute -bottom-1 -left-1 py-1 px-2" >{cart.totalItem}</Badge>
                  }
                  <div className="btn btn-ghost">
                  <RiShoppingBagLine size={24} />
                  </div>
                </Link>
              </li>
              <li>
                <SearchProduct />
              </li>
              <li className='mt-2'>
                <ThemeToggler />
              </li>
            </ul>
           <Sheet>

            <SheetTrigger asChild>
               <Button  className='ml-3'>
                  <RiMenuLine />
               </Button>
            </SheetTrigger>
            <SheetContent>
               <ul className='flex flex-col justify-center items-center text-center gap-2 my-20 w-full'>
                  {navLinks.map(item => (
                     <li key={item.link} className='w-full flex'>
                        <Link href={item.link} className='capitalize text-base font-medium btn btn-ghost w-full'>
                           {item.content}
                        </Link>
                     </li>
                  ))}

                  <Separator className="my-7"/>

                  <div className="w-full flex flex-col gap-2 items-center justify-center">
                     {navAction.map(item => (
                        <li key={item.link} className='w-full flex'>
                        {item.content}
                        </li>
                     ))}
                  </div>
               </ul>
            </SheetContent>
         </Sheet>
           </div>
         </div>
       </div>
     </nav>
   )
 }

 export default Navbar