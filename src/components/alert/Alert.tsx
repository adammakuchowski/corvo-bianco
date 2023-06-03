import {useContext, useEffect} from 'react'
import {AlertContainer, AlertIconWrapper} from './AlertStyled'
import AlertContext from '@/context/AlertContext';

interface AlertProps {
  iconComponent: any;
}

const Alert = ({iconComponent}: AlertProps): JSX.Element => {
  const {isAlertActive, setAlertActive} = useContext(AlertContext)

  useEffect(() => {
    if(!isAlertActive) return

    setTimeout(()=> {
      setAlertActive(false)
    }, 1500)
  }, [isAlertActive, setAlertActive])

  return (
    <AlertContainer className={isAlertActive ? 'active' : ''}>
      <AlertIconWrapper>
        {iconComponent}
      </AlertIconWrapper>
    </AlertContainer>
  )
}

export default Alert
