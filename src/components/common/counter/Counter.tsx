import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import {
  CounterContainer,
  CounterWrapper,
  CountNumber,
} from './CounterStyled'
import IconActionButton from '../buttons/icon_action_button/IconActionButton'

interface CounterProps {
  countNumber: number;
  setCountNumber: (value: number) => void;
}

const Counter = ({countNumber, setCountNumber}: CounterProps): JSX.Element => {
  const incrementCountNumber = () => setCountNumber(countNumber + 1)
  const decrementCountNumber = () => setCountNumber(countNumber > 1 ? countNumber - 1 : countNumber)

  return (
    <CounterContainer>
      <CounterWrapper style={{fontSize: '25px'}}>
        <IconActionButton iconComponent={<AiOutlineMinus />} iconAction={decrementCountNumber} />
        <CountNumber>{countNumber}</CountNumber>
        <IconActionButton iconComponent={<AiOutlinePlus />} iconAction={incrementCountNumber} />
      </CounterWrapper>
    </CounterContainer>
  )
}

export default Counter
