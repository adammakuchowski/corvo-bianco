import {SyntheticEvent, useEffect, useState} from 'react'
import {
  ProductCartContainer,
  ProductCartOverlayContainer,
} from './ProductCartStyled'

interface ProductCartProps {
  cartIsOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
}

const ProductCart = ({cartIsOpen, setCartIsOpen}: ProductCartProps): JSX.Element | null => {
  const [isActive, setIsActive] = useState<boolean>(false)

  // const isOpen = true

  useEffect(() => {
    if (cartIsOpen) {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      setIsActive(false)
      document.body.style.overflow = 'auto'
    }
  }, [cartIsOpen])

  const onCloseModal = () => setCartIsOpen(false)

  const onStopPropagation = (event: SyntheticEvent) => event.stopPropagation()
  
  if (!cartIsOpen) return null

  return (
    <ProductCartOverlayContainer className={isActive ? 'active' : ''} onClick={onCloseModal} >
      <ProductCartContainer className={isActive ? 'active' : ''} onClick={onStopPropagation}>
        
      </ProductCartContainer>
    </ProductCartOverlayContainer>
  )
}

export default ProductCart
