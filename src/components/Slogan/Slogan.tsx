import {cinzel, greatVibes} from '@/pages'
import {
  SloganContainer,
  SloganContentWrapper,
  VineyardWrapper,
  WecomeWrapper,
} from './SloganStyled'

const Slogan = (): JSX.Element => {

  return (
    <SloganContainer>
      <SloganContentWrapper>
        <WecomeWrapper className={greatVibes.className}>Welcome</WecomeWrapper>
        <VineyardWrapper className={cinzel.className}>VINEYARD</VineyardWrapper>
      </SloganContentWrapper>
    </SloganContainer>
  )
}

export default Slogan
