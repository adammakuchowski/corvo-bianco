import {cinzel, greatVibes} from '@/pages'
import {
  SectionHeaderContainer,
  SectionHeaderContentWrapper,
  SectionHeaderTitleWrapper,
  SectionHeaderTextWrapper,
} from './SectionHeaderStyled'

interface SectionHeaderProps {
  title: string;
  text: string;
}

const SectionHeader = ({title, text}: SectionHeaderProps): JSX.Element => {

  return (
    <SectionHeaderContainer>
      <SectionHeaderContentWrapper>
        <SectionHeaderTitleWrapper className={greatVibes.className}>{title}</SectionHeaderTitleWrapper>
        <SectionHeaderTextWrapper className={cinzel.className}>{text}</SectionHeaderTextWrapper>
      </SectionHeaderContentWrapper>
    </SectionHeaderContainer>
  )
}

export default SectionHeader
