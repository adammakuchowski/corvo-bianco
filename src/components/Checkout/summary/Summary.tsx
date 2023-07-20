import {useContext, useEffect, useState} from 'react'
import CheckoutForm from '@/features/products/checkout/checkout_form/CheckoutForm'
import CheckoutContext from '@/context/CheckoutContext'
import {SummaryContainer} from './SummaryStyled'
import CheckoutContents from '../checkout_contents/CheckoutContents'

const Summary = () => {
  const {className} = useContext(CheckoutContext)
  const [delayClassName, setDelayClassName] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      setDelayClassName(className)
    }, 300)
  }, [className])

  return (
    <SummaryContainer className={delayClassName}>
      <CheckoutForm/>
      <CheckoutContents/>
    </SummaryContainer>
  )
}

export default Summary
