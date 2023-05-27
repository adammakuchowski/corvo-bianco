import {createSlice} from '@reduxjs/toolkit'
import {Product, ProductCart} from '@/types/types'
import {AppState} from '@/app/store'
import {productsCart, products} from './data'

export interface ProductsState {
  productsList: Product[];
  productsCart: ProductCart[];
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductsState = {
  productsList: products,
  productsCart: productsCart,
  status: 'idle',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        state.productsCart.push(action.payload)
      },
      prepare(product: Product, quantity: number): any {
        return {
          payload: {
            product,
            quantity
          }
        }
      }
    },
  },
})

export const {addToCart} = productsSlice.actions

export const getAllProducts = (state: AppState) => state.products.productsList
export const getproductsCart = (state: AppState) => state.products.productsCart

export default productsSlice.reducer
