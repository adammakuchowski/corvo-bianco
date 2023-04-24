import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {cinzel, merriweather} from '@/pages'
import Navigation from '@/components/Navigation/Navigation'
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

const manuOptions = ['Homepage', 'Products', 'Manu', 'Events', 'Blog', 'Contact']

export const Navbar = () => {
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
          <BsPersonCircle style={{cursor: 'pointer'}} />
          <AiOutlineSearch style={{cursor: 'pointer'}} />
          <CartWrapper>
            <AiOutlineShoppingCart />
            {true && (
              <CartCounter>2</CartCounter>
            )}
          </CartWrapper>
        </ActionsWrapper>
      </OptionsContainer>
      <Navigation options={manuOptions}/>
    </NavbarContainer>
  )
}
