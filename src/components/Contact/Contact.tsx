import {ContactContainer, ContactWrapper} from './ContactStyled'
import PhoneCard from '../Cards/PhoneCard/PhoneCard'
import AvailableHoursCard from '../Cards/AvailableHoursCard/AvailableHoursCard'
import SocialMediaCard from '../Cards/SocialMediaCard/SocialMediaCard'
import {playfairDisplay} from '@/pages'

const available = {
  fromDay: 'MON',
  toDay: 'SUN',
  fromHour: '8',
  toHour: '10',
}

const Contact = (): JSX.Element => {

  return (
    <ContactContainer>
      <ContactWrapper className={playfairDisplay.className}>
        <PhoneCard
          headerText='Phone number'
          phoneNumber='(00) 123 456 789'
        />
        <AvailableHoursCard
          headerText='We are Open'
          available={available}
        />
        <SocialMediaCard
          headerText='Social Media'
        />
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
