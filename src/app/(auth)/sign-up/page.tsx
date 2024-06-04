import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RiGoogleFill } from "@remixicon/react"
import { Grocery1 } from "@/components/icons"
import { Metadata } from "next"

import { 
  AuthContent, 
  AuthFormContainer, 
  AuthImage, 
  AuthLayout, 
  AuthTitle } from "@/components/layouts/AuthLayout"

import { FormEvent } from "react"

export const metadata : Metadata = {
  title: "Sign up - start your journey here"
} 


export default function Component() {

  const handleSignIn =  (event : FormEvent) => {
    event.preventDefault()
  } 

  return (
    <AuthLayout>
      <AuthImage>
        <Grocery1 />
      </AuthImage>
      <AuthContent>
        <AuthTitle title="Sign up">
          <p className="text-gray-500 dark:text-gray-400">Create your account to get started.</p>
        </AuthTitle>
        <AuthFormContainer>
           <form className="space-y-4">
             <div>
               <Label htmlFor="email">Email</Label>
               <Input id="email" name="email" placeholder="Enter your email" required type="email" />
             </div>
             <div>
               <Label htmlFor="password">Password</Label>
               <Input id="password" name="password" placeholder="Enter your password" required type="password" />
             </div>
             <div>
               <Label htmlFor="password">Confirm Password</Label>
               <Input id="password" name="confirm-password" placeholder="Confirm your password" required type="password" />
             </div>
             <Button className="w-full" type="submit">
               Sign Up
             </Button>
             <div className="relative">
               <div className="absolute inset-0 flex items-center">
                 <span className="w-full border-t" />
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                 <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">Or sign up with</span>
               </div>
             </div>
             <Button className="w-full" variant="outline">
               <RiGoogleFill className="mr-2 h-4 w-4" />
               Sign up with Google
             </Button>
           </form>
        </AuthFormContainer>
      </AuthContent>
    </AuthLayout>
  )
}
