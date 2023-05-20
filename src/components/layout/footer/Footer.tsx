import {BsArrowUpCircle} from 'react-icons/bs'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrPinterest} from 'react-icons/gr'
import {IconComponent} from '@/types/types'
import SocialMediaButton from '@/components/buttons/social_media_button/SocialMediaButton'
import {cinzel} from '@/pages'
import {
  ArrowWrapper,
  FooterContainer,
  FooterNameWrapper,
  FooterToolbox,
  FooterToolboxWrapper,
  FooterWrapper,
  IconWrapper,
} from './FooterStyled'


const Footer = (): JSX.Element => {
  const openPage = (address: string) => window.open(address)

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
        <FooterToolbox>
          <FooterToolboxWrapper>
            <IconWrapper>
              {socialMedias.map((icon, index) => (
                <SocialMediaButton key={index} iconComponent={icon.iconComponent} iconAction={icon.iconAction} />
              ))}
            </IconWrapper>
            <ArrowWrapper>
              <SocialMediaButton iconComponent={<BsArrowUpCircle />} fontSize = '25px' sectionName='start'/>
            </ArrowWrapper>
          </FooterToolboxWrapper>
        </FooterToolbox>
        <FooterNameWrapper className={cinzel.className}>
          Corvo Bianco
        </FooterNameWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
