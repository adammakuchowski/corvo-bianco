import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import IconButton from '@/components/buttons/icon_button/IconButton'
import {ProductCartEntryCounterContainer, ProductQuantityWrapper} from './ProductCartEntryCounterStyled'

const fontSize = '15px'

const ProductCartEntryCounter = (): JSX.Element => {
  return (
    <ProductCartEntryCounterContainer>
      <IconButton iconComponent={<AiOutlineMinus/>} fontSize={fontSize}/>
      <ProductQuantityWrapper>
        TEST
      </ProductQuantityWrapper>
      <IconButton iconComponent={<AiOutlinePlus/>} fontSize={fontSize}/>
    </ProductCartEntryCounterContainer>
  )
}

export default ProductCartEntryCounter
