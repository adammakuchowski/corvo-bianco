import {SyntheticEvent, useEffect, useState} from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import IconButton from '@/components/buttons/icon_button/IconButton'
import {ProductCart, Product} from '@/types/types'
import {
  CloseButtonContainer,
  HeaderContainer,
  HeaderContentWrapper,
  ProductCartContainer,
  ProductCartOverlayContainer,
  CloseButtonWrapper
} from './ProductCartStyled'
import {useSelector} from 'react-redux'
import {getproductsCart} from '../productsSlice'

interface ProductCartProps {
  cartIsOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
}

const ProductCart = ({cartIsOpen, setCartIsOpen}: ProductCartProps): JSX.Element | null => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [cartTotal, setCartTotal] = useState<number>(0)

  const productsCart = useSelector(getproductsCart)

  const getTotalCartPrice = (): number => (
    productsCart.reduce((total: number, amount: ProductCart): number => {
      const {product: {price}, quantity} = amount
      const totalPrice = price * quantity

      return total + totalPrice
    }, 0)
  )

  useEffect(() => {
    if (cartIsOpen) {
      setIsActive(true)
      document.body.style.overflow = 'hidden'

      const totalCartPrice = getTotalCartPrice()
      setCartTotal(totalCartPrice)
    }

    return () => {
      setIsActive(false)
      document.body.style.overflow = 'auto'
    }
  }, [cartIsOpen])

  const onCloseModal = () => setCartIsOpen(false)

  const onStopPropagation = (event: SyntheticEvent) => event.stopPropagation()

  if (!cartIsOpen) return null

  return (
    <ProductCartOverlayContainer className={isActive ? 'active' : ''} onClick={onCloseModal} >
      <ProductCartContainer className={isActive ? 'active' : ''} onClick={onStopPropagation}>
        <HeaderContainer>
          <CloseButtonContainer>
            <CloseButtonWrapper>
              <IconButton iconComponent={<IoCloseCircleOutline />} iconAction={onCloseModal} fontSize = '25px'/>
            </CloseButtonWrapper>
          </CloseButtonContainer>
          <HeaderContentWrapper>
            
          </HeaderContentWrapper>
        </HeaderContainer>

      </ProductCartContainer>
    </ProductCartOverlayContainer>
  )
}

export default ProductCart

// {`${cartTotal.toFixed(2)} $`}
