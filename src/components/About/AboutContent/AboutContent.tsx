import Image from 'next/image'
import {greatVibes, playfairDisplay, sacramento, tangerine} from '@/pages'
import {
  AboutContentContainer,
  ContentWarpper,
  ContentAutograph,
  ContentDescriptionContainer,
  ContentDescriptionWrapper,
  LeftContentHeaderWrapper,
  CircleContentImgContainer,
  CircleContentImgWrapper,
  SecondContentImgContainer,
  SecondContentImgWrapper,
  RightContentHeaderWrapper,
} from './AboutContentStyled'

const imgs = [
  '/images/leftContentImg.jpg',
  '/images/middleContentImg.jpg',
  '/images/rightContentImg.jpg',
]

const AboutContent = (): JSX.Element => {

  return (
    <AboutContentContainer>
      <ContentWarpper>
        <LeftContentHeaderWrapper>
          <div className={playfairDisplay.className}>Toussaint</div>
          <div className={playfairDisplay.className}>2015</div>
          <div className={greatVibes.className}>Wineyard</div>
        </LeftContentHeaderWrapper>

        <CircleContentImgContainer>
          <CircleContentImgWrapper>
            <Image
              src={imgs[0]}
              alt=''
              fill
              style={{objectFit: 'cover'}}
            />
          </CircleContentImgWrapper>
        </CircleContentImgContainer>

        <ContentDescriptionContainer>
          <ContentDescriptionWrapper className={tangerine.className}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat velit ipsa suscipit cupiditate provident autem optio nobis ea tenetur vero delectus, neque natus id aut rerum hic expedita incidunt iusto.
          </ContentDescriptionWrapper>
          <ContentAutograph className={sacramento.className}>
            Geralt
          </ContentAutograph>
        </ContentDescriptionContainer>
      </ContentWarpper>

      <ContentWarpper>
        <SecondContentImgContainer>
          <SecondContentImgWrapper>
            <Image
              src={imgs[1]}
              alt=''
              fill
              style={{objectFit: 'cover'}}
            />
          </SecondContentImgWrapper>
        </SecondContentImgContainer>
      </ContentWarpper>

      <ContentWarpper>
        <RightContentHeaderWrapper>
          <div className={playfairDisplay.className}>Anna Henrietta</div>
          <div className={playfairDisplay.className}>Creative Director</div>
          <div></div>
        </RightContentHeaderWrapper>

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
            <q>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</q>
          </ContentDescriptionWrapper>

          <div> - - - </div>

        </ContentDescriptionContainer>
      </ContentWarpper>
    </AboutContentContainer>
  )
}

export default AboutContent
