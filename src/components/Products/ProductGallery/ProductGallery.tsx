import Navigation from '@/components/Navigation/Navigation'
import {ProductGalleryContainer} from './ProductGalleryStyled'

const productGalleryManuOptions = ['']

const ProductGallery = (): JSX.Element => {

  return (
    <ProductGalleryContainer style={{backgroundColor: 'red', minHeight: '250px'}}>
      <Navigation fontSize='20px' options={productGalleryManuOptions}/>
    </ProductGalleryContainer>
  )
}

export default ProductGallery

