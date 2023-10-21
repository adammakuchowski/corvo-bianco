import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {AppState} from '@/app/store'
import {cinzel} from '@/fonts/fonts'
import SectionName from '@/components/common/section_name/SectionName'
import Button from '@/components/common/buttons/button/Button'
import ProductCartEntry from '@/features/products/product_cart/product_cart_entry/ProductCartEntry'
import {
  getProductsCart,
  getTotalCartPrice,
  updateProductsCart,
} from '@/features/products/productsSlice'
import {FromState} from '@/features/checkout/types'
import {getCheckoutFromState, createOrder} from '@/features/checkout/checkoutSlice'
import {mapFormOrderToApiFormat} from '@/services/formMappingService'

import {
  CheckoutContentsContainer,
  ContentsContainerWrapper,
  ProductCheckoutContentsContainer,
  SummaryContainer,
  SummaryTextWrapper,
} from './CheckoutContentsStyled'


const CheckoutContents = () => {
  const dispatch = useDispatch()
  const [overflow, setOverflow] = useState('hidden')
  const [orderFinalizeButtonIsActive, setoOrderFinalizeButtonIsActive] = useState<boolean>(true)
  const productsCart = useSelector(getProductsCart)
  const totalCartPrice = Number(useSelector(getTotalCartPrice).toFixed(2))
  const fromState = useSelector(getCheckoutFromState)
  const orderCreateStatus = useSelector((state: AppState) => state.checkout.orderCreateStatus)
  const validateCheckoutForm = (fromState: FromState): boolean => Object.values(fromState).every(value => value.value && !value.error)

  const confirmOrder = () => {
    if (orderCreateStatus === 'idle') {
      const order = mapFormOrderToApiFormat(fromState, productsCart, totalCartPrice)
      dispatch<any>(createOrder(order))
    }
  }

  useEffect(() => {
    setoOrderFinalizeButtonIsActive(!validateCheckoutForm(fromState))
  }, [fromState])

  useEffect(() => {
    const localStorageProductsCart = localStorage.getItem('productsCart')
    const storageProductsCart = localStorageProductsCart ? JSON.parse(localStorageProductsCart) : []

    dispatch(updateProductsCart(storageProductsCart))
  }, [dispatch])

  useEffect(() => {
    if (productsCart.length < 5) {
      setOverflow('hidden')

      return
    }

    setOverflow('scroll')
  }, [productsCart.length])

  return (
    <CheckoutContentsContainer>
      <SectionName text='Your Wines' />
      <ProductCheckoutContentsContainer overflow={overflow}>
        <ContentsContainerWrapper>
          {productsCart.map((product, index) => (
            <ProductCartEntry key={index} productCart={product} />
          ))}
        </ContentsContainerWrapper>
      </ProductCheckoutContentsContainer>
      <SummaryContainer>
        <SummaryTextWrapper className={cinzel.className}>
          {`Total Price: ${totalCartPrice} $`}
        </SummaryTextWrapper>
        <Button text='order' buttonAction={confirmOrder} disabled={orderFinalizeButtonIsActive} />
      </SummaryContainer>
    </CheckoutContentsContainer>
  )
}

export default CheckoutContents
