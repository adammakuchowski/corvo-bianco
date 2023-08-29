import {useContext} from 'react'
import Contact from '@/components/pages/home/contact/Contact'
import SectionHeader from '@/components/common/section_header/SectionHeader'
import HomeContext from '@/context/HomeContext'
import AboutContent from './about_content/AboutContent'
import {AboutContainer} from './AboutStyled'

const About = (): JSX.Element => {
  const {className} = useContext(HomeContext)

  return (
    <section className='about'>
      <AboutContainer className={className}>
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
