"use client"

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


interface SearchProductState {
   keyword: string
}

const initialState : SearchProductState = {
   keyword: ''
}

export const SearchProductSlice = createSlice({
   name: 'search-product',
   initialState,
   reducers: {
      changeKeyword: (state, action : PayloadAction<string>) => {
         state.keyword = action.payload
      },
      clearKeyword: (state) => {
         state.keyword =''
      }
   }
})

export const { changeKeyword, clearKeyword } = SearchProductSlice.actions
export default SearchProductSlice.reducer