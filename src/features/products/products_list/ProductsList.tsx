import {useState} from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import AlertContext, {AlertContextValue} from '@/context/AlertContext'
import {Product} from '@/types/types'
import Alert from '@/components/alert/Alert'
import ProductCard from '../product_card/ProductCard'
import {ProductsListContainer} from './ProductsListStyled'

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({products}: ProductsListProps): JSX.Element => {
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false)

  const alertContextValue: AlertContextValue = {
    isAlertActive: isAlertActive,
    setAlertActive: (value: boolean) => setIsAlertActive(value),
  }

  return (
    <AlertContext.Provider value={alertContextValue}>
      <ProductsListContainer>
          <Alert iconComponent={<BsFillCartCheckFill />} />
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
