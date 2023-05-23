import {
  ProductCartContainer,
  ProductCartOverlayContainer,
} from './productCartStyled'

interface ProductCartProps {

}

const ProductCart = ({}: ProductCartProps): JSX.Element | null => {
  const isOpen = false

  if (!isOpen) return null

  return (
    <ProductCartOverlayContainer>
      <ProductCartContainer>
        
      </ProductCartContainer>
    </ProductCartOverlayContainer>
  )
}

export default ProductCart
