import {useDispatch, useSelector} from 'react-redux'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import {
  inEmptyString,
  isCardCvcValid,
  isCardDateValid,
  isCardNumberValid,
  isEmailValid,
  isStringValid,
} from '@/utils/inputValidators'
import SectionName from '@/components/common/section_name/SectionName'
import SubectionName from '@/components/common/subsection_name/SubectionName'
import {
  CountryDetailsInputWrapper,
  AdressDetailsWrapper,
  CheckoutFormContainer,
  ContactDetailsWrapper,
  FromWrapper,
  PersonDetailsInputWrapper,
  PersonDetailsWrapper,
  ContactDetailsInputWrapper,
  PaymentDetailsWrapper,
  PaymentDetailsInputWrapper,
} from './CheckoutFormStyled'
import {getCheckoutFromState, updateCheckoutform} from '../checkoutSlice'

const CheckoutForm = () => {
  const dispatch = useDispatch()
  const fromState = useSelector(getCheckoutFromState)

  const emailValidator = () => dispatch(updateCheckoutform({value: !isEmailValid(fromState.email), key: 'emailError'}))

  const textValidator = (
    value: string,
    key: string,
  ) => dispatch(updateCheckoutform({value: !isStringValid(value), key}))

  return (
    <CheckoutFormContainer>
      <SectionName text='Payment Details' />
      <FromWrapper>
        <ContactDetailsWrapper>
          <SubectionName text='Contact' />
          <ContactDetailsInputWrapper>
            <FormControl sx={{maxWidth: '80ch'}}>
              <TextField
                id='outlined-basic'
                label='E-mail'
                variant='outlined'
                color='success'
                required
                type='email'
                value={fromState.email}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'email'}))}
                onBlur={emailValidator}
                error={fromState.emailError}
              />
            </FormControl>
          </ContactDetailsInputWrapper>
        </ContactDetailsWrapper>
        <PersonDetailsWrapper>
          <SubectionName text='Person Details' />
          <PersonDetailsInputWrapper>
            <FormControl sx={{width: '30ch'}}>
              <TextField
                id='outlined-basic'
                label='Name'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.name}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'name'}))}
                onBlur={() => textValidator(fromState.name, 'nameError')}
                error={fromState.nameError}
              />
            </FormControl>
            <FormControl sx={{width: '45ch'}}>
              <TextField
                id='outlined-basic'
                label='Surname'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.surname}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'surname'}))}
                onBlur={() => textValidator(fromState.name, 'surnameError')}
                error={fromState.surnameError}
              />
            </FormControl>
          </PersonDetailsInputWrapper>
        </PersonDetailsWrapper>
        <AdressDetailsWrapper>
          <SubectionName text='Adress Details' />
          <CountryDetailsInputWrapper>
            <FormControl sx={{width: '80ch'}}>
              <TextField
                id='outlined-basic'
                label='Adress'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.adress}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'adress'}))}
                onBlur={() => dispatch(updateCheckoutform({value: inEmptyString(fromState.adress), key: 'adressError'}))}
                error={fromState.adressError}
              />
            </FormControl>
          </CountryDetailsInputWrapper>
          <CountryDetailsInputWrapper>
            <FormControl sx={{width: '20ch'}}>
              <TextField
                id='outlined-basic'
                label='Postal Code'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.postalCode}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'postalCode'}))}
                onBlur={() => dispatch(updateCheckoutform({value: inEmptyString(fromState.postalCode), key: 'postalCodeError'}))}
                error={fromState.postalCodeError}
              />
            </FormControl>
            <FormControl sx={{width: '25ch'}}>
              <TextField
                id='outlined-basic'
                label='City'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.city}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'city'}))}
                onBlur={() => textValidator(fromState.city, 'cityError')}
                error={fromState.cityError}
              />
            </FormControl>
            <FormControl sx={{width: '25ch'}}>
              <TextField
                id='outlined-basic'
                label='Country'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.country}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'country'}))}
                onBlur={() => textValidator(fromState.country, 'countryError')}
                error={fromState.countryError}
              />
            </FormControl>
          </CountryDetailsInputWrapper>
        </AdressDetailsWrapper>
        <PaymentDetailsWrapper>
          <SubectionName text='Payment Details' />
          <PaymentDetailsInputWrapper>
            <FormControl sx={{width: '80ch'}}>
              <TextField
                id='outlined-basic'
                label='Card Number'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.cardNumber}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'cardNumber'}))}
                onBlur={() => dispatch(updateCheckoutform({value: !isCardNumberValid(fromState.cardNumber), key: 'cardNumberError'}))}
                error={fromState.cardNumberError}
              />
            </FormControl>
          </PaymentDetailsInputWrapper>
          <PaymentDetailsInputWrapper>
            <FormControl sx={{width: '30ch'}}>
              <TextField
                id='outlined-basic'
                label='MM / YY'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.cardDate}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'cardDate'}))}
                onBlur={() => dispatch(updateCheckoutform({value: !isCardDateValid(fromState.cardDate), key: 'cardDateError'}))}
                error={fromState.cardDateError}
              />
            </FormControl>
            <FormControl sx={{width: '45ch'}}>
              <TextField
                id='outlined-basic'
                label='CVC'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.cardCvc}
                onChange={(e) => dispatch(updateCheckoutform({value: e.target.value, key: 'cardCvc'}))}
                onBlur={() => dispatch(updateCheckoutform({value: !isCardCvcValid(fromState.cardCvc), key: 'cardCvcError'}))}
                error={fromState.cardCvcError}
              />
            </FormControl>
          </PaymentDetailsInputWrapper>
        </PaymentDetailsWrapper>
      </FromWrapper>
    </CheckoutFormContainer>
  )
}

export default CheckoutForm
