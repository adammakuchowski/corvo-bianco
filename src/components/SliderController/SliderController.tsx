import {useState} from 'react';
import {ImageCardSwitcherContainer} from './SliderControllerStyled'
import TileButton from './TileButton/TileButton';

interface ImageCardSwitcherProps {

}

const SliderController = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const disactiveTiles = () => {
    setActive(false)
  }

  return (
    <ImageCardSwitcherContainer>
      <TileButton active={active} disactiveTiles={disactiveTiles}></TileButton>
      <TileButton active={active} disactiveTiles={disactiveTiles}></TileButton>
      <TileButton active={active} disactiveTiles={disactiveTiles}></TileButton>
    </ImageCardSwitcherContainer>
  )
}

export default SliderController
