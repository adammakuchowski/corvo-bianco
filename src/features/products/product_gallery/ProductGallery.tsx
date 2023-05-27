import {useEffect, useState} from 'react'
import {NavigationOptions, Product} from '@/types/types'
import Navigation from '@/components/navigation/Navigation'
import SectionHeader from '@/components/section_header/SectionHeader'
import Button from '@/components/buttons/button/Button'
import ProductsList from '../products_list/ProductsList'
import {
  ProductGalleryContainer,
  ProductGalleryContentWrapper,
  ProductsListContainer,
} from './ProductsStyled'
import {useSelector} from 'react-redux'
import {getAllProducts} from '../productsSlice'

const productGalleryManuOptions: NavigationOptions[] = [
  {name: 'Roes'},
  {name: 'Organic'},
  {name: 'Kosher'},
  {name: 'Champagne'},
  {name: 'Other'},
]

interface ProductsListStatus {
  viewAll: boolean;
  text: string;
}

const ProductsListStatuses: ProductsListStatus[] = [
  {
    viewAll: false,
    text: 'View all'
  },
  {
    viewAll: true,
    text: 'View less'
  }
]

const ProductGallery = (): JSX.Element => {
  const [productGalleryPage, setProductGalleryPage] = useState<number>(1)
  const [ProductsListStatus, setProductsListStatus] = useState<ProductsListStatus>(ProductsListStatuses[0])
  const [currentProductsCount, setCurrentProductsCount] = useState<number>(0)
  const [isActive, setIsActive] = useState(false)
  
  const products = useSelector(getAllProducts)

  useEffect(() => {
    setIsActive(true)
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setCurrentProductsCount(products.length)
    }
  }, [products])


  const ProductsListEvent = () => ProductsListStatus.viewAll ?
    setProductsListStatus(ProductsListStatuses[0]) :
    setProductsListStatus(ProductsListStatuses[1])

  return (
    <section className='product_gallery'>
      <ProductGalleryContainer className={isActive ? 'active' : ''}>
        <SectionHeader title='Vineyard' text='FEATURED WINES' />
        <ProductGalleryContentWrapper style={{minHeight: '250px'}}>
          <Navigation
            fontSize='18px'
            options={productGalleryManuOptions}
            activePage={productGalleryPage}
            setActivePage={setProductGalleryPage}
          />
          <ProductsListContainer viewAll={ProductsListStatus.viewAll} productsCount={currentProductsCount}>
            <ProductsList products={products} />
            {currentProductsCount > 4 && (
              <Button text={ProductsListStatus.text} buttonAction={ProductsListEvent} />
            )}
          </ProductsListContainer>
        </ProductGalleryContentWrapper>
      </ProductGalleryContainer>
    </section>
  )
}

export default ProductGallery

