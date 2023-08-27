import {useRouter} from 'next/router'
import HeaderName from '@/components/common/header_name/HeaderName'
import TextButton from '@/components/common/buttons/text_button/TextButton'
import {HeaderContainer, BackHomeButtonWrapper} from './HeaderStyled'
import {resetOrderCreateStatus} from '@/features/checkout/checkoutSlice'
import {clearCart} from '@/features/products/productsSlice'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '@/app/store'

interface HeaderProps {
  className: string;
}

const createOrderResultStatuses = ['succeeded', 'failed']

const Header = ({className}: HeaderProps): JSX.Element => {
  const dispatch = useDispatch()
  const router = useRouter()
  const orderCreateStatus = useSelector((state: AppState) => state.checkout.orderCreateStatus)

  const toHome = () => {
    router.push('/')

    if (createOrderResultStatuses.includes(orderCreateStatus)) {
      dispatch(resetOrderCreateStatus())
      dispatch(clearCart())
    }
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
