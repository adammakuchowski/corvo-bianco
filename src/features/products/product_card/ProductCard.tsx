import {useState} from 'react'
import Image from 'next/image'
import {Product} from '@/types/types'
import ProductCardAction from './product_card_action/ProductCardAction'
import {
  ImgContainer,
  ImgWrapper,
  ProductCardActionWrapper,
  ProductCardContainer,
} from './ProductCardStyled'

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  const [active, isActive] = useState<boolean>(false)
  const {img} = product

  return (
    <ProductCardContainer>
      <ImgContainer onClick={() => isActive(!active)} active={active}>
        <ImgWrapper>
          <Image
            src={img}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </ImgWrapper>
      </ImgContainer>
      <ProductCardActionWrapper>
        <ProductCardAction active={active} product={product}/>
      </ProductCardActionWrapper>
    </ProductCardContainer>
  )
}

export default ProductCard
