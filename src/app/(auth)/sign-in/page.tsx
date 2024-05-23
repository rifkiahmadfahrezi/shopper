import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RiGoogleFill } from "@remixicon/react"
import { Grocery1 } from "@/components/icons"

export default function Component() {
  return (
   <div className=" container mx-auto px-5">
      <div className="grid min-h-screen max-h-[800px] w-full grid-cols-1 lg:grid-cols-2 place-items-center">
      <div className="relative hidden lg:block">
         <Grocery1 />
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 w-full max-w-lg">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold capitalize">Sign in</h1>
            <p className="text-gray-500 dark:text-gray-400">Let&apos;s start shopping!</p>
          </div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" required type="email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">Or sign in with</span>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              <RiGoogleFill className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
    </div>
   </div>
    
  )
}
