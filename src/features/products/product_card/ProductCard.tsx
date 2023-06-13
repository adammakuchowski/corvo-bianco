import {useEffect, useState} from 'react'
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
  index: number;
  product: Product;
  setActiceCardIndex: (value: number) => void;
  activeCard: boolean;
}

const ProductCard = ({index, product, setActiceCardIndex, activeCard = false}: ProductCardProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(activeCard)
  const {img} = product

  useEffect(() => {
    setIsActive(activeCard)
  }, [activeCard])

  const onCardActive = () => {
    setIsActive(!isActive)
    if (!isActive) {
      setActiceCardIndex(index)
    }
  }

  return (
    <ProductCardContainer>
      <ImgContainer onClick={onCardActive} active={isActive}>
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
        <ProductCardAction
          active={isActive}
          product={product}
        />
      </ProductCardActionWrapper>
    </ProductCardContainer>
  )
}

export default ProductCard
