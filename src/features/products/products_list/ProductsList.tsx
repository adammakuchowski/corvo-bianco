import {useEffect, useState} from 'react'
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
  const [alertIcon, setAlertIcon] = useState<any>()
  const [alertOverflow, setAlertOverflow] = useState<string>('auto')

  useEffect(() => {
    if (isAlertActive) {
      document.body.style.overflow = alertOverflow
    }

    return () => {
      document.body.style.overflow = alertOverflow
    }
  }, [alertOverflow, isAlertActive])


  const alertContextValue: AlertContextValue = {
    isAlertActive: isAlertActive,
    setAlertActive: (value: boolean) => setIsAlertActive(value),
    alertIcon: alertIcon,
    setAlertIcon: (value: any) => setAlertIcon(value),
    alertOverflow: alertOverflow,
    setAlertOverflow: (value: string) => setAlertOverflow(value),
  }

  return (
    <AlertContext.Provider value={alertContextValue}>
      <ProductsListContainer>
        <Alert iconComponent={alertIcon} />
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
