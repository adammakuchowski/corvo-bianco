/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'

import {ProductCart as ProductCartInterface} from '@/types/types'
import {merriweather} from '@/fonts/fonts'
import HomeContext from '@/context/HomeContext'
import Navigation from '@/components/common/navigation/Navigation'
import IconButton from '@/components/common/buttons/icon_button/IconButton'
import HeaderName from '@/components/common/header_name/HeaderName'
import ProductCart from '@/features/products/product_cart/ProductCart'
import FavoriteProducts from '@/features/products/favorite_product/FavoriteProducts'
import {getFavoriteProducts, getProductsCart} from '@/features/products/productsSlice'

import {
  NavbarContainer,
  OptionsContainer,
  ActionsWrapper,
  SettingWrapper,
  IconCounterWrapper,
  IconWrapper
} from './NavbarStyled'
import {manuOptions} from './data'

const Navbar = (): JSX.Element => {
  const router = useRouter()
  const [productNavbarPage, setProductNavbarPage] = useState<number>(0)
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const [cartCount, setCartCount] = useState<number>(0)
  const [favoriteIsOpen, setFavoriteIsOpen] = useState<boolean>(false)
  const [favoriteCount, setFavoriteCount] = useState<number>(0)

  const productsCart = useSelector(getProductsCart)
  const favoriteProducts = useSelector(getFavoriteProducts)

  const {className} = useContext(HomeContext)

  const getCartCount = useCallback(() => {
    if (!productsCart?.length) return 0

    return productsCart.reduce((total: number, amount: ProductCartInterface): number => {
      return total + amount.quantity
    }, 0)
  }, [productsCart])

  useEffect(() => {
    setCartCount(getCartCount())
    setFavoriteCount(favoriteProducts.length)
  }, [getCartCount, favoriteProducts])

  const openCart = (): void => { setCartIsOpen(true) }
  // const toRouting = async (path: string): Promise<boolean> => await router.push(`/${path}`)

  const openFavorite = (): void => { setFavoriteIsOpen(true) }

  return (
    <section className='start'>
      <NavbarContainer className={`${merriweather.className} ${className}`}>
        <OptionsContainer>
          <SettingWrapper>
            {/* <IconButton iconComponent={<AiOutlineSetting />} /> */}
          </SettingWrapper>
          <HeaderName />
          <ActionsWrapper>
            {/* <IconButton iconComponent={<BsPersonCircle />} /> */}
            {/* <IconButton iconComponent={<AiOutlineSearch />} />
            <IconButton iconComponent={<BiMessageRoundedError />} iconAction={() => toRouting('contact')}/> */}
            <IconWrapper>
              <IconButton iconComponent={<FiHeart />} iconAction={openFavorite} />
              {!!favoriteCount && (
                <IconCounterWrapper>{favoriteCount}</IconCounterWrapper>
              )}
            </IconWrapper>
            <IconWrapper>
              <IconButton iconComponent={<AiOutlineShoppingCart />} iconAction={openCart} />
              {!!cartCount && (
                <IconCounterWrapper>{cartCount}</IconCounterWrapper>
              )}
            </IconWrapper>
          </ActionsWrapper>
        </OptionsContainer>
        <Navigation
          options={manuOptions}
          setActivePage={setProductNavbarPage}
        />
      </NavbarContainer>
      <ProductCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      <FavoriteProducts favoriteIsOpen={favoriteIsOpen} setFavoriteIsOpen={setFavoriteIsOpen} />
    </section>
  )
}

export default Navbar
