import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'
import checkoutReducer from '../features/products/checkout/checkoutSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    checkout: checkoutReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>

export default store
