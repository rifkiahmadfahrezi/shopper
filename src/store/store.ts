import { configureStore } from '@reduxjs/toolkit'
import searchProductSlice from './slices/searchProductSlice'

export const makeStore = () => {
   return configureStore({
      reducer: {
         searchProduct: searchProductSlice
      }
   })
}

export type AppStore = ReturnType< typeof makeStore >
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']