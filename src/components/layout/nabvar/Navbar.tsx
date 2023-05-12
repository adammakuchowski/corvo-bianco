import {useEffect, useState} from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {cinzel, merriweather} from '@/pages'
import Navigation from '@/components/navigation/Navigation'
import SocialMediaButton from '@/components/buttons/social_media_button/SocialMediaButton'
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

const Navbar = () => {
  const [productNavbarPage, setProductNavbarPage] = useState<number>(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, []);

  return (
    <NavbarContainer className={`${merriweather.className} ${isActive ? 'active' : ''}`}>
      <OptionsContainer>
        <SettingWrapper>
          <SocialMediaButton iconComponent={<AiOutlineSetting />} />
        </SettingWrapper>
        <NameContainer className={cinzel.className}>
          <NameWrapper>Corvo Bianco</NameWrapper>
        </NameContainer>
        <ActionsWrapper>
          <SocialMediaButton iconComponent={<BsPersonCircle />} />
          <SocialMediaButton iconComponent={<AiOutlineSearch />} />
          <CartWrapper>
            <SocialMediaButton iconComponent={<AiOutlineShoppingCart />} />
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

export default Navbar
