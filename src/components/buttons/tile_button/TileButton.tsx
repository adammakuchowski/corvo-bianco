import {useEffect, useState} from 'react'
import {TileButtonContainer} from './TileButtonStyled'

interface TileButtonProps {
  index: number;
  imgIndex: number;
  setImgIndex: (value: number) => void;
}

const TileButton = ({index, setImgIndex, imgIndex}: TileButtonProps): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = useState<string>('red')

  useEffect(() => {
    const activeColor = index === imgIndex ? '#708238' : '#949494'
    setBackgroundColor(activeColor)
  }, [imgIndex])

  return (
    <TileButtonContainer
      onClick={() => setImgIndex(index)}
      style={{backgroundColor: `${backgroundColor}`}}
    >
    </TileButtonContainer>
  )
}

export default TileButton
