import {useEffect, useState} from 'react'
import {AlertContainer, AlertIconWrapper} from './AlertStyled'

interface AlertProps {
  iconComponent: any;
  isActive: boolean;
}

const Alert = ({iconComponent, isActive}: AlertProps): JSX.Element => {
  // const [isActive, setIsActive] = useState<boolean>(false)
  // useEffect(() => {
  //   setIsActive(true)

  //   setTimeout(()=> {
  //     setIsActive(false)
  //   }, 2000)
  // }, [])

  return (
    <AlertContainer className={isActive ? 'active' : ''}>
      <AlertIconWrapper>
        {iconComponent}
      </AlertIconWrapper>
    </AlertContainer>
  )
}

export default Alert
