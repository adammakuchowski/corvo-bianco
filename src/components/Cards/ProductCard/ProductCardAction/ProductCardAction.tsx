import {BsStarFill} from 'react-icons/bs'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsArrowsFullscreen} from 'react-icons/bs'
import {TiArrowSync} from 'react-icons/ti'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IconComponent, Product} from '@/types/types'
import IconActionButton from '@/components/Buttons/IconActionButton/IconActionButton'
import {cinzel} from '@/pages'
import {
  ProductCardActiveContainer,
  ProductCardNotActiveContainer,
  ProductDataWrapper,
  ProductName,
  ProductQualityStars,
} from './ProductCardActionStyled'

interface ProductCardActionProps {
  product: Product;
  active: boolean;
}

const productQualityStartsRainge = [1, 2, 3, 4, 5]

const ProductCardActions: IconComponent[] = [
  {iconComponent: <BsArrowsFullscreen />},
  {iconComponent: <TiArrowSync />},
  {iconComponent: <IoMdHeartEmpty />},
  {iconComponent: <AiOutlineShoppingCart />},
]

const ProductCardAction = ({active, product}: ProductCardActionProps): JSX.Element => {
  const {name, price, quality} = product

  return active ? (
    <ProductCardActiveContainer className={cinzel.className}>
      {ProductCardActions.map((icon, index) => (
        <IconActionButton key={index} iconComponent={icon.iconComponent} iconAction={icon.iconAction} />
      ))}
    </ProductCardActiveContainer>
  ) : (
    <ProductCardNotActiveContainer className={cinzel.className}>
      <ProductName>{name}</ProductName>
      <ProductDataWrapper>
        <ProductQualityStars>{
          productQualityStartsRainge.map((index) => {
            const color = index > quality ? '#d8d8d8' : '#999999'
            return <BsStarFill key={index} color={color} />
          })}
        </ProductQualityStars>
        <div>{`${price.toFixed(2)} $`}</div>
      </ProductDataWrapper>
    </ProductCardNotActiveContainer>
  )
}

export default ProductCardAction
