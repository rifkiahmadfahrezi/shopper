
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { Button } from '@/components/ui/button'
import { RiShoppingBagLine, RiMenu3Line } from '@remixicon/react'
import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"
 import { Separator } from '../ui/separator'
 import MyTooltip from './MyTooltip'
 import SearchProduct from './SearchProduct'

const Navbar = () => { 
   const navLinks = [
     {
       link: "/",
       content : "Home"
     },
     {
       link: "/products",
       content : "Products"
     },
   ]
 
   const navAction = [
     {
       link: "/sign-in",
       content: <Link 
             href="sign-in" 
             className='capitalize font-medium btn btn-outline w-full'>
               sign in
             </Link>
     },
     {
       link: "/sign-up",
       content: <Link 
             href="sign-up" 
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
             Shopper
           </Link>
 
           <ul className='hidden lg:flex items-center gap-2'>
             {navLinks.map(item => (
               <li key={item.link}>
                 <Link href={item.link} className='capitalize text-base font-medium btn btn-ghost'>
                   {item.content}
                 </Link>
               </li>
             ))}
             <li>
                <MyTooltip text='search product'>
                  <SearchProduct />
                </MyTooltip>
             </li>
             <li>
                <Link href="/cart">
                  <span className='btn btn-ghost flex'>
                    <RiShoppingBagLine size={24} />
                  </span>
                </Link>
             </li>
             <li>
                <MyTooltip text="change theme" >
                  <ThemeToggler />
                </MyTooltip>
             </li>
             {navAction.map(item => (
               <li key={item.link}>
                 {item.content}
               </li>
             ))}
           </ul>
           <div className="flex items-center lg:hidden">
            <ul className='flex item-center gap-4'>
              <li>
                <Link href="/cart">
                  <RiShoppingBagLine size={24} />
                </Link>
              </li>
              <li>
                <MyTooltip text="change theme">
                  <ThemeToggler />
                </MyTooltip>
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