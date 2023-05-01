import {SliderControllerContainer} from './SliderControllerStyled'
import TileButton from './tile_button/TileButton'

interface SliderControllerProps {
  imgIndex: number;
  setImgIndex: Function;
  imgs: any[];
}

const SliderController = ({imgIndex, setImgIndex, imgs}: SliderControllerProps): JSX.Element => {
  return (
    <SliderControllerContainer>
      {imgs.map((img, index) => (
        <TileButton
          key={index}
          index={index}
          setImgIndex={setImgIndex}
          imgIndex={imgIndex}
        />
      ))}
    </SliderControllerContainer>
  )
}

export default SliderController
