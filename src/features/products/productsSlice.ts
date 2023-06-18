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
    clearCart(state) {
      state.productsCart = []
    },
    addToFavorites(state, action) {
      state.favoriteProducts.push(action.payload)
    },
    updateQuantityProductCart(state, action) {
      const {id, actionOperator} = action.payload
      const updatedProductCart = state.productsCart.map((productCart: ProductCart) => {
        if(productCart.product.id !== id) return productCart

        const {quantity} = productCart
        if(actionOperator === 'increment') return {...productCart, quantity: quantity + 1}
        if(actionOperator === 'decrement') return {...productCart, quantity: quantity - 1}

        return productCart
      })

      state.productsCart = updatedProductCart
    },
  },
})

export const {
  addToCart, 
  clearCart, 
  addToFavorites,
  updateQuantityProductCart
} = productsSlice.actions

export const getAllProducts = (state: AppState) => state.products.productsList
export const getProductsCart = (state: AppState) => state.products.productsCart

export default productsSlice.reducer
