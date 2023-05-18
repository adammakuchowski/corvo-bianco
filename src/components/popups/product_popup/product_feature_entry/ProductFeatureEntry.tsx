import {ProductFeatureEntryContainer} from './ProductFeatureEntryStyled'

interface ProductFeatureEntryProps {
  value: any;
}

const ProductFeatureEntry = ({value}: ProductFeatureEntryProps): JSX.Element => {
  return (
    <ProductFeatureEntryContainer>
      {value}
    </ProductFeatureEntryContainer>
  )
}

export default ProductFeatureEntry
