import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import IconButton from '@/components/buttons/icon_button/IconButton'
import {ProductCart} from '@/types/types'
import {ProductCartEntryCounterContainer, ProductQuantityWrapper} from './ProductCartEntryCounterStyled'
import {updateQuantityProductCart} from '../../productsSlice'

const fontSize = '15px'

interface ProductCartEntryCounterProps {
  productCart: ProductCart
}

const ProductCartEntryCounter = ({productCart}: ProductCartEntryCounterProps): JSX.Element => {
  const dispatch = useDispatch()

  const {product: {id}, quantity} = productCart

  const incrementQuantityProduct = () => {
    dispatch(updateQuantityProductCart({id, actionOperator: 'increment'}))
  }

  const decrementQuantityProduct = () => {
    if (quantity > 1) {
      dispatch(updateQuantityProductCart({id, actionOperator: 'decrement'}))
    }
  }

  return (
    <ProductCartEntryCounterContainer>
      <IconButton iconComponent={<AiOutlineMinus />} fontSize={fontSize} iconAction={decrementQuantityProduct} />
      <ProductQuantityWrapper>
        {quantity}
      </ProductQuantityWrapper>
      <IconButton iconComponent={<AiOutlinePlus />} fontSize={fontSize} iconAction={incrementQuantityProduct} />
    </ProductCartEntryCounterContainer>
  )
}

export default ProductCartEntryCounter
