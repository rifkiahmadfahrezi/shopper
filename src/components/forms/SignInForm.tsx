"use client"

import { Label } from "../ui/label"
import { RiGoogleFill } from "@remixicon/react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { FormEvent } from "react"
import type { SignIn } from "@/types/auth"
import { signIn } from "@/data/auth"

import { useForm, SubmitHandler } from "react-hook-form"



export default function SignInForm() {

  //  const handleSignIn = (event : FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()

  //     const formData = new FormData(event.currentTarget)

  //     const email = formData.get("username") || ""
  //     const password = formData.get("password") || ""

  //     console.log(formData)
      
  //     const signInData : SignIn = {
  //        username : email,
  //        password,
  //        expiresInMins: 30
  //     }
  //   }
  const { register, watch, handleSubmit, formState : { errors } } = useForm<SignIn>()


  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    console.log(data)
    const x = await signIn(data)
    console.log(x)
  }

   return <>
      <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input {...register("username")} id="username" placeholder="Enter your username" required type="text" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" {...register("password")} name="password" placeholder="Enter your password" required type="password" />
            </div>
            <input type="hidden" {...register("expiresInMins", { value : 30})} />
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
   </>
}