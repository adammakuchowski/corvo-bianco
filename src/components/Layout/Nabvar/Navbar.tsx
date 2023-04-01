import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {Cinzel, Merriweather} from '@next/font/google'
import {
  NavbarContainer,
  NameContainer,
  NameWrapper,
  ListWrapper,
  PagesContainer,
  PageItem,
  OptionsContainer,
  ActionsWrapper,
  SettingWrapper,
  CartCounter,
  CartWrapper,
} from './NavbarStyled'
import {cinzel, merriweather} from '@/pages'



export const Navbar = () => {
  return (
    <NavbarContainer className={merriweather.className}>

      <NameContainer className={cinzel.className}>
        <NameWrapper>Corvo Bianco</NameWrapper>
      </NameContainer>

      <PagesContainer>
        <ListWrapper>
          <PageItem>Homepage</PageItem>
          <PageItem>Products</PageItem>
          <PageItem>Manu</PageItem>
          <PageItem>Events</PageItem>
          <PageItem>Blog</PageItem>
          <PageItem>Contact</PageItem>
        </ListWrapper>
      </PagesContainer>

      <OptionsContainer>
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

        <SettingWrapper>
          <AiOutlineSetting />
        </SettingWrapper>

      </OptionsContainer>

    </NavbarContainer>
  )
}
