import {Cinzel} from '@next/font/google'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {NavbarContainer, NameContainer, NameWrapper, ListWrapper, PagesContainer, PageItem, OptionsContainer, ActionsWrapper, SettingWrapper, CartCounter, CartWrapper} from './NavbarStyled'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const Navbar = () => {
  return (
    <NavbarContainer className={cinzel.className}>

      <NameContainer>
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
          <BsPersonCircle style={{cursor: 'pointer'}}/>
          <AiOutlineSearch style={{cursor: 'pointer'}}/>
          <CartWrapper>
            <AiOutlineShoppingCart/>
            {true && (
              <CartCounter>2</CartCounter>
            )} 
          </CartWrapper>
        </ActionsWrapper>

        <SettingWrapper>
         <AiOutlineSetting/>
        </SettingWrapper>

      </OptionsContainer>

    </NavbarContainer>
  )
}
