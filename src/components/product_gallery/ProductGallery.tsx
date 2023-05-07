import {useEffect, useState} from 'react'
import {Product} from '@/types/types'
import Navigation from '../navigation/Navigation'
import Button from '../buttons/button/Button'
import SectionHeader from '../section_header/SectionHeader'
import ProductsPage from './products_page/ProductsPage'
import {
  ProductGalleryContainer,
  ProductGalleryContentWrapper,
  ProductsPageContainer,
} from './ProductsStyled'

const productGalleryManuOptions = ['Roes', 'Organic', 'Kosher', 'Champagne', 'Other']

const products: Product[] = [
  {
    name: 'Moscato',
    brand: 'Marchesi Antinori',
    quality: 3,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 278.00,
  },
  {
    name: 'Cabernet Sauvignon',
    brand: 'Marchesi Antinori',
    quality: 4,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 120.20,
  },
  {
    name: 'Airén',
    brand: 'Marchesi Antinori',
    quality: 2,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 572.00,
  },
  {
    name: 'Chardonnay',
    brand: 'Marchesi Antinori',
    quality: 5,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 356.00,
  },
  {
    name: 'Syrah',
    brand: 'Marchesi Antinori',
    quality: 1,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 99.99,
  },
  {
    name: 'Garnacha',
    brand: 'Marchesi Antinori',
    quality: 3,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 278.00,
  },
  {
    name: 'Airén',
    brand: 'Marchesi Antinori',
    quality: 2,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 572.00,
  },
  {
    name: 'Chardonnay',
    brand: 'Marchesi Antinori',
    quality: 5,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 356.00,
  },
  {
    name: 'Syrah',
    brand: 'Marchesi Antinori',
    quality: 1,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 99.99,
  },
  {
    name: 'Garnacha',
    brand: 'Marchesi Antinori',
    quality: 3,
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
    price: 278.00,
  }
]

interface ProductsPageStatus {
  viewAll: boolean;
  text: string;
}

const productsPageStatuses: ProductsPageStatus[] = [
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
  const [productsPageStatus, setProductsPageStatus] = useState<ProductsPageStatus>(productsPageStatuses[0])
  const [currentProductsCount, setCurrentProductsCount] = useState<number>(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setCurrentProductsCount(products.length)
    }
  }, [products])


  const productsPageEvent = () => productsPageStatus.viewAll ?
    setProductsPageStatus(productsPageStatuses[0]) :
    setProductsPageStatus(productsPageStatuses[1])

  return (
    <ProductGalleryContainer className={isActive ? 'active' : ''}>
      <SectionHeader title='Vineyard' text='FEATURED WINES' />
      <ProductGalleryContentWrapper style={{minHeight: '250px'}}>
        <Navigation
          fontSize='20px'
          options={productGalleryManuOptions}
          activePage={productGalleryPage}
          setActivePage={setProductGalleryPage}
        />
        <ProductsPageContainer viewAll={productsPageStatus.viewAll} productsCount={currentProductsCount}>
          <ProductsPage products={products} />
          {currentProductsCount > 4 && (
            <Button content={productsPageStatus.text} buttonEvent={productsPageEvent} />
          )}
        </ProductsPageContainer>
      </ProductGalleryContentWrapper>
    </ProductGalleryContainer>
  )
}

export default ProductGallery

