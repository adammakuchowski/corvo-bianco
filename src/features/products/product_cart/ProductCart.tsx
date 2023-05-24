import {SyntheticEvent, useEffect, useState} from 'react'
import {
  ProductCartContainer,
  ProductCartOverlayContainer,
} from './ProductCartStyled'

interface ProductCartProps {

}

const ProductCart = ({}: ProductCartProps): JSX.Element | null => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const [isOpen, setIsOpen] = useState<boolean>(true)
  // const isOpen = true

  useEffect(() => {
    if (isOpen) {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      setIsActive(false)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const onCloseModal = () => setIsOpen(false)

  const onStopPropagation = (event: SyntheticEvent) => event.stopPropagation()
  
  if (!isOpen) return null

  return (
    <ProductCartOverlayContainer onClick={onCloseModal}>
      <ProductCartContainer onClick={onStopPropagation}>
        
      </ProductCartContainer>
    </ProductCartOverlayContainer>
  )
}

export default ProductCart
