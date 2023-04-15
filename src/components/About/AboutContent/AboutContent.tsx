import Image from 'next/image'
import {greatVibes, playfairDisplay, sacramento, tangerine} from '@/pages'
import {
  AboutContentContainer,
  ContentWarpper,
  FirstContentAutograph,
  FirstContentDescriptionContainer,
  FirstContentDescriptionWrapper,
  FirstContentHeaderWrapper,
  FirstContentImgContainer,
  FirstContentImgWrapper,
} from './AboutContentStyled'

const img = '/images/firstContentImg.jpg'

const AboutContent = (): JSX.Element => {

  return (
    <AboutContentContainer>
      <ContentWarpper>
        <FirstContentHeaderWrapper>
          <div className={playfairDisplay.className}>Toussaint</div>
          <div className={playfairDisplay.className}>2015</div>
          <div className={greatVibes.className}>Wineyard</div>
        </FirstContentHeaderWrapper>

        <FirstContentImgContainer>
          <FirstContentImgWrapper>
            <Image
              src={img}
              alt=''
              fill
              style={{objectFit: 'cover'}}
            />
          </FirstContentImgWrapper>
        </FirstContentImgContainer>

        <FirstContentDescriptionContainer>
          <FirstContentDescriptionWrapper className={tangerine.className}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat velit ipsa suscipit cupiditate provident autem optio nobis ea tenetur vero delectus, neque natus id aut rerum hic expedita incidunt iusto.
          </FirstContentDescriptionWrapper>
          <FirstContentAutograph className={sacramento.className}>
            Geralt
          </FirstContentAutograph>
        </FirstContentDescriptionContainer>

      </ContentWarpper>

      <ContentWarpper></ContentWarpper>
      <ContentWarpper></ContentWarpper>
    </AboutContentContainer>
  )
}

export default AboutContent
