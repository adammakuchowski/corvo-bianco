import {useEffect, useState} from 'react'
import {BsArrowUpCircle} from 'react-icons/bs'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrPinterest} from 'react-icons/gr'
import {IconComponent} from '@/types/types'
import IconButton from '@/components/common/buttons/icon_button/IconButton'
import {cinzel} from '@/fonts/fonts'
import {
  ArrowWrapper,
  FooterContainer,
  FooterNameWrapper,
  FooterToolbox,
  FooterToolboxWrapper,
  FooterWrapper,
  IconWrapper,
} from './FooterStyled'

interface FooterProps {
  upButtonIsVisible?: boolean;
}

const Footer = ({upButtonIsVisible = true}: FooterProps): JSX.Element => {
  const openPage = (address: string) => window.open(address)
  const [className, setClassName] = useState<string>('')

  useEffect(() => {
    setClassName('active')
  }, [])

  const socialMedias: IconComponent[] = [
    {
      iconComponent: <FiFacebook />,
      iconAction: () => openPage('https://facebook.com/'),
    },
    {
      iconComponent: <FiTwitter />,
      iconAction: () => openPage('https://twitter.com/'),
    },
    {
      iconComponent: <AiOutlineGoogle />,
      iconAction: () => openPage('https://www.google.com/'),
    },
    {
      iconComponent: <GrPinterest />,
      iconAction: () => openPage('https://pinterest.com/'),
    }
  ]

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterToolbox className={className}>
          <FooterToolboxWrapper>
            <IconWrapper>
              {socialMedias.map((icon, index) => (
                <IconButton key={index} iconComponent={icon.iconComponent} iconAction={icon.iconAction} />
              ))}
            </IconWrapper>
            <ArrowWrapper>
              {upButtonIsVisible && (
                <IconButton iconComponent={<BsArrowUpCircle />} fontSize='25px' sectionName='start' />
              )}
            </ArrowWrapper>
          </FooterToolboxWrapper>
        </FooterToolbox>
        <FooterNameWrapper className={`${cinzel.className} ${className}`}>
          Corvo Bianco
        </FooterNameWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
