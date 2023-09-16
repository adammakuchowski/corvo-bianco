import styled from 'styled-components'

interface FavoriteProductEntryContainerProps {
  isProductInCart: boolean;
}

export const FavoriteProductEntryContainer = styled.div<FavoriteProductEntryContainerProps>`
  display: flex;
  background-color: ${({isProductInCart}: FavoriteProductEntryContainerProps) => isProductInCart ? '#c5d298' : '#1111'};
  transition: all 0.4s ease-in-out;
  padding: 10px 15px 10px 10px;
`

export const ImgContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  justify-content: center;
`

export const ImgWrapper = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContentHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ProductNameWrapper = styled.div`
  font-weight: 600;
`

export const HeaderButtonWrapper = styled.div`

`

export const ContentBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductPriceWrapper = styled.div`

`

export const IconWrapper = styled.div`
  font-size: 20px;
`
