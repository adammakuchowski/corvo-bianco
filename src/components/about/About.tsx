import Contact from '../contact/Contact'
import SectionHeader from '../section_header/SectionHeader'
import AboutContent from './about_content/AboutContent'
import {AboutContainer} from './AboutStyled'

const About = (): JSX.Element => {

  return (
    <AboutContainer>
      <SectionHeader title='Welcome' text='VINEYARD'/>
      <AboutContent/>
      <Contact/>
    </AboutContainer>
  )
}

export default About
