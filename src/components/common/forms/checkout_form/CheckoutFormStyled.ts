import styled from 'styled-components'

export const CheckoutFormContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FromWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: solid 1px #C0C0C0;
`

export const ContactDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
`

export const ContactDetailsInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PersonDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PersonDetailsInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

export const AdressDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    &:nth-child(2) {
      margin-bottom: 20px;
    }
  }
`

export const CountryDetailsInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

export const PaymentDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

    > * {
    &:nth-child(2) {
      margin-bottom: 20px;
    }
  }
`

export const PaymentDetailsInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`
