import {createSlice} from '@reduxjs/toolkit'
import {AppState} from '@/app/store'
import {CheckoutState, FromState} from './types'

const initialState: CheckoutState = {
  checkoutForm: {
    email: '',
    emailError: false,
    name: '',
    nameError: false,
    surname: '',
    surnameError: false,
    adress: '',
    adressError: false,
    postalCode: '',
    postalCodeError: false,
    city: '',
    cityError: false,
    country: '',
    countryError: false,
    cardNumber: '',
    cardNumberError: false,
    cardDate: '',
    cardDateError: false,
    cardCvc: '',
    cardCvcError: false,
  }
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCheckoutform(state, action) {
      const {payload: {value, key}} = action

      state.checkoutForm[key] = value
    },
  }
})

export const {
  updateCheckoutform
} = checkoutSlice.actions

export const getCheckoutFromState = (state: AppState): FromState => state.checkout.checkoutForm

export default checkoutSlice.reducer

