import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import HeaderName from '@/components/common/header_name/HeaderName'
import TextButton from '@/components/common/buttons/text_button/TextButton'
import {HeaderContainer, ComeBackButtonWrapper} from './HeaderStyled'

const Header = (): JSX.Element => {
  const router = useRouter()
  const [isActive, setIsActive] = useState<boolean>(false)

  const toHome = () => {
    router.push('/')
  }

  useEffect(() => {
    setIsActive(true)
  }, []);
  
  return (
    <HeaderContainer className={isActive ? 'active' : ''}>
      <ComeBackButtonWrapper>
        <TextButton content='back to home' upperCase={false} buttonAction={toHome} />
      </ComeBackButtonWrapper>
      <HeaderName />
    </HeaderContainer>
  )
}

export default Header
