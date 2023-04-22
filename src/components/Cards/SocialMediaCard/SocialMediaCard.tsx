import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RiYoutubeFill} from 'react-icons/ri'
import {
  ContentWrapper,
  HeaderContentWrapper,
  SocialMediaCardContainer,
} from './SocialMediaCardStyled'
import SocialMediaIcon from '@/components/SocialMediaIcon/SocialMediaIcon'

interface SocialMediaCardProps {
  headerText: string;
}

const socialMedias = [
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
          <SocialMediaIcon key={index} iconComponent={icon.iconComponent}/>
        ))}
      </ContentWrapper>
    </SocialMediaCardContainer>
  )
}

export default SocialMediaCard
