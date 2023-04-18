import {useEffect, useState} from 'react'
import {TileButtonContainer} from './TileButtonStyled'

interface TileButtonProps {
  active: boolean;
  disactiveTiles: Function;
}

const TileButton = ({active, disactiveTiles}: TileButtonProps): JSX.Element => {
  const [buttonActive, setButtonActive] = useState<boolean>(active)
  const [backgroundColor, setBackgroundColor] = useState<string>('red')

  return (
    <TileButtonContainer
      // onClick={}
      style={{backgroundColor: `${backgroundColor}`}}
    >
    </TileButtonContainer>
  )
}

export default TileButton
