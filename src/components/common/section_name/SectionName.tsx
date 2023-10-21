import {cinzel} from '@/fonts/fonts'

import {
  SectionNameContainer,
  SectionNameTextWrapper,
} from './SectionNameStyled'

interface SectionNameProps {
  text: string;
}

const SectionName = ({text}: SectionNameProps): JSX.Element => (
  <SectionNameContainer>
    <SectionNameTextWrapper className={cinzel.className}>{text}</SectionNameTextWrapper>
  </SectionNameContainer>
)

export default SectionName
