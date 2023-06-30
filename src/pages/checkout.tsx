import CheckoutHeader from '@/components/Checkout/CheckoutHeader/CheckoutHeader'
import {CheckoutContainer} from './styles/checkoutStyled'

const Checkout = (): JSX.Element => {
  return (
    <CheckoutContainer>
      <CheckoutHeader />
    </CheckoutContainer>
  )
}

export default Checkout
