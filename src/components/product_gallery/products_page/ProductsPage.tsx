import {Product} from '@/types/types'
import ProductCard from '@/components/cards/product_card/ProductCard'
import {ProductsPageContainer} from './ProductsPageStyled'

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage = ({products}: ProductsPageProps): JSX.Element => {
  return (
    <ProductsPageContainer>
      {products.map((product, index) => (
        <ProductCard key={index} product={product}/>
      ))}
    </ProductsPageContainer>
  )
}

export default ProductsPage
