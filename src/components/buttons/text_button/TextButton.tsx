import {cinzel} from '@/pages'
import {TextButtonContainer} from './TextButtonStyled'

interface TextButtonProps {
  content: string;
  buttonAction?: Function;
  overrideStyle?: object;
}

const TextButton = ({content, buttonAction, overrideStyle}: TextButtonProps): JSX.Element => {
  const onButtonAction = () => buttonAction &&  buttonAction()

  return (
    <TextButtonContainer className={cinzel.className} onClick={onButtonAction} style={overrideStyle}>
      {content.toUpperCase()}
    </TextButtonContainer>
  )
}

export default TextButton
