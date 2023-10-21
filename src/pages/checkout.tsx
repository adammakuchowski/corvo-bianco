import {useState, useEffect} from 'react'

import CheckoutContext, {CheckoutContextValue} from '@/context/CheckoutContext'
import Header from '@/components/shared/header/Header'
import Summary from '@/components/pages/checkout/summary/Summary'
import Footer from '@/components/shared/footer/Footer'

import {CheckoutContainer} from './styles/checkoutStyled'

const Checkout = (): JSX.Element => {
  const [className, setClassName] = useState<string>('')

  useEffect(() => {
    setClassName('active')
  }, [])

  const checkoutContextValue: CheckoutContextValue = {
    className: className,
  }

  return (
    <CheckoutContext.Provider value={checkoutContextValue}>
      <CheckoutContainer>
        <Header className={className} />
        <Summary />
        <Footer upButtonIsVisible={false} />
      </CheckoutContainer>
    </CheckoutContext.Provider>
  )
}

export default Checkout
