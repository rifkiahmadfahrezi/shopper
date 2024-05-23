"use client"
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { RiShoppingBagLine, RiMenu3Line, RiSearchLine } from '@remixicon/react'
import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"
 import { Separator } from '../ui/separator'
 import { Input } from '../ui/input'
 import { Button } from '@/components/ui/button'
 import SearchProduct from './SearchProduct'
 import { usePathname } from 'next/navigation'
 import { cn } from '@/lib/utils'

const Navbar = () => { 

  const pathname = usePathname()

  const activeLink = (current : string) : boolean => pathname == current

   const navLinks = [
     {
       link: "/products",
       content : "Products"
     },
   ]
 
   const navAction = [
     {
       link: "/sign-in",
       content: <Link 
             href="/sign-in" 
             className='capitalize font-medium btn btn-outline w-full'>
               sign in
             </Link>
     },
     {
       link: "/sign-up",
       content: <Link 
             href="/sign-up" 
             className='capitalize font-medium btn btn-default w-full'>
               sign up
             </Link>
     },
   ]
 
   return (
     <nav className='bg-background w-full sticky top-0 z-50'>
       <div className="container-lg mx-auto px-5">
         <div className="flex justify-between items-center py-5">
           <Link href={'/'} className='font-bold text-xl capitalize btn btn-ghost'>
             {process.env.NEXT_PUBLIC_SHOP_NAME}
           </Link>

           <div className="flex items-center gap-3 w-2/4 max-w-xl">
            <form className="hidden xl:flex w-full items-center space-x-2">
                <Input type="search" className='w-full' placeholder="Search some product..." />
                <Button type="submit">
                  <RiSearchLine size={16}/>
                </Button>
              </form>
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
                <Link href="/cart">
                  <span className='btn btn-ghost flex'>
                    <RiShoppingBagLine size={24} />
                  </span>
                </Link>
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
                <Link href="/cart">
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
               <Button variant="outline" className='ml-3'>
                  <RiMenu3Line />
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