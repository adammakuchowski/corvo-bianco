import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RiYoutubeFill} from 'react-icons/ri'
import SocialMediaIcon from '@/components/SocialMediaIcon/SocialMediaIcon'
import {
  ContentWrapper,
  HeaderContentWrapper,
  SocialMediaCardContainer,
} from './SocialMediaCardStyled'

interface SocialMediaCardProps {
  headerText: string;
}

interface SocialMedia {
  iconComponent: JSX.Element,
  iconAction?: Function,
}

const socialMedias: SocialMedia[] = [
  {iconComponent: <BsFacebook/>},
  {iconComponent: <GrInstagram/>},
  {iconComponent: <AiFillTwitterCircle/>},
  {iconComponent: <RiYoutubeFill/>},
]

const SocialMediaCard = ({headerText}: SocialMediaCardProps): JSX.Element => {

  return (
    <SocialMediaCardContainer>
      <HeaderContentWrapper>{headerText}</HeaderContentWrapper>
      <ContentWrapper>
        {socialMedias.map((icon, index) => (
          <SocialMediaIcon key={index} iconComponent={icon.iconComponent} iconAction={icon.iconAction}/>
        ))}
      </ContentWrapper>
    </SocialMediaCardContainer>
  )
}

export default SocialMediaCard
