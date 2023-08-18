import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {cinzel} from '@/fonts/fonts'
import SectionName from '@/components/common/section_name/SectionName'
import Button from '@/components/common/buttons/button/Button'
import ProductCartEntry from '@/features/products/product_cart/product_cart_entry/ProductCartEntry'
import {getProductsCart, getTotalCartPrice} from '@/features/products/productsSlice'
import {
  CheckoutContentsContainer,
  ContentsContainerWrapper,
  ProductCheckoutContentsContainer,
  SummaryContainer,
  SummaryTextWrapper,
} from './CheckoutContentsStyled'

const CheckoutContents = () => {
  const [overflow, setOverflow] = useState('hidden')
  const productsCart = useSelector(getProductsCart)
  const totalCartPrice = useSelector(getTotalCartPrice).toFixed(2)

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
          {`Total Cost Price: ${totalCartPrice} $`}
        </SummaryTextWrapper>
          <Button text='order' disabled={true}/>
      </SummaryContainer>
    </CheckoutContentsContainer>
  )
}

export default CheckoutContents
