import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Navigation from '@/components/navigation/Navigation'
import SectionHeader from '@/components/section_header/SectionHeader'
import Button from '@/components/buttons/button/Button'
import {Product} from '@/types/types'
import ProductsList from '../products_list/ProductsList'
import {
  ButtonWrapper,
  ProductGalleryContainer,
  ProductGalleryContentWrapper,
  ProductsListContainer,
} from './ProductsStyled'
import {getAllProducts} from '../productsSlice'
import {ProductsListStatus} from './types'
import {productGalleryManuOptions, productsListStatuses} from './constants'

const ProductGallery = (): JSX.Element => {
  const [productGalleryPage, setProductGalleryPage] = useState<number>(1)
  const [productsListStatus, setProductsListStatus] = useState<ProductsListStatus>(productsListStatuses[0])
  const [currentProductsCount, setCurrentProductsCount] = useState<number>(0)
  const [isActive, setIsActive] = useState(false)

  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])
  const products = useSelector(getAllProducts)

  useEffect(() => {
    setIsActive(true)
  }, []);

  useEffect(() => {
    if (categoryProducts?.length) {
      setCurrentProductsCount(categoryProducts.length)
    }
  }, [categoryProducts])

  useEffect(() => {
    const currentMenuOption = productGalleryManuOptions.find(option => option.index === productGalleryPage)
    const name = currentMenuOption?.name.toLocaleLowerCase()
    const currentPorducts = products.filter(product => product.category === name)
    setCategoryProducts(currentPorducts)
  }, [productGalleryPage, products])


  const ProductsListEvent = () => productsListStatus.viewAll ?
    setProductsListStatus(productsListStatuses[0]) :
    setProductsListStatus(productsListStatuses[1])

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
          <ProductsListContainer viewAll={productsListStatus.viewAll} productsCount={currentProductsCount}>
            <ProductsList products={categoryProducts} />
            {currentProductsCount > 4 && (
              <ButtonWrapper>
                <Button text={productsListStatus.text} buttonAction={ProductsListEvent} />
              </ButtonWrapper>
            )}
          </ProductsListContainer>
        </ProductGalleryContentWrapper>
      </ProductGalleryContainer>
    </section>
  )
}

export default ProductGallery

