import {useState, useEffect} from 'react'
import Contact from '../contact/Contact'
import SectionHeader from '../section_header/SectionHeader'
import AboutContent from './about_content/AboutContent'
import {AboutContainer} from './AboutStyled'

const About = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, []);

  return (
    <AboutContainer className={isActive ? 'active' : ''}>
      <SectionHeader title='Welcome' text='VINEYARD'/>
      <AboutContent/>
      <Contact/>
    </AboutContainer>
  )
}

export default About
