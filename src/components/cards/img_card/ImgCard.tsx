import Image from 'next/image'
import {
  ContentWarpper,
  ContentImgContainer,
  ContentImgWrapper,
} from './ImgCardStyled'

interface ImgCardProps {
  imgs: any[];
}

const ImgCard = ({imgs}: ImgCardProps): JSX.Element => {
  return (
    <ContentWarpper>
      <ContentImgContainer>
        <ContentImgWrapper>
          <Image
            src={imgs[0]}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </ContentImgWrapper>
      </ContentImgContainer>
    </ContentWarpper>
  )
}

export default ImgCard
