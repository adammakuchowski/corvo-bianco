import Image from 'next/image'
import {playfairDisplay, tangerine} from '@/pages'
import {
  CircleContentImgContainer,
  CircleContentImgWrapper,
  ContentDescriptionContainer,
  ContentDescriptionWrapper,
  ContentWarpper,
  ContentHeaderWrapper,
  ImageSwitchContainer,
} from './CircleImgSliderCardStyled'
import ImageCardSwitcher from '../../SliderController/SliderController'

interface ImgCardProps {
  imgs: any[];
  headerLocation: string;
  headerText: string;
  description: string;
}

const CircleImgSliderCard = ({
  imgs,
  headerLocation,
  headerText,
  description,
}: ImgCardProps): JSX.Element => {

  return (
    <ContentWarpper>
      <ContentHeaderWrapper>
        <div className={playfairDisplay.className}>{headerLocation}</div>
        <div className={playfairDisplay.className}>{headerText}</div>
        <div></div>
      </ContentHeaderWrapper>

      <CircleContentImgContainer>
        <CircleContentImgWrapper>
          <Image
            src={imgs[2]}
            alt=''
            fill
            style={{objectFit: 'cover'}}
          />
        </CircleContentImgWrapper>
      </CircleContentImgContainer>

      <ContentDescriptionContainer>
        <ContentDescriptionWrapper className={tangerine.className}>
          <q>{description}</q>
        </ContentDescriptionWrapper>
      </ContentDescriptionContainer>

      <ImageSwitchContainer>
        <ImageCardSwitcher/>
      </ImageSwitchContainer>

    </ContentWarpper>
  )
}

export default CircleImgSliderCard
