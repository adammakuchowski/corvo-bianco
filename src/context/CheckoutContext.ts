import react from 'react'

export interface CheckoutContextValue {
  className: string;
}

const CheckoutContext = react.createContext<CheckoutContextValue>({
  className: ''
})

export default CheckoutContext
