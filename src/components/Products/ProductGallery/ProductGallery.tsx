import {useState} from 'react'
import Navigation from '@/components/Navigation/Navigation'
import {Product} from '@/types/types'
import {ProductGalleryContainer, ProductsPageContainer} from './ProductGalleryStyled'
import ProductsPage from './ProductsPage/ProductsPage'

const productGalleryManuOptions = ['Roes', 'Organic', 'Kosher', 'Champagne', 'Other']

const products: Product[] = [
  {
    name: 'Moscato',
    brand: 'Marchesi Antinori',
    quality: 'high',
    category: 'organic',
    typ: 'dry',
    color: 'white',
    productionYear: '2006',
    countryOfOrigin: 'italy',
    img: '/images/bottle.jpg',
  }
]

const ProductGallery = (): JSX.Element => {
  const [productGalleryPage, setProductGalleryPage] = useState<number>(1)

  return (
    <ProductGalleryContainer style={{backgroundColor: 'red', minHeight: '250px'}}>
      <Navigation
        fontSize='20px'
        options={productGalleryManuOptions}
        activePage={productGalleryPage}
        setActivePage={setProductGalleryPage}
      />
      <ProductsPageContainer>
        <ProductsPage products={products} />
      </ProductsPageContainer>
    </ProductGalleryContainer>
  )
}

export default ProductGallery

