import {cinzel} from '@/fonts/fonts'

import {HeaderNameContainer, HeaderNameWrapper} from './HeaderNameStyled'

interface HeaderNameProps {
  text?: string;
}

const HeaderName = ({text = 'Corvo Bianco'}: HeaderNameProps): JSX.Element => (
  <HeaderNameContainer className={cinzel.className}>
    <HeaderNameWrapper>{text}</HeaderNameWrapper>
  </HeaderNameContainer>
)

export default HeaderName
