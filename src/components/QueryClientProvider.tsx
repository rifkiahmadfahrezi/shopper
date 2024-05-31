"use client"
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider as TanstackProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryClientProvider = ({ children } : { children : React.ReactNode }) => {

   const [ client ] = useState(() => new QueryClient())

  return (
    <TanstackProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </TanstackProvider>
  )
}

export default QueryClientProvider