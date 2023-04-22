import {
  AvailableHoursCardContainer,
  ContentWrapper,
  HeaderContentWrapper,
} from './AvailableHoursCardStyled'

interface AvailableHoursCardProps {
  headerText: string;
  available: {
    fromDay: string;
    toDay: string;
    fromHour: string;
    toHour: string;
  }
}

const AvailableHoursCard = ({headerText, available}: AvailableHoursCardProps): JSX.Element => {
  const {fromDay, toDay, fromHour, toHour} = available

  return (
    <AvailableHoursCardContainer>
      <HeaderContentWrapper>{headerText}</HeaderContentWrapper>
      <ContentWrapper>{`${fromDay}-${toDay}: ${fromHour}AM-${toHour}PM`}</ContentWrapper>
    </AvailableHoursCardContainer>
  )
}

export default AvailableHoursCard
