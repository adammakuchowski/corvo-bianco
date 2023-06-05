import {createSlice} from '@reduxjs/toolkit'
import {Product, ProductCart} from '@/types/types'
import {AppState} from '@/app/store'
import {products} from './data'

export interface ProductsState {
  productsList: Product[];
  productsCart: ProductCart[];
  favoriteProducts: Product[];
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductsState = {
  productsList: products,
  productsCart: [],
  favoriteProducts: [],
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
    addToFavorites: {
      reducer(state, action) {
        state.favoriteProducts.push(action.payload)
      },
      prepare(product: Product): any {
        return {
          payload: {
            product,
          }
        }
      }
    },
  },
})

export const {addToCart, addToFavorites} = productsSlice.actions

export const getAllProducts = (state: AppState) => state.products.productsList
export const getproductsCart = (state: AppState) => state.products.productsCart

export default productsSlice.reducer
