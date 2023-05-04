import {cinzel} from '@/pages'
import {ButtonContainer} from './ButtonStyled'

interface AvailableHoursCardProps {
  content: string;
  buttonEvent: Function;
}

export const Button = ({content, buttonEvent}: AvailableHoursCardProps) => {
  const triggerButtonEvent = () => buttonEvent()
  
  return (
    <ButtonContainer className={cinzel.className} onClick={triggerButtonEvent}>
      {content.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button
