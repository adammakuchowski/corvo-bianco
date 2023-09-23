import styled from 'styled-components'

export const CheckoutContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

  @media (max-width: 601px) { 
    height: 100%;
  }
`

export const ContentsContainerWrapper = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 508px) {
    width: 90%;
  }
`

export const SummaryContainer = styled.div`
  border-top: solid 1px #C0C0C0;
  width: 75%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  @media (max-width: 1180px) {
    height: 100px;
  }

  @media (max-width: 601px) { 
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 508px) {
    width: 90%;
  }
`

export const SummaryTextWrapper = styled.div`
  font-size: 17px;
  font-weight: 600;

  @media (max-width: 1277px) {
    font-size: 15px;
  }
`
