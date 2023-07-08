import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import HeaderName from '@/components/common/header_name/HeaderName'
import TextButton from '@/components/common/buttons/text_button/TextButton'
import {HeaderContainer, BackHomeButtonWrapper} from './HeaderStyled'

interface HeaderProps {
  className: string;
}

const Header = ({className}: HeaderProps): JSX.Element => {
  const router = useRouter()

  const toHome = () => {
    router.push('/')
  }

  return (
    <HeaderContainer className={className}>
      <BackHomeButtonWrapper>
        <TextButton content='back to home' upperCase={false} buttonAction={toHome} />
      </BackHomeButtonWrapper>
      <HeaderName />
    </HeaderContainer>
  )
}

export default Header
