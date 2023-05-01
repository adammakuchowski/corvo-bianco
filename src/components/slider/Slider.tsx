import {useState} from 'react'
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai'
import Image from 'next/image'
import {
  ArrowContainer,
  ImageContainer,
  ImageWrapper,
  SliderContainer,
} from './SliderStyled'

const imgs = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
]

const Slider = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0)

  const goToNextSlide = () => (index < imgs.length - 1) ?
    setIndex(index + 1) :
    setIndex(0)

  const goToPreviousSlide = () => (index === 0) ?
    setIndex(imgs.length - 1) :
    setIndex(index - 1)

  return (
    <SliderContainer>
      <ImageContainer>

        <ArrowContainer style={{left: 20}} >
          <AiOutlineArrowLeft onClick={goToPreviousSlide} />
        </ArrowContainer>

        <ImageWrapper>
          <Image
            src={imgs[index]}
            alt=''
            fill
            style={{objectFit: 'fill'}}
          />
        </ImageWrapper>

        <ArrowContainer style={{right: 20}} >
          <AiOutlineArrowRight onClick={goToNextSlide} />
        </ArrowContainer>

      </ImageContainer>
    </SliderContainer>
  )
}

export default Slider
