import {cinzel} from '@/fonts/fonts'

import {
  SubectionNameContainer,
  SubectionNameTextWrapper,
} from './SubectionNameStyled'

interface SubectionNameProps {
  text: string;
}

const SubectionName = ({text}: SubectionNameProps): JSX.Element => (
  <SubectionNameContainer>
      <SubectionNameTextWrapper className={cinzel.className}>{text}</SubectionNameTextWrapper>
  </SubectionNameContainer>
)

export default SubectionName
