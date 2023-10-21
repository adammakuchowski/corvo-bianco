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
import {getCheckoutFromState, updateCheckoutForm} from '../checkoutSlice'

const CheckoutForm = () => {
  const dispatch = useDispatch()
  const fromState = useSelector(getCheckoutFromState)

  const emailValidator = () => dispatch(updateCheckoutForm({value: !isEmailValid(fromState.email.value), objectKey: 'email', propertyKey: 'error'}))

  const textValidator = (
    value: string,
    objectKey: string,
    propertyKey: string,
  ) => dispatch(updateCheckoutForm({value: !isStringValid(value), objectKey, propertyKey}))

  return (
    <CheckoutFormContainer>
      <SectionName text='Payment Details' />
      <FromWrapper>
        <ContactDetailsWrapper>
          <SubectionName text='Contact' />
          <ContactDetailsInputWrapper>
            <FormControl>
              <TextField
                id='outlined-basic'
                label='E-mail'
                variant='outlined'
                color='success'
                required
                type='email'
                value={fromState.email.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'email', propertyKey: 'value'}))}
                onBlur={emailValidator}
                error={fromState.email.error}
              />
            </FormControl>
          </ContactDetailsInputWrapper>
        </ContactDetailsWrapper>
        <PersonDetailsWrapper>
          <SubectionName text='Person Details' />
          <PersonDetailsInputWrapper>
            <FormControl sx={{width: '45%'}}>
              <TextField
                id='outlined-basic'
                label='Name'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.name.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'name', propertyKey: 'value'}))}
                onBlur={() => textValidator(fromState.name.value, 'name', 'error')}
                error={fromState.name.error}
              />
            </FormControl>
            <FormControl sx={{width: '45%'}}>
              <TextField
                id='outlined-basic'
                label='Surname'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.surname.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'surname', propertyKey: 'value'}))}
                onBlur={() => textValidator(fromState.name.value, 'surname', 'error')}
                error={fromState.surname.error}
              />
            </FormControl>
          </PersonDetailsInputWrapper>
        </PersonDetailsWrapper>
        <AdressDetailsWrapper>
          <SubectionName text='Adress Details' />
          <FormControl>
            <TextField
              id='outlined-basic'
              label='Adress'
              variant='outlined'
              color='success'
              required
              type='text'
              value={fromState.adress.value}
              onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'adress', propertyKey: 'value'}))}
              onBlur={() => dispatch(
                updateCheckoutForm({
                  value: inEmptyString(fromState.adress.value),
                  objectKey: 'adress',
                  propertyKey: 'error',
                })
              )}
              error={fromState.adress.error}
            />
          </FormControl>
          <CountryDetailsInputWrapper>
            <FormControl>
              <TextField
                id='outlined-basic'
                label='Postal Code'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.postalCode.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'postalCode', propertyKey: 'value'}))}
                onBlur={() => dispatch(
                  updateCheckoutForm({
                    value: inEmptyString(fromState.postalCode.value),
                    objectKey: 'postalCode',
                    propertyKey: 'error',
                  })
                )}
                error={fromState.postalCode.error}
              />
            </FormControl>
            <FormControl>
              <TextField
                id='outlined-basic'
                label='City'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.city.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'city', propertyKey: 'value'}))}
                onBlur={() => textValidator(fromState.city.value, 'city', 'error')}
                error={fromState.city.error}
              />
            </FormControl>
            <FormControl>
              <TextField
                id='outlined-basic'
                label='Country'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.country.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'country', propertyKey: 'value'}))}
                onBlur={() => textValidator(fromState.country.value, 'country', 'error')}
                error={fromState.country.error}
              />
            </FormControl>
          </CountryDetailsInputWrapper>
        </AdressDetailsWrapper>
        <PaymentDetailsWrapper>
          <SubectionName text='Payment Details' />
          <FormControl>
            <TextField
              id='outlined-basic'
              label='Card Number'
              variant='outlined'
              color='success'
              required
              type='text'
              value={fromState.cardNumber.value}
              onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'cardNumber', propertyKey: 'value'}))}
              onBlur={() => dispatch(
                updateCheckoutForm({
                  value: !isCardNumberValid(fromState.cardNumber.value),
                  objectKey: 'cardNumber',
                  propertyKey: 'error',
                })
              )}
              error={fromState.cardNumber.error}
            />
          </FormControl>
          <PaymentDetailsInputWrapper>
            <FormControl sx={{width: '45%'}}>
              <TextField
                id='outlined-basic'
                label='MM / YY'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.cardDate.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'cardDate', propertyKey: 'value'}))}
                onBlur={() => dispatch(
                  updateCheckoutForm({
                    value: !isCardDateValid(fromState.cardDate.value),
                    objectKey: 'cardDate',
                    propertyKey: 'error',
                  })
                )}
                error={fromState.cardDate.error}
              />
            </FormControl>
            <FormControl sx={{width: '45%'}}>
              <TextField
                id='outlined-basic'
                label='CVC'
                variant='outlined'
                color='success'
                required
                type='text'
                value={fromState.cardCvc.value}
                onChange={(e) => dispatch(updateCheckoutForm({value: e.target.value, objectKey: 'cardCvc', propertyKey: 'value'}))}
                onBlur={() => dispatch(
                  updateCheckoutForm({
                    value: !isCardCvcValid(fromState.cardCvc.value),
                    objectKey: 'cardCvc',
                    propertyKey: 'error',
                  })
                )}
                error={fromState.cardCvc.error}
              />
            </FormControl>
          </PaymentDetailsInputWrapper>
        </PaymentDetailsWrapper>
      </FromWrapper>
    </CheckoutFormContainer>
  )
}

export default CheckoutForm
