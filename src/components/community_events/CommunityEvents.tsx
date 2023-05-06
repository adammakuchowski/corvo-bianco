import CommunityEventCard from '../cards/community_event_card/CommunityEventCard'
import SectionHeader from '../section_header/SectionHeader'
import {CommunityEventsCardsWrapper, CommunityEventsContainer} from './CommunityEventsStyled'

const imgs = [
  '/images/communityEvents1.jpg',
  '/images/communityEvents3.jpg',
]

//   '/images/communityEvents2.jpg'

interface CommunityEventsProps {

}

const CommunityEvents = ({}: CommunityEventsProps): JSX.Element => {
  return (
    <CommunityEventsContainer>
      <SectionHeader title='Community' text='EVENTS' />
      <CommunityEventsCardsWrapper>
        {imgs.map((img, index) => (
          <CommunityEventCard key={index} img={img} />
        ))}
      </CommunityEventsCardsWrapper>
    </CommunityEventsContainer>
  )
}

export default CommunityEvents
