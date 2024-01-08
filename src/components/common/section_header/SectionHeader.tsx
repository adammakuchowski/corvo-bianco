import {cinzel, greatVibes} from '@/fonts/fonts'

import {
  SectionHeaderContainer,
  SectionHeaderContentWrapper,
  SectionHeaderTitleWrapper,
  SectionHeaderTextWrapper
} from './SectionHeaderStyled'

interface SectionHeaderProps {
  title: string;
  text: string;
}

const SectionHeader = ({title, text}: SectionHeaderProps): JSX.Element => (
  <SectionHeaderContainer>
    <SectionHeaderContentWrapper>
      <SectionHeaderTitleWrapper className={greatVibes.className}>{title}</SectionHeaderTitleWrapper>
      <SectionHeaderTextWrapper className={cinzel.className}>{text}</SectionHeaderTextWrapper>
    </SectionHeaderContentWrapper>
  </SectionHeaderContainer>
)

export default SectionHeader
