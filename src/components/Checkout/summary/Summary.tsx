import {useContext, useEffect, useState} from 'react'
import CheckoutForm from '@/components/common/forms/checkout_form/CheckoutForm'
import CheckoutContext from '@/context/CheckoutContext'
import {SummaryContainer} from './SummaryStyled'

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
    </SummaryContainer>
  )
}

export default Summary
