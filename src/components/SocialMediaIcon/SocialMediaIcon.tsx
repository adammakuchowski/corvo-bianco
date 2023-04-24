import {SocialMediaIconContainer} from './SocialMediaIconStyled';

interface SocialMediaIconProps {
  iconComponent: any;
  iconAction?: Function;
}

const SocialMediaIcon = ({iconComponent, iconAction}: SocialMediaIconProps): JSX.Element => {
  const iconActionHandler = () => {
    iconAction && iconAction()
  }

  return (
    <SocialMediaIconContainer onClick={iconActionHandler}>
      {iconComponent}
    </SocialMediaIconContainer>
  )
}

export default SocialMediaIcon

