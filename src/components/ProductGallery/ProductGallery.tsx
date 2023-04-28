import {ProductGalleryContainer, ProductGalleryContentWrapper, ProductsPageContainer} from './ProductsStyled'
import SectionHeader from '../SectionHeader/SectionHeader'
import {Product} from '@/types/types'
import {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import ProductsPage from './ProductsPage/ProductsPage'

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
  }
]

const ProductGallery = (): JSX.Element => {
  const [productGalleryPage, setProductGalleryPage] = useState<number>(1)

  return (
    <ProductGalleryContainer>
      <SectionHeader title='Vineyard' text='FEATURED WINES' />
      <ProductGalleryContentWrapper style={{minHeight: '250px'}}>
        <Navigation
          fontSize='20px'
          options={productGalleryManuOptions}
          activePage={productGalleryPage}
          setActivePage={setProductGalleryPage}
        />
        <ProductsPageContainer>
          <ProductsPage products={products} />
        </ProductsPageContainer>
      </ProductGalleryContentWrapper>
    </ProductGalleryContainer>
  )
}

export default ProductGallery

