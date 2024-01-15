import {useContext} from 'react'

import CommunityEventCard from '@/components/common/cards/community_event_card/CommunityEventCard'
import SectionHeader from '@/components/common/section_header/SectionHeader'
import HomeContext from '@/context/HomeContext'

import {
  CommunityEventsCardsWrapper,
  CommunityEventsContainer
} from './CommunityEventsStyled'

const communityEventCardData = [
  {
    title: 'WINERY',
    text: 'EVENTS',
    img: '/images/communityEvents1.jpg'
  },
  {
    title: 'EXCLUSIVE',
    text: 'WINERY',
    img: '/images/communityEvents2.jpg'
  }
]

const CommunityEvents = (): JSX.Element => {
  const {className} = useContext(HomeContext)

  return (
    <section className='events'>
      <CommunityEventsContainer className={className}>
        <SectionHeader title='Community' text='EVENTS' />
        <CommunityEventsCardsWrapper>
          {communityEventCardData.map((data, index) => (
            <CommunityEventCard key={index} img={data.img} title={data.title} text={data.text} />
          ))}
        </CommunityEventsCardsWrapper>
      </CommunityEventsContainer>
    </section>
  )
}

export default CommunityEvents
