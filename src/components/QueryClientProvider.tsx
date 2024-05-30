"use client"
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider as TanstackProvider } from "@tanstack/react-query"

const QueryClientProvider = ({ children } : { children : React.ReactNode }) => {

   const [ client ] = useState(() => new QueryClient())

  return (
    <TanstackProvider client={client}>
      {children}
    </TanstackProvider>
  )
}

export default QueryClientProvider