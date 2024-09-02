"use client"

import { Provider } from "react-redux"
import { makeStore, type AppStore } from "@/store/store"
import { useRef } from "react"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

export default function StoreProvider({ children } : { children : React.ReactNode }) {
   const storeRef = useRef<AppStore>()
   const persistorRef = useRef<ReturnType<typeof persistStore>>()

   if (!storeRef.current) {
      storeRef.current = makeStore()
      persistorRef.current = persistStore(storeRef.current)
   }

   if (!persistorRef.current) {
      return null
   }

   return (
      <Provider store={storeRef.current}>
         <PersistGate loading={null} persistor={persistorRef.current}>
            {children}
         </PersistGate>
      </Provider>
   )
}
