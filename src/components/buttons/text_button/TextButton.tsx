import {useEffect, useState} from 'react'
import {cinzel} from '@/fonts/fonts'
import {TextButtonContainer} from './TextButtonStyled'

interface TextButtonProps {
  content: string;
  buttonAction?: () => void;
  overrideStyle?: object;
  upperCase?: boolean;
}

const TextButton = ({content, buttonAction, overrideStyle, upperCase = true}: TextButtonProps): JSX.Element => {
  const [textButton, setTextButton] = useState<string>()
  const onButtonAction = () => buttonAction && buttonAction()

  useEffect(() => {
    setTextButton(upperCase ? content.toUpperCase() : content)
  }, [upperCase, content])

  return (
    <TextButtonContainer className={cinzel.className} onClick={onButtonAction} style={overrideStyle}>
      {textButton}
    </TextButtonContainer>
  )
}

export default TextButton
