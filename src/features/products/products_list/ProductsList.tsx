import {BsFillCartCheckFill} from 'react-icons/bs'
import {Product} from '@/types/types'
import Alert from '@/components/alert/Alert'
import ProductCard from '../product_card/ProductCard'
import {ProductsListContainer} from './ProductsListStyled'

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({products}: ProductsListProps): JSX.Element => {
  return (
    <ProductsListContainer>
      <Alert iconComponent={<BsFillCartCheckFill/>}/>
      {products.map((product, index) => (
        <ProductCard key={index} product={product}/>
      ))}
    </ProductsListContainer>
  )
}

export default ProductsList
