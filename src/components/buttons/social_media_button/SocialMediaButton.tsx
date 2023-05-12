import {SocialMediaButtonContainer} from './SocialMediaButtonStyled'

interface SocialMediaButtonProps {
  iconComponent: any;
  iconAction?: Function;
  fontSize?: string;
}

const SocialMediaButton = ({iconComponent, iconAction, fontSize = '20px'}: SocialMediaButtonProps): JSX.Element => {
  const iconActionHandler = () => {
    iconAction && iconAction()
  }

  return (
    <SocialMediaButtonContainer onClick={iconActionHandler} style={{fontSize: fontSize}}>
      {iconComponent}
    </SocialMediaButtonContainer>
  )
}

export default SocialMediaButton

