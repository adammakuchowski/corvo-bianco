import axios, {Canceler} from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Product, ProductCart} from '@/types/types'
import {AppState} from '@/app/store'

// mock products data
import {products} from './data'

export interface ProductsState {
  productsList: Product[];
  productsCart: ProductCart[];
  favoriteProducts: Product[];
  productFetchStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: ProductsState = {
  productsList: [],
  productsCart: [],
  favoriteProducts: [],
  productFetchStatus: 'idle',
  error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    let cancel: Canceler
    // const response = await axios.get('http://localhost:1337/products/getAllProducts', {
    //   cancelToken: new axios.CancelToken(c => cancel = c)
    // })

    // return response.data

    return products
  } catch (error: any) {
    console.error('[fetchProducts]:', error.message)
    throw error
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        const {productsCart} = state
        const {payload: {product: {id}, quantity}} = action

        if (productsCart.every(productCart => productCart.product.id !== id)) {
          state.productsCart.push(action.payload)
        } else {
          const updatedProductsCart = productsCart.map(productCart => {
            if (productCart.product.id !== id) return productCart

            return {...productCart, quantity: productCart.quantity + quantity}
          })

          state.productsCart = updatedProductsCart
        }
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
    updateProductsCart(state, action: {payload: ProductCart[]}) {
      state.productsCart = action.payload
    },
    updateFavoriteProducts(state, action: {payload: Product[]}) {
      state.favoriteProducts = action.payload
    },
    clearCart(state) {
      state.productsCart = []
    },
    clearFavorite(state) {
      state.favoriteProducts = []
    },
    addToFavorites(state, action: {payload: Product}) {
      if (!state.favoriteProducts.some(product => product.id === action.payload.id)) {
        state.favoriteProducts.push(action.payload)
      }
    },
    updateQuantityProductCart(state, action: {payload: {id: string, actionOperator: string, value: number}}) {
      const {id, actionOperator, value} = action.payload
      const updatedProductCart = state.productsCart.map((productCart: ProductCart) => {
        if (productCart.product.id !== id) return productCart

        const {quantity} = productCart
        if (actionOperator === 'increment') return {...productCart, quantity: quantity + value}
        if (actionOperator === 'decrement') return {...productCart, quantity: quantity - value}

        return productCart
      })

      state.productsCart = updatedProductCart
    },
    removeProductCart(state, action: {payload: {id: string}}) {
      const {id} = action.payload
      const updatedProductCart = state.productsCart.filter((productCart: ProductCart) => productCart.product.id !== id)

      state.productsCart = updatedProductCart
    },
    removeFavoriteProduct(state, action: {payload: {id: string}}) {
      const {id} = action.payload
      const updatedFavoriteProducts = state.favoriteProducts.filter((product: Product) => product.id !== id)

      state.favoriteProducts = updatedFavoriteProducts
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productFetchStatus = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productFetchStatus = 'succeeded'
        state.productsList = state.productsList.concat(action.payload)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productFetchStatus = 'failed'
        state.error = action.error.message
      })
  }
})

export const {
  addToCart,
  updateProductsCart,
  updateFavoriteProducts,
  clearCart,
  addToFavorites,
  updateQuantityProductCart,
  removeProductCart,
  removeFavoriteProduct,
  clearFavorite,
} = productsSlice.actions

export const getAllProducts = (state: AppState) => state.products.productsList
export const getProductsCart = (state: AppState) => state.products.productsCart
export const getFavoriteProducts = (state: AppState) => state.products.favoriteProducts
export const getTotalCartPrice = (state: AppState) => {
  const productsCart = state.products.productsCart

  return productsCart.reduce((total: number, amount: ProductCart): number => {
    const {product: {price}, quantity} = amount
    const totalPrice = price * quantity

    return total + totalPrice
  }, 0)
}

export default productsSlice.reducer
