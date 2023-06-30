import {SyntheticEvent, useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {BsTrash} from 'react-icons/bs'
import IconButton from '@/components/common/buttons/icon_button/IconButton'
import TextButton from '@/components/common/buttons/text_button/TextButton'
import {ProductCart} from '@/types/types'
import {
  HeaderContainer,
  ProductCartContainer,
  ProductCartOverlayContainer,
  ProductCartContentContainer,
  CartButtonsContainer,
  CartButtonsWrapper,
  ProductCartSummaryContainer,
  ProductCartWrapper,
  ProductCartTotalWrapper,
  ProductCartButtonWrapper
} from './ProductCartStyled'
import {clearCart, getProductsCart} from '../productsSlice'
import ProductCartEntry from './product_cart_entry/ProductCartEntry'

interface ProductCartProps {
  cartIsOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
}

const ProductCart = ({cartIsOpen, setCartIsOpen}: ProductCartProps): JSX.Element | null => {
  const router = useRouter()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isTrashDisabled, setIsTrashDisabled] = useState<boolean>(false)
  const [cartTotal, setCartTotal] = useState<number>(0)
  const productsCart = useSelector(getProductsCart)
  const dispatch = useDispatch()

  const toCheckout = () => {
    router.push('/checkout')
  }

  const getTotalCartPrice = useCallback((): number => (
    productsCart.reduce((total: number, amount: ProductCart): number => {
      const {product: {price}, quantity} = amount
      const totalPrice = price * quantity

      return total + totalPrice
    }, 0)
  ), [productsCart])

  useEffect(() => {
    productsCart.length ? setIsTrashDisabled(false) : setIsTrashDisabled(true)

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
  }, [cartIsOpen, getTotalCartPrice, productsCart])

  const onCloseModal = () => setCartIsOpen(false)
  const onClearCart = () => dispatch(clearCart())

  const onStopPropagation = (event: SyntheticEvent) => event.stopPropagation()

  if (!cartIsOpen) return null

  return (
    <ProductCartOverlayContainer className={isActive ? 'active' : ''} onClick={onCloseModal} >
      <ProductCartContainer className={isActive ? 'active' : ''} onClick={onStopPropagation}>
        <ProductCartWrapper>
          <HeaderContainer>
            <CartButtonsContainer>
              <CartButtonsWrapper>
                <IconButton iconComponent={<BsTrash />} iconAction={onClearCart} fontSize='20px' disabled={isTrashDisabled} />
                <IconButton iconComponent={<IoCloseCircleOutline />} iconAction={onCloseModal} fontSize='25px' />
              </CartButtonsWrapper>
            </CartButtonsContainer>
          </HeaderContainer>
          <ProductCartContentContainer>
            {productsCart.map((product, index) => (
              <ProductCartEntry key={index} productCart={product} />
            ))}
          </ProductCartContentContainer>
        </ProductCartWrapper>

        <ProductCartSummaryContainer>
          <ProductCartTotalWrapper>
            <span>cart total:</span>
            <b>{`${cartTotal.toFixed(2)} $`}</b>
          </ProductCartTotalWrapper>
          <ProductCartButtonWrapper>
            <TextButton content='checkout' upperCase={false} disabled={!productsCart.length} buttonAction={toCheckout} />
          </ProductCartButtonWrapper>
        </ProductCartSummaryContainer>
      </ProductCartContainer>
    </ProductCartOverlayContainer>
  )
}

export default ProductCart
