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
    incrementQuantityProductCart(state, action) {
      const productId = action.payload
      const updatedProductCart = state.productsCart.map((productCart: ProductCart) => {
        if(productCart.product.id !== productId) return productCart

        const {quantity} = productCart
        return {...productCart, quantity: quantity + 1}
      })

      state.productsCart = updatedProductCart
    },
    decrementQuantityProductCart(state, action) {

    }
  },
})

export const {
  addToCart, 
  clearCart, 
  addToFavorites,
  incrementQuantityProductCart
} = productsSlice.actions

export const getAllProducts = (state: AppState) => state.products.productsList
export const getProductsCart = (state: AppState) => state.products.productsCart

export default productsSlice.reducer
