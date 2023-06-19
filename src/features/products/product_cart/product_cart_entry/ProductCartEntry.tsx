import {useEffect, useMemo} from 'react'
import {useDispatch} from 'react-redux'
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
import {removeProductCart} from '../../productsSlice'

interface ProductCartEntryProps {
  productCart: ProductCart
}

const ProductCartEntry = ({productCart}: ProductCartEntryProps): JSX.Element => {
  const dispatch = useDispatch()
  const {product: {id, img, name, price}, quantity} = productCart

  const totalProductPrice = useMemo(() => (
    (price * quantity).toFixed(2)
  ), [price, quantity])

  const onRemovePorductCard = () => dispatch(removeProductCart({id}))

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
            <IconButton iconComponent={<BsTrash />} iconAction={onRemovePorductCard} fontSize='20px' />
          </HeaderButtonWrapper>
        </ContentHeaderContainer>

        <ContentBodyContainer>
          <ProductPriceWrapper>{`${totalProductPrice} $`}</ProductPriceWrapper>
          <ProductCartEntryCounter productCart={productCart}/>
        </ContentBodyContainer>
      </ContentContainer>

    </ProductCartEntryContainer>
  )
}

export default ProductCartEntry
