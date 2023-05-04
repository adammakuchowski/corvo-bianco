import {useState} from 'react'
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
  }
]

interface GalleryProductVisibility {
  viewAll: boolean;
  text: string;
}

const galleryProductVisibilityStates: GalleryProductVisibility[] = [
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
  const [productVisibility, setProductVisibility] = useState<GalleryProductVisibility>(galleryProductVisibilityStates[0])

  const galleryProductVisibilityEvent = () => productVisibility.viewAll ?
    setProductVisibility(galleryProductVisibilityStates[0]) :
    setProductVisibility(galleryProductVisibilityStates[1])

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
        <ProductsPageContainer viewAll={productVisibility.viewAll}>
          <ProductsPage products={products} />
          <Button content={productVisibility.text} buttonEvent={galleryProductVisibilityEvent}/>
        </ProductsPageContainer>
      </ProductGalleryContentWrapper>
    </ProductGalleryContainer>
  )
}

export default ProductGallery

