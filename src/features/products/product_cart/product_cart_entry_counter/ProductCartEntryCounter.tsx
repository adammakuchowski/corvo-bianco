import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import IconButton from '@/components/buttons/icon_button/IconButton'
import {ProductCart} from '@/types/types'
import {ProductCartEntryCounterContainer, ProductQuantityWrapper} from './ProductCartEntryCounterStyled'
import {updateQuantityProductCart} from '../../productsSlice'

const fontSize = '15px'

interface ProductCartEntryCounterProps {
  productCart: ProductCart
}

const ProductCartEntryCounter = ({productCart}: ProductCartEntryCounterProps): JSX.Element => {
  const [isDecrementButtonDisabled, setIsDecrementButtonDisabled] = useState<boolean>(false)
  const dispatch = useDispatch()

  const {product: {id}, quantity} = productCart

  useEffect(() => {
    setIsDecrementButtonDisabled(quantity === 1)
  }, [quantity])

  const incrementQuantityProduct = () => {
    dispatch(updateQuantityProductCart({id, actionOperator: 'increment', value: 1}))
  }

  const decrementQuantityProduct = () => {
    if (isDecrementButtonDisabled) return
    
    dispatch(updateQuantityProductCart({id, actionOperator: 'decrement', value: 1}))
  }

  return (
    <ProductCartEntryCounterContainer>
      <IconButton
        iconComponent={<AiOutlineMinus />}
        fontSize={fontSize}
        iconAction={decrementQuantityProduct}
        disabled={isDecrementButtonDisabled}
      />
      <ProductQuantityWrapper>
        {quantity}
      </ProductQuantityWrapper>
      <IconButton
        iconComponent={<AiOutlinePlus />}
        fontSize={fontSize}
        iconAction={incrementQuantityProduct}
      />
    </ProductCartEntryCounterContainer>
  )
}

export default ProductCartEntryCounter
