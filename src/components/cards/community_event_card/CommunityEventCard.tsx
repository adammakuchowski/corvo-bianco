import Image from 'next/image'
import {cinzel} from '@/pages'
import {
  CardWrapper,
  CommunityEventCardContainer,
  ImgNameWrapper,
  ImgOpacity,
  ImgWrapper,
} from './CommunityEventCardStyled'

interface CommunityEventCardProps {
  img: any,
  title: string,
  text: string,
}

const CommunityEventCard = ({img, title, text}: CommunityEventCardProps): JSX.Element => {
  return (
    <CommunityEventCardContainer>
      <CardWrapper>
        <ImgWrapper>
          <Image
            src={img}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </ImgWrapper>
        <ImgOpacity />
        <ImgNameWrapper className={cinzel.className}>
          <div>{title}</div>
          <div>{text}</div>
        </ImgNameWrapper>
      </CardWrapper>
    </CommunityEventCardContainer>
  )
}

export default CommunityEventCard
