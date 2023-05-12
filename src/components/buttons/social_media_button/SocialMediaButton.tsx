import {Link} from 'react-scroll'
import {SocialMediaButtonContainer} from './SocialMediaButtonStyled'

interface SocialMediaButtonProps {
  iconComponent: any;
  iconAction?: Function;
  fontSize?: string;
  sectionName?: string;
}

const SocialMediaButton = ({iconComponent, iconAction, fontSize = '20px', sectionName}: SocialMediaButtonProps): JSX.Element => {
  const iconActionHandler = () => {
    iconAction && iconAction()
  }

  return (
    <Link to={sectionName ?? ''} smooth={true} duration={500}>
      <SocialMediaButtonContainer onClick={iconActionHandler} style={{fontSize: fontSize}}>
        {iconComponent}
      </SocialMediaButtonContainer>
    </Link>
  )
}

export default SocialMediaButton

