import {cinzel} from '@/pages'
import {ButtonContainer} from './ButtonStyled'

interface ButtonProps {
  content: string;
  buttonAction?: Function;
}

const Button = ({content, buttonAction}: ButtonProps): JSX.Element => {
  const onButtonAction = () => buttonAction && buttonAction()
  
  return (
    <ButtonContainer className={cinzel.className} onClick={onButtonAction}>
      {content.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button
