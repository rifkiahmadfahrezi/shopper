"use client"

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CartSlice from './slices/cartSlice'
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist'
import storage from './storage'

const rootReducer = combineReducers({
   cart:CartSlice
})

const persistConfig  = {
   key: 'root',
   storage,
   whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
   return configureStore({
      devTools: true,
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
      }),
   })
}

export const persistor = persistStore(makeStore())


export type AppStore = ReturnType< typeof makeStore >
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']