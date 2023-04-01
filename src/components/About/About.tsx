import {cinzel} from '@/pages'
import {
  AboutContainer,
  DescriptionContainer,
  DescriptionContent,
  NameContainer,
  NameWrapper,
} from './AboutStyled'

const About = () => {
  return (
    <AboutContainer>
      <NameContainer className={cinzel.className}>
        <NameWrapper>Corvo Bianco</NameWrapper>
      </NameContainer>

      <DescriptionContainer>
        <DescriptionContent className={cinzel.className}>
          Constructed on elven ruins, Corvo Bianco known as Gwyn Cerbin in the Elder Speech is one of the oldest vineyards in the duchy and producer of a startlingly unique wine, Sepremento. Sadly, the rakish lifestyle of one of its owners, the last member of the Bolius line, drove the possession into ruin. The next owner, Baron Rossell, tried to return the vineyard to its former glory, but to no avail. Corvo Bianco was then auctioned off and eventually passed under the control of the Ducal Treasury.
        </DescriptionContent>
      </DescriptionContainer>

    </AboutContainer>
  )
}

export default About
