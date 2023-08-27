import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 75%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  position: relative;

  &.active {
    opacity: 1;
  }
`

export const SummaryContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CreateOrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OrderCreatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  font-weight: 500;
`

export const IconWrapper = styled.div`
  font-size: 50px;
`

export const ResultOrderTextWrapper = styled.div`
  font-size: 20px;
`
