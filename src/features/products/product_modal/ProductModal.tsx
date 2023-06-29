import {
  SyntheticEvent,
  useContext,
  useEffect,
  useState
} from 'react'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {IoCloseCircleOutline} from 'react-icons/io5'
import AlertContext from '@/context/AlertContext'
import Counter from '@/components/common/counter/Counter'
import Button from '@/components/buttons/button/Button'
import IconButton from '@/components/buttons/icon_button/IconButton'
import CircularProgress from '@mui/material/CircularProgress'
import {Product} from '@/types/types'
import {
  ButtonWrapper,
  CloseButtonContainer,
  CloseButtonWrapper,
  CounterContainer,
  DataContainer,
  DataHeader,
  DataHeaderWrapper,
  ImgWrapper,
  ModalContainer,
  ModalContentContainer,
  ModalDataContainer,
  ModalImgContainer,
  ModalOverlayContainer,
} from './ProductModalStyled'
import ProductFeatureEntry from './product_feature_entry/ProductFeatureEntry'
import {addToCart} from '../productsSlice'

export interface ProductModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  product: Product;
}

const ProductModal = ({isOpen, onClose, product}: ProductModalProps): JSX.Element | null => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(1)
  const [buttonActive, setButtonActive] = useState<boolean>(true)
  const dispatch = useDispatch()
  const {
    isAlertActive,
    setAlertActive,
    setAlertIcon,
    setAlertOverflow
  } = useContext(AlertContext)

  const {
    img,
    name,
    brand,
    category,
    typ,
    color,
    productionYear,
    countryOfOrigin,
    price,
  } = product

  const productSpec = [
    brand,
    typ,
    productionYear,
    color,
    countryOfOrigin,
    `${price} $`,
  ]

  const onAddProductToCart = () => {
    if (product && quantity) {
      dispatch(addToCart(product, quantity))
      setButtonActive(false)

      if (!isAlertActive) {
        setAlertIcon(<BsFillCartCheckFill />)
        setAlertOverflow('hidden')
        setAlertActive(true)
      }

      setTimeout(() => {
        setButtonActive(true)
        setQuantity(1)
      }, 1000)
    }
  }

  useEffect(() => {
    if (isOpen) {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      setIsActive(false)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const onCloseModal = () => {
    if (isAlertActive) return

    onClose(false)
  }

  const onStopPropagation = (event: SyntheticEvent) => {
    event.stopPropagation()
  }

  if (!isOpen) return null

  return (
    <ModalOverlayContainer className={isActive ? 'active' : ''} onClick={onCloseModal}>
      <ModalContainer className={isActive ? 'active' : ''} onClick={onStopPropagation}>
        <CloseButtonContainer>
          <CloseButtonWrapper>
            <IconButton
              iconComponent={<IoCloseCircleOutline />}
              iconAction={onCloseModal}
              fontSize='28px'
              disabled={isAlertActive}
            />
          </CloseButtonWrapper>
        </CloseButtonContainer>
        <ModalContentContainer>
          <ModalImgContainer>
            <ImgWrapper>
              <Image
                src={img}
                alt=''
                fill
                style={{objectFit: 'cover'}}
              />
            </ImgWrapper>
          </ModalImgContainer>
          <ModalDataContainer>
            <DataHeaderWrapper className={isActive ? 'active' : ''}>
              <DataHeader>
                {name}
              </DataHeader>
            </DataHeaderWrapper>
            <DataContainer className={isActive ? 'active' : ''}>
              {productSpec.map((specification, index) => (
                <ProductFeatureEntry key={index} value={specification} />
              ))}
            </DataContainer>
            <CounterContainer className={isActive ? 'active' : ''}>
              <Counter countNumber={quantity} setCountNumber={setQuantity} />
              <ButtonWrapper>{buttonActive ?
                <Button text='Add to cart' buttonAction={onAddProductToCart} /> :
                <CircularProgress sx={{color: '#8ea648'}} />
              }
              </ButtonWrapper>
            </CounterContainer>
          </ModalDataContainer>
        </ModalContentContainer>
      </ModalContainer>
    </ModalOverlayContainer>
  )
}

export default ProductModal
