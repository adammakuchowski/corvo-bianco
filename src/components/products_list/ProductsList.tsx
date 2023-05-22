import {Product} from '@/types/types'
import ProductCard from '@/components/cards/product_card/ProductCard'
import {ProductsListContainer} from './ProductsListStyled'

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({products}: ProductsListProps): JSX.Element => {
  return (
    <ProductsListContainer>
      {products.map((product, index) => (
        <ProductCard key={index} product={product}/>
      ))}
    </ProductsListContainer>
  )
}

export default ProductsList
