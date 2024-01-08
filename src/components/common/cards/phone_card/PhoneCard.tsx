import {
  ContentWrapper,
  HeaderContentWrapper,
  PhoneCardContainer
} from './PhoneCardStyled'

interface PhoneCardProps {
  headerText: string;
  phoneNumber: string;
}

const PhoneCard = ({headerText, phoneNumber}: PhoneCardProps): JSX.Element => {
  return (
    <PhoneCardContainer>
      <HeaderContentWrapper>{headerText}</HeaderContentWrapper>
      <ContentWrapper>{phoneNumber}</ContentWrapper>
    </PhoneCardContainer>
  )
}

export default PhoneCard
