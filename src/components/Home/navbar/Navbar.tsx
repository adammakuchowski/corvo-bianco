import {useCallback, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BiMessageRoundedError} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {ProductCart as ProductCartInterface} from '@/types/types'
import {merriweather} from '@/fonts/fonts'
import Navigation from '@/components/common/navigation/Navigation'
import IconButton from '@/components/common/buttons/icon_button/IconButton'
import HeaderName from '@/components/common/header_name/HeaderName'
import ProductCart from '@/features/products/product_cart/ProductCart'
import {
  NavbarContainer,
  OptionsContainer,
  ActionsWrapper,
  SettingWrapper,
  CartCounter,
  CartWrapper,
} from './NavbarStyled'
import {AppState} from '../../../app/store'
import {manuOptions} from './data'

const Navbar = (): JSX.Element => {
  const router = useRouter()
  const [productNavbarPage, setProductNavbarPage] = useState<number>(0)
  const [className, setClassName] = useState<string>('')
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const [cartCount, setCartCount] = useState<number>(0)

  const productsCart = useSelector((state: AppState) => state.products.productsCart)

  useEffect(() => {
    setClassName('active')
  }, [])
  
  const getCartCount = useCallback(() => {
    if (!productsCart || !productsCart.length) return 0

    return productsCart.reduce((total: number, amount: ProductCartInterface): number => total += amount.quantity, 0)
  }, [productsCart])

  useEffect(() => {
    setCartCount(getCartCount())
  }, [getCartCount])

  const openCart = () => setCartIsOpen(true)
  const toRouting = (path: string) => router.push(`/${path}`)
 
  return (
    <section className='start'>
      <NavbarContainer className={`${merriweather.className} ${className}`}>
        <OptionsContainer>
          <SettingWrapper>
            <IconButton iconComponent={<AiOutlineSetting />} />
          </SettingWrapper>
          <HeaderName />
          <ActionsWrapper>
            {/* <IconButton iconComponent={<BsPersonCircle />} /> */}
            <IconButton iconComponent={<AiOutlineSearch />} />
            <IconButton iconComponent={<BiMessageRoundedError />} iconAction={() => toRouting('contact')}/>
            <IconButton iconComponent={<FiHeart />} />
            <CartWrapper>
              <IconButton iconComponent={<AiOutlineShoppingCart />} iconAction={openCart} />
              {!!cartCount && (
                <CartCounter>{cartCount}</CartCounter>
              )}
            </CartWrapper>
          </ActionsWrapper>
        </OptionsContainer>
        <Navigation
          options={manuOptions}
          setActivePage={setProductNavbarPage}
        />
      </NavbarContainer>
      <ProductCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </section>
  )
}

export default Navbar
