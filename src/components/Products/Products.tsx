import {ProductsContainer} from './ProductsStyled'
import SectionHeader from '../SectionHeader/SectionHeader'
import ProductGallery from './ProductGallery/ProductGallery'

const Products = (): JSX.Element => {

  return (
    <ProductsContainer>
      <SectionHeader title='Vineyard' text='FEATURED WINES'/>
      <ProductGallery/>
    </ProductsContainer>
  )
}

export default Products

