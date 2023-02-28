import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { HYDRATE } from "next-redux-wrapper";
import { products } from '../services/fetching'

export interface CartState {
      product: products,
      count: number
}

const initialState: CartState[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state, action) =>{
      const item = state.find((i)=> i.product.id === action.payload.id)

      if(item) {
        state = state.map((i)=>{
          return i.product.id===item.product.id ? {product: i.product, count: i.count+1} : i
        })
      } else {
        state.push({...action.payload, count: 1})
      }
    },
    
  }
})