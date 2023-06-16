import {useEffect, useMemo} from 'react'
import Image from 'next/image'
import {BsTrash} from 'react-icons/bs'
import {cinzel} from '@/fonts/fonts'
import {ProductCart} from '@/types/types'
import IconButton from '@/components/buttons/icon_button/IconButton'
import {
  ContentBodyContainer,
  ContentContainer,
  ContentHeaderContainer,
  HeaderButtonWrapper,
  ImgContainer,
  ImgWrapper,
  ProductCartEntryContainer,
  ProductNameWrapper,
  ProductPriceWrapper,
} from './ProductCartEntryStyled'
import ProductCartEntryCounter from '../product_cart_entry_counter/ProductCartEntryCounter'

interface ProductCartEntryProps {
  productCart: ProductCart
}

const ProductCartEntry = ({productCart}: ProductCartEntryProps): JSX.Element => {
  const {product: {img, name, price}, quantity} = productCart

  const totalProductPrice = useMemo(() => (
    (price * quantity).toFixed(2)
  ), [price, quantity])

  return (
    <ProductCartEntryContainer>
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
            <IconButton iconComponent={<BsTrash />} iconAction={() => {}} fontSize='20px' />
          </HeaderButtonWrapper>
        </ContentHeaderContainer>

        <ContentBodyContainer>
          <ProductPriceWrapper>{`${totalProductPrice} $`}</ProductPriceWrapper>
          <ProductCartEntryCounter/>
        </ContentBodyContainer>
      </ContentContainer>

    </ProductCartEntryContainer>
  )
}

export default ProductCartEntry
