import {
  IconActionButtonContainer,
  IconActionButtonWrapper,
} from './IconActionButtonStyled'

interface IconActionButtonProps {
  iconComponent: any;
  iconAction?: Function;
}

const IconActionButton = ({iconComponent, iconAction}: IconActionButtonProps): JSX.Element => {
  const onIconAction = () => iconAction && iconAction()

  return (
    <IconActionButtonContainer onClick={onIconAction}>
      <IconActionButtonWrapper>
        {iconComponent}
      </IconActionButtonWrapper>
    </IconActionButtonContainer>
  )
}

export default IconActionButton

