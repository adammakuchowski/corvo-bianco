import {useEffect, useState} from 'react'
import {cinzel} from '@/fonts/fonts'
import {DisabledTextButtonContainer, TextButtonContainer} from './TextButtonStyled'

interface TextButtonProps {
  content: string;
  buttonAction?: () => void;
  overrideStyle?: object;
  upperCase?: boolean;
  disabled?: boolean;
}

interface DisabledTextButtonProps {
  content?: string;
  overrideStyle?: object;
}

const DisabledTextButton = ({content, overrideStyle}: DisabledTextButtonProps): JSX.Element => (
  <DisabledTextButtonContainer className={cinzel.className} style={overrideStyle}>
    {content}
  </DisabledTextButtonContainer>
)

const TextButton = ({content, buttonAction, overrideStyle, upperCase = true, disabled = false}: TextButtonProps): JSX.Element => {
  const [textButton, setTextButton] = useState<string>()
  const onButtonAction = () => buttonAction && buttonAction()

  useEffect(() => {
    setTextButton(upperCase ? content.toUpperCase() : content)
  }, [upperCase, content])

  return (
    <>
      {disabled ?
        <DisabledTextButton content={textButton} overrideStyle={overrideStyle} /> :
        <TextButtonContainer className={cinzel.className} onClick={onButtonAction} style={overrideStyle}>
          {textButton}
        </TextButtonContainer>
      }
    </>
  )
}

export default TextButton
