import styled from 'styled-components'

export const CheckoutContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

interface ProductCheckoutContentsContainerProps {
  overflow: string;
}

export const ProductCheckoutContentsContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: ${({overflow}: ProductCheckoutContentsContainerProps) => overflow};
`

export const ContentsContainerWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SummaryContainer = styled.div`
  border-top: solid 1px #C0C0C0;
  width: 75%;
  height: 13%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SummaryTextWrapper = styled.div`
  font-size: 17px;
  font-weight: 600;
`
