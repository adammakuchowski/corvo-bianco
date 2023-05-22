import {useState} from 'react'
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
import SliderController from './slider_controller/SliderController'

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
  const [imgIndex, setImgIndex] = useState<number>(0)

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
            src={imgs[imgIndex]}
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
        <SliderController imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs}/>
      </ImageSwitchContainer>

    </ContentWarpper>
  )
}

export default CircleImgSliderCard
