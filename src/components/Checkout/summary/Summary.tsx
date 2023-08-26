import {useContext, useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import CheckoutContext from '@/context/CheckoutContext'
import CheckoutForm from '@/features/checkout/checkout_form/CheckoutForm'
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
      {/* <CircularProgress sx={{color: '#8ea648'}} /> */}
      <CheckoutForm/>
      <CheckoutContents />
    </SummaryContainer>
  )
}

export default Summary
