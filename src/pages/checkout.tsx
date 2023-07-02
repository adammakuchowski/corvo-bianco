import {useState, useEffect} from 'react'
import Header from '@/components/Checkout/header/Header'
import Content from '@/components/Checkout/content/Content'
import Footer from '@/components/shared/footer/Footer'
import {CheckoutContainer} from './styles/checkoutStyled'

const Checkout = (): JSX.Element => {
  // move it to checkout context
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(true)
  }, []);
  
  return (
    <CheckoutContainer>
      <Header isActive={isActive} />
      <Content />
      <Footer upButtonIsVisible={false}/>
    </CheckoutContainer>
  )
}

export default Checkout
