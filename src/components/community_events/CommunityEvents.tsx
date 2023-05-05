import SectionHeader from '../section_header/SectionHeader'
import {CommunityEventsContainer} from './CommunityEventsStyled'

interface CommunityEventsProps {

}

export const CommunityEvents = ({}: CommunityEventsProps): JSX.Element => {
  return (
    <CommunityEventsContainer>
      <SectionHeader title='Community' text='EVENTS' />
      CommunityEvents
    </CommunityEventsContainer>
  )
}
