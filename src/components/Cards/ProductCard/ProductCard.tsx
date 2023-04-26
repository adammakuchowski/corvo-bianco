import Image from 'next/image'
import {Product} from '@/types/types'
import {
  ImgContainer,
  ImgWrapper,
  ProductCardActionWrapper,
  ProductCardContainer,
} from './ProductCardStyled'
import {useState} from 'react';
import ProductCardAction from './ProductCardAction/ProductCardAction';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  const [active, isActive] = useState<boolean>(false)
  const {img} = product

  return (
    <ProductCardContainer>
      <ImgContainer onClick={() => isActive(!active)}>
        <ImgWrapper>
          <Image
            src={img}
            alt=''
            height={350}
            width={118}
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
