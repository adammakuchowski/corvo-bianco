import {useEffect, useState} from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {NavigationOptions} from '@/types/types'
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

  useEffect(() => {
    setIsActive(true)
  }, []);

  return (
    <section className='start'>
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
    </section>
  )
}

export default Navbar
