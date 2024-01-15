import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import TextButton from '@/components/common/buttons/text_button/TextButton'
import SidePanel from '@/components/common/side_panel/SidePanel'
import {ProductCart as IProductCart} from '@/types/types'
import {
  ProductCartContentContainer,
  ProductCartSummaryContainer,
  ProductCartWrapper,
  ProductCartTotalWrapper,
  ProductCartButtonWrapper,
  ProductCartContainer
} from './ProductCartStyled'
import {
  clearCart,
  getProductsCart,
  getTotalCartPrice,
  updateProductsCart
} from '../productsSlice'
import ProductCartEntry from './product_cart_entry/ProductCartEntry'

interface ProductCartProps {
  cartIsOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
}

const ProductCart = ({cartIsOpen, setCartIsOpen}: ProductCartProps): JSX.Element | null => {
  const router = useRouter()
  const [isTrashDisabled, setIsTrashDisabled] = useState<boolean>(false)
  const [cartTotal, setCartTotal] = useState<number>(0)
  const productsCart = useSelector(getProductsCart)
  const totalCartPrice = useSelector(getTotalCartPrice)

  const dispatch = useDispatch()

  const toCheckout = (): void => {
    router.push('/checkout')
  }

  useEffect(() => {
    productsCart.length ? setIsTrashDisabled(false) : setIsTrashDisabled(true)

    if (cartIsOpen) {
      setCartTotal(totalCartPrice)
    }
  }, [cartIsOpen, productsCart, totalCartPrice])

  useEffect(() => {
    const localStorageProductsCart = localStorage.getItem('productsCart')
    const storageProductsCart: IProductCart[] = localStorageProductsCart ? JSON.parse(localStorageProductsCart) : []

    dispatch(updateProductsCart(storageProductsCart))
  }, [dispatch])

  useEffect(() => {
    if (productsCart?.length) {
      localStorage.setItem('productsCart', JSON.stringify(productsCart))
    }
  }, [productsCart])

  const onCloseModal = (): void => { setCartIsOpen(false) }
  const onClearCart = (): void => {
    dispatch(clearCart())
    localStorage.setItem('productsCart', JSON.stringify([]))
  }

  if (!cartIsOpen) return null

  return (
    <SidePanel
      sidePanelIsOpen={cartIsOpen}
      setIsSidePanelOpen={setCartIsOpen}
      onClear={onClearCart}
      isTrashDisabled={isTrashDisabled}
      onCloseModal={onCloseModal}
      headerName='CART'
    >
      <ProductCartContainer>
        <ProductCartWrapper>
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
    </SidePanel>
  )
}

export default ProductCart
