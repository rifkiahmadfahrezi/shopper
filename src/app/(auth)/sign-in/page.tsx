import { Grocery1 } from "@/components/icons"
import { Metadata } from "next"
import { 
  AuthContent, 
  AuthFormContainer, 
  AuthImage, 
  AuthLayout, 
  AuthTitle } from "@/components/layouts/AuthLayout"

import SignInForm from "@/components/forms/SignInForm"

export const metadata : Metadata = {
  title: "Sign in - start your journey here"
}


export default function Component() {

  return (
    <AuthLayout>
      <AuthImage>
        <Grocery1 />
      </AuthImage>
      <AuthContent>
        <AuthTitle title="Sign in"/>
        <AuthFormContainer>
          <SignInForm />
        </AuthFormContainer>
      </AuthContent>
    </AuthLayout>
  )
}
