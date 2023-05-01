import {cinzel} from '@/pages'
import {ButtonContainer} from './ButtonStyled'

interface AvailableHoursCardProps {
  content: string;
}

export const Button = ({content}: AvailableHoursCardProps) => {
  return (
    <ButtonContainer className={cinzel.className}>
      {content.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button
