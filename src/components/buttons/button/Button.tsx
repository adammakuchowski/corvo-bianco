import {cinzel} from '@/fonts/fonts'
import {ButtonContainer} from './ButtonStyled'

interface ButtonProps {
  text: string;
  buttonAction?: () => void;
}

const Button = ({text, buttonAction}: ButtonProps): JSX.Element => {
  const onButtonAction = () => buttonAction && buttonAction()
  
  return (
    <ButtonContainer className={cinzel.className} onClick={onButtonAction}>
      {text.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button
