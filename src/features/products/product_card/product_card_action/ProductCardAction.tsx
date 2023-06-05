import {useContext, useState} from 'react'
import {useDispatch} from 'react-redux'
import {BsFillCartCheckFill, BsFillSuitHeartFill, BsStarFill} from 'react-icons/bs'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsArrowsFullscreen} from 'react-icons/bs'
import {TiArrowSync} from 'react-icons/ti'
import {FaHeart} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import AlertContext from '@/context/AlertContext'
import {IconComponent, Product} from '@/types/types'
import IconActionButton from '@/components/buttons/icon_action_button/IconActionButton'
import {cinzel} from '@/fonts/fonts'
import {
  ProductCardActiveContainer,
  ProductCardNotActiveContainer,
  ProductDataWrapper,
  ProductName,
  ProductQualityStars,
} from './ProductCardActionStyled'
import ProductModal from '../../product_modal/ProductModal'
import {addToCart} from '../../productsSlice'

interface ProductCardActionProps {
  product: Product;
  active: boolean;
}

const productQualityStartsRainge = [1, 2, 3, 4, 5]

const ProductCardAction = ({active, product}: ProductCardActionProps): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const {
    isAlertActive,
    setAlertActive,
    setAlertIcon,
    setAlertOverflow
  } = useContext(AlertContext)
  const dispatch = useDispatch()
  
  const {name, price, quality} = product

  const productCardActions: IconComponent[] = [
    {
      iconComponent: <BsArrowsFullscreen />,
      iconAction: () => setModalIsOpen(true),
    },
    {
      iconComponent: <TiArrowSync />
    },
    {
      iconComponent: <IoMdHeartEmpty />,
      iconAction: () => {
        if (isAlertActive) return

        setAlertIcon(<FaHeart />)
        setAlertOverflow('auto')
        setAlertActive(true)
      },
      progressEffect: true,
    },
    {
      iconComponent: <AiOutlineShoppingCart />,
      iconAction: () => {
        if (isAlertActive) return

        dispatch(addToCart(product, 1))
        setAlertIcon(<BsFillCartCheckFill />)
        setAlertOverflow('auto')
        setAlertActive(true)
      },
      progressEffect: true,
    },
  ]

  return active ? (
    <ProductCardActiveContainer className={cinzel.className}>
      <ProductModal
        isOpen={modalIsOpen}
        onClose={setModalIsOpen}
        product={product}
      />
      {productCardActions.map((icon, index) => (
        <IconActionButton
          key={index}
          iconComponent={icon.iconComponent}
          iconAction={icon.iconAction}
          progressEffect={icon.progressEffect}
        />
      ))}
    </ProductCardActiveContainer>
  ) : (
    <ProductCardNotActiveContainer className={cinzel.className}>
      <ProductName>{name}</ProductName>
      <ProductDataWrapper>
        <ProductQualityStars>{
          productQualityStartsRainge.map((index) => {
            const color = index > quality ? '#d8d8d8' : '#999999'
            return <BsStarFill key={index} color={color} />
          })}
        </ProductQualityStars>
        <div>{`${price.toFixed(2)} $`}</div>
      </ProductDataWrapper>
    </ProductCardNotActiveContainer>
  )
}

export default ProductCardAction
