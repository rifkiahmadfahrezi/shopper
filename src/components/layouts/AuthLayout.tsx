
interface Props {
   children : React.ReactNode
}

export function AuthLayout( { children } : Props  ) {
   return (
      <div className=" container mx-auto px-5">
         <div className="grid min-h-screen max-h-[800px] w-full grid-cols-1 lg:grid-cols-2 place-items-center">
         {children}
         </div>
      </div>
   )
}

export function AuthImage({ children } : Props){
   return (
      <div className="relative hidden lg:block">
         {children}
      </div>
   )
}

export function AuthFormContainer({ children } : Props){
   return (
      <div className="">
         {children}
      </div>
   )
}

export function AuthTitle({ title, children } : { title: string, children ?: React.ReactNode }){
   return (
      <div className="space-y-2 text-center">
         <h1 className="text-3xl font-bold capitalize">{title}</h1>
         {children}
      </div>
   )
}

export function AuthContent({ children } : Props){
   return (
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 w-full max-w-lg">
        <div className="w-full max-w-md space-y-6">
            {children}
        </div>
      </div>
   )
}