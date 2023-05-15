import {useEffect, useState} from 'react'
import Image from 'next/image'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {
  CloseButtonContainer,
  CloseButtonWrapper,
  ImgWrapper,
  PopupContainer,
  PopupImgContainer,
  PopupOverlayContainer,
} from './PopupImgStyled'

interface PopupProps {
  isOpen: boolean;
  onClose: Function;
  data?: any;
}

const PopupImg = ({isOpen, onClose, data}: PopupProps): JSX.Element | null => {
  const [isActive, setisActive] = useState<boolean>(false)
  const {img} = data
  
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
      </PopupContainer>
    </PopupOverlayContainer>
  )
}

export default PopupImg
