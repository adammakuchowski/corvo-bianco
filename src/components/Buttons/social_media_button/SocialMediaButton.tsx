import {SocialMediaButtonContainer} from './SocialMediaButtonStyled'

interface SocialMediaButtonProps {
  iconComponent: any;
  iconAction?: Function;
}

const SocialMediaButton = ({iconComponent, iconAction}: SocialMediaButtonProps): JSX.Element => {
  const iconActionHandler = () => {
    iconAction && iconAction()
  }

  return (
    <SocialMediaButtonContainer onClick={iconActionHandler}>
      {iconComponent}
    </SocialMediaButtonContainer>
  )
}

export default SocialMediaButton

