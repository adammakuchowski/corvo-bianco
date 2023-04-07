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
  MenuContainer,
} from './NavbarStyled'
import {cinzel, merriweather} from '@/pages'



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



      <MenuContainer>
      
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

      </MenuContainer>

    </NavbarContainer>
  )
}
