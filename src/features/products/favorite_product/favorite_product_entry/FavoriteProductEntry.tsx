import {useEffect, useState} from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {BsCheckCircle, BsTrash} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Product} from '@/types/types'
import {cinzel} from '@/fonts/fonts'
import IconButton from '@/components/common/buttons/icon_button/IconButton'
import {
  FavoriteProductEntryContainer,
  ContentBodyContainer,
  ContentContainer,
  ContentHeaderContainer,
  HeaderButtonWrapper,
  ImgContainer,
  ImgWrapper,
  ProductNameWrapper,
  ProductPriceWrapper,
  IconWrapper
} from './FavoriteProductEntryStyled'
import {
  addToCart,
  getProductsCart,
  removeFavoriteProduct
} from '../../productsSlice'

interface ProductCartEntryProps {
  favoriteProduct: Product;
}

const FavoriteProductEntry = ({favoriteProduct}: ProductCartEntryProps): JSX.Element => {
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false)
  const dispatch = useDispatch()
  const productsCart = useSelector(getProductsCart)

  const {id, img, name, price} = favoriteProduct

  const onRemoveFavoriteProduct = (): void => {
    dispatch(removeFavoriteProduct({id}))
  }

  const onAddToCart = (): void => {
    dispatch(addToCart(favoriteProduct, 1))
  }

  useEffect(() => {
    if (productsCart.some(productCart => productCart.product.id === favoriteProduct.id)) {
      setIsProductInCart(true)
    }
  }, [favoriteProduct.id, productsCart])

  return (
    <FavoriteProductEntryContainer isProductInCart={isProductInCart}>
      <ImgContainer>
        <ImgWrapper>
          <Image
            src={img}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </ImgWrapper>
      </ImgContainer>
      <ContentContainer>
        <ContentHeaderContainer className={cinzel.className}>
          <ProductNameWrapper>{name}</ProductNameWrapper>
          <HeaderButtonWrapper>
            <IconButton iconComponent={<BsTrash />} iconAction={onRemoveFavoriteProduct} fontSize='20px' />
          </HeaderButtonWrapper>
        </ContentHeaderContainer>
        <ContentBodyContainer>
          <ProductPriceWrapper>{`${price} $`}</ProductPriceWrapper>
          {isProductInCart
            ? (
            <IconWrapper style={{color: '#8ea648'}}>
              <BsCheckCircle />
            </IconWrapper>
              )
            : (
            <IconButton iconComponent={<AiOutlineShoppingCart />} iconAction={onAddToCart} fontSize='20px' />
              )}
        </ContentBodyContainer>
      </ContentContainer>
    </FavoriteProductEntryContainer>
  )
}

export default FavoriteProductEntry
