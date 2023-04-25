import {Product} from '@/types/types'
import {ProductsPageContainer} from './ProductsPageStyled'

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage = ({products}: ProductsPageProps): JSX.Element => {
  return (
    <ProductsPageContainer>
      
    </ProductsPageContainer>
  )
}

export default ProductsPage
