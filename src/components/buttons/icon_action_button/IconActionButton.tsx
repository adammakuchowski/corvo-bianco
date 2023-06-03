import {useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import {
  IconActionButtonContainer,
  IconActionButtonWrapper,
} from './IconActionButtonStyled'

interface IconActionButtonProps {
  iconComponent: any;
  iconAction?: () => void;
  progressEffect?: boolean;
}

const IconActionButton = ({iconComponent, iconAction, progressEffect = false}: IconActionButtonProps): JSX.Element => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const onIconAction = () => {
    if (!iconAction) return

    iconAction()
    if (progressEffect && !isProcessing) {
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)
    }
  }

  return (
    <IconActionButtonContainer>
      {isProcessing ?
        <CircularProgress sx={{color: '#8ea648'}} /> :
        <IconActionButtonWrapper onClick={onIconAction}>
          {iconComponent}
        </IconActionButtonWrapper>
      }
    </IconActionButtonContainer>
  )
}

export default IconActionButton

