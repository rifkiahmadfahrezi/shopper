
import Link from "next/link"
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react"
import { shopper } from "@/lib/shopper.config"

export default function Footer() {
  return (
    <footer className="bg-background border-t pt-12 pb-5 md:py-16 lg:pt-20 mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold capitalize">{shopper.title}</h1>
          </div>
          <p className="text-sm md:text-base">
            {shopper.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-1 flex flex-col">
              <Link className="hover:underline" href="#">
                Home
              </Link>
              <Link className="hover:underline" href="#">
                Products
              </Link>
              <Link className="hover:underline" href="#">
                Categories
              </Link>
              <Link className="hover:underline" href="#">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Legal</h4>
            <nav className="space-y-1 flex flex-col">
              <Link className="hover:underline" href="#">
                Privacy Policy
              </Link>
              <Link className="hover:underline" href="#">
                Terms of Service
              </Link>
              <Link className="hover:underline" href="#">
                Refund Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 ">
            <Link className="hover:underline" href="#">
              <RiFacebookBoxFill className="h-6 w-6" />
            </Link>
            <Link className="hover:underline" href="#">
              <RiInstagramFill className="h-6 w-6" />
            </Link>
            <Link className="hover:underline" href="#">
              <RiTwitterFill className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 text-center text-gray-400 text-sm">© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SHOP_NAME}. All rights reserved.</div>
    </footer>
  )
}

