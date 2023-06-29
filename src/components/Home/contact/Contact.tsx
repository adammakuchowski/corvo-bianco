import {playfairDisplay} from '@/fonts/fonts'
import AvailableHoursCard from '@/components/cards/available_hours_card/AvailableHoursCard'
import PhoneCard from '@/components/cards/phone_card/PhoneCard'
import SocialMediaCard from '@/components/cards/social_media_card/SocialMediaCard'
import {ContactContainer, ContactWrapper} from './ContactStyled'

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
