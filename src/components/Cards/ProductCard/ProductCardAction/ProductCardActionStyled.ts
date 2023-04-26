import styled from 'styled-components'

export const ProductCardActiveContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProductCardNotActiveContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ProductName = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: #a6a6a6;
`

export const ProductDataWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
      &:nth-child(2) {
        font-size: 22px;
        letter-spacing: 1px;
        color: #708238;
        font-size: 17px;
      }
    }
`

export const ProductQualityStars = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
