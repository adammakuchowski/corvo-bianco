import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RiYoutubeFill} from 'react-icons/ri'
import SocialMediaButton from '@/components/buttons/social_media_button/SocialMediaButton'
import {IconComponent} from '@/types/types'
import {
  ContentWrapper,
  HeaderContentWrapper,
  SocialMediaCardContainer,
} from './SocialMediaCardStyled'

interface SocialMediaCardProps {
  headerText: string;
}

const socialMedias: IconComponent[] = [
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
          <SocialMediaButton key={index} iconComponent={icon.iconComponent} iconAction={icon.iconAction}/>
        ))}
      </ContentWrapper>
    </SocialMediaCardContainer>
  )
}

export default SocialMediaCard
