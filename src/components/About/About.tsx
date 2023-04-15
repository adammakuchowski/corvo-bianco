import SectionHeader from '../SectionHeader/SectionHeader'
import AboutContent from './AboutContent/AboutContent'
import {
  AboutContainer,
} from './AboutStyled'

const About = (): JSX.Element => {

  return (
    <AboutContainer>
      <SectionHeader title='Welcome' text='VINEYARD'/>
      <AboutContent/>
    </AboutContainer>
  )
}

export default About
