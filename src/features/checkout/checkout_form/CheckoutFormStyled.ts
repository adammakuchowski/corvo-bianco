import styled from 'styled-components'

export const CheckoutFormContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FromWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: solid 1px #C0C0C0;
  padding-right: 5%;

  @media (max-width: 1180px) {
    border-right: transparent;
  }
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
  justify-content: space-between;
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
  justify-content: space-between;
  align-items: center;
  gap: 10px;
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
  align-items: center;
  justify-content: space-between;
`
