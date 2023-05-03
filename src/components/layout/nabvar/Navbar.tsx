import {useState} from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {cinzel, merriweather} from '@/pages'
import Navigation from '@/components/navigation/Navigation'
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

const manuOptions = ['Homepage', 'Products', 'About', 'Events', 'Blog', 'Contact']

export const Navbar = () => {
  const [productNavbarPage, setProductNavbarPage] = useState<number>(0)

  return (
    <NavbarContainer className={merriweather.className}>
      <OptionsContainer>
        <SettingWrapper>
          <AiOutlineSetting />
        </SettingWrapper>
        <NameContainer className={cinzel.className}>
          <NameWrapper>Corvo Bianco</NameWrapper>
        </NameContainer>
        <ActionsWrapper>
          <BsPersonCircle />
          <AiOutlineSearch />
          <CartWrapper>
            <AiOutlineShoppingCart />
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
  )
}
