import {createSlice} from '@reduxjs/toolkit'
import {AppState} from '@/app/store'
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
  }
}

interface UpdateCheckoutFormAction {
  payload: {
    value: string | boolean;
    objectKey: string;
    propertyKey: string;
  },
  type: string;
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCheckoutForm(state: CheckoutState, action: UpdateCheckoutFormAction) {
      const {payload: {value, objectKey, propertyKey}} = action

      state.checkoutForm[objectKey][propertyKey] = value
    },
  }
})

export const {
  updateCheckoutForm
} = checkoutSlice.actions

export const getCheckoutFromState = (state: AppState): FromState => state.checkout.checkoutForm

export default checkoutSlice.reducer
