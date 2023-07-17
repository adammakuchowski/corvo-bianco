import {useReducer} from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import {
  inEmptyString,
  isCardNumberValid,
  isEmailValid,
  isStringValid,
} from '@/utils/inputValidators'
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
import {fromInitState} from './formState'
import SectionName from '../../section_name/SectionName'
import SubectionName from '../../subsection_name/SubectionName'
import {formRecuder} from './reducer'
import {
  SET_ADRESS,
  SET_ADRESS_ERROR,
  SET_CARD_NUMBER,
  SET_CARD_NUMBER_ERROR,
  SET_CITY,
  SET_CITY_ERROR,
  SET_COUNTRY,
  SET_COUNTRY_ERROR,
  SET_EMAIL, 
  SET_EMAIL_ERROR,
  SET_NAME,
  SET_NAME_ERROR,
  SET_POSTAL_CODE,
  SET_POSTAL_CODE_ERROR,
  SET_SURNAME,
  SET_SURNAME_ERROR,
} from './constants'

const CheckoutForm = () => {
  const [fromState, dispatch] = useReducer(formRecuder, fromInitState)

  const emailValidator = () => dispatch({type: SET_EMAIL_ERROR, value: !isEmailValid(fromState.email), key: 'emailError'})

  const textValidator = (
    value: string,
    errorActionType: string,
    key: string,
  ) => dispatch({type: errorActionType, value: !isStringValid(value), key})

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
                onChange={(e) => dispatch({type: SET_EMAIL, value: e.target.value, key: 'email'})}
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
                onChange={(e) => dispatch({type: SET_NAME, value: e.target.value, key: 'name'})}
                onBlur={() => textValidator(fromState.name, SET_NAME_ERROR, 'nameError')}
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
                onChange={(e) => dispatch({type: SET_SURNAME, value: e.target.value, key: 'surname'})}
                onBlur={() => textValidator(fromState.name, SET_SURNAME_ERROR, 'surnameError')}
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
                onChange={(e) => dispatch({type: SET_ADRESS, value: e.target.value, key: 'adress'})}
                onBlur={() => dispatch({type: SET_ADRESS_ERROR, value: inEmptyString(fromState.adress), key: 'adressError'})}
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
                onChange={(e) => dispatch({type: SET_POSTAL_CODE, value: e.target.value, key: 'postalCode'})}
                onBlur={() => dispatch({type: SET_POSTAL_CODE_ERROR, value: inEmptyString(fromState.postalCode), key: 'postalCodeError'})}
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
                onChange={(e) => dispatch({type: SET_CITY, value: e.target.value, key: 'city'})}
                onBlur={() => textValidator(fromState.city, SET_CITY_ERROR, 'cityError')}
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
                onChange={(e) => dispatch({type: SET_COUNTRY, value: e.target.value, key: 'country'})}
                onBlur={() => textValidator(fromState.country, SET_COUNTRY_ERROR, 'countryError')}
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
                onChange={(e) => dispatch({type: SET_CARD_NUMBER, value: e.target.value, key: 'cardNumber'})}
                onBlur={() => dispatch({type: SET_CARD_NUMBER_ERROR, value: isCardNumberValid(fromState.cardNumber), key: 'cardNumberError'})}
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
              />
            </FormControl>
            <FormControl sx={{width: '45ch'}}>
              <TextField
                id='outlined-basic'
                label='CVC'
                variant='outlined'
                color='success'
                required
              />
            </FormControl>
          </PaymentDetailsInputWrapper>
        </PaymentDetailsWrapper>
      </FromWrapper>
    </CheckoutFormContainer>
  )
}

export default CheckoutForm
