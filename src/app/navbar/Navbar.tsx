import {useCallback, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {NavigationOptions, ProductCart as ProductCartInterface} from '@/types/types'
import {merriweather, cinzel} from '@/fonts/fonts'
import Navigation from '@/components/navigation/Navigation'
import IconButton from '@/components/buttons/icon_button/IconButton'
import ProductCart from '@/features/products/product_cart/ProductCart'
import {
  NavbarContainer,
  NameContainer,
  NameWrapper,
  OptionsContainer,
  ActionsWrapper,
  SettingWrapper,
  CartCounter,
  CartWrapper,
} from './NavbarStyled'
import {AppState} from '../store'

const manuOptions: NavigationOptions[] = [
  {
    name: 'About',
    sectionName: 'about'
  },
  {
    name: 'Products',
    sectionName: 'product_gallery'
  },
  {
    name: 'Events',
    sectionName: 'events'
  },
  {
    name: 'Blog',
    sectionName: 'blog'
  },
  {
    name: 'Contact',
    sectionName: 'contact'
  },
]

const Navbar = () => {
  const [productNavbarPage, setProductNavbarPage] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const [cartCount, setCartCount] = useState<number>(0)

  const productsCart = useSelector((state: AppState) => state.products.productsCart)

  useEffect(() => {
    setIsActive(true)
  }, [])

  const getCartCount = useCallback(() => {
    if (!productsCart || !productsCart.length) return 0

    return productsCart.reduce((total: number, amount: ProductCartInterface): number => total += amount.quantity, 0)
  }, [productsCart])
  
  useEffect(() => {
    setCartCount(getCartCount())
  }, [getCartCount])

  const openCart = () => setCartIsOpen(true)

  return (
    <section className='start'>
      <NavbarContainer className={`${merriweather.className} ${isActive ? 'active' : ''}`}>
        <OptionsContainer>
          <SettingWrapper>
            <IconButton iconComponent={<AiOutlineSetting />} />
          </SettingWrapper>
          <NameContainer className={cinzel.className}>
            <NameWrapper>Corvo Bianco</NameWrapper>
          </NameContainer>
          <ActionsWrapper>
            <IconButton iconComponent={<BsPersonCircle />} />
            <IconButton iconComponent={<AiOutlineSearch />} />
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
          // activePage={productNavbarPage}
          setActivePage={setProductNavbarPage}
        />
      </NavbarContainer>
      <ProductCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </section>
  )
}

export default Navbar
