import {cinzel} from '@/fonts/fonts'
import {ButtonContainer} from './ButtonStyled'

interface ButtonProps {
  text: string;
  buttonAction?: Function;
  disabled?: boolean;
}

const Button = ({text, buttonAction, disabled = false}: ButtonProps): JSX.Element => {
  const onButtonAction = () => buttonAction && buttonAction()
  
  return (
    <ButtonContainer className={cinzel.className} onClick={onButtonAction} disabled={disabled}>
      {text.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button
