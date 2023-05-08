import {useState, useEffect} from 'react'
import CommunityEventCard from '../cards/community_event_card/CommunityEventCard'
import SectionHeader from '../section_header/SectionHeader'
import {CommunityEventsCardsWrapper, CommunityEventsContainer} from './CommunityEventsStyled'

const communityEventCardData = [
  {
    title: 'WINERY',
    text: 'EVENTS',
    img: '/images/communityEvents1.jpg',
  },
  {
    title: 'EXCLUSIVE',
    text: 'WINERY',
    img: '/images/communityEvents2.jpg',
  }
]

const CommunityEvents = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, []);

  return (
    <CommunityEventsContainer className={isActive ? 'active' : ''}>
      <SectionHeader title='Community' text='EVENTS' />
      <CommunityEventsCardsWrapper>
        {communityEventCardData.map((data, index) => (
          <CommunityEventCard key={index} img={data.img} title={data.title} text={data.text} />
        ))}
      </CommunityEventsCardsWrapper>
    </CommunityEventsContainer>
  )
}

export default CommunityEvents
