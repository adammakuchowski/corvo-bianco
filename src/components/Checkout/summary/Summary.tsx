import {useContext, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {BsCheckCircle} from 'react-icons/bs'
import {VscError} from 'react-icons/vsc'
import CircularProgress from '@mui/material/CircularProgress'
import {AppState} from '@/app/store'
import {cinzel} from '@/fonts/fonts'
import CheckoutContext from '@/context/CheckoutContext'
import CheckoutForm from '@/features/checkout/checkout_form/CheckoutForm'
import {
  CreateOrderContainer,
  IconWrapper,
  OrderCreatorContainer,
  SummaryContainer,
  SummaryContentContainer,
  ResultOrderTextWrapper,
} from './SummaryStyled'
import CheckoutContents from '../checkout_contents/CheckoutContents'

interface OrderProgressCreatorProps {
  orderCreateStatus: 'loading' | 'succeeded' | 'failed';
}

const OrderCreatorFulfilled = () => {
  return (
    <OrderCreatorContainer>
      <IconWrapper style={{color: '#8ea648'}}>
        <BsCheckCircle />
      </IconWrapper>
      <ResultOrderTextWrapper className={cinzel.className}>
        Thank you for placing your order in our winiari, we will try to make delivery as soon as possible.
      </ResultOrderTextWrapper>
    </OrderCreatorContainer>
  )
}

const OrderCreatorError = () => {
  return (
      <OrderCreatorContainer>
      <IconWrapper style={{color: '#e32323'}}>
          <VscError />
        </IconWrapper>
        <ResultOrderTextWrapper className={cinzel.className}>
          There was a problem while creating your order, please contact support or try again later.
        </ResultOrderTextWrapper>
      </OrderCreatorContainer>
    )
}

const OrderProgressCreator = ({orderCreateStatus}: OrderProgressCreatorProps) => {
  const [orderCratorResultComponent, setOrderCratorResultComponent] = useState<JSX.Element>()

  useEffect(() => {
    const orderCratorResult = orderCreateStatus === 'succeeded' ? OrderCreatorFulfilled : OrderCreatorError
    setOrderCratorResultComponent(orderCratorResult)
  }, [orderCreateStatus])

  return (
    <CreateOrderContainer>
      {(orderCreateStatus !== 'loading') ?
        <>{orderCratorResultComponent}</> :
        <CircularProgress sx={{color: '#8ea648'}} size={50} />
      }
    </CreateOrderContainer>
  )
}

const SummaryContent = () => {
  return (
    <SummaryContentContainer>
      <CheckoutForm />
      <CheckoutContents />
    </SummaryContentContainer>
  )
}

const Summary = () => {
  const {className} = useContext(CheckoutContext)
  const [delayClassName, setDelayClassName] = useState<string>('')
  const orderCreateStatus = useSelector((state: AppState) => state.checkout.orderCreateStatus)

  useEffect(() => {
    setTimeout(() => {
      setDelayClassName(className)
    }, 300)
  }, [className])

  useEffect(() => {
    // TODO: implement resetting of order status and shopping cart status 
  }, [orderCreateStatus])

  return (
    <SummaryContainer className={delayClassName}>
      {orderCreateStatus === 'idle' ?
        <SummaryContent /> :
        <OrderProgressCreator orderCreateStatus={orderCreateStatus} />}
    </SummaryContainer>
  )
}

export default Summary
