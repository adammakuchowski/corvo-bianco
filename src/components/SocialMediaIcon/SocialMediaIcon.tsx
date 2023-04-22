
interface SocialMediaIconProps {
  iconComponent: any;
}

const SocialMediaIcon = ({iconComponent}: SocialMediaIconProps): JSX.Element => {

  return (
    <div>
      {iconComponent}
    </div>
  )
}

export default SocialMediaIcon

