import {Link} from 'react-scroll'
import {IconButtonContainer} from './IconButtonStyled'

interface IconButtonProps {
  iconComponent: any;
  iconAction?: () => void;
  fontSize?: string;
  sectionName?: string;
}

const IconButton = ({iconComponent, iconAction, fontSize = '20px', sectionName}: IconButtonProps): JSX.Element => {
  const onIconAction = () => iconAction && iconAction()
  
  return (
    <Link to={sectionName ?? ''} smooth={true} duration={500}>
      <IconButtonContainer onClick={onIconAction} style={{fontSize: fontSize}}>
        {iconComponent}
      </IconButtonContainer>
    </Link>
  )
}

export default IconButton

