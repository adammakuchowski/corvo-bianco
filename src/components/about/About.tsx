import {useState, useEffect} from 'react'
import Contact from '../contact/Contact'
import SectionHeader from '@/components/section_header/SectionHeader'
import AboutContent from './about_content/AboutContent'
import {AboutContainer} from './AboutStyled'

const About = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(true)
  }, []);

  return (
    <section className='about'>
      <AboutContainer className={isActive ? 'active' : ''}>
        <SectionHeader title='Welcome' text='VINEYARD' />
        <AboutContent />
        <section className='contact' style={{width: '100%'}}>
          <Contact />
        </section>
      </AboutContainer>
    </section>
  )
}

export default About
