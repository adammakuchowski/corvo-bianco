import Image from 'next/image'
import {ProductCart} from '@/types/types'
import {
  ContentBodyContainer,
  ContentContainer,
  ContentHeaderContainer,
  ImgContainer,
  ImgWrapper,
  ProductCartEntryContainer,
} from './ProductCartEntryStyled'

interface ProductCartEntryProps {
  productCart: ProductCart
}

const ProductCartEntry = ({productCart}: ProductCartEntryProps): JSX.Element => {
  const {product: {img}} = productCart

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
        <ContentHeaderContainer>

        </ContentHeaderContainer>

        <ContentBodyContainer>
          
        </ContentBodyContainer>
      </ContentContainer>

    </ProductCartEntryContainer>
  )
}

export default ProductCartEntry
