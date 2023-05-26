import {useEffect, useState} from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {NavigationOptions} from '@/types/types'
import {cinzel, merriweather} from '@/pages'
import Navigation from '@/components/navigation/Navigation'
import IconButton from '@/components/buttons/icon_button/IconButton'
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
import ProductCart from '@/features/products/product_cart/ProductCart'

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
  const [isActive, setIsActive] = useState(false)
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

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
              {true && (
                <CartCounter>2</CartCounter>
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
      <ProductCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}/>
    </section>
  )
}

export default Navbar
