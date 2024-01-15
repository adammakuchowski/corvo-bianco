import {useEffect, useState} from 'react'
import AlertContext, {AlertContextValue} from '@/context/AlertContext'
import {Product} from '@/types/types'
import Alert from '@/components/common/alert/Alert'
import ProductCard from '../product_card/ProductCard'
import {ProductsListContainer} from './ProductsListStyled'

interface ProductsListProps {
  products: Product[];
  productGalleryPage?: number;
}

const ProductsList = ({products, productGalleryPage}: ProductsListProps): JSX.Element => {
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false)
  const [alertIcon, setAlertIcon] = useState<any>()
  const [alertOverflow, setAlertOverflow] = useState<string>('auto')
  const [acticeCardIndex, setActiceCardIndex] = useState<number | null>(null)

  useEffect(() => {
    setActiceCardIndex(null)
  }, [productGalleryPage])

  useEffect(() => {
    if (isAlertActive) {
      document.body.style.overflow = alertOverflow
    }

    return () => {
      document.body.style.overflow = alertOverflow
    }
  }, [alertOverflow, isAlertActive])

  const alertContextValue: AlertContextValue = {
    isAlertActive,
    setAlertActive: (value: boolean) => { setIsAlertActive(value) },
    alertIcon,
    setAlertIcon: (value: any) => { setAlertIcon(value) },
    alertOverflow,
    setAlertOverflow: (value: string) => { setAlertOverflow(value) }
  }

  return (
    <AlertContext.Provider value={alertContextValue}>
      <ProductsListContainer>
        <Alert iconComponent={alertIcon} />
        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            product={product}
            setActiceCardIndex={setActiceCardIndex}
            activeCard={index === acticeCardIndex}
          />
        ))}
      </ProductsListContainer>
    </AlertContext.Provider>
  )
}

export default ProductsList
