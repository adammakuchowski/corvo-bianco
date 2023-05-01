import {
  IconActionButtonContainer,
  IconActionButtonWrapper,
} from './IconActionButtonStyled'

interface IconActionButtonProps {
  iconComponent: any;
  iconAction?: Function;
}

const IconActionButton = ({iconComponent, iconAction}: IconActionButtonProps): JSX.Element => {
  const iconActionHandler = () => {
    iconAction && iconAction()
  }

  return (
    <IconActionButtonContainer onClick={iconActionHandler}>
      <IconActionButtonWrapper>
        {iconComponent}
      </IconActionButtonWrapper>
    </IconActionButtonContainer>
  )
}

export default IconActionButton

