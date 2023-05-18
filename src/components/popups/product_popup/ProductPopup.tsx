import {useEffect, useState} from 'react'
import Image from 'next/image'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {Product} from '@/types/types'
import {
  CloseButtonContainer,
  CloseButtonWrapper,
  DataContainer,
  DataHeader,
  DataHeaderWrapper,
  ImgWrapper,
  PopupContainer,
  PopupContentContainer,
  PopupDataContainer,
  PopupImgContainer,
  PopupOverlayContainer,
} from './ProductPopupStyled'
import ProductFeatureEntry from './product_feature_entry/ProductFeatureEntry'

interface ProductPopupProps {
  isOpen: boolean;
  onClose: Function;
  product: Product;
}

const ProductPopup = ({isOpen, onClose, product}: ProductPopupProps): JSX.Element | null => {
  const [isActive, setisActive] = useState<boolean>(false)
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
    category,
    typ,
    color,
    productionYear,
    countryOfOrigin,
  ]

  useEffect(() => {
    isOpen && setisActive(true)

    return () => {
      setisActive(false)
    }
  }, [isOpen])

  const onClosePopup = () => onClose(false)

  if (!isOpen) return null

  return (
    <PopupOverlayContainer className={isActive ? 'active' : ''}>
      <PopupContainer className={isActive ? 'active' : ''}>

        <CloseButtonContainer>
          <CloseButtonWrapper onClick={onClosePopup}>
            <IoCloseCircleOutline />
          </CloseButtonWrapper>
        </CloseButtonContainer>

        <PopupContentContainer>

          <PopupImgContainer>
            <ImgWrapper>
              <Image
                src={img}
                alt=''
                fill
                style={{objectFit: 'cover'}}
              />
            </ImgWrapper>
          </PopupImgContainer>


          <PopupDataContainer>
            <DataHeaderWrapper>
              <DataHeader>
                {name}
              </DataHeader>
            </DataHeaderWrapper>
            <DataContainer>
              {productSpec.map((specification, index) => (
                <ProductFeatureEntry key={index} value={specification}/>
              ))}
            </DataContainer>

          </PopupDataContainer>


        </PopupContentContainer>
      </PopupContainer>
    </PopupOverlayContainer>
  )
}

export default ProductPopup
