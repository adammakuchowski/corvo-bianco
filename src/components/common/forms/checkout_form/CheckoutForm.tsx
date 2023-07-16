import {useReducer, useState} from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import {
  isEmailValid,
  isStringValid,
} from '@/utils/regexValidators'
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
  SET_EMAIL, 
  SET_EMAIL_ERROR,
} from './constants'

const CheckoutForm = () => {
  const [fromState, dispatch] = useReducer(formRecuder, fromInitState)

  const emailValidator = () => dispatch({type: SET_EMAIL_ERROR, value: !isEmailValid(fromState.email)})

  const textValidator = (
    value: string,
    errorSetter: (value: boolean) => void
  ) => errorSetter(!isStringValid(value))

  return (
    <CheckoutFormContainer>
      <SectionName text='Payment Details' />
      <FromWrapper>
        <ContactDetailsWrapper>
          <SubectionName text='Contact' />
          <ContactDetailsInputWrapper>
            <FormControl sx={{maxWidth: '80ch'}}>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                color='success'
                required
                type="email"
                value={fromState.email}
                onChange={(e) => dispatch({type: SET_EMAIL, value: e.target.value})}
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
                id="outlined-basic"
                label="Name"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
            <FormControl sx={{width: '45ch'}}>
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
          </PersonDetailsInputWrapper>
        </PersonDetailsWrapper>
        <AdressDetailsWrapper>
          <SubectionName text='Adress Details' />
          <CountryDetailsInputWrapper>
            <FormControl sx={{width: '80ch'}}>
              <TextField
                id="outlined-basic"
                label="Adress"
                variant="outlined"
                color='success'
                required
                type="text"
              />
            </FormControl>
          </CountryDetailsInputWrapper>
          <CountryDetailsInputWrapper>
            <FormControl sx={{width: '20ch'}}>
              <TextField
                id="outlined-basic"
                label="Postal Code"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
            <FormControl sx={{width: '25ch'}}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
            <FormControl sx={{width: '25ch'}}>
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
          </CountryDetailsInputWrapper>
        </AdressDetailsWrapper>
        <PaymentDetailsWrapper>
          <SubectionName text='Payment Details' />
          <PaymentDetailsInputWrapper>
            <FormControl sx={{width: '80ch'}}>
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
          </PaymentDetailsInputWrapper>
          <PaymentDetailsInputWrapper>
            <FormControl sx={{width: '30ch'}}>
              <TextField
                id="outlined-basic"
                label="MM / YY"
                variant="outlined"
                color='success'
                required
              />
            </FormControl>
            <FormControl sx={{width: '45ch'}}>
              <TextField
                id="outlined-basic"
                label="CVC"
                variant="outlined"
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
