import {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import IconActionButton from '../buttons/icon_action_button/IconActionButton'
import {CounterContainer, CounterWrapper, CountNumber, ButtonWrapper} from './CounterStyled'
import Button from '../buttons/button/Button'

const Counter = (): JSX.Element => {
  const [countNumber, setCountNumber] = useState<number>(1)

  const incrementCountNumber = () => setCountNumber(countNumber + 1)
  const decrementCountNumber = () => setCountNumber(countNumber > 1 ? countNumber - 1 : countNumber)

  return (
    <CounterContainer>
      <CounterWrapper style={{fontSize: '25px'}}>
        <IconActionButton iconComponent={<AiOutlineMinus />} iconAction={decrementCountNumber} />
        <CountNumber>{countNumber}</CountNumber>
        <IconActionButton iconComponent={<AiOutlinePlus />} iconAction={incrementCountNumber} />
      </CounterWrapper>
      <ButtonWrapper>
        <Button text='Add to cart'/>
      </ButtonWrapper>
    </CounterContainer>
  )
}

export default Counter
