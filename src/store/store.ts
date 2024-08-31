import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CartSlice from './slices/cartSlice'
import { persistStore, persistReducer, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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
      reducer: persistedReducer
   })
}

export const persistor = persistStore(makeStore())


export type AppStore = ReturnType< typeof makeStore >
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']