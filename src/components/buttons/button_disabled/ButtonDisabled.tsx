import {useState, useEffect} from 'react'
import {cinzel} from '@/fonts/fonts'
import {ButtonDisabledContainer} from './ButtonDisabledStyled'

interface ButtonDisabledProps {
  text: string;
}

const ButtonDisabled = ({text}: ButtonDisabledProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <ButtonDisabledContainer className={`${cinzel.className} ${isActive ? 'active' : ''}`}>
      {text.toUpperCase()}
    </ButtonDisabledContainer>
  )
}



export default ButtonDisabled
