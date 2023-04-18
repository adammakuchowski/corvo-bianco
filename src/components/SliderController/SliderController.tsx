import {useState} from 'react'
import {SliderControllerContainer} from './SliderControllerStyled'
import TileButton from './TileButton/TileButton'

interface SliderControllerProps {

}

const SliderController = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const disactiveTiles = () => {
    setActive(false)
  }

  return (
    <SliderControllerContainer>
      <TileButton active={active} disactiveTiles={disactiveTiles}></TileButton>
      <TileButton active={active} disactiveTiles={disactiveTiles}></TileButton>
      <TileButton active={active} disactiveTiles={disactiveTiles}></TileButton>
    </SliderControllerContainer>
  )
}

export default SliderController
