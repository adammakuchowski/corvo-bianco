import {cinzel} from '@/fonts/fonts'
import {ButtonContainer, DisabledButtonContainer} from './ButtonStyled'

interface DisabledButtonProps {
  text: string;
}
interface ButtonProps {
  text: string;
  buttonAction?: () => void;
  disabled?: boolean;
}

const DisabledButton = ({text}: DisabledButtonProps): JSX.Element => (
  <DisabledButtonContainer className={cinzel.className} title='Complete the required order form fields!'>
    {text.toUpperCase()}
  </DisabledButtonContainer>
)

const Button = ({text, buttonAction, disabled = false}: ButtonProps): JSX.Element => {
  const onButtonAction = () => buttonAction && buttonAction()

  return (
    <>
      {false ?
        <DisabledButton text={text} /> :
        <ButtonContainer className={cinzel.className} onClick={onButtonAction}>
          {text.toUpperCase()}
        </ButtonContainer>
      }
    </>
  )
}

export default Button
