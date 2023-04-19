import CircleImgCard from '@/components/Cards/CircleImgCard/CircleImgCard'
import ImgCard from '@/components/Cards/ImgCard/ImgCard'
import CircleImgSliderCard from '@/components/Cards/CircleImgSliderCard/CircleImgSliderCard'
import {AboutContentContainer} from './AboutContentStyled'

const circleCardImgs = [
  '/images/circleCardImg.jpg',
]

const imgCard = [
  '/images/imgCard.jpg',
]

const circleCardSliderImgs = [
  '/images/circleCardSliderImgs1.jpg',
  '/images/circleCardSliderImgs2.jpg',
  '/images/circleCardSliderImgs3.jpg',
]

const CircleImgCardDesc = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat velit ipsa suscipit cupiditate provident autem optio nobis ea tenetur vero delectus, neque natus id aut rerum hic expedita incidunt iusto.'
const CircleImgSliderCardDesc = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'

const AboutContent = (): JSX.Element => {

  return (
    <AboutContentContainer>
      <CircleImgCard
        imgs={circleCardImgs}
        headerLocation='Toussaint'
        headerYear='2015'
        headerText='Wineyard'
        description={CircleImgCardDesc}
        autograph='Geralt'
      />
      <ImgCard imgs={imgCard} />
      <CircleImgSliderCard
        imgs={circleCardSliderImgs}
        headerLocation='Anna Henrietta'
        headerText='Creative Director'
        description={CircleImgSliderCardDesc}
      />
    </AboutContentContainer>
  )
}

export default AboutContent
