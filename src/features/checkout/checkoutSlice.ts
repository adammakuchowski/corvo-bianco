import axios, {Canceler} from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AppState} from '@/app/store'
import {OrderApiFormat} from '@/types/types'
import {CheckoutState, FromState} from './types'

const initialState: CheckoutState = {
  checkoutForm: {
    email: {
      value: '',
      error: false,
    },
    name: {
      value: '',
      error: false,
    },
    surname: {
      value: '',
      error: false,
    },
    adress: {
      value: '',
      error: false,
    },
    postalCode: {
      value: '',
      error: false,
    },
    city: {
      value: '',
      error: false,
    },
    country: {
      value: '',
      error: false,
    },
    cardNumber: {
      value: '',
      error: false,
    },
    cardDate: {
      value: '',
      error: false,
    },
    cardCvc: {
      value: '',
      error: false,
    },
  },
  orderCreateStatus: 'idle',
  orderCreateError: null
}

interface UpdateCheckoutFormAction {
  payload: {
    value: string | boolean;
    objectKey: string;
    propertyKey: string;
  },
  type: string;
}

export const createOrder = createAsyncThunk('orders/createOrder', async (order: OrderApiFormat) => {
  try {
    let cancel: Canceler
    const response = await axios.post('http://localhost:1337/orders/createOrder', order, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })

    return response.data
  } catch (error: any) {
    console.error('[createOrder]:', error.message)
    throw error
  }
})

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCheckoutForm(state: CheckoutState, action: UpdateCheckoutFormAction) {
      const {payload: {value, objectKey, propertyKey}} = action

      state.checkoutForm[objectKey][propertyKey] = value
    },
    resetOrderCreateStatus(state: CheckoutState) {
      state.orderCreateStatus = 'idle'
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createOrder.pending, (state) => {
        state.orderCreateStatus = 'loading'
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.orderCreateStatus = 'succeeded'
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderCreateStatus = 'failed'
        state.orderCreateError = action.error.message
      })
  }
})

export const {
  updateCheckoutForm,
  resetOrderCreateStatus
} = checkoutSlice.actions

export const getCheckoutFromState = (state: AppState): FromState => state.checkout.checkoutForm

export default checkoutSlice.reducer
