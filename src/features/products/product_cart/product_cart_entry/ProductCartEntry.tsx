import Image from 'next/image'
import {ProductCart} from '@/types/types'
import {
  ContentContainer,
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

      </ContentContainer>

    </ProductCartEntryContainer>
  )
}

export default ProductCartEntry
