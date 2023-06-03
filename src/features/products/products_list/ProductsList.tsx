import {useState} from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {Product} from '@/types/types'
import Alert from '@/components/alert/Alert'
import ProductCard from '../product_card/ProductCard'
import {ProductsListContainer} from './ProductsListStyled'
import AlertContext from '@/context/AlertContext'

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({products}: ProductsListProps): JSX.Element => {
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false)
  
  return (
    <AlertContext.Provider value={{
      isAlertActive: isAlertActive,
      setAlertActive: (value: boolean) => setIsAlertActive(value),
    }}>
      <ProductsListContainer>
        <Alert
          iconComponent={<BsFillCartCheckFill />}
        />
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          />
        ))}
      </ProductsListContainer>
    </AlertContext.Provider>
  )
}

export default ProductsList
