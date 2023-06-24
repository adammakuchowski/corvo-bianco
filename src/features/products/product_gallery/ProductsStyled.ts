import styled from 'styled-components'

export const ProductGalleryContainer = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  margin-top: 30px;
  
  &.active {
    opacity: 1;
  }
`

export const NavigationWrapper = styled.div`
  margin-bottom: 50px;
`

export const ButtonWrapper = styled.div`
  width: 70%;
  padding: 5px;
  min-height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const ProductGalleryContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface ProductsListContainerPops {
  viewAll: boolean;
  productsCount: number;
}

export const ProductsListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: all 0.8s ease-in-out;

  height: ${({viewAll, productsCount}: ProductsListContainerPops) => {
    const productsListLevels = productsCount / 4
    const levelsRounded = Math.ceil(productsListLevels)
    const height = viewAll ? 525 * levelsRounded : 525

    return `${height}px`;
  }};
`
