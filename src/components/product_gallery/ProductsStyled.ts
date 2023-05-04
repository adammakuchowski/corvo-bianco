import styled from 'styled-components'

export const ProductGalleryContainer = styled.div`

`

export const ProductGalleryContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface ProductsPageContainerPops {
  viewAll: boolean;
}

export const ProductsPageContainer = styled.div`
  margin: 50px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  transition: all 0.8s ease-in-out;
  height: ${({viewAll}: ProductsPageContainerPops) => viewAll ? '1620px' : '1090px'};
`
