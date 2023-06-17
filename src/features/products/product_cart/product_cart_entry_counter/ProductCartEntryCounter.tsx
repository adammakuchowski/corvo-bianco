import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import IconButton from '@/components/buttons/icon_button/IconButton'
import {ProductCart} from '@/types/types'
import {ProductCartEntryCounterContainer, ProductQuantityWrapper} from './ProductCartEntryCounterStyled'
import {incrementQuantityProductCart} from '../../productsSlice'

const fontSize = '15px'

interface ProductCartEntryCounterProps {
  productCart: ProductCart
}

const ProductCartEntryCounter = ({productCart}: ProductCartEntryCounterProps): JSX.Element => {
  const dispatch = useDispatch()

  const {product: {id} ,quantity} = productCart

  const incrementQuantityProduct = () => {
    dispatch(incrementQuantityProductCart(id))
  }

  const decrementQuantityProduct = () => {
    
  }

  return (
    <ProductCartEntryCounterContainer>
      <IconButton iconComponent={<AiOutlineMinus/>} fontSize={fontSize}/>
      <ProductQuantityWrapper>
        {quantity}
      </ProductQuantityWrapper>
      <IconButton iconComponent={<AiOutlinePlus/>} fontSize={fontSize} iconAction={incrementQuantityProduct}/>
    </ProductCartEntryCounterContainer>
  )
}

export default ProductCartEntryCounter
