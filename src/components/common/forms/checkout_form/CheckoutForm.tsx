import {useState} from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import {
  isEmailValid,
  isStringValid,
} from '@/utils/validators'
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
import SectionName from '../../section_name/SectionName'
import SubectionName from '../../subsection_name/SubectionName'

const CheckoutForm = () => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [nameError, setNameError] = useState<boolean>(false)

  const emailValidator = () => {
    if (!email) return setEmailError(false)

    setEmailError(!isEmailValid(email))
  }

  const textValidator = () => {
    if (!name) return setNameError(false)

    setNameError(!isStringValid(name))
  }

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={emailValidator}
                error={!!emailError}
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
                required />
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
